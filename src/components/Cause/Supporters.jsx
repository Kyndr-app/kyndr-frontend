import {
  Button,
  InputBase,
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
import React from "react";
import { getRandomDate, getRandomInt, getRandomName } from "../../utils/extras";
import { DateTime } from "luxon";
import { Search } from "../../assets/icons";

const createData = () => ({
  name: `${getRandomName()} ${getRandomName()}`,
  date: DateTime.fromISO(getRandomDate()).toFormat("dd LLL, yyyy"),
  amount: (getRandomInt(10, 20) * 1000).toLocaleString(),
  location: "Dummy Address here 123456",
  timesContributed: "Dummy Address here...",
  id: Math.random().toString(36).slice(2, 9),
});

const randomData = Array.from({ length: 7 }, createData);

const Supporters = () => {
  return (
    <div className="container">
      <p
        className="text-gray-500 mb-2 text-roboto text-xs font-medium uppercase"
        style={{
          letterSpacing: "0.01em",
        }}
      >
        SUPPORTERS
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
                Date
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-2">
                Location
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-2">
                Amount
              </TableCell>
              <TableCell className="text-sm font-medium text-roboto py-2">
                Times Contribution
              </TableCell>
              <TableCell
                align="right"
                className="text-sm font-medium text-roboto py-2"
              >
                <InputBase
                  startAdornment={<Search className="mr-3" />}
                  className="px-2 rounded bg-white bg-opacity-30"
                  placeholder="Search.."
                  fullWidth
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {randomData.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-sm font-medium py-2 text-roboto">
                  {row.name}
                </TableCell>
                <TableCell className="font-medium text-sm py-2">
                  {row.date}
                </TableCell>
                <TableCell className="text-sm py-2 font-medium text-roboto">
                  {row.location}
                </TableCell>
                <TableCell className="font-medium py-2 text-roboto text-sm">
                  {row.amount}
                </TableCell>
                <TableCell className="font-medium text-sm py-2">
                  {row.timesContributed}
                </TableCell>
                <TableCell
                  align="right"
                  className="text-sm font-medium py-2 text-roboto"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="bg-gradient-to-r max-w-[180px] py-2 shadow-none from-primary-light to-primary"
                  >
                    <span className="text-xs capitalize">
                      Issue Donation Receipt
                    </span>
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
                  <Pagination count={10} className="text-xs" color="primary" />
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Supporters;
