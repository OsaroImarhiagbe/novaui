'use client'
import { useState,useCallback, } from "react"
import NaviBar from "@/components/NaviBar"
// import Input from '../../components/Input'
import { Typography } from '@visa/nova-react';
import { Button } from '@visa/nova-react';
import MessageItem from "@/components/MessageItem";
import { ConversationType } from "@/utils/types/types";
import { componentMap,generateCode } from "@/utils/data/data";

// const generateCode = (components: string[]) => {
//     // Very basic template
//     let code = `import { ${components.join(", ")} } from '@visa/nova-react';\\n\\n`;
//     code += `export default function Form() {\\n  return (\\n    <form>\\n`;
    
//     components.forEach(comp => {
//     if (comp === "Input") code +=       `<Input type="email" />\\n`;
//     if (comp === "Checkbox") code +=       `<Checkbox label="Remember me" />\\n`;
//     if (comp === "Button") code +=       `<Button>Login</Button>\\n`;
//     });
    
//     code +=     `</form>\\n  );\\n}`;
    
//     return code;
//     }
    const suggestComponents = (prompt:string) => {
        const lowerCase = prompt.toLowerCase()
        const usedComponents = new Set<string>()

        for(const [keyword,components] of Object.entries(componentMap)){
            if(lowerCase.includes(keyword)){
                components.forEach((comp) => usedComponents.add(comp))
            }
        }
        console.log('suggested: ',usedComponents)
        return Array.from(usedComponents)
    }

const NovaScreen = () => {
    const [value,setValue] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const [conversation,setConversation] = useState<ConversationType[]>([])
    const [NovaAi,setNovaAi] = useState(false)


    const handleClick = useCallback(() => {
        setIsOpen(!isOpen);
    },[isOpen]);


    const handleSubmit = () => {
        setNovaAi(true)
        if(value.trim() === '') return;
        try{
            setValue('')
            //adding user conversation
            const suggested = suggestComponents(value)
            const code = generateCode({
                components: suggested,
                formName: 'RandomFunction',
                // formProps: formClass ? { className: formClass } : {},
                // indentSize
            })
            setConversation(prev => [...prev, {user_id:'user_id_1',role: 'user', message: value, date: new Date().toLocaleDateString()}])
            
            // will artificial use setTimeOut to mimic AI response
            setTimeout(() => {
                setNovaAi(false)
                setConversation((prev) => [
                    ...prev,
                    {ai_id:'ai_id_1',role: 'ai', message: `NovaUI: Here’s a basic component suggestion for: "${value} ${code}"`,date: new Date().toLocaleDateString()}
                ])
            },3000)
        }catch(error){
            console.log(`Error submitting message : ${error}`)
        }
    }
    
    
    return (
        <section  className="bg-[#343541] text-white min-h-screen w-full relative">
            {/* Nav Bar */}
            <NaviBar handleClick={handleClick} isOpen={isOpen}/>
            <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 gap-12">
        {/* Header */}
        {
           conversation.length === 0 &&  <div className="text-center max-w-xl">
              <Typography variant='headline-1' style={{
                  fontSize:35,
                  marginBottom:30
                  }}>Welcome back Emmanuel</Typography>
              <Typography className="text-lg text-gray-300" variant="subtitle-2">
              Describe the UI you want to build and NovaUI will suggest the components and code for you.</Typography>
              </div>
        }
            {/* Mock AI chat area */}

            {
                conversation.length > 0 && 

                <div className="w-full max-w-xl mx-auto flex flex-col gap-4 overflow-y-auto px-2 py-4 h-[60vh]">
                {/* Map over messages here */}
                {
                    conversation.map((item,i) => {
                        return (
                            <MessageItem key={i} 
                            message={item.message ?? ''}
                            user_id={item.user_id ?? ''}
                            date={item.date ?? ''}
                            ai_id={item.ai_id ?? ''}
                            role={item.role ?? 'user'}
                            NovaAi={NovaAi}
                            />
                        );
                    })
                }
              </div>
            }
            {/* input section */}
            <div className="bg-white w-full max-w-xl rounded-2xl flex items-center px-4 py-3 mx-auto md:static md:mt-0
                fixed bottom-20 left-0 md:left-auto md:bottom-auto">
            <input
                className="placeholder-gray-400 text-black w-full p-8 focus:outline-none"
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Describe your UI... e.g. login form with remember me"
                />
            {value && 
                <Button onClick={handleSubmit} className="rounded-lg w-1/2" buttonSize="large">Generate</Button>
             }
            </div>
            <Typography className="text-gray-400 text-center">
            NovaUI may display suggested components and code based on your prompt.
            </Typography>
            </div>
        </section>
    )
}

export default NovaScreen