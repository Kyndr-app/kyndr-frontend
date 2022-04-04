import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ImageBox from "../../utils/ImageBox";
import Toolbar from "./Toolbar";

const steps = ["Intro", "Cause", "Setup", "Launch"];

const Setup = () => {
  const navigate = useNavigate();
  return (
    <>
      <Toolbar primary="STEP 03/04" secondary={"Setup"} />
      <div className="max-w-[600px] p-4 mt-4 mx-auto w-full">
        <Stepper alternativeLabel className="flex">
          {steps.map((label) => (
            <Step
              active={label === "Setup"}
              completed={steps.indexOf(label) < steps.indexOf("Setup")}
              className="w-full"
              key={label}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className="max-w-[550px] p-4 mt-4 mx-auto w-full overflow-hidden">
        <div className="text-3xl text-roboto font-bold">
          Upload your profile image / file
        </div>
        <div className="text-lg text-roboto mt-7 text-[#8692A6] mb-4" />
        <div className="grid gap-8 grid-cols-2">
          <div className="">
            <ImageBox
              id="profile-image"
              title={
                <div className="mb-3 text-[#696F79]">Cause Profile Image</div>
              }
            />
          </div>
          <div />
        </div>
        <div className="grid grid-cols-2 gap-8 mt-7">
          <div className="">
            <ImageBox
              id="supporting-image-1"
              title={
                <div className="mb-3 text-[#696F79]">Supporting Images</div>
              }
            />
          </div>
          <div className="">
            <ImageBox
              id="supporting-image-1"
              title={<div className="mb-3 text-[#696F79]">&nbsp;</div>}
            />
          </div>
        </div>
        <div className="mb-10" />
        <Button
          fullWidth
          variant="contained"
          className="bg-primary py-4 shadow-none"
          color="primary"
          onClick={() => navigate("../launch")}
        >
          <span className="capitalize text-roboto">Next</span>
        </Button>
      </div>
      <div />
    </>
  );
};

export default Setup;
