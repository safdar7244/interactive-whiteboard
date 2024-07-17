"use client";
import { useState, useEffect } from "react";
import { useRenameModal } from "@/store/use-rename-modal";
import RenameModal from "@/components/modals/rename-modal";

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <RenameModal />
    </>
  );
};
