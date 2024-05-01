import { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";

type ModalProps = {
  open: boolean;
  setOpen: (e) => void;
  children?: ReactNode | ReactNode[];
  sizeClass?: string;
  paddingX?: string;
};

export default function Modal({
  open,
  setOpen,
  children,
  sizeClass,
  paddingX = "px-4 sm:px-8",
}: ModalProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[10000]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={` ${sizeClass} ${paddingX} relative transform overflow-hidden rounded-lg bg-white  pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:py-8`}
              >
                <div>
                  <div className="">{children}</div>
                </div>
                {/* <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setOpen(false)}
                  >
                    Go back to dashboard
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
