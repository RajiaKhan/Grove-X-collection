import Image from "next/image";
import React, { useState } from "react";
export default function Index() {
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
        <div className="flex">
          <div className="w-11/12 ">
            <h1 className="text-7xl font-bold text-gray-800">
              Keep life organized and all in one place.
            </h1>
            <h1 className="text-xl w-10/12 w-full mt-12 text-gray-600">
              Design made-to-order for private clients, with one or more
              fittings. Have a workshop (atelier) in Paris. Deliver
              Friction-Free Customer Service. Try Kayako free for 14 days.
            </h1>
            <div className="mt-8 ">
              <button className="bg-gray-800 py-3 px-12 text-white hover:bg-gray-900 focus:bg-gray-900 ">
                See More
              </button>
            </div>
            <div className="flex mt-8 gap-5">
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
            <div className="flex justify-end items-end">
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
      <div className="container mx-auto mt-32">
        <h1 className="text-3xl text-center text-gray-800 mt-12 mb-12">
          Grove X Collection
        </h1>
        <div className="flex gap-12 justify-center items-center">
          <div className="border w-11/12 px-3 py-8">
            <div className="flex justify-center items-center">
              <Image className="" src="/bed.svg" width={24} height={24} />
            </div>
            <div className="text-center text-gray-600 text-lg mt-2">
              Interior minimalism for your property
            </div>
          </div>
          <div className="border w-11/12 px-3 py-8">
            <div className="flex justify-center items-center">
              <Image className="" src="/furniture.svg" width={24} height={24} />
            </div>
            <div className="text-center text-gray-600 text-lg mt-2">
              Furniture minimalism for your property
            </div>
          </div>
          <div className="border w-11/12 px-3 py-8">
            <div className="flex justify-center items-center">
              <Image className="" src="/property.svg" width={24} height={24} />
            </div>
            <div className="text-center text-gray-600 text-lg mt-2">
              Durability for your property
            </div>
          </div>
          <div className="border w-11/12 px-3 py-8">
            <div className="flex justify-center items-center">
              <Image className="" src="/like.svg" width={24} height={24} />
            </div>
            <div className="text-center text-gray-600 text-lg mt-2">
              Design minimalism for your future
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32">
        <div className="flex gap-12 place-content-center">
          <div className=" ">
            <div className="flex gap-12">
              <div className="">
                <Image
                  className=""
                  src="/image 237.svg"
                  width={296}
                  height={345}
                />
              </div>
              <div className="">
                <Image
                  className=""
                  src="/image 238.svg"
                  width={296}
                  height={345}
                />
              </div>
              <div className="">
                <Image
                  className=""
                  src="/image 239.svg"
                  width={296}
                  height={345}
                />
              </div>
            </div>
            <div className="mt-7">
              <div className="flex">
                <div className="">
                  <h1 className="text-gray-600 w-8/12">
                    Take a peek at our newly added dresses for winters! Get in
                    quic as these hot items are sure to move fast.{" "}
                  </h1>
                </div>
                <div className="ml-auto">
                  <div className="flex gap-3">
                    <div className="">
                      <Image
                        className=""
                        src="/starsss.svg"
                        width={142}
                        height={24}
                      />
                    </div>
                    <div className="">
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
                  <button className="text-white bg-gray-800 py-4 px-16">
                    {" "}
                    Join now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Image className="" src="/image 240.svg" width={296} height={529} />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32 ">
        <h1 className="text-center font-bold text-3xl text-gray-800">
          Shop By Category
        </h1>
        <div className="flex gap-12 justify-center items-center mt-12">
          <div className="bg-gray-300 w-11/12 px-3 py-4">
            <div className="text-center text-gray-600 text-lg mt-2">Men</div>
          </div>
          <div className="bg-gray-300 w-11/12 px-3 py-4">
            <div className="text-center text-gray-600 text-lg mt-2">Women</div>
          </div>
          <div className="bg-gray-300 w-11/12 px-3 py-4">
            <div className="text-center text-gray-600 text-lg mt-2">Shoes</div>
          </div>
        </div>
        <div className="flex gap-12 justify-center items-center mt-12">
          <div className="bg-gray-300 w-11/12 px-3 py-4">
            <div className="text-center text-gray-600 text-lg mt-2">
              Accossries
            </div>
          </div>
          <div className="bg-gray-300 w-11/12 px-3 py-4">
            <div className="text-center text-gray-600 text-lg mt-2">Bags</div>
          </div>
          <div className="bg-gray-300 w-11/12 px-3 py-4">
            <div className="text-center text-gray-600 text-lg mt-2">
              Watches
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
