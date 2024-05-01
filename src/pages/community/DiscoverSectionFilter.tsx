import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { filterOptions } from "../../utilities/constants";
import { handleCheckList } from "../../utilities/common";

import { LabeledSelect, Button } from "../../components";
export default function DiscoverSectionFilter({ closeModal }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    "Acting/Performing",
    "Movie Production / Directing.",
    "Fashion Design / Styling",
    "Photography / Videography.",
    "Culinary Arts / Cooking.",
    "Modeling / Runway.",
    "Writing / Scripting.",
    "Makeup Artistry.",
    "Set Design / Art Direction.",
    "Music / Sound Production.",
  ];

  const applyFilter = () => {
    closeModal();
  };

  const handleChange = (category: string) => {
    handleCheckList(category, selectedCategories, setSelectedCategories);
  };
  return (
    <div className='my-4 bg-[#ffffff] p-6 rounded-lg w-full md:w-[400px] xl:w-[522px]'>
      <div className="flex items-center justify-between">
        <pre className="hidden">
          {JSON.stringify(selectedCategories, null, 2)}
        </pre>
        <div className="flex items-center gap-2 text-[18px] text-[#000000] font-medium">
          {" "}
          <span className="">Filter</span>
          <LabeledSelect
            onChange={() => {}}
            paddingy="!py-1"
            options={filterOptions["discoverType"]}
          />
          <span className="">by</span>
        </div>

        <div onClick={() => closeModal()} className="cursor-pointer">
          <MdCancel />
        </div>
      </div>

      <div className="mt-8 text-[#000000]">
        <div className="mb-6 text-base font-medium pb-2 border-b w-full border-[#EFEFEF]">
          Categories
        </div>

        <div className="grid grid-cols-1 gap-2 overflow-y-auto max-h-[500px] pb-6">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-[#D6D6D6] px-4 py-[18px]"
            >
              <div className="flex items-center gap-[10px]">
                <input
                  className="accent-primary"
                  type="checkbox"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleChange(category)}
                />

                <span className="text-base font-normal">{category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="">
          <Button
            onClick={() => applyFilter()}
            className="max-w-max mt-4 ml-auto"
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}
