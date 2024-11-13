import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import GenerationForm from "../components/GenerationForm";
import GeneratedTrack from "../components/GeneratedTrack";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Create = () => {
  const tracks = useSelector((state) => state.tracks.tracks);
  const loading = useSelector((state) => state.tracks.loading);
  const error = useSelector((state) => state.tracks.error);

  const [formWidth, setFormWidth] = useState(600);
  const dividerRef = useRef(null);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const containerLeft = containerRef.current.getBoundingClientRect().left;
    let newWidth = e.clientX - containerLeft;

    const minWidth = 300;
    const maxWidth = containerRef.current.offsetWidth - 300;

    if (newWidth < minWidth) newWidth = minWidth;
    if (newWidth > maxWidth) newWidth = maxWidth;

    setFormWidth(newWidth);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;

    const touch = e.touches[0];
    const containerLeft = containerRef.current.getBoundingClientRect().left;
    let newWidth = touch.clientX - containerLeft;

    const minWidth = 300;
    const maxWidth = containerRef.current.offsetWidth - 300;

    if (newWidth < minWidth) newWidth = minWidth;
    if (newWidth > maxWidth) newWidth = maxWidth;

    setFormWidth(newWidth);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  };

  useEffect(() => {
    const preventSelection = (e) => {
      if (isDragging.current) {
        e.preventDefault();
      }
    };
    document.addEventListener("selectstart", preventSelection);
    return () => {
      document.removeEventListener("selectstart", preventSelection);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0e0808] text-white">
      <div className="flex-1 p-6 space-y-6">
        {/* Main Flex Container with Resizable Panels */}
        <div className="flex flex-row h-full" ref={containerRef}>
          {/* Left Section: Generation Form */}
          <div
            className="bg-[#0e0808] p-4 rounded-lg transition-all duration-200 flex-shrink-0"
            style={{
              width: `${formWidth}px`,
              minWidth: "300px",
              maxWidth: "calc(100% - 300px)",
              overflow: "hidden",
            }}
          >
            <GenerationForm />
          </div>

          {/* Draggable Divider */}
          <div
            ref={dividerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="w-2 bg-[#252323] cursor-col-resize hover:bg-gray-600"
          ></div>

          {/* Right Section: Generated Tracks */}
          <div
            className="bg-[#0e0808] p-4 rounded-lg flex-grow flex flex-col"
            style={{ minWidth: "300px" }}
          >
            {loading && <Loader title="Generating your music..." />}
            {error && <Error message={error} />}
            {tracks.length === 0 && !loading && !error ? (
              <p className="text-gray-400">No tracks generated yet.</p>
            ) : (
              <div className="space-y-4 overflow-y-auto flex-1">
                {tracks.map((track) => (
                  <GeneratedTrack key={track.key} track={track} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
