"use client"
import { useUser } from '@clerk/nextjs'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}

type ApiResponse = {
    message: string,
    error?:string,
}

async function createProfileRequest(){
    console.log('createProfileRequest')
    const response = await fetch('/api/create-profile',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        }

    })
    const data = await response.json();
    console.log("Response: data: ",data)
    return data as ApiResponse;
}

function CreateProfile({}: Props) {
    console.log('CreateProfile')
    const router = useRouter()
    const {isLoaded,isSignedIn} = useUser()
    const {mutate,isPending} = useMutation<ApiResponse,Error >({
        mutationFn: createProfileRequest,
        onSuccess: (data)=>{
            router.push('/pricing')
        },
        onError: (error)=>{
            console.error("Mutation error: ",error)
        }
    })


    useEffect(()=>{
        if(isLoaded && isSignedIn && !isPending){
            console.log('mutating...')
            mutate()
        }
    },[isLoaded,isSignedIn])
  return (
    <div>CreateProfile</div>
  )
}

export default CreateProfile