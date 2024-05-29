"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

function userHistory() {
  const router = useRouter();

  return <h1>{router.query.id}</h1>;
}
export default userHistory;
