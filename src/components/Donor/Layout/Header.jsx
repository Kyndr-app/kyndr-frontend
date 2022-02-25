import { Avatar, Button, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DownArrow, Polygon } from "../../../assets/icons";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import NavLink from "../../../utils/NavLink";
import user from "../../../assets/images/user.png";
/**
 * 1. Donate
 * 2. DAO
 * 3. Wallet
 * 4. Stake (Coming Soon)
 * 5. NFT Market (Coming Soon)
 */

const userMenu = [
  {
    title: "Account",
    icon: <span className="text-xl text-[#F16178]">+</span>,
  },
  {
    title: "Logout",
    icon: <span className="text-xl text-[#F16178]">+</span>,
  },
];

const Header = () => {
  const [userDropdown, setUserDropdown] = useState(false);
  const handleUserDropdownOpen = (e) => setUserDropdown(e.currentTarget);
  return (
    <header className="px-10 pt-5 flex items-center">
      <Link to="/" className="pr-10">
        <Logo className="w-28 h-auto" />
      </Link>
      <div className="flex items-center justify-between w-full">
        <ul className="list-none flex">
          <li>
            <NavLink
              to="donate"
              className="px-5 py-2 text-gray-300 font-semibold hover:text-gray-700 transition-all"
              activeClassName="text-gray-700"
            >
              Donate
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dao"
              className="px-5 py-2 text-gray-300 font-semibold hover:text-gray-700 transition-all"
              activeClassName="text-gray-700"
            >
              DAO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="wallet"
              className="px-5 py-2 text-gray-300 font-semibold hover:text-gray-700 transition-all"
              activeClassName="text-gray-700"
            >
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink
              to="stake"
              className="px-5 py-2 text-gray-300 font-semibold hover:text-gray-700 transition-all"
              activeClassName="text-gray-700"
            >
              Stake (Coming Soon)
            </NavLink>
          </li>
          <li>
            <NavLink
              to="nft-market"
              className="px-5 py-2 text-gray-300 font-semibold hover:text-gray-700 transition-all"
              activeClassName="text-gray-700"
            >
              NFT Market (Coming Soon)
            </NavLink>
          </li>
        </ul>
        <div className="flex">
          <Button
            variant="outlined"
            className="rounded-none h-10 mr-3 border-[#FFC0CA] hover:bg-white hover:border-[#F16178] focus:border-[#F16178]"
            endIcon={<Polygon className="ml-2" />}
            disableRipple
          >
            <span className="text-xs font-medium text-black">Polygon</span>
          </Button>
          <Button
            variant="outlined"
            className="rounded-none h-10 mr-3 border-[#FFC0CA] hover:bg-white hover:border-[#F16178] focus:border-[#F16178]"
            disableRipple
          >
            <span className="text-xs font-medium text-black">KYNDR $0.45</span>
          </Button>
          <div
            onClick={handleUserDropdownOpen}
            className="flex items-center cursor-pointer"
          >
            <Avatar variant="rounded" className="mr-3 w-9 h-9" src={user} />
            <span className="font-medium text-xs">Ox...C88b</span>
            <DownArrow className="ml-2" />
          </div>
          <Menu
            open={Boolean(userDropdown)}
            anchorEl={userDropdown}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            onClose={() => setUserDropdown(false)}
            autoFocus={false}
          >
            {userMenu.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => setUserDropdown(false)}
                component={Link}
                className="px-7 py-0"
                to={item.path ?? item.title.toLowerCase().split(" ").join("-")}
              >
                <ListItemIcon
                  style={{
                    minWidth: "20px",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <div className="text-xs font-medium">{item.title}</div>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
