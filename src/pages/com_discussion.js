import React from "react";
import "./community.css";
import a1 from "./1.png";
import a2 from "./2.png";
import a3 from "./3.png";
import a4 from "./4.png";
import h from "./home.svg";
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
              <a href="/community">
                <img src={h} width={60} height={40} />
              </a>
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
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "23px",
            }}
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
      <div className="p1" id="p589" style={{width : "100%"}}>
        <section className="px-2 py-10 md:px-0">
          <figure className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-4xl font-semibold text-black">
              What developers are saying ?
            </h1>
            <blockquote className="mt-10 text-xl text-gray-900">
              <p>
                “Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                perspiciatis quam nulla, rerum provident dicta ipsum officiis
                nobis dolore neque commodi praesentium placeat earum assumenda.”
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-6">
              <div className="isolate flex -space-x-2">
                <img
                  className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                  alt="Dan_Abromov"
                />
                <img
                  className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
                  alt="Guillermo_Rauch"
                />
                <img
                  className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
                  alt="Lee_Robinson"
                />
                <img
                  className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
                  alt="Delba"
                />
              </div>
              <div>
                <p className="font-semibold text-black">200+ developers</p>
              </div>
            </figcaption>
          </figure>
        </section>
        <section className="px-2 py-10 md:px-0">
          <figure className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-4xl font-semibold text-black">
              What developers are saying ?
            </h1>
            <blockquote className="mt-10 text-xl text-gray-900">
              <p>
                “Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                perspiciatis quam nulla, rerum provident dicta ipsum officiis
                nobis dolore neque commodi praesentium placeat earum assumenda.”
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-6">
              <div className="isolate flex -space-x-2">
                <img
                  className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                  alt="Dan_Abromov"
                />
                <img
                  className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
                  alt="Guillermo_Rauch"
                />
                <img
                  className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
                  alt="Lee_Robinson"
                />
                <img
                  className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
                  alt="Delba"
                />
              </div>
              <div>
                <p className="font-semibold text-black">200+ developers</p>
              </div>
            </figcaption>
          </figure>
        </section>
        <section className="px-2 py-10 md:px-0">
          <figure className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-4xl font-semibold text-black">
              What developers are saying ?
            </h1>
            <blockquote className="mt-10 text-xl text-gray-900">
              <p>
                “Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                perspiciatis quam nulla, rerum provident dicta ipsum officiis
                nobis dolore neque commodi praesentium placeat earum assumenda.”
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-6">
              <div className="isolate flex -space-x-2">
                <img
                  className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                  alt="Dan_Abromov"
                />
                <img
                  className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
                  alt="Guillermo_Rauch"
                />
                <img
                  className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
                  alt="Lee_Robinson"
                />
                <img
                  className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
                  alt="Delba"
                />
              </div>
              <div>
                <p className="font-semibold text-black">200+ developers</p>
              </div>
            </figcaption>
          </figure>
        </section>
      </div>
      
    </div>
  );
};
export default Community;