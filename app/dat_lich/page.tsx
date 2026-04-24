import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingRequestForm from "@/app/dat_lich/request_form";
import heroImage from "@/public/anh_bia.jpg";

export const metadata: Metadata = {
  title: "Đặt lịch tư vấn",
  description:
    "Trang đặt lịch tối giản của muốn thơm với những thông tin cần thiết nhất để gửi yêu cầu hẹn.",
};

export default function BookingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-6 md:px-8 md:py-8">
      <Image
        alt="Nền mờ của trang đặt lịch muốn thơm."
        className="object-cover opacity-18 blur-xs"
        fill
        priority
        sizes="100vw"
        src={heroImage}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,7,6,0.84),rgba(9,7,6,0.94))]" />

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col gap-10">
        <header className="flex items-center justify-between gap-4">
          <Link
            className="font-display text-3xl leading-none tracking-tight text-[#f5e7d6]"
            href="/"
          >
            muốn thơm
          </Link>
          <Link
            className="text-sm font-medium text-[#d8c5ae] transition hover:text-[#f5e7d6]"
            href="/"
          >
            Quay lại
          </Link>
        </header>

        <section className="rounded-[2rem] border border-[#f2e3cf]/12 bg-[rgba(17,13,11,0.92)] p-5 shadow-[0_36px_80px_-44px_rgba(0,0,0,0.9)] md:p-8">
          <div className="mb-8 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8946c]">
              Đặt Lịch
            </p>
            <h1 className="font-display text-4xl leading-tight text-[#f5e7d6] md:text-5xl">
              Gửi yêu cầu hẹn nhanh.
            </h1>
            <p className="max-w-xl text-sm leading-7 text-[#d8c5ae] md:text-base">
              Chỉ cần điền những thông tin cần thiết, cửa hàng sẽ kiểm tra và
              phản hồi sớm nhất về lịch hẹn của bạn.
            </p>
          </div>

          <BookingRequestForm />
        </section>
      </div>
    </main>
  );
}
