import React from "react";
import { useSelector } from "react-redux";

const ListUser = () => {
  const thx = [
    "User ID",
    "Username",
    "E-mail",
    "Whatsapp",
    "Level",
    "Role",
    "Status",
    "Password",
    "Registered Date",
    "Effective Date"
  ];

  
const kolom = [
  "userId",
  "username",
  "email",
  "hpWa",
  "accountLevel",
  "role",
  "status",
  "password",
  "registeredDate",
  "effectiveDate"
];
  const users = useSelector((state) => state.user.users);

  return (

    <div className="relative w-full px-4 mb-6 shadow-lg rounded-lg bg-white">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <h6 className="text-blueGray-700 text-xl font-bold text-center justify-between">List User</h6>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        {users.length > 0 ? (
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  {thx.map((th, index) => (
                    <th
                      key={index}
                      className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    >
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.userId}>
                    {kolom.map((td, index) => (
                      <td
                        key={index}
                        className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold ${
                          td == "Status" ? (user[td] ? "text-green-500" : "text-red-500") : ""
                        }`}
                      >
                        {td == "status" ? (user[td] ? "Aktif" : "Tidak Aktif") : user[td]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Tidak ada pengguna.</p>
        )}
      </div>
    </div>
  );
};

export default ListUser;
