"use client";
import { HeroUIProvider } from "@heroui/react";
import { Messages, Inputs, SignUp } from "@/components";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io(
  "https://active-almeria-advaitenterprise-d5669e15.koyeb.app/"
);

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    socket.on("user_joined", (data) => {
      console.log(data);
    });
  }, []);

  return (
    <HeroUIProvider>
      <div className="min-h-screen max-h-screen">
        {user ? (
          <div className="bg-green-100 min-h-screen">
            <div className="container mx-auto relative min-h-screen p-4">
              <Messages />
              <Inputs />
            </div>
          </div>
        ) : (
          <SignUp setUser={setUser} socket={socket} />
        )}
      </div>
    </HeroUIProvider>
  );
}
