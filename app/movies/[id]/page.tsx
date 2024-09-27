import { Carroussel } from "@/app/components/Carroussel/Carroussel";
import { MovieSection } from "@/app/components/MovieSection/MovieSection";
import {
    fetchMovieDetails,
    fetchMovieRecommendations,
    fetchMovieSimilars,
} from "@/app/lib/fetchMovieDetails";
import { carrousselWidht } from "@/app/utils/const";
import Link from "next/link";

export default async function Movies({ params }: { params: { id: string } }) {
    const { id } = params;
    const [movie, similars, recommendations] = await Promise.all([
        fetchMovieDetails(parseInt(id)),
        fetchMovieSimilars(parseInt(id)),
        fetchMovieRecommendations(parseInt(id)),
    ]);

    if (movie && similars && recommendations) {
        return (
            <div className={`max-w-[${carrousselWidht}px] mx-auto`}>
                <Carroussel movies={[movie]} />
                <div className="px-4 md:px-10 -mt-5">
                    <div className="flex flex-col sm:flex-row items-center justify-center">
                        <div className="w-full sm:w-2/3 flex flex-row gap-2 text-neutral-500 font-bold">
                            <span>
                                {new Date(movie.release_date).getFullYear()}
                            </span>
                            <span>{`${Math.floor(movie.runtime / 60)}h ${
                                movie.runtime % 60
                            }m`}</span>
                            {movie.spoken_languages.map((item) => {
                                return <span key={item.name}>{item.name}</span>;
                            })}
                        </div>
                        <div className="w-full sm:w-1/3 flex flex-row sm:justify-end gap-2">
                            {movie.genres.map((item) => {
                                return (
                                    <Link
                                        key={item.id}
                                        className="hover:underline text-sm"
                                        href={{
                                            pathname: `/genres/${item.id}/1`,
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <p className="mt-5">{movie.overview}</p>

                    {similars.length > 0 ? (
                        <MovieSection
                            title="Films similaires"
                            movies={similars}
                        />
                    ) : null}

                    {recommendations.length > 0 ? (
                        <MovieSection
                            title="Nous vous recommendons"
                            movies={recommendations}
                        />
                    ) : null}

                    <p className="mt-10 text-xl font-bold">
                        A propos de {movie.title}
                    </p>
                    <p className="text-sm mt-2">
                        <span className="text-neutral-500">
                            {"Companie de production : "}
                        </span>
                        {movie.production_companies.map((item) => {
                            return <span key={item.id}>{item.name}</span>;
                        })}
                    </p>
                    <p className="text-sm mt-2">
                        <span className="text-neutral-500">
                            {"Pays d'origine(s) : "}
                        </span>
                        {movie.production_countries.map((item) => {
                            return (
                                <span key={item.iso_3166_1}>{item.name}</span>
                            );
                        })}
                    </p>
                </div>
            </div>
        );
    } else {
        return <span>Film inexistant</span>;
    }
}
