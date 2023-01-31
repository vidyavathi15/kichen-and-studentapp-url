


import React from 'react'
import Link from 'next/link'

export default function ProductsList() {


    
  return (
    <div>
        {[1,2,3].map((each:any, index:number) => {
          return (
            <Link key={index} href={`products/${index}`}>
              <p>product {each}</p>
            </Link>
          )
        })}
    </div>
  )
}
