import React from "react";

const Workprocess: React.FC = () => {
  return (
    <>
      <div className="w-full h-full">
       
        <div className=" bg-no-repeat w-full h-full pt-28 pr-0 pl-0 pb-28 ">
          <div className="container">
            <div className="grid grid-rows-1">
            <div className="heading text-center ">
          <div className="sub-title">
            <span>Our Work Process</span>
            <h3 className="title text-black">How we Works</h3>
          </div>
        </div>
              <div className=" max-[640px]:grid max-[640px]:grid-cols-1 max-[768px]:grid max-[768px]:grid-cols-1   lg:grid lg:grid-cols-3  gap-1  ">
                <div className="left-side px-10 py-20 col-span-1">
                  <div className="bg-[url('/images/process-bg.jpg')] bg-cover   bg-no-repeat w-full h-full   px-10 py-20">
                    <div className="sub-title">
                      <p className="text-2xl font-semibold font-normal uppercase text-white">
                        Working Process
                      </p>
                    </div>
                    <div className="title ">
                      <h1 className="max-[480px]:text-3xl mt-0 mr-2.5  mb-8 ml-0 text-white md:text-5xl relative font-semibold">
                        Our Process - How We Work For Our Clients.
                      </h1>
                    </div>
                    <div className="button-area">
                      {" "}
                      <div className="flex items-center justify-start">
                        <a href="/contact" className="xillix_btn" >Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="sm:grid sm:grid-cols-1  md:grid md:grid-cols-2">
                    <div className=" mt-20">
                      <div className="right-side  px-12 py-0">
                        <div className="p-number">
                          <span className="text-[#03228F] font-semibold  text-5xl">1.</span>
                        </div>
                        <div className="p-title">
                          <h3 className="sm:text-black md:text-black mt-0 mr-3   ml-0 title  mb-0">
                            Analyze
                          </h3>
                        </div>
                        <div className="p-description">
                          <p className="sm:text-black md:text-black text-xl font-sans	">
                            The first and foremost process that decides what do
                            the client wants and what needs to be done.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" mt-20">
                      <div className="right-side  px-12 py-0">
                        <div className="p-number">
                          <span className="text-[#03228F] font-semibold text-5xl">2.</span>
                        </div>
                        <div className="p-title">
                          <h3 className="text-black mt-0 mr-3 mb-1 ml-0 title">
                            Planning
                          </h3>
                        </div>
                        <div className="p-description">
                          <p className="sm:text-black md:text-black text-xl font-sans	">
                            In the planning phase all the aspects of
                            requirements are carefully observed keeping in view
                            any dependencies.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" mt-10">
                      <div className="right-side  px-12 py-0">
                        <div className="p-number">
                          <span className="text-[#03228F] font-semibold  text-5xl">3.</span>
                        </div>
                        <div className="p-title">
                          <h3 className="text-black mt-0 mr-3 mb-1 ml-0 title">
                            Development
                          </h3>
                        </div>
                        <div className="p-description">
                          <p className="sm:text-black md:text-black text-xl font-sans	">
                            The team then diligently develops the products by
                            applying all the professional coding methods. .
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" mt-10">
                      <div className="right-side  px-12 py-0">
                        <div className="p-number">
                          <span className="text-[#03228F] font-semibold  text-5xl">4.</span>
                        </div>
                        <div className="p-title">
                          <h3 className="text-black mt-0 mr-3 mb-1 ml-0 title">
                            Deployment
                          </h3>
                        </div>
                        <div className="p-description">
                          <p className="sm:text-black md:text-black text-xl font-sans	 ">
                            The last but not the least phase requires the
                            deployment of the complete project to the server
                            that is accessible to the client.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workprocess;
