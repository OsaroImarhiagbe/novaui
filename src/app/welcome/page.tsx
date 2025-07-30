import { Suspense } from 'react';
import OnboardingScreen from "@/screens/Onboarding/OnboardingScreen";

function LoadingFallback() {
    return (
      <div className="relative min-h-screen w-full overflow-x-hidden flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }
export default function Page() {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <OnboardingScreen />
      </Suspense>
    );
  }