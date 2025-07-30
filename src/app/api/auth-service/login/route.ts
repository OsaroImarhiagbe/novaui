import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '../../../../utils/supabase/server'


export async function POST(request:NextRequest) {
    try{
        const supabase = await createClient();
        const body  = await request.json();
        const {email, password} = body;

        //create supabase table for users
      const {data,error} = await supabase.auth.signInWithPassword({
            email:email,
            password:password
        })
        if (error) {
            return NextResponse.json({ error: error.message }, { status: error.status});
        }

        return NextResponse.json({ user: data.user, session: data.session },{status:200});
    }catch(error){
        console.error('Error during login:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

}