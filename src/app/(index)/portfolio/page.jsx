"use client";

import BarChart from "@/components/BarChart/BarChart";
import React from "react";
import useSWR from "swr";
import { useState, useEffect } from "react";

export const metadata = {
  title: "Portfolio | UCode Clinic",
  description: "UCode Clinic Portfolio Page",
};

const PortfolioPage = () => {
  const [paraStock, getParaStock] = useState(0)
  const [bioStock, getBioStock] = useState(0)
  const [paraIn_Out, getParaIn_Out] = useState([]);
  const [bioIn_Out, getBioIn_Out] = useState([]);
  const [prodName, getProdName] = useState([])
  const [zofData, getZofData] = useState({
    stock: 0,
    in: 0,
    out: 0,
  })
  const [aspData, getAspData] = useState({
    stock: 0,
    in: 0,
    out: 0,
  })

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data: invData,
    mutate,
    error: invError,
    isLoading: invIsLoading,
  } = useSWR("http://localhost:3000/api/inventory", fetcher);

  // console.log(invData);
  useEffect(() => {
    const productName = invData?.reduce((accumulator, current) => {
      if (!accumulator.find((item) => item.medicine_name.toLowerCase() === current.medicine_name.toLowerCase())) {
        accumulator.push(current);
      }
      return accumulator;
    }, []).map(item => item.medicine_name)
    // .map(item => item.medicine_name)
    // const productName2 = 
    getProdName(productName)
    console.log(productName);
    // const paracetamol_in = invData?.filter(item => item.medicine_name.toLowerCase() == "paracetamol").filter(item => item.In_Out.toLowerCase() == "in").map(item => parseInt(item.data.quantity)).reduce((curr, item) => curr += item, 0)

    // const paracetamol_out = invData?.filter(item => item.medicine_name.toLowerCase() == "paracetamol").filter(item => item.In_Out.toLowerCase() == "out").map(item => parseInt(item.data.quantity)).reduce((curr, item) => curr += item, 0)
    let paraIn = [];
    let paraOut = [];
    const paraIn_Out = invData
      ?.filter((item) => item.medicine_name.toLowerCase() == "paracetamol")
      .map((item) => {
        if (item.In_Out === "In") {
          paraIn.push(Number(item.data.quantity));
        } else {
          paraOut.push(parseInt(item.data.quantity));
        }
      });
    getParaIn_Out([
      paraIn.reduce((curr, item) => curr += item, 0),
      paraOut.reduce((curr, item) => curr += item, 0),
    ]);
    getParaStock(
      paraIn.reduce((curr, item) => curr += item, 0) -
        paraOut.reduce((curr, item) => curr += item, 0)
    );
    //  console.log(paraIn.reduce((curr, item) => curr += item, 0));
    //  console.log(paraOut.reduce((curr, item) => curr += item, 0));
    // getParaIn_Out([paracetamol_in, paracetamol_out])
    // getParaStock(paracetamol_in - paracetamol_out)

    const biogesic_in = invData
      ?.filter((item) => item.medicine_name.toLowerCase() == "biogesic")
      .filter((item) => item.In_Out.toLowerCase() == "in")
      .map((item) => parseInt(item.data.quantity))
      .reduce((curr, item) => (curr += item), 0);

    const biogesic_out = invData
      ?.filter((item) => item.medicine_name.toLowerCase() == "biogesic")
      .filter((item) => item.In_Out.toLowerCase() == "out")
      .map((item) => parseInt(item.data.quantity))
      .reduce((curr, item) => (curr += item), 0);

    const aspirin_in = invData
      ?.filter((item) => item.medicine_name == "Aspirin")
      .filter((item) => item.In_Out.toLowerCase() == "in")
      .map((item) => parseInt(item.data.quantity))
      .reduce((curr, item) => (curr += item), 0);

    const aspirin_out = invData
      ?.filter((item) => item.medicine_name == "Aspirin")
      .filter((item) => item.In_Out.toLowerCase() == "out")
      .map((item) => parseInt(item.data.quantity))
      .reduce((curr, item) => (curr += item), 0);

    const zofran_in = invData
      ?.filter((item) => item.medicine_name == "Zofran")
      .filter((item) => item.In_Out.toLowerCase() == "in")
      .map((item) => parseInt(item.data.quantity))
      .reduce((curr, item) => (curr += item), 0);

    const zofran_out = invData
      ?.filter((item) => item.medicine_name == "Zofran")
      .filter((item) => item.In_Out.toLowerCase() == "out")
      .map((item) => parseInt(item.data.quantity))
      .reduce((curr, item) => (curr += item), 0);
   console.log(aspirin_in, zofran_in);
   getZofData((prev) => {
  return{...zofData, stock: zofran_in - zofran_out, in: zofran_in, out: zofran_out}})
   getAspData((prev) => {
  return{...aspData, stock: aspirin_in - aspirin_out, in: aspirin_in, out: aspirin_out}})

    getBioIn_Out([biogesic_in, biogesic_out]);
    getBioStock(biogesic_in - biogesic_out);
  }, [invData]);

  // console.log(paraStock);
  // console.log(bioStock);
  // console.log(paraIn_Out);
  // console.log(bioIn_Out);
  console.log(prodName);
  console.log(zofData);
  console.log(aspData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!e.target[2].value) {
      alert('pls input the quantity');
      return
    }
    const medicine_name = e.target[0].value;
    const data = {
      item_code: 222,
      dosage: "rrrrr",
      quantity: e.target[2].value,
    };
    const In_Out = e.target[1].value;
    const expiration_date = 64850;
    
    console.log(e.target[0].value,e.target[1].value,e.target[2].value);
    try {
      await fetch("/api/inventory", {
        method: "POST",
        body: JSON.stringify({
          medicine_name,
          data,
          In_Out,
          expiration_date,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      // setError(err);
      console.log(err);
    }
  };

  return (
    // <div>PortfolioPage</div>
    <>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
            <DatePicker className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" selected={mfg_date} onChange={(date) => setMfg_date(date)} />
            </div>
      <BarChart data={{ paraStock, bioStock, aspData, zofData, prodName }} />

      <div className="grid grid-cols-4 gap-3">
        <h1>Biogesic Stock: {invIsLoading ? 'Loading...' : bioIn_Out[0] - bioIn_Out[1]}</h1>
        <h1>Paracetamol Stock: {invIsLoading ? 'Loading...' : paraIn_Out[0] - paraIn_Out[1]}</h1>
        <h1>Aspirin Stock: {invIsLoading ? 'Loading...' : aspData.stock}</h1>
        <h1>Zofran Stock: {invIsLoading ? 'Loading...' : zofData.stock}</h1>
        <h1>Biogesic In: {invIsLoading ? 'Loading...' : bioIn_Out[0]}</h1>
        <h1>Paracetamol In: {invIsLoading ? 'Loading...' : paraIn_Out[0]}</h1>
        <h1>Aspirin In: {invIsLoading ? 'Loading...' : aspData.in}</h1>
        <h1>Zofran In: {invIsLoading ? 'Loading...' : zofData.in}</h1>
        <h1>Biogesic Out: {invIsLoading ? 'Loading...' : bioIn_Out[1]}</h1>
        <h1>Paracetamol Out: {invIsLoading ? 'Loading...' : paraIn_Out[1]}</h1>
        <h1>Aspirin Out: {invIsLoading ? 'Loading...' : aspData.out}</h1>
        <h1>Zofran Out: {invIsLoading ? 'Loading...' : zofData.out}</h1>

        <form className="" onSubmit={handleSubmit}>
          <label
            for="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Medecine
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Paracetamol</option>
            <option>Biogesic</option>
            <option>Zofran</option>
            <option>Aspirin</option>
          </select>
          <label
            for="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            In/Out
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>In</option>
            <option>Out</option>
          </select>

          
          <input type="number" placeholder="Quantity" />

          <button>Send</button>
        </form>
      </div>
    </>
  );
};

export default PortfolioPage;
