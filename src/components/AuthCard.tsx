
import {
  ContentCard,
  ContentCardBody,
  ContentCardTitle,
  Typography,
  Utility,
} from '@visa/nova-react';
import InputComponent from './Input';
import ButtonComponent from './Button';
import { AuthCardType } from '@/utils/types/types';
import CheckboxComponent from './CheckBox';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

const AuthCard:React.FC<AuthCardType>= ({
  email,
  password,
  handleSignUp,
  handleLogin,
  handleAnon,
  loading,
  confirmPassword,
  auth,
  username,
  emailValue,
  passwordValue,
  emailChange,
  passwordChange,
  confirmValue,
  confirmPasswordChange,
  nameValue,
  nameChange,
  errors,
  isDisabled
}) => {
  return (
    <ContentCard
    style={{
        inlineSize: '100%',
        maxInlineSize: '640px',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      <Utility
         style={{
            padding:20
        }}
      element={<ContentCardBody />}
      vFlex vFlexCol vGap={20} vPadding={16}>
      
      {
        auth === 'signup' && <>
          <ContentCardTitle
        variant="headline-4"
        className='text-black'>{username}</ContentCardTitle>
         <InputComponent label={username} place='Name...' value={nameValue} change={nameChange}/>
        </>
      }
      {errors?.name && (<Typography className="v-pt-4 text-red-500">
          {errors.name}
        </Typography>)}
        <ContentCardTitle
        variant="headline-4"
        className='text-black'>{email}</ContentCardTitle>
        <InputComponent label={email} place='Email...' value={emailValue} change={emailChange}/>
        { errors?.email &&   (<Typography className="v-pt-4 text-red-500">
          {errors.email}
        </Typography>)}
        <Typography className="v-pt-4">
          {password}
        </Typography>
        <InputComponent label={password} place='Password...' value={passwordValue} change={passwordChange}/>
        {errors?.password && ( <Typography className="v-pt-4 text-red-500">
          {password}
        </Typography>)}
        {
          auth === 'signup' &&  <Typography className="v-pt-4">
          {confirmPassword}
        </Typography>
        }
        {
          auth === 'signup' && <InputComponent label={confirmPassword} place='Confirm Password...' value={confirmValue} change={confirmPasswordChange}/>
        }
        {errors?.confirmPassword && ( <Typography className="v-pt-4 text-red-500">
          {errors.confirmPassword}
        </Typography>)}
          {/* Remember Me */}
          {
            auth === 'login' && 
            <Utility vFlex vFlexRow vAlignItems="center" vJustifyContent="between">
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <CheckboxComponent onCheckedChange={() => {}}/>
              <Typography style={{ color: '#6b7280', fontSize: '14px' }}>
                Remember me
              </Typography>
            </label>
            <Typography 
              style={{
                color: '#3b82f6',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Forgot password?
            </Typography>
          </Utility>
          }
          {loading ? <Loader2 className='animate-spin text-black'/> : 
          <>
            <Utility vFlex vFlexRow vAlignItems='center' vJustifyContent='center' vGap={10}>
                 {/* <ButtonComponent text='Login' click={handleLogin}/> */}
                 <ButtonComponent text='Explore First' click={handleAnon}/>
                 <ButtonComponent text='SignUp' click={handleSignUp} isDisabled={isDisabled}/>
           </Utility>

             <Utility vFlex vFlexRow vAlignItems="center" vGap={16}>
               <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
               <Typography style={{ color: '#9ca3af', fontSize: '14px' }}>
                 Or continue with
               </Typography>
               <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
             </Utility>
             <Utility vFlex vFlexRow vGap={12}>
               <button
                 style={{
                   flex: 1,
                   padding: '12px',
                   borderRadius: '12px',
                   border: '2px solid #e5e7eb',
                   background: '#ffffff',
                   cursor: 'pointer',
                   transition: 'all 0.2s ease',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   gap: '8px',
                 }}
               >
                 <Image src='/images/search.png' alt='google' width={20} height={20}/>
                 <Typography style={{ fontSize: '14px', fontWeight: '500' }}>Google</Typography>
               </button>
               <button
                 style={{
                   flex: 1,
                   padding: '12px',
                   borderRadius: '12px',
                   border: '2px solid #e5e7eb',
                   background: '#ffffff',
                   cursor: 'pointer',
                   transition: 'all 0.2s ease',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   gap: '8px',
                 }}
               >
                 <span style={{ fontSize: '18px' }}>Ⓜ️</span>
                 <Typography style={{ fontSize: '14px', fontWeight: '500' }}>Microsoft</Typography>
               </button>
             </Utility>
          </>          
          }
       
      </Utility>
    </ContentCard>
  );
};

export default AuthCard;