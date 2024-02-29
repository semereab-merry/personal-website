import Home from "../home/home";
import Projects from "../projects/projects";
import Skills from "../skills/skills";
import { ContactMe } from "../contactMe/contactMe";
import Footer from "../footer/footer";

export const TOTAL_SCREENS = [
  {
    screen_name: "  ",
    component: Home,
  },

  {
    screen_name: "Projects",
    component: Projects,
  },

  {
    screen_name: "Skills",
    component: Skills,
  },

  {
    screen_name: "Contact Me",
    component: ContactMe,
  },

  {
    screen_name: "",
    component: Footer,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
