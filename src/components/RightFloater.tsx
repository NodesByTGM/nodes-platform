import React from 'react'
import { Fragment,  } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
 
  XMarkIcon,
} from "@heroicons/react/24/outline";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function RightFloater({children, open, setOpen}) {





  return (
    <>
      <div>
        <div className="">
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-[2000000] "
              onClose={setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-900/80" />
              </Transition.Child>

              <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex w-full max-w-max flex-1 ">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 flex w-16 justify-center pt-5 hiddenn">
                        <button
                          type="button"
                          className="-m-2.5 p-2.5"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto  px-6 pb-4">
                      {children}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </div>

        
      </div>
    </>
  );
}

