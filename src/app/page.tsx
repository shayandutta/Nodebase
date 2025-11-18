import { Button } from "@/components/ui/button";
// import {useEffect} from "react";
import prisma from "@/lib/db";

const Page = async () => {
  // useEffect(()=>{}, [])
  const users = await prisma.user.findMany();

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div>{JSON.stringify(users)}</div>
      <Button variant={"outline"}>Click Me</Button>
    </div>
  );
};

export default Page;
