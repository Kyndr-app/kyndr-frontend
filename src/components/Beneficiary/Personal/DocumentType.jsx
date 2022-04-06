import { Button, IconButton, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BackArrow } from "../../../assets/icons";
import ImageBox from "../../../utils/ImageBox";
import Input from "../../../utils/Input";

const DocumentType = () => {
  const navigate = useNavigate();
  return (
    <main className="pb-5 pt-10">
      <Paper
        elevation={4}
        className="container py-10 shadow-gray-400 flex justify-center rounded-lg"
      >
        <div className="max-w-[900px] grid grid-cols-2 w-full">
          <div className="flex">
            <div>
              <IconButton onClick={() => navigate(-1)}>
                <BackArrow />
              </IconButton>
            </div>
            <div className="text-3xl px-4 col-span-2 text-roboto font-bold">
              Docoment Type
            </div>
          </div>
          <div className="text-lg col-span-2 text-roboto mt-2 text-[#8692A6] my-4"></div>
          <div className="p-4">
            <Input label="AADHAR NUMBER" required defaultValue="" />
          </div>
          <div className="p-4">
            <Input label="RE-ENTER AADHAR NUMBER" required defaultValue="" />
          </div>
          <div className="p-4">
            <ImageBox
              id="aadhar-card-front"
              title={
                <div className="mb-3 text-[#696F79]">
                  AADHAR CARD CARD FRONT
                </div>
              }
            />
          </div>
          <div className="p-4">
            <ImageBox
              id="aadhar-card-back"
              title={
                <div className="mb-3 text-[#696F79]">AADHAR CARD CARD BACK</div>
              }
            />
          </div>
          <div className="p-4">
            <ImageBox
              id="selfie"
              title={<div className="mb-3 text-[#696F79]">SELFIE</div>}
            />
          </div>
          <div className="p-4 flex items-end">
            <Button
              variant="contained"
              className="py-4 mt-10 bg-primary"
              color="primary"
              fullWidth
              onClick={() => navigate("../../submitted")}
            >
              <span>SUBMIT FOR VERIFICATION</span>
            </Button>
          </div>
        </div>
      </Paper>
    </main>
  );
};

export default DocumentType;
