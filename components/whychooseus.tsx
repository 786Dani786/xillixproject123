import React from "react";

const WhychooseUS: React.FC = () => {
  return (
    <>
      <section>
        <div className="sm:container md:container">
          <div className="grid grid-rows-1">
            <div className="max[768px]:grid max[768px]:grid-cols-1 lg:grid lg:grid-cols-2 gap-3">
              <div className="col-span-1">
                <div className="img-area p-5">
                  <img
                    src="images/whychooseus.jpg"
                    alt="Why choose Xillixtech"
                  ></img>
                </div>
              </div>
              <div className="col-span-1">
                <div className="content-area p-5">
                  <div className="headings">
                    <div className="sub-title">
                      <span>WHY CHOOSE US</span>
                    </div>
                    <div className="title">
                      <h3> We Worked With Reputed Companies in The World </h3>
                    </div>
                  </div>
                  <div className="progress-area">
                    <div className="mt-10 mb-7">
                      <div className="flex justify-between mb-1">
                        <div className="mb-1 text-base font-medium dark:text-white">
                          SOFTWARE DEVELOPMENT
                        </div>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">
                          92%
                        </span>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="mt-10 mb-7">
                    <div className="flex justify-between mb-1">
                        <div className="mb-1 text-base font-medium dark:text-white">
                          Web DEVELOPMENT
                        </div>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">
                          90%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="mt-10 mb-7">
                    <div className="flex justify-between mb-1">
                        <div className="mb-1 text-base font-medium dark:text-white">
                          SEO Analysis
                        </div>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">
                          85%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="mt-10 mb-7">
                    <div className="flex justify-between mb-1">
                        <div className="mb-1 text-base font-medium dark:text-white">
                          Cyber Security
                        </div>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">
                          95%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhychooseUS;
