import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sensai-AI carrier assistant",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider  appearance={{ baseTheme: "dark" }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/*header*/}
            <Header />
            {/*main*/}
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            {/*footer*/}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto flex max-w-4xl flex-col items-center justify-between px-4">
                Made by Abhijit with💓
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
