"use client";

import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Constants } from "@/lib";
import { useRouter } from "next/navigation";

export const BetaAlert = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const acceptedBeta = localStorage.getItem("acceptedBeta");
    if (!acceptedBeta) {
      setOpen(true);
    }
  }, []);

  // Function to handle the close action
  const handleContinue = () => {
    localStorage.setItem("acceptedBeta", "true");
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left">Welcome to Pujo Atlas BETA</AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            Pujo Atlas BETA may occasionally be unstable. Are you sure you want to continue?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              router.push(Constants.urls.prod);
            }}
          >
            Nope
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => handleContinue()}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
