import React from 'react'

const Footer = () => {
  const isLogin = true;
  return (
    <>
      <footer className="bg-[#0C0D10] px-10 py-10 grid grid-cols-1 md:flex md:justify-between gap-4 mt-10">
        <div className="flex sm:items-center gap-5 flex-col sm:flex-row mb-3">
          <div className="title">
            <h1 className="font-outfits sm:text-4xl font-black text-3xl text-[#5c9af0]">
              EXANIME
            </h1>
          </div>
          <div className="copyright flex flex-col justify-start sm:pl-10 ">
            <p className="text-slate-300 text-xs md:text-sm">
              © 2023 EXANIME | Website Made by EXANIME
            </p>
            <p className="text-slate-400 text-xs md:text-[13px] font-italic  mt-1">
              <em>
                This site does not store any files on our server, we only linked
                to the media which is hosted on 3rd party services.
              </em>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:flex md:gap-10 mt-3 md:w-[400px] md:justify-around ">
          <ul className="flex flex-col gap-2">
            <li className="text-sm sm:text-base font-karla font-semibold text-slate-300 hover:text-[#5c9af0] duration-300">
              <a href="/this-season">This Season</a>
            </li>
            <li className="text-sm sm:text-base font-karla font-semibold text-slate-300 hover:text-[#5c9af0] duration-300">
              <a href="/popular-anime">Popular Anime</a>
            </li>
            <li className="text-sm sm:text-base font-karla font-semibold text-slate-300 hover:text-[#5c9af0] duration-300">
              <a href="/popular-manga">Popular Manga</a>
            </li>
            {isLogin ? (
              <li className="text-sm sm:text-base font-karla font-semibold text-slate-300 hover:text-[#5c9af0] duration-300">
                <a href="/developer">Developer</a>
              </li>
            ) : (
              <li className="text-sm sm:text-base font-karla font-semibold text-slate-300 hover:text-[#5c9af0] duration-300">
                <a href="/sign-up">Login</a>
              </li>
            )}
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-sm sm:text-base font-karla font-semibold text-slate-300 hover:text-[#5c9af0] duration-300">
              <a href="/movies">Movies</a>
            </li>
            <li className="text-sm sm:text-base font-karla font-semibold text-slate-300 hover:text-[#5c9af0] duration-300">
              <a href="/tv-shows">TV Shows</a>
            </li>
            <li className="text-sm sm:text-base font-karla font-semibold text-slate-300 hover:text-[#5c9af0] duration-300">
              <a href="/dmca">DMCA</a>
            </li>
            <li className="text-sm sm:text-base font-karla font-semibold text-slate-300 hover:text-[#5c9af0] duration-300">
              <a href="https://github.com/LuckyIndraEfendi" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer