"use client";
import { getCompleteAnime, getCompleteAnimeMore } from "@/hooks/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const page = () => {
  const [getAnimeData, setgetAnimeData] = useState<any[]>([]);

  const [getPagination, setgetPagination] = useState("");

  const [DefaultPagination, setDefaultPagination] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        data = await getCompleteAnime();
        const { anime_data } = data;
        // setgetAnimeData(anime_data);
        // setgetPagination(data.pagination)
        // Extracting data and pagination
        const dataAnime = anime_data.find((item: { data: any }) => item.data);
        const pagination = anime_data.find(
          (item: { pagination: any }) => item.pagination
        );

        // Set state based on extracted data
        if (dataAnime && dataAnime.data) {
          setgetAnimeData(dataAnime.data);
        }

        if (pagination && pagination.pagination) {
          setgetPagination(
            pagination.pagination[pagination.pagination.length - 1]
          );
        }
        console.log(getAnimeData);
      } catch (error) {
        console.error(`Error fetching Complete anime:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const showMore = () => {
    const fetchData = async (page: any) => {
      try {
        let data;
        data = await getCompleteAnimeMore(page);
        const { anime_data } = data;
        // Set state based on extracted data
        const dataAnime = anime_data.find((item: { data: any }) => item.data);
        if (dataAnime && dataAnime.data) {
          // Append new anime data to existing data
          setgetAnimeData((prevData) => [...prevData, ...dataAnime.data]);
        }
        setDefaultPagination(DefaultPagination + 1);
      } catch (error) {
        console.error(`Error fetching Complete anime:`, error);
      } finally {
        // setLoading(false);
      }
    };
    const intValuePage = parseInt(getPagination, 10);
    if (DefaultPagination < intValuePage) {
      fetchData(DefaultPagination + 1);
    }
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {loading ? (
        <div className="w-[80%] grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="h-64 rounded-md bg-slate-400 animate-pulse w-[250px] "></div>
          <div className="h-64 rounded-md bg-slate-400 animate-pulse w-[250px] "></div>
          <div className="h-64 rounded-md bg-slate-400 animate-pulse w-[250px] "></div>
          <div className="h-64 rounded-md bg-slate-400 animate-pulse w-[250px] "></div>
          <div className="h-64 rounded-md bg-slate-400 animate-pulse w-[250px] "></div>
          <div className="h-64 rounded-md bg-slate-400 animate-pulse w-[250px] "></div>
          <div className="h-64 rounded-md bg-slate-400 animate-pulse w-[250px] "></div>
          <div className="h-64 rounded-md bg-slate-400 animate-pulse w-[250px] "></div>
        </div>
      ) : getAnimeData.length > 0 ? (
        <>
          <div className="flex flex-col justify-center items-center">
            <div
              key="anime-data"
              className="w-[80%] grid grid-cols-2 md:grid-cols-5"
            >
              {getAnimeData.map((section, sectionIndex) => (
                <Link
                href="/anime/detail/[slug]"
                as={`/anime/detail/${section.slug}`}
              >
                <div
                  key={sectionIndex}
                  className="relative rounded-md w-full h-full p-2"
                >
                  <img
                    src={section.image_src}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                  <div className="w-[90%] p-2 bg-black bg-opacity-80 z-10 absolute bottom-0 left-3 overflow-hidden rounded-md flex justify-center items-center">
                    <span
                      className="text-white text-lg font-bold "
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {section.title}
                    </span>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="border-blue-600 border-2 rounded-md  hover:bg-blue-600 p-2 ">
            <button className="text-white " onClick={(e) => showMore()}>Show More</button>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default page;
