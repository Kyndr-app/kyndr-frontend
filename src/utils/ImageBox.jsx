import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Delete, UploadIcon } from "../assets/icons";

const ImageContainer = ({ title, setImage, image }) => (
  <>
    {title}
    <fieldset className="shadow-lg shadow-gray-400 rounded-lg border-primary py-10 px-8 border w-full">
      <div className="border-dashed grid grid-cols-8 rounded-md bg-gray-100 border-[#DCAC00] py-5 px-3 border-2">
        <div className="mb-2 col-span-2">
          {image && <img src={URL?.createObjectURL?.(image)} alt="uploaded" />}
        </div>
        <div className="col-span-5 px-3 flex justify-center flex-col">
          <Typography noWrap className="text-sm mb-3 font-bold text-[#9C7A00]">
            {image && image.name}
          </Typography>
          <div className="mt-2 text-xs text-gray-400 mb-2">
            {image && image.size}
          </div>
          <div className="text-xs text-gray-400">{image && image.type}</div>
        </div>
        <div className="flex items-center justify-center">
          <Delete className="cursor-pointer" onClick={() => setImage(null)} />
        </div>
      </div>
    </fieldset>
  </>
);

const RawLabel = ({ id, title }) => (
  <label htmlFor={id}>
    {title}
    <fieldset className="shadow-lg shadow-gray-400 cursor-pointer rounded-lg border-primary py-10 px-8 border w-full">
      <div className="border-dashed flex items-center justify-center flex-col rounded-md bg-gray-100 border-[#DCAC00] py-5 border-2">
        <div className="mb-2">
          <UploadIcon />
        </div>
        <div className="text-sm mb-3 font-bold text-[#9C7A00]">Drag & Drop</div>
        <div className="mt-2 text-xs text-gray-400 mb-2">
          or select files from device
        </div>
        <div className="text-xs text-gray-400">max. 50MB</div>
      </div>
    </fieldset>
  </label>
);

const ImageBox = ({
  id,
  Label = RawLabel,
  title,
  ImageDetails = ImageContainer,
  ...p
}) => {
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    setImage(e.target?.files?.[0]);
  };
  return (
    <div className="">
      <input
        {...p}
        type="file"
        id={id}
        className="hidden"
        onChange={handleChange}
      />
      {image ? (
        <ImageDetails image={image} title={title} setImage={setImage} />
      ) : (
        <Label id={id} title={title} />
      )}
    </div>
  );
};

export default ImageBox;
