"use client";

export default function IncomeCard() {
  return (
    <div className="rounded-lg bg-white text-green-700 shadow p-4">
      <h3 className="text-lg font-medium">Income</h3>
      <p className="text-2xl font-semibold">$0.00</p>
      <p className="text-sm text-green-500 flex items-center">
        <span className="mr-1">⬆</span> +15%
      </p>
    </div>
  );
}
