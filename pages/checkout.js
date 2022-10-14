import Image from "next/image";
import React, { useState } from "react";
export default function Index() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="justify-center container mx-auto block lg:hidden xl:hidden 2xl:hidden   ">
        <div className="  ">
          <nav className="">
            <div className="justify-between px-4 mx-auto items-center lg:max-w-7xl xl:flex 2xl:flex lg:flex md:px-8">
              <div>
                <div className="flex items-center justify-between py-3 md:py-5 ">
                  <a href="#">
                    <Image
                      className="cursor-pointer"
                      src="/Hourglass.svg"
                      width={80}
                      height={80}
                    />
                  </a>
                  <div className="xl:hidden 2xl:hidden lg:hidden ">
                    <button
                      className="p-2  text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                      onClick={() => setNavbar(!navbar)}
                    >
                      {navbar ? (
                        <Image
                          className="cursor-pointer "
                          src="/close.svg"
                          width={20}
                          height={20}
                        />
                      ) : (
                        <svg
                          fill="#000000"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 30 30"
                          width="30px"
                          height="30px"
                        >
                          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`flex-1 bg-gray-50 justify-self-center pb-3 mt-8 xl:hidden 2xl:hidden lg:hidden md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                  }`}
                >
                  <ul
                    className="items-center gap-20 px-4 
               jy-center  xl:flex 2xl:flex lg:flex space-y-0"
                  >
                    <li className="py-3">
                      <a
                        href="#section5"
                        className="font-semibold text-gray-600"
                      >
                        <Image
                          className="cursor-pointer"
                          src="/AnitaJane.svg"
                          width={115}
                          height={24}
                        />
                      </a>
                    </li>
                    <li className="py-3">
                      <a
                        href="#section6"
                        className="font-semibold text-gray-600"
                      >
                        Men
                      </a>
                    </li>
                    <li className="py-3">
                      <a
                        href="#section7"
                        className="font-semibold text-gray-600"
                      >
                        Women
                      </a>
                    </li>
                    <li className="py-3">
                      <a
                        href="#section8"
                        className="font-semibold text-gray-600"
                      >
                        Kids
                      </a>
                    </li>
                    <li className="py-3 ">
                      <a
                        href="#section8"
                        className="font-semibold text-gray-600"
                      >
                        Join Newsletter
                      </a>
                    </li>
                    <li className="py-3 ">
                      <a
                        href="#section8"
                        className="font-semibold text-gray-600"
                      >
                        Blogs
                      </a>
                    </li>
                    <li className="py-3  pb-32">
                      <a
                        href="#section8"
                        className="font-semibold text-gray-600"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container mx-auto hidden lg:block xl:block 2xl:block px-4">
        <div className="flex ">
          <div className="w-11/12  px-2 py-5">
            <div className="flex gap-12">
              <div className="">
                <Image
                  className="cursor-pointer"
                  src="/search.svg"
                  width={24}
                  height={24}
                />
              </div>
              <div className="">
                <h1 className="text-gray-800 cursor-pointer">Men</h1>
              </div>
              <div className="">
                <h1 className="text-gray-800 cursor-pointer">Women</h1>
              </div>
              <div className="">
                <h1 className="text-gray-800 cursor-pointer">Kids</h1>
              </div>
            </div>
          </div>
          <div className="w-11/12  py-5 ">
            <div className="flex justify-center items-center">
              <Image
                className="cursor-pointer"
                src="/AnitaJane.svg"
                width={115}
                height={24}
              />
            </div>
          </div>
          <div className="w-11/12 ">
            <div className="flex  py-5 px-2 flex-row-reverse  gap-12 ">
              <div className="">
                <h1 className="text-gray-800 cursor-pointer">About</h1>
              </div>
              <div className="">
                <h1 className="text-gray-800 cursor-pointer">Blogs</h1>
              </div>
              <div className="">
                <h1 className="text-gray-800 cursor-pointer">
                  {" "}
                  Join Newsletter
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-10/12 md:w-8/12  lg:w-8/12 xl:w-8/12 2xl:w-8/12  ">
        <div className="">
          <h1 className="text-gray-800 text-4xl font-bold">Check out</h1>
        </div>
        <h1 className="text-gray-800 text-xl font-bold mt-12">
          Contact Information
        </h1>
        <div className="flex gap-5">
          <div className="w-11/12">
            <label class="relative block ">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center "></span>
              <input
                className="border-b  placeholder:text-gray-700 block bg-white w-full px-2 mt-5 py-2 outline-none lg:text-lg md:text-sm text-xs"
                placeholder="Email"
                type="text"
                name="search"
              />
            </label>
            <div className="flex  mt-6">
              <div className="bg-white mt-1 dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 mr-2 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                <input
                  type="checkbox"
                  className="checkbox opacity-0 absolute cursor-pointer  w-full h-full"
                />
                <div className="check-icon hidden bg-gray-800 text-white rounded-sm">
                  <svg
                    className="icon icon-tabler icon-tabler-check"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
              <div className="lg:text-sm xl:text-sm 2xl:text-sm text-xs mt-1">
                <h1>Email me with news and offers.</h1>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-11/12 xl:w-11/12 2xl:w-11/12 hidden lg:block xl:block 2xl:block"></div>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-row 2xl:flex-row lg:flex-row  mt-5 gap-5">
          <div className="w-11/12 ">
            <label class="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center "></span>
              <input
                className="border-b  placeholder:text-gray-700 block bg-white w-full px-2 mt-5 py-2 outline-none  lg:text-lg md:text-sm text-xs"
                placeholder="First Name"
                type="text"
                name="search"
              />
            </label>
          </div>
          <div className="w-11/12">
            <label class="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center "></span>
              <input
                className="border-b  placeholder:text-gray-700 block bg-white w-full px-2  mt-5 py-2 outline-none lg:text-lg md:text-sm text-xs"
                placeholder="Last Name"
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>
        <div className="w-full  mt-8">
          <label class="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center "></span>
            <input
              className="border-b  placeholder:text-gray-700 block bg-white w-full px-2 mt-5 py-2 outline-none  lg:text-lg md:text-sm text-xs"
              placeholder="Address"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="w-full mt-8">
          <label class="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center "></span>
            <input
              className="border-b  placeholder:text-gray-700 block bg-white w-full px-2 mt-5 py-2 outline-none lg:text-lg md:text-sm text-xs"
              placeholder="Address (Line 02)"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-row 2xl:flex-row lg:flex-row gap-5 mt-8">
          <div className="relative border-b flex w-full  mx-auto lg:pb-0 pb-4 mt-5 ">
            <select
              type="text"
              name="language"
              required
              id="language"
              className="bg-white cursor-pointer px-2  w-full text-gray-800 px-2  appearance-none py-1 pr-12 lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none   rounded"
            >
              <option value="Switzerland">Country / Region</option>
              <option value="America">America</option>
              <option value="Australia">Australia</option>
              <option value="Australia">New Zealand</option>
              <option value="Australia">Canada</option>
            </select>
            <div className="z-30 right-2 cursor-pointer  absolute  top-2.5 pointer-events-none">
              <Image src="/down.png" width={20} height={20} className="" />
            </div>
          </div>
          <div className="relative border-b flex w-full  mx-auto lg:pb-0 pb-4 mt-5 ">
            <select
              type="text"
              name="language"
              required
              id="language"
              className="bg-white cursor-pointer px-2  w-full text-gray-800   appearance-none py-1 pr-12 lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none rounded"
            >
              <option value="Switzerland">Region (Optional)</option>
              <option value="America">America</option>
              <option value="Australia">Australia</option>
              <option value="Australia">New Zealand</option>
              <option value="Australia">Canada</option>
            </select>
            <div className="z-30 right-2 cursor-pointer  absolute  top-2.5 pointer-events-none">
              <Image src="/down.png" width={20} height={20} className="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-row 2xl:flex-row lg:flex-row  gap-5 mt-8">
          <div className="relative border-b flex w-full  mx-auto lg:pb-0 pb-4 mt-5 ">
            <select
              type="text"
              name="language"
              required
              id="language"
              className="bg-white cursor-pointer px-2  w-full text-gray-800   appearance-none py-1 pr-12 lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none   rounded"
            >
              <option value="Switzerland">Town/City</option>
              <option value="America">America</option>
              <option value="Australia">Australia</option>
              <option value="Australia">New Zealand</option>
              <option value="Australia">Canada</option>
            </select>
            <div className="z-30 right-2 cursor-pointer  absolute  top-2.5 pointer-events-none">
              <Image src="/down.png" width={20} height={20} className="" />
            </div>
          </div>
          <div className="relative border-b flex w-full  mx-auto lg:pb-0 pb-4 mt-5 ">
            <select
              type="text"
              name="language"
              required
              id="language"
              className="bg-white cursor-pointer px-2  w-full text-gray-800   appearance-none py-1 pr-12 lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none   rounded"
            >
              <option value="Switzerland">Zip Code</option>
              <option value="America"> 0001</option>
              <option value="Australia"> 2223</option>
              <option value="Australia">4333</option>
              <option value="Australia">6527</option>
            </select>
            <div className="z-30 right-2 cursor-pointer  absolute  top-2.5 pointer-events-none">
              <Image src="/down.png" width={20} height={20} className="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-row 2xl:flex-row lg:flex-row  gap-5 mt-8">
          <div className="w-full lg:w-11/12 xl:w-11/12 2xl:w-11/12">
            <label class="relative block ">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center "></span>
              <input
                className="border-b placeholder:text-gray-700 block bg-white w-full px-2  mt-5 py-2 outline-none  text-lg"
                placeholder="Phone Number"
                type="text"
                name="search"
              />
            </label>
            <div className="flex  mt-6">
              <div className="bg-white mt-1 dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 mr-2 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                <input
                  type="checkbox"
                  className="checkbox opacity-0 absolute cursor-pointer  w-full h-full"
                />
                <div className="check-icon hidden bg-gray-800 text-white rounded-sm">
                  <svg
                    className="icon icon-tabler icon-tabler-check"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
              <div className="lg:text-sm xl:text-sm 2xl:text-sm text-xs mt-1">
                <h1>Save this information for next time.</h1>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-11/12 xl:w-11/12 2xl:w-11/12 hidden lg:block xl:block 2xl:block"></div>
        </div>
      </div>
      <div className="container mx-auto w-8/12 mt-12 lg:mt-32 xl:mt-32 2xl:mt-32 md:mt-32 ">
        <h1 className="text-gray-800 text-2xl  lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold mb-12 text-center lg:text-left 2xl:text-left xl:text-left md:text-left">
          Order Summary
        </h1>
        <div className="hidden md:block xl:block 2xl:block">
          <div className="w-full">
            <div className="flex pt-7  pb-7">
              <div className="">
                <div className="flex  gap-6">
                  <div className="">
                    <Image src="/sw-1.svg" width={186} height={150} />
                  </div>
                  <div className="">
                    <h1 className="font-bold text-lg text-gray-800 ">
                      Apple Watch 1
                    </h1>
                    <h1 className="font-semibold mt-5 text-md text-gray-500">
                      White
                    </h1>
                    <h1 className="font-semibold mt-2 text-md text-gray-500">
                      Small
                    </h1>
                    <h1 className="font-semibold mt-2 text-md text-gray-500">
                      Quantity: 1
                    </h1>
                  </div>
                </div>
              </div>
              <div className="ml-auto ">
                <h1 className="text-xl font-bold text-gray-800  ml-4">$20</h1>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex  pt-7  pb-7">
              <div className="">
                <div className="flex gap-6">
                  <div className="">
                    <Image src="/sw-2.svg" width={186} height={150} />
                  </div>
                  <div className="">
                    <h1 className="font-bold text-lg text-gray-800 ">
                      Apple Watch 2
                    </h1>
                    <h1 className="font-semibold mt-5 text-md text-gray-500">
                      White
                    </h1>
                    <h1 className="font-semibold mt-2 text-md text-gray-500">
                      Small
                    </h1>
                    <h1 className="font-semibold mt-2 text-md text-gray-500">
                      Quantity: 1
                    </h1>
                  </div>
                </div>
              </div>
              <div className="ml-auto ">
                <h1 className="text-xl font-bold text-gray-800  ml-4">$40</h1>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex  pt-7  pb-7">
              <div className="">
                <div className="flex gap-6">
                  <div className="">
                    <Image src="/sw-3.svg" width={186} height={150} />
                  </div>
                  <div className="">
                    <h1 className="font-bold text-lg text-gray-800 ">
                      Apple Watch 3
                    </h1>
                    <h1 className="font-semibold mt-5 text-md text-gray-500">
                      White
                    </h1>
                    <h1 className="font-semibold mt-2 text-md text-gray-500">
                      Small
                    </h1>
                    <h1 className="font-semibold mt-2 text-md text-gray-500">
                      Quantity: 1
                    </h1>
                  </div>
                </div>
              </div>
              <div className="ml-auto ">
                <h1 className="text-xl font-bold text-gray-800 ">$70</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="block xl:hidden 2xl:hidden lg:hidden md:hidden">
          <div className="flex  flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-2  mt-12">
            <div className="flex justify-center items-center mb-5">
              <Image src="/sw-1.svg" width={186} height={150} />
            </div>
            <div className="flex  w-full">
              <div className="">
                <h1 className="font-bold text-lg text-gray-800 ">
                  Apple Watch 2
                </h1>
                <h1 className="font-semibold mt-5 text-md text-gray-500">
                  White
                </h1>
                <h1 className="font-semibold mt-2 text-md text-gray-500">
                  Small
                </h1>
                <h1 className="font-semibold mt-2 text-md text-gray-500">
                  Quantity: 1
                </h1>
              </div>
              <div className="ml-auto text-xl font-bold text-gray-800">$20</div>
            </div>
          </div>
          <div className="flex  flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-2 mt-12 ">
            <div className="flex justify-center items-center mb-5">
              <Image src="/sw-2.svg" width={186} height={150} />
            </div>
            <div className="flex  w-full">
              <div className="">
                <h1 className="font-bold text-lg text-gray-800 ">
                  Apple Watch 1
                </h1>
                <h1 className="font-semibold mt-5 text-md text-gray-500">
                  White
                </h1>
                <h1 className="font-semibold mt-2 text-md text-gray-500">
                  Small
                </h1>
                <h1 className="font-semibold mt-2 text-md text-gray-500">
                  Quantity: 1
                </h1>
              </div>
              <div className="ml-auto text-xl font-bold text-gray-800">$40</div>
            </div>
          </div>
          <div className="flex  flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-2 mt-12">
            <div className="flex justify-center items-center mb-5">
              <Image src="/sw-3.svg" width={186} height={150} />
            </div>
            <div className="flex  w-full">
              <div className="">
                <h1 className="font-bold text-lg text-gray-800 ">
                  Apple Watch 3
                </h1>
                <h1 className="font-semibold mt-5 text-md text-gray-500">
                  White
                </h1>
                <h1 className="font-semibold mt-2 text-md text-gray-500">
                  Small
                </h1>
                <h1 className="font-semibold mt-2 text-md text-gray-500">
                  Quantity: 1
                </h1>
              </div>
              <div className="ml-auto text-xl font-bold text-gray-800">$70</div>
            </div>
          </div>
        </div>
        <div className="flex mt-12 ">
          <div className="text-gray-800 font-semibold 2xl:text-xl xl:text-xl lg:text-xl md:text-md text-sm">
            Total items
          </div>
          <div className="text-gray-800 ml-auto font-semibold  2xl:text-xl xl:text-xl lg:text-xl md:text-md text-sm">
            03
          </div>
        </div>
        <div className="flex  mt-6">
          <div className="text-gray-800 font-semibold 2xl:text-xl xl:text-xl lg:text-xl md:text-md text-sm">
            Total Charges
          </div>
          <div className="text-gray-800 ml-auto font-semibold 2xl:text-xl xl:text-xl lg:text-xl md:text-md text-sm">
            $80
          </div>
        </div>{" "}
        <div className="flex mt-6">
          <div className="text-gray-800 font-semibold 2xl:text-xl xl:text-xl lg:text-xl md:text-md text-sm">
            Shipping charges
          </div>
          <div className="text-gray-800 ml-auto font-semibold 2xl:text-xl xl:text-xl lg:text-xl md:text-md text-sm">
            $90
          </div>
        </div>
        <div className="flex mt-6 border-t border-b py-4">
          <div className="text-gray-800 font-semibold 2xl:text-xl xl:text-xl lg:text-xl md:text-md text-sm ">
            Total
          </div>
          <div className="text-gray-800 ml-auto font-semibold 2xl:text-xl xl:text-xl lg:text-xl md:text-md text-sm">
            $170
          </div>
        </div>
        <div className="mt-16 ">
          <h1 className="text-2xl font-bold text-gray-800">Payment Method</h1>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  mt-5 gap-5">
          <div className="xl:w-11/12 md:w-11/12 2xl:w-11/12 lg:w-11/12 w-full">
            <label class="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center "></span>
              <input
                className="border-b  px-2 font-semibold placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none  lg:text-lg md:text-sm text-xs "
                placeholder="Name of card"
                type="text"
                name="search"
              />
            </label>
          </div>
          <div className="xl:w-11/12 md:w-11/12 2xl:w-11/12 lg:w-11/12 w-full">
            <label class="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center "></span>
              <input
                className="border-b px-2 font-semibold placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none lg:text-lg md:text-sm text-xs "
                placeholder="Card Number"
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  gap-5 mt-8">
          <div className="relative border-b flex w-full  mx-auto lg:pb-0 pb-4 mt-5 ">
            <select
              type="text"
              name="language"
              required
              id="language"
              className="bg-white cursor-pointer px-2  w-full text-gray-900 font-semibold   appearance-none pr-12 lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none text-blue-900  rounded"
            >
              <option value="Switzerland">Expiry Date</option>
              <option value="America lg:text-lg md:text-sm text-xs">
                10 Oct 2020
              </option>
            </select>
            <div className="z-30 right-2 cursor-pointer  absolute  top-2.5 pointer-events-none">
              <Image src="/down.png" width={20} height={20} className="" />
            </div>
          </div>
          <div className="w-full">
            <label class="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center "></span>
              <input
                className="border-b font-semibold lg:text-lg md:text-sm text-xs  px-2 placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none  "
                placeholder="CVC"
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>
        <button className="text-gray-800 py-4 w-full mt-12 text-lg  hover:bg-gray-900 focus:bg-gray-900 font-semibold mt-16 bg-gray-800 text-white">
          Complete Purchase
        </button>
      </div>
      <div className="container  mx-auto mt-32 md:mt-48 lg:mt-48 xl:mt-48 2xl:mt-48 mb-16 px-5  ">
        <div className="">
          <div className="grid lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1   gap-4  border-t border-b py-20 pl-5">
            <div className="w-11/12 mt-5">
              <h1 className=" cursor-pointer text-2xl text-gray-700 font-bold">
                Customer services
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-8 font-semibold ">
                Contact
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                Track Order
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                Delivery & returns
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                Return policy
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                Sitemap
              </h1>
            </div>
            <div className="  w-11/12 mt-5">
              <h1 className=" cursor-pointer text-2xl text-gray-700 font-bold">
                Online services
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-8 font-semibold ">
                Payment methods
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                Shipping options
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                My account
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                E-services
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                Frequently asked questions
              </h1>
            </div>
            <div className="  w-11/12 mt-5">
              <h1 className=" cursor-pointer text-2xl text-gray-700 font-bold">
                Privacy & legal
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-8 font-semibold ">
                Work Sans
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                Privacy policy
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold mb-3 lg:mb-20 md:mb-20 xl:mb-20 2xl:mb-20  pb-2">
                Terms & conditions
              </h1>
            </div>
            <div className=" w-11/12 mt-5">
              <h1 className=" cursor-pointer text-2xl text-gray-700 font-bold">
                More from luxe
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-8 font-semibold ">
                Luxe app for iOS & Android
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                The company
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                Media publications
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                Careers at luxe
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                luxe & CSR
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-12">
        <div className="flex justify-center items-center  ">
          <Image src="/luxe.svg" width={57} height={30} />
        </div>
        <h1 className="text-center mt-3 text-gray-700">
          © 2021 Luxe Inc. All rights reserved.
        </h1>
      </div>
      <style>
        {`
                .checkbox:checked + .check-icon {
                  display:flex;}
                }
                      }
                `}
      </style>
    </>
  );
}
