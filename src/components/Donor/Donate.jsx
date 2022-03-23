import {
  Button,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIcon,
  Tab,
  Tabs,
  tabsClasses,
} from "@mui/material";
import React, { useState } from "react";
import {
  Medical,
  Memorials,
  Sport,
  Tech,
  Virus,
  Women,
  Graph,
  Increase,
} from "../../assets/icons";

import campaign from "../../assets/images/campaign-bg.jpg";
import { getRandomInt } from "../../utils/extras";
import NGOCard from "../../utils/NGOCard";

const randomData = () => ({
  title: "Cuddalore Covid-19 Fund",
  desc: "by: Qasim Rai",
  des: "Receive tax benefits by donating to this cause",
  total: "$ 28,000",
  percentage: getRandomInt(),
});

const cards = Array.from({ length: 30 }, randomData);

const tabs = [
  {
    name: "Covid-19",
    icon: Virus,
  },
  {
    name: "Medical",
    icon: Medical,
  },
  {
    name: "Memorials",
    icon: Memorials,
  },
  {
    name: "Sports",
    icon: Sport,
  },
  {
    name: "Technology",
    icon: Tech,
  },
  {
    name: "Women",
    icon: Women,
  },
];

const Donate = () => {
  const [active, setActive] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <main className="px-10 pb-5 pt-10">
      <div
        className="rounder-xl py-8 mb-7 px-20 overflow-hidden rounded-xl relative z-0"
        style={{
          backgroundImage: `url(${campaign})`,
          backgroundPosition: "left center",
        }}
      >
        <img src={campaign} alt="campaign" className="absolute right-0 top-0" />
        <div className="relative flex justify-between items-center">
          <div className="relative">
            <h1 className="text-xl font-medium mb-4">
              Start your own fundraiser for FREE.
            </h1>
            <ul className="list-disc list-inside text-[13px] font-semibold">
              <li>0 Fees</li>
              <li>Transact with crypto</li>
              <li>Communicate impact with your Donors</li>
              <li>Automated Impact Reporting</li>
            </ul>
          </div>
          <div>
            <Button variant="outlined" className="py-3 px-8" color="primary">
              <span className="capitalize font-semibold">Create Campaign</span>
            </Button>
          </div>
          <div className="max-w-[350px] w-full"></div>
        </div>
      </div>
      <h1 className="text-xs text-[#4C4C66] font-medium">SELECT CATEGORY</h1>
      <Tabs
        variant="scrollable"
        TabIndicatorProps={{ children: <></>, className: "hidden" }}
        className="mb-5"
        value={active}
        onChange={(e, v) => setActive(v)}
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            color: "primary.main",
            "&.Mui-disabled": { display: "none" },
          },
        }}
      >
        {tabs.map((tab, i) => (
          <Tab
            disableRipple
            style={{
              padding: 0,
              paddingRight: i === tabs.length ? 0 : "1rem",
            }}
            label={
              <ListItemButton
                sx={{
                  backgroundColor: active === i && "#53B9EA",
                  "&:hover": {
                    backgroundColor: active === i && "#53B9EA",
                  },
                  "& *": {
                    color: active === i && "#fff",
                  },
                }}
                className="rounded-xl border max-w-[200px] border-[#E2E2E8] border-solid items-center justify-between last:mr-0 mr-4"
              >
                <ListItem disablePadding className="flex pr-4 items-center">
                  <ListItemIcon>
                    <SvgIcon
                      className="mr-3"
                      sx={{
                        "& path": {
                          fill: active === i && "#fff",
                        },
                      }}
                      inheritViewBox
                      component={tab.icon}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <div className="text-right text-lg">{tab.name}</div>
                    }
                    secondary={
                      <div className="flex pl-2 items-center">
                        <Graph />
                        <span className="inline-flex items-start">
                          <SvgIcon
                            component={Increase}
                            sx={{
                              "& path": {
                                fill: active === tab ? "#fff" : "#999",
                              },
                            }}
                            className="w-1.5 mx-2 mt-1 inline h-auto"
                            inheritViewBox
                          />
                          <span
                            className={
                              active === i ? "text-white" : "text-[#2BB596]"
                            }
                          >
                            12.35%
                          </span>
                        </span>
                      </div>
                    }
                  />
                </ListItem>
              </ListItemButton>
            }
          />
        ))}
        <ListItem
          onClick={handleClick}
          className="rounded-xl cursor-pointer w-full justify-center border max-w-[200px] border-[#E2E2E8] border-dashed items-center last:mr-0 mr-4"
        >
          <span className="text-[#4C4C66] opacity-20">15 Others</span>
        </ListItem>
        <Menu
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {[
            "Education",
            "Emergencies",
            "Children",
            "Animals",
            "Sports",
            "Community",
            "Elderly",
            "Arts & Media",
            "Technology",
            "Environment",
            "Social Entrepreneurship",
            "Human Rights",
            "Rural Development",
            "Women",
          ].map((label) => (
            <MenuItem onClick={handleClose} key={label} value={label}>
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Tabs>

      <div className="mt-10">
        <h1 className="text-xs text-[#4C4C66] font-medium uppercase">
          Featured Cause ({active.name})
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-5 mt-10 items-center justify-center">
        {cards.map((card) => (
          <NGOCard {...card} />
        ))}
      </div>
    </main>
  );
};

export default Donate;
