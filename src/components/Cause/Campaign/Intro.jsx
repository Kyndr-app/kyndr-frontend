import { Button, MenuItem, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import countries from "../../../data/currencies";
import Input from "../../../utils/Input";
import Toolbar from "../../User/Toolbar";

const steps = ["Intro", "Cause", "Setup", "Launch"];

const Intro = () => {
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
        primary="STEP 01/04"
        secondary={"Intro"}
      />
      <div className="max-w-[600px] p-4 mt-4 mx-auto w-full">
        <Stepper alternativeLabel className="flex">
          {steps.map((label) => (
            <Step active={label === "Intro"} className="w-full" key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className="max-w-[450px] p-4 mt-4 mx-auto w-full overflow-hidden">
        <div className="text-3xl text-roboto font-bold">
          Tell us about yourself
        </div>
        <div className="text-lg text-roboto mt-2 text-[#8692A6] mb-4" />
        <Input label="Your name" type="text" placeholder="Enter your name" />
        <Input
          label="I would like to register as:"
          select
          placeholder="Select..."
          defaultValue=""
        >
          <MenuItem value="" disabled>
            Select...
          </MenuItem>
          <MenuItem value="Individual">Individual</MenuItem>
          <MenuItem value="Organization">Organization</MenuItem>
          <MenuItem value="Non-profit">Non-profit</MenuItem>
        </Input>
        <Input
          label="Purpose of fundraiser"
          select
          placeholder="Select..."
          defaultValue=""
        >
          <MenuItem value="" disabled>
            Select...
          </MenuItem>
          <MenuItem value="Education">Education</MenuItem>
          <MenuItem value="Environment">Environment</MenuItem>
          <MenuItem value="Health">Health</MenuItem>
        </Input>
        <Input
          label="Where are you located?"
          select
          placeholder="Select..."
          defaultValue=""
        >
          <MenuItem value="" disabled>
            Select...
          </MenuItem>
          {[
            "Andaman and Nicobar Islands",
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chandigarh",
            "Chhattisgarh",
            "Dadra and Nagar Haveli",
            "Daman and Diu",
            "Delhi",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jammu and Kashmir",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Ladakh",
            "Lakshadweep",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Puducherry",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal",
          ].map((country) => (
            <MenuItem value={country}>{country}</MenuItem>
          ))}
        </Input>
        <div className="mb-10" />
        <Button
          fullWidth
          variant="contained"
          className="bg-primary py-4 shadow-none"
          color="primary"
          onClick={() => {
            navigate("../cause");
          }}
        >
          <span className="capitalize text-roboto">Next</span>
        </Button>
      </div>
      <div />
    </>
  );
};

export default Intro;
