import { Button, MenuItem, Paper } from "@mui/material";
import React from "react";
import { StyledSelect } from "../../utils/MuiComponents";

const Permission = () => {
  return (
    <main className="px-10 pb-5 pt-10">
      <h1 className="text-2xl text-gray-500 font-bold">Permissions</h1>
      <p
        className="text-gray-500 mb-3 text-xs font-semibold uppercase"
        style={{
          letterSpacing: "0.01em",
        }}
      >
        Assign Permisions
      </p>
      <Paper className="p-8">
        <div className="mt-5 grid grid-cols-5 gap-x-5">
          <div />
          <div className="col-span-3 text-[#696F79] font-medium">
            Assign Camapign Lead : Wallet Addresses
          </div>
          <div />
          <div />
          {[1, 2, 3].map((input) => (
            <div>
              <StyledSelect
                fullWidth
                InputProps={{
                  className: "py-1",
                }}
                displayEmpty
                defaultValue=""
              >
                <MenuItem disabled value="">
                  Select...
                </MenuItem>
              </StyledSelect>
            </div>
          ))}
          <div />
        </div>
        <div className="mt-5 grid grid-cols-5 gap-x-5">
          <div />
          <div className="col-span-3 text-[#696F79] font-medium">
            Assign Campaign Editors : Wallet Addresses
          </div>
          <div />
          <div />
          {[1, 2, 3].map((input) => (
            <div>
              <StyledSelect
                fullWidth
                InputProps={{
                  className: "py-1",
                }}
                displayEmpty
                defaultValue=""
              >
                <MenuItem disabled value="">
                  Select...
                </MenuItem>
              </StyledSelect>
            </div>
          ))}
          <div />
        </div>
        <div className="mt-5 grid grid-cols-5 gap-x-5">
          <div />
          <div className="col-span-3 text-[#696F79] font-medium">
            Assign Fund access : Wallet Addresses
          </div>
          <div />
          <div />
          {[1, 2, 3].map((input) => (
            <div>
              <StyledSelect
                fullWidth
                InputProps={{
                  className: "py-1",
                }}
                displayEmpty
                defaultValue=""
              >
                <MenuItem disabled value="">
                  Select...
                </MenuItem>
              </StyledSelect>
            </div>
          ))}
          <div />
        </div>
        <div className="mt-10 flex justify-center items-center gap-5">
          <Button variant="outlined" className="max-w-[200px] w-full py-3">
            <span className="text-[#999] text-xs">Back</span>
          </Button>
          <Button
            variant="contained"
            className="py-3 max-w-[200px] w-full bg-gradient-to-r from-primary-light to-primary"
          >
            <span className=" text-xs">Save Changes</span>
          </Button>
        </div>
      </Paper>
    </main>
  );
};

export default Permission;
