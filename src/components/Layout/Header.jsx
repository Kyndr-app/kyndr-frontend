import { Avatar, Button, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DownArrow, Polygon } from "../../assets/icons";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import NavLink from "../../utils/NavLink";
import user from "../../assets/images/user.png";

const Header = ({ links, userMenu }) => {
  const [userDropdown, setUserDropdown] = useState(false);
  const handleUserDropdownOpen = (e) => setUserDropdown(e.currentTarget);
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeader(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header
      className={`px-10 py-5 bg-white z-10 transition-all duration-200 flex items-center sticky top-0 ${
        header && "shadow-md"
      }`}
    >
      <Link to="/" className="pr-10">
        <Logo className="w-28 h-auto" />
      </Link>
      <div className="flex items-center justify-between w-full">
        <ul className="list-none flex">
          {links.map((link) => (
            <li>
              <NavLink
                to={link.path}
                style={{ pointerEvents: link.disabled ? "none" : "auto" }}
                className="px-5 py-2 text-gray-300 after:absolute hover:after:w-full after:transition-all after:bottom-0 after:left-[50%] after:translate-x-[-50%] relative after:max-w-[60px] after:w-0 after:h-[2px] after:bg-primary font-semibold hover:text-gray-700 transition-all"
                activeClassName="text-gray-700"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex">
          <Button
            variant="outlined"
            className="rounded-[3px] h-10 mr-3 border-[#FFC0CA] hover:bg-white hover:border-[#F16178] focus:border-[#F16178]"
            endIcon={<Polygon className="ml-2" />}
            disableRipple
          >
            <span className="text-xs font-medium text-black">Polygon</span>
          </Button>
          <Button
            variant="outlined"
            className="rounded-[3px] h-10 mr-3 border-[#FFC0CA] hover:bg-white hover:border-[#F16178] focus:border-[#F16178]"
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
                to={
                  item.title === "Logout"
                    ? "/user/join-us"
                    : item.title.toLowerCase().split(" ").join("-")
                }
              >
                <ListItemIcon
                  style={{
                    minWidth: "20px",
                  }}
                >
                  <span className="text-xl text-[#F16178]">+</span>
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
