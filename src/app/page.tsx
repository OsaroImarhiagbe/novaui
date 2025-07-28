'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const onBoardingStatus = () =>{
      const OnboardingStatus = localStorage.getItem('onboarding')
      if(OnboardingStatus === 'true'){
        router.push('/nova')
      }else{
        router.push('/welcome')
      }
    }
    onBoardingStatus()
  },[router])

  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <Loader2 className='animate-spin text-black'/>
        </div>
    </div>
);
}
