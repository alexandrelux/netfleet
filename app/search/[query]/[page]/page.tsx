import { MovieSection } from "@/app/components/MovieSection/MovieSection";
import { Pager } from "@/app/components/Pager/Pager";
import { searchMovies } from "@/app/lib/searchMovies";
import Link from "next/link";

export default async function Genres({
    params,
}: {
    params: { query: string; page: string };
}) {
    const { query, page } = params;
    const currentPage = parseInt(page);
    const movies = await searchMovies(query, page);

    if (movies) {
        let previousPage = 1;
        let nextPage = movies.total_pages;
        if (currentPage > 1) previousPage = currentPage - 1;
        if (currentPage < movies.total_pages) nextPage = currentPage + 1;

        if (movies.results.length <= 0) {
            return (
                <>
                    <h2 className="text-center my-16 text-3xl font-bold">
                        Resultats
                    </h2>
                    <div className="mt-36 flex flex-col justify-center items-center gap-5">
                        <p className="text-2xl md:text-4xl font-bold">
                            Pas de films trouvé
                        </p>
                        <Link
                            className="underline"
                            href={{
                                pathname: `/`,
                            }}
                        >
                            {"Retourner à l'accueil"}
                        </Link>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <h2 className="text-center my-16 mb-10 text-3xl font-bold">
                        Resultats
                    </h2>
                    <MovieSection title="Films" movies={movies.results} col />
                    <Pager
                        pathname={`/search/${query}`}
                        previousPage={previousPage}
                        currentPage={currentPage}
                        nextPage={nextPage}
                        totalPages={movies.total_pages}
                    ></Pager>
                </>
            );
        }
    }
}
