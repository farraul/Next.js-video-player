"use client";
import { useState } from "react";

type f = () => Promise<void>;

export const useFetch = (f: f) => {
  const [loading, setLoading] = useState(false);
  const call = async () => {
    setLoading(true);
    await f();
    setLoading(false);
  };

  return { loading, call };
};
