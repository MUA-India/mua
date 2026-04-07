"use client";

import { SessionProvider } from "next-auth/react";
import { type AbstractIntlMessages } from "next-intl";

import { IntlProvider, QueryProvider, ThemeProvider } from "@/providers";

export function Providers({
  children,
  messages,
  locale
}: {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale?: string;
}) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <IntlProvider messages={messages} locale={locale}>
          <QueryProvider>{children}</QueryProvider>
        </IntlProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
