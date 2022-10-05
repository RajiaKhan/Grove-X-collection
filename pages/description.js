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
  return (
    <>
      <div className="container mx-auto mt-32">
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
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
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
                <div className="flex gap-6 mt-2 ">
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
