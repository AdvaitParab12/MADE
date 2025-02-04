import { Input } from "@heroui/react";
import React from "react";
import { SendHorizontalIcon } from "lucide-react";

function Inputs() {
  return (
    <div className="absolute bottom-0 left-0 w-full sm:mb-5 flex gap-4">
      <Input type="text" label="Enter your message" />
      <button className="h-auto bg-green-500 p-4 rounded-xl">
        <SendHorizontalIcon />
      </button>
    </div>
  );
}

export default Inputs;
