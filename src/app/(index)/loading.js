import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'Home | UCode Clinic',
  description: 'UCode Clinic Home Page',
}

const LoadingPage = () => {
  return (
    <div>|
      <Image
      priority
      src="/assets/images/loading.svg"
      height={32}
      width={32}
      alt="loading icon"
    />
    </div>
  )
}

export default LoadingPage