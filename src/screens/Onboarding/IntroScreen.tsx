'use client'
import { useRouter } from "next/navigation";
import { motion } from "motion/react"
import { useCallback,useState } from "react";
import { Loader2 } from "lucide-react";
import {
    Typography,
} from '@visa/nova-react';
import ButtonComponent from "@/components/Button";


export default function IntroScreen() {
    const router = useRouter()
    const [loading,setLoading] = useState<boolean>(false)
    const handleNavigation = useCallback(() => {
      setLoading(true)
      try{
        setTimeout(() => {
          setLoading(false)
          router.push('/welcome?type=features')
        },1000)
      }catch(error){
        console.error(`Error with navigation: ${error}`)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <section className="text-white min-h-screen w-full relative flex-1">
   <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 gap-12">
       {/* Header */}

           <motion.div
           initial={{opacity:1,y:20}}
           animate={{opacity:1,y:0}}
           transition={{ duration: 0.4, type: "spring" }}
           className="text-center max-w-xl">
               <Typography variant='headline-1' className='text-black' style={{
                   fontSize: 35,
                   marginBottom: 30
               }}>
                   Welcome to NovaAI  👋
               </Typography>
               <Typography className="text-xl text-black" variant="subtitle-1">
               NovaAI helps developers generate beautiful UIs from plain English in seconds.
               </Typography>
           </motion.div>
           <motion.div>
            {
              loading ? <Loader2 className="animate-spin text-black"/> :  <ButtonComponent text='Get Started' click={handleNavigation}/>
            }

           </motion.div>
   </div>
</section>
  );
}