import { Container, Paper } from "@mui/material";
import React from "react";
import { Tick } from "../../assets/icons";

const KYCSuccess = () => {
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
          Congrats, Your KYC has been accepted.
        </div>
      </Container>
    </div>
  );
};

export default KYCSuccess;
