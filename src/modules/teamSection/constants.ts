import { DeveloperInfo } from "./types";
import PHOTO_ALEX from "../../assets/photo-alex.png";
import PHOTO_MAX from "../../assets/photo-max.png";
import PHOTO_ILY from "../../assets/photo-ily.png";
import { translationType } from "../../types/localization";

export const DEVELOPERS_INFO: (dictionary: translationType) => DeveloperInfo[] = (dictionary) => {
  return [
  {
    ...dictionary.teammembers.aliaksey,
    photoURL: PHOTO_ALEX,
    githubUrl: "https://github.com/ALIAKSEI-sl",
  },
  {
    ...dictionary.teammembers.max,
    photoURL: PHOTO_MAX,
    githubUrl: "https://github.com/FilMaxim",
  },
  {
    ...dictionary.teammembers.illia,
    photoURL: PHOTO_ILY,
    githubUrl: "https://github.com/Illia-Sakharau",
  },
]};
