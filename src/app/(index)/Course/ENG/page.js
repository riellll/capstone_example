"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";

const ENG = () => {
  const [baStudent, getBaStudent] = useState([]);
  const [baEmployee, getBaEmployee] = useState([]);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data: stuData,
    error: stuError,
    isLoading: stuIsLoading,
  } = useSWR("http://localhost:3000/api/student", fetcher);

  const {
    data: emData,
    error: emError,
    isLoading: emIsLoading,
  } = useSWR("http://localhost:3000/api/employee", fetcher);

  useEffect(() => {
    const getData = async () => {
      const course = await stuData.filter(
        (item) => item.department == "Department of Engineering"
      );
      // console.log(course);
      getBaStudent(course);
    };
    getData();

    const getData2 = async () => {
      const course = await emData.filter(
        (item) => item.department == "Engineering"
      );
      // console.log(course);
      getBaEmployee(course);
    };
    getData2();
  }, [stuData]);

  return (
    <main className=" mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">
        Department of Engineering
        </h1>
      </div>

      <div className="text-center py-3 flex flex-col gap-4 bg-slate-300">
        <h1 className="text-1xl font-bold">
         Staff Department
        </h1>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
              
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {stuIsLoading && (
              <tr>
                <th>Loading...</th>
              </tr>
            )}
            {baEmployee.map((item, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Link href={`/Course/ENG/employee/${item._id}`}>
                    {`${index + 1}. ${item.gender == 'Male' ? 'Mr.' : 'Mrs.'} ${item.first_name} ${item.last_name}`}
                  </Link>
                </th>

                <td>{item.job_role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center py-3 flex flex-col gap-4 bg-slate-300">
        <h1 className="text-1xl font-bold">
         Student
        </h1>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {stuIsLoading && (
              <tr>
                <th>Loading...</th>
              </tr>
            )}
            {baStudent.map((item, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Link href={`/Course/ENG/student/${item._id}`}>
                    {`${index + 1}. ${item.first_name} ${item.last_name}`}
                  </Link>
                </th>

                <td>{item.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ENG;
