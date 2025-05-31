import React from "react";

const AdminDashboard = () => {
  const reports = [
    {
      confession: "I feel so lost and alone.",
      reportedBy: "Sarah Miller",
      reason: "Harassment",
      date: "2023-11-15",
    },
  ];
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* Left Sidebar */}
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-white p-4 border-r border-gray-200">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#141414] text-base font-medium leading-normal">
                  Admin Panel
                </h1>
                <div className="flex flex-col gap-2">
                  {/* Dashboard Item */}
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#f2f2f2] cursor-pointer">
                    <div
                      className="text-[#141414]"
                      data-icon="House"
                      data-size="24px"
                      data-weight="fill"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
                      </svg>
                    </div>
                    <p className="text-[#141414] text-sm font-medium leading-normal">
                      Dashboard
                    </p>
                  </div>

                  {/* Confessions Item */}
                  <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
                    <div
                      className="text-[#141414]"
                      data-icon="File"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
                      </svg>
                    </div>
                    <p className="text-[#141414] text-sm font-medium leading-normal">
                      Confessions
                    </p>
                  </div>

                  {/* Users Item */}
                  <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
                    <div
                      className="text-[#141414]"
                      data-icon="Users"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                      </svg>
                    </div>
                    <p className="text-[#141414] text-sm font-medium leading-normal">
                      Users
                    </p>
                  </div>

                  {/* Reports Item */}
                  <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
                    <div
                      className="text-[#141414]"
                      data-icon="Flag"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M34.76,42A8,8,0,0,0,32,48V216a8,8,0,0,0,16,0V171.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V48A8,8,0,0,0,210.76,42c-28,24.23-51.72,12.49-79.21-1.12C103.07,26.76,70.78,10.79,34.76,42ZM208,164.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V51.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z"></path>
                      </svg>
                    </div>
                    <p className="text-[#141414] text-sm font-medium leading-normal">
                      Reports
                    </p>
                  </div>

                  {/* Settings Item */}
                  <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
                    <div
                      className="text-[#141414]"
                      data-icon="Gear"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48,107.29,107.29,0,0,0-26.26,10.88,8,8,0,0,0-3.92,6L44.54,70q-1.56,1.48-3,3L39.9,93.61a8,8,0,0,0-3.94,6A107.61,107.61,0,0,0,32,126.25a8,8,0,0,0,1.49,7.06L47.84,155.84q-1.46,2.16-1.49,4.32L32.94,179.19a8,8,0,0,0-1.49,7.06,107.29,107.29,0,0,0,10.88,26.26,8,8,0,0,0,6,3.92L73.46,214q1.46,1.56,3,3L70.9,215.46a8,8,0,0,0,3.93,6,107.72,107.72,0,0,0,26.26,10.88,8,8,0,0,0,7.06-1.49L125.84,216q2.16,0,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.92-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.27,107.27,0,0,0,10.88-26.25A8,8,0,0,0,216,130.16Z"></path>
                      </svg>
                    </div>
                    <p className="text-[#141414] text-sm font-medium leading-normal">
                      Settings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex flex-col flex-1 p-6 bg-gray-50 rounded-lg shadow-lg min-h-[700px] ml-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Welcome to Admin Dashboard
            </h2>

            {/* Example cards or sections */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-md p-4 shadow">
                <h3 className="font-medium text-lg mb-2">Users</h3>
                <p className="text-gray-600">Total users: 1,234</p>
              </div>
              <div className="bg-white rounded-md p-4 shadow">
                <h3 className="font-medium text-lg mb-2">Confessions</h3>
                <p className="text-gray-600">Pending: 45</p>
              </div>
              <div className="bg-white rounded-md p-4 shadow">
                <h3 className="font-medium text-lg mb-2">Reports</h3>
                <p className="text-gray-600">New reports: 12</p>
              </div>
            </div>
            <h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
              Recent Whispers
            </h2>
            {/* More content can go here */}
            <div className="mt-6">
              <tbody>
                {reports.map((report, idx) => (
                  <tr key={idx} className="border-t border-t-[#e0e0e0]">
                    <td className="px-4 py-2 text-[#757575] text-sm">
                      {report.confession}
                    </td>
                    <td className="px-4 py-2 text-[#757575] text-sm">
                      {report.reportedBy}
                    </td>
                    <td className="px-4 py-2 text-[#757575] text-sm">
                      {report.reason}
                    </td>
                    <td className="px-4 py-2 text-[#757575] text-sm">
                      {report.date}
                    </td>
                    <td className="px-4 py-2 text-[#757575] text-sm font-bold cursor-pointer">
                      Review
                    </td>
                  </tr>
                ))}
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
