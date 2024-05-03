import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate, NavLink } from "react-router-dom";
import AppConfig from "../../utilities/config";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  {
    label: "About Us",
    link: AppConfig.PATHS.LandingPage.AboutUs,
  },
  {
    label: "For Business",
    link: AppConfig.PATHS.LandingPage.Business,
  },
  {
    label: "For Talent",
    link: AppConfig.PATHS.LandingPage.Talent,
  },
];
const onboardingLinks = [
  {
    label: "Sign Up",
    link: AppConfig.PATHS.Auth.Register,
  },
  {
    label: "Log In",
    link: AppConfig.PATHS.Auth.Login,
  },
];
const appLinks = [
  {
    label: "Dashboard",
    link: AppConfig.PATHS.Dashboard.Base,
  },
  {
    label: "Profile",
    link: AppConfig.PATHS.Dashboard.Profile.Base,
  },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function FloatingHeader() {
  const user = useSelector((state: RootState) => state?.user?.user);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (link) => {
    navigate(link);
    setSidebarOpen(false);
  };

  return (
    <>
      <div>
        <div className="!lg:hidden">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-[2000000] "
              onClose={setSidebarOpen}
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
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                        <button
                          type="button"
                          className="-m-2.5 p-2.5"
                          onClick={() => setSidebarOpen(false)}
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
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#FBFBFB] px-6 pb-4">
                      <div
                        onClick={() => handleNav("/")}
                        className="cursor-pointer flex h-16 shrink-0 items-center"
                      >
                        <img
                          src="/landing-page-logo.svg"
                          alt=""
                          className="h-8"
                        />
                      </div>
                      <nav className="flex flex-1 flex-col">
                        <ul
                          role="list"
                          className="flex flex-1 flex-col gap-y-7"
                        >
                          <li>
                            <ul role="list" className="space-y-1">
                              {navigation.map((item) => (
                                <li
                                  onClick={() => setSidebarOpen(false)}
                                  className="py-2"
                                  key={item.label}
                                >
                                  <NavLink
                                    to={item.link}
                                    className={({ isActive, isPending }) =>
                                      isPending
                                        ? "pending"
                                        : isActive
                                        ? `cursor-pointer font-medium text-sm md:text-base text-[#ffffff] bg-primary py-2 rounded-lg px-4`
                                        : `cursor-pointer font-medium text-sm md:text-base text-[#212121] py-2 rounded-lg px-4`
                                    }
                                  >
                                    {item.label}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                          {!user?.id ? (
                            <li>
                              <div className="text-xs font-semibold leading-6 text-[#757575]">
                                Onboarding
                              </div>
                              <ul role="list" className=" mt-2 space-y-1">
                                {onboardingLinks.map((item) => (
                                  <li className="py-2" key={item.label}>
                                    <NavLink
                                      to={item.link}
                                      className={({ isActive, isPending }) =>
                                        isPending
                                          ? "pending"
                                          : isActive
                                          ? `cursor-pointer font-medium text-sm md:text-base text-[#ffffff] bg-primary py-2 rounded-lg px-4`
                                          : `cursor-pointer font-medium text-sm md:text-base text-[#212121] py-2 rounded-lg px-4`
                                      }
                                    >
                                      {item.label}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li>
                            <div className="text-xs font-semibold leading-6 text-[#757575]">
                              In App
                            </div>
                            <ul role="list" className=" mt-2 space-y-1">
                              {appLinks.map((item) => (
                                <li className="py-2" key={item.label}>
                                  <NavLink
                                    to={item.link}
                                    className={({ isActive, isPending }) =>
                                      isPending
                                        ? "pending"
                                        : isActive
                                        ? `cursor-pointer font-medium text-sm md:text-base text-[#ffffff] bg-primary py-2 rounded-lg px-4`
                                        : `cursor-pointer font-medium text-sm md:text-base text-[#212121] py-2 rounded-lg px-4`
                                    }
                                  >
                                    {item.label}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                          )}
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </div>

        <div className="">
          <div className="rounded-full bg-primary">
            <button
              type="button"
              className="p-2.5 text-gray-700 "
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
