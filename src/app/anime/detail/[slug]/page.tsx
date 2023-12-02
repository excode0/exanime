"use client";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import LoadingDetail from "@/helpers/LoadingDetail";
import { getDetailAnime, getStreamDetailAnime } from "@/hooks/api";
import AnimeSlider from "@/components/AnimeSlider";
import { PageProps } from "../../../../../.next/types/app/layout";

interface SlugAnimeDetail {
  param: { slug: string };
}

const DetailAnime: FC<PageProps> = ({ params }) => {
  const [loading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState<any>({});
  const [streamdetail, setDetailStream] = useState<any>({});
  const [ActiveStream, setActiveStream] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDetailAnime({ slug: params.slug });
        const { anime_data } = data;
        const dataStream = await getStreamDetailAnime({
          slug: anime_data.episodes[0].link,
        });
        setDetail(anime_data);
        setDetailStream(dataStream.anime_data);
        setActiveStream(anime_data.episodes.length);
      } catch (error) {
        console.error(`Error fetching anime:`, error);
        // Handle the error, you might want to show an error message or redirect to an error page
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  const updateStreamDetail = (xSlug: String) => {
    // console.log(xSlug);
    const fetchData = async () => {
      try {
        const dataStreamUpdate = await getStreamDetailAnime({
          slug: xSlug,
        });
        // setDetail(anime_data);
        setDetailStream(dataStreamUpdate.anime_data);
      } catch (error) {
        console.error(`Error fetching anime:`, error);
        // Handle the error, you might want to show an error message or redirect to an error page
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  };

  function convertScoreToStars(score: string): string {
    const maxScore = 10.0;
    const normalizedScore = Math.min(parseFloat(score), maxScore); // Ensure the score is not greater than maxScore
    const starCount = Math.round((normalizedScore / maxScore) * 5); // Scale the score to a 5-star rating
    return "⭐".repeat(starCount);
  }
  const [isOpenDropdown, setIsOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setIsOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="">
      {loading ? (
        <LoadingDetail />
      ) : detail.judul ? (
        <div className="w-[90%] m-auto relative mt-0">
          <div className=" ">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
              <div className="w-[100%] h-[480px] bg-white md:col-span-3 ">
                <iframe
                  className="frame-video w-full h-full"
                  src={streamdetail.stream}
                  allowFullScreen={true}
                ></iframe>
              </div>
              <div className="w-full bg-white bg-opacity-5 rounded-xl flex flex-col justify-start items-center ">
                <div className="w-full p-2 shadow-xl flex justify-center items-center">
                  <span className="text-white text-center text-xl font-bold p-2">
                    EPISODE
                  </span>
                </div>
                <div className="w-full min-h-[100px] p-5 flex md:flex-wrap overflow-x-auto md:overflow-y-auto md:max-h-[380px] mb-10">
                  {detail.episodes.
                    toReversed()
                    .map((ress: any, i: any) => (
                      <button
                        // href={`/watch${ress.episodeId}`}
                        className={`w-[50px] h-[50px] ${ActiveStream != i+1 ?"text-white":"text-white bg-sky-600"} text-lg border border-sky-500 hover:bg-sky-600 hover:text-white m-1 rounded-lg flex justify-center items-center flex-shrink-0`}
                        key={ress.episodeId}
                        onClick={(e) => {updateStreamDetail(ress.link); setActiveStream(i+1)}}
                      >
                        {i + 1}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white bg-opacity-5 mt-2 rounded-lg">
            <span className="text-white p-2 text-lg">Download</span>
            <div>
              {streamdetail.downloads.map((val: any, i: any) => (
                <div className="relative inline-block p-2" key={i}>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-200 active:text-gray-800"
                    onClick={() => toggleDropdown(i)}
                  >
                    {val.quality}
                    <svg
                      className="w-5 h-5 ml-2 -mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 0 1 1.414 0L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                      />
                    </svg>
                  </button>

                  <div
                    className={`flex justify-center items-center absolute ${
                      i < 2 ? "left-0" : "right-0"
                    } mt-1 bg-white border rounded-md shadow-lg  ${
                      isOpenDropdown === i ? "block" : "hidden"
                    }`}
                  >
                    {val.links.map((val1: any, i1: any) => (
                      <a
                        href={val1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 p-2 text-sm text-white hover:bg-blue-500 hover:text-white m-2 rounded-lg flex justify-center items-center"
                        key={i1}
                      >
                        <span className="p-2">{i1 + 1}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DETAIL INFORMATION */}
          <div className="w-full bg-white bg-opacity-5 p-2 mt-5 rounded-lg grid grid-cols-3 md:grid-cols-6 gap-5">
            <div className="col-span-1 flex flex-col ">
              <img src={detail.img_src} alt="" className="w-full rounded-md" />
              {/* <button className="bg-[#f0683e] text-white text-sm py-1 mt-3 rounded-sm font-medium">
                Add to List
              </button> */}
            </div>
            <div className="col-span-2 md:col-span-5 py-3 px-2 block">
              <h1 className="text-white font-rowdies text-4xl">
                {detail.judul}
              </h1>
              <div className="flex">
                <span>{convertScoreToStars(detail.skor)}</span>
                <span className="text-gray-400">{detail.skor}</span>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-6 mt-3">
                <div className="col-span-1 flex flex-col">
                  <span className="font-bold text-white">Produser</span>
                  <span className="font-bold text-white">Tipe</span>
                  <span className="font-bold text-white">Status</span>
                  <span className="font-bold text-white">Durasi</span>
                  <span className="font-bold text-white">Tanggal Rilis</span>
                  <span className="font-bold text-white">Total Episode</span>
                </div>
                <div className="col-span-1 flex flex-col w-[10px]">
                  <span className="ml-0 text-white">:</span>
                  <span className="ml-0 text-white">:</span>
                  <span className="ml-0 text-white">:</span>
                  <span className="ml-0 text-white">:</span>
                  <span className="ml-0 text-white">:</span>
                  <span className="ml-0 text-white">:</span>
                </div>
                <div className="col-span-1 md:col-span-4 flex flex-col ml-[-80%] md:ml-[-20%]">
                  <span className="text-white">{detail.produser}</span>
                  <span className="text-white">{detail.tipe}</span>
                  <span className="text-white">{detail.status}</span>
                  <span className="text-white">{detail.durasi}</span>
                  <span className="text-white">{detail.tanggalrilis}</span>
                  <span className="text-white">{detail.totalepisode}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RECOMENDED */}
          <div className="recomendation mt-10">
            <h1 className="mb-5 text-lg font-karla text-white md:text-2xl">
              Recomendation
            </h1>
            <div className="card">
              <AnimeSlider tipe="recomended" />
            </div>
          </div>
        </div>
      ) : (
        <p>No anime data available.</p>
      )}
    </div>
  );
};

export default DetailAnime;
