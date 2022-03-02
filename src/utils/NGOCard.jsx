import { Button, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import img from "../assets/images/donate-img-1.svg";
import { Link } from "react-router-dom";
const NGOCard = ({ title, desc, des, percentage }) => {
  // Percentage Between 0-40
  // text-danger
  // Percentage Between 40-80
  // text-warning
  // Percentage Between 80-100
  // text-success
  const percentageColor = () => {
    if (percentage < 33) {
      return "text-danger";
    } else if (percentage < 66) {
      return "text-warning";
    } else {
      return "text-success";
    }
  };
  // Percentage Between 0-40
  // from-danger to-danger-light
  // Percentage Between 40-80
  // from-warning to-warning-light
  // Percentage Between 80-100
  // from-success to-success-light
  const renderPercentageGradient = () => {
    if (percentage < 33) {
      return "from-danger to-danger-light";
    } else if (percentage < 66) {
      return "from-warning to-warning-light";
    } else {
      return "from-success to-success-light";
    }
  };
  return (
    <Card className="shadow-lg card">
      <div className="relative">
        <CardMedia
          component="img"
          alt="green iguana"
          height="175"
          image={img}
        />
        <div className="absolute button-container opacity-0 transition-all bg-gray-800 flex justify-center items-center bg-opacity-50 inset-0">
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="details"
            className="bg-gradient-to-r py-3 px-10 from-primary-light to-primary"
          >
            <span className="text-xs capitalize">View Cause</span>
          </Button>
        </div>
      </div>
      <CardContent>
        <div className="flex items-center">
          <div>
            <h1 className="text-sm font-bold">{title}</h1>
            <h3 className="text-[11px] font-medium mb-3">{desc}</h3>
            <div className="text-[10px] mr-3">{des}</div>
          </div>
          <div>
            <div className="relative">
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b flex items-center justify-center text-white text-xs font-bold text-roboto ${renderPercentageGradient()} h-10 w-10`}
              >
                {percentage}%
              </div>
              <svg
                width="65"
                height="65"
                className="-rotate-90"
                viewBox="0 0 120 120"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="10"
                />
                <circle
                  className={`percent ${percentageColor()}`}
                  style={{ "--val": percentage }}
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="currentColor"
                  strokeWidth="10"
                  pathLength="100"
                />
              </svg>
            </div>
            <div className="text-xs mt-3 opacity-50 text-center">
              $ 12,10,00
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NGOCard;
