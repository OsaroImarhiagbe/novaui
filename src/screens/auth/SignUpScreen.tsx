'use client'
import { Typography} from "@visa/nova-react";
import { motion } from "motion/react"
import { useCallback,useState } from "react";
import { useRouter } from "next/navigation";
import { ErrorType,NewErrorType } from "@/utils/types/types";
import AuthCard from '@/components/AuthCard'
import axios from 'axios'

const SignUpScreen = () => {
    const router = useRouter()
    const [loading,setLoading] = useState<boolean>(false)
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const [errors, setErrors] = useState<ErrorType>({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    const isFormValid = formData.name && formData.email && formData.password && formData.confirmPassword 
    const validate = useCallback(() => {
      const newErrors: NewErrorType = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
      
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      
      return newErrors;
    },[formData.confirmPassword, formData.email, formData.name, formData.password]);
    const handleSignUp = useCallback(async () => { //function to handle user signup
      setLoading(true)
      try{
        const validationErrors = validate();
        // console.log('Errors: ',validationErrors)
      // Form is valid - would typically submit to server here
        const hasErrors = Object.values(validationErrors).some(error => error !== '')
        if(hasErrors){
          setErrors(validationErrors)
          return;
        }
        const response = await axios.post('/api/auth-service/signup',{
            name:formData.name,
            email:formData.email,
            password:formData.password
        })
          if(!response || response.status === 500){
            throw new Error('Error with signup')
          }
          if(response && response.status === 200){
            setTimeout(() => {
                setLoading(false)
                router.push('/welcome')
              },1000)
          }
        setFormData({
            name:'',
            email:'',
            password:'',
            confirmPassword:''
        })
        setErrors({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      }catch(error){
        console.error(`Error with navigation: ${error}`)
        setLoading(false)
      }
    },[formData.email, formData.name, formData.password, router, validate])

    const handleEmailChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => { // Event handler for signup
        setFormData((prev) => ({...prev,email:e.target.value}))
    },[])
    const handlePasswordChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => { // Event handler for signup
        setFormData((prev) => ({...prev,password:e.target.value}))
    },[])
    const handleConfirmPasswordChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => { // Event handler for signup
        setFormData((prev) => ({...prev,confirmPassword:e.target.value}))
    },[])
    const handleNameChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => { // Event handler for signup
        setFormData((prev) => ({...prev,name:e.target.value}))
    },[])

    const handleLogin = useCallback(() => {
        router.push('/auth/login')
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
    return (
       <section className="relative min-h-screen w-full overflow-x-hidden flex-1">
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
          <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 gap-12">
       {/* Header */}

           <motion.div
           initial={{opacity:1,y:20}}
           animate={{opacity:1,y:0}}
           transition={{ duration: 0.4, type: "spring" }}
           className="text-center max-w-xl">
            <Typography variant='headline-1' className='text-black' style={{
                   fontSize: 35,
                   marginBottom: 30,
                   fontWeight:'bold'
               }}>
                   NovaAI  ✨
               </Typography>
               <Typography style={{fontSize:'16px',fontWeight:'bold'}} className="text-xl text-black font-bold" variant="subtitle-1">
               Where AI generate beautiful UIs from plain English in seconds. ⚡️
               </Typography>
           </motion.div>
          <AuthCard
          email="Email"
          password="Password"
          confirmPassword='Confirm Password'
          handleSignUp={handleSignUp}
          handleLogin={handleLogin}
          loading={loading}
          auth='signup'
          username='Name'
          emailChange={handleEmailChange}
          passwordChange={handlePasswordChange}
          confirmPasswordChange={handleConfirmPasswordChange}
          nameChange={handleNameChange}
          emailValue={formData.email}
          passwordValue={formData.password}
          nameValue={formData.name}
          errors={errors}
          isDisabled={!isFormValid}
          confirmValue={formData.confirmPassword}
          />
   </div>
       </section>
    );
}

export default SignUpScreen;