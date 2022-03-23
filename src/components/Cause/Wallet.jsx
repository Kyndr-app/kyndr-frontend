import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import {
  BgBlurFifth,
  BgBlurForth,
  BgBlurPrimary,
  BgBlurSecondary,
  Wallet as WalletIcon,
  Kinr,
  Kyndr,
  Trophy,
  Arrow,
  Copy,
  Open,
} from "../../assets/icons";
import fromNow from "../../libraries/FromNow";
import {
  getRandomDate,
  getRandomImage,
  getRandomStatus,
  truncateFromMiddle,
} from "../../utils/extras";
import Method from "../../utils/Method";
import { StyledInput, StyledTab, StyledTabs } from "../../utils/MuiComponents";

const createData = () => ({
  age: fromNow(getRandomDate()),
  block: Math.random().toString().slice(2, 9),
  method: getRandomStatus(),
  id: Math.random().toString(36).slice(2, 9),
});

const randomData = Array.from({ length: 7 }, createData);

const a11yTabProps = (index) => ({
  id: `vertical-tab-${index}`,
  "aria-controls": `vertical-tabpanel-${index}`,
});

const TransactionTable = () => {
  const [value, setValue] = useState(0);
  return (
    <Paper className="p-5 mt-3">
      <StyledTabs
        className="mb-3"
        value={value}
        onChange={(e, v) => setValue(v)}
      >
        <StyledTab label="Transfers" {...a11yTabProps(0)} />
        <StyledTab label="Holders" {...a11yTabProps(1)} />
        <StyledTab label="Info" {...a11yTabProps(2)} />
        <StyledTab label="Contacts" {...a11yTabProps(3)} />
        <StyledTab label="Analytics" {...a11yTabProps(4)} />
        <StyledTab label="Comments" {...a11yTabProps(5)} />
      </StyledTabs>
      <TableContainer className="rounded-md">
        <Table>
          <TableHead className="bg-slate-100">
            <TableRow>
              <TableCell className="text-sm font-medium text-roboto px-1 py-3">
                Txn Hash
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto px-1 py-3">
                Method
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto px-1 py-3">
                Block
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto px-1 py-3">
                Age
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto px-1 py-3">
                From
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto px-1 py-3">
                To
              </TableCell>
              <TableCell
                align="right"
                className="text-sm font-medium text-roboto px-1 py-3"
              >
                Quantity
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {randomData.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-sm px-1 font-medium py-3 text-roboto text-primary">
                  c4C222B8546C3be595f6894m...
                </TableCell>
                <TableCell className="text-sm px-1 py-3">
                  <Method method={row.method} />
                </TableCell>
                <TableCell className="text-sm px-1 py-3 font-medium text-roboto text-primary">
                  <div className="min-w-[100px]">{row.block}</div>
                </TableCell>
                <TableCell className="font-medium px-1 py-3 text-roboto text-xs ">
                  <div className="w-24">{row.age}</div>
                </TableCell>
                <TableCell className="text-sm px-1 py-3">
                  c4C222B8546C3be595f6894m
                </TableCell>
                <TableCell className="text-sm px-1 font-medium py-3 text-roboto text-primary">
                  <div className="w-full flex items-center">
                    <div
                      style={{
                        letterSpacing: "0.4px",
                      }}
                      className={`px-3 py-2 bg-green-100 text-green-600 text-xs w-auto inline-block text-center text-roboto font-medium rounded mr-2`}
                    >
                      <Arrow />
                    </div>
                    c4C222B83be595f6894m
                  </div>
                </TableCell>
                <TableCell className="text-sm py-3 px-1">
                  <div className="min-w-[100px] text-right">20,000</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell
                colSpan={8}
                className="text-sm text-center py-3"
                align="right"
              >
                <div className="flex justify-end">
                  <Pagination count={10} color="primary" />
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const Wallet = () => {
  return (
    <main className="p-10">
      <h1 className="text-2xl items-center flex font-semibold mb-5 text-[#4C4C66]">
        Your Wallet:{" "}
        <span className="text-primary font-normal">
          0x896E332e6D072Ce84B1a97d41B15ddd0EF9337A1
        </span>
        <div className="ml-3">
          <Copy className="cursor-pointer" />
        </div>
        <div className="ml-3">
          <Open className="cursor-pointer" />
        </div>
      </h1>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <div className="grid grid-cols-4 w-full gap-5">
            <Paper className="shadow-lg relative w-full max-w-[230px] overflow-hidden">
              <BgBlurPrimary className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
              <div className="backdrop-blur-[60px] h-full px-3 relative pt-5 pb-3">
                <ListItem disablePadding>
                  <ListItemAvatar className="">
                    <Avatar src={Kyndr} alt="avatar" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<span className="font-bold">Token Balance</span>}
                    secondary={
                      <span className="text-gray-500 text-xs">$KYNDR</span>
                    }
                  />
                </ListItem>
                <div className="mt-3 text-center">
                  <h1 className="text-3xl font-medium">50,156.00</h1>
                  <div className="text-[#6c6c6c] text-xs">&nbsp;</div>
                </div>
                <div className="mt-3">
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="bg-gradient-to-r py-3 shadow-none from-primary-light to-primary"
                  >
                    <span className="text-xs capitalize">Get $KYNDR</span>
                  </Button>
                </div>
              </div>
            </Paper>
            <Paper className="shadow-lg relative w-full max-w-[230px] overflow-hidden">
              <BgBlurSecondary className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] blur-3xl" />
              <div className="backdrop-blur-[60px] h-full px-3 relative pt-5 pb-3">
                <ListItem disablePadding>
                  <ListItemAvatar className="">
                    <Avatar src={Kinr} alt="avatar" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<span className="font-bold">Token Balance</span>}
                    secondary={
                      <span className="text-gray-500 text-xs">$KiNR</span>
                    }
                  />
                </ListItem>
                <div className="mt-3 text-center">
                  <h1 className="text-3xl font-medium">50,156.00</h1>
                  <div className="text-[#6c6c6c] text-xs">&nbsp;</div>
                </div>
                <div className="mt-3">
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="bg-gradient-to-r py-3 shadow-none from-primary-light to-primary"
                  >
                    <span className="text-xs capitalize">Get $KiNR</span>
                  </Button>
                </div>
              </div>
            </Paper>
            <Paper className="shadow-lg relative w-full max-w-[230px] overflow-hidden">
              <BgBlurForth className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] blur-3xl" />
              <div className="backdrop-blur-[60px] h-full px-3 relative pt-5 pb-3">
                <ListItem disablePadding>
                  <ListItemIcon>
                    <WalletIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span className="font-bold">
                        Withdraw Cash <br />
                        (30% of total funds)
                      </span>
                    }
                  />
                </ListItem>
                <div className="mt-3 text-center">
                  <div className="text-3xl font-medium">₹10,000</div>
                  <div className="text-[#6c6c6c] text-xs">
                    Withdrawable to Bank Account
                  </div>
                </div>
                <div className="mt-3">
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="bg-gradient-to-r py-3 shadow-none from-primary-light to-primary"
                  >
                    <span className="text-xs capitalize">Get $KiNR</span>
                  </Button>
                </div>
              </div>
            </Paper>
            <Paper className="shadow-lg relative w-full max-w-[230px] overflow-hidden">
              <BgBlurFifth className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] blur-3xl" />
              <div className="backdrop-blur-[60px] h-full px-3 relative pt-5 pb-3">
                <ListItem disablePadding>
                  <ListItemIcon className="">
                    <Trophy className="mb-5" />
                  </ListItemIcon>
                  <ListItemText
                    primary={<span className="font-bold">Token Balance</span>}
                    secondary={
                      <span className="text-gray-500 text-xs">&nbsp;</span>
                    }
                  />
                </ListItem>
                <div className="mt-3 text-center">
                  <h1 className="text-3xl font-medium">10</h1>
                  <div className="text-[#6c6c6c] text-xs">$KYNDR</div>
                </div>
                <div className="mt-3">
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="bg-gradient-to-r py-3 shadow-none from-primary-light to-primary"
                  >
                    <span className="text-xs capitalize">Get $KiNR</span>
                  </Button>
                </div>
              </div>
            </Paper>
          </div>
          <div className="mt-20">
            <TransactionTable />
          </div>
        </div>
        <div className="col-span-4">
          <Paper elevation={3}>
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
              <div className="mt-5 first:mt-0">
                <StyledInput
                  label="Address"
                  name="address"
                  fullWidth
                  placeholder="0x896E332e6D072Ce84B1a97d41B15ddd0EF9337A1"
                  select
                >
                  <MenuItem
                    value={"0x896E332e6D072Ce84B1a97d41B15ddd0EF9337A1"}
                  >
                    0x896E332e6D072Ce84B1a97d41B15ddd0EF9337A1
                  </MenuItem>
                </StyledInput>
              </div>
              <div className="mt-5 first:mt-0">
                <StyledInput
                  label="Amount"
                  name="address"
                  InputProps={{ className: "pb-1" }}
                  fullWidth
                  placeholder="10,000.00"
                  type="number"
                />
              </div>
              <div className="mt-5 first:mt-0 text-left">
                <StyledInput
                  label="Assets"
                  name="assets"
                  fullWidth
                  placeholder="12,345.00"
                  select
                  SelectProps={{
                    displayEmpty: true,
                  }}
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
                  <span className="capitalize font-medium text-base">
                    Transfer
                  </span>
                </Button>
              </div>
            </div>
          </Paper>
          <p
            className="text-gray-500  mt-10 mb-2 text-xs font-semibold uppercase"
            style={{
              letterSpacing: "0.01em",
            }}
          >
            Payment Requests
          </p>
          <TableContainer
            className="flex flex-col justify-between"
            elevation={2}
            component={Paper}
          >
            <Table>
              <TableBody>
                {[1, 2, 3].map((item) => (
                  <TableRow>
                    <TableCell className="py-0 border-b">
                      <div className="flex items-center">
                        <div>
                          <h1 className="text-[15px] font-medium">Request</h1>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      align="right"
                      className="text-[15px] text-primary p-4 font-medium"
                    >
                      View Request
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </main>
  );
};

export default Wallet;
