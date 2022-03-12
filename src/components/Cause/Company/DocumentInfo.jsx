import { Button, Paper } from "@mui/material";
import React from "react";
import { UploadIcon } from "../../../assets/icons";
import ImageBox from "../../../utils/ImageBox";
import Input from "../../../utils/Input";

const DocumentInfo = () => {
  return (
    <main className="pb-5 pt-10">
      <Paper
        elevation={4}
        className="container py-10 shadow-gray-400 flex justify-center rounded-lg"
      >
        <div className="max-w-[900px] grid grid-cols-2 w-full">
          <div className="text-3xl px-4 col-span-2 text-roboto font-bold">
            Docoment Info
          </div>
          <div className="text-lg col-span-2 text-roboto mt-2 text-[#8692A6] my-4"></div>
          <div className="p-4">
            <Input label="PAN NUMBER" required />
          </div>
          <div className="p-4">
            <Input label="RE-ENTER PAN NUMBER" required defaultValue="" />
          </div>
          <div className="p-4">
            <ImageBox
              id="pan-card"
              title={<div className="mb-3 text-[#696F79]">UPLOAD PAN CARD</div>}
            />
          </div>
          <div className="p-4">
            <ImageBox
              id="pan-karta"
              title={
                <div className="mb-3 text-[#696F79]">UPLOAD PAN OR KARTA</div>
              }
            />
          </div>
          <div className="p-4">
            <ImageBox
              id="cancelled-check"
              title={
                <div className="mb-3 text-[#696F79]">
                  UPLOAD CANCELLED CHEQUE
                </div>
              }
            />
          </div>
          <div className="p-4">
            <ImageBox
              id="selfie"
              title={<div className="mb-3 text-[#696F79]">UPLOAD SELFIE</div>}
            />
          </div>
          <div />
          <div className="px-4">
            <Button
              variant="contained"
              className="py-4 mt-10 bg-primary"
              color="primary"
              fullWidth
            >
              <span className="capitalize">SUBMIT FOR VERIFICATION</span>
            </Button>
          </div>
        </div>
      </Paper>
    </main>
  );
};

export default DocumentInfo;
