import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
export default function Index() {
  return (
    <>
      <div className="container mx-auto mt-12 ">
        <div className="flex">
          <div className="">
            <h1 className="text-gray-800 text-4xl font-bold">
              The latest and greatest
            </h1>
          </div>
          <div className="ml-auto cursor-pointer">
            <Link href="/filters">
              <Image src="/Frame (3).svg" width={30} height={30} />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mt-32 gap-12">
          <div className="w-11/12">
            <div className=" flex justify-center items-center">
              <Image src="/watch.svg" width={624} height={590} />
            </div>
            <div className="flex">
              <div className="">
                <h1 className="text-gray-800 text-lg font-bold">Chanel</h1>
                <h1 className="text-gray-600 text-md font-semibold">
                  Coco Nior 100ml
                </h1>
              </div>
              <div className="ml-auto text-gray-800 text-lg font-bold">
                $175.00
              </div>
            </div>
          </div>
          <div className="w-11/12">
            <div className="flex gap-12">
              <div className="">
                <div className="">
                  <Image src="/cart-watch.svg" width={296} height={239} />
                  <div className="flex mt-4">
                    <div className="text-gray-700 text-md font-bold">
                      <h1 className="text-gray-800">YSL</h1>
                      <h1>Saint Laurnt 35ml</h1>
                    </div>
                    <div className="ml-auto text-gray-800 text-md font-bold">
                      $140.00
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Image src="/cart-watch-2.svg" width={296} height={239} />
                  <div className="flex">
                    <div className="text-gray-700 text-md font-semibold">
                      <h1 className="text-gray-800">YSL</h1>
                      <h1>Saint Laurnt 35ml</h1>
                    </div>
                    <div className="ml-auto text-gray-800 text-md font-semibold">
                      $140.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    <Image src="/cart-watch-3.svg" width={296} height={239} />
                    <div className="flex mt-4">
                      <div className="text-gray-700 text-md font-bold">
                        <h1 className="text-gray-800">YSL</h1>
                        <h1>Saint Laurnt 35ml</h1>
                      </div>
                      <div className="ml-auto text-gray-800 text-md font-bold">
                        $140.00
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Image src="/cart-watch-4.svg" width={296} height={239} />
                    <div className="flex">
                      <div className="text-gray-700 text-md font-semibold">
                        <h1 className="text-gray-800">YSL</h1>
                        <h1>Saint Laurnt 35ml</h1>
                      </div>
                      <div className="ml-auto text-gray-800 text-md font-semibold">
                        $140.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-12 mt-32">
          <div className="w-11/12">
            <div className="flex gap-12 justify-center items-center">
              <div className="">
                <div className="">
                  <Image src="/cart-perfume-1.svg" width={296} height={239} />
                  <div className="flex mt-4">
                    <div className="text-gray-700 text-md font-bold">
                      <h1 className="text-gray-800">YSL</h1>
                      <h1>Saint Laurnt 35ml</h1>
                    </div>
                    <div className="ml-auto text-gray-800 text-md font-bold">
                      $140.00
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Image src="/cart-perfume-2.svg" width={296} height={239} />
                  <div className="flex">
                    <div className="text-gray-700 text-md font-semibold">
                      <h1 className="text-gray-800">YSL</h1>
                      <h1>Saint Laurnt 35ml</h1>
                    </div>
                    <div className="ml-auto text-gray-800 text-md font-semibold">
                      $140.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    <Image src="/cart-perfume-3.svg" width={296} height={239} />
                    <div className="flex mt-4">
                      <div className="text-gray-700 text-md font-bold">
                        <h1 className="text-gray-800">YSL</h1>
                        <h1>Saint Laurnt 35ml</h1>
                      </div>
                      <div className="ml-auto text-gray-800 text-md font-bold">
                        $140.00
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Image src="/cart-perfume-4.svg" width={296} height={239} />
                    <div className="flex">
                      <div className="text-gray-700 text-md font-semibold">
                        <h1 className="text-gray-800">YSL</h1>
                        <h1>Saint Laurnt 35ml</h1>
                      </div>
                      <div className="ml-auto text-gray-800 text-md font-semibold">
                        $140.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12 ">
            <Image src="/cart-perfume.svg" width={624} height={590} />
            <div className="flex w-full 2xl:w-10/12 ">
              <div className="">
                <h1 className="text-gray-800 text-lg font-bold">Chanel</h1>
                <h1 className="text-gray-600 text-md font-semibold">
                  Coco Nior 100ml
                </h1>
              </div>
              <div className="ml-auto text-gray-800 text-lg font-bold">
                $175.00
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32 mb-16 ">
        <div className="">
          <div className="flex gap-4 border-t border-b py-20 pl-5">
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
