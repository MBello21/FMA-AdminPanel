import { useParams } from "react-router";
import { useState } from "react";
import { FreakHeader } from "./components/FreakHeader";

export const Freak = () => {
  const { cat } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const catActive = cat ?? null;
  return (
    <div className="w-full max-w-full flex flex-col  bg-neutral-800 min-h-screen h-auto py-4">
      <FreakHeader />
    </div>
  );
};
