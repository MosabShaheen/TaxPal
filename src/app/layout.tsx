import "./globals.css";

export const metadata = {
  title: "Tailwind CSS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  );
}
