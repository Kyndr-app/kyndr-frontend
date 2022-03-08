import { Button, ListItemText } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BackArrow } from "../../assets/icons";

const Toolbar = ({ primary, secondary, path }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <Button
        startIcon={<BackArrow />}
        variant="text"
        className="text-gray-500"
        onClick={() => navigate(path || -1)}
      >
        <span className="text-sm capitalize">Back</span>
      </Button>
      <div className="text-right">
        <ListItemText
          primary={
            <h3 className="text-sm text-[#BDBDBD] font-medium">{primary}</h3>
          }
          secondary={
            <h5 className="text-[#8692A6] text-base font-bold">{secondary}</h5>
          }
        />
      </div>
    </div>
  );
};

export default Toolbar;
