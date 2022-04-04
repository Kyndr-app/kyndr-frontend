import { Button, InputBase, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import countries from "../../data/currencies";
import { Lock } from "../../assets/icons";
import Input from "../../utils/Input";
import Toolbar from "./Toolbar";
import TextMaskCustom from "../../utils/MaskInput";

const Finalize = ({ beneficiary }) => {
  const [country, setCountry] = useState(countries[0]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [val, setVal] = useState("Individual");
  return (
    <>
      <Toolbar primary="STEP 03/03" secondary={"Residency Info."} />
      <div className="max-w-[450px] p-4 mt-4 mx-auto w-full overflow-hidden">
        <div className="text-3xl text-roboto font-bold">
          Complete Your Profile!
        </div>
        <div className="text-lg text-roboto mt-2 text-[#8692A6] mb-4">
          For the purpose of industry regulation, your details are required.
        </div>
        <Input
          label="I would like to register as:"
          select
          value={val}
          onChange={(e) => setVal(e.target.value)}
        >
          <MenuItem value={"Individual"}>Individual</MenuItem>
          <MenuItem value={"Organization"}>Organization</MenuItem>
        </Input>
        <Input
          label="Phone number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="phone"
          InputProps={{
            inputComponent: TextMaskCustom,
            startAdornment: (
              <Select
                value={country.callingCode}
                onChange={(e) =>
                  setCountry(
                    countries.find((el) => el.callingCode === e.target.value)
                  )
                }
                input={
                  <InputBase
                    style={{
                      display: "flex",
                    }}
                    className="text-sm text-[#8692A6]"
                  />
                }
              >
                {countries.map((country) => (
                  <MenuItem
                    key={country.callingCode}
                    value={country.callingCode}
                    className="text-sm"
                  >
                    <span
                      className={`fi shadow-lg shadow-gray-300 fi-${country.code} mr-2`}
                    />
                    +{country.callingCode}
                  </MenuItem>
                ))}
              </Select>
            ),
          }}
        />
        {val === "Individual" ? (
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
          required
          label="PAN ID (Claim Tax Deductions)"
          type="text"
          placeholder="Please enter PAN ID"
        />
        <div className="mb-10" />
        <Button
          fullWidth
          variant="contained"
          className="bg-primary py-3 shadow-none"
          color="primary"
          onClick={() => {
            if (beneficiary) {
              navigate("../regulation");
            } else {
              navigate("/supporter/donate");
            }
          }}
        >
          <span className="capitalize text-roboto">Save & Continue</span>
        </Button>
        <div className="flex justify-center items-center mt-5">
          <Lock className="mr-2" />
          <span className="text-xs text-roboto text-[#8692A6]">
            Your Info is safely secured
          </span>
        </div>
      </div>
      <div />
    </>
  );
};

export default Finalize;
