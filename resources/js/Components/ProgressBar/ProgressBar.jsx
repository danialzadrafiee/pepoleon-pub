import React from "react";
import { Absolute } from "../Tags/Tags";
import { Tooltip } from "react-tooltip";
const ProgressBar = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="relative flex  w-full bg-primary-1000 rounded-full overflow-hidden h-5 xl:h-8">
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content="124,145,123 PPLON"
            data-tooltip-place="bottom-end"
            className="flex px-3 text-sm flex-col text-primary-1000 font-semibold drop-shadow justify-center rounded-full overflow-hidden bar-pep  whitespace-nowrap bg-primary-500 "
            style={{ width: "25%" }}
          >
            <div>1231Sol</div>
          </div>
          <Absolute className="right-3 text-sm bottom-0 top-0 flex items-center justify-center">100%</Absolute>
        </div>
      </div>
      <Tooltip style={{ backgroundColor: "#5ED820", color: "#102c07", opacity: 1, fontWeight: "semibold" }} id="my-tooltip" isOpen={true} />
    </>
  );
};

export default ProgressBar;
