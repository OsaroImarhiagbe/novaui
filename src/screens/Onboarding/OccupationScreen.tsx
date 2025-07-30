'use client'
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useCallback, useState} from "react";
import ButtonComponent from "@/components/Button";
import CheckboxComponent from "@/components/CheckBox";
import { occupationData } from "@/utils/data/data";
import { Typography } from "@visa/nova-react";
import { Loader2 } from "lucide-react";
export default function OccupationScreen() {
  const router = useRouter();
  const [selectedOccupation, setSelectedOccupation] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)



  const handleSelectedOccupation = useCallback((occupation:string,checked:boolean,) => { //logic for handling check selection
    setSelectedOccupation((prev) => {
        if(checked){
            return [...prev,occupation]
        }else{
            return prev.filter(prev => prev != occupation)
        }
    })
  },[])
//   localStorage.clear()

  const handleNext = useCallback(() => {
    setLoading(true)
    try{
        localStorage.setItem('occupation',selectedOccupation[0])
        setTimeout(() => {
            setLoading(false)
            router.push('/welcome?type=celebrate')
        },1000)
    }catch(error){
        console.error(`Error navigating to Celebrate Screen: ${error}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <motion.div
        className="flex flex-col items-center space-y-10 text-center"
      >
         <Typography variant='headline-1' className='text-black' style={{
                   fontSize: 35,
                   marginBottom: 30
               }}>
                  What are you using NovaAI for ✨
               </Typography>
      </motion.div>
      <div
        className="flex flex-col items-center md:flex-row"
      >
        {occupationData.map((item) => {
          return (
             <CheckboxComponent
             key={item.id}
             id={`checkbox-${item.id}`}
             checked={selectedOccupation.includes(item.name)}
             onCheckedChange={handleSelectedOccupation}
             text={item.name}
             />
          )
        })}
      </div>
      <div 
        style={{
            marginTop:20
        }}
        >{
            loading ? <Loader2 className="animate-spin text-black"/> : <ButtonComponent text='Next' click={handleNext} isDisabled={selectedOccupation.length === 0}/>
        }
        </div>
    </motion.div>
    </div>
    </section>
  );
}