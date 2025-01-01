"use client";
import React from "react";
import {
    Card
  } from "@/components/ui/card";

export default function Accounts() {
    return(
        <div className="grid grid-cols-1 gap-4 p-4 grid-cols-3">
          {/* Card 1 */}
          <Card className="w-80 h-52 bg-emerald-500 text-white p-6 rounded-lg shadow-lg flex flex-col">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-sm font-bold">313 - ***** - 061</p>
                <p className="text-xs opacity-75">Account Number</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">Active</p>
                <p className="text-xs opacity-75">Status</p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-bold">$6600.00</p>
                  <p className="text-xs opacity-75">Balance</p>
                </div>
                <div className="text-right">
                  <p className="text-xs opacity-75">Savings Account</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="w-80 h-52 bg-indigo-500 text-white p-6 rounded-lg shadow-lg flex flex-col">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-sm font-bold">4008 **** **** 9464</p>
                <p className="text-xs opacity-75">Card number</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">Active</p>
                <p className="text-xs opacity-75">Status</p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-bold">$6600.00</p>
                  <p className="text-xs opacity-75">Balance</p>
                </div>
                <div className="text-right">
                  <p className="text-xs opacity-75">OCBC Credit Card</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="w-80 h-52 bg-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-sm font-bold">Cash</p>
                <p className="text-xs opacity-75"></p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">Active</p>
                <p className="text-xs opacity-75">Status</p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-bold">$6600.00</p>
                  <p className="text-xs opacity-75">Balance</p>
                </div>
                <div className="text-right">
                  <p className="text-xs opacity-75">Cash Account</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
    )
}