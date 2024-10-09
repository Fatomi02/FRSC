/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  //used to navigate
  const navigate = useNavigate();

  //used to save data and set data
  const [vehicleData, setVehicleData] = useState();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //animation library effect
  useEffect(() => {
    AOS.init();
  }, []);

  //get the  vehicle data from the json url
  useEffect(() => {
    axios
      .get(
        `https://vehicle-owner-database-default-rtdb.firebaseio.com/post-info-FRSC.json`,
      )
      .then((res) => {
        if(res?.data) {
          setVehicleData(Object.entries(res.data));
        }
      });
  }, []);

  //on change function in the search input field
  const handleChange = (event) => {
    setInputValue(event.target.value);
    setError(false);
  };

  const enter = (e) => {
    if (e.key === "Enter" || e.key === "Return") {
      searchFunc();
    }
    return;
  };

  //filter function when the check owner is click and navigation to the detail page
  const searchFunc = () => {
    if(vehicleData) {
      let detail = [];
      if (inputValue !== "") {
        let value = inputValue.toUpperCase();
        detail = vehicleData.filter(
          ([key, entry]) => entry.vehicle_plate_number.toUpperCase() === value,
        );
        if (detail.length !== 0) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate(`/history/${detail[0][0]}`);
          }, 5000);
        }
      }
      //check if the detail length is equal to 0 to toggle the error mode
      if (detail.length < 1) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setError(true);
        }, 5000);
      }
    }
    else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setError(true);
      }, 5000);
    }
  };

  return (
    <>
      <section className="bg-[#c42b2b] w-full py-2 m-0 text-center">
        <h2 className="text-3xl font-bold text-center">Vehicle Owner Lookup</h2>
        <div className="tooltip_div">
          <span className="tooltip font-sans font-medium mt-5 flex justify-center bg-[#EEEEEE] w-[300px] py-2 rounded-[30px] mx-auto">
            By Nigeria License Plate Number
          </span>
        </div>
        {!error ? (
          <>
            <div className="mt-5 mx-auto w-[98%] md:w-[520px] py-2 align-middle md:h-[78px] bg-[#EEEEEE] rounded-[50px] border-2 border-[#201E43] flex">
              <input
                onKeyPress={(e) => enter(e)}
                onChange={(e) => handleChange(e)}
                className="h-full w-[62%] py-[6px] px-4 text-[14px] md:text-xl font-bold bg-[#EEEEEE] border-none rounded-[50px]"
                type="text"
                placeholder="Enter Vehicle Plate Number"
              />
              <button
                onClick={() => searchFunc()}
                className="md:h-[60px] w-[36%] bg-[#201E43] rounded-[50px] hover:opacity-90 md:text-xl text-[#EEEEEE]"
              >
                {loading ? `Loading...` : `Check History`}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mt-5 mx-auto w-[98%] md:w-[520px] py-2 align-middle md:h-[78px] bg-[#EEEEEE] rounded-[50px] border-2 border-red-700 flex">
              <input
                onKeyPress={(e) => enter(e)}
                onChange={(e) => handleChange(e)}
                className="h-full w-[62%] py-[6px] px-4 text-[14px] md:text-xl font-bold bg-[#EEEEEE] border-none rounded-[50px]"
                type="text"
                placeholder="Enter Vehicle Plate Number"
              />
              <button
                onClick={() => searchFunc()}
                className="md:h-[60px] w-[36%] bg-[#201E43] rounded-[50px] hover:opacity-90 md:text-xl text-[#EEEEEE]"
              >
                {loading ? `Loading...` : `Check History`}
              </button>
            </div>
            <span className="text-red-300">
              No record found. Enter the correct vehicle plate number
            </span>
          </>
        )}

        <div className="w-full text-center my-4">
          <a className="no-underline text-[#EEEEEE]" href="#">
            Where to find Vehicle Plate Number ?
          </a>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
