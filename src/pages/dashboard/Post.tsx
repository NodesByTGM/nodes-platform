import { useEffect, useState } from "react";
import { Heart, MessageSquare } from "react-feather";
import { useNavigate, useParams } from "react-router-dom";
import { BackIcon } from "../../assets/svg";
import { CommentBox, MovieItem } from "../../components";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const previousStep = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (id) {
      console.log(id);
    }
  }, [id]);
  return (
    <div>
      <CommentBox setOpened={setOpened} opened={opened} />
      <div
        onClick={previousStep}
        className="flex items-center mb-10 gap-2 cursor-pointer"
      >
        <BackIcon /> Go back
      </div>
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="lg:w-1/2 flex flex-col justify-between mb-10">
          <div>
            <p>Top movies</p>
            <h3 className="lg:w-[400px] text-ellipsis text-nowrap overflow-hidden text-2xl font-medium h-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </h3>
            <p className="lg:w-[400px] text-ellipsis text-nowrap overflow-hidden font-medium h-[30px] mb-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <p>Posted on 25 Jan 2024</p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>What do you think?</div>
              <div className="flex justify-between gap-4 items-center">
                <div className="flex justify-between gap-2 items-center cursor-pointer">
                  <span className="text-primary">
                    <Heart />
                  </span>
                  <span>32</span>
                </div>
                <div
                  className="flex justify-between gap-2 items-center cursor-pointer"
                  onClick={() => setOpened(true)}
                >
                  <span className="text-primary">
                    <MessageSquare />
                  </span>
                  <span>32</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4 items-center w-full">
              <div className="h-8 w-8 text-sm rounded-full bg-customsecondary text-white flex justify-center items-center">
                AA
              </div>
              <input
                type="text"
                className="p-2 flex-1 rounded border border-grey-dark outline-none"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-cover bg-center ">
          <img
            src="/img/post.jpeg"
            alt=""
            className="w-full max-w-[400px h-[600px]"
          />
        </div>
      </div>

      <div className="flex justify-between items-center border-b pb-5 mb-10">
        <h4 className="text-lg font-medium">More Like this</h4>
      </div>
      {/* grid */}
      <div className="flex flex-wrap gap-4 mb-10">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <div className="flex-1" key={i}>
              <MovieItem />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Post;
