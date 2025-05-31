"use client";
import React from "react";
import Confession from "../../components/Confession";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const idParam = params.whisperId;
  const id = Array.isArray(idParam) ? idParam[0] : idParam;
  return (
    <div>
      <Confession whisperId={id}/>
    </div>
  );
}
