import "./globals.scss";

export const metadata = {
  title: "Wedding Invite",
  description: "Wedding invitation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
