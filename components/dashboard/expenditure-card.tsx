"use client";

export default function ExpenditureCard() {
  return (
    <div className="rounded-lg bg-white text-red-700 shadow p-4">
      <h3 className="text-lg font-medium">Expenditure</h3>
      <p className="text-2xl font-semibold">$0.00</p>
      <p className="text-sm text-red-500 flex items-center">
        <span className="mr-1">⬆</span> +22%
      </p>
    </div>
  );
}
