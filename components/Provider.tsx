"use client";

import { GlobalContextProvider } from "@/app/Context/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    
      <GlobalContextProvider>{children}</GlobalContextProvider>
    
  );
}