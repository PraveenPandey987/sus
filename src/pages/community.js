import React from "react";
import "./community.css";
import Blog from "./Blog";
import a1 from "./1.png";
import a2 from "./2.png";
import a3 from "./3.png";
import a4 from "./4.png";
import h from "./home.svg"
import {
  BrowserRouter as BrowserRouter1,
  HashRouter as HashRouter2,
  Routes,
  Route,
  Link,
} from "react-router-dom";
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

            <a href="/community/blogs">
              <img src={a3} width={60} height={40} alt="" />
            </a>

            <a href="#">
              <img src={a4} width={60} height={40} alt="" />
            </a>

            {/* <a
              href="#"
              className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
            >
              users
            </a> */}
          </nav>

          <div className="flex flex-col items-center space-y-6" style={{marginTop : "23px"}}>
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
      <div className="p1">
        {/* <Blog/> */}
        <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card">
          <div class="card-body py-5">

           
            <div id="carouselDarkVariant" class="carousel slide carousel-dark" data-mdb-ride="carousel">
              
              <div class="carousel-indicators mb-0">
                <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="1"
                  aria-label="Slide 1"></button>
                <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="2"
                  aria-label="Slide 1"></button>
              </div>

              
              <div class="carousel-inner pt-2 pb-5">
               
                <div class="carousel-item active">
                  <div class="row d-flex justify-content-center">
                    <div class="col-md-8 col-lg-9 col-xl-8">
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                            class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="90"
                            height="90" />
                        </div>
                        <div class="flex-grow-1 ms-4 ps-3">
                          <figure>
                            <blockquote class="blockquote mb-4">
                              <p>
                                <i class="fas fa-quote-left fa-lg text-warning me-2"></i>
                                <span class="font-italic">Lorem ipsum dolor sit amet consectetur adipisicing
                                  elit. Pariatur sint nesciunt ad itaque aperiam expedita officiis incidunt
                                  minus facere, molestias quisquam impedit inventore.</span>
                              </p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                              Miranda Smith in <cite title="Source Title">The Guardian</cite>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div class="carousel-item">
                  <div class="row d-flex justify-content-center">
                    <div class="col-md-8 col-lg-9 col-xl-8">
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                            class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="90"
                            height="90" />
                        </div>
                        <div class="flex-grow-1 ms-4 ps-3">
                          <figure>
                            <blockquote class="blockquote mb-4">
                              <p>
                                <i class="fas fa-quote-left fa-lg text-warning me-2"></i>
                                <span class="font-italic">Sed ut perspiciatis unde omnis iste natus error sit
                                  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                  quae ab illo inventore veritatis.</span>
                              </p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                              Annie Hall <cite title="Source Title">New York Times</cite>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row d-flex justify-content-center">
                    <div class="col-md-8 col-lg-9 col-xl-8">
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                            class="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="90"
                            height="90" />
                        </div>
                        <div class="flex-grow-1 ms-4 ps-3">
                          <figure>
                            <blockquote class="blockquote mb-4">
                              <p>
                                <i class="fas fa-quote-left fa-lg text-warning me-2"></i>
                                <span class="font-italic">At vero eos et accusamus et iusto odio dignissimos
                                  qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                  et quas molestias excepturi sint amet dolore.</span>
                              </p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                              Jason More in <cite title="Source Title">Smash Magazine</cite>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
      <div className="p2">
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
      </div>
    </div>
  );
};
export default Community;
