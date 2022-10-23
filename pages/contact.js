import axios from "axios";
import React, { useEffect } from "react";

const contact = () => {
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/contact",
      data: { message: "wesh alors" },
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }, []);

  return <div>contact</div>;
};

export default contact;
