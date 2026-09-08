import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 塔羅占卜",
  description: "探索你的內在智慧,尋找生命的指引",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body>
        <div className="star-background">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
