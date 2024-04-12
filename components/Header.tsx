import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import { ListFormat } from "typescript"
import { useEffect, useState } from "react"

import {BellIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import useAuth from "@/hooks/useAuth"


export default function Header(){
    const [isScrolled, setIsScrolled] = useState(false)
    const { logout } = useAuth()



    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true)
          } else {
            setIsScrolled(false)
          }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
        window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    

    return( 
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10" >
            <Image src="https://rb.gy/ulxxee"
                width={100}
                height={100}
                className="cursor-pointer object-contain" alt={""}            
            />
            <ul className="hidden space-x-4 md:flex">
                <li className="headerLinks">Home</li>
                <li className="headerLinks" >TV Shows</li>
                <li className="headerLinks" >Movies</li>
                <li className="headerLinks">New & Popular</li>
                <li className="headerLinks" >My List</li>
            </ul>
        </div>
        <div className="flex items-center space-x-4 text-sm font-light">
            
            <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline"/>
            <p className="hidden lg:inline">Kids</p>
            <BellIcon className="h-6 w-6"/>
            <Link href="/account">
            <Image
            onClick={logout}
            src="https://rb.gy/g1pwyx"
            width={30}
            height={51}
            alt=""
            className="cursor-pointer rounded"
          />
            </Link>
          
            
        </div>
    </header>
    )

}
