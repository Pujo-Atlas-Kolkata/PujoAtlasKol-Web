import { Button } from "@/components";
import { Constants } from "@/lib";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-3">
      <div className="flex flex-col items-center justify-center backdrop-blur-3xl">
        <p className="text-9xl font-extrabold">404</p>
        <p className="text-lg font-normal">
          Uh oh! Looks like you lost your way.
        </p>

        <Link href={Constants.routes.home}>
          <Button variant={"neutral"} className="mt-4 cursor-pointer">
            Go back to the home page <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
