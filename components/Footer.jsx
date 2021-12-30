import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='py-10 px-3 bg-gray-150'>
      <div className='w-4/5 mx-auto flex flex-col md:flex-row md:justify-between md:items-center'>
        <div className='flex  md:justify-around  mb-6 md:mb-0 md:mr-10'>
          <Image
            src='/images/play-store.png'
            height={45}
            width={150}
            alt='Google Playstore'
          />
          <div className='mr-3'></div>
          <Image
            src='/images/app-store.png'
            height={45}
            width={150}
            alt='Apple Appstore'
          />
        </div>
        <div className='md:mr-10 md:w-2/6 mb-6 md:mb-0 '>
          <button className='bg-green-650 text-gray-100 rounded  flex justify-center items-center text-xs p-3 w-40 mb-4'>
            Refer a friend
          </button>
          <p className='text-xs font-semibold text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius
            reiciendis architecto quas rerum tempore .
          </p>
        </div>
        <div className='flex md:justify-center items-center'>
          <div
            className='mr-3 p-2 text-blue-800 bg-blue-150'
            style={{ borderRadius: "50%" }}
          >
            <FaFacebookF />
          </div>
          <div
            className='mr-3  h-9 w-9 flex justify-center items-center  bg-red-150'
            style={{ borderRadius: "50%" }}
          >
            {/* <FaInstagramSquare className='bg-ig' /> */}
            <Image
              width={20}
              height={20}
              alt='Safelybuy Instagram'
              src='/images/ig.png'
            />
          </div>
          <div
            className='mr-3 p-2 text-blue-500 bg-blue-200'
            style={{ borderRadius: "50%" }}
          >
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
