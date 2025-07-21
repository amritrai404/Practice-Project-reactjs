export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Aapka layout content + pages */}
        {children}
      </body>
    </html>
  );
}