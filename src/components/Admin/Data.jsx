import { DateRangePicker } from "@mui/lab";
import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { Filter } from "../../assets/icons";
import { StyledTab, StyledTabs } from "../../utils/MuiComponents";
const a11yTabProps = (index) => ({
  id: `vertical-tab-${index}`,
  "aria-controls": `vertical-tabpanel-${index}`,
});
const Data = () => {
  const [values, setValues] = useState([null, null]);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [secondValues, setSecondValues] = useState([null, null]);
  const [secondOpen, setSecondOpen] = useState(false);
  return (
    <div className="p-10">
      <div className="text-gray-500 mb-2 text-roboto text-xs font-medium uppercase">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl text-gray-500 font-bold">Data</h1>
            <p
              className="text-gray-500 mb-2 text-xs font-semibold uppercase"
              style={{ letterSpacing: "0.01em" }}
            >
              Sign Ups
            </p>
          </div>
          <div className="flex">
            <DateRangePicker
              value={values}
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              onChange={(e) => setValues(e)}
              renderInput={() => (
                <div className="flex">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setOpen(true)}
                    endIcon={<Filter />}
                    className="bg-gradient-to-tr px-5 rounded shadow-none py-3 max-w-[300px] mx-auto from-primary-light to-primary"
                  >
                    <span className="text-xs text-roboto capitalize">
                      Date Filter
                    </span>
                  </Button>
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <div className="mb-5 last:mb-0">
        <Paper className="h-[350px] shadow-lg flex rounded-md justify-center flex-col items-center">
          <div className="tabs mb-4 w-full">
            <StyledTabs
              value={value}
              onChange={(e, v) => setValue(v)}
              defaultValue={1}
            >
              <StyledTab label="Tokens Received" {...a11yTabProps(0)} />
              <StyledTab label="Token Withdrawals" {...a11yTabProps(1)} />
              <StyledTab label="Bank Withdrawals" {...a11yTabProps(2)} />
            </StyledTabs>
          </div>
          <div className="h-full flex justify-center items-center">
            <div className="text-3xl text-[#6C6C6C] text-roboto">DATA</div>
          </div>
        </Paper>
      </div>
      <div className="mb-5 last:mb-0">
        <h1 className="text-2xl text-gray-500 mb-3 font-bold">KYC</h1>
        <Paper className="h-[350px] shadow-lg flex rounded-md justify-center flex-col items-center">
          <div className="tabs mb-4 w-full">
            <StyledTabs
              value={value}
              onChange={(e, v) => setValue(v)}
              defaultValue={1}
            >
              <StyledTab label="Tokens Received" {...a11yTabProps(0)} />
              <StyledTab label="Token Withdrawals" {...a11yTabProps(1)} />
              <StyledTab label="Bank Withdrawals" {...a11yTabProps(2)} />
            </StyledTabs>
          </div>
          <div className="h-full flex justify-center items-center">
            <div className="text-3xl text-[#6C6C6C] text-roboto">DATA</div>
          </div>
        </Paper>
      </div>
      <div className="mb-5 last:mb-0">
        <h1 className="text-2xl text-gray-500 mb-3 font-bold">
          Beneficiary Bank Tranfers
        </h1>
        <Paper className="h-[350px] shadow-lg flex rounded-md justify-center flex-col items-center">
          <div className="tabs mb-4 w-full">
            <StyledTabs
              value={value}
              onChange={(e, v) => setValue(v)}
              defaultValue={1}
            >
              <StyledTab label="Tokens Received" {...a11yTabProps(0)} />
              <StyledTab label="Token Withdrawals" {...a11yTabProps(1)} />
              <StyledTab label="Bank Withdrawals" {...a11yTabProps(2)} />
            </StyledTabs>
          </div>
          <div className="h-full flex justify-center items-center">
            <div className="text-3xl text-[#6C6C6C] text-roboto">DATA</div>
          </div>
        </Paper>
      </div>

      <div className="mb-5 last:mb-0">
        <div className="text-gray-500 mb-2 text-roboto text-xs font-medium uppercase">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-gray-500 font-bold">Data</h1>
            </div>
            <div className="flex">
              <DateRangePicker
                value={secondValues}
                open={secondOpen}
                onClose={() => setSecondOpen(false)}
                onOpen={() => setSecondOpen(true)}
                onChange={(newValue) => setSecondValues(newValue)}
                renderInput={() => (
                  <div className="flex">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setSecondOpen(true)}
                      endIcon={<Filter />}
                      className="bg-gradient-to-tr px-5 rounded shadow-none py-3 max-w-[300px] mx-auto from-primary-light to-primary"
                    >
                      <span className="text-xs text-roboto capitalize">
                        Date Filter
                      </span>
                    </Button>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p
              className="text-gray-500 mb-2 text-xs font-semibold uppercase"
              style={{ letterSpacing: "0.01em" }}
            >
              KINR Mint
            </p>
            <Paper className="h-[350px] shadow-lg flex rounded-md justify-center flex-col items-center">
              <div className="h-full flex justify-center items-center">
                <div className="text-3xl text-[#6C6C6C] text-roboto">
                  NO DATA AVAILABLE
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <p
              className="text-gray-500 mb-2 text-xs font-semibold uppercase"
              style={{ letterSpacing: "0.01em" }}
            >
              KINR BURN
            </p>
            <Paper className="h-[350px] shadow-lg flex rounded-md justify-center flex-col items-center">
              <div className="h-full flex justify-center items-center">
                <div className="text-3xl text-[#6C6C6C] text-roboto">
                  NO DATA AVAILABLE
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <p
              className="text-gray-500 mb-2 text-xs font-semibold uppercase"
              style={{ letterSpacing: "0.01em" }}
            >
              Total Gas Costs
            </p>
            <Paper className="h-[350px] shadow-lg flex rounded-md justify-center flex-col items-center">
              <div className="h-full flex justify-center items-center">
                <div className="text-3xl text-[#6C6C6C] text-roboto">
                  NO DATA AVAILABLE
                </div>
              </div>
            </Paper>
          </div>
          <div>
            <p
              className="text-gray-500 mb-2 text-xs font-semibold uppercase"
              style={{ letterSpacing: "0.01em" }}
            >
              Total KiNR Donated
            </p>
            <Paper className="h-[350px] shadow-lg flex rounded-md justify-center flex-col items-center">
              <div className="h-full flex justify-center items-center">
                <div className="text-3xl text-[#6C6C6C] text-roboto">
                  NO DATA AVAILABLE
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
