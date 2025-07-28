'use client'
import { useState,useEffect } from "react"
import MessageItem from "@/components/MessageItem";
import { ConversationType } from "@/utils/types/types";
import { suggestComponents, generateCode } from "@/utils/data/data";
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
    const [navExpanded, setNavExpanded] = useState<boolean>(true);
    const [chatHistory,setChatHistory] = useState<Record<string,ConversationType[]>>({})

    const id = 'nova-sidebar-navigation';
    const navRegionAriaLabel = 'Nova UI Sidebar Navigation';



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

    console.log('Object:',Object.keys(chatHistory))
    const handleSubmit = () => {
        setNovaAi(true)
        if (value.trim() === '') return;
        try {
            setValue('')
            const suggested = suggestComponents(value)
            const code = generateCode({
                components: suggested,
                formName: 'RandomFunction',
            })
            setConversation(prev => [...prev, {
                user_id: 'user_id_1',
                role: 'user',
                message: value,
                date: new Date().toLocaleDateString()
            }])

            setTimeout(() => {
                setNovaAi(false)
                setConversation((prev) => [
                    ...prev,
                    {
                        ai_id: 'ai_id_1',
                        role: 'ai',
                        message: `NovaUI: Here's a basic component suggestion for: "${value} ${code}"`,
                        date: new Date().toLocaleDateString()
                    }
                ])
            }, 3000)
        } catch (error) {
            console.log(`Error submitting message : ${error}`)
        }
    }

   
    const startNewChat = () => {
        setConversation([]);
        setValue('');
    }
console.log('Chat Histry:',chatHistory)
    return (
         <div className="bg-red-500">
            <div id="layout" className={Styles.layoutContainer}>
          <Nav id={id} orientation='vertical' tag="aside" className="h-screen z-10" >
                    
          {navExpanded && ( <div
                        style={{
                            padding:10,
                        }}
                        className="bg-[#2C2D3A] h-screen">
                        <nav aria-label={navRegionAriaLabel} className="h-full flex flex-col">
                            <div className="flex flex-row justify-between items-center">
                                  {/* Header Section */}
                                  <UtilityFragment vPadding={24}>
                                    <Typography
                                    variant='headline-3'
                                    style={{
                                        fontSize:25
                                    }}
                                    className="text-white mb-4">
                                        NovaUI
                                    </Typography>
                                </UtilityFragment>
                            </div>
                                {/* New Chat Section */}
                                <UtilityFragment vPadding={40} vGap={20}>
                                <Button
                                onClick={startNewChat}
                                className="w-1/2 hover:bg-grey-500"
                                colorScheme='tertiary'
                                iconButton={false}
                                >
                                <GenericChatTiny className="mr-3"/>
                                <span className="text-white">New Chat</span>
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
                                            <span>Chat History</span>
                                        </div>
                                        <TabSuffix element={chatHistoryExpanded ? <VisaChevronUpTiny color="#fff" /> : <VisaChevronDownTiny color="#fff"/>} />
                                         </Button>
                                <UtilityFragment vHide={!chatHistoryExpanded}>
                                    <Tabs orientation="vertical" id={`${id}-l1-label2-sub-menu`} aria-hidden={!chatHistoryExpanded}>
                                        
                                        {
                                            Object.entries(chatHistory).map((item,i) => {
                                                return (
                                                    <Tab key={i}>
                                                    <Button colorScheme='secondary' className="text-white" >{item[0]}</Button>
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
                                            <VisaSettingsTiny className="mr-3" />
                                            <span>Settings</span>
                                        </div>
                                        <TabSuffix element={settingsExpanded ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />} />
                                    </Button>
                                </UtilityFragment>
                            </nav>
                        </div>)}   
                </Nav>

                {/* Main Content Area */}
                <section className="bg-[#343541] text-white min-h-screen w-full relative flex-1">
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
                                <Typography variant='headline-1' style={{
                                    fontSize: 35,
                                    marginBottom: 30
                                }}>
                                    Welcome back Emmanuel
                                </Typography>
                                <Typography className="text-lg text-gray-300" variant="subtitle-2">
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
                        <Typography className="text-gray-400 text-center text-sm max-w-2xl">
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