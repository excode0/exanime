"use client";
import { getAllAnime } from "@/hooks/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFilm } from "react-icons/fa";
const AllAnime = () => {
  const [getAnimeData, setgetAnimeData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const numberOfElements = 50;
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        data = await getAllAnime();
        const { anime_data } = data;
        setgetAnimeData(anime_data);
      } catch (error) {
        console.error(`Error fetching Complete anime:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center">
      {loading ? (
        <div className="w-[80%] bg-black bg-opacity-30 flex flex-col justify-start">
          <div className="w-full flex justify-center items-center">
            <span className="text-white text-xl font-bold">ALL ANIME</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-center items-center">
            {[...Array(numberOfElements)].map((_, index) => (
              <div
                key={index}
                className="h-2 rounded-md bg-slate-400 animate-pulse w-full"
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-[80%] bg-black bg-opacity-30 flex flex-col justify-start">
          <div className="w-full flex justify-center items-center">
            <span className="text-white text-xl font-bold p-5">ALL ANIME</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-center items-center p-2">
            {getAnimeData.map((val, index) => (
              <Link
                href="/anime/detail/[slug]"
                as={`/anime/detail/${val.link}`}
                key={index+"a"}
              >
                <div
                  key={index}
                  className="flex justify-start items-start group"
                >
                  <FaFilm className="text-white mr-2" /> {/* Film icon */}
                  <span
                    className="text-white relative"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {val.title}
                    <div className="absolute bg-white h-0.5 w-full left-0 bottom-0 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllAnime;
