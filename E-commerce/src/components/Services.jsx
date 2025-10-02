import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotate,
  faCircleCheck,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center items-center my-15 gap-20">
      <div className="flex flex-col items-center">
        <p>
          <FontAwesomeIcon icon={faRotate} />
        </p>
        <p>Easy Exchange Policy</p>
        <p>we offer hassle free exchange policy</p>
      </div>
      <div className="flex flex-col items-center">
        <p>
          <FontAwesomeIcon icon={faCircleCheck} />
        </p>
        <p>Easy Exchange Policy</p>
        <p>we offer hassle free exchange policy</p>
      </div>
      <div className="flex flex-col items-center">
        <p>
          <FontAwesomeIcon icon={faHeadset} />
        </p>
        <p>Easy Exchange Policy</p>
        <p>we offer hassle free exchange policy</p>
      </div>
    </div>
  );
};

export default Services;
