import Image from "next/image";
import { FaPlay, IoIosArrowForward } from "@/assets/icons";
import AnimeSlider from "@/components/AnimeSlider";
export default function Home() {
  // Example URL
  const url = "https://otakudesu.cam/anime/kanojo-kanojo-s2-sub-indo/";

  // Get the part of the URL after the last "/"
  const slug = url.substring(url.lastIndexOf("/") + 1);

  return (
    <>
      <div className="w-[95%] md:w-[80%] m-auto">
        <div className="carousel  md:block mb-16 ">
          <div className="mt-6 md:grid md:grid-cols-6 px-3 md:gap-10 md:items-center">
            <div className="col-span-4 flex flex-col gap-2 md:gap-6 ">
              <h1 className="md:text-4xl text-2xl text-[#DBDCDD] font-bold font-rowdies uppercase">
                One Piece
              </h1>
              <p className="text-[#D5D2D0] font-roboto text-sm md:text-lg font-light">
                Gold Roger was known as the Pirate King, the strongest and most
                infamous being to have sailed the Grand Line. The capture and
                death of Roger by the World Government brought a change
                throughout the world. His last words before his death revealed
                the location of the greatest treasure in the world, One Piece.
                It was this revelation that brought about the Grand Age of
                Pirate
              </p>
              <div className="md:grid md:grid-cols-3 mt-4">
                <a
                  href="/details/anime/50/one-piece"
                  className="md:px-5 md:py-3 w-[200px] md:w-full px-3 py-3 ring-1 text-xs flex items-center gap-4 ring-[#FF7F57]  rounded-md uppercase md:text-sm text-[#e9eaeb]"
                >
                  <FaPlay className="text-lg" />
                  <span>Start Watching</span>
                </a>
              </div>
            </div>
            <div
              className="md:h-[400px] hidden sm:block rounded-md md:w-[300px] bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(https://cdn.myanimelist.net/images/anime/6/73245l.jpg)`,
              }}
            ></div>
          </div>
        </div>
        <div className="trendingNow mt-3 md:mt-10">
          <div className="header flex gap-2 md:gap-5 items-center">
            <h1 className="text-lg md:text-xl text-[#DBDCDD] font-bold font-karla uppercase">
              Complete Now
            </h1>
            <IoIosArrowForward className="text-white text-xl" />
          </div>
          <div className="card py-5 px-2 md:px-3">
            <div className="">
              <AnimeSlider tipe="complete"/>
            </div>
          </div>
        </div>
        <div className="updateAnime mt-3 md:mt-10">
          <div className="header flex gap-2 md:gap-5 items-center">
            <h1 className="text-lg md:text-xl text-[#DBDCDD] font-bold font-karla uppercase">
              Ongoing Anime
            </h1>
            <IoIosArrowForward className="text-white text-xl" />
          </div>
          <div className="card py-5 px-2 md:px-3">
            <div className="">
            <AnimeSlider tipe="ongoing"/>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}
