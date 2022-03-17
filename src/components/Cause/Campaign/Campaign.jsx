import { DateRangePicker } from "@mui/lab";
import {
  Avatar,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BgBlurPrimary,
  Filter,
  Chart,
  Wallet,
  Trophy,
  Users,
} from "../../../assets/icons";
import image from "../../../assets/images/campaign-page.png";

const boxes = [
  {
    name: "Funds Raised",
    price: "225,000.00",
    subtitle: "KINR",
    bg: "bg-[#FCBFBF]",
    icon: Chart,
  },
  {
    name: "Payments",
    price: "25,000.00",
    bg: "bg-[#F9E8E6]",
    subtitle: "KiNR",
    icon: Wallet,
  },
  {
    name: "Rewards",
    price: "2.2",
    subtitle: "$ KYNDR",
    bg: "bg-[#FFF3D2]",
    icon: Trophy,
  },
  {
    name: "Supporters",
    price: "45",
    bg: "bg-[#E7FFC0]",
    icon: Users,
  },
];

const Campaign = () => {
  const [value, setValue] = useState([null, null]);
  const [open, setOpen] = useState(false);
  return (
    <main className="p-10">
      <div className="">
        <h1 className="text-gray-500 mb-2 text-roboto text-xs font-medium uppercase">
          Dashboard Overview
        </h1>
        <Paper className="p-4 mb-5">
          <div className="grid grid-cols-5 gap-6">
            <div className="h-[210px] relative shadow-md rounded-md overflow-hidden">
              <BgBlurPrimary className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
              <div className="backdrop-blur-[60px] flex justify-center items-center flex-col gap-4 bg-white bg-opacity-10 h-full w-full">
                <Button
                  className="px-5 py-2 text-4xl text-roboto font-light bg-gradient-to-br from-primary-light to-primary"
                  variant="contained"
                  component={Link}
                  to="./add/intro"
                >
                  +
                </Button>
                <div className="text-center font-medium text-roboto">
                  Create Campaign
                </div>
              </div>
            </div>
            {[1, 2, 3, 4].map((el) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="h-[210px] shadow-md rounded-md overflow-hidden"
                >
                  <div className="p-3 w-full bg-gradient-to-b from-[#00000080] to-transparent h-full flex justify-between items-center flex-col">
                    <h1 className="w-full text-white text-base font-bold">
                      Cuddalore Covid-19 Fund
                    </h1>
                    <div>
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/cause/campaign/details"
                        className="bg-gradient-to-tr px-10 rounded-lg shadow-none py-3 max-w-[300px] mx-auto from-primary-light to-primary"
                      >
                        <span className="text-xs text-roboto capitalize">
                          View Campaign
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Paper>
        <h1 className="text-gray-500 mb-2 text-roboto text-xs font-medium uppercase">
          Cause Stats
        </h1>
        <Paper className="p-6 mb-5">
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-md">
              <div className="h-full w-full">
                <DateRangePicker
                  label="Advanced keyboard"
                  value={value}
                  open={open}
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={() => (
                    <div className="flex mb-10">
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
                <div className="grid-cols-2 gap-5 grid">
                  {boxes.map((card) => (
                    <Paper className={`h-40 shadow-md px-7 py-5 ${card.bg}`}>
                      <div className="flex mb-4 justify-between items-center">
                        <h1 className="font-medium">{card.name}</h1>
                        <card.icon className="w-4 h-4" />
                      </div>
                      <h1 className="text-[32px] font-bold">{card.price}</h1>
                      <h6 className="font-semibold text-sm">{card.subtitle}</h6>
                    </Paper>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-5 h-full">
              <div className="grid h-full grid-cols-2 gap-8">
                <div className="flex h-full flex-col">
                  <div className="mb-4">
                    <h1 className="font-medium text-lg">Top Supporters</h1>
                  </div>
                  <TableContainer
                    className="h-full flex flex-col justify-between"
                    elevation={2}
                    component={Paper}
                  >
                    <Table>
                      <TableBody>
                        {[1, 2, 3, 4].map((item) => (
                          <TableRow>
                            <TableCell className="py-0 border-b-0">
                              <div className="flex items-center">
                                <Avatar
                                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                  className="mr-3 w-7 h-7"
                                />
                                <div>
                                  <h1 className="text-sm font-medium text-[#9E9E9E]">
                                    John Doe
                                  </h1>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell
                              align="right"
                              className="text-primary py-3 font-medium border-b-0"
                            >
                              USD 1,00,000
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="text-center p-4 text-primary text-xs">
                      See more
                    </div>
                  </TableContainer>
                </div>
                <div className="flex h-full flex-col">
                  <div className="mb-4">
                    <h1 className="font-medium text-lg">Activity</h1>
                  </div>
                  <TableContainer
                    className="h-full flex flex-col justify-between"
                    elevation={2}
                    component={Paper}
                  >
                    <Table>
                      <TableBody>
                        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                          <TableRow>
                            <TableCell className="py-0 border-b-0">
                              <div className="flex items-center">
                                <Avatar
                                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                  className="mr-3 w-7 h-7"
                                />
                                <div>
                                  <h1 className="text-sm font-medium text-[#9E9E9E]">
                                    John Doe
                                  </h1>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell
                              align="right"
                              className="text-primary py-3 font-medium border-b-0"
                            >
                              USD 1,00,000
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="text-center p-4 text-primary text-xs">
                      See more
                    </div>
                  </TableContainer>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </main>
  );
};

export default Campaign;
