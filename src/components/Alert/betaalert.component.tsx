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
import posthog from "posthog-js";
import { PostHogEvents } from "@/providers";

export const BetaAlert = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const acceptedBeta = localStorage.getItem("acceptedBeta");
    if (!acceptedBeta) {
      setOpen(true);
    }
  }, []);

  const handleContinue = () => {
    localStorage.setItem("acceptedBeta", "true");
    posthog?.capture(PostHogEvents.BETA_ALERT_ACCEPT, {});
  };

  const handleReject = () => {
    posthog?.capture(PostHogEvents.BETA_ALERT_REJECT, {});
    router.push(Constants.urls.prod);
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
          <AlertDialogCancel onClick={handleReject}>Nope</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleContinue()}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
