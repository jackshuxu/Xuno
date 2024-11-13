// src/components/GeneratedTrack.jsx

import React from "react";
import {
  FaPlay,
  FaPause,
  FaDownload,
  FaHeart,
  FaGlobeAmericas,
  FaExpand,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { playSong, pauseSong } from "../redux/features/playerSlice";

const GeneratedTrack = ({ track }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const isActive = activeSong && activeSong.id === track.key;

  const handlePlayPause = () => {
    if (isActive) {
      if (isPlaying) {
        dispatch(pauseSong());
      } else {
        dispatch(playSong(track));
      }
    } else {
      dispatch(playSong(track));
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4 bg-[#252020] rounded-lg">
      {/* Cover Photo */}
      <img
        src={track.images.coverart}
        alt={track.title}
        className="w-20 h-20 rounded object-cover"
      />

      {/* Track Details */}
      <div className="flex-1">
        <p className="text-sm font-semibold">{track.title}</p>
        <p className="text-xs text-gray-300">{track.subtitle}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-2">
        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="text-white"
          aria-label={isActive && isPlaying ? "Pause Track" : "Play Track"}
        >
          {isActive && isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>

        {/* Extend Button */}
        <button className="text-white" aria-label="Extend Track">
          <FaExpand size={20} />
        </button>

        {/* Public Button */}
        <button className="text-white" aria-label="Make Track Public">
          <FaGlobeAmericas size={20} />
        </button>

        {/* Like Button */}
        <button className="text-white" aria-label="Like Track">
          <FaHeart size={20} />
        </button>

        {/* Download Button */}
        <a
          href={track.url}
          download
          className="text-white"
          aria-label="Download Track"
        >
          <FaDownload size={20} />
        </a>
      </div>
    </div>
  );
};

export default GeneratedTrack;
