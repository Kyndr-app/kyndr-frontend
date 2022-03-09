import {
  Button,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleCheck } from "../../assets/icons";
import countries from "../../data/currencies";
import Input from "../../utils/Input";

const KYC = () => {
  const [type, setType] = useState("company");
  const navigate = useNavigate();
  return (
    <main className="pb-5 pt-10">
      <Paper
        elevation={4}
        className="container py-10 shadow-gray-400 rounded-lg"
      >
        <div className="max-w-[450px] mx-auto">
          <div className="text-3xl text-roboto font-bold">KYC</div>
          <div className="text-lg text-roboto mt-2 text-[#8692A6] mb-4">
            Complete KYC to access all features
          </div>
          <Input label="Country" select defaultValue="">
            <MenuItem value="" disabled>
              Select...
            </MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.country}>
                <span
                  className={`fi fi-${country.code} mr-2 shadow-sm shadow-gray-600`}
                />
                {country.country}
              </MenuItem>
            ))}
          </Input>
          <Input
            label="Type of KYC"
            select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="" disabled>
              Select...
            </MenuItem>
            <MenuItem value="company">Company</MenuItem>
            <MenuItem value="personal">Personal</MenuItem>
          </Input>
          {type === "company" && (
            <Input label="Sub Type Of KYC" select defaultValue="">
              <MenuItem value="" disabled>
                Select...
              </MenuItem>
              <MenuItem value="HUF">HUF</MenuItem>
            </Input>
          )}
          <TableContainer className="shadow-md shadow-gray-200 rounded-md">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    className="font-bold bg-[#E3E3E3] border-r-2 border-solid border-white text-roboto"
                  >
                    WITHOUT KYC
                  </TableCell>
                  <TableCell
                    align="center"
                    className="font-bold bg-[#E3E3E3] border-solid border-white text-roboto"
                  >
                    WITH KYC
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="text-xs border-r-2 border-[#E3E3E3] border-b-0 py-5 align-top">
                    <div className="flex font-medium">
                      <CircleCheck className="mr-3" />
                      Deposit & Accept Crypto
                    </div>
                  </TableCell>
                  <TableCell className="text-xs border-b-0 py-5">
                    <div className="flex font-medium mb-2">
                      <CircleCheck className="mr-3" />
                      Deposit & Accept Crypto
                    </div>
                    <div className="flex font-medium mb-2">
                      <CircleCheck className="mr-3" />
                      Transfer Funds
                    </div>
                    <div className="flex font-medium mb-2">
                      <CircleCheck className="mr-3" />
                      Without to Bank
                    </div>
                    <div className="flex font-medium">
                      <CircleCheck className="mr-3" />
                      Receive $KYNDR rewards
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-r-2 border-[#E3E3E3]">
                    <Button
                      variant="outlined"
                      className="py-4"
                      color="primary"
                      fullWidth
                    >
                      <span className="capitalize font-semibold">
                        Skip for now
                      </span>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className="py-4 bg-primary"
                      color="primary"
                      fullWidth
                      onClick={() => navigate(`./${type}/info`)}
                    >
                      <span className="capitalize font-semibold">
                        Complete KYC
                      </span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Paper>
    </main>
  );
};

export default KYC;
