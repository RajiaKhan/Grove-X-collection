import Image from "next/image";
import React, { useState } from "react";
export default function Index() {
  return (
    <>
      <div className="container mx-auto w-8/12 ">
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
                className="border-b  placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none  text-lg"
                placeholder="Email"
                type="text"
                name="search"
              />
            </label>
          </div>
          <div className="w-11/12"></div>
        </div>
        <div className="flex mt-5 gap-5">
          <div className="w-11/12">
            <label class="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center "></span>
              <input
                className="border-b  placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none  text-lg"
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
                className="border-b  placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none  text-lg"
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
              className="border-b  placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none  text-lg"
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
              className="border-b  placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none  text-lg"
              placeholder="Address (Line 02)"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="flex gap-5 mt-8">
          <div className="relative border-b flex w-full  mx-auto lg:pb-0 pb-4 mt-5 ">
            <select
              type="text"
              name="language"
              required
              id="language"
              className="bg-white cursor-pointer w-full text-gray-400   appearance-none py-1 pr-12 lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none text-blue-900  rounded"
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
              className="bg-white cursor-pointer w-full text-gray-400   appearance-none py-1 pr-12 lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none text-blue-900  rounded"
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
        <div className="flex gap-5 mt-8">
          <div className="relative border-b flex w-full  mx-auto lg:pb-0 pb-4 mt-5 ">
            <select
              type="text"
              name="language"
              required
              id="language"
              className="bg-white cursor-pointer w-full text-gray-400   appearance-none py-1 pr-12 lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none text-blue-900  rounded"
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
              className="bg-white cursor-pointer w-full text-gray-400   appearance-none py-1 pr-12 lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none text-blue-900  rounded"
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
        <div className="flex gap-5 mt-8">
          <div className="w-11/12">
            <label class="relative block ">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center "></span>
              <input
                className="border-b placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none  text-lg"
                placeholder="Phone Number"
                type="text"
                name="search"
              />
            </label>
          </div>
          <div className="w-11/12"></div>
        </div>
      </div>
      <div className="container mx-auto w-8/12 mt-32">
        <h1 className="text-gray-800 text-3xl font-bold mb-12 ">
          Order Summary
        </h1>
        <div className="w-full ">
          <div className="flex  pt-7  pb-7">
            <div className="">
              <div className="flex gap-6">
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
        <div className="flex mt-12 ">
          <div className="text-gray-800 font-semibold text-xl">Total items</div>
          <div className="text-gray-800 ml-auto font-semibold text-xl">03</div>
        </div>
        <div className="flex  mt-6">
          <div className="text-gray-800 font-semibold text-xl">
            Total Charges
          </div>
          <div className="text-gray-800 ml-auto font-semibold text-xl">$80</div>
        </div>{" "}
        <div className="flex mt-6">
          <div className="text-gray-800 font-semibold text-xl">
            Shipping charges
          </div>
          <div className="text-gray-800 ml-auto font-semibold text-xl">$90</div>
        </div>
        <div className="flex mt-6 border-t border-b py-4">
          <div className="text-gray-800 font-semibold text-xl">Total</div>
          <div className="text-gray-800 ml-auto font-semibold text-xl">
            $170
          </div>
        </div>
        <div className="mt-16 ">
          <h1 className="text-2xl font-bold text-gray-800">Payment Method</h1>
        </div>
        <div className="flex mt-5 gap-5">
          <div className="w-11/12">
            <label class="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center "></span>
              <input
                className="border-b font-semibold placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none  text-lg"
                placeholder="Name of card"
                type="text"
                name="search"
              />
            </label>
          </div>
          <div className="w-11/12">
            <label class="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center "></span>
              <input
                className="border-b font-semibold placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none  text-lg"
                placeholder="Card Number"
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-5 mt-8">
          <div className="relative border-b flex w-full  mx-auto lg:pb-0 pb-4 mt-5 ">
            <select
              type="text"
              name="language"
              required
              id="language"
              className="bg-white cursor-pointer w-full text-gray-900 font-semibold   appearance-none py-1 pr-12 lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none text-blue-900  rounded"
            >
              <option value="Switzerland">Expiry Date</option>
              <option value="America">10 Oct 2020</option>
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
                className="border-b font-semibold placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none  text-lg"
                placeholder="CVC"
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>
        <button className="text-gray-800 py-4 w-full text-lg  hover:bg-gray-900 focus:bg-gray-900 font-semibold mt-16 bg-gray-800 text-white">
          Complete Purchase
        </button>
      </div>
      <div className="container  mx-auto mt-48 mb-16 ">
        <div className="">
          <div className="flex   gap-4  border-t border-b py-20 pl-5">
            <div className="w-11/12">
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
            <div className="  w-11/12">
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
            <div className="  w-11/12">
              <h1 className=" cursor-pointer text-2xl text-gray-700 font-bold">
                Privacy & legal
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-8 font-semibold ">
                Work Sans
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold">
                Privacy policy
              </h1>
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold mb-20 pb-2">
                Terms & conditions
              </h1>
            </div>
            <div className=" w-11/12">
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
    </>
  );
}
