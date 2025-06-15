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
import Link from "next/link";

export const BetaAlert = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const acceptedBeta = localStorage.getItem("acceptedBeta");
    if (!acceptedBeta) {
      setOpen(true);
    }
  }, []);

  // Function to handle the close action
  const handleContinue = () => {
    setOpen(false);
    localStorage.setItem("acceptedBeta", "true");
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Welcome to Pujo Atlas BETA</AlertDialogTitle>
          <AlertDialogDescription>
            Pujo Atlas BETA may occasionally be unstable. Are you sure you want
            to continue?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Link href={"https://atlas.ourkolkata.in"} rel="noopener noreferrer">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </Link>
          <AlertDialogAction onClick={() => handleContinue()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
