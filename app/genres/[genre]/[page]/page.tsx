import { fetchGenres, fetchMoviesbyGenre } from "@/app/lib/fetchMovieGenre";
import { MovieSection } from "@/app/components/MovieSection/MovieSection";
import { Pager } from "@/app/components/Pager/Pager";
import { isrTime } from "@/app/utils/const";

export const revalidate = isrTime;

export default async function Genres({
    params,
}: {
    params: { genre: string; page: string };
}) {
    const { genre, page } = params;
    const genres = await fetchGenres();
    const currentPage = parseInt(page);
    const movies = await fetchMoviesbyGenre(parseInt(genre), parseInt(page));

    const titles = genres.filter((item) => {
        if (item.id === parseInt(genre)) {
            return item;
        }
    });

    if (movies) {
        let previousPage = 1;
        let nextPage = movies.total_pages;
        if (currentPage > 1) previousPage = currentPage - 1;
        if (currentPage < movies.total_pages) nextPage = currentPage + 1;

        return (
            <>
                <h2 className="text-center my-16 text-3xl font-bold">
                    Genre : {titles[0].name}
                </h2>
                <MovieSection title="Films" movies={movies.results} col />
                <Pager
                    pathname={`/genres/${genre}`}
                    previousPage={previousPage}
                    currentPage={currentPage}
                    nextPage={nextPage}
                    totalPages={movies.total_pages}
                ></Pager>
            </>
        );
    }
}
