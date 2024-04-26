

import React, { useEffect, useState } from "react";
import { useGetMoviesAndShowsQuery } from "../../../../api";
import { ItemsCarousel, Loader } from "../../../../components";

type IMoviesAndShowsSection = {
  canViewMovieDetails?: boolean
}
export default function MoviesAndShowsSection({canViewMovieDetails}: IMoviesAndShowsSection) {
  const [moviesAndShowsData, setMoviesAndShowsData] = useState([]);
  const {
    data: moviesAndShows,
    // refetch: moviesAndShowsRefetch,
    isFetching: moviesAndShowsLoading,
    isSuccess: moviesAndShowsIsSuccess,
  } = useGetMoviesAndShowsQuery();

  useEffect(() => {
    if (moviesAndShowsIsSuccess && moviesAndShows?.result?.results?.length) {
      setMoviesAndShowsData(moviesAndShows?.result?.results);
    }
  }, [moviesAndShows, moviesAndShowsIsSuccess]);
  return (
    <div>
        {/* <pre>{JSON.stringify(moviesAndShowsData, null, 2)}</pre> */}
      {moviesAndShowsLoading && moviesAndShowsData.length === 0 ? (
        <div className="my-40">
          <Loader />
        </div>
      ) : null}

      {!moviesAndShowsLoading && moviesAndShowsData?.length === 0 ? (
        <div className="text-base text-primary my-40  text-center">
          Nothing to see.
        </div>
      ) : null}

      {!moviesAndShowsLoading && moviesAndShowsData && moviesAndShowsData?.length > 0 ? (
        <ItemsCarousel
          data={moviesAndShowsData || []}
          movie
          canViewMovieDetails={canViewMovieDetails}
          title={`What did you think? Rate and share your review`}
        //   description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
        />
      ) : null}
    </div>
  );
}

