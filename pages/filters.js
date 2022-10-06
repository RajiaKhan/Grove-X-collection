import Image from "next/image";
import React, { useState } from "react";
export default function Index() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="justify-between mx-auto items-center  ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 container mx-auto ">
            <div className="md:py-12 py-9 container mx-auto ">
              <p className="text-sm leading-3 text-gray-600 font-normal mb-2 dark:text-white">
                Home - Men - Products - Filters
              </p>
              <div className="flex justify-between items-center ">
                <div className="">
                  <h2 className="lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold dark:text-white">
                    Watches
                  </h2>
                  <p className="text-xl mt-5 leading-5 text-gray-600 font-medium dark:text-white ">
                    09 Products
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <button
                className="p-2 text-gray-700 rounded-md outline-none "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <button className="cursor-pointer sm:flex hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center dark:bg-gray-50 dark:text-gray-900 dark:hover:text-gray-900 dark:hover:bg-gray-200">
                    <img
                      className="dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter3-svg1.svg"
                      alt="filters"
                    />
                    Filters
                  </button>
                ) : (
                  <button className="cursor-pointer sm:flex hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center dark:bg-gray-50 dark:text-gray-900 dark:hover:text-gray-900 dark:hover:bg-gray-200">
                    <img
                      className="dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter3-svg1.svg"
                      alt="filters"
                    />
                    Filters
                  </button>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`  ${navbar ? "block" : "hidden"}`}>
            <div className="w-full  bg-gray-50">
              <div
                id="filterSection"
                className="relative lg:px-20 md:px-6 py-10 px-8 bg-gray-50 "
              >
                <div className="w-full">
                  <div className=" container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-y-0 md:gap-y-24 gap-y-14 ">
                    <div
                      onclick="closeFilterSection()"
                      className="cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4"
                    >
                      <img
                        className="mr-2 dark:hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter3-svg2.svg"
                        alt="cross"
                      />
                      <img
                        className="mr-2 hidden dark:block"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter3-svg2dark.svg"
                        alt="cross"
                      />
                    </div>

                    <div className="flex flex-col space-y-8 justify-start items-start">
                      <div className="flex gap-2">
                        <Image src="/Frame (4).svg" width={24} height={24} />
                        <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 dark:text-white">
                          Colors
                        </p>
                      </div>
                      <div className="flex space-x-2 justify-center items-center">
                        <div className="w-4 h-4 rounded-full bg-white shadow"></div>
                        <p className="text-base leading-4 text-gray-600 font-normal dark:text-white">
                          White
                        </p>
                      </div>
                      <div className="flex space-x-2 justify-center items-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600 shadow"></div>
                        <p className="text-base leading-4 text-gray-600 font-normal dark:text-white">
                          Blue
                        </p>
                      </div>
                      <div className="flex space-x-2 justify-center items-center">
                        <div className="w-4 h-4 rounded-full bg-red-600 shadow"></div>
                        <p className="text-base leading-4 text-gray-600 font-normal dark:text-white">
                          Red
                        </p>
                      </div>
                      <div className="flex space-x-2 justify-center items-center">
                        <div className="w-4 h-4 rounded-full bg-indigo-600 shadow"></div>
                        <p className="text-base leading-4 text-gray-600 font-normal dark:text-white">
                          Indigo
                        </p>
                      </div>
                      <div className="flex space-x-2 justify-center items-center">
                        <div className="w-4 h-4 rounded-full bg-black shadow"></div>
                        <p className="text-base leading-4 text-gray-600 font-normal dark:text-white">
                          Black
                        </p>
                      </div>
                      <div className="flex space-x-2 justify-center items-center">
                        <div className="w-4 h-4 rounded-full bg-purple-600 shadow"></div>
                        <p className="text-base leading-4 text-gray-600 font-normal dark:text-white">
                          Purple
                        </p>
                      </div>
                      <div className="flex space-x-2 justify-center items-center">
                        <div className="w-4 h-4 rounded-full bg-gray-600 shadow"></div>
                        <p className="text-base leading-4 text-gray-600 font-normal dark:text-white">
                          Grey
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-8 lg:justify-start lg:items-start md:justify-start md:items-center  border-l px-16">
                      <div className="flex flex-col space-y-8 justify-start items-start">
                        <div className="flex gap-2">
                          <Image src="/Frame (5).svg" width={24} height={24} />
                          <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 dark:text-white">
                            Material
                          </p>
                        </div>
                        <div className="flex justify-center items-center">
                          <input
                            className="w-4 h-4 mr-2"
                            type="checkbox"
                            id="Leather"
                            name="Leather"
                            value="Leather"
                          />
                          <div className="inline-block">
                            <div className="flex space-x-6 justify-center items-center">
                              <label
                                className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                                for="Leather"
                              >
                                Leather Band
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <input
                            className="w-4 h-4 mr-2"
                            type="checkbox"
                            id="Wool"
                            name="Wool"
                            value="Wool"
                          />
                          <div className="inline-block">
                            <div className="flex space-x-6 justify-center items-center">
                              <label
                                className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                                for="Wool"
                              >
                                Metal Band
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-8 lg:justify-start lg:items-start md:justify-start md:items-end  border-l px-16">
                      <div className="flex flex-col space-y-8 justify-start items-start">
                        <div className="flex gap-2">
                          <Image src="/Frame (6).svg" width={24} height={24} />
                          <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 dark:text-white">
                            Size
                          </p>
                        </div>
                        <div className="flex justify-center items-center">
                          <input
                            className="w-4 h-4 mr-2"
                            type="checkbox"
                            id="Large"
                            name="Large"
                            value="Large"
                          />
                          <div className="inline-block">
                            <div className="flex space-x-6 justify-center items-center">
                              <label
                                className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                                for="Large"
                              >
                                Large
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <input
                            className="w-4 h-4 mr-2"
                            type="checkbox"
                            id="Medium"
                            name="Medium"
                            value="Medium"
                          />
                          <div className="inline-block">
                            <div className="flex space-x-6 justify-center items-center">
                              <label
                                className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                                for="Medium"
                              >
                                Medium
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <input
                            className="w-4 h-4 mr-2"
                            type="checkbox"
                            id="Small"
                            name="Small"
                            value="Small"
                          />
                          <div className="inline-block">
                            <div className="flex space-x-6 justify-center items-center">
                              <label
                                className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                                for="Small"
                              >
                                Small
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <input
                            className="w-4 h-4 mr-2"
                            type="checkbox"
                            id="Mini"
                            name="Mini"
                            value="Mini"
                          />
                          <div className="inline-block">
                            <div className="flex space-x-6 justify-center items-center">
                              <label
                                className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                                for="Mini"
                              >
                                Mini
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-8 justify-start items-start  border-l px-16">
                      <div className="flex gap-2">
                        <Image src="/Frame (7).svg" width={24} height={24} />
                        <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 dark:text-white">
                          Collection
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <input
                          className="w-4 h-4 mr-2"
                          type="checkbox"
                          id="LS"
                          name="LS"
                          value="LS"
                        />
                        <div className="inline-block">
                          <div className="flex space-x-6 justify-center items-center">
                            <label
                              className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                              for="LS"
                            >
                              Luxe signature
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <input
                          className="w-4 h-4 mr-2"
                          type="checkbox"
                          id="LxL"
                          name="LxL"
                          value="LxL"
                        />
                        <div className="inline-block">
                          <div className="flex space-x-6 justify-center items-center">
                            <label
                              className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                              for="LxL"
                            >
                              Luxe x London
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden container mx-auto md:block relative  md:py-10 py-9  mt-12">
              <button
                onclick="applyFilters()"
                className="hover:bg-gray-700 absolute right-0  focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:text-gray-900 dark:hover:bg-gray-200"
              >
                Apply Filter
              </button>
            </div>

            <div className="block md:hidden w-full mt-16">
              <button
                onclick="applyFilters()"
                className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:text-gray-900 dark:hover:bg-gray-200"
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
            .checkbox:checked + .check-icon {
                display: flex;
            }
             
            `}
      </style>
    </>
  );
}
