export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>SecondaryLayout</h1>
      <p>Scope para todas las paginas dentro de este directorio</p>
      {children}
    </section>
  );
}
