'use client'
import { useState, useCallback,useEffect } from "react"
import MessageItem from "@/components/MessageItem";
import { ConversationType } from "@/utils/types/types";
import { suggestComponents, generateCode } from "@/utils/data/data";
import {
    VisaAccountTiny,
    VisaChevronDownTiny,
    VisaChevronUpTiny,
    VisaMediaFastForwardTiny,
    VisaMediaRewindTiny,
    GenericChatTiny,
    VisaSettingsTiny,
} from '@visa/nova-icons-react';
import {
    Button,
    Divider,
    Link,
    Nav,
    Tab,
    TabSuffix,
    Tabs,
    Typography,
    Utility,
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
    // Mock chat history data
    // const chatHistory = [
    //     { id: 1, title: "Login Form Design", date: "Today" },
    //     { id: 2, title: "Dashboard Components", date: "Yesterday" },
    //     { id: 3, title: "Button Variations", date: "2 days ago" },
    //     { id: 4, title: "Form Validation", date: "3 days ago" },
    // ];

    const id = 'nova-sidebar-navigation';
    const navRegionAriaLabel = 'Nova UI Sidebar Navigation';



    useEffect(() => {
        localStorage.clear()
        const history = localStorage.getItem('allMessages')
        if(history){
            const parse = JSON.parse(history)
            setChatHistory(parse)
        }
        console.log('History:',history)
    },[])
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
        <div className={Styles.appContainer}>
            <div id="layout" className={Styles.layoutContainer}>
                <Nav id={id} orientation='vertical' tag="aside" className="hidden md:block h-screen z-10 bg-[#2C2D3A]">
                    
                        <div
                        style={{
                            padding:20,
                        }}
                        className="bg-[#2C2D3A] hidden md:block min-h-full">
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

                                {/* Toggle Sidebar Button */}
                                <UtilityFragment vPadding={16}>
                                    <Button
                                        aria-label="Collapse sidebar"
                                        aria-expanded={!!navExpanded}
                                        buttonSize="small"
                                        colorScheme="tertiary"
                                        iconButton
                                        onClick={() => setNavExpanded(!navExpanded)}
                                        className="text-gray-400 hover:text-white"
                                    >
                                    <VisaMediaRewindTiny />
                                    </Button>
                                </UtilityFragment>
                            </div>
                                {/* New Chat Section */}
                                <UtilityFragment vPadding={40} vGap={20}>
                                <Button
                                onClick={startNewChat}
                                className="w-full justify-start hover:bg-grey-500"
                                colorScheme='tertiary'
                                iconButton={false}
                                >
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
                                    className="w-full justify-between text-gray-300 hover:text-white"
                                    >
                                        <div className="flex items-center">
                                            <GenericChatTiny className="mr-3" color='#fff'/>
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
                                                    <Button colorScheme="tertiary">{item[0]}</Button>
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

                                    {/* <UtilityFragment vHide={!settingsExpanded}>
                                        <div id={`${id}-settings-menu`} aria-hidden={!settingsExpanded} className="ml-6">
                                            <UtilityFragment vGap={4}>
                                                <Button
                                                    colorScheme="tertiary"
                                                    className="w-full justify-start text-sm text-gray-400 hover:text-white"
                                                    element={<span>Theme</span>}
                                                />
                                                <Button
                                                    colorScheme="tertiary"
                                                    className="w-full justify-start text-sm text-gray-400 hover:text-white"
                                                    element={<span>Export Chat</span>}
                                                />
                                                <Button
                                                    colorScheme="tertiary"
                                                    className="w-full justify-start text-sm text-gray-400 hover:text-white"
                                                    element={<span>Clear History</span>}
                                                />
                                            </UtilityFragment>
                                        </div>
                                    </UtilityFragment> */}
                                </UtilityFragment>
                            </nav>
                        </div>
                    
                    {/* Collapsed Sidebar */}
                    {!navExpanded && (
                        <div
                        style={{
                            paddingTop:10,
                            padding:10,
                        }}
                        className="bg-[#2C2D3A] min-h-full w-full">
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
                            <GenericChatTiny color="#fff"/>
                        </div>
                    )}
                </Nav>

                {/* Main Content Area */}
                <section className="bg-[#343541] text-white min-h-screen w-full relative flex-1">
                        <div
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
                        </div>
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
                            <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 overflow-y-auto px-2 py-4 h-[60vh]">
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
                        <div className="bg-white w-full max-w-4xl rounded-2xl flex items-center px-4 py-3 mx-auto md:static md:mt-0 fixed bottom-20 left-0 md:left-auto md:bottom-auto shadow-lg">
                            <input
                                className="placeholder-gray-400 text-black w-full p-4 focus:outline-none"
                                type='text'
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder="Describe your UI... e.g. login form with remember me"
                            />
                            {value && (
                                <Button
                                    onClick={handleSubmit}
                                    className="rounded-lg ml-2"
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