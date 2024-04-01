export interface Movie {

    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    rating: number;
    poster: string;
    backdrop: string;

}


//tiene las mismas propiedades de arriba mas las nuevas por el EXTENDS MOVIE
export interface FullMovie extends Movie {

genres: string[];
duration: number;
budget: number;
originalTitle: string;
productionCompanies: string[];


}