import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  InputBase,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import countries from "../../data/currencies";
import { CircleCheck, Lock } from "../../assets/icons";
import Input from "../../utils/Input";
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
        <Input
          label="UPi ID"
          name="phone"
          InputProps={{
            endAdornment: (
              <>
                <span className="text-primary cursor-pointer select-none text-xs flex items-center">
                  Verify <CircleCheck className="ml-3" />
                </span>
              </>
            ),
          }}
        />
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
            navigate("/beneficiary");
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
