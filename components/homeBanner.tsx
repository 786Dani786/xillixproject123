import React from "react";

const HomeBanner: React.FC = () => {
  return (
    <section className="w-full">
      <div className="bg-[url('/images/homebanner.jpg')]   bg-no-repeat flex relative	">
        <div
        className="max-[768px]:hidden"
          style={{
            position: "absolute",
            bottom: 0,
            width: '100%', 
            borderBottom: "120px solid white",
            borderLeft: "512px solid transparent", 
          }}
        > 
        </div>
        <div className="container">
          <div className="grid grid-rows-1">
            <div className="max-[768px]:grid max-[768px]:grid-cols-1   lg:grid lg:grid-cols-3 h-full flex justify-items-center items-center">
              <div className="max-[768px]:col-span-1  md:col-span-2">
                <div>
                  <div className="max-[768px]:p-6">
                    <div>
                      <h3 className="max-[480px]:text-3xl md:text-6xl text-white font-semibold">
                        IT Consulting Services For Your Business
                      </h3>
                    </div>
                    <div>
                      <p className="max-[480px]:text-xl md:text-3xl mt-4 text-white font-semibold">
                        We are leading technology solutions providing company
                        all over the world doing over 5 years.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-[768px]:hidden lg:col-span-1">
                <div className="p-10">
                  <div className="bg-[#e2e2e2] z-1 relative rounded-lg p-10">
                    <div className="heading-area">
                      <div className="sub-title">
                        <span className="">
                          We here to help you 24/7 with experts
                        </span>
                      </div>
                      <div className="title">
                        <h3>Schedule Your Appointment</h3>
                      </div>
                    </div>
                    <form>
                      <div className="max-[768px]:grid max-[768px]:grid-cols-1 lg:grid-cols-1 lg:grid-cols-1">
                        <div className="mb-4">
                          <input
                            type="text"
                            id="user_name"
                            className="rounded  bg-gray-100 w-11/12 p-4 focus:border-0   max-[480px]:w-full"
                            placeholder="Name"
                            required
                          />
                        </div>

                        {/* <div className="mb-4">
                          <input
                            type="number"
                            id="user_pnum"
                            className="rounded bg-gray-100 w-11/12 p-4 focus:border-0   max-[480px]:w-full"
                            placeholder="Phone"
                            required
                          />
                        </div> */}
                        <div className="mb-4">
                          <input
                            type="text"
                            id="user_email"
                            className="rounded bg-gray-100 w-11/12 p-4  focus:border-0  max-[480px]:w-full"
                            placeholder="Email"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <textarea
                            rows={3}
                            cols={20}
                            className="rounded bg-gray-100 w-24 p-4 focus:border-0  max-[480px]:w-11/12 md:w-11/12"
                            placeholder="Message ..."
                          ></textarea>
                        </div>

                        <div className="text-center ">
                          <button className="xillix_btn">Submit Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
