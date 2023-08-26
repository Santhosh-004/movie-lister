import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Progress,
    Typography,
  } from "@material-tailwind/react";

export default function Info({ col, open }) {
  return (
    <>
      <Dialog open={open} className="p-3 text-center text-white bg-opacity-10 h-5/6 overflow-scroll">
      <Typography variant="h1">{col.title}</Typography>
        <div className="sm:grid grid-cols-2">
            <div className="w-60 mx-auto m-4">
                <img className="rounded-xl" src={`https://image.tmdb.org/t/p/original/${col.poster_path}`} alt="poster" />
            </div>
            <div>
                <p>{col.overview}</p>
                <div className="flex justify-between px-2 mt-4">
                    <Progress value={col.vote_average * 10} size="lg" className="px-1 py-1 bg-black bg-opacity-30 w-8/12 sm:w-9/12 mt-2.5" color="amber"/>
                    <h2 className="text-2xl bg-amber-600 rounded-lg px-2 drop-shadow-lg shadow-black">{col.vote_average}</h2>
                </div>
            </div>
            <Button className="text-white text-md mt-3" onClick={() => window.open(col.media_type == "movie" ? `https://www.themoviedb.org/movie/${col.id}` : `https://www.themoviedb.org/tv/${col.id}`)}>Go to TMDB</Button>
        </div>
      </Dialog>
    </>
  );
};