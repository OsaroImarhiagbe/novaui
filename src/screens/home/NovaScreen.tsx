'use client'
import { useState,useCallback } from "react"
import NaviBar from "@/components/NaviBar"
import Input from '../../components/Input'
import { Typography } from '@visa/nova-react';
import { Button } from '@visa/nova-react';
const NovaScreen = () => {
    const [value,setValue] = useState('')
    const [isOpen, setIsOpen] = useState(false);

    const handleValue = useCallback((input:string) => { // work on input submission mock AI convo
        setValue(input)
    },[])

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    
    
    return (
        <section  className="bg-[#343541] text-white min-h-screen w-full relative">
            {/* Nav Bar */}
            <NaviBar handleClick={handleClick} isOpen={isOpen}/>
            <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 gap-12">
        {/* Header */}
        <div className="text-center max-w-xl">
        <Typography variant='headline-1' style={{
            fontSize:35,
            marginBottom:30
            }}>Welcome back Emmanuel</Typography>
        <Typography className="text-lg text-gray-300" variant="subtitle-2">
        Describe the UI you want to build and NovaUI will suggest the components and code for you.</Typography>
        </div>
            {/* input section */}
            <div className="bg-white w-full max-w-xl rounded-2xl flex items-center px-4 py-3 mx-auto md:static md:mt-0
                fixed bottom-20 left-0 md:left-auto md:bottom-auto">
            <input
                className="placeholder-gray-400 text-black w-full p-8 focus:outline-none"
                type='text'
                value={value}
                onChange={(e) => handleValue(e.target.value)}
                placeholder="Describe your UI... e.g. login form with remember me"
                />
            {value && 
                <Button className="rounded-lg w-1/2" buttonSize="large">Generate</Button>
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