import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateTrack } from "../redux/features/trackSlice";
import { FaUpload } from "react-icons/fa";

const GenerationForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.tracks);

  const [styleOfMusic, setStyleOfMusic] = useState("");
  const [excludeStyles, setExcludeStyles] = useState(false);
  const [persona, setPersona] = useState("");
  const [title, setTitle] = useState("");
  const [version, setVersion] = useState("stereo-large");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!styleOfMusic.trim()) {
      alert("Please enter a style of music.");
      return;
    }
    if (!title.trim()) {
      alert("Please enter a title for your track.");
      return;
    }

    const formData = {
      prompt: styleOfMusic,
      modelVersion: version,
      outputFormat: "mp3",
      normalizationStrategy: "peak",
      title,
      persona,
      excludeStyles,
    };

    // Dispatch the async thunk
    dispatch(generateTrack(formData));

    // Reset form fields
    setStyleOfMusic("");
    setTitle("");
    setPersona("");
    setExcludeStyles(false);
    setVersion("stereo-large");
  };

  const handleUploadAudio = () => {
    alert("Upload Audio functionality to be implemented.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          type="button"
          className="text-sm py-1 px-3 bg-[#252020] rounded hover:bg-gray-600 transition duration-200 flex items-center"
          onClick={() => alert("Custom functionality to be implemented.")}
        >
          Custom
        </button>
        <button
          type="button"
          className="text-sm py-1 px-3 bg-[#252020] rounded hover:bg-gray-600 transition duration-200 flex items-center"
          onClick={handleUploadAudio}
        >
          <FaUpload className="mr-2" />
          Upload Audio
        </button>
        <select
          className="bg-[#252020] text-sm py-1 px-3 rounded hover:bg-gray-600 transition duration-200"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
        >
          <option value="stereo-large">stereo-large</option>
          <option value="mono-small">mono-small</option>
        </select>
      </div>

      {/* Style of Music Section */}
      <div>
        <label className="flex items-center space-x-2 mb-2">
          <span>Style of Music</span>
          <input
            type="checkbox"
            className="form-checkbox"
            checked={excludeStyles}
            onChange={() => setExcludeStyles(!excludeStyles)}
          />
          <span>Exclude Styles</span>
        </label>
        <textarea
          placeholder="Enter style of music, separated by commas"
          className="w-full mt-2 p-3 bg-[#252020] rounded text-sm text-white"
          rows="2"
          value={styleOfMusic}
          onChange={(e) => setStyleOfMusic(e.target.value)}
        />
      </div>

      {/* Persona Section */}
      <div>
        <label className="block mb-2">Persona</label>
        <select
          className="w-full mt-2 p-3 bg-[#252020] rounded text-sm text-white"
          value={persona}
          onChange={(e) => setPersona(e.target.value)}
        >
          <option value="">No Persona selected</option>
          <option value="Energetic">Energetic</option>
          <option value="Calm">Calm</option>
          <option value="Melancholic">Melancholic</option>
        </select>
      </div>

      {/* Title Section */}
      <div>
        <label className="block mb-2">Title</label>
        <input
          type="text"
          placeholder="Enter a title"
          className="w-full mt-2 p-3 bg-[#252020] rounded text-sm text-white"
          maxLength="80"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full py-2 bg-[#252020] rounded hover:bg-gray-600 transition duration-200 text-sm"
          disabled={loading}
        >
          {loading ? "Generating..." : "Create"}
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="text-red-500 text-sm">Error: {error}</div>}
    </form>
  );
};

export default GenerationForm;
