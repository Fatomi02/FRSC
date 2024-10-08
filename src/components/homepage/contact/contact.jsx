/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  //animation library effect
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="contact"
        className="w-full bg-[#EEEEEE] py-8"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <h2 className="text-center text-2xl font-serif mb-9">Contact Us</h2>
        <div className="lg:w-[80%] w-[92%] mx-auto justify-evenly block lg:flex">
          <div className="lg:w-[50%]">
            <h2 className="text-2xl font-bold text-[#201E43] mb-5">
              Send a Message
            </h2>
            <form action="mailto:fatomiabdulrahmon@gmail.com" method="get">
              <div className="lg:flex justify-between block gap-4 mb-5">
                <input
                  className="w-full lg:w-[48%] h-[40px] px-3"
                  type="text"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="w-full mt-5 md:mt-0 lg:w-[48%] h-[40px] px-3"
                  type="text"
                  placeholder="Your Email"
                  required
                />
              </div>
              <textarea
                className="w-full h-[200px] lg:h-[400px] px-3 py-2 mb-5"
                name="description"
                id="description"
              ></textarea>
              <input
                className="px-8 py-3 rounded-[50px] bg-[#201E43] text-white hover:opacity-90 cursor-pointer"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
          <div className="mt-5 lg:mt-0 lg:w-[40%]">
            <h3 className="text-2xl font-bold text-[#201E43] mb-5">
              Contact Information
            </h3>
            <div>
              <label className="block font-medium">Address: </label>{" "}
              <span className="opacity-80 block">
                Old, Oyo/ Ilorin Rd, Ogbomosho 210214
              </span>{" "}
              <br />
              <label className="block font-medium">Email: </label>{" "}
              <span className="opacity-80 block">
                <a href="mailto:fatomiabdulrahmon@gmail.com">
                  fatomiabdulrahmon@gmail.com
                </a>
              </span>{" "}
              <br />
              <label className="block font-medium">Tel: </label>{" "}
              <span className="opacity-80 block">
                <a href="tel:+2349061716060">+ 234-90-6171-6060</a>
              </span>{" "}
              <br />
            </div>
            <iframe
              className="w-[100%] h-[243px]"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
