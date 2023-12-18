import React from "react";
import './contest.css'
const Contest = () => {
  return (
    <div className="con">
      <img
        src="https://www.startupindia.gov.in/content/dam/invest-india/phase-2/scheme-banner.png/_jcr_content/renditions/cq5dam.web.1280.1280.png"
        alt=""
        style={{ width: "100%" }}
      />
      <div className="main">
        <div className="reg_details"></div>
        <div className="reg" id="xyz">
          <div class="wrapper" style={{ backgroundColor: "#ffd673" }}>
            <div class="logo">
              <img
                src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
                alt=""
              />
            </div>
            <div class="text-center mt-4 name">Twitter</div>
            <form class="p-3 mt-3">
              <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Username"
                />
              </div>
              <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input
                  type="password"
                  name="password"
                  id="pwd"
                  placeholder="Password"
                />
              </div>
              <button class="btn mt-3" style={{ backgroundColor: "#ff693d" }}>
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-7xl px-2 lg:px-8">
        <div class="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <svg
                class="h-9 w-9 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                ></path>
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">
              Secured Payments
            </h3>
            <p class="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <svg
                class="h-9 w-9 text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">
              Fast &amp; Easy to Load
            </h3>
            <p class="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                class="h-9 w-9 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">
              Light &amp; Dark Version
            </h3>
            <p class="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <svg
                class="h-9 w-9 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                ></path>
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
            <p class="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="bott">
        <div className="left">
          <main>
            <div id="header">
              <h2>
                <b>Previous Winners</b>
              </h2>
            </div>
            <div id="leaderboard">
              <div class="ribbon"></div>
              <table>
                <tr>
                  <td class="number">1</td>
                  <td class="name">Lee Taeyong</td>
                  <td class="points">
                    {" "}
                    <img
                      class="gold-medal"
                      src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                      alt="gold medal"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="number">2</td>
                  <td class="name">Mark Lee</td>
                  <td class="points"></td>
                </tr>
                <tr>
                  <td class="number">3</td>
                  <td class="name">Xiao Dejun</td>
                  <td class="points"></td>
                </tr>
                <tr>
                  <td class="number">4</td>
                  <td class="name">Qian Kun</td>
                  <td class="points"></td>
                </tr>
                <tr>
                  <td class="number">5</td>
                  <td class="name">Johnny Suh</td>
                  <td class="points"></td>
                </tr>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Contest;
