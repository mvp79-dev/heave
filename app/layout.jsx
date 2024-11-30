import "./globals.css";
import { Navigation } from "./Navigation";

export const metadata = {
  title: "Heave",
  description: "We elevate brands through viral marketing strategies we’ve mastered in the past.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
