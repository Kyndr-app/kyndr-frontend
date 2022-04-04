import { Container, Paper } from "@mui/material";
import React from "react";
import { Tick } from "../../assets/icons";

const KYCSubmitted = () => {
  return (
    <div>
      <Container
        component={Paper}
        className="p-10 h-[600px] flex justify-center gap-14 items-center flex-col rounded-xl my-10"
      >
        <div className="text-3xl text-roboto font-bold">
          KYC Application Submitted
        </div>
        <Tick className="w-56" />
        <div className="text-2xl text-center">
          Thank you so much for submitting your documents. <br /> Our team will
          review the same in the next 24 - 48 hours and you will be informed{" "}
          <br /> via email of the status of your application.
        </div>
      </Container>
    </div>
  );
};

export default KYCSubmitted;
