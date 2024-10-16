"use client"
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const navigationTestPage = () => {
    const router=useRouter();
    const searchparams=useSearchParams();

    const q=searchparams.get("q")
    console.log(q)
    const handleClick=()=>{
        console.log("clicked")
        router.push("/")
    }
  return (
    <div>
      <Link href="/" prefetch={false}> CLick Here </Link>
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  )
}

export default navigationTestPage
