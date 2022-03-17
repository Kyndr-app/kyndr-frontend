import { InputAdornment, InputLabel } from "@mui/material";
import React, { useMemo, useState } from "react";
import { StyledInput } from "./MuiComponents";

const Input = ({ label, labelProps, ...p }) => {
  const [type, setType] = useState(p.type);
  const isPassword = useMemo(() => p.type === "password", [p.type]);
  const show = useMemo(() => {
    if (type === "password") return true;
    return false;
  }, [type]);
  console.log(p.className);
  return (
    <div className="mb-5 max-w-[450px] w-full">
      {label && (
        <InputLabel
          {...labelProps}
          className={`${labelProps?.className} text-base text-roboto mb-2 text-[#696F79]`}
          htmlFor={label}
        >
          {label}
          {p.required && "*"}
        </InputLabel>
      )}
      <StyledInput
        fullWidth
        {...p}
        type={type}
        className={`${p.className} shadow-sm shadow-gray-400 rounded-xl`}
        id={label}
        SelectProps={{
          className: "py-1",
          displayEmpty: true,
        }}
        InputProps={{
          ...p?.InputProps,
          className: `${p?.InputProps?.className} px-5 ${
            p?.multiline ? "pt-3" : "py-2"
          }`,
          endAdornment: isPassword ? (
            <InputAdornment
              position="end"
              className="cursor-pointer select-none"
              onClick={() => setType(show ? "text" : "password")}
            >
              <div className="text-xs">{show ? "Show" : "Hide"}</div>
            </InputAdornment>
          ) : (
            p?.InputProps?.endAdornment
          ),
        }}
      />
    </div>
  );
};

export default Input;
