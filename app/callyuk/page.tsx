"use client";

import { useEffect } from "react";

export default function CallYuk() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href =
        "https://6a3b-2001-448a-10c0-36f1-b1fb-396a-a599-9d7e.ngrok-free.app";
    }, 3000);
  }, []);
  return (
    <div className="w-full flex z-[999] flex-col items-center justify-center fixed top-0 left-0 min-h-screen bg-white">
      <h1 className="text-[36px] text-[#0060FF] font-bold">CallYuk</h1>
      <p className="text-gray-400 mb-5">
        Anda akan diredirect ke dalam aplikasi dalam beberapa saat
      </p>
      <span className="loader"></span>
    </div>
  );
}
