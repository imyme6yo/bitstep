import Head from "next/head";
import {
  HomeIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Intro() {
  return (
    <>
      <Head>
        <title>비트스텝 - 이서준</title>
        <link
          type="text/css"
          rel="stylesheet"
          href="https://bostamihtml.ibthemespro.com/css/custom.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="https://bostamihtml.ibthemespro.com/assets/fontaswesome/css/fontawesome.min.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="https://bostamihtml.ibthemespro.com/css/tailwind.css"
        />
      </Head>
      <main className="flex justify-center w-screen h-full">
        <div className="w-full bg-no-repeat bg-center bg-cover bg-fixed bg-[url('/images/bg.jpg')]  md:pb-16">
          <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
            <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
              <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-transparent text-center  px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                <img
                  src="/images/profile.jpg"
                  className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                  alt="about"
                />
                <div className="pt-[100px] pb-8">
                  <h2 className="mt-6 mb-1 text-[26px] font-semibold ">
                    {" "}
                    이서준{" "}
                  </h2>
                  <h3 className="mb-4 text-[#7B7B7B] inline-block  px-5 py-1.5 rounded-lg">
                    SW 아키텍트{" "}
                  </h3>
                  <div className="flex justify-center space-x-3">
                    {/* <!-- facebook icon and link --> */}
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="socialbtn text-[#1773EA]">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                    {/* <!-- twitter icon and link --> */}
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="socialbtn text-[#1C9CEA]">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </span>
                    </a>
                    {/* <!-- dribbble icon and link --> */}
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="socialbtn text-[#e14a84]">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                    {/* <!-- linkedin icon and link --> */}
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="socialbtn text-[#0072b1]">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 448 512"
                          className="h-6 w-6"
                        >
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                  {/* <!-- personal infomation start --> */}
                  <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] ">
                    <div className="flex border-b border-[#E3E3E3] py-2.5">
                      <span className="socialbtn p-2 bg-white text-[#C17CEB] shadow-md">
                        <HomeIcon />
                      </span>
                      <div className="text-left ml-2.5">
                        <p className="text-xs text-[#44566C]"> Web </p>
                        <a href="https://bitstep.it">
                          <p className="">https://bitstep.it</p>
                        </a>
                      </div>
                    </div>
                    <div className="flex border-b border-[#E3E3E3] py-2.5">
                      <span className="socialbtn p-2 bg-white text-[#6AB5B9] shadow-md">
                        <EnvelopeIcon />
                      </span>
                      <div className="text-left ml-2.5">
                        <p className="text-xs text-[#44566C]"> Email </p>
                        <a href="mailto:hi@bitstep.it">
                          <p className="">hi@bitstep.it</p>
                        </a>
                      </div>
                    </div>
                    <div className="flex border-b border-[#E3E3E3] py-2.5">
                      <span className="socialbtn p-2 bg-white text-[#E93B81] shadow-md">
                        <DevicePhoneMobileIcon />
                      </span>
                      <div className="text-left ml-2.5">
                        <p className="text-xs text-[#44566C]"> 연락처 </p>
                        <p className="">+82 10 2861 0486</p>
                      </div>
                    </div>

                    <div className="flex border-b border-[#E3E3E3] py-2.5">
                      <span className="socialbtn p-2 bg-white text-[#FD7590] shadow-md">
                        <MapPinIcon />
                      </span>
                      <div className="text-left ml-2.5">
                        <p className="text-xs text-[#44566C]"> 위치 </p>
                        <p className="">대한민국 서울특별시</p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- personal infomation end-->
                    <!-- dowanload button --> */}
                  <button className="dowanload-btn">
                    <img
                      className="mr-3"
                      src="/images/download-icon.png"
                      alt="icon"
                    />{" "}
                    연락처 추가{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              {/* <!-- about me section start --> */}
              <div>
                <div className="lg:rounded-2xl bg-white ">
                  <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
                    <h2 className="after-effect after:left-52">About Me</h2>
                    <div className="lg:hidden">
                      <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center  px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                        <img
                          src="/images/profile.jpg"
                          className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                          alt="about"
                        />
                        <div className="pt-[100px] pb-8">
                          <h2 className="mt-6 mb-1 text-[26px] font-semibold ">
                            {" "}
                            이서준
                          </h2>
                          <h3 className="mb-4 text-[#7B7B7B] inline-block  px-5 py-1.5 rounded-lg">
                            SW 아키텍트{" "}
                          </h3>

                          <div className="flex justify-center space-x-3">
                            <a
                              href="https://www.facebook.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="socialbtn text-[#1773EA]">
                                <svg
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  className="h-6 w-6"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </a>
                            <a
                              href="https://twitter.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="socialbtn text-[#1C9CEA]">
                                <svg
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  className="h-6 w-6"
                                >
                                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                              </span>
                            </a>
                            <a
                              href="https://dribbble.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="socialbtn text-[#e14a84]">
                                <svg
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  className="h-6 w-6"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </a>
                            <a
                              href="https://www.linkedin.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="socialbtn text-[#0072b1]">
                                <svg
                                  fill="currentColor"
                                  viewBox="0 0 448 512"
                                  className="h-6 w-6"
                                >
                                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                </svg>
                              </span>
                            </a>
                          </div>

                          <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] ">
                            <div className="flex border-b border-[#E3E3E3] py-2.5">
                              <span className="socialbtn p-2 bg-white text-[#C17CEB] shadow-md">
                                <HomeIcon />
                              </span>
                              <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C]"> Web </p>
                                <a href="https://bitstep.it">
                                  <p className="">https://bitstep.it</p>
                                </a>
                              </div>
                            </div>
                            <div className="flex border-b border-[#E3E3E3] py-2.5">
                              <span className="socialbtn p-2 bg-white text-[#6AB5B9] shadow-md">
                                <EnvelopeIcon />
                              </span>
                              <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C]">
                                  {" "}
                                  Email{" "}
                                </p>
                                <p className="">hi@bitstep.it</p>
                              </div>
                            </div>
                            <div className="flex border-b border-[#E3E3E3] py-2.5">
                              <span className="socialbtn p-2 bg-white text-[#E93B81] shadow-md">
                                <DevicePhoneMobileIcon />
                              </span>
                              <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C]">
                                  {" "}
                                  연락처{" "}
                                </p>
                                <p className="">+82 10 2861 0486</p>
                              </div>
                            </div>

                            <div className="flex border-b border-[#E3E3E3] py-2.5">
                              <span className="socialbtn p-2 bg-white text-[#FD7590] shadow-md">
                                <MapPinIcon />
                              </span>
                              <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C]"> 위치 </p>
                                <p className="">대한민국 서울특별시</p>
                              </div>
                            </div>
                            <button className="dowanload-btn">
                              <img
                                className="mr-3"
                                src="./images/download-icon.png"
                                alt="icon"
                              />{" "}
                              연락처 추가
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
                        <div className="col-span-12 space-y-2.5">
                          <div className="lg:mr-16">
                            <p className="text-[#44566c] leading-7">
                              {" "}
                              안녕하세요! 12년 경력의 소프트웨어 엔지니어입니다.
                              자율주행 및 의료기기를 개발했었습니다. 과기부,
                              서울산업진흥원에서 AI를 강의했으며, 현재는 글로벌
                              NFT프로젝트 아르투아를 진행하고 있습니다.{" "}
                            </p>
                            <p className="text-[#44566c] leading-7 mt-2.5">
                              {" "}
                              저의 목표는 사회문제를 해결하는 소프트웨어를
                              만드는 것이며, 메이커 공유하고 공감하는 세상을
                              만드는 것 입니다.{" "}
                            </p>
                            <p className="text-[#44566c] leading-7 mt-2.5">
                              {" "}
                              #AI #플러터 #장고 #React{" "}
                            </p>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
