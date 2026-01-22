import React from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import "react-native-get-random-values";

const CONVEX_URL = process.env.EXPO_PUBLIC_CONVEX_URL || "";

const convex = new ConvexReactClient(CONVEX_URL);

export default function ConvexProviderWrapper({ children }) {
  if (!CONVEX_URL) {
    console.warn("Convex URL not set. Please set EXPO_PUBLIC_CONVEX_URL in your .env file");
    return <>{children}</>;
  }
  
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
