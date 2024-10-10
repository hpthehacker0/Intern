import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";

function Status() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/supplier/getAcceptedStatus/" +
          localStorage.getItem("supID")
      )
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var requestDatas = data.map((value, index) => {
    return (
      <div className="w-[80%] bg-[#FCBD16]/20 p-10">
        <form className="flex items-center justify-between h-[150px]">
          <div className="flex flex-col items-start justify-evenly h-full">
            <h1 className="font-bold">Company Data</h1>
            <p>Name: {value["name"]}</p>
            <p name="email">Email: {value["email"]}</p>
            <p>Phone: {value["phone"]}</p>
          </div>
          <div className="flex flex-col items-center justify-between h-[90%]">
            <a
              className="w-[100px] bg-[#FCBD16] p-2 rounded-2xl"
              target="_blank"
              href={`http://localhost:5000/company/downloadCompanyFile/${value["_id"]}`}
            >
              Download
            </a>
          </div>
        </form>
      </div>
    );
  });

  return (
    <div>
      <nav className="w-full flex justify-between px-12 pt-3 h-[8vh]">
        <div className="flex flex-col items-center ">
          <img src={logo} alt="Logo" className="h-10" />
          <h1 className="">SUPPLYCHAIN</h1>
        </div>
        <div className="flex items-center gap-9">
          <Link
            className="text-lg font-semibold bg-[#FCBD16] px-4 py-2 rounded-full"
            to="/supplierLandingPage"
          >
            Back
          </Link>
          <Link
            className="text-lg font-semibold bg-[#FCBD16] px-4 py-2 rounded-full"
            to="/signUp"
          >
            Logout
          </Link>
        </div>
      </nav>
      <div className="w-full flex flex-col items-center mt-10">
        {data.length === 0 && <div>No Data</div>}
        {data.length !== 0 && requestDatas}
      </div>
    </div>
  );
}

export default Status;
