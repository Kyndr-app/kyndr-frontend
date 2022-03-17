import {
  Button,
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { getRandomImage } from "../../utils/extras";
import Input from "../../utils/Input";
import { Edit } from "../../assets/icons";
import ImageBox from "../../utils/ImageBox";

const randomData = () => ({
  name: `Qasim Rai`,
  desc: "Designer",
  image: getRandomImage({
    ratio: 1.2222,
  }),
});

const cards = Array.from({ length: 3 }, randomData);

const inputs = ["Name", "Wallet Address", "Designation"];
const selects = ["Assign to Cause"];

const Team = () => {
  return (
    <main className="p-10">
      <div className="mb-7">
        <p
          className="text-gray-500 mb-2 text-roboto text-xs font-medium uppercase"
          style={{
            letterSpacing: "0.01em",
          }}
        >
          Team
        </p>
        <Paper className="p-5">
          <div className="flex items-center mb-5">
            <label htmlFor="i">Select Cause: &nbsp;</label>
            <Input
              className="max-w-[500px] w-full"
              fullWidth
              name="cause"
              select
              defaultValue=""
              SelectProps={{
                fullWidth: true,
              }}
            >
              <MenuItem value="">Select</MenuItem>
            </Input>
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-[#4C4C66]">
              Help the cause by teach for india
            </h1>
            <div className="mt-5">
              <div className="grid grid-cols-7 gap-5">
                {cards.map((card) => (
                  <div className="">
                    <Card className="shadow-lg card">
                      <div className="relative">
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          image={card.image}
                        />
                        <div className="absolute button-container transition-all bg-transparent flex justify-end p-3 items-start bg-opacity-50 inset-0">
                          <Button
                            variant="text"
                            color="primary"
                            endIcon={<Edit />}
                            className="text-white"
                          >
                            <span className="text-sm capitalize">Active</span>
                          </Button>
                        </div>
                      </div>
                      <CardContent
                        style={{
                          paddingBottom: 10,
                        }}
                      >
                        <div className="flex justify-between">
                          <div>
                            <Typography
                              noWrap
                              className="text-sm pr-2 text-roboto font-bold"
                            >
                              {card.name}
                            </Typography>
                            <h3 className="text-[11px] font-medium mb-3">
                              {card.desc}
                            </h3>
                          </div>
                          <div>
                            <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                              className="bg-gradient-to-r px-2 py-3 shadow-none from-primary-light to-primary"
                            >
                              <span className="text-xs capitalize">
                                Make&nbsp;Payment
                              </span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Paper>
      </div>
      <div className="mt-7">
        <p
          className="text-gray-500 mb-2 text-roboto text-xs font-medium uppercase"
          style={{
            letterSpacing: "0.01em",
          }}
        >
          ADD Benificiaries
        </p>
        <Paper className="p-8">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-7">
              <div className="grid grid-cols-2 gap-x-3">
                {inputs.map((input) => (
                  <div key={input}>
                    <Input label={input} name={input} />
                  </div>
                ))}
                {selects.map((input) => (
                  <div key={input}>
                    <Input label={input} name="phone" select defaultValue="">
                      <MenuItem value="">Select</MenuItem>
                    </Input>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-5">
              <div className="grid grid-cols-5">
                <div className="col-span-2">
                  <ImageBox
                    id="image"
                    title={
                      <div className="mb-3 text-[#696F79]">Image / Avatar</div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <Button
              variant="contained"
              className="py-4 px-7 bg-primary"
              color="primary"
            >
              <span className="capitalize font-semibold">Add Team Member</span>
            </Button>
          </div>
        </Paper>
      </div>
    </main>
  );
};

export default Team;
