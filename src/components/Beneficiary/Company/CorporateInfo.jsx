import { Button, IconButton, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BackArrow } from "../../../assets/icons";
import Input, { InputUPI } from "../../../utils/Input";

const CorporateInfo = () => {
  const navigate = useNavigate();
  return (
    <main className="pb-5 pt-10">
      <Paper
        elevation={4}
        className="container py-10 shadow-gray-400 flex justify-center rounded-lg"
      >
        <div className="max-w-[450px] w-full p-4">
          <div className="flex">
            <div>
              <IconButton onClick={() => navigate(-1)}>
                <BackArrow />
              </IconButton>
            </div>
            <div className="text-3xl px-4 col-span-2 text-roboto font-bold">
              Corporate Info
            </div>
          </div>
          <div className="text-lg text-roboto mt-2 text-[#8692A6] my-4"></div>
          <Input label="NAME OF ENTITY:" required />
          <Input
            label="ADDRESS"
            required
            placeholder="Add text here...."
            multiline
            fullWidth
            rows={7}
          />
          <Input
            label="PIN/ZIP CODE"
            required
            fullWidth
            placeholder="Add text here...."
          />
          <Button
            variant="contained"
            className="py-4 mt-10 bg-primary"
            color="primary"
            onClick={() => {
              navigate("../document-info");
            }}
            fullWidth
          >
            <span className="capitalize">Next</span>
          </Button>
        </div>
        <div className="max-w-[450px] w-full p-4">
          <div className="text-3xl text-roboto font-bold">&nbsp;</div>
          <div className="text-lg text-roboto mt-2 text-[#8692A6] mb-4"></div>
          <Input
            label="DATE OF INCORPORATION (DD-MM-YYYY)"
            required
            placeholder="DD-MM-YYYY"
            defaultValue=""
          />
          <Input label="STATE" required placeholder="State" defaultValue="" />
          <Input label="CITY" required placeholder="City" defaultValue="" />
          <InputUPI input="UPI ID" Input={Input} placeholder="UPI ID" />
        </div>
      </Paper>
    </main>
  );
};

export default CorporateInfo;
