import { Button } from "@/components/ui/button";
import Image from "next/image";
import { db } from "@/lib/db";

export default async function Home() {  
  return (
    <>
      <h1 className="text-3xl font-bold">Welcome to the Code Editor</h1>
      <p className="text-lg">Start coding today!</p>
    </>
  );
}
