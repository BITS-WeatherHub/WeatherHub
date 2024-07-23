import { SignedIn, UserButton } from "@clerk/nextjs";
import { Typography } from "./Typography";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function NavigationBar() {
  return (
    <div className="w-screen -mx-10 p-10 flex justify-between items-center py-2 border-b-[1px] mb-4">
      <div className=" flex justify-between items-center">
        <Image
          alt="icon"
          src="/rainbow.png"
          width={30}
          height={30}
        />
        <Typography
          variant="h2"
        >
          WeatherHub
        </Typography>
      </div>
      <div className="space-x-2 flex justify-between items-center">
        {["Dashboard", "Alert", "Trip Planning"].map((item) => (
          <Link
            href={"/dashboard"}
            className={buttonVariants({ variant: "ghost" })}
          >
            {item}
          </Link>
        ))}

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
