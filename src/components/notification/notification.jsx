import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./notification.css";

function Notification() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  // Fetch notifications from the API
  useEffect(() => {
    setIsLoading(true)
    const fetchNotifications = () => {
      axios
      .get(
        `https://vehicle-owner-database-default-rtdb.firebaseio.com/post-info-FRSC.json`,
      )
      .then((res) => {
        if(res.data) {
          setData(Object.entries(res.data));
          setIsLoading(false)
        }
        else {
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }


      fetchNotifications();

      const interval = setInterval(fetchNotifications, 1000);
  
      return () => clearInterval(interval);
  }, []);

  // Function to navigate back
  const goBack = () => {
    navigate("/");
  };

  // Function to navigate to the details page and mark the notification as read
  const goDetail = (id, detail) => {
    detail.read = true;
    axios.patch(
      `https://vehicle-owner-database-default-rtdb.firebaseio.com/post-info-FRSC/${id}.json`,
      detail,
    );
    navigate(`/detail/${id}`);
  };

  // Filter notifications based on search input
  const filteredNotifications = data.filter(
    ([key, entry]) =>
      entry.vehicle_plate_number
        ?.toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      entry.lastname?.toLowerCase().includes(searchValue.toLowerCase()) ||
      entry.firstname?.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      <div className="bg">
        <div className="modal-container w-[100%] lg:w-[60%] mx-auto">
          <div className="modal-header">
            <h3 className="text-xl">Notification</h3>
            <div className="flex gap-2 items-center">
              {/* Search input to filter notifications */}
              <input
                className="search"
                value={searchValue}
                type="search"
                name="notification_search"
                id="notification_search"
                placeholder="Search notifications..."
                onChange={(e) => setSearchValue(e.target.value)} // Update search value
              />
              <button className="close-btn" onClick={goBack}>
                &times;
              </button>
            </div>
          </div>
          <div className="modal-body">
            { isLoading ?  <div className="p-[20px] text-xl">Loading Notification</div> : 
            data.length > 0 ? (
              <ul className="flex flex-col-reverse">
                {filteredNotifications.map(([key, entry]) => (
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
                      <span>{entry?.description}</span>
                    </div>
                    <div className="w-[120px]">
                      {entry?.time} <br /> <small>{entry?.date}</small>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-[20px] text-xl">No notifications available</div>
            )
          }
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
