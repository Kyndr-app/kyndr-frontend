import React from "react";
import { KyndrLogoWhite } from "../../assets/icons";
import img from "../../assets/images/login_bg.png";
const Layout = ({ children, type, ...props }) => {
  return (
    <main className="grid min-h-screen grid-cols-7">
      <div
        style={{
          background: `linear-gradient(to right bottom,var(--primary-light),var(--primary-light)),url(${img}) no-repeat`,
          backgroundSize: "cover",
        }}
        className="flex items-center flex-col gap-10 col-span-3 py-10 pr-10 justify-center"
      >
        <div className="w-full pl-14">
          <KyndrLogoWhite />
        </div>
        <div className="text-white w-full pl-14">
          <h1 className="text-5xl font-thin uppercase">
            {type === "beneficiary" ? "beneficiaries" : type + "s"}
          </h1>
        </div>
      </div>
      <div {...props} className={`${props.className} col-span-4 flex flex-col`}>
        {children}
      </div>
    </main>
  );
};

export default Layout;
