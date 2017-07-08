import {Genre} from "./genre.interface";
import {Company} from "./company.interface";
import {Language} from "./language.interface";

export interface Movie {
  genres: Genre[];
  original_language: string;
  overview: string;
  production_companies?: Company[];
  release_date: string;
  spoken_languages?: Language[];
  status: string;
  title: string;
}
