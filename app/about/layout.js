import MainHeader from "@/components/headers/MainHeader";
export const metadata = {
  title: "About - StreamlineBio",
  description: "About page of Streamline Bio.",
};

export default function AboutLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
