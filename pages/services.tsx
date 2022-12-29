import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import FooterBanner from "../components/footerbanner";
import ServiceCard from "../components/ServiceCard";
import Workprocess from "../components/Workprocess";
import services from "../pages/json/services.json";

const Services: React.FC = () => {
  return (
    <section>
      <BreadCrumb pageTitle="Our Services"></BreadCrumb>
      <div className="md:container mx-auto px-12 lg:container mx-auto px-4 sm:container mx-auto px-4 xs:container mx-auto px-4 mb-14 mt-14 ">
        <div className="mb-15 text-center">
          <span className="sub-title ">
            <p className="text-2xl">
              Following are the services provided by XillixTech.
            </p>
          </span>
          <h1 className="heading ">
            <span className="text-3xl">Services</span>
          </h1>
        </div>
        <div className="grid-rows-1 mt-20">
          <div className="max-[640px]:grid max-[640px]:grid-cols-1 max-[820px]:grid max-[820px]:grid-cols-2 lg:grid grid-cols-3 gap-10">
            {services.map((item, idx) => (
              <ServiceCard {...item}></ServiceCard>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Workprocess />
        <FooterBanner />
      </div>
    </section>
  );
};

export default Services;
