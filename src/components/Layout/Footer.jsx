import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#FEFCF5] text-center p-5 text-sm text-gray-500">
      <Copyright />
    </footer>
  );
}

function Copyright() {
  return (
    <span className="inline-flex items-center">
      <span className="mr-1">Copyright &copy;</span>
      <span className="text-black font-bold">2024</span>
      <a href="#" className="ml-2 text-black font-bold hover:underline">
        Tafood
        <span className="text-orange-500">
          .co
        </span>
      </a>
      <span className="ml-2">All rights reserved.</span>
    </span>
  );
}
