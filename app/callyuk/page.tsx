"use client";

import { useEffect } from "react";

export default function CallYuk() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href =
        "https://f915-2001-448a-10ca-2e66-284b-1d69-49f5-a09.ngrok-free.app";
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
