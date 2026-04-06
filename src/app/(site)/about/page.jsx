export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="flex gap-2 flex-col md:flex-row min-h-screen">
      {/* LEFT SIDE TEXT */}
      <div className="w-full md:w-1/2 flex  items-center">
        <div className="p-10 max-w-xl flex flex-col gap-2">
          <h1 className="text-3xl font-bold mb-3">About Us 🏡</h1>

          <p className="mt-4">
            🥛 We started this to provide fresh and high-quality milk products
            to customers. Many products today contain too much preservatives, so
            we offer a more natural option.
          </p>

          <p className="mt-3">
            🧈 We provide milk, curd, butter, and other dairy products. All
            items are prepared and delivered with care and hygiene.
          </p>

          <p className="mt-3">
            🔒 We follow clean and safe processes. 🚫 No harmful chemicals or
            unnecessary preservatives are added.
          </p>

          <p className="mt-3">
            🎯 Our goal is to make fresh and healthy dairy products easily
            available.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="md:w-1/2 items-center flex mr-4 w-full">
        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-6xl mb-4">🥛</div>
                <h3 className="text-2xl font-semibold mb-2">Fresh Daily</h3>
                <p className="text-gray-600">
                  Farm-fresh products delivered straight from our dairy farm to
                  your doorstep.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="text-2xl font-semibold mb-2">
                  Natural & Organic
                </h3>
                <p className="text-gray-600">
                  No artificial preservatives or chemicals. Pure, natural dairy
                  goodness.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-6xl mb-4">🚚</div>
                <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  Quick and reliable delivery service to ensure freshness in
                  every order.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src="/hero1.png"
          alt="farm"
          className="w-full h-[80vh] object-cover brightness-75 rounded-2xl"
        /> */}
      </div>
    </div>
  );
}
