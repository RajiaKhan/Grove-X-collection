import Image from "next/image";
import React, { useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
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
      <div className="container mx-auto mt-12">
        <div className="flex justify-center items-center gap-16">
          <div className="w-11/12 ">
            <CarouselProvider
              className="relative"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={3}
              visibleSlides={1}
              step={1}
              infinite={true}
            >
              <div className=" flex justify-center items-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="w-8 h-8  flex justify-center items-center bg-gray-100  hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <Image src="/chevron-back (1).svg" width={24} height={24} />
                </ButtonBack>
                <Slider>
                  <Slide index={0}>
                    <div className="gallery-cell  lg:mr-7 mr-6  w-full h-full  flex justify-center items-center">
                      <div className="relative flex justify-center items-center">
                        <Image
                          src="/apple watch.svg"
                          width={624}
                          height={536}
                        />
                      </div>
                      <div className="relative w-full h-full lg:hidden  flex justify-center items-center">
                        <Image
                          src="/apple watch.svg"
                          width={624}
                          height={536}
                        />
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="gallery-cell  lg:mr-7 mr-6  w-full h-full  flex justify-center items-center">
                      <div className="relative   flex justify-center items-center">
                        <Image
                          src="/apple watch.svg"
                          width={624}
                          height={536}
                        />
                      </div>
                      <div className="relative w-full h-full lg:hidden  flex justify-center items-center">
                        <Image
                          src="/apple watch.svg"
                          width={624}
                          height={536}
                        />
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="gallery-cell lg:mr-7 mr-6  w-full h-full  flex justify-center items-center">
                      <div className="relative   flex justify-center items-center">
                        <Image
                          src="/apple watch.svg"
                          width={624}
                          height={536}
                        />
                      </div>
                      <div className="relative w-full h-full lg:hidden  flex justify-center items-center">
                        <Image
                          src="/apple watch.svg"
                          width={624}
                          height={536}
                        />
                      </div>
                    </div>
                  </Slide>
                </Slider>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="w-8 h-8  flex justify-center items-center bg-gray-100 flex justify-center items-center  hover:bg-gray-400 focus:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  id="next"
                >
                  <Image src="/chevron-back.svg" width={24} height={24} />
                </ButtonNext>
              </div>
            </CarouselProvider>
            <div className="flex ">
              <div className="">
                <div className="flex justify-center items-center">
                  <Image className="" src="/cube.svg" width={24} height={24} />
                </div>
                <div className="flex justify-center items-center">
                  <h1 className="text-center mt-4 w-10/12">
                    Get free delivery, or pick up available items at an Apple
                    Store
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="flex justify-center items-center">
                  <Image
                    className=""
                    src="/fitness.svg"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <h1 className="text-center mt-4 w-11/12">
                    Get 3 months of Apple Fitness+ with an Apple Watch
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="flex justify-center items-center">
                  <Image className="" src="/cube.svg" width={24} height={24} />
                </div>
                <div className="flex justify-center items-center">
                  <h1 className="text-center mt-4 w-10/12">
                    14 calendar days to return an item from the date you
                    received it.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12">
            <h1 className="text-gray-800 text-3xl font-bold">
              Apple Watch Series 7
            </h1>
            <h1 className="mt-3">by Apple</h1>
            <div className="flex mt-3 gap-8">
              <div className="text-2xl text-gray-800 font-bold">$400</div>
              <div className="mt-1">
                <Image src="/Line 38.svg" width={24} height={24} />
              </div>
              <div className="mt-1">
                <Image src="/Group 406.svg" width={184} height={24} />
              </div>
            </div>
            <h1 className="text-sm  text-gray-800 font-semibold mt-3">
              Availability - In stock
            </h1>
            <div className="flex gap-12 mt-4">
              <div className="">
                <h1 className="mt-3 text-gray-800 font-semibold">
                  Dimensions:
                </h1>
                <h1 className="mt-3 text-gray-800 font-semibold">Weight:</h1>
                <h1 className="mt-3 text-gray-800 font-semibold">Body:</h1>
                <h1 className="mt-3 text-gray-800 font-semibold">Display:</h1>
                <h1 className="mt-3 text-gray-800 font-semibold">CPU:</h1>
                <h1 className="mt-3 text-gray-800 font-semibold">GPU:</h1>
                <h1 className="mt-3 text-gray-800 font-semibold">Sensors:</h1>
              </div>
              <div className="">
                <h1 className="mt-3 text-semibold text-gray-600">
                  45 x 38 x 10.7 mm (1.77 x 1.50 x 0.42 in)
                </h1>
                <h1 className="mt-3 text-semibold text-gray-600">
                  32 g (41mm), 38.8 g (45mm) (1.13 oz)
                </h1>
                <h1 className="mt-3 text-semibold text-gray-600">
                  Glass front, ceramic/sapphire crystal back, aluminum frame
                </h1>
                <h1 className="mt-3 text-semibold text-gray-600">
                  Retina LTPO OLED, 1000 nits (peak)
                </h1>
                <h1 className="mt-3 text-semibold text-gray-600">Dual-core</h1>
                <h1 className="mt-3 text-semibold text-gray-600">PowerVR</h1>
                <h1 className="mt-3 text-semibold text-gray-600">
                  Accelerometer, gyro, heart rate, barometer, compass Natural
                  language commands & dictation Ultra Wideband (UWB) support
                </h1>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="">
                {" "}
                <Image src="/checkmark.svg" width={24} height={24} />
              </div>
              <div className="text-md text-gray-800 font-semibold">
                Free Shipping
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="">
                {" "}
                <Image src="/checkmark.svg" width={24} height={24} />
              </div>
              <div className="text-md text-gray-800 font-semibold">
                EMI Options Available
              </div>
            </div>
            <div className="border-t border-b mt-5">
              <div className="flex gap-8 py-7">
                <div className="text-lg text-gray-800 font-bold">
                  Band colors
                </div>
                <div className="flex gap-3 mt-2 ">
                  <div className="cursor-pointer">
                    <Image src="/Ellipse 95.svg" width={20} height={20} />
                  </div>
                  <div className="cursor-pointer">
                    <Image src="/Ellipse 96.svg" width={20} height={20} />
                  </div>
                  <div className="cursor-pointer">
                    <Image src="/Ellipse 94.svg" width={20} height={20} />
                  </div>
                  <div className="cursor-pointer">
                    <Image src="/Ellipse 97.svg" width={20} height={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="">
                <button className="bg-gray-700 hover:bg-gray-900 focus:bg-gray-900  py-2 w-44">
                  <div className="flex justify-center items-center gap-2">
                    <div className="mt-1">
                      <Image
                        className=""
                        src="/cart.svg"
                        width={16}
                        height={16}
                      />
                    </div>
                    <h1 className="text-white font-semibold ">View in cart</h1>
                  </div>
                </button>
              </div>
              <div className="">
                <button className="bg-white border hover:bg-gray-100 focus:bg-gray-100 py-2 w-44">
                  <div className="flex gap-2 justify-center items-center">
                    <div className="mt-1">
                      <Image src="/heart.svg" width={16} height={16} />
                    </div>
                    <h1 className="font-semibold text-gray-600">Wishlist</h1>
                  </div>
                </button>
              </div>
              <div className="cursor-pointer">
                <Image src="/share.svg" width={47} height={47} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-12 mt-32">
        <div className="container mx-auto bg-gray-200   w-11/12">
          <div className="relative">
            <Image src="/nathan.svg" width={845} height={644} />
            <div className="bg-white h-80 w-3/12 absolute right-72 top-48 px-7">
              <h1 className="text-gray-800 text-4xl font-bold pt-10">
                Join us!
              </h1>
              <h1 className="text-md text-gray-700 mt-4">
                Subscribe to our newsletter, receive the latest updates and
                exclusive promotions just into your inbox
              </h1>
              <label class="relative mt-3 border-b  ">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center "></span>
                <input
                  className="bg-white w-full border-b outline-none  pr-3 mt-5"
                  placeholder="Enter Your Email"
                  type="text"
                  name="search"
                />
              </label>
              <button className="bg-gray-800 w-full py-3 mt-6 text-white">
                Sign Up
              </button>
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

      <style>
        {`
                    .gallery-cell {
                        height: 586px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
      </style>
    </>
  );
}
