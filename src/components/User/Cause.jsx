import { Button, MenuItem, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../utils/Input";
import Layout from "./Layout";
import Toolbar from "./Toolbar";

const steps = ["Intro", "Cause", "Setup", "Launch"];

const Cause = () => {
  const navigate = useNavigate();
  return (
    <Layout className="py-10 px-28 justify-between">
      <Toolbar primary="STEP 02/04" secondary={"Cause"} />
      <div className="max-w-[600px] p-4 mt-4 mx-auto w-full">
        <Stepper alternativeLabel className="flex">
          {steps.map((label) => (
            <Step
              active={label === "Cause"}
              completed={steps.indexOf(label) < steps.indexOf("Cause")}
              className="w-full"
              key={label}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className="max-w-[450px] p-4 mt-4 mx-auto w-full overflow-hidden">
        <div className="text-3xl text-roboto font-bold">
          Tell us about your cause
        </div>
        <div className="text-lg text-roboto mt-2 text-[#8692A6] mb-4" />
        <Input
          label="How much do you want to raise?"
          type="text"
          placeholder="50,000"
        />
        <Input
          label="Title of your cause"
          type="text"
          placeholder="Enter text"
        />
        <Input
          label="Raising funds for"
          select
          placeholder="Select..."
          defaultValue=""
        >
          <MenuItem value="" disabled>
            Select...
          </MenuItem>
          {["Individual", "Group", "Organization"].map((label) => (
            <MenuItem key={label} value={label}>
              {label}
            </MenuItem>
          ))}
        </Input>
        <Input
          label="Select your impact category"
          select
          placeholder="Select..."
          defaultValue=""
        >
          <MenuItem value="" disabled>
            Select...
          </MenuItem>
          {[
            "Education",
            "Emergencies",
            "Children",
            "Animals",
            "Sports",
            "Community",
            "Elderly",
            "Arts & Media",
            "Technology",
            "Environment",
            "Social Entrepreneurship",
            "Human Rights",
            "Rural Development",
            "Women",
          ].map((label) => (
            <MenuItem key={label} value={label}>
              {label}
            </MenuItem>
          ))}
        </Input>
        <div className="mb-10" />
        <Button
          fullWidth
          variant="contained"
          className="bg-primary py-4 shadow-none"
          color="primary"
          onClick={() => {
            navigate("../setup");
          }}
        >
          <span className="capitalize text-roboto">Next</span>
        </Button>
      </div>
      <div />
    </Layout>
  );
};

export default Cause;
