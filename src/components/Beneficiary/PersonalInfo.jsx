import { Button, Paper } from "@mui/material";
import React from "react";
import Input from "../../utils/Input";

const PersonalInfo = () => {
  return (
    <main className="pb-5 pt-10">
      <Paper
        elevation={4}
        className="container py-10 shadow-gray-400 flex justify-center rounded-lg"
      >
        <div className="max-w-[450px] w-full p-4">
          <div className="text-3xl text-roboto font-bold">Corporate Info</div>
          <div className="text-lg text-roboto mt-2 text-[#8692A6] my-4"></div>
          <Input label="FIRST NAME" required />
          <Input label="LAST NAME" required />
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
        </div>
        <div className="max-w-[450px] w-full p-4">
          <div className="text-3xl text-roboto font-bold">&nbsp;</div>
          <div className="text-lg text-roboto mt-2 text-[#8692A6] mb-4"></div>
          {/**MIDDLE NAME */}
          <Input label="MIDDLE NAME" required defaultValue="" />
          <Input
            label="DATE OF BIRTH (DD-MM-YYYY)"
            required
            placeholder="DD-MM-YYYY"
            defaultValue=""
          />
          <Input label="STATE" required placeholder="State" defaultValue="" />
          <Input label="CITY" required placeholder="City" defaultValue="" />
          <Button
            variant="contained"
            className="py-4 mt-10 bg-primary"
            color="primary"
            fullWidth
          >
            <span className="capitalize">Next</span>
          </Button>
        </div>
      </Paper>
    </main>
  );
};

export default PersonalInfo;
