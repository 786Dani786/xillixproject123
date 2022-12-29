import React from "react";

const FooterBanner: React.FC = () => {
  return (
    <>
      <div className="bg-[url('/images/footerbanner-bg.jpg')] bg-cover bg-no-repeat p-4">
        <div className="container">
          <div className="grid grid-rows-1">
            <div className="max-[480px]:block md:grid md:grid-cols-3 flex justify-items-center	items-center	">
              <div className="col-span-2">
                <div className="pt-5 pb-5 mt-10 ">
                  <h3 className="max-[480px]:text-2xl max-[480px]:pb-3 text-white md:text-5xl font-semibold">
                    Grow Your Business and Build Your Website <br /> or Software
                    With Us.
                  </h3>
                </div>
              </div>
              <div className="col-span-1">
                <div className="max-[480px]:pb-5 pt-3">
                  <a className="xillix_btn" href="/contact">
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBanner;
