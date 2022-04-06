import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../utils/Input";
import Toolbar from "../../User/Toolbar";

const steps = ["Intro", "Cause", "Setup", "Launch"];

const Launch = () => {
  const navigate = useNavigate();
  return (
    <>
      <Toolbar
        left={
          <>
            <div className="text-xl font-bold text-roboto text-gray-600">
              Campaign Creator
            </div>
            <h6 className="uppercase text-xs text-gray-600">New Campaign</h6>
          </>
        }
        primary="STEP 04/04"
        secondary={"Launch"}
      />
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
        <Input
          label="Communicate with your donors as to why you need the funds"
          multiline
          rows={10}
          InputProps={{
            className: "py-4",
          }}
          placeholder="Tell us your story"
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
    </>
  );
};

export default Launch;
