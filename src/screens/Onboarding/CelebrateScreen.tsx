'use client'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useCallback, useState,useEffect } from "react";
import Confetti from 'react-confetti';
import { Typography } from "@visa/nova-react";
import ButtonComponent from "@/components/Button";
import { Loader2 } from "lucide-react";
export default function CelebrateScreen() {
  const router = useRouter();
  const [celebrate, setCelebrate] = useState<boolean>(false);
  const [loading,setLoading] = useState(false)
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0
  })

  const handleNext = useCallback(() => {
    setLoading(true)
    setCelebrate(true)
    try{
        localStorage.setItem('onboarding','true')
        setTimeout(() => {
            setCelebrate(false)
            setLoading(false)
            router.push('/nova')
        }, 3000);
    }catch(error){
        console.error(`Error navigating to home screen: ${error}`)
    }
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

  return (
    <section className="min-h-screen w-full relative flex-1">
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 gap-12">
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
        className="flex flex-col items-center space-y-10 text-center"
      >
        <Typography variant='headline-1' style={{
                   fontSize: 35,
                   marginBottom: 30
               }}>
               ✨ Build with NovaAI ✨
               </Typography>
      </motion.div>
      <div
        className="felx items-center"
      >
        <div className="pt-10">
            {
                loading ? <Loader2 className="animate-spin text-black"/> : <ButtonComponent text='Lets Build' click={handleNext}/>
            }
        </div>
      </div>
    </motion.div>
    </div>
    </section>
  );
}