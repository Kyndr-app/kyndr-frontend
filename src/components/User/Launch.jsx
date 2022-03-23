import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../utils/Input";
import Layout from "./Layout";
import Toolbar from "./Toolbar";

const steps = ["Intro", "Cause", "Setup", "Launch"];

const Launch = () => {
  const navigate = useNavigate();
  return (
    <Layout className="py-10 px-28 justify-enevly">
      <Toolbar primary="STEP 04/04" secondary={"Launch"} />
      <div className="max-w-[600px] p-4 mt-4 mx-auto w-full">
        <Stepper alternativeLabel className="flex">
          {steps.map((label) => (
            <Step
              active={label === "Launch"}
              completed={steps.indexOf(label) < steps.indexOf("Launch")}
              className="w-full"
              key={label}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className="max-w-[450px] p-4 mt-4 mx-auto w-full overflow-hidden">
        <div className="text-lg text-roboto mt-7 text-[#8692A6] mb-4">
          For the purpose of industry regulation, your details are required.
        </div>

        <Input
          label="Email"
          multiline
          rows={6}
          InputProps={{
            className: "py-4",
          }}
          placeholder="Enter your Email"
        />
        <div className="mb-10" />
        <Button
          fullWidth
          variant="contained"
          className="bg-primary py-4 shadow-none"
          color="primary"
          onClick={() => navigate("/cause/campaign")}
        >
          <span className="capitalize text-roboto">Launch</span>
        </Button>
      </div>
      <div />
      <div />
      <div />
      <div />
    </Layout>
  );
};

export default Launch;
