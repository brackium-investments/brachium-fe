"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/brackium");
  }, [router]);

  return <></>;
}
