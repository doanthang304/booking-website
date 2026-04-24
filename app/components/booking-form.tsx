"use client";

import { type FormEvent, useState } from "react";

const BOOKING_EMAIL = "booking@muonthom.vn";

const fieldClassName =
  "w-full rounded-2xl border border-stone-300/80 bg-white/85 px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/15";

export default function BookingForm() {
  const [notice, setNotice] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const date = String(formData.get("date") ?? "");
    const timeframe = String(formData.get("timeframe") ?? "");
    const goal = String(formData.get("goal") ?? "");
    const channel = String(formData.get("channel") ?? "");
    const note = String(formData.get("note") ?? "");

    const message = [
      "YEU CAU DAT LICH TU VAN RIENG - MUON THOM",
      `Ho ten: ${name}`,
      `So dien thoai: ${phone}`,
      `Ngay mong muon: ${date}`,
      `Khung gio uu tien: ${timeframe}`,
      `Nhu cau: ${goal}`,
      `Kenh xac nhan mong muon: ${channel}`,
      `Ghi chu them: ${note || "Khong co"}`,
    ].join("\n");

    const subject = encodeURIComponent(`Đặt lịch tư vấn riêng - ${name}`);
    const body = encodeURIComponent(message);

    try {
      await navigator.clipboard.writeText(message);
      setNotice(
        "Nội dung đặt lịch đã được sao chép. Website cũng sẽ mở email điền sẵn để bạn chốt lịch nhanh hơn.",
      );
    } catch {
      setNotice(
        "Website đang mở email điền sẵn để bạn gửi yêu cầu. Nếu ứng dụng mail không mở, hãy gửi lại sau.",
      );
    }

    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="block text-sm font-semibold text-stone-700">
            Họ và tên
          </span>
          <input
            className={fieldClassName}
            name="name"
            placeholder="Tên người đặt lịch"
            required
            type="text"
          />
        </label>

        <label className="space-y-2">
          <span className="block text-sm font-semibold text-stone-700">
            Số điện thoại
          </span>
          <input
            className={fieldClassName}
            name="phone"
            placeholder="090..."
            required
            type="tel"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="block text-sm font-semibold text-stone-700">
            Ngày mong muốn
          </span>
          <input className={fieldClassName} name="date" required type="date" />
        </label>

        <label className="space-y-2">
          <span className="block text-sm font-semibold text-stone-700">
            Khung giờ ưu tiên
          </span>
          <select className={fieldClassName} name="timeframe" required>
            <option value="">Chọn khung giờ</option>
            <option value="Buoi sang 10:00 - 12:00">Buổi sáng 10:00 - 12:00</option>
            <option value="Buoi chieu 14:00 - 17:00">
              Buổi chiều 14:00 - 17:00
            </option>
            <option value="Buoi toi 18:00 - 20:30">Buổi tối 18:00 - 20:30</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="block text-sm font-semibold text-stone-700">
            Nhu cầu chính
          </span>
          <select className={fieldClassName} name="goal" required>
            <option value="">Chọn nhu cầu</option>
            <option value="Tim mui hang ngay hop gu">
              Tìm mùi hằng ngày hợp gu
            </option>
            <option value="Chon qua tang can an toan va tinh te">
              Chọn quà tặng an toàn và tinh tế
            </option>
            <option value="Nang cap tu huong ca nhan">
              Nâng cấp tủ hương cá nhân
            </option>
            <option value="Tim mui cho su kien hoac dip dac biet">
              Tìm mùi cho dịp đặc biệt
            </option>
          </select>
        </label>

        <label className="space-y-2">
          <span className="block text-sm font-semibold text-stone-700">
            Kênh xác nhận
          </span>
          <select className={fieldClassName} name="channel" required>
            <option value="">Chọn kênh liên hệ</option>
            <option value="Goi dien xac nhan">Gọi điện xác nhận</option>
            <option value="Nhan tin Zalo">Nhắn tin Zalo</option>
            <option value="Nhan tin Instagram">Nhắn tin Instagram</option>
          </select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="block text-sm font-semibold text-stone-700">
          Ghi chú thêm
        </span>
        <textarea
          className={`${fieldClassName} min-h-32 resize-y`}
          name="note"
          placeholder="Ví dụ: thích mùi sạch, ít ngọt, cần dùng đi làm và đi hẹn tối."
        />
      </label>

      <div className="rounded-3xl border border-stone-300/80 bg-stone-900 px-5 py-5 text-stone-50 shadow-[0_24px_50px_-30px_rgba(20,20,20,0.75)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">
              Xác nhận nhanh
            </p>
            <p className="max-w-md text-sm leading-6 text-stone-300">
              Khi bấm gửi, website sẽ tạo sẵn nội dung đặt lịch để cửa hàng dễ
              xác nhận buổi hẹn riêng của bạn.
            </p>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
            type="submit"
          >
            Gửi yêu cầu tư vấn
          </button>
        </div>
      </div>

      <p
        aria-live="polite"
        className="min-h-6 text-sm leading-6 text-stone-600"
      >
        {notice}
      </p>
    </form>
  );
}
