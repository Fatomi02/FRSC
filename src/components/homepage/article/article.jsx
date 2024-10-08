import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Article() {
  //animation library effect
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="article"
        className="w-full bg-white py-8"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2 className="text-center text-2xl font-serif mb-1">
          Welcome to the Federal Road Safety Corps (FRSC)
        </h2>
        <h4 className="text-center text-xl font-serif mb-5">
          Ensuring Safer Roads, Protecting Lives
        </h4>
        <div className="md:w-[80%] w-[90%] m-auto">
          <span className="opacity-80 my-2">
            At the Federal Road Safety Corps (FRSC), our mission is to make
            Nigerian roads safer for everyone. Since our establishment in 1988,
            we have been committed to improving road safety, reducing accidents,
            and enhancing road user education through various initiatives, laws,
            and enforcement measures. Whether you are a motorist, pedestrian, or
            a concerned citizen, your safety is our priority.
          </span>
          <hr className="border-2 border-[#201E43] w-[80px] mx-auto my-4" />
          <h3 className="text-2xl font-bold text-[#201E43]">
            Our Vision: A Road System Free of Accidents
          </h3>
          <p className="leading-7">
            At the Federal Road Safety Corps (FRSC), our vision is bold and
            clear: to eradicate road traffic crashes in Nigeria and create a
            safe motoring environment for all. We strive for a future where
            every road user, whether driver, passenger, or pedestrian, can
            travel confidently, knowing that the roads are well-regulated,
            hazards are minimized, and the chances of accidents are drastically
            reduced.
            <br />
          </p>
          <p className="leading-7">Key Elements of Our Vision:</p>
          <ul className="leading-8 mt-2 pl-8 text-justify list-decimal">
            <li>
              <b>Zero Road Fatalities:</b> We believe that every life is
              precious and preventable road deaths should become a thing of the
              past. Through stricter enforcement of traffic laws, effective road
              safety education, and robust emergency response services, we aim
              to reduce road traffic fatalities to zero.
            </li>
            <li>
              <b>Safer Road Infrastructure:</b> Collaboration with government
              agencies, private sector partners, and international bodies
              ensures that Nigerian roads meet global safety standards. This
              includes improving road designs, signage, and maintenance to
              minimize risks and enhance traffic flow.
            </li>
            <li>
              <b>Responsible Road Usage:</b> We envision a society where road
              users take personal responsibility for their safety and the safety
              of others. By promoting road safety awareness, encouraging
              defensive driving techniques, and teaching pedestrians about road
              safety, we aim to foster a culture of shared responsibility on our
              roads.
            </li>
            <li>
              <b>Enhanced Emergency Response Systems:</b> Time is crucial in
              emergency situations. Our vision includes an efficient and
              responsive system where victims of road accidents receive prompt
              medical attention. Our goal is to significantly improve emergency
              rescue response times and minimize injuries caused by delayed
              care.
            </li>
            <li>
              <b>Advanced Technology for Road Safety:</b> Leveraging modern
              technology is essential to achieving our vision. From automated
              traffic surveillance systems to intelligent road safety data
              collection and analysis, we aim to use cutting-edge tools to
              monitor traffic, detect violations, and provide real-time updates
              for drivers.
            </li>
            <li>
              <b>Sustainable Road Safety Programs:</b> We are committed to the
              sustainability of road safety initiatives through continuous
              research, policy reforms, and training programs. By working
              closely with local communities and international bodies, we ensure
              that our programs evolve to meet the growing demands of Nigeria's
              road system.
            </li>
          </ul>
          <p className="leading-7 my-4">
            Our vision is more than just an aspiration—it’s a roadmap to
            creating a safer future for all road users. With your support and
            cooperation, together we can build a Nigeria where road accidents
            become a rare occurrence and safety on our roads is guaranteed for
            generations to come.
          </p>

          <h3 className="text-2xl font-bold text-[#201E43] mt-4">
            Our Mission
          </h3>
          <p className="leading-7">
            To regulate, enforce, and coordinate road traffic safety management
            in Nigeria through:
          </p>
          <ul className="leading-10 mt-2 pl-10 text-justify list-disc">
            <li>Public education and enlightenment on road safety</li>
            <li>Strict enforcement of road traffic laws</li>
            <li>
              Road infrastructure inspections and maintenance recommendations
            </li>
            <li>
              Collaborating with stakeholders to enhance road safety policies
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-[#201E43] mt-6">
            Core Functions
          </h3>
          <ul className="leading-10 mt-2 pl-10 text-justify list-decimal">
            <li>
              <b>Traffic Management & Enforcement: </b>We enforce traffic laws
              and regulations to maintain order on Nigerian roads, ensuring that
              all road users comply with speed limits, traffic signals, and
              safety guidelines.
            </li>
            <li>
              <b>Road Safety Awareness & Education: </b>Through community
              outreach programs, media campaigns, and school programs, we
              promote road safety education to instill responsible driving
              habits and encourage pedestrian safety.
            </li>
            <li>
              <b>Accident Prevention & Emergency Response: </b>Our emergency
              rescue teams are on standby 24/7 to respond to road crashes and
              ensure timely medical assistance to accident victims.
            </li>
            <li>
              <b>Driver's Licensing & Vehicle Registration: </b>We manage the
              issuance of driver's licenses and vehicle number plates, ensuring
              proper vetting and compliance with national road safety standards.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-[#201E43] mt-6">
            Key Services
          </h3>
          <ul className="leading-10 mt-2 pl-10 text-justify list-decimal">
            <li>
              <b>Report an Incident: </b>Quickly report accidents or unsafe road
              conditions via our emergency helpline or online form.
            </li>
          </ul>

          <h4 className="text-xl font-bold text-[#201E43] mt-6">
            Stay Safe, Stay Informed
          </h4>
          <p className="leading-7 my-2">
            For road safety tips, regulations, and real-time traffic updates,
            follow us on social media or subscribe to our newsletter.
          </p>
          <ul className="leading-10 mt-2 pl-10 text-justify list-disc">
            <li>
              <b>Helpline:</b>{" "}
              <a href="tel:+2349061716060">234 (90-6171-6060)</a>
            </li>
            <li>
              <b>
                Email:{" "}
                <a href="mailto:fatomiabdulrahmon@gmail.com">
                  fatomiabdulrahmon@gmail.com
                </a>
              </b>
            </li>
          </ul>

          <p className="mt-3">
            FRSC – Creating a safer Nigeria, one road at a time.
          </p>
        </div>
      </section>
    </>
  );
}

export default Article;
