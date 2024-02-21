import React from "react";

function Features() {
  return (
    <section className="py-16 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="flex bg-primary py-10 flex-col items-center">
            <div className="w-16 h-16 bg-emerald-600 border border-emerald-500 rounded-lg flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm2 0a6 6 0 1112 0 6 6 0 01-12 0zM8 4a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm8 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-6 12a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl text-center mt-2 text-stone-300 font-semibold mb-2">Real-Time Collaboration</h3>
              <p className="text-center font-bold text-sm w-1/2 mx-auto text-stone-400">Work together with your team in real-time, making collaboration seamless and efficient.</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex bg-primary py-10 flex-col items-center">
            <div className="w-16 h-16 bg-emerald-600 border border-emerald-500 rounded-lg flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.528 2.472a4 4 0 00-5.056.962A2.5 2.5 0 005 6.165V10a1 1 0 11-2 0V6.165a4.5 4.5 0 117.624-3.722l1.904 1.904A4.5 4.5 0 0115.5 10V17a1 1 0 11-2 0v-7a2.5 2.5 0 00-.672-1.677 4 4 0 00-.3-6.851zm-1.62 4.597a2.5 2.5 0 113.354 3.353l-1.904 1.904a2.5 2.5 0 01-3.354-3.353l1.904-1.904zm-1.414 3.536a1 1 0 10-1.414-1.414l-3.536 3.536a1 1 0 101.414 1.414l3.536-3.536zM9.5 16a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl text-center mt-2 text-stone-300 font-semibold mb-2">Multiple Language Support</h3>
              <p className="text-center font-bold text-sm w-1/2 mx-auto text-stone-400">Supports various programming languages, allowing you to work on diverse projects with ease.</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex bg-primary py-10 flex-col items-center">
            <div className="w-16 h-16 bg-emerald-600 border border-emerald-500 rounded-lg flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M17.707 3.293a1 1 0 010 1.414L7.414 15.707a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L6 13.586l10.293-10.293a1 1 0 011.414 0zM15 6a1 1 0 10-2 0v6a1 1 0 001 1h2a1 1 0 100-2h-1V6zM3 7a1 1 0 011-1h2a1 1 0 010 2H4v6h7a1 1 0 110 2H4a3 3 0 01-3-3V7zm0-2a5 5 0 015-5h2a5 5 0 015 5v1h1a3 3 0 013 3v7a5 5 0 01-5 5H4a5 5 0 01-5-5V8a3 3 0 013-3h1V5zm2 1v7h10V6H5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl text-center mt-2 text-stone-300 font-semibold mb-2">Rich Theme Selection</h3>
              <p className="text-center font-bold text-sm w-1/2 mx-auto text-stone-400">Choose from a wide range of themes and customization options to personalize your coding experience.</p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex bg-primary py-10 flex-col items-center">
            <div className="w-16 h-16 bg-emerald-600 border border-emerald-500 rounded-lg flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm1 3a1 1 0 011-1h8a1 1 0 011 1v1H5V5zm0 4h10v6H5V9zm10-1a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1h10z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl text-center mt-2 text-stone-300 font-semibold mb-2">Instant Updates</h3>
              <p className="text-center font-bold text-sm w-1/2 mx-auto text-stone-400">Experience instantaneous updates and synchronization, ensuring everyone is on the same page.</p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Features;
