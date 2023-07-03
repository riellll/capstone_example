import React from 'react'
import Link from 'next/link'

const Inventory = () => {
  return (
    <div className='flex flex-col mx-auto'>
        
            <p className='text-3xl font-semibold place-self-center py-10'>Medical Inventory</p>

            

    <div className='flex justify-between'>
        <div>
            <label for="countries" class="block mb-2 ml-3 text-lg font-medium text-gray-900 dark:text-white">View Medical Inventory for Month of:</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ml-10 w-48 h-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
            </select>
        </div>

        {/* <Link href="/dashboard/manage_database" className='w-32 mr-10'>                
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-medium rounded-2xl text-xl px-5 py-2.5  text-center  w-32"
                  >
                    Back
                  </button>
                </Link> */}
    </div>         
                
<div className='pb-10'>
    <div class="overflow-x-auto shadow-md sm:rounded-2xl">
    <table class="w-full text-lg text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='text-xl'>
                <th scope="col" class="px-6 py-3">
                    Item Code
                </th>
                <th scope="col" class="px-6 py-3">
                    Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Initial Stock
                </th>
                <th scope="col" class="px-6 py-3">
                    IN
                </th>
                <th scope="col" class="px-6 py-3">
                    OUT
                </th>
                <th scope="col" class="px-6 py-3">
                    Final Stock
                </th>
                <th scope="col" class="px-6 py-3">
                    Stock Value
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    para
                </th>
                <td class="px-6 py-4">
                    Paracetamol
                </td>
                <td class="px-6 py-4">
                    8
                </td>
                <td class="px-6 py-4">
                    40
                </td>
                <td class="px-6 py-4">
                    11
                </td>
                <td class="px-6 py-4">
                    37
                </td>
                <td class="px-6 py-4">
                    Php 900
                </td>
                
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    bio-fl
                </th>
                <td class="px-6 py-4">
                    Bioflu
                </td>
                <td class="px-6 py-4">
                    15
                </td>
                <td class="px-6 py-4">
                    40
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4">
                    35
                </td>
                <td class="px-6 py-4">
                    Php 100
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    bio-gi
                </th>
                <td class="px-6 py-4">
                    Biogesic
                </td>
                <td class="px-6 py-4">
                    5
                </td>
                <td class="px-6 py-4">
                    40
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    35
                </td>
                <td class="px-6 py-4">
                    Php 80
                </td>
                
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    loper
                </th>
                <td class="px-6 py-4">
                    Loperamide
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    40
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    40
                </td>
                <td class="px-6 py-4">
                    Php 50
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    adv
                </th>
                <td class="px-6 py-4">
                    Advil
                </td>
                <td class="px-6 py-4">
                    15
                </td>
                <td class="px-6 py-4">
                    40
                </td>
                <td class="px-6 py-4">
                    5
                </td>
                <td class="px-6 py-4">
                    50
                </td>
                <td class="px-6 py-4">
                    Php 200
                </td>
                
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    neo-z
                </th>
                <td class="px-6 py-4">
                    Neozep
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    40
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4">
                    30
                </td>
                <td class="px-6 py-4">
                    Php 150
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    tem
                </th>
                <td class="px-6 py-4">
                    Tempra
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    Php 400
                </td>
                
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    env
                </th>
                <td class="px-6 py-4">
                    Enervon
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    40
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4">
                    30
                </td>
                <td class="px-6 py-4">
                    Php 500
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    choco
                </th>
                <td class="px-6 py-4">
                    Chocolate
                </td>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    5
                </td>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    5
                </td>
                <td class="px-6 py-4">
                    Php 100
                </td>
                
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    b-aid
                </th>
                <td class="px-6 py-4">
                    Band Aid
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    5
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    5
                </td>
                <td class="px-6 py-4">
                    Php 150
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    alco
                </th>
                <td class="px-6 py-4">
                    Alcohol
                </td>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    5
                </td>
                <td class="px-6 py-4">
                    3
                </td>
                <td class="px-6 py-4">
                    3
                </td>
                <td class="px-6 py-4">
                    Php 160
                </td>
                
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    btd-1
                </th>
                <td class="px-6 py-4">
                    Betadine
                </td>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    Php 120
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ctn-b
                </th>
                <td class="px-6 py-4">
                    Cotton Ball
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    5
                </td>
                <td class="px-6 py-4">
                    3
                </td>
                <td class="px-6 py-4">
                    4
                </td>
                <td class="px-6 py-4">
                    Php 200
                </td>
                
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    mc-p
                </th>
                <td class="px-6 py-4">
                    Micropore
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    5
                </td>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    6
                </td>
                <td class="px-6 py-4">
                    Php 100
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    gavz
                </th>
                <td class="px-6 py-4">
                    Gaviscon
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4">
                    3
                </td>
                <td class="px-6 py-4">
                    9
                </td>
                <td class="px-6 py-4">
                    Php 180
                </td>
                
            </tr>
            
        </tbody>
    </table>
</div>

</div>
    </div>
  )
}

export default Inventory