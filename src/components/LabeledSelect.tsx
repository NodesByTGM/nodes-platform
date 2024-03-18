/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

type IProps = {
  label?: string;
  options: Array<any>;
};

export default function LabeledSelect({ label, options }: IProps) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="">
      <div className="">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="flex gap-4 items-center">
                {label && (
                  <Listbox.Label className="text-[#000000] text-sm font-medium">
                    {label}
                  </Listbox.Label>
                )}
                <div className="relative ">
                  <Listbox.Button className="border border-[#D6D6D6] flex items-center justify-between  gap-6 relative w-full cursor-default rounded-md bg-white px-4 py-[10.5px] text-left text-gray-900  ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6">
                    <span className="block truncate">{selected.name}</span>
                    <span className="">
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.9207 0.180176H6.69072H1.08072C0.120725 0.180176 -0.359275 1.34018 0.320725 2.02018L5.50072 7.20018C6.33072 8.03018 7.68073 8.03018 8.51073 7.20018L10.4807 5.23018L13.6907 2.02018C14.3607 1.34018 13.8807 0.180176 12.9207 0.180176Z"
                          fill="#757575"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {options.map((option) => (
                        <Listbox.Option
                          key={option.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-primary text-white"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={option}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {option.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-primary",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                ></span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
}
