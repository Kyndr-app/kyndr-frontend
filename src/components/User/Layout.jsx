import React from "react";
import { CircleCheck, EndingLayout, KyndrLogoWhite } from "../../assets/icons";
import img from "../../assets/images/login_bg.png";
const Layout = ({ children, ...props }) => {
  return (
    <main className="grid min-h-screen grid-cols-7">
      <div
        style={{
          background: `linear-gradient(to right bottom,var(--primary-light),var(--primary-light)),url(${img}) no-repeat`,
          backgroundSize: "cover",
        }}
        className="flex items-center flex-col col-span-3 p-10 justify-between"
      >
        <div className="w-full pl-14">
          <KyndrLogoWhite />
        </div>
        <div className="px-14 text-white">
          <div
            className="text-8xl -mb-10 text-roboto"
            style={{ fontFamily: "'Circular-Loom'" }}
          >
            “
          </div>
          <div
            className="text-xl text-roboto font-light"
            style={{ lineHeight: 2, letterSpacing: 1 }}
          >
            It does not matter how much we donate; it matters whether the
            donation is meaningful. How to define meaningful? Let society and
            history judge.
          </div>
          <div className="mt-3 text-lg flex items-center">
            Ronnie Chan <CircleCheck className="ml-2" />
          </div>
          <div className="flex justify-end">
            <EndingLayout />
          </div>
        </div>
        <div />
      </div>
      <div {...props} className={`${props.className} col-span-4 flex flex-col`}>
        {children}
      </div>
    </main>
  );
};

export default Layout;
