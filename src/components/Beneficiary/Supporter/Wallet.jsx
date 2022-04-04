import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableFooter,
  Pagination,
} from "@mui/material";
import React from "react";
import {
  BgBlurPrimary,
  BgBlurPrimaryLg,
  BgBlurSecondary,
  Download,
  Kinr,
  Kyndr,
  Reward,
  Upload,
} from "../../assets/icons";
import fromNow from "../../libraries/FromNow";
import { getRandomDate, getRandomStatus } from "../../utils/extras";
import Method from "../../utils/Method";

const createData = () => ({
  age: fromNow(getRandomDate()),
  block: Math.random().toString().slice(2, 9),
  method: getRandomStatus(),
  id: Math.random().toString(36).slice(2, 9),
});

const randomData = Array.from({ length: 7 }, createData);

const Wallet = () => {
  return (
    <main className="px-10 pb-5 pt-10">
      <h1 className="text-2xl text-gray-500 font-bold">My Wallet</h1>
      <p
        className="text-gray-500 mb-2 text-xs font-semibold uppercase"
        style={{
          letterSpacing: "0.01em",
        }}
      >
        Info & Explainer
      </p>
      <div className="flex justify-between">
        <div className="flex w-full">
          <Paper className="shadow-lg relative px-3 w-full mr-4 pt-5 pb-3 max-w-[230px] overflow-hidden">
            <BgBlurPrimary className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] blur-3xl" />
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
              <h1 className="text-3xl font-bold">50,156.00</h1>
            </div>
            <div className="mt-3">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled
                className="bg-gradient-to-r disabled:to-transparent disabled:from-transparent py-3 shadow-none from-primary-light to-primary"
              >
                <span className="text-xs capitalize">Get $KYNDR</span>
              </Button>
            </div>
          </Paper>
          <Paper className="shadow-lg relative w-full max-w-[230px] overflow-hidden">
            <BgBlurSecondary className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
            <div className="h-full px-3 pt-5 pb-3 backdrop-blur-2xl">
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
                <h1 className="text-3xl font-bold">50,156.00</h1>
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
        <Paper className="max-w-[900px] w-full py-3 px-10 relative overflow-hidden">
          <BgBlurPrimaryLg className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] blur-3xl" />
          <div className="flex text-[#6C6C6C]">
            <div className="w-full">
              <ListItem disablePadding>
                <ListItemIcon>
                  <Reward />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span className="font-bold text-[25px] text-black">
                      $KYNDR Rewards:
                    </span>
                  }
                />
              </ListItem>
              <div className="mt-5 text-lg">
                Get rewarded with 1$KYNDR for every
                <br />
                donation above $50
              </div>
            </div>
            <div className="text-center py-3">
              <div className="text-lg mb-4 whitespace-nowrap">
                Unclaimed $KYNDR
              </div>
              <div className="text-3xl text-black font-bold">4.0</div>
              <div className="mt-4">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled
                  className="bg-gradient-to-r  disabled:to-transparent disabled:from-transparent max-w-[180px] py-3 shadow-none from-primary-light to-primary"
                >
                  <span className="text-xs capitalize">Radeem $KYNDR</span>
                </Button>
              </div>
            </div>
          </div>
        </Paper>
      </div>
      <div className="my-4">
        <div className="text-xs flex items-center justify-between font-medium text-roboto uppercase mt-4 text-[#4C4C66]">
          Transactions
          <div className="flex">
            <Button
              endIcon={<Download className="w-6 h-6 ml-1" />}
              class="px-3 flex mr-3 items-center py-2 text-xs text-black transition-colors duration-150 border border-gray-200 bg-gray-200 rounded-none relative"
            >
              <span className="text-sm">Download CSV</span>
            </Button>
            <Button
              endIcon={<Upload className="w-6 h-6 ml-1" />}
              class="px-3 flex items-center py-2 text-xs text-black transition-colors duration-150 border border-gray-200 bg-gray-200 rounded-none relative"
            >
              <span className="text-sm">Export</span>
            </Button>
          </div>
        </div>
      </div>
      <TransactionTable />
    </main>
  );
};

const TransactionTable = () => {
  return (
    <>
      <TableContainer className="rounded-md shadow-lg" component={Paper}>
        <Table>
          <TableHead className="bg-slate-100">
            <TableRow>
              <TableCell className="text-sm font-medium text-roboto py-3">
                Txn Hash
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                Method
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                Block
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                Age
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                From
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                To
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                Value
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-3">
                [Txn Fee]
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {randomData.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-sm font-medium py-3 text-roboto text-primary">
                  c4C222B8546C3be595f6894m...
                </TableCell>
                <TableCell className="text-sm py-3">
                  <Method method={row.method} />
                </TableCell>
                <TableCell className="text-sm py-3 font-medium text-roboto text-primary">
                  {row.block}
                </TableCell>
                <TableCell className="font-medium py-3 text-roboto text-xs ">
                  {row.age}
                </TableCell>
                <TableCell className="text-sm py-3">
                  <div className="flex justify-between">
                    c4C222B8546C3be595f6894m
                    <div
                      style={{
                        letterSpacing: "0.4px",
                      }}
                      className={`px-1 bg-orange-100 text-orange-600 text-xs w-auto inline-block text-center text-roboto font-medium rounded-md ml-5 py-1`}
                    >
                      Out
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm font-medium py-3 text-roboto text-primary">
                  c4C222B8546C3be595f6894m
                </TableCell>
                <TableCell className="text-sm py-3">0 MATIC</TableCell>
                <TableCell className="text-sm py-3">0.000321</TableCell>
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
    </>
  );
};

export default Wallet;
