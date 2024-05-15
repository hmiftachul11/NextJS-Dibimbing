import Head from "next/head";
import Image from "next/image";
// import { Poppins } from "next/font/google";
import Link from "next/link";

// const poppins = Poppins({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#FEFCF5] h-screen">
      <Head>
        <title>Home</title>
      </Head>
      <header className="text-dark text-center sm:text-left w-4/5 mx-auto  pt-32" id="home">
        <div className="container mx-auto py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between py-5">
            <div className="sm:w-1/2 text-center sm:text-left" data-aos="fade-right">
              <h1 className="text-8xl font-bold text-black">
                We Serve
                <br />
                Delicious
                <span className="text-[#FD9D03] font-bold"> Food</span>
              </h1>
              <p className="text-xl my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eius asperiores facere fugiat
                amet perspiciatis dignissimos atque debitis laudantium repellendus?
              </p>
              <div className="flex mt-4 justify-center sm:justify-start">
                <Link
                  href="/essen"
                  className="flex items-center btn rounded-full px-16 py-4 mr-3 text-white text-2xl font-semibold"
                  style={{ backgroundColor: '#FE9D02', boxShadow: '0px 8px 20px 0px rgba(0, 0, 0, 0.25)' }}
                >
                  Food List
                  <svg
                    className="ml-3 w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="sm:w-1/2 mt-4 sm:mt-0 flex justify-end" data-aos="fade-left">
              <a href="#">
                <Image src="/images/hero.svg" width={500} height={500} alt="Hero" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
