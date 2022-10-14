import React from "react";
import Image from "next/image";
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="container  mx-auto mt-12 ">
        <div className=" px-4 gap-4 flex xl:px-0 lg:px-0 2xl:px-28">
          <div className="">
            <h1 className="text-gray-800 text-xl sm:text-sm lg:text-4xl md:text-4xl  2xl:text-4xl  xl:text-4xl   font-bold">
              The latest and greatest
            </h1>
          </div>
          <div className="ml-auto cursor-pointer">
            <button onClick={() => setShowModal(true)}>
              <Image src="/Frame (3).svg" width={30} height={30} />
            </button>
          </div>
        </div>
        <div className="flex flex flex-col lg:flex-row xl:flex-row 2xl:flex-row  justify-center items-center mt-32 gap-12">
          <div className="2xl:w-8/12 lg:w-11/12 xl:w-11/12 w-11/12 ">
            <div className=" flex justify-center items-center">
              <Image src="/watch.svg" width={624} height={590} />
            </div>
            <div className="flex px-0 lg:px-2 xl:px-3 2xl:px-12 md:px-12">
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
            <div className="flex justify-center items-center gap-8   flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-rowgap-12">
              <div className="">
                <div className="">
                  <Image src="/cart-watch-2.svg" width={296} height={239} />
                  <div className="flex mt-4">
                    <div className="text-gray-700 text-md ">
                      <h1 className="text-gray-700 font-bold">YSL</h1>
                      <h1 className="text-gray-600 ">Saint Laurnt 35ml</h1>
                    </div>
                    <div className="ml-auto text-gray-700 text-md font-bold">
                      $140.00
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Image src="/cart-watch.svg" width={296} height={239} />
                  <div className="flex mt-4">
                    <div className="text-gray-700 text-md">
                      <h1 className="text-gray-800 font-bold">Acqua Di Gio</h1>
                      <h1 className="text-gray-600 ">laurissi 85ml</h1>
                    </div>
                    <div className="ml-auto text-gray-800 text-md font-bold">
                      $29.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    <Image src="/cart-watch-3.svg" width={296} height={239} />
                    <div className="flex mt-4">
                      <div className="text-gray-700 text-md">
                        <h1 className="text-gray-800 font-bold">
                          Calvin Klein
                        </h1>
                        <h1 className="text-gray-600 ">CK one 135ml</h1>
                      </div>
                      <div className="ml-auto text-gray-800 text-md font-bold">
                        $29.00
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Image src="/cart-watch-4.svg" width={296} height={239} />
                    <div className="flex mt-4">
                      <div className="text-gray-700 text-md font-semibold">
                        <h1 className="text-gray-800 font-bold">
                          Acqua Di Gio
                        </h1>
                        <h1 className="text-gray-600 ">Giorgio Armani 85ML</h1>
                      </div>
                      <div className="ml-auto text-gray-800 text-md font-bold">
                        $85.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex flex-col lg:flex-row xl:flex-row 2xl:flex-row  justify-center items-center gap-12 mt-32">
          <div className="w-11/12">
            <div className="flex   flex-col  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  gap-12 justify-center items-center">
              <div className="">
                <div className="">
                  <Image src="/cart-perfume-1.svg" width={296} height={239} />
                  <div className="flex mt-4">
                    <div className="text-gray-700 text-md ">
                      <h1 className="text-gray-800 font-bold">D&G</h1>
                      <h1 className="text-gray-600">Saint Laurnt 35ml</h1>
                    </div>
                    <div className="ml-auto text-gray-800 text-md font-bold">
                      $29.00
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Image src="/cart-perfume-2.svg" width={296} height={239} />
                  <div className="flex mt-4">
                    <div className="text-gray-700 text-md ">
                      <h1 className="text-gray-800 font-bold">Chanel</h1>
                      <h1 className="text-gray-600">laurissi 85ml</h1>
                    </div>
                    <div className="ml-auto text-gray-800 text-md font-bold">
                      Chanel
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    <Image src="/cart-perfume-3.svg" width={296} height={239} />
                    <div className="flex mt-4">
                      <div className="text-gray-700 text-md ">
                        <h1 className="text-gray-800 font-bold">Linterdit </h1>
                        <h1 className="text-gray-600">Coco Nior 100ml</h1>
                      </div>
                      <div className="ml-auto text-gray-800 text-md font-bold">
                        $49.00
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Image src="/cart-perfume-4.svg" width={296} height={239} />
                    <div className="flex mt-4">
                      <div className="text-gray-700 text-md ">
                        <h1 className="text-gray-800 font-bold">Chanel D&G</h1>
                        <h1 className="text-gray-600">Giorgio Armani 85ML</h1>
                      </div>
                      <div className="ml-auto text-gray-800 text-md font-bold">
                        $140.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12 ">
            <div className="flex justify-center items-center lg:justify-start lg:items-start xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start">
              <Image src="/cart-perfume.svg" width={624} height={590} />
            </div>
            <div className="flex w-full 2xl:w-10/12 mt-3">
              <div className="">
                <h1 className="text-gray-800 text-lg font-bold">Linterdit</h1>
                <h1 className="text-gray-600 text-md font-semibold">
                  Coco Nior 100ml
                </h1>
              </div>
              <div className="ml-auto text-gray-800 text-lg font-bold">
                $195.00
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32 mb-16 ">
        <div className="">
          <div className="grid lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 border-t border-b py-20 pl-5">
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
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto  ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5rounded-t">
                  <h3 className="text-3xl font-semibold"></h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                {/*body*/}
                <div className="relative   flex-auto mt-16 pt-96  sm:mt-3 sm:mt-1 lg:mt-12 lg:pt-0  xl:mt-12 xl:pt-0  2xl:mt-0 2xl:pt-0 md:mt-0 md:pt-12  ">
                  <div className="">
                    <div className="justify-between mx-auto items-center  ">
                      <div>
                        <div className="flex items-center justify-between py-3 md:py-5 container mx-auto px-4  ">
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
                          <div className="p-2 text-gray-700 rounded-md outline-none ">
                            <button className="cursor-pointer sm:flex hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center dark:bg-gray-50 dark:text-gray-900 dark:hover:text-gray-900 dark:hover:bg-gray-200">
                              <img
                                className="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter3-svg1.svg"
                                alt="filters"
                              />
                              Filters
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="">
                          <div className="w-full  bg-gray-50">
                            <div
                              id="filterSection"
                              className="relative lg:px-20 md:px-6 py-10 px-8 bg-gray-50 "
                            >
                              <div className="w-full">
                                <div className="container mx-auto">
                                  <div className="flex">
                                    <div className="ml-auto">
                                      <div className="-mb-12">
                                        <button
                                          onClick={() => setShowModal(false)}
                                        >
                                          <Image
                                            src="/Frame 5.svg"
                                            width={24}
                                            height={24}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className=" container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-y-0 md:gap-y-24 gap-y-14 ">
                                  <div className="flex flex-col space-y-8 justify-start items-start border-gray-50  border-l px-16 md-0:px-0 2xl:px-0 xl:px-16 lg:px-0">
                                    <div className="flex gap-2">
                                      <Image
                                        src="/Frame (4).svg"
                                        width={24}
                                        height={24}
                                      />
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
                                  <div className="flex flex-col space-y-8 lg:justify-start lg:items-start md:justify-start md:items-center border-l  px-16">
                                    <div className="flex flex-col space-y-8 justify-start items-start ">
                                      <div className="flex gap-2">
                                        <Image
                                          src="/Frame (5).svg"
                                          width={24}
                                          height={24}
                                        />
                                        <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 dark:text-white ">
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
                                        <Image
                                          src="/Frame (6).svg"
                                          width={24}
                                          height={24}
                                        />
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
                                      <Image
                                        src="/Frame (7).svg"
                                        width={24}
                                        height={24}
                                      />
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

                          <div className="hidden container mx-auto md:block relative  md:py-10 py-9 mb-12  mt-8">
                            <button
                              onClick={() => setShowModal(false)}
                              className="hover:bg-gray-700 absolute right-0  focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:text-gray-900 dark:hover:bg-gray-200"
                            >
                              Apply Filter
                            </button>
                          </div>

                          <div className="block md:hidden w-full mt-12">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
