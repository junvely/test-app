export default function RootLayout({
  children, //layout은 children 받아야함
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
