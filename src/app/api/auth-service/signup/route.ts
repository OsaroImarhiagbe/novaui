import { NextResponse,NextRequest } from "next/server";
import { createClient } from '../../../../utils/supabase/server'
export async function POST(request:NextRequest){
    //create API endpoint and superbase tables end point for this
    try{
        const supabase = await createClient();
        const body = await request.json()
    
        const {email,password,name} = body;
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
          })
      
        if(error){
            return NextResponse.json({error:error.message},{status:error.status})
          }
        
        if (!data) {
            return NextResponse.json({ error: "Inserting user into user tabled failed" }, { status: 400 });
        }

        const {error:DatabaseError} = await supabase.from('Users').insert({
          name:name,
          email:email,
        })

        if(DatabaseError){
            return NextResponse.json({error:DatabaseError.message},{status:400})
        }
          
        return NextResponse.json({success:true,user:data.user},{status:200})
    }catch(error){
        console.error('Error during sign up', error)
        return NextResponse.json({error:"Internal Sever error"}, {status:500})
    }
}