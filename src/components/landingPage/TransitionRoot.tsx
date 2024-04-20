import React, { Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Transition } from "@headlessui/react";

export default function TransitionRoot({ children }) {
  return (
    <div>
      <Transition.Root show={true} as={Fragment}>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={500}>
            {children}
          </ScrollAnimation>
        </Transition.Child>
      </Transition.Root>
    </div>
  );
}
