/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Hamburger from "../../../assets/icons/bars-solid.svg";
import Dismiss from "../../../assets/icons/xmark-solid.svg";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar({ setter }) {
  const audioRef = useRef(null);
  // const notificationSound = new Audio('../../../assets/audio/notification.wav');

  const styles = {
    container: {
      position: "relative",
    },
    iconContainer: {
      position: "relative",
      fontSize: "24px",
      cursor: "pointer",
    },
    icon: {
      fontSize: "28px", // Adjust size of icon
      color: "#333", // Icon color
    },
    badge: {
      position: "absolute",
      top: "-10px",
      right: "-10px",
      background: "#ff5e5e", // Badge background color
      color: "white",
      borderRadius: "50%",
      padding: "4px 8px",
      fontSize: "12px",
      fontWeight: "bold",
    },
  };
  const [notifications, setNotifications] = useState(0);
  const [previousNotifications, setPreviousNotifications] = useState(0);
  const navigate = useNavigate();
  //useState to switch the hamburger toggler
  const [toggle, setToggle] = useState(false);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Playback failed:", error);
      });
    }
  };

  useEffect(() => {
    const fetchNotifications = () => {
      axios
        .get(
          `https://vehicle-owner-database-default-rtdb.firebaseio.com/post-info-FRSC.json`,
        )
        .then((res) => {
          if(res?.data) {
            const unreadCount = Object.values(res?.data).filter(
              (fil) => !fil.read,
            );
            setNotifications(unreadCount.length);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchNotifications();

    const interval = setInterval(fetchNotifications, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Check if the notifications count has changed
    if (notifications !== previousNotifications) {
      if (previousNotifications !== 0) {
        // Show a toast notification if the unread count changes
        toast.info(`New unread notifications count: ${notifications}`);
      }
      playSound();
      // Update the previousNotifications to the current count
      setPreviousNotifications(notifications);
    }
  }, [notifications, previousNotifications]);

  //function to toggle the switch on
  const toggleOn = () => {
    setToggle(true);
  };

  //function to toggle the switch off
  const toggleOff = () => {
    setToggle(false);
  };

  const logOut = () => {
    localStorage.clear()
    navigate("/login");
  };

  //animation library effect
  useEffect(() => {
    AOS.init();
  }, [toggle]);

  //function to be called in the Parent component
  setter(toggle);

  const goNotification = () => {
    navigate("/notification");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000} // Close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <audio ref={audioRef} src="/notification.wav" preload="auto" />
      <section id="nav" className="bg-[#c42b2b] w-full lg:py-2 m-0">
        {!toggle ? (
          <>
            <nav
              className="flex flex-row flex-nowrap justify-between items-center align-middle w-full lg:w-[98%] xl:w-[88%] m-auto p-4"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="flex gap-4 align-middle lg:hidden">
                <div className="flex flex-row align-middle" onClick={toggleOn}>
                  <img
                    className="h-[25px] mt-[1px]"
                    src={Hamburger}
                    alt="toggler"
                  />
                </div>
                <h1
                  id="logo"
                  className="text-[19px] md:text-3xl font-serif lg:hidden w-max"
                >
                  Federal Road Safety Corp
                </h1>
              </div>
              <div className="lg:hidden inline-block" style={styles.container}>
                <div style={styles.iconContainer} onClick={goNotification}>
                  <i className="bell-icon" style={styles.icon}>
                    🔔
                  </i>{" "}
                  {/* You can replace this with an actual icon from FontAwesome or Material UI */}
                  {notifications > 0 && (
                    <span style={styles.badge}>{notifications}</span> // Show badge only if there are notifications
                  )}
                </div>
              </div>
              <h1
                id="logo"
                className="hidden text-xl md:text-2xl font-serif lg:flex w-max"
              >
                Federal Road Safety Corp
              </h1>
              <div className="hidden flex-row xl:gap-8 xl:text-xl gap-6 mt-1 lg:flex align-middle text-[18px]">
                <div className="hover:border-b-2 h-10">
                  <a href="#">Home</a>
                </div>
                <div className="hover:border-b-2 h-10">
                  <a href="#article">Article</a>
                </div>
                <div className="hover:border-b-2 h-8">
                  <a href="#contact">Contact Us</a>
                </div>
              </div>
              <div className="flex-row gap-4 hidden md:flex h-10">
                <div
                  style={styles.container}
                  onClick={goNotification}
                  className="inline-block"
                >
                  <div style={styles.iconContainer}>
                    <i className="bell-icon" style={styles.icon}>
                      🔔
                    </i>{" "}
                    {/* You can replace this with an actual icon from FontAwesome or Material UI */}
                    {notifications > 0 && (
                      <span style={styles.badge}>{notifications}</span> // Show badge only if there are notifications
                    )}
                  </div>
                </div>
                <button
                  onClick={logOut}
                  className="px-5 hover:bg-[#000000] bg-[#201E43] rounded-[20px] text-white"
                >
                  Log Out
                </button>
              </div>
            </nav>
          </>
        ) : (
          <>
            <nav
              className="flex relative"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="block w-[86%] overflow-hidden h-[100vh] bg-[#EEEEEE] py-4 px-5 relative z-10">
                <div className="h-[86vh]">
                  <h1
                    id="logo"
                    className="text-[19px] md:text-2xl font-serif lg:hidden w-max"
                  >
                    Federal Road Safety Corp
                  </h1>
                  <div className="block">
                    <div
                      className="w-[100%] cursor-pointer py-2 px-4 my-1"
                      onClick={toggleOff}
                    >
                      <a href="#">Home</a>
                    </div>
                    <div
                      className="w-[100%] cursor-pointer py-2 px-4 my-1"
                      onClick={toggleOff}
                    >
                      <a href="#article">Article</a>
                    </div>
                    <div
                      className="w-[100%] cursor-pointer py-2 px-4 my-1"
                      onClick={toggleOff}
                    >
                      <a href="#contact">Contact Us</a>
                    </div>
                  </div>
                </div>

                <div className="w-[100%] flex gap-5 mt-4">
                  <button
                    onClick={logOut}
                    className="px-5 py-2 hover:bg-[#000000] bg-[#201E43] rounded-[20px] text-white"
                  >
                    Log Out
                  </button>
                  {/* <button onClick={toggleOff} className="px-5 py-2 hover:bg-[#000000] bg-[white] hover:text-white rounded-[20px]">Sign In</button> */}
                </div>
              </div>
              <div className="w-[14%] py-4 px-5 bg-[antiquewhite] opacity-70 h-[100vh]">
                <div className="flex flex-row align-middle" onClick={toggleOff}>
                  <img className="h-[25px]" src={Dismiss} alt="toggler" />
                </div>
              </div>
            </nav>
          </>
        )}
      </section>
    </>
  );
}

export default Navbar;
