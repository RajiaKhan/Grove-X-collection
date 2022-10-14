import Image from "next/image";
import Link from "next/link";
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
      <div className="container mx-auto  mt-4 lg:mt-12 xl:mt-12 2xl:mt-12  px-4">
        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center">
          <div className="w-11/12 ">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl 2xl:text-7xl xl:text-6xl text-center lg:text-left xl:text-left 2xl:text-left font-bold text-gray-800">
              Keep life organized and all in one place.
            </h1>
            <h1 className="text-xs md:text-xl lg:text-sm 2xl:text-xl xl:text-md text-center  lg:text-left xl:text-left 2xl:text-left  lg:w-10/12 xl:w-10/12 2xl:w-10/12  w-full  mt-5 lg:mt-12 xl:mt-12 2xl:mt-12 text-gray-600">
              Design made-to-order for private clients, with one or more
              fittings. Have a workshop (atelier) in Paris. Deliver
              Friction-Free Customer Service. Try Kayako free for 14 days.
            </h1>
            <div className=" mt-5 lg:mt-8 xl:mt-8 2xl:mt-8 ">
              <Link href="/description">
                <button className="hidden xl:block 2xl:block lg:block bg-gray-800 py-3 px-12  text-white hover:bg-gray-900 focus:bg-gray-900 ">
                  See More
                </button>
              </Link>
              <Link href="/description">
                <button className="bg-gray-800 block xl:hidden 2xl:hidden lg:hidden  py-3 w-full flex justify-center items-center  text-white hover:bg-gray-900 focus:bg-gray-900 ">
                  See More
                </button>
              </Link>
            </div>
            <div className="flex mb-4 mt-4 lg:mt-8 xl:mt-8 2xl:mt-8  justify-center items-center xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start lg:justify-start lg:items-start  gap-5">
              <div className="cursor-pointer">
                <Image className="" src="/Frame.svg" width={24} height={24} />
              </div>
              <div className="cursor-pointer">
                <Image
                  className=""
                  src="/Frame (1).svg"
                  width={24}
                  height={24}
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  className=""
                  src="/Frame (2).svg"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className="w-11/12 ">
            <div className="flex justify-center items-center  xl:justify-end xl:items-end lg:justify-end lg:items-end 2xl:justify-end 2xl:items-end ">
              <Image
                className=""
                src="/hero image.svg"
                width={624}
                height={424}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 lg:mt-32 xl:mt-32 md:mt-20 2xl:mt-32">
        <div className="block lg:block xl:block 2xl:block md:hidden">
          <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row  gap-8 justify-center items-center ">
            <div className="border w-11/12 px-3 py-8">
              <div className="flex  justify-center items-center">
                <Image className="" src="/bed.svg" width={24} height={24} />
              </div>
              <div className="text-center text-xs sm:text-sm md:text-md lg:text-xs xl:text-sm 2xl:text-lg text-gray-600  mt-2">
                Interior minimalism for your property
              </div>
            </div>
            <div className="border w-11/12 px-3 py-8">
              <div className="flex justify-center items-center">
                <Image
                  className=""
                  src="/furniture.svg"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-center text-xs lg:text-xs xl:text-sm 2xl:text-lg  text-gray-600 mt-2">
                Furniture minimalism for your property
              </div>
            </div>
            <div className="border w-11/12 px-3 py-8">
              <div className="flex justify-center items-center">
                <Image
                  className=""
                  src="/property.svg"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-center text-xs lg:text-xs xl:text-sm 2xl:text-lg   text-gray-600 mt-2">
                Durability for your property
              </div>
            </div>
            <div className="border w-11/12 px-3 py-8">
              <div className="flex justify-center items-center">
                <Image className="" src="/like.svg" width={24} height={24} />
              </div>
              <div className="text-center text-xs lg:text-xs xl:text-sm 2xl:text-lg   text-gray-600 mt-2 ">
                Design minimalism for your future
              </div>
            </div>
          </div>
        </div>
        <div className="hidden  md:block lg:hidden xl:hidden 2xl:hidden px-12">
          <div className="flex justify-center items-center gap-8 ">
            <div className="border w-11/12 px-3 py-8">
              <div className="flex  justify-center items-center">
                <Image className="" src="/bed.svg" width={24} height={24} />
              </div>
              <div className="text-center text-xs sm:text-sm md:text-md lg:text-xs xl:text-sm 2xl:text-lg text-gray-600  mt-2">
                Interior minimalism for your property
              </div>
            </div>
            <div className="border w-11/12 px-3 py-8">
              <div className="flex justify-center items-center">
                <Image
                  className=""
                  src="/furniture.svg"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-center text-xs lg:text-xs xl:text-sm 2xl:text-lg  text-gray-600 mt-2">
                Furniture minimalism for your property
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="border w-11/12 px-3 py-8">
              <div className="flex justify-center items-center">
                <Image
                  className=""
                  src="/property.svg"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-center text-xs lg:text-xs xl:text-sm 2xl:text-lg   text-gray-600 mt-2">
                Durability for your property
              </div>
            </div>
            <div className="border w-11/12 px-3 py-8">
              <div className="flex justify-center items-center">
                <Image className="" src="/like.svg" width={24} height={24} />
              </div>
              <div className="text-center text-xs lg:text-xs xl:text-sm 2xl:text-lg   text-gray-600 mt-2 ">
                Design minimalism for your future
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32 hidden lg:block xl:block 2xl:block px-4">
        <h1 className="text-5xl text-center font-bold  text-gray-800 mt-12 mb-16">
          Grove X Collection
        </h1>
        <div className="flex gap-8 place-content-center">
          <div className=" ">
            <div className="flex gap-8 justify-end items-end">
              <div className="">
                <Image
                  className=""
                  src="/image 237.svg"
                  width={356}
                  height={405}
                />
              </div>
              <div className="">
                <Image
                  className=""
                  src="/image 238.svg"
                  width={356}
                  height={405}
                />
              </div>
              <div className="">
                <Image
                  className=""
                  src="/image 239.svg"
                  width={356}
                  height={405}
                />
              </div>
            </div>
            <div className="mt-7">
              <div className="flex">
                <div className="">
                  <h1 className="text-gray-600 w-8/12 ">
                    Take a peek at our newly added dresses for winters! Get in
                    quic as these hot items are sure to move fast.{" "}
                  </h1>
                </div>
                <div className="ml-auto">
                  <div className="flex  gap-3">
                    <div className="">
                      <Image
                        className=""
                        src="/starsss.svg"
                        width={142}
                        height={24}
                      />
                    </div>
                    <div className="w-8/12">
                      <h1 className="text-gray-700 underline cursor-pointer">
                        See all 18 reviews
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex mt-12 gap-8">
                <div className="w-3/12">
                  <div className="">
                    <label class="relative block">
                      <span className="sr-only">Search</span>
                      <span className="absolute inset-y-0 left-0 flex items-center "></span>
                      <input
                        className="border placeholder:text-slate-400 block bg-white  w-full border border-slate-300  py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Full Name"
                        type="text"
                        name="search"
                      />
                    </label>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="">
                    <label class="relative block">
                      <span className="sr-only">Search</span>
                      <span className="absolute inset-y-0 left-0 flex items-center "></span>
                      <input
                        className="border placeholder:text-slate-400 block bg-white w-full border border-slate-300  py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Email address"
                        type="text"
                        name="search"
                      />
                    </label>
                  </div>
                </div>
                <div className="">
                  <Link href="/cart">
                    <button className="text-white bg-gray-800 py-3 px-16 hover:bg-gray-900 focus:bg-gray-900">
                      {" "}
                      Join now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Image className="" src="/image 240.svg" width={356} height={609} />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12  block lg:hidden xl:hidden 2xl:hidden">
        <h1 className="text-3xl text-center font-bold  text-gray-800 ">
          Grove X Collection
        </h1>
        <h1 className="text-gray-600  text-center mt-5 text-sm">
          Take a peek at our newly added dresses for winters! Get in quic as
          these hot items are sure to move fast.{" "}
        </h1>
        <div className=" flex justify-center items-center mt-5">
          <div className="w-full md:w-8/12">
            <div className="">
              <label class="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center "></span>
                <input
                  className="border placeholder:text-slate-400 block bg-white  w-full border border-slate-300  py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Full Name"
                  type="text"
                  name="search"
                />
              </label>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center mt-5">
          <div className="w-full md:w-8/12">
            <div className="">
              <label class="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center "></span>
                <input
                  className="border placeholder:text-slate-400 block bg-white  w-full border border-slate-300  py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Email address"
                  type="text"
                  name="search"
                />
              </label>
            </div>
          </div>
        </div>
        <div className=" mt-4 flex justify-center items-center">
          <Link href="/cart">
            <button className="text-white bg-gray-800 py-3 w-full md:w-8/12 hover:bg-gray-900 focus:bg-gray-900">
              {" "}
              Join now
            </button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col  mt-6 gap-5 justify-center items-center">
            <div className="">
              <Image
                className=""
                src="/image 237.svg"
                width={356}
                height={405}
              />
            </div>
            <div className="">
              <Image
                className=""
                src="/image 238.svg"
                width={356}
                height={405}
              />
            </div>
            <div className="">
              <Image
                className=""
                src="/image 239.svg"
                width={356}
                height={405}
              />
            </div>
          </div>

          <div className=" mt-0 md:mt-6 justify-center items-center md:justify-start md:items-start flex ">
            <Image className="" src="/image 240.svg" width={356} height={606} />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5 lg:mt-20 xl:mt-20 2xl:mt-20  mb-16 px-2 ">
        <div className="flex  flex-col lg:flex-row xl:flex-row 2xl:flex-row place-content-center gap-8 justify-center items-center">
          <div className="w-full lg:w-1/5 xl:w-1/5 2xl:w-1/5  mt-12">
            <h1 className="text-3xl lg:text-xl xl:text-3xl 2xl:text-5xl  text-center lg:text-left xl:text-left  2xl:text-left text-gray-800 font-bold ">
              New Arrival
            </h1>
          </div>
          <div className="">
            <Image
              className=""
              src="/photo-1.svg"
              width={421.33}
              height={480}
            />
          </div>
          <div className="">
            <Image
              className=""
              src="/photo-2.svg"
              width={421.33}
              height={480}
            />
          </div>
          <div className="">
            <Image
              className=""
              src="/photo-3.svg"
              width={421.33}
              height={480}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:mt-32 xl:mt-32 2xl:mt-32 md:mt-32 mt-6 mb-12 ">
        <h1 className="text-center font-bold text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl  text-gray-800">
          Shop By Category
        </h1>
        <div className="flex  flex-col lg:flex-row xl:flex-row 2xl:flex-row  gap-12 justify-center items-center place-content-center mt-20">
          <div className="bg-gray-100 hover:bg-gray-300   w-11/12 px-3 py-4">
            <div className="text-center text-gray-600 text-lg mt-2">Men</div>
          </div>
          <div className="bg-gray-100 hover:bg-gray-300  w-11/12 px-3 py-4">
            <div className="text-center text-gray-600 text-lg mt-2">Women</div>
          </div>
          <div className="bg-gray-100 hover:bg-gray-300  w-11/12 px-3 py-4">
            <div className="text-center text-gray-600 text-lg mt-2">Shoes</div>
          </div>
        </div>
        <div className="flex  flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-12 justify-center items-center mt-12">
          <div className="bg-gray-100 hover:bg-gray-300  w-11/12 px-3 py-4">
            <div className="text-center text-gray-600 text-lg mt-2">
              Accossries
            </div>
          </div>
          <div className="bg-gray-100 hover:bg-gray-300  w-11/12 px-3 py-4">
            <div className="text-center text-gray-600 text-lg mt-2">Bags</div>
          </div>
          <div className="bg-gray-100 hover:bg-gray-300  w-11/12 px-3 py-4 cursor-pointer">
            <Link href="/grid-2">
              <div className="text-center text-gray-600 text-lg mt-2">
                Watches
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto block lg:hidden xl:hidden 2xl:hidden px-4">
        <h1 className="text-center text-2xl font-bold">Comfiest Sofa Seats</h1>
        <div className="flex justify-center items-center">
          <h1 className=" text-center text-center  mt-6 text-sm font-semibold px-4 text-gray-700">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </h1>
        </div>
        <div className="justify-center items-center flex mt-6">
          <Image className="" src="/image-4.svg" width={366} height={393} />
        </div>
        <div className="flex place-content-center justify-center items-center  ">
          <div className="flex  justify-center items-center mt-12 gap-5 place-content-center ml-0 xl:ml-0 lg:ml-0 2xl:ml-12">
            <div className="w-11/12 ">
              <div className="">
                <div className="flex gap-3  px-4">
                  <div className="mt-2">
                    <Image
                      className=""
                      src="/Frame 81.svg"
                      width={15.11}
                      height={14.17}
                    />
                  </div>
                  <div className="">
                    <h1 className="text-2xl text-gray-800 font-bold mt-1">
                      Plush Cushions
                    </h1>
                  </div>
                </div>
                <h1 className="text-gray-600 w-11/12 px-4 font-semibold mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </h1>
              </div>
              <div className="">
                <div className="mt-16">
                  <div className="flex gap-3  px-4">
                    <div className="mt-2 ">
                      <Image
                        className=""
                        src="/Frame 81.svg"
                        width={15.11}
                        height={14.17}
                      />
                    </div>
                    <div className="">
                      <h1 className="text-2xl text-gray-800 font-bold mt-1">
                        Stain Resistant
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-600 w-11/12 px-4 font-semibold mt-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="mt-16">
                  <div className="flex gap-3   px-4">
                    <div className="mt-3">
                      <Image
                        className=""
                        src="/Frame 81.svg"
                        width={15.11}
                        height={14.17}
                      />
                    </div>
                    <div className="">
                      <h1 className="text-2xl text-gray-800 font-bold mt-1">
                        Modular System
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-600 w-11/12 px-4 font-semibold mt-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </h1>
                </div>
              </div>
              <div className="mt-12">
                <div className="flex gap-3  px-4">
                  <div className="mt-2">
                    <Image
                      className=""
                      src="/Frame 81.svg"
                      width={15.11}
                      height={14.17}
                    />
                  </div>
                  <div className="">
                    <h1 className="text-2xl text-gray-800 font-bold mt-1">
                      Plush Cushions
                    </h1>
                  </div>
                </div>
                <h1 className="text-gray-600 w-11/12 px-4 font-semibold mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </h1>
              </div>
              <div className="">
                <div className="mt-16">
                  <div className="flex gap-3  px-4">
                    <div className="mt-2 ">
                      <Image
                        className=""
                        src="/Frame 81.svg"
                        width={15.11}
                        height={14.17}
                      />
                    </div>
                    <div className="">
                      <h1 className="text-2xl text-gray-800 font-bold mt-1">
                        Stain Resistant
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-600 w-11/12 px-4 font-semibold mt-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="mt-16">
                  <div className="flex gap-3   px-4">
                    <div className="mt-3">
                      <Image
                        className=""
                        src="/Frame 81.svg"
                        width={15.11}
                        height={14.17}
                      />
                    </div>
                    <div className="">
                      <h1 className="text-2xl text-gray-800 font-bold mt-1">
                        Modular System
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-600 w-11/12 px-4 font-semibold mt-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-32 mt-32 hidden lg:block xl:block 2xl:block px-2">
        <h1 className="text-center text-5xl font-bold">Comfiest Sofa Seats</h1>
        <div className=" flex justify-center items-center  ">
          <h1 className=" text-center text-xl mt-6 w-6/12 font-semibold px-4 text-gray-700">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </h1>
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex mt-12 gap-5 place-content-center ml-0 xl:ml-0 lg:ml-0 2xl:ml-12">
            <div className="w-11/12 ">
              <div className="">
                <div className="flex gap-3  px-4">
                  <div className="mt-2">
                    <Image
                      className=""
                      src="/Frame 81.svg"
                      width={15.11}
                      height={14.17}
                    />
                  </div>
                  <div className="">
                    <h1 className="text-2xl text-gray-800 font-bold mt-1">
                      Plush Cushions
                    </h1>
                  </div>
                </div>
                <h1 className="text-gray-600 w-11/12 px-4 font-semibold mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </h1>
              </div>
              <div className="">
                <div className="mt-16">
                  <div className="flex gap-3  px-4">
                    <div className="mt-2 ">
                      <Image
                        className=""
                        src="/Frame 81.svg"
                        width={15.11}
                        height={14.17}
                      />
                    </div>
                    <div className="">
                      <h1 className="text-2xl text-gray-800 font-bold mt-1">
                        Stain Resistant
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-600 w-11/12 px-4 font-semibold mt-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="mt-16">
                  <div className="flex gap-3   px-4">
                    <div className="mt-">
                      <Image
                        className=""
                        src="/Frame 81.svg"
                        width={15.11}
                        height={14.17}
                      />
                    </div>
                    <div className="">
                      <h1 className="text-2xl text-gray-800 font-bold mt-1">
                        Modular System
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-600 w-11/12 px-4 font-semibold mt-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-10/12  pt-4">
              <Image className="" src="/image-4.svg" width={366} height={393} />
            </div>
            <div className="w-11/12 ">
              <div className="">
                <div className="flex gap-3  px-4">
                  <div className="mt-2">
                    <Image
                      className=""
                      src="/Frame 81.svg"
                      width={15.11}
                      height={14.17}
                    />
                  </div>
                  <div className="">
                    <h1 className="text-2xl text-gray-800 font-bold mt-1">
                      Modular System
                    </h1>
                  </div>
                </div>
                <h1 className="text-gray-600 w-11/12 px-4 font-semibold mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </h1>
              </div>{" "}
              <div className="mt-16">
                <div className="flex gap-3  px-4">
                  <div className="mt-2">
                    <Image
                      className=""
                      src="/Frame 81.svg"
                      width={15.11}
                      height={14.17}
                    />
                  </div>
                  <div className="">
                    <h1 className="text-2xl text-gray-800 font-bold mt-1">
                      Strong Hardware
                    </h1>
                  </div>
                </div>
                <h1 className=" w-11/12 px-4 font-semibold mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </h1>
              </div>{" "}
              <div className="mt-16">
                <div className="flex gap-3  px-4">
                  <div className="mt-2">
                    <Image
                      className=""
                      src="/Frame 81.svg"
                      width={15.11}
                      height={14.17}
                    />
                  </div>
                  <div className="">
                    <h1 className="text-2xl text-gray-800 font-bold mt-1">
                      Modular System
                    </h1>
                  </div>
                </div>
                <h1 className="text-gray-600 w-11/12 px-4 font-semibold mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 mb-32 px-4">
        <div className="">
          <h1 className="text-gray-800 text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold text-center lg:text-left xl:text-left 2xl:text-left ">
            Our Partners
          </h1>
        </div>
        <div className="container mt-8 mx-auto block xl:hidden 2xl:hidden lg:hidden ">
          <div className=" justify-center items-center flex mt-12">
            <Image className="" src="/vogue.svg" width={86} height={24} />
          </div>
          <div className="text-sm text-gray-500 justify-center items-center flex mt-3">
            <h1 className=" w-full sm:w-6/12 md:w-6/12 text-center">
              “ It was an absolute pleasure working with them. They are the
              best, Highly Recommended! ”
            </h1>
          </div>
          <div className=" justify-center items-center flex mt-12">
            <Image className="" src="/BBC Logo.svg" width={84} height={24} />
          </div>
          <div className=" text-sm text-gray-500 justify-center items-center flex mt-3">
            <h1 className=" w-11/12 sm:w-6/12 md:w-6/12 text-center ">
              “Love this! Does exactly what it is supposed to do and so far
              without any real issues.”
            </h1>
          </div>
          <div className="justify-center items-center flex mt-12">
            <Image
              className=""
              src="/British GQ Logo.svg"
              width={84}
              height={24}
            />
          </div>
          <div className=" text-sm text-gray-500 justify-center items-center flex mt-3 ">
            <h1 className=" sm:w-6/12 md:w-6/12 text-center ">
              “Thanks. I am fully satisfied and would recommend buying from them
              as they have made my life so much easier :) ”
            </h1>
          </div>
        </div>
        <div className="hidden xl:block 2xl:block lg:block">
          <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row mt-12 gap-16 justify-center items-center">
            <div className="flex w-11/12 gap-3  ">
              <div className="  ">
                <Image className="" src="/vogue.svg" width={120} height={40} />
              </div>
              <div className="text-lg lg:text-xs xl:text-sm 2xl:text-lg  text-gray-500  w-full lg:w-11/12 xl:w-11/12 2xl:w-11/12 ">
                “ It was an absolute pleasure working with them. They are the
                best, Highly Recommended! ”
              </div>
            </div>
            <div className="flex w-11/12 gap-3 ml-12  lg:justify-start lg:items-start  xl:justify-start xl:items-start  2xl:justify-start 2xl:items-start justify-center items-center  flex-col lg:flex-row xl:flex-row 2xl:flex-row">
              <div className="">
                <Image
                  className=""
                  src="/BBC Logo.svg"
                  width={190}
                  height={60}
                />
              </div>
              <div className="t text-gray-500">
                <h1 className=" w-10/12 text-lg lg:text-xs xl:text-sm 2xl:text-lg  ">
                  “Love this! Does exactly what it is supposed to do and so far
                  without any real issues.”
                </h1>
              </div>
            </div>
            <div className="flex w-11/12 gap-3   flex-col lg:flex-row xl:flex-row 2xl:flex-row">
              <div className="">
                <Image
                  className=""
                  src="/British GQ Logo.svg"
                  width={210}
                  height={94}
                />
              </div>
              <div className="text-lg text-lg lg:text-xs xl:text-sm 2xl:text-lg   text-gray-500 ">
                <h1 className="">
                  “Thanks. I am fully satisfied and would recommend buying from
                  them as they have made my life so much easier :) ”
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex  flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center gap-12">
          <div className="">
            <Image
              className=""
              src="/image 13.svg"
              width={405.33}
              height={380}
            />
          </div>
          <div className="">
            <Image
              className=""
              src="/image 15.svg"
              width={405.33}
              height={380}
            />
          </div>
          <div className="">
            <Image
              className=""
              src="/image 14.svg"
              width={405.33}
              height={380}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-12">
          <h1 className="text-center text-2xl lg:text-5xl  xl:text-5xl 2xl:text-5xl md:text-5xl  text-gray-800 font-bold">
            Follow Us On Instagram
          </h1>
          <h1 className="text-center text-gray-700 text-sm lg:text-xl  xl:text-xl xl:text-xl md:text-xl  mt-8">
            Follow Us on Instagram @ourinstagramname and tag us to get Featured
            on our timeline{" "}
          </h1>
          <div className="flex  justify-center items-center mt-10">
            <button className="flex  bg-gray-800 px-12 py-4 hover:bg-gray-900 focus:bg-gray-900 gap-4 justify-center items-center ">
              <div className="flex justify-center  items-center ">
                <Image
                  className=""
                  src="/logo-insta.svg"
                  width={24}
                  height={24}
                />
              </div>
              <div className="">
                <h1 className="text-white text-semibold ">
                  Follow Us On Instagram
                </h1>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex  flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center gap-12 mt-16">
          <div className="">
            <Image
              className=""
              src="/image 16.svg"
              width={405.33}
              height={380}
            />
          </div>
          <div className="">
            <Image
              className=""
              src="/image 17.svg"
              width={405.33}
              height={380}
            />
          </div>
          <div className="">
            <Image
              className=""
              src="/image 18.svg"
              width={405.33}
              height={380}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32 mb-16 ">
        <div className="">
          <div className="grid lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1   gap-4  border-t border-b py-20 pl-5">
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
              <h1 className=" cursor-pointer text-lg text-gray-600 mt-4 font-semibold  mb-3 lg:mb-20 md:mb-20 xl:mb-20 2xl:mb-20  pb-2">
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
