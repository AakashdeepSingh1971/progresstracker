import Head from "next/head";

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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
      <div className="flex h-screen mt-10">
<div className="w-1/4 fixed"> 
   <div></div>
  </div>
  <div className="w-1/4 "> </div>
  <div className=" w-3/4  ">
  <table className="table-fixed">
  <thead>
    <tr>
      <th className="w-1/9 ...">Job No.</th>
      <th className="w-1/4 ">Job</th>
      <th className="w-1/6 ...">Progress</th>
      <th className="w-1/6 ...">Discreption</th>
      <th className="w-1/6 ...">start</th>
      <th className="w-1/6 ...">completion</th>
    </tr>
  </thead>
  <tbody>    
    <tr>
      <td>1.</td>
      <td>Intro to CSS</td>
      <td><progress id="file" value="32" max="100"  > 32% </progress></td>
      <td>disripwqerffsd ffsdfsefdsfwes fvsrfsedzvsga dcaefsvadfdvsf vg ascdsaasdafaszca feasdczfesv awdascesfgeacwfweav</td>
      <td>st time</td>
      <td>end</td>
    </tr>
    <tr className="bg-blue-100">
    <td>2.</td>
      <td>Intro to CSS</td>
      <td><progress id="file" value="32" max="100" > 32% </progress></td>
      <td>disrip</td>
      <td>st time</td>
      <td>end</td>
    </tr>
    <tr>
    <td>3.</td>
      <td>Intro to CSS</td>
      <td><progress id="file" value="32" max="100" color='blue'> 32% </progress></td>
      <td>disrip</td>
      <td>st time</td>
      <td>end</td>
    </tr>
  </tbody>
</table>
</div>
</div>
     
    </div>
  );
}
