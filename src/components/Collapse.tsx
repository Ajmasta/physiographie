import React, { useState, useRef, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { FaPlus, FaMinus } from "react-icons/fa";
import TextGenerator from "./TextGenerator";

interface Props {
  title: string;
  children: ReactNode;
  subtitle?: boolean;
}
const Collapse = ({ children, title, subtitle }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const nodeRef = useRef(null);

  return (
    <>
      <div
        className="flex flex-row items-center justify-start py-2 mt-2 text-black rounded md:ml-4 md:px-4 hover:cursor-pointer "
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <FaMinus
            className={
              !subtitle
                ? "duration-300 ease-in border-2 border-black w-4 h-4"
                : "duration-300 ease-in border-2 border-[#818181] w-4 h-4"
            }
            size={!subtitle ? 14 : 12}
            color={!subtitle ? "black" : "grey"}
            //style={{ backgroundColor: "black", borderRadius: "50px" }}
          />
        ) : (
          <FaPlus
            className={
              !subtitle
                ? "duration-300 ease-in border-2 border-black "
                : "duration-300 ease-in border-2 border-[#818181]"
            }
            color={!subtitle ? "black" : "grey"}
          />
        )}
        <TextGenerator
          text={title}
          classes={
            subtitle
              ? "font-bold text-[#616161] text-xl ml-3  border-b"
              : "font-bold text-2xl ml-4 "
          }
        />
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="collapse"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef} className="relative ml-2 overflow-hidden sm:ml-6 ">
          <div className="sm:px-2 md:px-8">{children}</div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Collapse;
