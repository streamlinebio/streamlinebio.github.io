import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

export const metadata = {
  title: "StreamlineBio",
  description: "Making cell and gene therapy accessible to all patients in need, in time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId={ process.env.GA_ID } />
    </html>
  );
}
