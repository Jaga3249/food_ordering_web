"use client";

import CategoryList from "./_components/CategoryList";
import { useEffect, useState } from "react";
import { GetCategory } from "./_utils/GlobalApi";

export default function Home() {
  return (
    <>
      <CategoryList />
    </>
  );
}
