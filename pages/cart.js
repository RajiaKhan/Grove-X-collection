import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const cart = () => {
  return (
    <>
      <div className="container mx-auto">
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
      <div className="container mx-auto mt-12">
        <h1 className="text-4xl font-bold ">Bag</h1>
        <div className="flex mt-12 gap-12">
          <div className="w-11/12 ">
            <div className="flex border-t pt-7 border-b pb-7">
              <div className="">
                <div className="flex gap-6">
                  <div className="">
                    <Image src="/w-1.svg" width={190} height={190} />
                  </div>
                  <div className="">
                    <h1 className="font-bold text-sm text-gray-500">RF293</h1>
                    <h1 className="font-bold text-md text-gray-800 mt-1">
                      Apple Watch Series 7
                    </h1>
                    <h1 className="font-semibold mt-5 text-sm text-gray-500">
                      Height: 10 inches
                    </h1>
                    <h1 className="font-semibold mt-2 text-sm text-gray-500">
                      Color: Black
                    </h1>
                    <h1 className="font-semibold mt-2 text-sm text-gray-500">
                      Composition: 100% calf leather
                    </h1>
                    <div className="flex gap-5 mt-3">
                      <div className="">
                        <h1 className="font-semibold mt-2 text-md underline cursor-pointer text-gray-800">
                          Add to favorites
                        </h1>
                      </div>
                      <div className="">
                        <h1 className="font-semibold mt-2 text-md underline cursor-pointer text-red-500">
                          Remove
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-auto ">
                <div className="relative border flex   mx-auto lg:pb-0 pb-4 mt-5 ">
                  <select
                    type="text"
                    name="language"
                    required
                    id="language"
                    className="bg-white cursor-pointer px-2  appearance-none py-1 pr-12 lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none text-blue-900  rounded"
                  >
                    <option value="Switzerland">01</option>
                    <option value="America">02</option>
                    <option value="Australia">03</option>
                    <option value="Australia">04</option>
                    <option value="Australia">05</option>
                  </select>
                  <div className="z-30 right-2 cursor-pointer  absolute  top-2.5 pointer-events-none">
                    <Image
                      src="/down.png"
                      width={20}
                      height={20}
                      className=""
                    />
                  </div>
                </div>
                <h1 className="text-xl font-bold text-gray-800 mt-24 ml-4">
                  $9,000
                </h1>
              </div>
            </div>
            <div className="flex mt-7 pt-7 border-b pb-7">
              <div className="">
                <div className="flex gap-6">
                  <div className="">
                    <Image src="/w-2.svg" width={190} height={190} />
                  </div>
                  <div className="">
                    <h1 className="font-bold text-sm text-gray-500">RF293</h1>
                    <h1 className="font-bold text-md text-gray-800 mt-1">
                      Apple Watch Series 7
                    </h1>
                    <h1 className="font-semibold mt-5 text-sm text-gray-500">
                      Height: 10 inches
                    </h1>
                    <h1 className="font-semibold mt-2 text-sm text-gray-500">
                      Color: Black
                    </h1>
                    <h1 className="font-semibold mt-2 text-sm text-gray-500">
                      Composition: 100% calf leather
                    </h1>
                    <div className="flex gap-5 mt-3">
                      <div className="">
                        <h1 className="font-semibold mt-2 text-md underline cursor-pointer text-gray-800">
                          Add to favorites
                        </h1>
                      </div>
                      <div className="">
                        <h1 className="font-semibold mt-2 text-md underline cursor-pointer text-red-500">
                          Remove
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-auto ">
                <div className="relative border flex   mx-auto lg:pb-0 pb-4 mt-5 ">
                  <select
                    type="text"
                    name="language"
                    required
                    id="language"
                    className="bg-white cursor-pointer px-2  appearance-none py-1 pr-12 lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none text-blue-900  rounded"
                  >
                    <option value="Switzerland">01</option>
                    <option value="America">02</option>
                    <option value="Australia">03</option>
                    <option value="Australia">04</option>
                    <option value="Australia">05</option>
                  </select>
                  <div className="z-30 right-2 cursor-pointer  absolute  top-2.5 pointer-events-none">
                    <Image
                      src="/down.png"
                      width={20}
                      height={20}
                      className=""
                    />
                  </div>
                </div>
                <h1 className="text-xl font-bold text-gray-800 mt-24 ml-4">
                  $9,000
                </h1>
              </div>
            </div>
            <div className="flex mt-7 pt-7 border-b pb-7">
              <div className="">
                <div className="flex gap-6">
                  <div className="">
                    <Image src="/w-3.svg" width={190} height={190} />
                  </div>
                  <div className="">
                    <h1 className="font-bold text-sm text-gray-500">RF293</h1>
                    <h1 className="font-bold text-md text-gray-800 mt-1">
                      Apple Watch Series 7
                    </h1>
                    <h1 className="font-semibold mt-5 text-sm text-gray-500">
                      Height: 10 inches
                    </h1>
                    <h1 className="font-semibold mt-2 text-sm text-gray-500">
                      Color: Black
                    </h1>
                    <h1 className="font-semibold mt-2 text-sm text-gray-500">
                      Composition: 100% calf leather
                    </h1>
                    <div className="flex gap-5 mt-3">
                      <div className="">
                        <h1 className="font-semibold mt-2 text-md underline cursor-pointer text-gray-800">
                          Add to favorites
                        </h1>
                      </div>
                      <div className="">
                        <h1 className="font-semibold mt-2 text-md underline cursor-pointer text-red-500">
                          Remove
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-auto ">
                <div className="relative border flex   mx-auto lg:pb-0 pb-4 mt-5 ">
                  <select
                    type="text"
                    name="language"
                    required
                    id="language"
                    className="bg-white cursor-pointer px-2  appearance-none py-1 pr-12 lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none text-blue-900  rounded"
                  >
                    <option value="Switzerland">01</option>
                    <option value="America">02</option>
                    <option value="Australia">03</option>
                    <option value="Australia">04</option>
                    <option value="Australia">05</option>
                  </select>
                  <div className="z-30 right-2 cursor-pointer  absolute  top-2.5 pointer-events-none">
                    <Image
                      src="/down.png"
                      width={20}
                      height={20}
                      className=""
                    />
                  </div>
                </div>
                <h1 className="text-xl font-bold text-gray-800 mt-24 ml-4">
                  $9,000
                </h1>
              </div>
            </div>
          </div>
          <div className="w-5/12 bg-gray-50 relative ">
            <h1 className="text-4xl text-gray-800 font-bold mt-10 ml-10">
              Summary
            </h1>
            <div className=" ">
              <div className=" absolute top-36 w-full">
                <div className="flex px-12">
                  <div className="text-gray-800 font-semibold text-xl">
                    Subtotal
                  </div>
                  <div className="text-gray-800 ml-auto font-semibold text-xl">
                    $9,000
                  </div>
                </div>
                <div className="flex px-12 mt-6">
                  <div className="text-gray-800 font-semibold text-xl">
                    Shipping
                  </div>
                  <div className="text-gray-800 ml-auto font-semibold text-xl">
                    $30
                  </div>
                </div>{" "}
                <div className="flex px-12 mt-6">
                  <div className="text-gray-800 font-semibold text-xl">Tax</div>
                  <div className="text-gray-800 ml-auto font-semibold text-xl">
                    $39
                  </div>
                </div>
              </div>
              <div className="  absolute bottom-16 w-full">
                <div className="flex px-12">
                  <div className="text-gray-800 font-semibold text-3xl">
                    Total
                  </div>
                  <div className="text-gray-800 ml-auto font-bold text-3xl">
                    $10,240
                  </div>
                </div>
                <div className="flex justify-center items-center px-12">
                  <Link href="/checkout">
                    <button className=" bg-gray-800 text-white mt-6 py-4 w-full hover:bg-gray-900 focus:bg-gray-800 ">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-44 mb-16 ">
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
};
export default cart;
