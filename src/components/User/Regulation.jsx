import { Button } from "@mui/material";
import React from "react";
import { Lock } from "../../assets/icons";
import Input, { InputUPI } from "../../utils/Input";
import Layout from "./Layout";
import Toolbar from "./Toolbar";
import { useNavigate } from "react-router-dom";

const Regulation = () => {
  const navigate = useNavigate();
  return (
    <Layout className="py-10 px-28 justify-between">
      <Toolbar primary="STEP 03/03" secondary={"ID Varification"} />
      <div className="max-w-[450px] p-4 mt-4 mx-auto w-full overflow-hidden">
        <div className="text-3xl text-roboto font-bold">
          Complete Your Profile!
        </div>
        <div className="text-lg text-roboto mt-2 text-[#8692A6] mb-4">
          For the purpose of industry regulation, your details are required.
        </div>
        <InputUPI input="UPI ID" Input={Input} />
        <Input
          required
          label="GST Number"
          type="number"
          placeholder="12121232342"
        />
        <div className="mb-20" />
        <Button
          fullWidth
          variant="contained"
          className="bg-primary py-3 shadow-none"
          color="primary"
          onClick={() => {
            navigate("/beneficiary/wallet");
          }}
        >
          <span className="capitalize text-roboto">Save & Finish</span>
        </Button>
        <div className="flex justify-center items-center mt-5">
          <Lock className="mr-2" />
          <span className="text-xs text-roboto text-[#8692A6]">
            Your Info is safely secured
          </span>
        </div>
      </div>
      <div />
    </Layout>
  );
};

export default Regulation;
