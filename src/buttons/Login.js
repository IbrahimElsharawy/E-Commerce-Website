import React, { useState } from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
const Login = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="block text-blue-500 border-2  border-blue-500 bg-white hover:bg-blue-500 hover:text-white transition duration-500	 ease-in-out flex  items-center justify-center  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FiLogIn className="mr-1" size={16} />
        Login
      </button>
      {showModal ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto fixed top-0 left-0 w-full right-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Login</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-white opacity-7 h-6 w-6 text-xl block bg-blue-500  leading-5 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col w-full justify-center mb-6">
                    <button className="bg-blue-500 text-white p-2 rounded mb-3 flex justify-center items-center ">
                      <BsGoogle className="mr-2 " />
                      Sign in With Google
                    </button>
                    <button className="bg-blue-500 text-white p-2 rounded flex justify-center items-center">
                      <BsFacebook className="mr-2 " />
                      Sign in With Facebook
                    </button>
                  </div>
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Email Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-2" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-blue-500  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Login;
