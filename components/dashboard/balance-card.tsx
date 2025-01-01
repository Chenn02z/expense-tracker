"use client";

import React from "react";
import IncomeCard from "./income-card";
import ExpenditureCard from "./expenditure-card";

export default function BalanceCard() {
  return (
    <div className="rounded-lg shadow-lg p-6 bg-green-500 text-white">
      <h2 className="text-xl font-semibold text-center">Your Balance</h2>
      <p className="text-4xl font-bold text-center my-4">$15,500.00</p>
      <div className="grid grid-cols-2 gap-4">
        <IncomeCard />
        <ExpenditureCard />
      </div>
    </div>
  );
}
