import React from "react";
import {
  Button,
  Checkbox,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  MenuItem,
} from "@mui/material";
import { getRandomElement, getRandomName } from "../../utils/extras";
import Input from "../../utils/Input";
import { CircleCheck } from "../../assets/icons";
import ImageBox from "../../utils/ImageBox";

const createData = () => ({
  name: `${getRandomName()} ${getRandomName()}`,
  id: Math.random().toString(36).slice(2, 9),
  walletAddress: "0x896E332e6D072Ce84B1a97d41B15...",
  cause: "Dummy Cause here...",
  kyc: getRandomElement([true, false]),
});

const randomData = Array.from({ length: 7 }, createData);

const inputs = ["Name", "UPI ID"];
const selects = ["Select Cause", "Purpose"];

const Payment = () => {
  return (
    <div className="p-10">
      <div>
        <p
          className="text-gray-500 mb-2 text-roboto text-xs font-medium uppercase"
          style={{
            letterSpacing: "0.01em",
          }}
        >
          Benificiaries
        </p>
        <TableContainer
          className="rounded-md shadow-lg"
          elevation={4}
          component={Paper}
        >
          <Table>
            <TableHead className="bg-slate-100">
              <TableRow>
                <TableCell className="text-sm font-medium text-roboto py-2">
                  Name
                </TableCell>
                <TableCell className="text-sm font-medium text-roboto py-2">
                  Wallet Address
                </TableCell>
                <TableCell className="text-sm font-medium text-roboto py-2">
                  Cause
                </TableCell>
                <TableCell className="text-sm font-medium text-roboto py-2">
                  KYC
                </TableCell>
                <TableCell
                  align="right"
                  className="text-sm font-medium text-roboto py-2"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {randomData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="text-sm font-medium py-2 text-roboto">
                    {row.name}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-primary py-2 text-roboto">
                    {row.walletAddress}
                  </TableCell>
                  <TableCell className="text-sm font-medium py-2 text-roboto">
                    {row.cause}
                  </TableCell>
                  <TableCell className="text-sm font-medium py-2 text-roboto">
                    <Checkbox checked={row.kyc} disableRipple />
                  </TableCell>
                  <TableCell
                    align="right"
                    className="text-sm font-medium py-1 text-roboto"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={!row.kyc}
                      className="bg-gradient-to-r  disabled:to-transparent disabled:from-transparent max-w-[180px] py-3 shadow-none from-primary-light to-primary"
                    >
                      <span className="text-xs capitalize">Make Payment</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell
                  colSpan={Object.keys(randomData[0]).length + 1}
                  className="text-sm text-center py-3"
                  align="right"
                >
                  <div className="flex justify-end">
                    <Pagination
                      count={10}
                      className="text-xs"
                      color="primary"
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <div className="mt-7">
          <p
            className="text-gray-500 mb-2 text-roboto text-xs font-medium uppercase"
            style={{
              letterSpacing: "0.01em",
            }}
          >
            ADD Benificiaries
          </p>
          <Paper className="p-8">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-7">
                <div className="grid grid-cols-2 gap-x-3">
                  {inputs.map((input) => (
                    <div key={input}>
                      <Input
                        label={input}
                        name="phone"
                        InputProps={{
                          endAdornment: input === "UPI ID" && (
                            <>
                              <span className="text-primary cursor-pointer select-none text-xs flex items-center">
                                Verify <CircleCheck className="ml-3" />
                              </span>
                            </>
                          ),
                        }}
                      />
                    </div>
                  ))}
                  {selects.map((input) => (
                    <div key={input}>
                      <Input label={input} name="phone" select defaultValue="">
                        <MenuItem value="">Select</MenuItem>
                      </Input>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-5">
                <div className="grid grid-cols-5">
                  <div className="col-span-2">
                    <ImageBox
                      id="image"
                      title={
                        <div className="mb-3 text-[#696F79]">
                          Image / Avatar
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-7 flex gap-5">
              <Button
                variant="contained"
                fullWidth
                className="py-2 max-w-[200px] bg-gradient-to-r from-primary-light to-primary"
                color="primary"
              >
                <span className="capitalize font-semibold">
                  Verify Beneficiaries
                </span>
              </Button>
              <Button
                variant="contained"
                fullWidth
                className="py-2 max-w-[200px] bg-gradient-to-r from-primary-light to-primary"
                color="primary"
              >
                <span className="capitalize font-semibold">
                  Add Beneficiaries
                </span>
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Payment;
