export default function RootLayout({
  children, //layout은 children 받아야함
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3>Im Layout~</h3>
      {children}
    </div>
  );
}
