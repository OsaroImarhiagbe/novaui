import {NextResponse } from 'next/server';
import { createClient } from '../../../../utils/supabase/server'
export async function POST(){
    try{
        const supabase = await createClient()
        const { data, error } = await supabase.auth.signInAnonymously();

        if(error){
            return NextResponse.json({ error: error.message }, { status: error.status});
        }

        return NextResponse.json({ user: data.user, session: data.session },{status:200});
    }catch(error){
        console.error('Error during login:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}