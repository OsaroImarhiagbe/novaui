import { redirect } from 'next/navigation';
import { createClient } from '../utils/supabase/server';
export default async function Home() {
  try{
    const supabase = await createClient()
    const { data:{session}, error:SessionError } = await supabase.auth.getSession()

    if(SessionError){
      console.error('Error with grabbing user session redirecting to login page')
      redirect('/auth/login')
    }

    redirect(session ? '/nova' : '/auth/login')

  }catch(error){
    console.error(`Error with returning session redirecting to login page: ${error}`)
    redirect('/auth/login')
  }
}
