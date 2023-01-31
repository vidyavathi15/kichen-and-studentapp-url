import React from 'react'

import { useRouter } from 'next/router'

export default function ProductDetails() {
  const router = useRouter()
  const id = router.query.productId 
  // here productId is same as the filename productId.tsx
  
  return (
    <div>ProductDetails {id}</div>
  )

  
}





