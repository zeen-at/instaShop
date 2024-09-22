import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReduxProvider } from "./redux/Provider";
import localFont from "next/font/local";

// const dmsans = DM_Sans({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-dmsans",
// });

const dmsans = localFont({
  src: "./assets/fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-DMSans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "InstaShop assessment",
  description: "Some shopping features for insta-shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmsans.variable}>
      <body className="font-dmsans">
        <ReduxProvider>
          <ToastContainer />
        {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
