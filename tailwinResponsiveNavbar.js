/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import logo from "../../Images/logo.png";
import userPhoto from "../../Images/user.jpg";
import { Link, Outlet } from "react-router-dom";
import ActiveLink from "../../RouterDOM/ActiveLink/ActiveLink";
import auth from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  // console.log(user);

  return (
    <div class="bg-gray-50">
      <header>
        <div class="relative z-20 border-b bg-white">
          <div class="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-2">
            <div class="flex items-center justify-between">
              <div class="relative z-20">
                <Link to="/">
                  <div className="flex justify-center items-center">
                    <img className="h-12 mr-2" src={logo} alt="logo" />
                    <h2 className="text-2xl font-bold">Hiking RoX</h2>
                  </div>
                </Link>
              </div>

              <div class="flex items-center justify-end border-l lg:border-l-0">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  class="peer hidden"
                />
                <label
                  for="hamburger"
                  class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                </label>

                <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                  <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                    <ul class="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                      <li>
                        <ActiveLink
                          to="/"
                          class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 "
                        >
                          <span class="relative text-cyan-800 text-lg font-medium">
                            Home
                          </span>
                        </ActiveLink>
                      </li>
                      {user && (
                        <>
                          <li>
                            <ActiveLink
                              to="/inventory"
                              class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 "
                            >
                              <span class="relative text-cyan-800 text-lg font-medium">
                                Inventory
                              </span>
                            </ActiveLink>
                          </li>
                          <li>
                            <ActiveLink
                              to="/item"
                              class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 "
                            >
                              <span class="relative text-cyan-800 text-lg font-medium">
                                My Item
                              </span>
                            </ActiveLink>
                          </li>
                          <li>
                            <ActiveLink
                              to="/add-product"
                              class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 "
                            >
                              <span class="relative text-cyan-800 text-lg font-medium">
                                Add Product
                              </span>
                            </ActiveLink>
                          </li>
                        </>
                      )}
                      <li>
                        <ActiveLink
                          to="/about"
                          class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 "
                        >
                          <span class="relative text-cyan-800 text-lg font-medium">
                            About
                          </span>
                        </ActiveLink>
                      </li>
                      <li>
                        <ActiveLink
                          to="/blog"
                          class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 "
                        >
                          <span class="relative text-cyan-800 text-lg font-medium">
                            Blog
                          </span>
                        </ActiveLink>
                      </li>
                    </ul>

                    <div class="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                      {user ? (
                        <div className="flex justify-center items-center">
                          <img
                            className="h-12 rounded-full cursor-pointer mx-4"
                            src={
                              user.photoURL === null ? userPhoto : user.photoURL
                            }
                            alt="user photo"
                          />
                          <Link
                            onClick={() => signOut(auth)}
                            to="login"
                            class="block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-center text-white"
                          >
                            Log out
                          </Link>
                        </div>
                      ) : (
                        <Link
                          to="login"
                          class="block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-center text-white"
                        >
                          Log in
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Navbar;
