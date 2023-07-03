'use client';
import Link from 'next/link'
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Replenishment = () => {
    const [startDate, setStartDate] = useState(new Date());
 const [formData, setFormData] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
       const username = 'hahaha'
       console.log(e);
        // try {
        //     await fetch("/api/user", {
        //       method: "POST",
        //       body: JSON.stringify({
        //         username,
        //       }),
        //     });
        //     // mutate();
        //     e.target.reset();
        //   } catch (err) {
        //     // setError(err);
        //     console.log(err);
        //   }
    };
 console.log(startDate);
  return (
    <>
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />


    <div className='flex flex-col mx-auto'>
        
            <p className='text-3xl font-semibold place-self-center py-10'>Replenish Medical Supplies</p>
            <p>{formData}</p>
   

        
       {/* <form action={handleSubmit}> */}
 <div className='pb-10'>
    <div class="overflow-x-auto shadow-md sm:rounded-2xl">
    <table class="w-full text-sm text-left text-gray-500 ">
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
                <td class="px-6 py-4" contentEditable onChange={(e) => setFormData(e.target.value)}>
                    5
                </td>
                <td class="px-6 py-4" contentEditable >
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
                 {/* </form> */}
        </div>
        
<div class="relative max-w-sm">
<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker datepicker-buttons type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>

        {/* <form action={handleSubmit}>
            <input type="text" />
            <button>click me</button>
    </form> */}
{/*     <form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required/>
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
            <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
        </div>
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unique visitors (per month)</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
    </div>
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    <div class="mb-6">
        <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
        <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> */}
    {/* </div> */}
    </>
  )
}

export default Replenishment