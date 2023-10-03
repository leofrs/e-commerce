const Car = () => {
  return (
    <main className="p-5">
      <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Lista de compras</h1>

        <div className="bg-white p-4 rounded-lg shadow">
          <div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img src="/src/img/1_1.jpg" className="w-36" alt="" />
              <div className="flex flex-col justify-between">
                <div className="flex justify-between mb-3">
                  <h3>
                    Logitech G502 HERO High Performance Wired Gaming Mouse, HERO
                    25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                  </h3>
                  <span className="text-lg font-semibold"> $17.99 </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    Qty:
                    <select
                      name=""
                      id=""
                      className="ml-3 py-1 border-gray-200 focus:border-purple-600 focus:ring-purple-600"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </div>
                  <a href="#" className="text-purple-600 hover:text-purple-500">
                    Remove
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Car;
