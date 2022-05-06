import { ChatTeardropDots } from "phosphor-react";

import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";
export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-10 flex flex-col items-end">
      <WidgetForm />
      <Popover.Button
        // onClick={""}
        className="bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          FeedBack
        </span>
      </Popover.Button>
    </Popover>
  );
}
