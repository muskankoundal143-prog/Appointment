import React, { useState } from "react";

const Admin = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [usersOpen, setUsersOpen] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      name: "Alex Brown",
      email: "alex@example.com",
      role: "User",
      status: "Inactive",
    },
  ]);

  const [search, setSearch] = useState("");

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

     
      <aside className="fixed left-0 top-0 z-20 h-screen w-64 bg-gray-900 p-5 text-white">

        <h1 className="mb-8 text-2xl font-bold">
          Admin Panel
        </h1>

        <nav className="space-y-2">

       
          <button
            onClick={() => setActiveMenu("dashboard")}
            className={`w-full rounded-lg px-4 py-3 text-left ${
              activeMenu === "dashboard"
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`}
          >
             Dashboard
          </button>

      
          <div>
            <button
              onClick={() => {
                setUsersOpen(!usersOpen);
                setActiveMenu("users");
              }}
              className={`flex w-full items-center justify-between rounded-lg px-4 py-3 ${
                activeMenu === "users"
                  ? "bg-blue-600"
                  : "hover:bg-gray-800"
              }`}
            >
              <span>Users</span>

              <span>
                {usersOpen ? "▲" : "▼"}
              </span>
            </button>

            {usersOpen && (
              <div className="mt-1 ml-4 space-y-1">

                <button
                  onClick={() => setActiveMenu("all-users")}
                  className="w-full rounded px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                   All Users
                </button>

                <button
                  onClick={() => setActiveMenu("add-user")}
                  className="w-full rounded px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                   Add User
                </button>

                <button
                  onClick={() => setActiveMenu("roles")}
                  className="w-full rounded px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                   User Roles
                </button>

              </div>
            )}
          </div>

          <button
            onClick={() => setActiveMenu("products")}
            className={`w-full rounded-lg px-4 py-3 text-left ${
              activeMenu === "products"
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`}
          >
             Products
          </button>

        
          <button
            onClick={() => setActiveMenu("orders")}
            className={`w-full rounded-lg px-4 py-3 text-left ${
              activeMenu === "orders"
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`}
          >
             Orders
          </button>

         
          <button
            onClick={() => setActiveMenu("settings")}
            className={`w-full rounded-lg px-4 py-3 text-left ${
              activeMenu === "settings"
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`}
          >
             Settings
          </button>

          <button
            onClick={() => alert("Logout clicked")}
            className="mt-8 w-full rounded-lg px-4 py-3 text-left text-red-400 hover:bg-red-500 hover:text-white"
          >
             Logout
          </button>

        </nav>
      </aside>

   
      <main className="ml-64 min-h-screen p-8">

   
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {activeMenu === "dashboard" && "Dashboard"}
              {activeMenu === "users" && "Users"}
              {activeMenu === "all-users" && "All Users"}
              {activeMenu === "add-user" && "Add User"}
              {activeMenu === "roles" && "User Roles"}
              {activeMenu === "products" && "Products"}
              {activeMenu === "orders" && "Orders"}
              {activeMenu === "settings" && "Settings"}
            </h2>

            <p className="mt-1 text-gray-500">
              Manage your admin panel
            </p>
          </div>

          <div className="rounded-full bg-white px-4 py-2 shadow">
             Admin
          </div>
        </div>

   
        {activeMenu === "dashboard" && (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-xl bg-white p-6 shadow">
                <p className="text-gray-500">Total Users</p>
                <h3 className="mt-2 text-3xl font-bold">
                  {users.length}
                </h3>
              </div>

              <div className="rounded-xl bg-white p-6 shadow">
                <p className="text-gray-500">Products</p>
                <h3 className="mt-2 text-3xl font-bold">
                  320
                </h3>
              </div>

              <div className="rounded-xl bg-white p-6 shadow">
                <p className="text-gray-500">Orders</p>
                <h3 className="mt-2 text-3xl font-bold">
                  845
                </h3>
              </div>

              <div className="rounded-xl bg-white p-6 shadow">
                <p className="text-gray-500">Revenue</p>
                <h3 className="mt-2 text-3xl font-bold">
                  ₹24,500
                </h3>
              </div>

            </div>

            <div className="mt-8 rounded-xl bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-bold">
                Recent Activity
              </h3>

              <div className="space-y-4">
                <p className="border-b pb-3">
                   John Doe created an account
                </p>

                <p className="border-b pb-3">
                   New product added
                </p>

                <p>
                   New order received
                </p>
              </div>
            </div>
          </>
        )}

        {(activeMenu === "users" ||
          activeMenu === "all-users") && (
          <div className="rounded-xl bg-white p-6 shadow">

            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row">

              <div>
                <h3 className="text-xl font-bold">
                  All Users
                </h3>

                <p className="text-sm text-gray-500">
                  Manage registered users
                </p>
              </div>

              <button
                onClick={() => setActiveMenu("add-user")}
                className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
              >
                + Add User
              </button>

            </div>

        
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-5 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            />

     
            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="p-4">ID</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-4">
                        #{user.id}
                      </td>

                      <td className="p-4 font-medium">
                        {user.name}
                      </td>

                      <td className="p-4 text-gray-500">
                        {user.email}
                      </td>

                      <td className="p-4">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                          {user.role}
                        </span>
                      </td>

                      <td className="p-4">
                        <span
                          className={`rounded-full px-3 py-1 text-sm ${
                            user.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td className="p-4">
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </div>
        )}

        {activeMenu === "add-user" && (
          <div className="max-w-2xl rounded-xl bg-white p-6 shadow">

            <h3 className="mb-6 text-xl font-bold">
              Add New User
            </h3>

            <form className="space-y-5">

              <div>
                <label className="mb-2 block font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Role
                </label>

                <select className="w-full rounded-lg border px-4 py-3">
                  <option>User</option>
                  <option>Admin</option>
                  <option>Manager</option>
                </select>
              </div>

              <div className="flex gap-3">

                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                >
                  Create User
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMenu("all-users")}
                  className="rounded-lg bg-gray-200 px-6 py-3 hover:bg-gray-300"
                >
                  Cancel
                </button>

              </div>

            </form>
          </div>
        )}

   
        {activeMenu === "roles" && (
          <div className="rounded-xl bg-white p-6 shadow">

            <h3 className="mb-6 text-xl font-bold">
              User Roles
            </h3>

            <div className="grid gap-5 md:grid-cols-3">

              <div className="rounded-lg border p-5">
                <h4 className="text-lg font-bold">
                  Admin
                </h4>
                <p className="mt-2 text-sm text-gray-500">
                  Full access to the admin panel.
                </p>
              </div>

              <div className="rounded-lg border p-5">
                <h4 className="text-lg font-bold">
                  Manager
                </h4>
                <p className="mt-2 text-sm text-gray-500">
                  Can manage products and orders.
                </p>
              </div>

              <div className="rounded-lg border p-5">
                <h4 className="text-lg font-bold">
                  User
                </h4>
                <p className="mt-2 text-sm text-gray-500">
                  Regular user access.
                </p>
              </div>

            </div>
          </div>
        )}

      
        {activeMenu === "products" && (
          <div className="rounded-xl bg-white p-8 shadow">
            <h3 className="text-xl font-bold">
              Products
            </h3>

            <p className="mt-2 text-gray-500">
              Product management section.
            </p>
          </div>
        )}

       
        {activeMenu === "orders" && (
          <div className="rounded-xl bg-white p-8 shadow">
            <h3 className="text-xl font-bold">
              Orders
            </h3>

            <p className="mt-2 text-gray-500">
              Order management section.
            </p>
          </div>
        )}

        {activeMenu === "settings" && (
          <div className="rounded-xl bg-white p-8 shadow">
            <h3 className="text-xl font-bold">
              Settings
            </h3>

            <p className="mt-2 text-gray-500">
              Admin settings section.
            </p>
          </div>
        )}

      </main>
    </div>
  );
};

export default Admin;