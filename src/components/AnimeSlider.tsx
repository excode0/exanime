"use client";
import React, { useEffect, useState } from "react";
import { getOngoingAnime, getCompleteAnime } from "../hooks/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const AnimeSlider: React.FC<{ tipe: string }> = ({ tipe }) => {
  const [getAnimeData, setgetAnimeData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (tipe === "ongoing") {
          data = await getOngoingAnime();
        } else {
          data = await getCompleteAnime();
        }
        const { anime_data } = data;
        const dataAnime = anime_data.find((item: { data: any }) => item.data);

        // Set state based on extracted data
        if (dataAnime && dataAnime.data) {
          setgetAnimeData(dataAnime.data);
        }

        
        // setgetAnimeData(anime_data);
      } catch (error) {
        console.error(`Error fetching ${tipe} anime:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tipe]);

  const loaderCount = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {loading ? (
          loaderCount.map((ress, i) => (
            <SwiperSlide key={i}>
              <div className=" bg-[#b3b3b3] animate-pulse h-[130px] sm:h-[250px] rounded-md"></div>
            </SwiperSlide>
          ))
        ) : getAnimeData.length > 0 ? (
          getAnimeData.map((ress, i) => (
            <SwiperSlide key={i}>
              <div className="cardItem ">
                <Link
                  href="/anime/detail/[slug]"
                  as={`/anime/detail/${ress.slug}`}
                >
                  <LazyLoadImage
                    src={ress.image_src}
                    effect="blur"
                    delayTime={500}
                    className="rounded-md"
                    alt={`Anime: ${ress.title}`}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>No anime data available.</p>
        )}
      </Swiper>
    </>
  );
};

export default AnimeSlider;
