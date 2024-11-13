// src/components/mockData.js

// Import images
import AIRPImage from "../assets/images/AIRP.jpeg";
import AntithesisImage from "../assets/images/antithesis.jpeg";
import EcstasyPasticheImage from "../assets/images/ecstasy_pastiche.jpeg";
import GoGoGoImage from "../assets/images/GoGoGo.jpeg";
import MetallicFabricImage from "../assets/images/metallic_fabric.jpeg";
import PointCloudsImage from "../assets/images/point_clouds.jpeg";

// Import music
import AIRPAudio from "../assets/music/AIRP.mp3";
import AntithesisAudio from "../assets/music/antithesis.mp3";
import EcstasyPasticheAudio from "../assets/music/ecstasy_pastiche.mp3";
import GoGoGoAudio from "../assets/music/GoGoGo.mp3";
import MetallicFabricAudio from "../assets/music/metallic_fabric.mp3";
import PointCloudsAudio from "../assets/music/point_clouds.mp3";

// **New Imports**
import PanImage from "../assets/images/pan.jpeg";
import PanAudio from "../assets/music/pan.mp3";
import FoamImage from "../assets/images/foam.jpeg";
import FoamAudio from "../assets/music/foam.mp3";
import HazeImage from "../assets/images/haze.jpeg";
import HazeAudio from "../assets/music/haze.mp3";
import MultigramImage from "../assets/images/multigram.jpeg";
import MultigramAudio from "../assets/music/multigram.mp3";

// src/components/mockData.js

const mockData = [
  {
    key: "1",
    title: "AIRP",
    subtitle: "JackX",
    images: { coverart: AIRPImage },
    artists: [{ adamid: "artist-1" }],
    url: AIRPAudio,
    styles: ["Ambient", "Electronic"],
  },
  {
    key: "2",
    title: "Antithesis",
    subtitle: "JackX",
    images: { coverart: AntithesisImage },
    artists: [{ adamid: "artist-2" }],
    url: AntithesisAudio,
    styles: ["Rock", "Alternative"],
  },
  {
    key: "3",
    title: "Ecstasy Pastiche",
    subtitle: "JackX",
    images: { coverart: EcstasyPasticheImage },
    artists: [{ adamid: "artist-3" }],
    url: EcstasyPasticheAudio,
    styles: ["Jazz", "Blues"],
  },
  {
    key: "4",
    title: "GoGoGo",
    subtitle: "JackX",
    images: { coverart: GoGoGoImage },
    artists: [{ adamid: "artist-4" }],
    url: GoGoGoAudio,
    styles: ["Pop", "Dance"],
  },
  {
    key: "5",
    title: "Metallic Fabric",
    subtitle: "JackX",
    images: { coverart: MetallicFabricImage },
    artists: [{ adamid: "artist-5" }],
    url: MetallicFabricAudio,
    styles: ["Industrial", "Metal"],
  },
  {
    key: "6",
    title: "Point Clouds",
    subtitle: "JackX",
    images: { coverart: PointCloudsImage },
    artists: [{ adamid: "artist-6" }],
    url: PointCloudsAudio,
    styles: ["Synthwave", "Trance"],
  },
  {
    key: "7",
    title: "Pan",
    subtitle: "JackX",
    images: { coverart: PanImage },
    artists: [{ adamid: "artist-7" }],
    url: PanAudio,
    styles: ["Folk", "Acoustic"],
  },
  {
    key: "8",
    title: "Foam",
    subtitle: "JackX",
    images: { coverart: FoamImage },
    artists: [{ adamid: "artist-8" }],
    url: FoamAudio,
    styles: ["Indie", "Alternative"],
  },
  {
    key: "9",
    title: "Haze",
    subtitle: "JackX",
    images: { coverart: HazeImage },
    artists: [{ adamid: "artist-9" }],
    url: HazeAudio,
    styles: ["Ambient", "Chillout"],
  },
  {
    key: "10",
    title: "Multigram",
    subtitle: "JackX",
    images: { coverart: MultigramImage },
    artists: [{ adamid: "artist-10" }],
    url: MultigramAudio,
    styles: ["Electronic", "House"],
  },
];

export default mockData;
