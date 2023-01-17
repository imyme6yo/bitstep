import { useState } from "react";

// import { useLocation } from "react-router-dom";

import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

import { Disclosure } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const menu = [
  {
    label: "BITSTEP",
    link: "/",
  },
  // {
  //   label: "AI",
  //   link: "/ai",
  // },
  // {
  //   label: "SERVICE",
  //   link: "/service",
  // },
];

const Navbar: NextPage = () => {
  const [defaultMenuItemStyle] = useState(
    "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium font-bold text-gray-500 hover:border-gray-300 hover:text-gray-700"
  );
  const [currentMenuItemStyle] = useState(
    "inline-flex items-center border-b-2 border-carrot-500 px-1 pt-1 text-md font-medium font-bold text-gray-900"
  );
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden"></div>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/icon-sm.png"
                    alt="비트스텝 로고 스몰"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/logo.png"
                    alt="비트스텝 로고"
                  />
                </div>
                <div className="ml-6 flex space-x-1 lg:space-x-6">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {menu.map((m) => (
                    <Link
                      key={m.label}
                      className={
                        router.asPath === m.link
                          ? currentMenuItemStyle
                          : defaultMenuItemStyle
                      }
                      href={m.link}
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/contact" key="contract">
                    <button
                      type="button"
                      className="relative inline-flex items-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-carrot-600 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 hover:from-purple-700 hover:to-carrot-700 focus:ring-offset-2"
                    >
                      <span className="block md:hidden">문의</span>
                      <span className="hidden md:block">서비스 문의하기</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
