import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { BgBlurTertiary, Bitcoin, UploadIcon } from "../../assets/icons";
import { StyledInput, StyledTab, StyledTabs } from "../../utils/MuiComponents";

const a11yProps = (index) => ({
  id: `wallet-tabs-${index}`,
  "aria-controls": `wallet-tabspanel-${index}`,
});

const Wallet = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <main className="px-10 pb-5 pt-10">
      <h1 className="text-2xl text-gray-500 font-bold">Wallet</h1>
      <p
        className="text-gray-500 mb-2 text-xs font-semibold uppercase"
        style={{
          letterSpacing: "0.01em",
        }}
      >
        Token Balance & withdrawals
      </p>
      <Paper className="shadow-lg my-4 max-w-[1230px] flex p-5">
        <div className=" max-w-[270px] w-full ml-4 mr-16">
          <div className="relative shadow-lg px-3 w-full rounded-md pt-5 pb-3 overflow-hidden">
            <BgBlurTertiary className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] blur-3xl" />
            <ListItem disablePadding>
              <ListItemAvatar className="">
                <Avatar src={Bitcoin} alt="avatar" />
              </ListItemAvatar>
              <ListItemText
                primary={<span className="font-bold">Token Balance</span>}
                secondary={<span className="text-gray-500 text-xs">KINR</span>}
              />
            </ListItem>
            <div className="mt-3 text-center">
              <h1 className="text-4xl font-bold">50,156.00</h1>
            </div>
            <div className="mt-3">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="bg-gradient-to-r py-3 shadow-none from-primary-light to-primary"
              >
                <span className="text-xs capitalize">
                  Redeem Tokens for Cash
                </span>
              </Button>
            </div>
          </div>
        </div>
        <Divider orientation="vertical" className="mr-8" flexItem />
        <div className="px-5 w-full">
          <div className="text-3xl font-semibold whitespace-nowrap">
            Request Payment
          </div>
          <div className="mt-4">
            <StyledInput
              className="max-w-[380px]"
              fullWidth
              label="Select Beneficiary Address"
              InputProps={{ className: "text-primary" }}
            ></StyledInput>
          </div>
          <div className="mt-4">
            <StyledInput
              type="number"
              className="max-w-[380px]"
              fullWidth
              label="Select Beneficiary Address"
              InputProps={{ startAdornment: "₹" }}
            />
          </div>
          <div className="mt-4 flex justify-between items-end">
            <input type="file" id="file" className="hidden" />
            <label htmlFor="file">
              <fieldset className="max-w-[230px] cursor-pointer rounded-lg border-gray-300 p-3 border w-full">
                <legend className="text-xs px-2">Upload Invoice/Bill</legend>
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
            <Button
              variant="contained"
              color="primary"
              className="bg-gradient-to-r px-10 py-3 shadow-none from-primary-light to-primary"
            >
              <span className="text-xs capitalize">Request Payment</span>
            </Button>
          </div>
        </div>
      </Paper>
      <div className="tabs mb-4">
        <StyledTabs value={value} onChange={handleChange} defaultValue={1}>
          <StyledTab label="Tokens Received" {...a11yProps(0)} />
          <StyledTab label="Token Withdrawals" {...a11yProps(1)} />
          <StyledTab label="Bank Withdrawals" {...a11yProps(2)} />
        </StyledTabs>
      </div>
      <Paper className="h-[300px] shadow-lg flex rounded-md justify-center items-center">
        <div className="text-3xl text-[#6C6C6C] text-roboto">
          Block Explorer View
        </div>
      </Paper>
    </main>
  );
};

export default Wallet;
