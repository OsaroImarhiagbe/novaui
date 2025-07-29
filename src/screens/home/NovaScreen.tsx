'use client'
import { useState,useEffect,useCallback } from "react"
import MessageItem from "@/components/MessageItem";
import { ConversationType } from "@/utils/types/types";
import { suggestComponents, generateCode } from "@/utils/data/data";
import { welcomeBackMessages,extractFormNameSimple, NovaAI} from "@/utils/data/data";
import {
    VisaChevronDownTiny,
    VisaChevronUpTiny,
    VisaMediaFastForwardTiny,
    VisaSettingsTiny,
    VisaMediaRewindTiny,
    GenericChatTiny
} from '@visa/nova-icons-react';
import {
    Button,
    Nav,
    Typography,
    Tab,
    TabSuffix,
    Tabs,
    UtilityFragment,
} from '@visa/nova-react';
import Styles from './styles.module.scss';

const NovaScreen = () => {
    const [value, setValue] = useState<string>('')
    const [conversation, setConversation] = useState<ConversationType[]>([])
    const [NovaAi, setNovaAi] = useState<boolean>(false)
    const [chatHistoryExpanded, setChatHistoryExpanded] = useState<boolean>(false);
    const [settingsExpanded, setSettingsExpanded] = useState<boolean>(false);
    const [welcomeBack,setWelcomeBack] = useState<string>('Welcome back')
    const [navExpanded, setNavExpanded] = useState<boolean>(false);
    const [chatHistory,setChatHistory] = useState<Record<string,ConversationType[]>>({})

    const id = 'nova-sidebar-navigation';
    const navRegionAriaLabel = 'Nova UI Sidebar Navigation';


    useEffect(() => {
        setWelcomeBack(welcomeBackMessages[Math.floor(Math.random() * welcomeBackMessages.length)])
    },[])


    useEffect(() => {
        // localStorage.clear()
        const history = localStorage.getItem('allMessages')
        if(history){
            const parse = JSON.parse(history)
            console.log('Parsed Data: ',parse)
            setChatHistory(parse)
        }
        console.log('History:',history)
    },[conversation])

    useEffect(() => {
        if (!value) return;
        try{
            const allMessages = {
                ...chatHistory,
                [value]: conversation
            }
            console.log('AllMessage',allMessages)
            localStorage.setItem('allMessages',JSON.stringify(allMessages))
        }catch(error){
            console.error('Error saving messages',error)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[conversation,value])

    // console.log('Object:',Object.keys(chatHistory))
    const handleSubmit = () => {
        if (value.trim() === '') return;
        try {
            setValue('')
            let AIresponse='';
            let suggested;
            let code='';
            let screenName='';
            setConversation(prev => [...prev, {
                user_id: 'user_id_1',
                role: 'user',
                message: value,
                date: new Date().toLocaleDateString()
            }])
            setNovaAi(true)
            if(!value.includes('Responsive')){
                AIresponse = NovaAI(value)
                setTimeout(() => {
                    setConversation((prev) => [
                        ...prev,
                        {
                            ai_id: 'ai_id_1',
                            role: 'ai',
                            message:`${AIresponse}"`,
                            date: new Date().toLocaleDateString()
                        }
                    ])
                    setNovaAi(false)
                }, 3000)
            }else{
                AIresponse = NovaAI(value)
                suggested = suggestComponents(value)
                screenName = extractFormNameSimple(value)
                code = generateCode({
                    components: suggested,
                    formName: screenName,
                })
                setTimeout(() => {
                    setConversation((prev) => [
                        ...prev,
                        {
                            ai_id: 'ai_id_1',
                            role: 'ai',
                            message:`${AIresponse}: "${value} ${code}"`,
                            date: new Date().toLocaleDateString()
                        }
                    ])
                    setNovaAi(false)
                }, 3000)
            }
        } catch (error) {
            console.log(`Error submitting message : ${error}`)
        }
    }

   
    const startNewChat = useCallback(() => {
        setConversation([]);
        setValue('');
    },[])
console.log('Chat Histry:',chatHistory)
    return (
         <div className="relative min-h-screen w-full overflow-hidden">
        <div
         className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
        <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
            <div id="layout" className={Styles.layoutContainer}>
          <Nav id={id} orientation='vertical' tag="aside" className="h-screen z-10" >
                    
          {navExpanded && ( <div
                        style={{
                            padding:10,
                        }}
                        className="bg-gray-300 h-screen">
                        <nav aria-label={navRegionAriaLabel} className="h-full flex flex-col">
                            <div className="flex flex-row justify-between items-center">
                                  {/* Header Section */}
                                  <UtilityFragment vPadding={24}>
                                    <Typography
                                    variant='headline-3'
                                    style={{
                                        fontSize:25
                                    }}
                                    className="text-black mb-4">
                                        NovaAI
                                    </Typography>
                                </UtilityFragment>
                            </div>
                                {/* New Chat Section */}
                                <UtilityFragment>
                                <Button
                                onClick={startNewChat}
                                className="w-full hover:bg-grey-500"
                                colorScheme='tertiary'
                                iconButton={false}
                                >
                                <GenericChatTiny className="mr-3"/>
                                <span className="text-black">New Chat</span>
                                </Button>
                                </UtilityFragment>

                                {/* Chat History Section */}
                                <Tab>
                                    <Button
                                    aria-expanded={chatHistoryExpanded}
                                    aria-controls={`${id}-chat-history-menu`}
                                    colorScheme='tertiary'
                                    onClick={() => setChatHistoryExpanded(!chatHistoryExpanded)}
                                    className="w-full justify-between text-white"
                                    >
                                        <div className="flex items-center">
                                        <GenericChatTiny className="mr-3"/>
                                            <span className="text-black">Chat History</span>
                                        </div>
                                        <TabSuffix element={chatHistoryExpanded ? <VisaChevronUpTiny color="#fff" /> : <VisaChevronDownTiny color="#fff"/>} />
                                         </Button>
                                <UtilityFragment vHide={!chatHistoryExpanded}>
                                    <Tabs orientation="vertical" id={`${id}-l1-label2-sub-menu`} aria-hidden={!chatHistoryExpanded}>
                                        
                                        {
                                            Object.entries(chatHistory).map((item,i) => {
                                                return (
                                                    <Tab key={i}>
                                                    <Button colorScheme='secondary' className="text-black" >{item[0]}</Button>
                                                </Tab>
                                                );
                                            })
                                        }
                                    </Tabs>
                                </UtilityFragment>
                                </Tab>
                                <div className="flex-1" />
                                {/* Settings Section */}
                                <UtilityFragment vPadding={20} vGap={8}>
                                    <Button
                                        aria-expanded={settingsExpanded}
                                        aria-controls={`${id}-settings-menu`}
                                        colorScheme='tertiary'
                                        onClick={() => setSettingsExpanded(!settingsExpanded)}
                                        className="w-full justify-between text-gray-300 hover:text-white"
                                    >
                                        <div className="flex items-center">
                                            <VisaSettingsTiny className="mr-3" color="#000" />
                                            <span className="text-black">Settings</span>
                                        </div>
                                        <TabSuffix element={settingsExpanded ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />} />
                                    </Button>
                                </UtilityFragment>
                            </nav>
                        </div>)}   
                </Nav>

                {/* Main Content Area */}
                <section className="text-white min-h-screen w-full relative flex-1">
                     { navExpanded ? <div
                        style={{
                            paddingTop:10,
                            padding:10,
                        }}
                        >
                            <UtilityFragment vGap={16}>
                                <Button
                                    aria-label="Expand sidebar"
                                    buttonSize="small"
                                    colorScheme="tertiary"
                                    iconButton
                                    onClick={() => setNavExpanded(!navExpanded)}
                                    className="text-gray-400 hover:text-white"
                                >
                                   <VisaMediaRewindTiny/>
                                </Button>
                            </UtilityFragment> 
                        </div> :  <div
                        style={{
                            paddingTop:10,
                            padding:10,
                        }}
                        >
                            <UtilityFragment vGap={16}>
                                <Button
                                    aria-label="Expand sidebar"
                                    buttonSize="small"
                                    colorScheme="tertiary"
                                    iconButton
                                    onClick={() => setNavExpanded(!navExpanded)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <VisaMediaFastForwardTiny />
                                </Button>
                            </UtilityFragment> 
                        </div>}
                    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 gap-12">
                        {/* Header */}
                        {conversation.length === 0 && (
                            <div className="text-center max-w-xl">
                                <Typography
                                className="text-black"
                                variant='headline-1'
                                style={{
                                    fontSize: 35,
                                    marginBottom: 30
                                }}>
                                   {`${welcomeBack} Emmanuel`} ✨
                                </Typography>
                                <Typography className="text-lg text-black" variant="subtitle-2">
                                    Describe the UI you want to build and NovaUI will suggest the components and code for you.
                                </Typography>
                            </div>
                        )}

                        {/* Chat Messages */}
                        {conversation.length > 0 && (
                            <div className="w-full max-w-4xl mx-auto flex flex-col gap-25 overflow-y-auto no-scrollbar x-10 py-10 h-[60vh]">
                                {conversation.map((item, i) => (
                                    <MessageItem
                                        key={i}
                                        message={item.message ?? ''}
                                        user_id={item.user_id ?? ''}
                                        date={item.date ?? ''}
                                        ai_id={item.ai_id ?? ''}
                                        role={item.role ?? 'user'}
                                        NovaAi={NovaAi}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Input Section */}
                        <div className="bg-white w-full max-w-4xl rounded-2xl flex items-center gap-10 px-6 py-3">
                            <input
                                className="placeholder-gray-400 text-black w-full p-6 focus:outline-none"
                                type='text'
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder="Describe your UI... e.g. login form with remember me"
                            />
                            {value && (
                                <Button
                                    onClick={handleSubmit}
                                    className="rounded-lg"
                                    buttonSize="large"
                                    disabled={NovaAi}
                                >
                                    {NovaAi ? 'Generating...' : 'Generate'}
                                </Button>
                            )}
                        </div>
                        <Typography className="text-black text-center text-sm max-w-2xl">
                            NovaUI may display suggested components and code based on your prompt. 
                            Always review generated code before implementation.
                        </Typography>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NovaScreen