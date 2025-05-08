export const metadata = {
  title: "Santa Calls Dashboard",
  description: "Track hardware and app progress for the North Pole hotline.",
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
