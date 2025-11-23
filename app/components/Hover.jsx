"use client";

import { LaptopMinimalCheck } from "lucide-react";
import { useRef } from "react";

const Hover = () => {
  const Hoverref = useRef();

  const HandleClick = () => {
    const classname =
      "fixed z-50 left-10 w-full md:w-fit md:right-1 top-20 md:left-auto md:top-auto md:bottom-1 glass rounded-2xl p-3 md:p-6 inline-block glow-cyan";
    const classnameDefault =
      "fixed z-50 left-[85%] w-full md:w-fit md:right-1 top-20 md:left-auto md:top-auto md:bottom-1 glass rounded-2xl p-3 md:p-6 inline-block glow-cyan";

    if (window.innerWidth < 900) {
      if (Hoverref.current.getAttribute("Class") == classnameDefault) {
        return Hoverref.current.setAttribute("class", classname);
      }
      return Hoverref.current.setAttribute("class", classnameDefault);
    }
  };

  return (
    <div
      ref={Hoverref}
      onClick={HandleClick}
      style={{ transition: "ease-in", transitionDuration: "300ms" }}
      className="fixed z-50 left-[85%] w-full md:w-fit md:right-1 top-20 md:left-auto md:top-auto md:bottom-1 glass rounded-2xl p-3 md:p-6 inline-block glow-cyan"
    >
      <div className="flex items-center gap-3">
        <LaptopMinimalCheck className="text-green-500 animate-pulse" />
        <span className="flex text-sm md:text-base items-center gap-1 text-[hsl(var(--muted-foreground))]">
          I am Available for freelance projects
          <div className="w-2 h-2 md:w-3 md:h-3 mt-1 rounded-full bg-green-500 animate-bounce" />
        </span>
      </div>
    </div>
  );
};

export default Hover;
