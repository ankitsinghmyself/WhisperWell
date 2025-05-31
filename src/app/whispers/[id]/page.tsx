"use client";
import React from "react";
import Confession from "../../components/Confession";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = params.id;
  return (
    <div>
      <Confession id={id}/>
    </div>
  );
}
