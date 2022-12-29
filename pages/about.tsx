import React from "react";
import AboutForm from "../components/aboutform";
import BreadCrumb from "../components/BreadCrumb";
import WhychooseUS from "../components/whychooseus";
import Workprocess from "../components/Workprocess";

const AboutUs: React.FC = () => {
  return (
    <section>
      <BreadCrumb pageTitle="About Us"></BreadCrumb>

      <div className="mt-4 mb-4">
        <div className="container">
          <div className="grid grid-rows-1">
            <div className="max-[768px]:grid max-[768px]:grid-cols-1 lg:grid lg:grid-cols-2">
              <div className="col-span-1">
                <div className="p-4">
                  <img alt="xillixtech " src="/images/aboutpage.jpg"></img>
                </div>
              </div>

              <div className="col-span-1">
                <div className="p-10">
                  <div className="sub-title">
                    <span>About US</span>
                  </div>
                  <div className="title">
                    <h3>We Are Increasing Business Success With Technology</h3>
                  </div>
                  <div className="description">
                    {" "}
                    <p className="text-2xl font-semibold">
                      {" "}
                      We are a diverse IT company that has been working for
                      almost 10 years and delivering successful IT products all
                      around the globe with impeccable performance and satisfied
                      clients.
                    </p>
                    <p className="mt-3 text-2xl">
                      We have a relationship of trust with all our clients that
                      connect to us and we focus on going long term with all our
                      clients and giving them the best services possible. We
                      take complete responsibility for all the products that we
                      deliver and provide maintenance work to the clients.
                    </p>
                  </div>
                </div>
              </div>

              {/* Col 3 */}
              <div className="col-span-2">
                <p className="max-[480px]:p-9 mt-10 mb-10 text-xl p-10">
                  Our services mainly include the development of software
                  products. The products include desktop software and online
                  software that reside on servers. Also, we have the expertise
                  and professional experience in web designing and development,
                  making different websites on the latest technologies and
                  optimal performance. Furthermore, we have a team of analyst
                  that is experts in analytical tools such as Power BI and
                  Tableau and the team ensures a perfect analytical solution to
                  our client’s requirement. In addition to that, we also deliver
                  projects that are based on cloud servers and DevOps services
                  that handle all the management required for the server-side.
                  Subsequently, our designers have the perfect sense for making
                  elegant and eye-catching designs for our projects and they
                  have received a commendation for their extraordinary designs.
                  Last but not least we also provide Quality Assurance &
                  Software Testing services for any product. These services
                  include white box testing, as well as black-box testing, and
                  this is done with proper tools and with utmost results.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Workprocess */}
        <WhychooseUS />
        <Workprocess />
        <AboutForm />
      </div>
    </section>
  );
};

export default AboutUs;
