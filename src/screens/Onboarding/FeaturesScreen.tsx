'use client'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useCallback} from "react";
import ButtonComponent from "@/components/Button";
import { featuresData } from "@/utils/data/data";
import { Typography } from '@visa/nova-react';
import Card from '../../components/Card'
import { useState } from "react";
import { Loader2 } from "lucide-react";
export default function FeaturesScreen() {
  const router = useRouter();
  const [slide, setSlideShow] = useState<number>(0)
  const [loading,setLoading] = useState<boolean>(false)
  const slide_length = featuresData.length

  const handleSlideNext = useCallback(() => {
      if(slide < slide_length - 1){
          setSlideShow((prev) => prev + 1)
      }
  },[slide,slide_length])

  const handleSlidePrev = useCallback(() => {
      if(slide > 0){
          setSlideShow((prev) => prev - 1)
      }
  },[slide])

 
  const handleNext = useCallback(async () => {
    setLoading(true)
    try{
      setTimeout(() => {
        setLoading(false)
        router.push('/welcome?type=occupation')
      },1000)
    }catch(error){
      console.error(`Error navigation to Occupation Screen: ${error}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <section className="min-h-screen w-full relative flex-1">
       <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 gap-12">
       {/* Header */}
          <motion.div
      className="z-10 mx-5 flex flex-col items-center justify-center space-y-10 text-center sm:mx-auto"
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
                  NovaAI Features 🔥
               </Typography>
               <Typography variant='subtitle-2' className='text-black' style={{
                   fontSize: 20,
                   marginBottom: 30
               }}>
                Some cool things NovaAI can do ⚡️
               </Typography>
      </motion.div>
      {/* Card */}
      <div className="relative w-full max-w-md overflow-hidden">
      <div
      style={{
        transform: `translateX(-${slide * 100}%)`,
        }}
        className="flex mx-auto transition-transform duration-500 ease-in-out"
      >
        {featuresData.map((item,index) => {

          return (
            <div
            style={{
              padding:5,
             flexBasis: '100%'
            }}
            key={index}
            className="flex-shrink-0">
              <Card headline={item.name} description={item.description} img={item.img}/>
            </div>
           
          )
        })}
      </div>
      </div>
      {
          loading ? 
          <div
          style={{
            marginTop:10
          }}
           className="flex flex-row gap-6"
          >
            <Loader2 className="animate-spin text-black"/> 
          </div> : 
          <div
          style={{
            marginTop:10
          }}
          className="flex flex-row gap-6">
            <ButtonComponent click={handleSlidePrev} text='Prev'/>
            <ButtonComponent click={handleSlideNext} text='Next'/>
            {
              slide === slide_length - 1 && <ButtonComponent click={handleNext} text='Continue'/>
            }
            </div>
      }
    </motion.div>
    </div>
    </section>
  );
}