import { DateRangePicker } from "@mui/lab";
import {
  Avatar,
  Button,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  tabsClasses,
} from "@mui/material";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import {
  Copy,
  Filter,
  Open,
  Chart as ChartIcon,
  UserSquare,
  Users,
  User,
  Send,
  FlagAlt,
  BackArrow,
  Folder,
  EditLight,
  ShareRound,
} from "../../../assets/icons";
import { getRandomInt } from "../../../utils/extras";
import JoditEditor from "jodit-react";
import { StyledTab, StyledTabs } from "../../../utils/MuiComponents";
const data = Array.from({ length: 200 }, (_e, i) => [
  new Date("July 07,2021").getTime() + 3600000 * i,
  getRandomInt(10000, 20000),
]);

const beneficiaries = [
  {
    name: "Tesla Motors",
    image: "https://source.unsplash.com/random/300x300",
  },
  {
    name: "Metaverse",
    image: "https://source.unsplash.com/random/400x400",
  },
  {
    name: "SpaceX",
    image: "https://source.unsplash.com/random/500x500",
  },
  {
    name: "Qasim Rai",
    image: "https://source.unsplash.com/random/600x600",
  },
  {
    name: "Jane Doe",
    image: "https://source.unsplash.com/random/700x700",
  },
  {
    name: "Tesla Motors",
    image: "https://source.unsplash.com/random/250x250",
  },
  {
    name: "Metaverse",
    image: "https://source.unsplash.com/random/290x290",
  },
  {
    name: "Tesla Motors",
    image: "https://source.unsplash.com/random/251x251",
  },
];

const boxes = [
  {
    name: "Contributions",
    price: "22,000",
    subtitle: "KINR",
    bg: "bg-[#FCBFBF]",
    icon: ChartIcon,
  },
  {
    name: "Average Contribution",
    price: "4,000",
    bg: "bg-[#F9E8E6]",
    subtitle: "KiNR",
    icon: UserSquare,
  },
  {
    name: "Supporters",
    price: "60",
    bg: "bg-[#FFF3D2]",
    icon: Users,
  },
  {
    name: "Repeat Supporters",
    price: "45",
    bg: "bg-[#E7FFC0]",
    icon: User,
  },
  {
    name: "Campaign Shares",
    price: "45",
    bg: "bg-[#DAE3FF]",
    icon: Send,
  },
  {
    name: "Campaign Updates",
    price: "45",
    bg: "bg-[#FCBFBF]",
    icon: FlagAlt,
  },
];

