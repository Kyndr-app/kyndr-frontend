import {
  Box,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  SvgIcon,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Beneficiary, Donor, Ngo, Right } from "../../assets/icons";
import Layout from "./Layout";

/**
 * 1. Supporter donor Personal account to manage all you activities.
 * 2. Cause ngo Own or belong to a company, this is for you.
 * 3. Beneficiary beneficiary Own or belong to a company, this is for you.
 */

const pages = [
  {
    title: "Supporter",
    path: "donor",
    description: "Personal account to manage all you activities.",
    icon: Donor,
  },
  {
    title: "Cause",
    path: "ngo",
    description: "Own or belong to a company, this is for you.",
    icon: Ngo,
  },
  {
    title: "Beneficiary",
    path: "beneficiary",
    description: "Own or belong to a company, this is for you.",
    icon: Beneficiary,
  },
];

const JoinUs = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Layout className="p-10 justify-between">
      <div className="text-right w-full">
        Already have an account?{" "}
        <Link to="../signin" className="text-primary">
          Sign In
        </Link>
      </div>
      <div className="max-w-[450px] mx-auto w-full">
        <div className="text-3xl text-roboto font-bold mb-2">Join Us!</div>
        <div className="text-lg text-roboto text-[#8692A6] mb-4">
          To begin this journey, tell us what type of account you’d be opening.
        </div>
        <RadioGroup name="type" value={value} onChange={handleChange}>
          {pages.map((el) => (
            <FormControlLabel
              value={el.path}
              control={<Radio className="hidden" />}
              className="mr-0"
              classes={{ label: "w-full mb-3" }}
              label={
                <Box
                  sx={{
                    transition: "all .1s",
                    "& *": { transition: "all .1s" },
                  }}
                  onClick={() =>
                    value === el.path && navigate(`/user/${el.path}`)
                  }
                  className={`${
                    value === el.path
                      ? "border-primary bg-[#FFF7F8]"
                      : "border-transparent"
                  } px-8 py-5 rounded-md shadow-lg border items-center flex`}
                >
                  <div
                    className={`mr-7 ${
                      value === el.path ? "text-primary" : "text-transparent"
                    }`}
                  >
                    <SvgIcon
                      component={el.icon}
                      sx={{
                        "& .hover-white": { fill: value === el.path && "#fff" },
                      }}
                      className="text-5xl"
                      inheritViewBox
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold">{el.title}</h1>
                    <h4 className="text-sm text-[#8692A6]">{el.description}</h4>
                  </div>
                  <div
                    className="ml-3"
                    style={{
                      visibility: value === el.path ? "visible" : "hidden",
                    }}
                  >
                    <Right />
                  </div>
                </Box>
              }
            />
          ))}
        </RadioGroup>
      </div>
      <div />
    </Layout>
  );
};

export default JoinUs;
