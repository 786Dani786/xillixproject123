import React from "react";

const AboutForm: React.FC = () => {
  return (
    <>
      <div className="bg-[#000060]">
        <div className="bg-[url('/images/about-form.jpeg')] bg-no-repeat  pt-10 pb-10">
          <div className="heading-area text-center">
            <h2 className="text-5xl mb-10 font-semibold   text-white">
              Request a Free Consultaion
            </h2>
          </div>
          <div>
            <div className="container">
              <div className="max-[768px]:bg-transparent  lg:bg-white mt-5 ">
                <div className="max-[640px]:grid max-[640px]:grid-cols-1 max-[768px]:grid max-[768px]:grid-cols-1  lg:grid lg:grid-cols-2 gap-0">
                  <div className="max-[640px]:hidden col-span-1">
                    <div className=" img-area p-10">
                      <img
                        alt="xillixtech"
                        className="w-fit"
                        src="/images/about-form-right-side.jpg"
                      />
                    </div>
                  </div>

                  <div className="max-[480px]:bg-transparent col-span-1">
                    <div className=" max-[768px]:p-10 max-[768px]:bg-transparent  form lg:bg-white p-24 w-75">
                      <form>
                        <div className="heading-area">
                          <div className="sub-title">
                            <span className="max-[768px]:text-white max-[768px]:text-3xl max-[640px]:pb-4 lg:text-2xl"> Consultation Form</span>
                          </div>
                        </div>
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

                          <div className="max-[640px]:text-center md:flex items-center justify-start">
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
      </div>
    </>
  );
};

export default AboutForm;
