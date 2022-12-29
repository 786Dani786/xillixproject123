import Head from "next/head";
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import {
  FiMail,
  FiMapPin,
  FiPhone, 
  FiSmartphone,
} from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <>
      <BreadCrumb pageTitle="Contact Us"></BreadCrumb>

      <div className="container mt-14 mb-14">
        <div className="max-[480px]:grid p-0  md:grid-col-2 flex  m-5  mt-14">
          <div className="  max-[480px]:w-full w-1/3 md:w-fit  mt-14 ">
            <div className=" bg-gradient-to-r from-[#03228f] to-[#0e73e4] w-full h-16 z-30 right-0  ... p-4 rounded h-auto">
              <div className="flex flex-col pt-16 pr-8 pb-8 pl-12 md:pl-4">
                <div className="relative mb-5">
                  <p className="text-sm font-normal uppercase text-white	">
                    Let's Talk
                  </p>
                  <h1 className="mt-0 mr-2.5  mb-8 ml-0 text-white text-2xl relative font-semibold">
                    Speak with expert Engineers.
                  </h1>
                </div>

                <a
                  href="mailto:inf@xillixtech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center mb-8  relative ox-border">
                    <div className="icon-box ">
                      <FiMail color="#0b2c93" fontSize="16px" />
                    </div>

                    <div className="block justify-center ml-3">
                      <p className="   font-semibold text-white m-0 text-left block text-base">
                        Email:
                      </p>
                      <span className="text-white text-left  text-base">
                        info@xillixtech.com
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+4733378901"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center mb-8 relative ox-border">
                    <div className="icon-box ">
                      <FiPhone color="#0b2c93" fontSize="16px" />
                    </div>

                    <div className="block justify-center ml-3">
                      <p className="   font-semibold text-white m-0 text-left block text-base">
                        Phone:
                      </p>
                      <span className="text-white text-left text-base">
                        +92 (51) 844-2705
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/00923485245618/?text=urlencodedtext"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <div className="flex items-center mb-8 relative ox-border">
                    <div className="icon-box ">
                      <FiSmartphone color="#0b2c93" fontSize="16px" />
                    </div>

                    <div className="block justify-center ml-3">
                      <p className="font-semibold text-white m-0 text-left block text-base">
                        Whatsapp:
                      </p>
                      <span className="text-white text-left text-base ">
                        +92 (51) 844-2705
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  href="https://goo.gl/maps/x3yb2y4Jb597ffkM7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center mb-8 relative box-border">
                    <div className="icon-box ">
                      <FiMapPin color="#0b2c93" fontSize="16px" />
                    </div>

                    <div className="block justify-center ml-3">
                      <p className="font-semibold text-white m-0 text-left block text-base">
                        Addres:
                      </p>
                      <span className="text-white text-left  text-base">
                        Rawalpindi, Pakistan
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form start */}

          <div className=" max-[480px]:w-full w-2/3 contact-us-form mt-14  sm:ml-0 lg:ml-32 md:ml-2">
            <div className="block border-box mb-2">
              <p
                style={{ color: "#1273EB" }}
                className=" text-sm font-normal uppercase "
              >
                GET IN TOUCH
              </p>
              <h2 className="mt-0 mr-3 mb-1 ml-0 title">Fill The Form Below</h2>
            </div>
            <div className="grid gap-4 mb-6 md:grid cols-2">
              <form>
                <div className="">
                  <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="mb-6">
                      <input
                        type="text"
                        id="user_fname"
                        className="rounded  bg-gray-100 w-11/12 p-4 focus:border-0   max-[480px]:w-full"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="mb-6 text-right">
                      <input
                        type="text"
                        id="user_lname"
                        className="rounded bg-gray-100 w-11/12 p-4 focus:border-0   max-[480px]:w-full "
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2">
                    <div className="mb-6">
                      <input
                        type="number"
                        id="user_pnum"
                        className="rounded bg-gray-100 w-11/12 p-4 focus:border-0   max-[480px]:w-full"
                        placeholder="Phone"
                        required
                      />
                    </div>
                    <div className="mb-6 text-right">
                      <input
                        type="text"
                        id="user_email"
                        className="rounded bg-gray-100 w-11/12 p-4  focus:border-0  max-[480px]:w-full"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <textarea
                      rows={3}
                      cols={20}
                      className="rounded bg-gray-100 w-24 p-4 focus:border-0  max-[480px]:w-full md:w-full"
                      placeholder="Message ..."
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-start">
                    <button className="xillix_btn">Submit Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Form Ends  */}
        </div>
        {/* Container Ends here */}
      </div>

      {/* Map */}

      <div className="w-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d425456.61150342284!2d73.0921755!3d33.5824706!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38dfecb2bfb441f3%3A0x515ef902403f7d64!2sChaklala%20Scheme%203%20Chaklala%20Cantt.%2C%20Rawalpindi%2C%20Punjab!3m2!1d33.5824706!2d73.0921755!5e0!3m2!1sen!2s!4v1669304643728!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
