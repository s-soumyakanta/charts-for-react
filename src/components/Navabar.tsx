import Link from 'next/link'
import React from 'react'

const Navabar = () => {
  return (
    <nav className='flex w-full bg-gray-900 p-4 justify-between'>
       <div className='flex items-center space-x-1'>
        <Link href="/">
       <h1 className='text-lg'>Charts For React </h1>
        </Link>
        <p className='text-sm'>- by <Link className='underline' target='_blank' href='https://s-soumyakanta.com'>S Soumyakanta</Link></p>
       </div>

       <div>
        <Link href="/">
        <button>Back</button>
        </Link>
       </div>
    </nav>
  )
}

export default Navabar