import Head from "next/head";
import { InboxIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>BITSTEP - AI 솔루션</title>
      </Head>
      <nav
        className="flex border border-gray-200 bg-white"
        aria-label="Breadcrumb"
      >
        <ol
          role="list"
          className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8"
        >
          <li className="flex">
            <div className="flex items-center">
              <Link
                href="/ai/metahuman"
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                // aria-current={page.current ? "page" : undefined}
              >
                Digital 메타휴먼
              </Link>
            </div>
          </li>
          <li className="flex">
            <div className="flex items-center">
              <svg
                className="h-full w-6 flex-shrink-0 text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <Link
                href="/ai/data-analysis"
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                디지털분석 도구 솔루션
              </Link>
            </div>
          </li>
          <li className="flex">
            <div className="flex items-center">
              <svg
                className="h-full w-6 flex-shrink-0 text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <Link
                href="/ai/ai-auth"
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                실시간 AI 인증
              </Link>
            </div>
          </li>
          <li className="flex">
            <div className="flex items-center">
              <svg
                className="h-full w-6 flex-shrink-0 text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
            </div>
          </li>
        </ol>
      </nav>
      <div className="isolate bg-white">
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    최고의 전문가, 최고의 AI
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                    BITSTEP의 AI솔루션 입니다
                  </p>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <svg
                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                      fillOpacity=".3"
                      d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                      <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-gray-900">
            <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
              <div className="h-full w-full xl:grid xl:grid-cols-2">
                <div className="h-full xl:relative xl:col-start-2">
                  <img
                    className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                  />
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="relative">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-carrot-600">
                        <InboxIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        디지털 메타휴먼 솔루션
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        영상과 음성 데이터로 디지털 메타휴먼을 생성하는 AI
                        모델을 제공합니다. 생성 모델과 Diffusion을 활용한
                        비트스텝의 기술로 음성챗봇, 지면광고등 귀사의 비즈니스에
                        바로 적용할 수 있습니다
                      </p>
                      <div className="mt-6">
                        <Link
                          href="/ai/metahuman"
                          className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-carrot-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-carrot-700"
                        >
                          자세히 보기
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="max-w-xl mx-auto px-3  lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img
                      className="w-full object-contain rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/images/metahuman10.png"
                      alt="Inbox user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="overflow-hidden bg-gray-50 py-12 md:py-20 lg:py-24">
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <svg
                className="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
                width={404}
                height={404}
                fill="none"
                viewBox="0 0 404 404"
                role="img"
                aria-labelledby="svg-workcation"
              >
                <title id="svg-workcation">Workcation</title>
                <defs>
                  <pattern
                    id="ad119f34-7694-4c31-947f-5c9d249b21f3"
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
                  fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
                />
              </svg>

              <div className="relative">
                <img
                  className="mx-auto h-20 object-cover"
                  src="https://campustown.seoul.go.kr/site/main/file/image/uu/d9785396115c4ae1ba8b72fcff96602c"
                  alt="Workcation"
                />
                {/* Digital 메타휴먼 */}
                <blockquote className="mt-10">
                  <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900">
                    <p>
                      &ldquo;처음엔 고객응대등 과중한 업무로 언제라도 사업이
                      망가져도 이상하지 않았어요. 하지만 비트스텝의 Digital
                      메타휴먼 솔루션으로 많은 업무가 자동화됐고 이제는 없어서는
                      안될 서비스가 됐죠&rdquo;
                    </p>
                  </div>
                  <footer className="mt-8">
                    <div className="md:flex md:items-center md:justify-center">
                      <div className="md:flex-shrink-0">
                        {/* <img
                          className="mx-auto h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        /> */}
                      </div>
                      <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                        <div className="text-base font-medium text-gray-900">
                          박성연 CEO
                        </div>

                        <svg
                          className="mx-1 hidden h-5 w-5 text-carrot-600 md:block"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 0h3L9 20H6l5-20z" />
                        </svg>

                        <div className="text-base font-medium text-gray-500">
                          오디세이랩
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </section>
          <section>
            <div className="relative overflow-hidden pt-16 pb-32">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
              />

              <div className="mt-24">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                  <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                    <div>
                      <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-carrot-600">
                          <SparklesIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                          데이터 분석 솔루션
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                          대부분 데이터 마이닝 솔루션만 제공하거나 데이터 분석
                          솔루션만 제공합니다. 비트스텝은 이 두개의 솔루션을
                          합리적인 가격으로 제공합니다. 비용은 매달 지불되며,
                          자사 솔루션으로 연관 분석, 키워드 추출, 인공지능
                          학습용 데이터 샘플을 생성할 수 있습니다.
                        </p>
                        <div className="mt-6">
                          <Link
                            href="/ai/data-analysis"
                            className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-carrot-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-carrot-700"
                          >
                            자세히 보기
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                    <div className="max-w-xl px-3 mx-auto lg:relative lg:m-0 lg:h-full lg:px-0">
                      <img
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="/images/data-analysis10.png"
                        alt="Customer profile user interface"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="relative py-10">
              <div className="max-w-xl lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                  <div>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-carrot-600">
                        <InboxIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        실시간 AI 인증
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        기본 인증 및 생체 인증은 불안정합니다. 비트스텝은 2개
                        이상의 인공지능 모델을 사용해 높은 정확도와 신뢰도의
                        인증기술을 개발했습니다.
                      </p>
                      <div className="mt-6">
                        <Link
                          href="/ai/ai-auth"
                          className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-carrot-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-carrot-700"
                        >
                          자세히 보기
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <blockquote>
                      <div>
                        <p className="text-base text-gray-500">
                          &ldquo;성인은 휴대폰이나 카드등으로 얼마든지 인증할 수
                          있었요. ...하지만 어린이의 경우는 하나하나 검사하고
                          확인해야 했죠, 비트스텝의 AI 인증 시스템은 정말
                          놀라워요...&rdquo;
                        </p>
                      </div>
                      <footer className="mt-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            {/* <img
                              className="h-6 w-6 rounded-full"
                              src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                              alt=""
                            /> */}
                          </div>
                          <div className="text-base font-medium text-gray-700">
                            김지선 PM, 어린이 커뮤니티 플랫폼
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="max-w-xl xs:px-3 sm:mx-auto lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/images/ai-auth10.png"
                      alt="Inbox user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
