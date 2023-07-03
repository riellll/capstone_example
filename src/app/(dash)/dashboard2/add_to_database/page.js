import Link from 'next/link'
import React from 'react'

const AddToDatabase = () => {
  return (
    <div className="pt-10 mx-auto ">
      <div className="flex flex-row items-center pt-6">
        <p className="pr-50 ">
          Patient is non-existent on our clinic
          database...&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <Link href="/dashboard/add_patient">
          {" "}
          <button
            type="button"
            class="text-white bg-gradient-to-r bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-medium rounded-2xl px-5 py-2.5 text-center text-xl mr-2 mb-2"
          >
            Add to Database
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddToDatabase