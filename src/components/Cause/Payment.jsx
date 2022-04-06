import React, { useState } from "react";
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
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  getRandomElement,
  getRandomImage,
  getRandomName,
  truncateFromMiddle,
} from "../../utils/extras";
import Input, { InputUPI } from "../../utils/Input";
import { Copy, Tick } from "../../assets/icons";
import ImageBox from "../../utils/ImageBox";
import { StyledInput } from "../../utils/MuiComponents";

const createData = () => ({
  name: `${getRandomName()} ${getRandomName()}`,
  id: Math.random().toString(36).slice(2, 9),
  walletAddress: "0x896E332e6D072Ce84B1a97d41B15...",
  cause: "Dummy Cause here...",
  kyc: getRandomElement([true, false]),
});

const randomData = Array.from({ length: 7 }, createData);

const inputs = ["Name", "UPI ID", "Purpose"];
const selects = ["Select Cause"];

const Payment = () => {
  const [open, setOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  return (
    <div className="p-10">
      <Dialog
        open={paymentOpen}
        maxWidth="md"
        onClose={() => setPaymentOpen(false)}
        scroll="body"
        aria-labelledby="payment-dialog-title"
        aria-describedby="payment-dialog-title"
      >
        <div className="flex px-8 justify-center items-center py-10 border-b-2">
          <div className="text-center">
            <div>
              <img
                src={getRandomImage({ ratio: 1 })}
                className="rounded-full w-16 mb-4 h-16 mx-auto"
                alt=""
              />
            </div>
            <div className="text-primary items-center flex text-sm">
              {truncateFromMiddle(
                "0x896E332e6D072Ce84B1a97d41B15ddd0EF9337A1",
                25
              )}
              <Copy className="cursor-pointer ml-3" />
            </div>
            <div className="mt-2 font-bold text-sm">0 KINR</div>
          </div>
        </div>
        <div className="p-8 text-center">
          <h1 className="text-xl mb-5 font-medium">Transfer Assets</h1>
          <div className="mt-5 first:mt-0 w-[350px]">
            <StyledInput
              label="Address"
              fullWidth
              placeholder="0x896E332e6D072Ce84B1a97d41B15ddd0EF9337A1"
              select
            >
              <MenuItem value={"0x896E332e6D072Ce84B1a97d41B15ddd0EF9337A1"}>
                0x896E332e6D072Ce84B1a97d41B15ddd0EF9337A1
              </MenuItem>
            </StyledInput>
          </div>
          <div className="mt-5 first:mt-0">
            <StyledInput
              label="Amount"
              InputProps={{ className: "pb-1" }}
              fullWidth
              placeholder="10,000.00"
              type="number"
            />
          </div>
          <div className="mt-5 first:mt-0 text-left">
            <StyledInput
              label="Assets"
              fullWidth
              placeholder="12,345.00"
              select
            >
              <MenuItem value="" disabled>
                Select
              </MenuItem>
              <MenuItem value={"KINR"}>KINR</MenuItem>
            </StyledInput>
          </div>
          <div className="mt-10">
            <Button
              variant="contained"
              className="py-4 px-7 bg-primary"
              color="primary"
              fullWidth
            >
              <span className="capitalize font-medium text-base">Transfer</span>
            </Button>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
      >
        <DialogTitle>
          <div className="text-primary">Information</div>
        </DialogTitle>
        <DialogContent className="p-14">
          <div className="flex justify-center items-center">
            <Tick />
          </div>
          <div className="mt-5">
            <div className="font-bold">
              Congrats, You’ve added a beneficiary.
            </div>
          </div>
        </DialogContent>
      </Dialog>
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
                      onClick={() => {
                        console.log("kyc");
                        if (row.kyc) {
                          setPaymentOpen(true);
                        }
                      }}
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
                      <InputUPI input={input} Input={Input} />
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
                onClick={() => setOpen(true)}
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
