import { Button, MenuItem, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../utils/Input";
import Toolbar from "./Toolbar";

const steps = ["Intro", "Cause", "Setup", "Launch"];

const Intro = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("Individual");
  return (
    <>
      <Toolbar primary="STEP 01/04" secondary={"Cause"} />
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <MenuItem value="" disabled>
            Select...
          </MenuItem>
          <MenuItem value="Individual">Individual</MenuItem>
          <MenuItem value="Organization">Organization</MenuItem>
        </Input>
        {value === "Individual" ? (
          <>
            <Input
              required
              label="First Name"
              type="text"
              placeholder="First Name"
            />
            <Input
              required
              label="Last Name"
              type="text"
              placeholder="Last Name"
            />
          </>
        ) : (
          <Input
            required
            label="Organization name"
            type="text"
            placeholder="Please enter organization name"
          />
        )}
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
