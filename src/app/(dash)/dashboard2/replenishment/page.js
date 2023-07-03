'use client';
import Link from 'next/link'
import React, { useState } from 'react'

const Replenishment = () => {
 const [formData, setFormData] = useState({})
 const  getData = (e) => {
   console.log(e.target);
 }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //    const username = 'hahaha'
    //     try {
    //         await fetch("/api/user", {
    //           method: "POST",
    //           body: JSON.stringify({
    //             username,
    //           }),
    //         });
    //         // mutate();
    //         e.target.reset();
    //       } catch (err) {
    //         // setError(err);
    //         console.log(err);
    //       }
    // };

  return (
    <div className='flex flex-col mx-auto'>
        
            <p className='text-3xl font-semibold place-self-center py-10'>Replenish Medical Supplies</p>
   

        
       
<div className='pb-10'>
    <div class="overflow-x-auto shadow-md sm:rounded-2xl">
    <table class="w-full text-sm text-left text-gray-500 " onClick={getData}>
        <thead class="text-md text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    OR Number
                </th>
                <th scope="col" class="px-6 py-3">
                    Item Code
                </th>
                <th scope="col" class="px-6 py-3">
                    Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Amt Per Item
                </th>
                <th scope="col" class="px-6 py-3">
                    Total Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Expiry Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Mfg Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Delivery Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Time
                </th>
                <th scope="col" class="px-6 py-3">
                    Delivered By
                </th>
            </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" contentEditable>
                    clnc-061523
                </th>
                <td class="px-6 py-4" contentEditable>
                    para
                </td>
                <td class="px-6 py-4" contentEditable>
                    Paracetamol
                </td>
                <td class="px-6 py-4" contentEditable>
                    40
                </td>
                <td class="px-6 py-4" contentEditable>
                    5
                </td>
                <td class="px-6 py-4" contentEditable>
                 200
                </td>
                <td class="px-6 py-4" contentEditable>
                    06/10/2025
                </td>
                <td class="px-6 py-4" contentEditable>
                    06/10/2023
                </td>
                <td class="px-6 py-4" contentEditable>
                    06/15/2023
                </td>
                <td class="px-6 py-4" contentEditable>
                    10:30 am
                </td>
                <td class="px-6 py-4" contentEditable>
                    Browniedo
                </td>
                
            </tr>
            <tr class="border-b bg-gray-50  ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900" contentEditable>
                    clnc-061523
                </th>
                <td class="px-6 py-4" contentEditable>
                    bio-fl
                </td>
                <td class="px-6 py-4" contentEditable>
                    Bioflu
                </td>
                <td class="px-6 py-4" contentEditable>
                    40
                </td>
                <td class="px-6 py-4" contentEditable>
                    8
                </td>
                <td class="px-6 py-4" contentEditable>
                    320
                </td>
                <td class="px-6 py-4" contentEditable>
                    06/20/2024
                </td>
                <td class="px-6 py-4" contentEditable>
                    06/20/2023
                </td>
                <td class="px-6 py-4" contentEditable>
                    06/15/2023
                </td>
                <td class="px-6 py-4" contentEditable>
                    10:30 am
                </td>
                <td class="px-6 py-4" contentEditable>
                    Browniedo
                </td>
                
            </tr>
            <tr class="bg-white border-b  ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900"  contentEditable>
                    clnc-061523
                </th>
                <td class="px-6 py-4" contentEditable>
                    bio-gi
                </td>
                <td class="px-6 py-4" contentEditable>
                    Biogesic
                </td>
                <td class="px-6 py-4" contentEditable>
                    40
                </td>
                <td class="px-6 py-4" contentEditable>
                    5
                </td>
                <td class="px-6 py-4" contentEditable>
                    200
                </td>
                <td class="px-6 py-4" contentEditable>
                    04/22/2025
                </td>
                <td class="px-6 py-4" contentEditable>
                    04/22/2023
                </td>
                <td class="px-6 py-4" contentEditable>
                    06/15/2023
                </td>
                <td class="px-6 py-4" contentEditable>
                    10:30 am
                </td>
                <td class="px-6 py-4" contentEditable>
                    Browniedo
                </td>
                
            </tr>
            <tr class="border-b bg-gray-50  ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900" contentEditable>
                    clnc-061523
                </th>
                <td class="px-6 py-4" contentEditable>
                    loper
                </td>
                <td class="px-6 py-4" contentEditable>
                    Loperamide
                </td>
                <td class="px-6 py-4" contentEditable>
                    40
                </td>
                <td class="px-6 py-4" contentEditable>
                    4
                </td>
                <td class="px-6 py-4" contentEditable>
                     160
                </td>
                <td class="px-6 py-4" contentEditable>
                    08/08/2025
                </td>
                <td class="px-6 py-4" contentEditable>
                    08/08/2023
                </td>
                <td class="px-6 py-4" contentEditable>
                    06/15/2023
                </td>
                <td class="px-6 py-4" contentEditable>
                    10:30 am
                </td>
                <td class="px-6 py-4" contentEditable>
                    Browniedo
                </td>
                
            </tr>
            <tr class="bg-white border-b  ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900" contentEditable>
                    clnc-061523
                </th>
                <td class="px-6 py-4" contentEditable>
                    Adv
                </td>
                <td class="px-6 py-4" contentEditable>
                    Advil
                </td>
                <td class="px-6 py-4" contentEditable>
                    40
                </td>
                <td class="px-6 py-4" contentEditable>
                    10
                </td>
                <td class="px-6 py-4" contentEditable>
                  400
                </td>
                <td class="px-6 py-4" contentEditable>
                    04/05/2025
                </td>
                <td class="px-6 py-4" contentEditable>
                04/05/2023
                </td>
                <td class="px-6 py-4" contentEditable>
                06/15/2023
                </td>
                <td class="px-6 py-4" contentEditable>
                    10:30 am
                </td>
                <td class="px-6 py-4" contentEditable>
                    Browniedo
                </td>  
            </tr>        
            
        </tbody>
    </table>
</div>
             
</div> 
       
        <div className='flex justify-end'>
            {/* <Link href="/dashboard" className='w-32 mr-10'>                 */}
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-medium rounded-2xl text-xl px-5 py-2.5  text-center  w-32"
                  >
                    Cancel
                  </button>
                {/* </Link> */}
            {/* <Link className='w-48 mr-10'>                 */}
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-medium rounded-2xl text-xl px-5 py-2.5  text-center  w-48"
                  >
                    Add to inventory
                  </button>
                {/* </Link> */}
        </div>
        {/* <form action={handleSubmit}>
            <input type="text" />
            <button>click me</button>
    </form> */}
    


    </div>
  )
}

export default Replenishment