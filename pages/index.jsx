import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import SafelyBuyForm from "../components/SafelyBuyForm";

function index() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Safelybuy register page developed by Adetayo Omotomiwa'
        />
        <title>Safelybuy | Register</title>
      </Head>
      <div className='pt-10'>
        <div className='flex justify-center items-center'>
          <h1 className='text-blue-400 font-mono text-3xl tracking-tighter font-bold pr-4  border-r mr-4 border-blue-500'>
            Safelybuy
          </h1>
          <span className='text-blue-300 text-xs font-semibold'>
            SELLER CENTER
          </span>
        </div>
        <SafelyBuyForm />
        <div className='text-center mt-6 mb-16'>
          <p className='text-xs'>
            <span className='font-bold text-gray-800'>
              Already have an account?
            </span>{" "}
            <Link href='/'>
              <a className='text-blue-500'>Sign in</a>
            </Link>
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default index;
