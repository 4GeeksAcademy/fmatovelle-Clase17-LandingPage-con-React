import React from "react";
import { Card } from "./Card";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <Jumbotron />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <Card
                title={"Title"}
                text={
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo aperiam soluta quidem expedita, odit officia odio voluptas temporibus, debitis similique earum asperiores labore molestias"
                }
                img={"https://via.placeholder.com/500x325"}
                button={"Find out more!"}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <Card
                title={"Title"}
                text={
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo aperiam soluta quidem expedita, odit officia odio voluptas temporibus, debitis similique earum asperiores labore molestias"
                }
                img={"https://via.placeholder.com/500x325"}
                button={"Find out more!"}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <Card
                title={"Title"}
                text={
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo aperiam soluta quidem expedita, odit officia odio voluptas temporibus, debitis similique earum asperiores labore molestias"
                }
                img={"https://via.placeholder.com/500x325"}
                button={"Find out more!"}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <Card
                title={"Title"}
                text={
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo aperiam soluta quidem expedita, odit officia odio voluptas temporibus, debitis similique earum asperiores labore molestias"
                }
                img={"https://via.placeholder.com/500x325"}
                button={"Find out more!"}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
