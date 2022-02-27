import {
  Button,
  Checkbox,
  Collapse,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  Grid,
  InputBase,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import {
  Discover,
  DownArrow,
  Maestro,
  Mastercard,
  Norton,
  Paypal,
  Protect,
  Visa,
} from "../assets/icons";
import TextMaskCustom, { CreditCardMask, ExpiryMask } from "./MaskInput";
import { MyFormControlLabel, StyledInput } from "./MuiComponents";

const CreditCardInputs = () => {
  const [values, setValues] = useState({
    card: "",
    expiry: "",
    cvc: "",
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Grid container spacing={2} className="mt-2">
      <Grid item xs={12} sm={6}>
        <StyledInput
          className="text-sm"
          variant="outlined"
          fullWidth
          id="firstName"
          InputProps={{ inputComponent: CreditCardMask }}
          name="card"
          label="Card Number"
          value={values.card}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledInput
          className="text-sm"
          variant="outlined"
          required
          fullWidth
          InputProps={{ inputComponent: ExpiryMask }}
          id="exp"
          placeholder="MM/YY"
          label="Expiration Date"
          name="expiry"
          value={values.expiry}
          onChange={handleChange}
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
          InputProps={{ maxLength: 3 }}
          value={values.cvc}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} className="flex items-center">
        <div className="text-primary">What is this?</div>
      </Grid>
    </Grid>
  );
};

const CreditCardPopup = ({ open, setOpen, setCheckoutOpen }) => {
  return (
    <Dialog
      PaperProps={{ className: "max-w-[570px] w-full pt-3" }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle className="font-bold mb-3">
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
                    {checked && <CreditCardInputs />}
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

const ConfirmPopup = ({ open, setOpen }) => {
  const [inside, setIn] = useState(true);
  return (
    <Dialog
      PaperProps={{ className: "max-w-[370px] w-full" }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle
        onClick={() => setIn(!inside)}
        className="font-bold flex cursor-pointer justify-between items-center"
      >
        <span className="text-base">Billing Summary</span>
        <DownArrow
          style={{
            transform: inside ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </DialogTitle>
      <DialogContent className="px-5">
        <Divider className="mb-3" />
        <Collapse in={inside}>
          <div className="flex justify-between font-bold">
            <div>Grand Total</div>
            <div>$1,000.00</div>
          </div>
        </Collapse>
        <div className="mt-3">
          <FormControlLabel
            label={
              <span className="text-sm">
                Please check to acknowledge our{" "}
                <span className="text-primary">Privacy & Terms Policy</span>
              </span>
            }
            control={<Checkbox disableRipple size="small" color="primary" />}
          />
        </div>
        <div className="mt-7">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setOpen(false)}
            className="bg-gradient-to-tr py-3 from-primary-light to-primary"
          >
            <span className="text-xs capitalize">Pay $ 3,439.99</span>
          </Button>
        </div>
        <div className="mt-3">
          <Norton className="mx-auto h-auto" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

/**
 * 1.firstName 6 columns
 * 2.lastName 6 columns
 * 3.email 12 columns
 * 4.state label: State/Province 6 columns
 * 5.city 6 columns
 * 6.zip label: Zip/Postal Code 6 columns
 * 7.phone 6 columns
 */

const PaymentPopup = ({ open, setOpen, setCheckoutOpen }) => {
  const [value, setValue] = useState(null);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    city: "",
    zip: "",
    phone: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const theme = useTheme();
  return (
    <Dialog
      PaperProps={{ className: "max-w-[570px] w-full" }}
      open={open}
      onClose={() => setOpen?.(false)}
    >
      <DialogTitle className="font-bold mb-3">
        Choose a donation amount
      </DialogTitle>
      <DialogContent className="px-5">
        <div className="mb-5 flex justify-items-stretch px-10">
          <Button
            style={{
              backgroundColor: value === 1000 && theme.palette.primary.main,
            }}
            className="last:mr-0 mr-3 py-3 "
            fullWidth
            onClick={() => setValue(1000)}
            variant={value === 1000 ? "contained" : "outlined"}
          >
            <span className="text-sm">$1,000</span>
          </Button>
          <Button
            style={{
              backgroundColor: value === 1500 && theme.palette.primary.main,
            }}
            fullWidth
            className="last:mr-0 mr-3 py-3 "
            onClick={() => setValue(1500)}
            variant={value === 1500 ? "contained" : "outlined"}
          >
            <span className="text-sm">$1,500</span>
          </Button>
          <Button
            style={{
              backgroundColor: value === 4500 && theme.palette.primary.main,
            }}
            fullWidth
            className="last:mr-0 mr-3 py-3 "
            onClick={() => setValue(4500)}
            variant={value === 4500 ? "contained" : "outlined"}
          >
            <span className="text-sm">$4,500</span>
          </Button>
        </div>
        <div>
          <StyledInput
            InputProps={{
              startAdornment: (
                <Select
                  className="px-3 w-[95px] text-white"
                  defaultValue={"USD"}
                  input={<InputBase />}
                  sx={{
                    "& svg": {
                      color: "white",
                    },
                  }}
                  inputProps={{ className: "text-sm" }}
                >
                  <MenuItem className="w-[80px]" value="USD">
                    USD
                  </MenuItem>
                  <MenuItem className="w-[80px]" value="EUR">
                    EUR
                  </MenuItem>
                  <MenuItem className="w-[80px]" value="GBP">
                    GBP
                  </MenuItem>
                  <MenuItem className="w-[80px]" value="CAD">
                    CAD
                  </MenuItem>
                  <MenuItem className="w-[80px]" value="INR">
                    INR
                  </MenuItem>
                </Select>
              ),
            }}
            fullWidth
            style={{
              backgroundImage:
                "linear-gradient(to right,#FFBFC9, #F16178 100px, transparent 100px)",
              borderRadius: 10,
            }}
            placeholder="Enter Amount"
          />
        </div>
        <Grid container rowSpacing={2} columnSpacing={3} className="mt-3">
          <Grid item xs={12} sm={6}>
            <StyledInput
              className="text-sm"
              variant="outlined"
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              value={values.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledInput
              className="text-sm"
              variant="outlined"
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              value={values.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledInput
              className="text-sm"
              variant="outlined"
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledInput
              className="text-sm"
              variant="outlined"
              fullWidth
              id="state"
              name="state"
              label="State/Province"
              value={values.state}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledInput
              className="text-sm"
              variant="outlined"
              fullWidth
              id="city"
              name="city"
              label="City"
              value={values.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledInput
              className="text-sm"
              variant="outlined"
              fullWidth
              id="zip"
              name="zip"
              label="Zip/Postal Code"
              value={values.zip}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledInput
              className="text-sm"
              variant="outlined"
              fullWidth
              id="phone"
              InputProps={{ inputComponent: TextMaskCustom }}
              name="phone"
              label="Phone"
              value={values.phone}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <div className="mt-3">
          <FormControlLabel
            label={<span className="text-sm">I’m an indian national</span>}
            control={<Checkbox disableRipple size="small" color="primary" />}
          />
        </div>
        <div className="mt-3 text-center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              setOpen(false);
              setCheckoutOpen(true);
            }}
            className="bg-gradient-to-tr py-3 max-w-[300px] mx-auto from-primary-light to-primary"
          >
            <span className="text-xs capitalize">
              Proceed To Pay $ 3,439.99
            </span>
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

export { CreditCardPopup, ConfirmPopup, PaymentPopup };
