import React from "react";
import Acc from "./Acc";

const Contact = () => {
  return (
    <section className="contact">
      <div className="wrapper">
        <div className="profile">
          <img
            src={process.env.PUBLIC_URL + "/assets/image/profile.png"}
            alt=""
          />
        </div>
        <Acc />
      </div>
    </section>
  );
};

export default Contact;
