const App = () => {
  return (
    <div className="h-[100vh] flex flex-col space-y-10 bg-primary p-8">
      <section className="h-[40%] gap-6 overflow-hidden grid grid-cols-3">
        <div className="h-full flex flex-row">
          <div className="flex-1 items-center">
            <img
              src="https://avatars.githubusercontent.com/u/78205495?v=4"
              alt=""
            />
          </div>
          <div className="flex-1 h-[90%] bg-white rounded-r-lg shadow-md shadow-black">
            <div className="m-4">
              <h2 className="text-xl">Good Morning,</h2>
              <h1 className="text-3xl">Sophie Campbell</h1>
              <span className="italic font-thin block mb-3">
                22 August, Thursday
              </span>

              <span className="italic font-semibold block text-xs mb-3">
                Month: August
              </span>

              <div className="flex bg-secondary p-2 rounded-lg">
                <div className="flex-1">
                  <div className="font-bold">71%</div>
                  <div className="text-xs">Completed</div>
                </div>
                <div>
                  <div className="text-xs">Remaining</div>
                  <div>09 Days</div>
                </div>
              </div>

              <span className="block italic my-1">Remainging Days:</span>

              <p>
                <span className="inline-block h-3 w-3 bg-blue-500 rounded-full"></span>{" "}
                05 Weekdays
              </p>
              <p>
                <span className="inline-block h-3 w-3 bg-green-500 rounded-full"></span>{" "}
                04 Weekends & Holidays
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white h-[90%] rounded-lg shadow-sm shadow-black my-4 p-4">
          <h3 className="font-bold text-xl">Budget Vs Expense</h3>
          <span className="block italic text-slate-400">From 01-22 August</span>
        </div>

        <div className="bg-white h-[90%] rounded-lg shadow-sm shadow-black my-4 p-4">
          <h3 className="font-bold text-xl">Expense Distribution</h3>
          <span className="block italic text-slate-400">From 01-22 August</span>

          <div className="my-2">
            <ul>
              <li className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 bg-blue-500 rounded-full"></span>
                Bills & Utilities
              </li>
              <li className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 bg-blue-300 rounded-full"></span>
                Food
              </li>
              <li className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 bg-yellow-500 rounded-full"></span>
                Personal
              </li>
              <li className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 bg-orange-500 rounded-full"></span>
                Healthcare
              </li>
              <li className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 bg-green-500 rounded-full"></span>
                Education
              </li>
              <li className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 bg-green-300 rounded-full"></span>
                Transport
              </li>
              <li className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 bg-pink-300 rounded-full"></span>
                Investment
              </li>
              <li className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 bg-pink-700 rounded-full"></span>
                Other
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="h-[60%] flex gap-5">
        <div className="basis-[60%] ">
          <h3 className="text-2xl font-bold mb-2">Category wise Expense</h3>

          <ul className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
              <li key={data} className="bg-white p-4 rounded-lg">
                <div className="h-20 w-20 bg-primary flex items-center justify-center rounded-full">
                  <img
                    src="https://avatars.githubusercontent.com/u/8079861?s=100&v=4"
                    alt=""
                    className="h-[80%] w-[80%] rounded-full"
                  />
                </div>

                <p className="text-xl my-2">Bills & Utilities</p>

                <p className="mb-2">
                  <span className="font-semibold text-lg">$3,600</span> of
                  $3,200
                </p>

                <div className="w-full h-3 bg-blue-100 rounded-xl">
                  <div className="h-full w-[80%] bg-blue-500 rounded-xl" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="basis-[40%]">
          <h3 className="text-2xl font-bold mb-2">Recent Transactions</h3>
          <ul>
            {[1, 2, 3].map((data) => (
              <li className={`${(data % 2) == 0 ? '' : 'bg-white'} py-1 rounded-lg`} key={data}>
                <div className="flex items-center justify-around">
                  <p className="text-slate-400">20 August</p>
                  <div className="basis-1/2">
                    <p className="font-semibold">Door Handle Replacement</p>
                    <span className="italic text-slate-400">
                      Bills & Utilities
                    </span>
                  </div>

                  <p className="font-semibold">$360</p>

                  <button className="text-green-600 font-semibold bg-green-200 p-1.5 rounded-lg">
                    Cash
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;
