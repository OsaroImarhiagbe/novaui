'use client'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { STAGGER_CHILD_VARIANTS } from '../../constants/page';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useAI } from "../../../context/AIContext";
import { useCallback, useEffect } from "react";
import { SingleGoals } from "@/utils/data/data";
import { useState } from "react";
import axios from 'axios'
import { useMutation } from '@tanstack/react-query';
import { GoalUpdate } from "@/utils/types/type";
import { useUserStore } from '@/stores/authStore';

const SettingGoal = async (data:GoalUpdate) => {
  const response = await axios.post(`api/goal-service`,{
    goal:{
      title:data.goal.title,
      user_id:data.goal.user_id
    }
  })
  return response.data
}
export default function SoloScreen() {
  const router = useRouter();
  const {sendMessage} = useAI();// AI model
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const user_id = useUserStore((state) => state.user_id )

  const GoalMutation = useMutation({
    mutationFn:SettingGoal,
    onSuccess: () => {
      router.push('/welcome?type=life')
    },
    onError:(error) => {
      console.error(`Error sending the goal ${error}`)
    }
  })

  useEffect(() => {
    sendMessage("The user's relationship status is 'single'.")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const handleGoalSelection = useCallback((goal:string,checked:boolean) => {
    setSelectedGoals(prev => {
        if(checked){
            return [...prev,goal]
        }else{
            return prev.filter(prev => prev != goal)
        }
    })
  },[])

 
  const handleNext = useCallback(async () => {
    try{
        if(selectedGoals.length > 0){
            sendMessage(`The user has selected the following financial goals: ${selectedGoals.join(', ')}. 
            Take the user goals into consideration when offering financial advise.`)
        }
        GoalMutation.mutate({
          goal:{
            title:selectedGoals.join(','),
            user_id:user_id // the id of the authenticated user
          }
          })
    }catch(error){
        console.error(`Error sending goals to backend: ${error} `)
        throw new Error('Error sending to the backend')
    }
  },[GoalMutation, selectedGoals, sendMessage,user_id])
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
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="flex flex-col items-center space-y-10 text-center"
      >
        <h1 className="text-3xl font-bold tracking-tighter text-foreground">
        Let&apos;s personalize your experience. ✨
        </h1>
        <p className="text-2xl font-semibold transition-colors">
        🎯 What would you love to achieve?
        </p>
      </motion.div>
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="flex flex-col items-center"
      >
        {SingleGoals.map((goal,index) => {

          return (
            <div key={index} className="flex flex-row items-center space-x-2 m-6">
             <Checkbox
             checked={selectedGoals.includes(goal)}
             onCheckedChange={(checked) => handleGoalSelection(goal, !!checked)}
             />
             <label
              htmlFor="terms"
              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {goal}
            </label>
            </div>
           
          )
        })}
        <div className="flex flex-col pt-10">
        <Button onClick={handleNext} className="cursor-pointer">
        <MoveRight size={25}/>
        </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}