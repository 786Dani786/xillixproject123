import React from "react";
import Head from "next/head";
import { FiAirplay } from "react-icons/fi";

interface Props {
  serviceTitle: string;
  shortDescription: string;
}

const ServiceCard: React.FC<Props> = ({
  serviceTitle,
  shortDescription,
}: Props) => {
  return (
    <section> 
      <div className="card rounded-lg hover:scale-105 duration-500">
      <div className="items-center	justify-items-center shadow-gray-600 p-6 ">
        <div className="flex-col">
          <div className=" block box-border mb-5 border-box text-center mt-2">
            <span className="inline-block text-center  text-7xl ">
              <FiAirplay
                className="rounded-lg border-0 shadow-inherit"
                color="#467aed"
              />
            </span>
          </div>
          <div className="text-center border-box  mb-2.5 box-border block text-base">
            <h3 className="text-black m-0 text-2xl font-bold">
              {" "}
              {serviceTitle}{" "}
            </h3>
          </div>
          <div className="box-border block text-left">
            <p className="mt-5 mb-0 text-lg font-sans	">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem officiis impedit repellat fugit quae laudantium
              doloremque quia fugiat, sed itaque at commodi rerum eum ipsam in
              temporibus saepe debitis nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ServiceCard;
