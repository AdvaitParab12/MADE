"use client";
import { Button, HeroUIProvider } from "@heroui/react";
import Form from "@/components/Form";

export default function Home() {
  return (
    <HeroUIProvider>
      <Form />
    </HeroUIProvider>
  );
}
