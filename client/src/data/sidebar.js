import { LuSearch, LuHome, LuCalendarDays, LuUser2 } from "react-icons/lu";
import { PiTelevisionDuotone } from "react-icons/pi";
import { RiAddLargeLine } from "react-icons/ri";
import { PiFilmSlateDuotone } from "react-icons/pi";

export const sidebarData = {
  navigations: [
    {
      name: "search",
      icon: LuSearch,
      url: "/search",
    },
    {
      name: "home",
      icon: LuHome,
      url: "/home",
    },
    {
      name: "movies",
      icon: PiFilmSlateDuotone,
      url: "/movies",
    },
    {
      name: "series",
      icon: PiTelevisionDuotone,
      url: "/series",
    },
    {
      name: "wishlist",
      icon: RiAddLargeLine,
      url: "/wishlist",
    },
    // {
    //   name: "",
    //   icon: LuCalendarDays,
    //   url: "/",
    // },
    {
      name: "account",
      icon: LuUser2,
      url: "/account",
    },
  ],
};
