"use client";

import { ReactNode } from "react";
import {
  CartProvider,
  ComponentsStatesProvider,
  UserProvider,
} from "@/contexts";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <UserProvider>
      <CartProvider>
        <ComponentsStatesProvider>{children}</ComponentsStatesProvider>
      </CartProvider>
    </UserProvider>
  );
};
