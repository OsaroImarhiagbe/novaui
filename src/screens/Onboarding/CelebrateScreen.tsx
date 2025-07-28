'use client'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { STAGGER_CHILD_VARIANTS } from '../../constants/page';
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Loader2 } from "lucide-react";
import { useCallback, useState,useEffect } from "react";
import Confetti from 'react-confetti';
import { useAI } from "../../../context/AIContext";
import { tasks,processingWords } from "@/utils/data/data";
import axios from 'axios'
import { useMutation } from '@tanstack/react-query';
import { ProfileUpdate } from "@/utils/types/type";
import { useUserStore } from '@/stores/authStore';
// need to fix api endpoint for updating user onboarding status
const OnoboardingUser = async (data:ProfileUpdate) => {
  const response = await axios.patch(`api/user-service/${data.user_id}`,{
    profile:{
      onboarding_status:data.profile.onboarding_status
    }
  })
  return response.data
}
export default function CelebrateScreen() {
  const router = useRouter();
  const [celebrate, setCelebrate] = useState<boolean>(false);
  const {sendMessage} = useAI()
  const user_id = useUserStore((state) => state.user_id )
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0
  })
  const [processingWord,setProcessingWord] = useState<string>('your response')
  const [taskWord,setTaskWord] = useState<string>('Analyzing')

  const {isPending,mutate}= useMutation({
    mutationFn:OnoboardingUser,
    onSuccess:() => {
      setTimeout(() => {
        router.push('/dashboard')
    },3000)
    },
    onError: (error) => {
      console.error(`Error with saving onboarding: ${error}`)
    }
  })




  useEffect(() => {
    sendMessage('You are now processing all of the goals that the individual selected. Keep these goals in mind as you give financial guidance.')
    const interval = setInterval(() => {
        setProcessingWord(processingWords[Math.floor(Math.random() * processingWords.length)])
        setTaskWord(tasks[Math.floor(Math.random() * tasks.length)])
    },5000)

    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    const eventListener = () => {
      setWindowDimension({
        width:window.innerWidth,
        height:window.innerHeight
      })
    }
    window.addEventListener('resize',eventListener)
    
    eventListener()

    return () => removeEventListener('resize',eventListener)
  },[])

  const handleCelebrate = useCallback(() => {
    setCelebrate(true)
    mutate({
      user_id: user_id,
      profile: {
        onboarding_status: true
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <motion.div
      className="z-10 mx-5 flex flex-col items-center space-y-10 text-center sm:mx-auto"
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        show: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.3, type: "spring" }}
    >
    <div className='mx-5 flex flex-col items-center space-y-10 text-center sm:mx-auto'>
      {
        celebrate && <Confetti
        width={windowDimension.width}
        height={windowDimension.height}
      />
      }
    </div>
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="flex flex-col items-center space-y-10 text-center"
      >
        <h1 className="text-3xl font-bold tracking-tighter text-foreground">
        {processingWord} ✨
        </h1>
        <p className="text-2xl font-semibold transition-colors">
       {`${taskWord}...`}
        </p>
      </motion.div>
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="felx items-center"
      >
        <div className="pt-10">
            {
                isPending ? <Loader2 className="animate-spin"/> : 
                <Button  onClick={handleCelebrate} className="cursor-pointer">
                <MoveRight size={25}/>
            </Button>
            }
        </div>
      </motion.div>
    </motion.div>
  );
}