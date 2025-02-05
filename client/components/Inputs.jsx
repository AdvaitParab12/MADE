import { Input } from "@heroui/react";
import { useRef, useState } from "react";
import React from "react";
import { SendHorizontalIcon, UploadIcon } from "lucide-react";

function Inputs() {
  const [input, setInput] = useState("");
  const inputUpload = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      setInput("");
    } else {
      inputUpload.current.click();
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0].type;
    if (file.includes("image")) {
      console.log("image");
    }
    const reader = new FileReader();

    reader.onloadend = function () {
    
      const base64String = reader.result;
      console.log(base64String);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      className="absolute bottom-0 left-0 w-full sm:mb-5 flex gap-4 p-4"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        label="Enter your message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoComplete="off"
      />
      <input
        type="file"
        hidden
        name="file"
        ref={inputUpload}
        onChange={handleFileUpload}
      />
      <button
        className="h-auto bg-green-500 p-4 rounded-xl flex items-center justify-center"
        aria-label="Send Message"
        type="submit"
      >
        {input ? <SendHorizontalIcon size={20} /> : <UploadIcon />}
      </button>
    </form>
  );
}

export default Inputs;
