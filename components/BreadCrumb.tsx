import React from "react";

interface Props {
  pageTitle: string
}

const BreadCrumb: React.FC<Props> = ({pageTitle} : Props) => {
  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb-bg flex justify-center items-center">
        <div className="breadcrumb-inner">
            <div className="page-title">{pageTitle}</div>
            <div className="breadcrumb-title">Xillixtech  /  Contact us</div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;