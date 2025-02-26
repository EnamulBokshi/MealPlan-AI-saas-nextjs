"use client"
import Image from "next/image"
import {SignedIn,SignedOut,useUser,SignOutButton} from "@clerk/nextjs"
import { Button } from "../ui/button"
import { Link } from "lucide-react"
function PrimaryNav() {
  const {isLoaded, isSignedIn,user } = useUser()
  if(!isLoaded) return <p>Loading...</p>

  return (
    <nav className='flex justify-between items-center py-4 px-5 bg-white shadow-md'>
        <div className=''>
            <a href='#' className='text-2xl font-bold text-gray-800'>MyLogo</a>
        </div>
        <div className='flex gap-3'>
            <a href='#' className='text-gray-600 hover:text-gray-800'>Home</a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>About</a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>Contact</a>
        </div>
        <div>
            <SignedIn >
                <div className="flex gap-3">
                {
                  user?.imageUrl ? <Image src={user.imageUrl} alt={user?.fullName || "profile avtar"} width={40} height={40} className='rounded-full' /> : <a href='#' className='text-gray-600 hover:text-gray-800'>Profile</a>
                  
                }
                
                {/* <Button variant='destructive' ></Button> */}
                <SignOutButton>Sign Out</SignOutButton>
                </div>
            </SignedIn>
            <SignedOut>
                <a href='/sign-up' className='text-gray-600 hover:text-gray-800'>Sign In</a>
                <a href=""></a>
            </SignedOut>
        </div>
    </nav>
  )
}

export default PrimaryNav