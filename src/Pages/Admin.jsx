import React, { useState } from "react";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Wrong username or password");
    }
  };

  if (!loggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">

        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow">

          <h1 className="mb-6 text-center text-2xl font-bold">
            Admin Login
          </h1>

          <form onSubmit={login} className="space-y-4">

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded border px-4 py-3"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border px-4 py-3"
            />

            <button
              type="submit"
              className="w-full rounded bg-[#2196d2] py-3 text-white hover:bg-[#1686c2]"
            >
              Login
            </button>

          </form>

        </div>

      </div>
    );
  }

  const appointments = [
    {
      patient: "Rahul Sharma",
      doctor: "Dr. Raj Sharma",
      date: "05 Oct 2026",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      patient: "Priya Singh",
      doctor: "Dr. Neha Singh",
      date: "05 Oct 2026",
      time: "11:00 AM",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="mb-6 text-3xl font-bold">
        Admin Panel
      </h1>

      <div className="rounded-lg bg-white p-6 shadow">

        <h2 className="mb-5 text-xl font-bold">
          Appointments
        </h2>

        <table className="w-full text-left">

          <thead>
            <tr className="border-b">

              <th className="p-3">
                Patient Name
              </th>

              <th className="p-3">
                Doctor
              </th>

              <th className="p-3">
                Date
              </th>

              <th className="p-3">
                Time
              </th>

              <th className="p-3">
                Status
              </th>

            </tr>
          </thead>

          <tbody>

            {appointments.map((item, index) => (
              <tr
                key={index}
                className="border-b"
              >

                <td className="p-3">
                  {item.patient}
                </td>

                <td className="p-3">
                  {item.doctor}
                </td>

                <td className="p-3">
                  {item.date}
                </td>

                <td className="p-3">
                  {item.time}
                </td>

               <td className="p-3">
  <span
    className={`rounded-full px-3 py-1 text-sm ${
      item.status === "Confirmed"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {item.status}
  </span>
</td>


              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Admin;
