import React from "react";
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <section className="flex justify-between items-center">
          <a href="#">
            <h1 className="sm:text-4xl text-2xl tracking-tight  leading-none  text-gradient uppercase font-semibold">
              Deepanshu <br /> Agarwal
            </h1>
          </a>
          <button className="btn btn-sm">Work with me</button>
        </section>
      </div>
    </header>
  );
};

export default Header;
