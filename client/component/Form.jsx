import { useState } from "react";
import { Button } from "@heroui/react";

function Form() {
  const [emoji, setEmoji] = useState("😍");

  // Update emoji on click
  function handleClick(newEmoji) {
    setEmoji(newEmoji);
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10 mb-10">
      <EmojiPreview emoji={emoji} /> 
      <EmojiSelect handleClick={handleClick} /> 
    </div>
  );
}

function EmojiPreview({ emoji }) {
  return <Button className="text-4xl">{emoji}</Button>;  
}

function EmojiSelect({ handleClick }) {
  return (
    <section className="flex items-center justify-center gap-4" >
      
      <Button onPress={() => handleClick("😒")} className="text-2xl" variant="bordered">😒</Button>
      <Button onPress={() => handleClick("👋")} className="text-2xl" variant="bordered">👋</Button>
      <Button onPress={() => handleClick("😎")} className="text-2xl" variant="bordered">😎</Button>
      <Button onPress={() => handleClick("🤓")} className="text-2xl" variant="bordered">🤓</Button>
      <Button onPress={() => handleClick("😘")} className="text-2xl" variant="bordered">😘</Button>
    </section>
  );
}

export default Form;
