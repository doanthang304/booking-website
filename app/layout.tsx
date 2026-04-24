import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "muốn thơm | Đặt lịch tư vấn mùi hương riêng",
    template: "%s | muốn thơm",
  },
  description:
    "Landing page responsive cho muốn thơm, tập trung vào đặt lịch hẹn tư vấn riêng và khẳng định trải nghiệm boutique đáng tin cậy của cửa hàng.",
  applicationName: "muốn thơm",
  keywords: [
    "muốn thơm",
    "đặt lịch tư vấn nước hoa",
    "tư vấn mùi hương riêng",
    "fragrance consultation",
    "boutique perfume",
  ],
  openGraph: {
    title: "muốn thơm | Đặt lịch tư vấn mùi hương riêng",
    description:
      "Đặt lịch hẹn riêng để được chọn mùi theo gu, dịp dùng và ngân sách trong không gian boutique chỉn chu.",
    type: "website",
    locale: "vi_VN",
    siteName: "muốn thơm",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
