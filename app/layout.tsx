import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShipFront Academy — Frontend + AI aplicada",
  description: "Suscripción para aprender Next.js, frontend moderno e IA aplicada al frontend (OpenAI + cloud).",
  metadataBase: new URL("https://imsebarz.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
