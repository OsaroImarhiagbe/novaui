'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence } from "motion/react"
import {CircleArrowLeft,Loader2} from 'lucide-react';
import { lazy,Suspense,useCallback,useEffect} from "react";
const PartnerNext = lazy(() => import("@/app/welcome/partner"));
const PartnerOrSolo = lazy(() => import('../../app/welcome/partner-solo'))
const SoloNext = lazy(() => import('../../app/welcome/solo'))
const Intro = lazy(() => import("@/app/welcome/intro"))
const Celebrate = lazy(() => import('@/app/welcome/celebrate'));
const Life = lazy(() => import('@/app/welcome/life'));
import { useAI } from "../../../context/AIContext";



const PartnerNextWrapper = () => {
  return (
    <Suspense fallback={<div><Loader2 className='animate-spin'/></div>}>
      <PartnerNext/>
    </Suspense>
  )
}
const CelebrateWrapper = () => {
  return (
    <Suspense fallback={<div><Loader2 className='animate-spin'/></div>}>
      <Celebrate/>
    </Suspense>
  )
}

const SoloNextWrapper = () => {
  return (
    <Suspense fallback={<div><Loader2 className='animate-spin'/></div>}>
      <SoloNext/>
    </Suspense>
  )
}
const IntroWrapper = () => {
  return (
    <Suspense fallback={<div><Loader2 className='animate-spin'/></div>}>
      <Intro/>
    </Suspense>
  )
}


const PartnerOrSoloWrapper = () => {
  return (
    <Suspense fallback={<div><Loader2 className='animate-spin'/></div>}>
      <PartnerOrSolo/>
    </Suspense>
  )
}
const LifeWrapper = () => {
  return (
    <Suspense fallback={<div><Loader2 className='animate-spin'/></div>}>
      <Life/>
    </Suspense>
  )
}


const OnboardingScreen = () => {
    const router = useRouter();
    const search = useSearchParams()
    const type = search.get('type')
    const {sendMessage} = useAI();


 
    const AIMessage = useCallback((input:string) => {
      sendMessage(input)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleBack = useCallback(() => {
      router.back()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    useEffect(() => { // When the Intro screen mounts, it triggers this useEffect which will send a prompt to the AI model.
      AIMessage(`You are an AI assistant for Monevo, a financial app. 
        You help couples and singles with budgeting, expense tracking, and financial planning. 
        Always be helpful, accurate, and focused on financial wellness.`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className="flex h-screen flex-col items-center justify-center max-w-3xl mx-auto overflow-x-hidden">
        <div
          className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        <AnimatePresence mode="wait">
          {type ? (
            <button
              className="group absolute left-2 sm:left-10 top-10 z-40 rounded-full p-2 transition-all"
              onClick={handleBack}
            >
              <CircleArrowLeft className="h-8 w-8 text-gray-500 cursor-pointer group-hover:text-gray-800 group-active:scale-90" />
            </button>
          ) : (
            <IntroWrapper key="intro" />
          )}
          {type === "partner-solo" && <PartnerOrSoloWrapper key="partner-solo"/>}
          {type === 'solo'  && <SoloNextWrapper key='solo'/>}
          {type === 'partner'  && <PartnerNextWrapper key="partner" />}
          {type === 'life' && <LifeWrapper key='life'/>}
          {type === 'celebrate' && <CelebrateWrapper key='celebrate'/>}
        </AnimatePresence>
      </div>
    )
}

export default OnboardingScreen