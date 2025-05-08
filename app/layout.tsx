export const metadata = {
  title: "Santa Calls Dashboard",
  description: "Track build progress and connect the North Pole",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
