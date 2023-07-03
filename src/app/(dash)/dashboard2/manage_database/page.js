import Link from 'next/link'
import React from 'react'

const Manage_database = () => {
  return (
    <div>
      <div>
        <Link href="/dashboard/inventory">  <div className='p-10 border-double border-emerald-400 outline-4 rounded-3xl'>Inventory</div></Link>
        <Link href="/dashboard/replenishment"><div className='p-10 border-double border-emerald-400 outline-4 rounded-3xl'>Replenish Supplies</div></Link>
          <div className='p-10 border-double border-emerald-400 outline-4 rounded-3xl'>S Remove Depleted Non-Quantifiable Items</div>
      </div>


    </div>
  )
}

export default Manage_database