import React from "react";
import { Link } from "react-router-dom";

export default function Applicants({ details }) {
  console.log(details);
  return (
    <div className="bg-[#ffffff] rounded-[5px] border border-[#EFEFEF] ">
      <div className="px-4 sm:px-6 py-6">
        <div className="pb-6 border-b border-[#EFEFEF]">
          {" "}
          <span className="text-base font-medium text-[#212121]">
            Applicants
          </span>
        </div>
        {details?.applicants?.length > 0 ? (
          <div className="flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-[#EFEFEF]">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="uppercase pt-6 pb-4 pl-4 pr-3 text-left text-sm font-medium text-[#757575] sm:pl-0"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="uppercase px-3 pt-6 pb-4 text-left text-sm font-medium text-[#757575]"
                      >
                        Email Address
                      </th>

                      <th
                        scope="col"
                        className="uppercase relative pt-6 pb-4 pl-3 pr-4 sm:pr-0 text-left text-sm font-medium text-[#757575]"
                      >
                        <span className="">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2F2F2]">
                    {details?.applicants?.map((applicant) => (
                      <tr key={applicant.id}>
                        <td className="whitespace-nowrap py-8 pl-4 pr-3 text-sm font-normal text-[#212121] sm:pl-0">
                          {applicant.name}
                        </td>

                        <td className="whitespace-nowrap px-3 py-8 text-sm font-normal text-[#212121]">
                          {applicant.email}
                        </td>

                        <td className="relative whitespace-nowrap py-8 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
                          <Link
                            to={`/profile?${details?.id}`}
                            className="text-primary hover:text-primary font-medium text-sm"
                          >
                            View profile
                            <span className="sr-only">, {applicant.name}</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="my-[60px] flex items-center justify-center text-base text-primary">
            Nothing to see yet
          </div>
        )}
      </div>
    </div>
  );
}
