'use client'
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { STAGGER_CHILD_VARIANTS } from '../../constants/page';
import { Button } from "../../components/ui/button";
import { useCallback } from "react";

export default function IntroScreen() {
    const router = useRouter()
    const handleNavigation = useCallback(() => {
        router.push('/welcome?type=partner-solo')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <motion.div
      className="z-10"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <motion.div
        variants={{
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="mx-5 flex flex-col items-center space-y-10 text-center sm:mx-auto"
      >
        <motion.h1
          className="font-display text-4xl font-bold text-foreground transition-colors sm:text-5xl"
          variants={STAGGER_CHILD_VARIANTS}
        >
         Welcome to Aspensify👋
        </motion.h1>
        <motion.p
          className="max-w-md text-accent-foreground/80 transition-colors sm:text-lg"
          variants={STAGGER_CHILD_VARIANTS}
        >
         Aspensify helps individuals and couples take control of their finances with smart, simple budgeting tools.
        </motion.p>
        <motion.div
          variants={STAGGER_CHILD_VARIANTS}
        >
          <Button className="px-10 font-medium text-base cursor-pointer"
           onClick={handleNavigation}
          >
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}