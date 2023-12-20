import React from "react";
import "./community.css";
import Blog from "./Blog";
import a1 from "./1.png";
import a2 from "./2.png";
import a3 from "./3.png";
import a4 from "./4.png";
import h from "./home.svg";
import {
  BrowserRouter as BrowserRouter1,
  HashRouter as HashRouter2,
  Routes,
  Route,
  Link,
} from "react-router-dom";
const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];
const Community = () => {
  return (
    <div className="all">
      <div className="dash">
        <aside
          className="flex h-screen w-16 flex-col items-center overflow-y-auto border-r bg-white py-8"
          style={{ height: "658px" }}
        >
          <nav className="flex flex-1 flex-col items-center space-y-6">
            <a href="/community">
              <img src={h} width={60} height={40} />
            </a>
            <a href="/community/newsletter">
              <img src={a1} width={60} height={40} alt="" />
            </a>

            <a href="/community/collaboration">
              <img src={a2} width={60} height={40} alt="" />
            </a>

            <a href="/community/discussions">
              <img src={a3} width={60} height={40} alt="" />
            </a>

            <a href="/community/blogs">
              <img src={a4} width={60} height={40} alt="" />
            </a>

            {/* <a
              href="#"
              className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
            >
              users
            </a> */}
          </nav>

          <div
            className="flex flex-col items-center space-y-6"
            style={{ marginTop: "23px" }}
          >
            {/* <a
              href="#"
              className="rounded-lg bg-gray-100 p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none"
            >
              settings
            </a> */}

            <a href="#">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="User avatar"
              />
            </a>
          </div>
        </aside>
      </div>
      <div className="p1" style={{width : "100%" , border : "none"}}>
        {/* <Blog/> */}
        <div className="bg-white py-24 sm:py-32" style={{paddingTop : "1rem" , paddingLeft : "8rem"}}>
        <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet our users
              </h2>
              <p className="mt-10 text-lg leading-8 text-gray-600">
                Where voices harmonize and differences unite, our community
                thrives in shared purpose, weaving a tapestry of support,
                belonging, and boundless possibilities.
              </p>
            </div>
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              
              {people.map((person) => (
                <div
                  className="mentors p-4 ml-10 border-2 border-gray-200 rounded-lg"
                  key={person.name}
                  style={{ width: "600px", height: "400px" }}
                >
                  <li>
                    <div className="flex items-center gap-x-6">
                      <img
                        className="h-16 w-16 rounded-full"
                        src={person.imageUrl}
                        alt=""
                      />
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          {person.name}
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  </li>
                  <p className="p-3">
                    🚀 Exciting news! Our team at [Company XYZ] just launched a
                    groundbreaking product aimed at revolutionizing how we
                    approach [industry/sector]. 🌟 We're thrilled to introduce
                    [Product Name], designed to streamline processes and enhance
                    user experiences. With its innovative features, we're
                    confident it'll redefine standards in the [industry]. 👉
                    Want to learn more? Dive deeper into the details in our
                    latest blog post: [Link to Blog Post] Join us in this
                    journey towards innovation! Share your thoughts in the
                    comments below. #Innovation #ProductLaunch #CompanyXYZ
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="p2">
        <div className="news">
          <h2>Trending Discussions</h2>
          <div
            className="p-4 space-y-2"
            style={{
              maxWidth: "500px",
              maxHeight: "350px",
              overflow: "hidden",
            }}
          >
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3 w-3 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <blockquote className="text-xs text-gray-800">
              “Finally, I've found a template that covers all bases for a
              bootstrapped startup. We were able to launch in days, not months.”
            </blockquote>
            <div className="border-t border-gray-300 pt-2 flex items-center">
              <img
                style={{ width: "1.5rem", height: "1.5rem" }}
                className="rounded-full object-cover"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="ml-1 min-w-0">
                <p className="truncate text-2xs font-semibold text-gray-800">
                  Theresa Webb
                </p>
                <p className="truncate text-2xs text-gray-500">Web Designer</p>
              </div>
            </div>
          </div>
          <div
            className="p-4 space-y-2"
            style={{
              maxWidth: "500px",
              maxHeight: "350px",
              overflow: "hidden",
            }}
          >
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3 w-3 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <blockquote className="text-xs text-gray-800">
              “Finally, I've found a template that covers all bases for a
              bootstrapped startup. We were able to launch in days, not months.”
            </blockquote>
            <div className="border-t border-gray-300 pt-2 flex items-center">
              <img
                style={{ width: "1.5rem", height: "1.5rem" }}
                className="rounded-full object-cover"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="ml-1 min-w-0">
                <p className="truncate text-2xs font-semibold text-gray-800">
                  Theresa Webb
                </p>
                <p className="truncate text-2xs text-gray-500">Web Designer</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="news2"></div>
      </div> */}
    </div>
  );
};
export default Community;