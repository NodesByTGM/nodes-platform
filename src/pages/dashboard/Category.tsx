import { useEffect } from "react";
import { ChevronRight } from "react-feather";
import { Link, useParams } from "react-router-dom";
import { MovieItem, Select } from "../../components";

function Category() {
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      console.log(category);
    }
  }, [category]);
  return (
    <div>
      <div className="flex gap-2 items-center mb-10">
        <Link to={"/"}>
          <span>Home</span>
        </Link>{" "}
        <ChevronRight />
        <span className="capitalize">{category}</span>
      </div>

      <div
        className="rounded-lg h-[200px] flex items-center justify-center text-4xl capitalize mb-10 text-white"
        style={{ backgroundImage: "url('/img/topmovies.jpeg')" }}
      >
        {category}
      </div>

      <div className="flex justify-between items-center mb-10 border-b pb-5">
        <div className="flex gap-2 items-center">
          <span className="uppercase">filter by</span>
          <Select placeholder="All" padding="!p-2" showCarret />
        </div>

        <div className="flex gap-2 items-center">
          <span className="uppercase">sort by</span>
          <Select placeholder="Latest" padding="!p-2" showCarret />
        </div>
      </div>

      {/* grid */}
      <div className="flex flex-wrap gap-8 mb-10">
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <div className="flex-1">
              <MovieItem key={i} />
            </div>
          ))}
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="h-10 w-10 flex justify-center items-center rounded bg-customsecondary text-white border">
          1
        </div>
        <div className="h-10 w-10 flex justify-center items-center rounded border">
          2
        </div>
        <div className="h-10 w-10 flex justify-center items-center rounded border">
          3
        </div>
        <div className="h-10 w-10 flex justify-center items-center rounded border">
          4
        </div>
      </div>
    </div>
  );
}

export default Category;
