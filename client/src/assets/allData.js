import hero_img from "./homeAssets/hero-img.png";
import logout from "./homeAssets/logout.svg";
import tourvistoLogo from "./tourvistoLogo.svg"
import barcelona from "./travel_destination/barcelona.png"
import barcelonaProfile from "./travel_destination/barcelonaProfile.png"
import othersProfile from "./travel_destination/othersProfile.jpg"
import london from "./travel_destination/london.png";
import australia from "./travel_destination/austrilia.png";
import australia_tour from "./travel_destination/austrilia_tour.png";
import japan_tour from "./travel_destination/japan_tour.png";
import japan_tour2 from "./travel_destination/japan_tour2.png";

// handPicked
import anse from "./handPicked-trip/Anse.png";
import aysen from "./handPicked-trip/Aysen.png";
import roraima from "./handPicked-trip/Roraima.png";
import san from "./handPicked-trip/San.png";
import socotra from "./handPicked-trip/Socotra.png";
import taman from "./handPicked-trip/Taman.png";
import thornridge from "./handPicked-trip/Thornridge.png";
import zhangye from "./handPicked-trip/Zhangye.png";



const homeAssets = {
    hero_img,
    logout,
    tourvistoLogo


}

export default homeAssets;

export const tours = [
  {
    title: "Barcelona Tour",
    location: "Barcelona, Spain",
    rating: 3.5,
    activities: "196 Activities",
    image: barcelona,
    profile: barcelonaProfile
  },
  {
    title: "London Tour",
    location: "London, United Kingdom",
    rating: 3.5,
    activities: "196 Activities",
    image: london,
    profile: othersProfile
  },
   {
    title: "Australia Tour",
    location: "Australia",
    rating: 3.5,
    activities: "196 Activities",
    image: australia,
    profile: othersProfile
  },
  {
    title: "Australia Tour",
    location: "Australia",
    rating: 3.5,
    activities: "196 Activities",
    image: australia_tour,
    profile: othersProfile
  },
  {
    title: "Japan Tour",
    location: "Japan",
    rating: 3.5,
    activities: "196 Activities",
    image: japan_tour,
    profile: othersProfile
  },
  {
    title: "Japan Tour",
    location: "Japan",
    rating: 3.5,
    activities: "196 Activities",
    image: japan_tour2,
    profile: othersProfile
  }
];


export const destinations = [
  {
    title: "Thornridge Cir. Shiloh",
    location: "St George’s Ln, Singapore",
    price: 300,
    image: thornridge,
    tags: ["Mountains", "City"]
  },
  {
    title: "Roraima Tepui",
    location: "Canaima Park, Venezuela",
    price: 790,
    image: roraima,
    tags: ["Solo travel", "Budget"]
  },
  {
    title: "Socotra Island",
    location: "Yemen",
    price: 870,
    image: socotra,
    tags: ["Luxury", "Beach"]
  },
  {
    title: "San Lake Baikal",
    location: "Siberia, Russia",
    price: 604,
    image: san,
    tags: ["Sports", "Adventurous"]
  },
  {
    title: "Anse Source d'Argent",
    location: "La Digue, Seychelles",
    price: 870,
    image: anse,
    tags: ["Beach", "Luxury"]
  },
  {
    title: "Aysén Region",
    location: "Patagonia, Chile",
    price: 604,
    image: aysen,
    tags: ["Sports", "Adventurous"]
  },
  {
    title: "Taman Negara",
    location: "Peninsular Malaysia",
    price: 300,
    image: taman,
    tags: ["Mountains", "Budget"]
  },
  {
    title: "Zhangye Landform",
    location: "Gansu, China",
    price: 790,
    image: zhangye,
    tags: ["Solo travel", "City"]
  }
];