const formatter = Intl.NumberFormat("en", { notation: "compact" });
var options = {
  series: [{ data }],
  chart: {
    fontFamily: "Poppins, sans-serif",
    selection: { enabled: false },
    toolbar: { show: false },
    id: "area-datetime",
    zoom: { enabled: false },
  },
  dataLabels: { enabled: false },
  markers: { size: 0, style: "hollow" },
  xaxis: { type: "datetime", tickAmount: 6 },
  yaxis: {
    seriesName: "KiNR Circulating Supply",
    labels: {
      formatter: (v) => `$ ${formatter.format(v)}`,
      style: { fontFamily: "Poppins, sans-serif" },
    },
    min: 0,
    max: 50000,
    forceNiceScale: true,
  },
  tooltip: { x: { format: "dd MMM yyyy" } },
  stroke: { curve: "smooth", width: 2 },
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

const Beneficiary = ({ name, image }) => {
  return (
    <Tab
      disableRipple
      style={{
        opacity: 1,
      }}
      label={
        <div className="w-[86px]">
          <div>
            <img
              src={image}
              className="rounded-full w-16 mb-2 h-16 mx-auto"
              alt=""
            />
          </div>
          <div className="text-sm mb-5 text-roboto capitalize font-semibold whitespace-nowrap">
            {name}
          </div>
        </div>
      }
    />
  );
};

const Details = () => {
  const [values, setValues] = useState([null, null]);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleChange = (e, nv) => setValue(nv);
  return (
    <main className="px-10 pb-5 pt-10">
      <div className="flex justify-between items-center">
        <div className="flex">
          <div>
            <IconButton component={Link} to="..">
              <BackArrow />
            </IconButton>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-5 text-[#4C4C66]">
              Help This Cause
            </h1>
            <div className="flex items-center mb-4">
              <h3 className="text-[#4C4C66] text-xs uppercase font-medium">
                Campaign Wallet:{" "}
                <span className="text-primary font-normal text-lg">
                  0x896E332e6D072Ce84B1a97d41B15ddd0EF9337A1
                </span>
              </h3>
              <div className="ml-3">
                <Copy className="cursor-pointer" />
              </div>
              <div className="ml-3">
                <Open className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <Button
            variant="contained"
            color="primary"
            endIcon={<Folder />}
            className="bg-gradient-to-tr px-5 rounded shadow-none py-3 max-w-[300px] mx-auto from-primary-light to-primary"
          >
            <span className="text-xs text-roboto capitalize">Get report</span>
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={<EditLight />}
            className="bg-gradient-to-tr px-5 rounded shadow-none py-3 max-w-[300px] mx-auto from-primary-light to-primary"
          >
            <span className="text-xs text-roboto capitalize">Edit</span>
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ShareRound />}
            className="bg-gradient-to-tr px-5 rounded shadow-none py-3 max-w-[300px] mx-auto from-primary-light to-primary"
          >
            <span className="text-xs text-roboto capitalize">Share</span>
          </Button>
        </div>
      </div>
      <Paper className="py-5 pr-5 pl-2 shadow-lg">
        <div className="flex justify-between">
          <h1 className="text-2xl mb-3 font-bold pl-4">Campaign Funds</h1>
          <DateRangePicker
            label="Advanced keyboard"
            value={values}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            onChange={(newValue) => setValues(newValue)}
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
        </div>
        <Chart
          options={options}
          type="area"
          height={250}
          series={options.series}
        />
      </Paper>
      <div className="mt-7">
        <div className="grid grid-cols-6 gap-5">
          {boxes.map((card) => (
            <Paper className={`h-40 shadow-md p-5 ${card.bg}`}>
              <div className="flex mb-4 justify-between items-center">
                <h1 className="font-bold text-xs">{card.name}</h1>
                <card.icon className="w-3.5 h-3.5" />
              </div>
              <h1 className="text-[32px] font-bold">{card.price}</h1>
              <h6 className="font-semibold text-sm">{card.subtitle}</h6>
            </Paper>
          ))}
        </div>
      </div>
      <div className="mt-7">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex gap-5 flex-col">
            <div className="h-full flex flex-col">
              <div className="flex justify-between mb-5 items-center">
                <h3 className="text-lg font-bold">Team Members</h3>
                <Link to="../../../team" className="text-primary underline">
                  Edit
                </Link>
              </div>
              <Paper className="p-5 flex items-center h-full">
                <Tabs
                  variant="scrollable"
                  scrollButtons
                  sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                      color: "primary.main",
                      "&.Mui-disabled": { display: "none" },
                    },
                  }}
                  defaultValue={0}
                >
                  {beneficiaries.map((item, index) => (
                    <Beneficiary key={index} {...item} />
                  ))}
                </Tabs>
              </Paper>
            </div>
            <div className="h-full flex flex-col">
              <div className="flex justify-between mb-5 items-center">
                <h3 className="text-lg font-bold">Benificiaries</h3>
                <Link to="../../../payments" className="text-primary underline">
                  Edit
                </Link>
              </div>
              <Paper className="p-5 flex items-center h-full">
                <Tabs
                  variant="scrollable"
                  scrollButtons
                  sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                      color: "primary.main",
                      "&.Mui-disabled": { display: "none" },
                    },
                  }}
                  defaultValue={0}
                >
                  {beneficiaries.map((item, index) => (
                    <Beneficiary key={index} {...item} />
                  ))}
                </Tabs>
              </Paper>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Send Updates</h3>
            <Paper className="p-5">
              <div className="flex justify-between mb-3">
                <div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">
                      Update
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-6 h-6 bg-primary font-bold text-white text-[11px] flex items-center justify-center">
                    #03
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <ListItem disablePadding>
                  <ListItemAvatar className="min-w-[35px]">
                    <Avatar
                      className="w-7 h-7"
                      alt="Travis Howard"
                      src="https://source.unsplash.com/random/293x293"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { lineHeight: "1" },
                    }}
                    primary={
                      <span className="text-xs font-bold">Qasim Rai</span>
                    }
                  />
                </ListItem>
              </div>
              <div className="mt-4">
                <JoditEditor tabIndex={1} />
                <div className="mt-16 flex justify-end">
                  <Button
                    variant="contained"
                    fullWidth
                    className="py-2 max-w-[200px] bg-gradient-to-r from-primary-light to-primary"
                    color="primary"
                  >
                    <span className="capitalize font-medium">
                      Post a new update
                    </span>
                  </Button>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
      <div className="mt-7">
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
      </div>
    </main>
  );
};

const a11yProps = (index) => ({
  id: `vertical-tab-${index}`,
  "aria-controls": `vertical-tabpanel-${index}`,
});

export default Details;
