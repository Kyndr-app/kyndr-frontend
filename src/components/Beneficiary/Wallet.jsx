import React from "react";

const Wallet = () => {
  return (
    <main className="px-10 pb-5 pt-10">
      <h1 className="text-2xl text-gray-500 font-bold">Wallet</h1>
      <p
        className="text-gray-500 mb-2 text-xs font-semibold uppercase"
        style={{
          letterSpacing: "0.01em",
        }}
      >
        Token Balance & withdrawals
      </p>
    </main>
  );
};

export default Wallet;
