import Link from 'next/link'
import React from 'react'

const Patient_queue = () => {
  return (
    <div className="mx-auto p-20 pb-96">
      <div className="flex ">
        <p> No admitted patient at the moment...</p>
        <Link href="/dashboard/add_patient" className="pl-20">
          {" "}
          <button
            type="button"
            class="text-white bg-gradient-to-r bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-medium rounded-2xl px-5 py-2.5 text-center text-xl mr-2 mb-2"
          >
            Start Admission
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Patient_queue