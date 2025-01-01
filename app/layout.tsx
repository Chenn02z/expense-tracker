import React from "react";
import "./globals.css";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata = {
  title: "Expense Tracker",
  description: "Track your expenses effortlessly",
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* Provide the sidebar context globally */}
        <SidebarProvider>
          <div className="flex">
            {/* Persistent Sidebar */}
            <AppSidebar />
            {/* Main Content */}
            <main className="flex-1 p-4">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
};

export default Layout;
