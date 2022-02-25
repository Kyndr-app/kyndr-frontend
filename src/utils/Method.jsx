import React from "react";

const Method = ({ method = "" }) => {
  let bg = "bg-green-100 text-green-600";
  if (method.toLowerCase() === "Withdraw All".toLowerCase()) {
    bg = "bg-orange-100 text-orange-600";
  } else if (method.toLowerCase() === "Completed".toLowerCase()) {
    bg = "bg-green-100 text-green-600";
  } else if (method.toLowerCase() === "Deposit".toLowerCase()) {
    bg = "bg-blue-100 text-blue-600";
  }
  return (
    <div
      style={{
        letterSpacing: "0.4px",
      }}
      className={`px-1 ${bg} text-xs w-[100px] text-center text-roboto font-medium rounded-md py-1`}
    >
      {method}
    </div>
  );
};

export default Method;
