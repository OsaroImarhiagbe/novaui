import { NextResponse } from 'next/server';
import { createClient } from '../../../../utils/supabase/server'
export async function POST() {
    try{
        const supabase = await createClient()
        const {error} = await supabase.auth.signOut()
        if (error) {
            return NextResponse.json(
              { message: 'Error signing out user', error: error.message },
              { status: 500 }
            );
          }
      
          return NextResponse.json({ message: 'Signed out successfully' }, { status: 200 });
    }catch(error){
        return NextResponse.json({message: 'Error signing out user', error:error})
    }
}