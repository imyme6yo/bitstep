import { useState, useEffect } from "react";
// import firebase from "firebase/app";

import Head from "next/head";
import { Inter } from "@next/font/google";
import { Switch } from "@headlessui/react";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [content, setContent] = useState("");
  const [valid, setValid] = useState(false);
  const btnStyle =
    "inline-flex w-full items-center justify-center rounded-md border border-transparent bg-carrot-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-carrot-700 focus:outline-none focus:ring-2 focus:ring-carrot-500 focus:ring-offset-2, disabled:bg-carrot-300";

  useEffect(() => {
    console.log(company);
    setValid(agreed && company !== "" && email !== "" && content !== "");
  }, [agreed, company, email, content]);

  const makeInquery = async () => {
    console.log(agreed);
    console.log(company);
    console.log(email);
    console.log(phone);
    console.log(content);
    if (agreed === true) {
      const firestore = getFirestore();
      const col = collection(firestore, "inquiries");
      const inquiry = {
        privacy: agreed,
        company,
        email,
        phone,
        content,
      };
      await addDoc(col, inquiry);
      window.location.reload();
    }
  };

  return (
    <>
      <Head>
        <title>BITSTEP - 문의하기</title>
      </Head>
      <main>
        <div className="overflow-hidden bg-white py-16 px-6 lg:px-8 lg:py-24">
          <div className="relative mx-auto max-w-xl">
            <svg
              className="absolute left-full translate-x-1/2 transform"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={404}
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
            <svg
              className="absolute right-full bottom-0 -translate-x-1/2 transform"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={404}
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                문의하기
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                제품에 대한 문의나 협업 요청등 지금 연락주세요
              </p>
            </div>
            <div className="mt-12">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    *회사명/담당자 (필수)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      onChange={(e) => setCompany(e.target.value)}
                      autoComplete="organization"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-carrot-500 focus:ring-carrot-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    *담당자 이메일 (필수)
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-carrot-500 focus:ring-carrot-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    담당자 연락처
                  </label>
                  <div className="mt-1">
                    <input
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      onChange={(e) => setPhone(e.target.value)}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-carrot-500 focus:ring-carrot-500"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    *내용을 입력해주세요 (필수)
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      onChange={(e) => setContent(e.target.value)}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-carrot-500 focus:ring-carrot-500"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Switch
                        checked={agreed}
                        onChange={setAgreed}
                        className={classNames(
                          agreed ? "bg-carrot-600" : "bg-gray-200",
                          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-carrot-500 focus:ring-offset-2"
                        )}
                      >
                        <span className="sr-only">개인정보처리방침 동의</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            agreed ? "translate-x-5" : "translate-x-0",
                            "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                          )}
                        />
                      </Switch>
                    </div>
                    <div className="ml-3">
                      <p className="text-base text-gray-500">
                        <Link
                          href="/policy/privacy"
                          className="font-medium text-gray-700 underline"
                        >
                          개인정보처리방침
                        </Link>{" "}
                        동의.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
              <div className="sm:col-span-2">
                <button
                  // type="submit"
                  className={btnStyle}
                  disabled={!valid}
                  onClick={async () => await makeInquery()}
                >
                  문의하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
