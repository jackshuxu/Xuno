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

// src/components/mockData.js

const mockData = [
  {
    key: "1",
    title: "AIRP",
    subtitle: "JackX",
    images: { coverart: AIRPImage },
    artists: [{ adamid: "artist-1" }],
    url: AIRPAudio,
  },
  {
    key: "2",
    title: "Antithesis",
    subtitle: "JackX",
    images: { coverart: AntithesisImage },
    artists: [{ adamid: "artist-2" }],
    url: AntithesisAudio,
  },
  {
    key: "3",
    title: "Ecstasy Pastiche",
    subtitle: "JackX",
    images: { coverart: EcstasyPasticheImage },
    artists: [{ adamid: "artist-3" }],
    url: EcstasyPasticheAudio,
  },
  {
    key: "4",
    title: "GoGoGo",
    subtitle: "JackX",
    images: { coverart: GoGoGoImage },
    artists: [{ adamid: "artist-4" }],
    url: GoGoGoAudio,
  },
  {
    key: "5",
    title: "Metallic Fabric",
    subtitle: "JackX",
    images: { coverart: MetallicFabricImage },
    artists: [{ adamid: "artist-5" }],
    url: MetallicFabricAudio,
  },
  {
    key: "6",
    title: "Point Clouds",
    subtitle: "JackX",
    images: { coverart: PointCloudsImage },
    artists: [{ adamid: "artist-6" }],
    url: PointCloudsAudio,
  },
];

export default mockData;
