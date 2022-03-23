import { Button, Checkbox, Divider, FormControlLabel } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Google } from "../../assets/icons";
import Input from "../../utils/Input";
import Layout from "./Layout";
import Toolbar from "./Toolbar";

const Login = () => {
  return (
    <Layout className="py-10 px-28 justify-between">
      <Toolbar primary="Login account" secondary={"Personal Info."} />
      <div className="max-w-[450px] p-4 mt-4 mx-auto w-full overflow-hidden">
        <div className="text-3xl text-roboto font-bold">
          Login to Your Account
        </div>
        <div className="text-lg text-roboto mt-2 text-[#8692A6] mb-4">
          For the purpose of industry regulation, your details are required.
        </div>
        <Input required label="Email / Username" type="email" />
        <Input required label="Password" type="password" />
        <div className="flex justify-between mb-4 mt-3 items-center">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={
              <span className="text-[#696F79] font-normal">Remember me</span>
            }
          />
          <Link to="../forgot-password" className="text-primary">
            Forgot Password?
          </Link>
        </div>
        <Button
          fullWidth
          variant="contained"
          className="bg-primary py-3 shadow-none"
          color="primary"
          component={Link}
          to={"../finalize"}
        >
          <span className="capitalize text-roboto">Login</span>
        </Button>
        <div className="my-4 flex items-center justify-center flex-shrink">
          <Divider className="border-[#F5F5F5] w-full" />
          <div className="text-xs text-[#BABABA] text-roboto px-4">Or</div>
          <Divider className="border-[#F5F5F5] w-full" />
        </div>
        <div className="mt-4">
          <Button
            fullWidth
            variant="contained"
            className="py-3 shadow-md shadow-gray-500 bg-white hover:bg-gray-100"
            startIcon={<Google />}
            color="inherit"
          >
            <span className="text-xs capitalize text-roboto text-black">
              Login with Google
            </span>
          </Button>
        </div>
        <div className="mt-10 text-lg text-center">
          <span className="text-[#8692A6] text-roboto">
            Don't have an account?
          </span>{" "}
          <Link to="/user/join-us" className="text-primary">
            Sign Up
          </Link>
        </div>
      </div>
      <div />
    </Layout>
  );
};

export default Login;
