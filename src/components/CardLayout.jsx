import React from 'react'
import NameCard from './NameCard'

const CardLayout = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:flex-wrap gap-5'>
      <NameCard/>
      <NameCard/>
      <NameCard/>
      <NameCard/>
      <NameCard/>
      <NameCard/>
      <NameCard/>
      </div>
  )
}

export default CardLayout