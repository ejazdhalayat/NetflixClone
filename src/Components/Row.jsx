import axios from "../axios";
import React, { useEffect, useState } from "react";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState(null);
  const base_url = "https://image.tmdb.org/t/p/original";
  const authcheck = "hjbgbfuhsgfshgf8959" ;

  // async function fetchData(){
  //   const result = await axios.get(fetchUrl) ;
  //   console.log(result)

  // }

  useEffect(() => {
    async function fetchData(){
      await axios.get(fetchUrl)
      .then(response => {
        setMovies(response.data.results)
      }).catch(err => console.log(err))
    }

    fetchData() ;
  }, [fetchUrl]);

  console.log(movies)

  return (
    <div className=" bg-black">
      <h1 className=" text-white text-2xl font-semibold">{title}</h1>
      <div className=" flex overflow-x-scroll scrollbar-hide overflow-y-hidden p-4 space-x-2 ">
      {movies?.map((movie ,index) => (
            <img key={index} src={base_url + movie.poster_path || movie.backdrop_path
} className={` ${isLargeRow ? "h-[250px] hover:scale-110" : "h-[150px] hover:scale-105"} w-[350px]  object-contain transition transform hover:scale-105 cursor-pointer duration-300 ease-in-out  `} />
        ))}
      </div>
    </div>
  );
}

export default Row;