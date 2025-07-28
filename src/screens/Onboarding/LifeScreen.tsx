'use client'
import { STAGGER_CHILD_VARIANTS } from '../../constants/page';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Loader2, MoveRight } from "lucide-react";
import { useCallback,useState} from "react";
import { useAI } from "../../../context/AIContext";
import axios from "axios";
import { life_status } from "@/utils/data/data";
import { useMutation,useQueryClient } from '@tanstack/react-query';
import { useUserStore } from '@/stores/authStore';
import { useRouter } from "next/navigation";
import { ProfileUpdate,LifeType} from "@/utils/types/type";
import { motion } from "motion/react";

const LifeStatus = async (data:ProfileUpdate) => {
  const repsonse = await axios.patch(`api/user-service/${data.user_id}`,{
    profile:{
      life_status:data.profile.life_status
    }
  })
  return repsonse.data
}
const LifeScreen = () => {
    const [selectedStatus,setSelectedStatus] = useState<LifeType[]>([])
    const router = useRouter();
    const queryClient = useQueryClient()
    const {sendMessage} = useAI()
    const user_id = useUserStore((state) => state.user_id)

    const {isPending, mutate} = useMutation({
      mutationFn:LifeStatus,
      onSuccess:() => {
        queryClient.invalidateQueries({queryKey:['users',user_id]}) // need to add user_id still will be in state management
        router.push(`/welcome?type=celebrate`)
      },
      onError:(error) => {
        console.error(`Error sending relationship status to backend: ${error}`)
      }
    })
      // need to change api endpoint for
      const handleNavigation = useCallback(async () => {
        sendMessage(`The user has selected ${selectedStatus} for their relationship status.`);
        mutate({
          user_id: user_id,
          profile:{
            life_status: selectedStatus
          }
        })
      },[mutate,selectedStatus, sendMessage,user_id])

    const handleSelectedStatus = useCallback((input:LifeType,checked:boolean) => {        
        setSelectedStatus((prev) => {
            if(checked){
                return [...prev,input]
            }else{
                return prev.filter((prev) => prev != input )
            }
        })
      },[])
    
   return ( <motion.div
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
          Life Status✨
        </h1>
        <p className="text-2xl font-semibold transition-colors">
          What is your current life status ✨
        </p>
      </motion.div>
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="flex items-center"
      >
        {
          life_status.map((status,i) => {
            return (
              <div key={i} className="flex items-center space-x-2 m-6">
              <Checkbox
              className="cursor-pointer"
              checked={selectedStatus.includes(status)}
              onCheckedChange={(checked) => handleSelectedStatus(status,!!checked)}
              disabled={selectedStatus.length === 0}
              />
              <label
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
               {status}
              </label>
            </div>
            );
          })
        }
      </motion.div>
      <div className="pt-10 flex items-center">
        {
          isPending ? <Loader2 className="animate-spin"/> : 
          <Button 
          onClick={handleNavigation} 
          className="cursor-pointer"
          disabled={!selectedStatus}
        >
          <MoveRight size={25} />
        </Button>
        }
      </div>
    </motion.div>
  );
}

export default LifeScreen;