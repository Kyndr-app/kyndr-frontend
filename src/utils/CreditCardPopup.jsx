import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import {
  Discover,
  Maestro,
  Mastercard,
  Paypal,
  Protect,
  Visa,
} from "../assets/icons";
import { CreditCardMask } from "./MaskInput";
import { MyFormControlLabel, StyledInput } from "./MuiComponents";

const CreditCardPopup = ({ open, setOpen, setCheckoutOpen }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Dialog
      PaperProps={{
        className: "max-w-[570px] w-full",
      }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle className="font-bold">
        Choose your payment option
      </DialogTitle>
      <DialogContent className="px-5">
        <div className="mb-5">
          <div>
            <RadioGroup>
              <MyFormControlLabel
                value="a"
                control={<Radio />}
                label={() => (
                  <div className="flex gap-5 justify-between items-center">
                    <div className="font-semibold text-roboto">PayPal</div>
                    <div className="text-sm">
                      You will be redirected to the PayPal website after
                      submitting your order
                    </div>
                    <div className="flex">
                      <Paypal className="h-auto" />
                    </div>
                  </div>
                )}
              />
              <MyFormControlLabel
                value="b"
                control={<Radio />}
                label={({ checked }) => (
                  <div>
                    <div className="flex py-2 justify-between items-center">
                      <span className="font-semibold text-roboto">
                        Pay with Credit Card
                      </span>
                      <div className="flex">
                        <Visa className="mr-2 h-auto" />
                        <Discover className="mr-2 h-auto" />
                        <Maestro className="mr-2 h-auto" />
                        <Mastercard className=" h-auto" />
                      </div>
                    </div>
                    {checked && (
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <StyledInput
                            className="text-sm"
                            variant="outlined"
                            required
                            fullWidth
                            InputProps={{
                              inputComponent: CreditCardMask,
                            }}
                            name="card"
                            label="Card Number"
                            value={value}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <StyledInput
                            className="text-sm"
                            variant="outlined"
                            required
                            fullWidth
                            id="exp"
                            placeholder="MM/YY"
                            label="Expiration Date"
                            name="expiry"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <StyledInput
                            className="text-sm"
                            variant="outlined"
                            required
                            fullWidth
                            id="cvc"
                            label="Card Security Code"
                            placeholder="CVC"
                            name="cvc"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} className="flex items-center">
                          <div className="text-primary">What is this?</div>
                        </Grid>
                      </Grid>
                    )}
                  </div>
                )}
              />
            </RadioGroup>
          </div>
        </div>
        <div className="flex justify-between">
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => setOpen(false)}
            className="py-2 max-w-[150px]"
          >
            <span className="text-xs capitalize text-[#C0C0C0]">Canel</span>
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              setOpen(false);
              setCheckoutOpen?.(true);
            }}
            className="bg-gradient-to-r max-w-[150px] py-2 from-primary-light to-primary"
          >
            <span className="text-xs capitalize">NEXT</span>
          </Button>
        </div>
        <div className="mt-5 flex items-center">
          <Protect className="h-auto mr-2" />
          <span className="text-xs text-[#828282]">
            We protect your payment information using encryption to provide
            bank-level security.
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreditCardPopup;
