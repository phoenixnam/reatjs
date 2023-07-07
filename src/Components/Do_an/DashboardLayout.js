import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Dashboard() {
  return (
    <>
      <div className="flex h-screen bg-gray-200 font-roboto">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              {/*
                Replace the slot with the content you want to render
                within the Dashboard component.
              */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
