/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";

function Detail() {
  //storing the data of the vehicle owner
  const [detail, setDetail] = useState();

  const navigate = useNavigate();
  const idleTimeRef = useRef(null);

  const onIdle = () => {
    localStorage.clear();
    navigate("/login");
  };

  const idleTimer = useIdleTimer({
    ref: idleTimeRef,
    timeout: 1000 * 60 * 5,
    onIdle,
    debounce: 500,
  });
  //used useParam to get the id of the url
  const { id } = useParams();
  //getting the detail of the owner with the id gotten using param
  useEffect(() => {
    axios
      .get(
        `https://vehicle-owner-database-default-rtdb.firebaseio.com/post-info-FRSC/${id}.json`,
      )
      .then((res) => {
        setDetail(res?.data);
      });
  }, []);

  return (
    <>
      <section id="nav" className="bg-[#c42b2b] w-full lg:py-2 m-0">
        <nav className="flex flex-row flex-nowrap justify-between align-middle w-full lg:w-[98%] xl:w-[88%] m-auto p-4">
          <h1
            id="logo"
            className="text-xl md:text-2xl font-serif block text-center w-full"
          >
            Federal Road Safety Corp
          </h1>
        </nav>
      </section>
      <div id="detail" className="w-full bg-[#EEEEEE] py-8">
        <h2 className="text-center text-2xl font-serif mb-5 text-[#201E43]">
          Owner's Information
        </h2>
        <div className="md:w-[82%] w-[96%] justify-between m-auto mt-5 p-2 block lg:flex">
          <div className="lg:w-[48%]">
            <h2 className="text-center text-xl text-[#201E43] font-serif mb-5">
              Profile Picture
            </h2>
            <img
              className="w-full lg:w-fit mx-auto lg:h-[590px] h-[300px] bg-blue-900"
              src={detail?.image}
              alt=""
            />
          </div>
          <div className="lg:w-[48%]">
            <h2 className="text-center border-b-[1px] text-xl font-serif mb-5">
              Details
            </h2>
            <div className="block">
              <h2 className="border-b-[1px] border-[#201E43] text-[#201E43] text-[18px] font-serif mb-3">
                Name
              </h2>
              <div className="flex gap-4 mb-1">
                <label className="font-bold text-[18px]">First Name: </label>
                <span className="text-[#201E43] text-[18px]">
                  {detail?.firstname}
                </span>
              </div>
              <div className="flex gap-4 mb-1">
                <label className="font-bold text-[18px]">Last Name: </label>
                <span className="text-[#201E43] text-[18px]">
                  {detail?.lastname}
                </span>
              </div>
              <div className="flex gap-4 mb-1">
                <label className="font-bold text-[18px]">Middle Name: </label>
                <span className="text-[#201E43] text-[18px]">
                  {detail?.middlename}
                </span>
              </div>

              <h2 className="border-b-[1px] border-[#201E43] text-[#201E43] text-[18px] font-serif my-4">
                Location
              </h2>
              <div className="flex gap-4 mb-1">
                <label className="font-bold text-[18px]">Address: </label>
                <address className="text-[#201E43] text-[18px]">
                  {detail?.address}
                </address>
              </div>
              <div className="flex gap-4 mb-1">
                <label className="font-bold text-[18px]">State: </label>
                <span className="text-[#201E43] text-[18px]">
                  {detail?.state}
                </span>
              </div>

              <h2 className="border-b-[1px] border-[#201E43] text-[#201E43] text-[18px] font-serif my-4">
                Date of Birth & Blood Group
              </h2>
              <div className="flex gap-4 mb-1">
                <label className="font-bold text-[18px]">Date of Birth: </label>
                <span className="text-[#201E43] text-[18px]">
                  {detail?.date_of_birth}
                </span>
              </div>
              <div className="flex gap-4 mb-1">
                <label className="font-bold text-[18px]">Blood Group: </label>
                <span className="text-[#201E43] text-[18px]">
                  {detail?.blood_group}
                </span>
              </div>

              <h2 className="border-b-[1px] border-[#201E43] text-[#201E43] text-[18px] font-serif my-4">
                Vehicle Information
              </h2>
              <div className="flex gap-4 mb-1">
                <label className="font-bold text-[18px]">Vehicle Name: </label>
                <span className="text-[#201E43] text-[18px]">
                  {detail?.vehicle_name}
                </span>
              </div>
              <div className="flex gap-4 mb-1">
                <label className="font-bold text-[18px]">
                  Vehicle Plate Number:{" "}
                </label>
                <span className="text-[#201E43] text-[18px]">
                  {detail?.vehicle_plate_number}
                </span>
              </div>
              <div className="flex gap-4 mb-1">
                <label className="font-bold text-[18px]">
                  Plate Number Issued Date:{" "}
                </label>
                <span className="text-[#201E43] text-[18px]">
                  {detail?.plate_number_issued_date}
                </span>
              </div>
              <div className="flex gap-4 mb-1">
                <label className="font-bold text-[18px]">
                  Plate Number Expiring Date:{" "}
                </label>
                <span className="text-[#201E43] text-[18px]">
                  {detail?.plate_number_expiring_date}
                </span>
              </div>
              <div className="flex gap-4 mb-1">
                <label className="font-bold text-[18px]">
                  Valid Driver License:{" "}
                </label>
                <span className="text-[#201E43] text-[18px]">
                  {detail?.valid_driver_license ? `Yes` : `No`}
                </span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center text-2xl font-serif mt-5 text-[#201E43]">
          Offense Description
        </h2>
        <div className="lg:w-[82%] w-[96%] justify-between m-auto mt-5 p-2 block lg:flex">
          {detail?.description}
        </div>
      </div>
    </>
  );
}

export default Detail;
