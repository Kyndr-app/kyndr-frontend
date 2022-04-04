import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import { BorderLinearProgress } from "../../utils/MuiComponents";
import { getRandomInt } from "../../utils/extras";
import { Copy, Open } from "../../assets/icons";
const data = Array.from({ length: 200 }, (_e, i) => [
  new Date("July 07,2021").getTime() + 86400000 * i,
  getRandomInt(10000, 20000),
]);

const formatter = Intl.NumberFormat("en", { notation: "compact" });
var options = {
  series: [{ data }],
  chart: {
    fontFamily: "Poppins, sans-serif",
    selection: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    id: "area-datetime",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    // style: "hollow",
  },
  xaxis: {
    type: "datetime",
    tickAmount: 6,
  },
  yaxis: {
    seriesName: "KiNR Circulating Supply",
    labels: {
      formatter: (v) => `$ ${formatter.format(v)}`,
    },
    min: 0,
    max: 50000,
    forceNiceScale: true,
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
};
const cards = [
  {
    name: "KiNR Circulating Supply",
    price: "43,00,000.00",
    subtitle: "$KiNR",
    bg: "bg-[#FCBFBF]",
  },
  {
    name: "Indian Rupee Reserves",
    price: "₹43,00,000.00",
    bg: "bg-[#F9E8E6]",
  },
  {
    name: "Treasury",
    price: "$ 295,200.54",
    bg: "bg-[#FFF3D2]",
  },
  {
    name: "Revenue",
    price: "$ 4,500.00",
    bg: "bg-[#E7FFC0]",
  },
  {
    name: "DAO Proposals",
    proposals: {
      active: 12,
      resolved: 25,
      failed: 2,
    },
    bg: "bg-[#DAE3FF]",
  },
];

/**
 * Progess Bars
 * 1. INR 70% #00A0E9 25000 INR
 * 2. USD 40% #950AEF 2000 USD
 * 3. BTC 70% #CB5B66 2 BTC
 * 4. ETH 80% #F39800 1.2 ETH
 */

const progressBars = [
  {
    name: "INR",
    value: "70",
    color: "#00A0E9",
    amount: "25,000",
  },
  {
    name: "USD",
    value: "40",
    color: "#950AEF",
    amount: "2,000",
  },
  {
    name: "BTC",
    value: "70",
    color: "#CB5B66",
    amount: "2",
  },
  {
    name: "ETH",
    value: "80",
    color: "#F39800",
    amount: "1.2",
  },
];

const DAO = () => {
  return (
    <main className="px-10 pb-5 pt-10">
      <h1 className="text-2xl flex items-center font-semibold mb-5 text-[#4C4C66]">
        Kyndr DAO contact address:{" "}
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
      <h3 className="text-[#4C4C66] text-xs mb-4 uppercase font-medium">
        Info & Explainer
      </h3>
      <Paper className="py-5 pr-5 pl-2 shadow-lg">
        <h1 className="text-2xl mb-3 font-bold pl-4">
          KiNR Circulating Supply
        </h1>
        <Chart
          options={options}
          type="area"
          height={300}
          series={options.series}
        />
      </Paper>
      <div className="grid grid-cols-5 gap-5 mt-8 items-center justify-center">
        {cards.map((card) => (
          <Paper className={`h-44 shadow-md p-7 ${card.bg}`}>
            <div className="">
              <h1 className="font-medium mb-3">{card.name}</h1>
            </div>
            {card.price ? (
              <div className="text-[32px] font-bold">{card.price}</div>
            ) : (
              <div className="flex justify-between items-center text-center">
                <div>
                  <h1 className="text-[32px] font-bold">
                    {card.proposals.active}
                  </h1>
                  <h3 className="text-lg font-medium">Active</h3>
                </div>
                <div>
                  <h1 className="text-[32px] font-bold">
                    {card.proposals.resolved}
                  </h1>
                  <h3 className="text-lg font-medium">Resolved</h3>
                </div>
                <div>
                  <h1 className="text-[32px] font-bold">
                    {card.proposals.failed}
                  </h1>
                  <h3 className="text-lg font-medium">Failed</h3>
                </div>
              </div>
            )}
            <span className="font-bold">{card.subtitle}</span>
          </Paper>
        ))}
      </div>
      <div className="grid grid-cols-3 mt-8 gap-4">
        <div className="col-span-1">
          <div className="flex h-full flex-col">
            <h3 className="text-[#4C4C66] text-xs mb-2 uppercase font-medium">
              Treasury Breakdown
            </h3>
            <Paper className="px-8 py-10 h-full flex justify-center flex-col shadow-lg">
              {progressBars.map((bar) => (
                <div className="flex items-end last:mb-0 mb-4">
                  <div className="text-xs w-14">{bar.name}</div>
                  <div className="w-full">
                    <div className="flex justify-between">
                      <span className="text-xs font-bold">
                        {bar.amount} {bar.name}
                      </span>
                      <h6 className="text-right font-medium text-sm">
                        {bar.value}%
                      </h6>
                    </div>
                    <BorderLinearProgress
                      className="w-full"
                      variant="determinate"
                      value={bar.value}
                      extraColor={bar.color}
                    />
                  </div>
                </div>
              ))}
            </Paper>
          </div>
        </div>
        <div className="col-span-2">
          <div className="h-full flex flex-col">
            <h3 className="text-[#4C4C66] text-xs mb-2 uppercase font-medium">
              Proposals & Voting
            </h3>
            <Paper className="px-10 py-10 shadow-lg h-full">
              <div className="grid grid-cols-2 gap-x-5">
                <div className="col-span-2">
                  <h1 className="text-lg font-bold mb-5">
                    Tokens Required For Proposals & Votes &nbsp;
                    <span className="text-lg font-semibold text-[#5E5D75]">
                      20 $KYNDR
                    </span>
                  </h1>
                </div>
                <div>
                  <p className="text-lg text-[#6C6C6C]">
                    You can now create proposals to add or remove features,
                    create something new or get inputs on matters regarding the
                    platform. Token holders can both create proposals and vote
                    on them.
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="mt-4 w-full">
                    <div className="flex items-center justify-between">
                      <h1 className="text-xl font-medium">
                        Your Token Balance
                      </h1>
                      <h1 className="text-3xl font-bold">51.56 $KYNDR</h1>
                    </div>
                  </div>
                  <div className="w-full flex gap-4">
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      className="bg-gradient-to-r py-4 from-primary-light to-primary"
                    >
                      <Typography noWrap className="text-xs capitalize">
                        Click here to make a proposal
                      </Typography>
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      className="bg-gradient-to-r py-4 from-primary-light to-primary"
                    >
                      <span className="text-xs capitalize">
                        Click here to vote
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DAO;
