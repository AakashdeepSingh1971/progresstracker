import Head from "next/head";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>JassWind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>

          </nav>

        </div>
      </header>
      <div className="flex h-screen mt-10">
        <div className="w-1/4 sticky-right-0 shadow-lg" >
          <div className="m-4">
            <div className=" space-x-2">1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </div>
        <div className=" w-3/4  ">
          <div className="m-5" > <h2>Employee status</h2> </div>
          <table className="table-fixed mx-3 ">
            <thead>
              <tr>
                <th className="w-1/8 text-xl ">Job No.</th>
                <th className="w-1/4 text-xl">Name </th>
                <th className="w-1/6 text-xl">Progress</th>
                <th className="w-1/2 text-xl">Discreption</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1.</td>
                <td className="text-center">Intro to CSS</td>
                <td><ProgressBar progress={30} /></td>
                <td >bsdjawfsejfjsehaf eajfbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawjaefawk</td>

              </tr>
              <tr className="">
                <td className="text-center">2.</td>
                <td className="text-center">Intro to CSS</td>
                <td><ProgressBar progress={50} /></td>
                <td >disreajfbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawjaefawkip</td>

              </tr>
              <tr>
                <td className="text-center">3.</td>
                <td className="text-center">Intro to CSS</td>
                <td><ProgressBar progress={75} /></td>
                <td >disreajfbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawjaefawkip</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
            <a href="https://twitter.com/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
          </p>

        </div>
      </footer>
    </div>
  );
}
