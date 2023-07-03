import Link from 'next/link'
import React from 'react'

const Purge_items = () => {
  return (
    <div className='mx-auto'>
<section class=" ">
    <div class="flex flex-col items-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-gray-100 rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 mx-auto">
                <div className="flex justify-between pt-3">
                    <div>
                            <div className='flex flex-col'>
                                <label for="status" className="font-semibold">
                                    Items to Purge in Inventory :{" "}
                                </label>
                                <select name="status" id="status" className="w-40">
                                    <option value="" selected>
                                        {" "}
                                    </option>
                                    <option value="In-bed">Near Expired Items</option>
                                    <option value="Outpatient">Depleted Items</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                            <div>
                                <label for="productName" className="">
                                Product Name :{" "}
                                </label>
                                <select
                                name="productName"
                                id="productName"
                                className="leading-8 bg-white"
                                >
                                <option value="" selected>
                                    {" "}
                                </option>
                                <option value="Paracetamol">Paracetamol</option>
                                <option value="Bioflu">Bioflu</option>
                                <option value="Biogesic">Biogesic</option>
                                <option value="Loperamide">Loperamide</option>
                                <option value="Advil">Advil</option>
                                <option value="Neozep">Neozep</option>
                                <option value="Tempra for Kids">Tempra for Kids</option>
                                <option value="Enervon">Enervon</option>
                                <option value="Chocolate">Chocolate</option>
                                <option value="Band-aid">Band-aid</option>
                                <option value="Alcohol">Alcohol</option>
                                <option value="Betadine">Betadine</option>
                                <option value="Cotton Ball">Cotton Ball</option>
                                <option value="Micropore">Micropore</option>
                                <option value="Gauze">Gauze</option>
                                <option value="Gaviscon">Gaviscon</option>
                                </select>
                            </div>
                            <div className="flex items-center pb-4 med-border">
                                <p>Available Stock : </p>&nbsp;
                                <h2 className="bg-white p-1 pr-2 rounded-lg">10</h2>
                                &nbsp;&nbsp;&nbsp;
                                <label for="quantity" class="block font-medium text-gray-900">
                                Quantity : &nbsp;
                                </label>
                                <input
                                type="text"
                                name="quantity"
                                id="quantity"
                                class="bg-white border border-gray-300 text-gray-900 sm: rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-14 pl-2.5 p-1"
                                placeholder="Qty"
                                required=""
                                />
                            </div>
                            <div>
                                <label for="productName" className="">
                                Product Name :{" "}
                                </label>
                                <select
                                name="productName"
                                id="productName"
                                className="leading-8"
                                >
                                <option value="" selected>
                                    {" "}
                                </option>
                                <option value="Paracetamol">Paracetamol</option>
                                <option value="Bioflu">Bioflu</option>
                                <option value="Biogesic">Biogesic</option>
                                <option value="Loperamide">Loperamide</option>
                                <option value="Advil">Advil</option>
                                <option value="Neozep">Neozep</option>
                                <option value="Tempra for Kids">Tempra for Kids</option>
                                <option value="Enervon">Enervon</option>
                                <option value="Chocolate">Chocolate</option>
                                <option value="Band-aid">Band-aid</option>
                                <option value="Alcohol">Alcohol</option>
                                <option value="Betadine">Betadine</option>
                                <option value="Cotton Ball">Cotton Ball</option>
                                <option value="Micropore">Micropore</option>
                                <option value="Gauze">Gauze</option>
                                <option value="Gaviscon">Gaviscon</option>
                                </select>
                            </div>
                            <div className="flex items-center">
                                <p>Available Stock : </p>&nbsp;
                                <h2 className="bg-white p-1 pr-2 rounded-lg">10</h2>
                                &nbsp;&nbsp;&nbsp;
                                <label for="quantity" class="block font-medium text-gray-900">
                                Quantity : &nbsp;
                                </label>
                                <input
                                type="text"
                                name="quantity"
                                id="quantity"
                                class="bg-white border border-gray-300 text-gray-900 sm: rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-14 pl-2.5 p-1"
                                placeholder="Qty"
                                required=""
                                />
                            </div>
                            </div>
                    </div>
                
                </div>
                <div className='flex justify-end pt-4'>
                        <Link href="/dashboard">
                        {" "}
                        <button
                            type="button"
                            class="text-white bg-gradient-to-r bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-medium rounded-2xl text-xl px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            Cancel
                        </button>
                        </Link>
                        <Link href="/dashboard">
                        {" "}
                        <button
                            type="button"
                            class="text-white bg-gradient-to-r bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-medium rounded-2xl text-xl px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            Delete Item
                        </button>
                        </Link>
                    </div>
        </div>

            


    </div>
  </div>
</section>

    </div>
  )
}

export default Purge_items