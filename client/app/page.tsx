"use client";
import { Button, HeroUIProvider } from "@heroui/react";
import Form from "@/component/Form";

export default function Home() {
  return (
    <HeroUIProvider>
      <Form />
    </HeroUIProvider>
  );
}
