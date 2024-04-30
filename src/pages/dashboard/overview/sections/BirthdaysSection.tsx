import React, { useEffect, useState } from "react";
import { useGetContentQuery } from "../../../../api";
import {
  ItemsCarousel,
  Loader,
} from "../../../../components";

export default function BirthdaysSection() {
  const [contentData, setContentData] = useState([]);

  const {
    data: contents,
    // refetch: conntentRefetch,
    isFetching: contentLoading,
    isSuccess: contentIsSuccess,
  } = useGetContentQuery();

  useEffect(() => {
    if (contentIsSuccess && contents?.result?.items?.length) {
      setContentData(contents?.result?.items);
    }
  }, [contents, contentIsSuccess]);
  return (
    <div>
      {/* <pre className="">{JSON.stringify(contents, null, 2)}</pre> */}

      {/* <pre className="max-w-[400px] text-wrap ">{JSON.stringify(contentData[0])}</pre> */}

      <div>
        {contentLoading && contentData.length === 0 ? (
          <div className="my-40">
            <Loader />
          </div>
        ) : null}

        {!contentLoading && contentData?.length === 0 ? (
          <div className="text-base text-primary my-40 text-center">
            No birthdays available yet.
          </div>
        ) : null}

        {!contentLoading && contentData && contentData?.length > 0 ? (
            <ItemsCarousel
              data={contentData || []}
              content
              title={`Birthdays`}
            //   description='Stay in the loop with what’s buzzing in the creative world'
              //   description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
            />
        //   <div className="">
        //     <pre className="">{JSON.stringify(contentData, null, 2)}</pre>
        //   </div>
        ) : null}
      </div>
    </div>
  );
}
