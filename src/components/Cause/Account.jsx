import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";
import { getRandomElement } from "../../utils/extras";
import { StyledInput } from "../../utils/MuiComponents";

/**
 * Inputs
 * 1. First Name
 * 2. Last Name
 * 3. Email
 * 4. Phone
 * 5. Job Title
 * 6. Country
 * 7. National ID
 * 8. PAN Number (Claim Tax Deductions)
 */

const inputs = [
  ...(getRandomElement([true, false])
    ? ["First Name", "Last Name"]
    : ["Name of organisation"]),
  "Email",
  "Phone",
  "Country",
  "PAN Number (Claim Tax Deductions)",
  "Wallet Address",
];

const Account = () => {
  return (
    <main className="px-10 pb-5 pt-10">
      <h1 className="text-2xl text-gray-500 font-bold">Account</h1>
      <p
        className="text-gray-500 mb-3 text-xs font-semibold uppercase"
        style={{
          letterSpacing: "0.01em",
        }}
      >
        PROFILE Info & DETAILS
      </p>
      <Paper className="p-8">
        <ListItem>
          <ListItemAvatar className="pr-4">
            <Avatar
              src="https://source.unsplash.com/random"
              className="w-16 h-16"
            />
          </ListItemAvatar>
          <input type="file" className="hidden" id="avatar" />
          <ListItemText
            primary={
              <>
                <Button
                  component="label"
                  htmlFor="avatar"
                  variant="outlined"
                  className="py-1 px-3 mb-2"
                  color="primary"
                >
                  <span className="capitalize font-semibold">
                    Upload Avatar
                  </span>
                </Button>
              </>
            }
            secondary="Recommended dimensions: 200x200, maximum file size: 5MB"
          />
        </ListItem>
        <div className="mt-5 grid grid-cols-3 gap-5">
          {inputs.map((input) => (
            <div>
              <StyledInput
                fullWidth
                InputProps={{
                  className: "py-1",
                }}
                label={input}
              />
            </div>
          ))}
        </div>
        <div className="mt-10 flex gap-6">
          <Button
            variant="outlined"
            fullWidth
            className="py-2 max-w-[200px] px-3"
            color="primary"
          >
            <span className="capitalize font-semibold">Cancel</span>
          </Button>
          <Button
            variant="contained"
            fullWidth
            className="py-2 max-w-[200px] bg-gradient-to-r from-primary-light to-primary"
            color="primary"
          >
            <span className="capitalize font-semibold">Save Changes</span>
          </Button>
        </div>
      </Paper>
    </main>
  );
};

export default Account;
