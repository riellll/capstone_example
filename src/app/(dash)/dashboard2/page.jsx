'use client'
import BarChart from "@/components/BarChart/BarChart"
import { useSession } from "next-auth/react"
import { useSWR } from "swr"




const Dashboard = () => {
  //const session = useSession();
  //console.log(session);
  return (
  <div className='text-red-300'> Hello world
  
  {/* <BarChart/> */}
  </div>
  )
}

export default Dashboard