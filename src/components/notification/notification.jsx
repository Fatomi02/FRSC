import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./notification.css";

function Notification() {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://vehicle-owner-database-default-rtdb.firebaseio.com/post-info-FRSC.json`,
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const goBack = () => {
    navigate("/");
  };

  const goDetail = (id, detail) => {
    detail.read = true;
    axios.patch(
      `https://vehicle-owner-database-default-rtdb.firebaseio.com/post-info-FRSC/${id}.json`,
      detail,
    );
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <div className="bg">
        <div className="modal-container w-[100%] lg:w-[60%] mx-auto">
          <div className="modal-header">
            <h3 className="text-xl">Notification</h3>
            <button className="close-btn" onClick={goBack}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            {data ? (
              <ul className="flex flex-col-reverse">
                {Object?.entries(data).map(([key, entry]) => (
                  <li
                    className="list"
                    key={key}
                    style={{ fontWeight: entry.read ? "normal" : "bold" }}
                    onClick={() => goDetail(key, entry)}
                  >
                    <div className="circle">
                      <img className="w-fit" src={entry?.image} alt="" />
                    </div>
                    <div className="desc">
                      <span>
                        {entry?.lastname} {entry?.firstname}
                      </span>{" "}
                      <br />
                      <span>{entry?.description} </span>
                    </div>
                    <div>{entry?.time}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-[20px] text-xl">No notifications available</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
