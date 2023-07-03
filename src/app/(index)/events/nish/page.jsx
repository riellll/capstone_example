"use client";
import { useEffect, useState } from "react";
import { medicine_inventory } from "./data";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const page = () => {
  const [expiry_date, setExpiry_date] = useState(new Date());
  const [mfg_date, setMfg_date] = useState(new Date());
  const [medData, setMedData] = useState("");
  const [medQuan, setMedQuan] = useState(0);
  const [medAmp, setMedAmp] = useState(0);
  const [medData2, setMedData2] = useState({
    Item_code: medData?.Item_code,
    category: medData?.category,
    usage: medData?.usage,
    amp_per_item: medData?.amp_per_item,
    expiry_date: medData?.expiry_date,
    mfg_date: medData?.mfg_date,
    quantity: medData?.quantity,
    unit: medData?.unit,
    OR_number: medData?.OR_number,
  });

  useEffect(() => {
    const data = medicine_inventory[medData];
    console.log(data);
    setMedData2(data);
  }, [medData]);

  console.log(typeof medData2?.quantity);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !e.target[0].value ||
      !e.target[8].value ||
      !e.target[2].value ||
      !e.target[3].value ||
      !e.target[1].value ||
      !e.target[5].value ||
      !e.target[6].value ||
      !e.target[7].value ||
      !e.target[4].value
    ) {
      alert("Please input all forms");
      return;
    }

    const Product_Name = e.target[0].value;
    const OR_Number = e.target[1].value;
    const Quantity = e.target[2].value;
    const Item_Code = e.target[3].value;
    const Amt_Per_Item = e.target[4].value;
    const Mfg_Date = e.target[5].value;
    const Total_Amount = e.target[6].value;
    const Expiry_Date = e.target[7].value;
    const DELIVERED_BY = e.target[8].value;
    // console.log({Product_Name: Product_Name,
    //   OR_Number: OR_Number,
    //   Quantity: Quantity,
    //   Item_Code: Item_Code,
    //   Amt_Per_Item: Amt_Per_Item,
    //   Mfg_Date: Mfg_Date,
    //   Total_Amount: Total_Amount,
    //   Expiry_Date: Expiry_Date,
    //   DELIVERED_BY: DELIVERED_BY});

    const medicine_name = Product_Name;
    const data = {
      item_code: Item_Code,
      Expiry_Date: Expiry_Date,
      quantity: Quantity,
      OR_Number: OR_Number,
      Amt_Per_Item: Amt_Per_Item,
      Mfg_Date: Mfg_Date,
      Total_Amount: Total_Amount,
      DELIVERED_BY: DELIVERED_BY,
    };
    const In_Out = "In";
    const expiration_date = Expiry_Date;

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
      // mutate();
      alert("Item Added To Inventory");
      setMedData2({});
      e.target.reset();
    } catch (err) {
      // setError(err);
      console.log(err);
    }
  };

  return (
    <>
      {/* <h1>{medData}</h1> */}
      <form onSubmit={handleSubmit} className="my-5 mx-5">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="productName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name {" "}
            </label>
            <select
              name="productName"
              id="productName"
              className="leading-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setMedData(e.target.value)}
            >
              <option value="" selected></option>
              <option value="Paracetamol">Paracetamol</option>
              <option value="Bioflu">Bioflu</option>
              <option value="Biogesic">Biogesic</option>
              <option value="Loperamide">Loperamide</option>
              <option value="Advil">Advil</option>
              <option value="Neozep">Neozep</option>
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
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              OR Number
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              type="number"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              onChange={(e) => setMedQuan(e.target.value)}
              value={medQuan}
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Item Code
            </label>
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              value={medData2?.Item_code}
            />
          </div>
          <div>
            <label
              for="website"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Amt Per Item
            </label>
            <input
              type="number"
              id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              value={medData2?.amp_per_item}
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {" "}
              Mfg Date
            </label>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
            <DatePicker className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" selected={mfg_date} onChange={(date) => setMfg_date(date)} />
            </div>
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Total Amount
            </label>
            <input
              type="number"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              value={medQuan * medData2?.amp_per_item}
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {" "}
              Expiry Date
            </label>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
            <DatePicker className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" selected={expiry_date} onChange={(date) => setExpiry_date(date)} />
            </div>
          </div>
        </div>
        <div class="mb-6">
          <label
            for="confirm_password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            DELIVERED BY
          </label>
          <input
            type="text"
            id="confirm_password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to inventory
        </button>  

      </form>

    </>
  );
};

export default page;
