import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UploadIcon } from "../../assets/icons";
import Layout from "./Layout";
import Toolbar from "./Toolbar";

const steps = ["Intro", "Cause", "Setup", "Launch"];

const Setup = () => {
  const navigate = useNavigate();
  return (
    <Layout className="py-10 px-28 justify-between">
      <Toolbar primary="STEP 03.1/04.1" secondary={"Setup"} />
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
        <div className="grid grid-cols-2">
          <div className="">
            <input type="file" id="file" className="hidden" />
            <label htmlFor="file">
              <div className="mb-3 text-[#696F79]">Cause Profile Image</div>
              <fieldset className="max-w-[230px] shadow-lg shadow-gray-400 cursor-pointer rounded-lg border-primary px-3 py-5 border w-full">
                <div className="border-dashed flex items-center justify-center flex-col rounded-md bg-gray-100 border-[#DCAC00] p-4 border-2">
                  <div className="mb-2">
                    <UploadIcon />
                  </div>
                  <div className="text-sm font-bold text-[#9C7A00]">
                    Drag & Drop
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    or select files from device
                  </div>
                  <div className="text-xs text-gray-400">max. 50MB</div>
                </div>
              </fieldset>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-7">
          <div className="">
            <input type="file" id="file" className="hidden" />
            <label htmlFor="file">
              <div className="mb-3 text-[#696F79]">Supporting Images</div>
              <fieldset className="max-w-[230px] shadow-lg shadow-gray-400 cursor-pointer rounded-lg border-primary px-3 py-5 border w-full">
                <div className="border-dashed flex items-center justify-center flex-col rounded-md bg-gray-100 border-[#DCAC00] p-4 border-2">
                  <div className="mb-2">
                    <UploadIcon />
                  </div>
                  <div className="text-sm font-bold text-[#9C7A00]">
                    Drag & Drop
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    or select files from device
                  </div>
                  <div className="text-xs text-gray-400">max. 50MB</div>
                </div>
              </fieldset>
            </label>
          </div>
          <div className="">
            <input type="file" id="file" className="hidden" />
            <label htmlFor="file">
              <div className="mb-3 text-[#696F79]">&nbsp;</div>
              <fieldset className="max-w-[230px] shadow-lg shadow-gray-400 cursor-pointer rounded-lg border-primary px-3 py-5 border w-full">
                <div className="border-dashed flex items-center justify-center flex-col rounded-md bg-gray-100 border-[#DCAC00] p-4 border-2">
                  <div className="mb-2">
                    <UploadIcon />
                  </div>
                  <div className="text-sm font-bold text-[#9C7A00]">
                    Drag & Drop
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    or select files from device
                  </div>
                  <div className="text-xs text-gray-400">max. 50MB</div>
                </div>
              </fieldset>
            </label>
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
    </Layout>
  );
};

export default Setup;
