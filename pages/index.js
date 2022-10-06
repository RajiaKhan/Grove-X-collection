import Image from "next/image";
import Link from "next/link";
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
              <Link href="/description">
                <button className="bg-gray-800 py-3 px-12 text-white hover:bg-gray-900 focus:bg-gray-900 ">
                  See More
                </button>
              </Link>
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
        <h1 className="text-3xl text-center font-bold  text-gray-800 mt-12 mb-12">
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
                  <Link href="/cart">
                    <button className="text-white bg-gray-800 py-3 px-16">
                      {" "}
                      Join now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Image className="" src="/image 240.svg" width={296} height={529} />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 mb-16">
        <div className="flex justify-center items-center gap-10">
          <div className="">
            <h1 className="text-4xl text-gray-800 font-bold">New Arrival</h1>
          </div>
          <div className="">
            <Image
              className=""
              src="/photo-1.svg"
              width={321.33}
              height={380}
            />
          </div>
          <div className="">
            <Image
              className=""
              src="/photo-2.svg"
              width={321.33}
              height={380}
            />
          </div>
          <div className="">
            <Image
              className=""
              src="/photo-3.svg"
              width={321.33}
              height={380}
            />
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
          <div className="bg-gray-300 w-11/12 px-3 py-4 cursor-pointer">
            <Link href="/grid-2">
              <div className="text-center text-gray-600 text-lg mt-2">
                Watches
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-32 mt-32">
        <h1 className="text-center text-5xl font-bold">Comfiest Sofa Seats</h1>
        <div className=" flex justify-center items-center">
          <h1 className=" text-center text-xl mt-6 w-6/12 font-semibold px-4 text-gray-700">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex mt-12 gap-5">
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
            <div className="w-10/12  pt-4 ">
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
      <div className="container mx-auto mb-32">
        <div className="border-b">
          <h1 className="text-gray-600">Home - Men</h1>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Watches</h1>
        </div>
        <div className="flex mt-8">
          <div className="">
            <h1 className="text-xl font-semibold text-gray-700">485 Results</h1>
          </div>
          <div className="ml-auto">
            <div className="border cursor-pointer flex gap-10 py-2 px-3">
              <h1 className="text-gray-700">Recommended</h1>
              <div className="ml-auto">
                <Image
                  className=""
                  src="/Vector (2).svg"
                  width={12.67}
                  height={13.33}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-12 mt-12">
          <div className="w-11/12 border-t ">
            <div className="flex border-b py-3">
              <div className="">
                <h1 className="text-gray-800 font-bold">Catagory</h1>
                <h1>Premium</h1>
              </div>
              <div className="ml-auto mt-3">
                <Image
                  className=""
                  src="/Vector (2).svg"
                  width={12.67}
                  height={13.33}
                />
              </div>
            </div>
            <div className="flex border-b py-3">
              <div className="">
                <h1 className="text-gray-800 font-bold">Designer</h1>
                <h1>Jackson James</h1>
              </div>
              <div className="ml-auto mt-3">
                <Image
                  className=""
                  src="/Vector (2).svg"
                  width={12.67}
                  height={13.33}
                />
              </div>
            </div>
            <div className="flex border-b py-3">
              <div className="">
                <h1 className="text-gray-800 font-bold">Color</h1>
                <h1>All</h1>
              </div>
              <div className="ml-auto mt-3">
                <Image
                  className=""
                  src="/Vector (2).svg"
                  width={12.67}
                  height={13.33}
                />
              </div>
            </div>
          </div>
          <div className="w-11/12">
            <div className="">
              <div className="">
                <Image src="/watch-1.svg" width={296} height={360} />
              </div>
              <h1 className="text-gray-800 font-bold text-2xl mt-2">
                Rolex Fossil
              </h1>
              <h1 className="text-gray-600 mt-3">
                “Now is the winter of our discontent Made glorious summer by
                this sun of York”
              </h1>
              <h1 className="text-lg text-gray-800 font-semibold mt-4">$ 55</h1>
            </div>
            <div className="mt-12">
              <div className="">
                <div className="">
                  <Image src="/watch-2.svg" width={296} height={360} />
                </div>
                <h1 className="text-gray-800 font-bold text-2xl mt-2">
                  Rolex Fossil
                </h1>
                <h1 className="text-gray-600 mt-3">
                  “Now is the winter of our discontent Made glorious summer by
                  this sun of York”
                </h1>
                <h1 className="text-lg text-gray-800 font-semibold mt-4">
                  $ 55
                </h1>
              </div>
            </div>
          </div>
          <div className="w-11/12">
            <div className="">
              <div className="">
                <Image src="/watch-3.svg" width={296} height={360} />
              </div>
              <h1 className="text-gray-800 font-bold text-2xl mt-2">
                Rolex Fossil
              </h1>
              <h1 className="text-gray-600 mt-3">
                “Now is the winter of our discontent Made glorious summer by
                this sun of York”
              </h1>
              <h1 className="text-lg text-gray-800 font-semibold mt-4">$ 55</h1>
            </div>
            <div className="mt-12">
              <div className="">
                <div className="">
                  <Image src="/watch-4.svg" width={296} height={360} />
                </div>
                <h1 className="text-gray-800 font-bold text-2xl mt-2">
                  Rolex Fossil
                </h1>
                <h1 className="text-gray-600 mt-3">
                  “Now is the winter of our discontent Made glorious summer by
                  this sun of York”
                </h1>
                <h1 className="text-lg text-gray-800 font-semibold mt-4">
                  $ 55
                </h1>
              </div>
            </div>
          </div>
          <div className="w-11/12">
            <div className="">
              <div className="">
                <Image src="/watch-5.svg" width={296} height={360} />
              </div>
              <h1 className="text-gray-800 font-bold text-2xl mt-2">
                Rolex Fossil
              </h1>
              <h1 className="text-gray-600 mt-3">
                “Now is the winter of our discontent Made glorious summer by
                this sun of York”
              </h1>
              <h1 className="text-lg text-gray-800 font-semibold mt-4">$ 55</h1>
            </div>
            <div className="mt-12">
              <div className="">
                <div className="">
                  <Image src="/watch-6.svg" width={296} height={360} />
                </div>
                <h1 className="text-gray-800 font-bold text-2xl mt-2">
                  Rolex Fossil
                </h1>
                <h1 className="text-gray-600 mt-3">
                  “Now is the winter of our discontent Made glorious summer by
                  this sun of York”
                </h1>
                <h1 className="text-lg text-gray-800 font-semibold mt-4">
                  $ 55
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-12 mb-32">
        <div className="">
          <h1 className="text-gray-800 text-3xl font-semibold ">
            Our Partners
          </h1>
        </div>
        <div className="flex mt-12 gap-16">
          <div className="flex w-11/12">
            <div className="w-3/12">
              <Image className="" src="/vogue.svg" width={86} height={24} />
            </div>
            <div className="text-lg text-gray-600 w-11/12">
              “ It was an absolute pleasure working with them. They are the
              best, Highly Recommended! ”
            </div>
          </div>
          <div className="flex w-11/12 gap-3">
            <div className="w-4/12">
              <Image className="" src="/BBC Logo.svg" width={86} height={24} />
            </div>
            <div className="text-lg text-gray-600">
              <h1 className=" w-8/12">
                “Love this! Does exactly what it is supposed to do and so far
                without any real issues.”
              </h1>
            </div>
          </div>
          <div className="flex w-11/12 gap-3">
            <div className="w-5/12">
              <Image
                className=""
                src="/British GQ Logo.svg"
                width={86}
                height={24}
              />
            </div>
            <div className="text-lg text-gray-600 ">
              <h1 className="w-10/12">
                “Thanks. I am fully satisfied and would recommend buying from
                them as they have made my life so much easier :) ”
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-12">
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
          <h1 className="text-center text-5xl text-gray-800 font-bold">
            Follow Us On Instagram
          </h1>
          <h1 className="text-center text-gray-700 text-xl mt-8">
            Follow Us on Instagram @ourinstagramname and tag us to get Featured
            on our timeline{" "}
          </h1>
          <div className="flex justify-center items-center mt-10">
            <button className="flex bg-gray-800 px-12 py-4 hover:bg-gray-900 focus:bg-gray-900 gap-4 justify-center items-center ">
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
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-12 mt-16">
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
