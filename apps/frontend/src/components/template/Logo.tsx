import { Righteous } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const fonte = Righteous({
    weight: '400',
    subsets: ['latin'],
})

export default function Logo () {
    return (
        <Link href="/" className={`flex items-center gap-2 ${fonte.className}`}>
             <Image 
                src="/logo.svg"
                width={50}
                height={50}
                alt="Logo"
             />
            <h1 className='flex flex-col items-center text-lg leading-5'>
                <div>CONVIT<span className='text-blue-500'>3</span></div>
                <div>DIGITAL</div>
            </h1>
        </Link>
    )
}