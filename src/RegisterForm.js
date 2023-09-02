import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

const initialUserState = {
  userId: 1, // Default user ID
  username: "",
  email: "",
  hpWa: "",
  accountLevel: "User",
  role: [],
  status: false,
  password: "",
  registeredDate: new Date().toLocaleDateString(),
  effectiveDate: null,
};

const RegisterForm = () => {
  const [user, setUser] = useState({ ...initialUserState });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [effectiveDate, setEffectiveDate] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const selectedRoles = Array.from(e.target.selectedOptions, (option) => option.value);
    setUser({ ...user, role: selectedRoles });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    if (name === 'password2') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.userId || !user.username || !user.email || !user.hpWa || !user.password || !confirmPassword || user.role.length === 0 || effectiveDate === null) {
      setError('Semua field harus diisi');
      return;
    }

    if (user.password !== confirmPassword) {
      setError('Password and Confirm Password must match');
      return;
    }

    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      dispatch(addUser({ ...user, password: hashedPassword,effectiveDate: effectiveDate.toLocaleDateString() }));
      setUser({ ...initialUserState });
      setConfirmPassword('');
      setError('');
      navigate("/list-user");
    } catch (error) {
      console.error('Error hashing password:', error);
    }
  };

  const rolex = ["IT Network", "IT Developer", "IT FA", "IT Operation", "Finance", "Accounting", "Sales & Marketing"];

  return (
    <div className="relative w-full px-4 mb-6 shadow-lg rounded-lg bg-white">
    <div className="rounded-t bg-white mb-0 px-6 py-6">
      <h6 className="text-blueGray-700 text-xl font-bold text-center justify-between">Pendaftaran User</h6>
    </div>
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
    <form onSubmit={handleSubmit}>
      <div className="relative w-full mb-3 hidden">
        <input
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
          type="text"
          id="userId"
          name="userId"
          value={user.userId}
          onChange={handleChange}
        />
      </div>
      <div className="relative w-full mb-3">
        <label htmlFor="username" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">User Name</label>
        <input
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
      </div>
      <div className="relative w-full mb-3">
        <label htmlFor="email" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">E-Mail</label>
        <input
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div className="relative w-full mb-3">
        <label htmlFor="hpWa" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Nomor Whatsapp</label>
        <input
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
          type="text"
          id="hpWa"
          name="hpWa"
          value={user.hpWa}
          onChange={handleChange}
        />
      </div>
      <div className="relative w-full mb-3">
        <label htmlFor="accountLevel" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Account Level</label>
        <select
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
          id="accountLevel"
          name="accountLevel"
          value={user.accountLevel}
          onChange={handleChange}
        >
          <option value="Administrator">Administrator</option>
          <option value="User">User</option>
        </select>
      </div>
      <div className="relative w-full mb-3">
        <label htmlFor="role" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Role</label>
        <select
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          id="role"
          name="role"
          multiple
          size={rolex.length} // Menampilkan semua opsi sekaligus
          value={user.role} // Menggunakan nilai user.role sebagai value
          onChange={handleRoleChange}
        >
          {rolex.map((rolep) => (
            <option key={rolep} value={rolep}>
              {rolep}
            </option>
          ))}
        </select>
      </div>

      <div className="relative w-full mt-6 mb-8">
        <label htmlFor="role" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Status</label>
        <div className="flex">
          <div  className="flex w-6/12">
            <input type="radio" id="roleadmin" name="status" value="true" onChange={handleChange}/>
            <label htmlFor="roleadmin" className="block uppercase text-blueGray-600 text-xs font-bold px-2">Active</label>
          </div>
          <div  className="flex w-6/12">
            <input type="radio" id="roleuser" name="status" value="false" onChange={handleChange}/>
            <label htmlFor="roleuser" className="block uppercase text-blueGray-600 text-xs font-bold px-2">Non Active</label>
          </div>
        </div>
      </div>
      <div className="relative w-full mt-6 mb-8 flex">
        <div className="relative w-full mb-3 mr-3">
          <label htmlFor="password" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Password</label>
          <input
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="relative w-full mb-3">
          <label htmlFor="password2" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Konfirmasi Password</label>
          <input
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
            type="password"
            id="password2"
            name="password2"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="relative w-full mt-4 mb-3">
        <label htmlFor="effectiveDate" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Effective Date</label>
        <DatePicker
              showIcon
              className="border-0 react-datepicker-wrapper w-full px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              selected={effectiveDate}
              onChange={(date) => setEffectiveDate(date)}
              id="effectiveDate"
              name="effectiveDate"
              dateFormat="MM/dd/yyyy"
              value={effectiveDate ? effectiveDate.toLocaleDateString() : ""}
            />

      </div>
      {error && <div className="text-red-500">{error}</div>}
      <button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default RegisterForm;
