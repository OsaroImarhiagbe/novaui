import React from 'react';
import { Messageitem } from '@/utils/types/types';
import { Avatar } from '@visa/nova-react';
// import user from '../../public/assets/user.png'
      // Function to determine bubble width based on message length
const getBubbleWidth =(messageLength: number) => {
        if (messageLength < 50) return '30%';
        if (messageLength < 150) return '50%';
        if (messageLength < 300) return '70%';
        return '85%'; // Max width for very long messages
    }
       // Function to determine if message should use word wrapping
const shouldWrapText = (messageLength: number) => {
        return messageLength > 100;
    }
const MessageItem:React.FC<Messageitem> = ({ message, date,role,NovaAi}) => {
  
 
    
        const messageLength = message?.length || 0;
        const bubbleWidth = getBubbleWidth(messageLength);
        const shouldWrap = shouldWrapText(messageLength);

        if (role === 'user') {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginRight: 1,
                    paddingRight: 5,
                }}>
                    <div style={{ 
                        width: bubbleWidth,
                        maxWidth: '85%', // Prevent overflow on very small screens
                        minWidth: '20%'  // Ensure minimum readable width
                    }}>
                        <div style={{
                            padding: messageLength > 200 ? 10 : 5, // More padding for longer messages
                            borderRadius: 10,
                            alignSelf: 'flex-end',
                            marginBottom: 5,
                            marginTop: 5,
                            backgroundColor: 'rgb(70, 160, 250)',
                            wordWrap: shouldWrap ? 'break-word' : 'normal',
                            overflowWrap: 'break-word',
                            hyphens: shouldWrap ? 'auto' : 'none'
                        }}>
                            <p style={{
                                textAlign: 'left',
                                margin: 0,
                                lineHeight: messageLength > 100 ? '1.4' : '1.2',
                                fontSize: messageLength > 500 ? '14px' : '16px' // Slightly smaller font for very long messages
                            }}>
                                {message}
                            </p>
                        </div>
                        <p style={{
                            fontSize: 8,
                            alignSelf: 'flex-end',
                        }}
                        className='m-0 text-sm mt-5 pl-5 text-black'
                        >
                            {date}
                        </p>
                    </div>
                    <div style={{ 
                        display: 'flex',
                        flexDirection: 'column', 
                        marginBottom: 5,
                        marginLeft: 8
                    }}>
                        <Avatar alt='user' small tag="img" src='/images/user.png' />
                    </div>
                </div>
            );
        } else {
            return (
                <div style={{
                    display: 'flex',
                    marginLeft: 1,
                    flexDirection: 'row',
                    
                }}>
                    <div style={{ 
                        display: 'flex',
                        flexDirection: 'column', 
                        marginBottom: 5,
                        marginRight: 8
                    }}>
                        <Avatar alt='user' small tag="img" src='/images/user.png' />
                    </div>
    
                    {NovaAi ? 
                        <p className='text-center text-black'>
                            NovaUI typing<span className='animate-pulse'>...</span>
                        </p> 
                        : 
                        <div style={{ 
                            width: bubbleWidth,
                            maxWidth: '85%',
                            minWidth: '20%',
                        }}>
                            <div style={{
                                padding: messageLength > 200 ? 10 : 5,
                                alignSelf: 'flex-start',
                                borderRadius: 10,
                                marginLeft: 10,
                                wordWrap: shouldWrap ? 'break-word' : 'normal',
                                overflowWrap: 'break-word',
                                hyphens: shouldWrap ? 'auto' : 'none'
                            }}>
                               <div className="rounded-lg p-4 max-h-96">
                                <pre className="text-black text-sm font-mono whitespace-pre-wrap">
                                    {message}
                                    </pre>
                                    </div>
                            </div>
                            <p style={{
                                fontSize: 8,
                            }}
                            className='m-0 text-sm mt-5 pl-5 text-black'
                            >
                                {date}
                            </p>
                        </div>
                    }
                </div>
            );
        }
    };



export default MessageItem;


