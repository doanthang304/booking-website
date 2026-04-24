"use client";

import Image from "next/image";
import {
  type ChangeEvent,
  type FormEvent,
  useState,
  useTransition,
} from "react";
import { submitBooking } from "@/app/actions/send_booking";

type FormErrors = {
  date?: string;
  email?: string;
  name?: string;
  phone?: string;
  timeframe?: string;
};

type FormValues = {
  date: string;
  email: string;
  name: string;
  note: string;
  phone: string;
  timeframe: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d+$/;

const inputClassName =
  "w-full rounded-2xl border border-[#f2e3cf]/12 bg-[#120f0d] px-4 py-3 text-sm text-[#f5e7d6] outline-none transition placeholder:text-[#9f8a72] focus:border-[#f2e3cf]/34 focus:ring-2 focus:ring-[#f2e3cf]/10";

const initialValues: FormValues = {
  date: "",
  email: "",
  name: "",
  note: "",
  phone: "",
  timeframe: "",
};

export default function BookingRequestForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [pending, startBookingTransition] = useTransition();

  const setField =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const rawValue = event.target.value;
      const nextValue =
        field === "phone" ? rawValue.replaceAll(/[^\d]/g, "") : rawValue;

      setValues((current) => ({ ...current, [field]: nextValue }));
      setErrors((current) => ({ ...current, [field]: undefined }));
      setServerError(null);
    };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Vui lòng nhập họ và tên.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Vui lòng nhập email.";
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Email chưa đúng định dạng.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Vui lòng nhập số điện thoại.";
    } else if (!phonePattern.test(values.phone.trim())) {
      nextErrors.phone = "Số điện thoại chỉ được chứa chữ số.";
    }

    if (!values.date) {
      nextErrors.date = "Vui lòng chọn ngày mong muốn.";
    }

    if (!values.timeframe) {
      nextErrors.timeframe = "Vui lòng chọn khung giờ.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const formData = new FormData(event.currentTarget);

    startBookingTransition(async () => {
      const result = await submitBooking(formData);

      if (!result.success) {
        setServerError(result.error ?? "Không gửi được yêu cầu.");
        return;
      }

      setServerError(null);
      setIsSuccessOpen(true);
      setErrors({});
      setValues(initialValues);
    });
  };

  return (
    <>
      <form className="space-y-5" noValidate onSubmit={handleSubmit}>
        <div className="grid gap-5">
          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[#e8d8c4]">
              Họ và tên
            </span>
            <input
              className={inputClassName}
              name="name"
              onChange={setField("name")}
              placeholder="Tên người đặt lịch"
              type="text"
              value={values.name}
            />
            {errors.name ? (
              <p className="text-sm text-[#d49b7d]">{errors.name}</p>
            ) : null}
          </label>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="block text-sm font-semibold text-[#e8d8c4]">
                Email
              </span>
              <input
                className={inputClassName}
                inputMode="email"
                name="email"
                onChange={setField("email")}
                placeholder="you@example.com"
                type="email"
                value={values.email}
              />
              {errors.email ? (
                <p className="text-sm text-[#d49b7d]">{errors.email}</p>
              ) : null}
            </label>

            <label className="space-y-2">
              <span className="block text-sm font-semibold text-[#e8d8c4]">
                Số điện thoại
              </span>
              <input
                className={inputClassName}
                inputMode="numeric"
                name="phone"
                onChange={setField("phone")}
                pattern="[0-9]*"
                placeholder="Chỉ nhập số"
                type="tel"
                value={values.phone}
              />
              {errors.phone ? (
                <p className="text-sm text-[#d49b7d]">{errors.phone}</p>
              ) : null}
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="block text-sm font-semibold text-[#e8d8c4]">
                Ngày mong muốn
              </span>
              <input
                className={inputClassName}
                name="date"
                onChange={setField("date")}
                type="date"
                value={values.date}
              />
              {errors.date ? (
                <p className="text-sm text-[#d49b7d]">{errors.date}</p>
              ) : null}
            </label>

            <label className="space-y-2">
              <span className="block text-sm font-semibold text-[#e8d8c4]">
                Khung giờ
              </span>
              <select
                className={inputClassName}
                name="timeframe"
                onChange={setField("timeframe")}
                value={values.timeframe}
              >
                <option value="">Chọn khung giờ</option>
                <option value="10:00 - 12:00">10:00 - 12:00</option>
                <option value="14:00 - 17:00">14:00 - 17:00</option>
                <option value="18:00 - 20:30">18:00 - 20:30</option>
              </select>
              {errors.timeframe ? (
                <p className="text-sm text-[#d49b7d]">{errors.timeframe}</p>
              ) : null}
            </label>
          </div>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[#e8d8c4]">
              Ghi chú thêm (nếu có)
            </span>
            <textarea
              className={`${inputClassName} min-h-32 resize-y`}
              name="note"
              onChange={setField("note")}
              placeholder="Bạn có thể để lại ghi chú thêm tại đây."
              value={values.note}
            />
          </label>
        </div>

        {serverError ? (
          <p className="text-sm leading-7 text-[#d49b7d]">{serverError}</p>
        ) : null}

        <button
          className="inline-flex w-full items-center justify-center rounded-full bg-[#f2e3cf] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#f8efe4] disabled:cursor-not-allowed disabled:opacity-60"
          disabled={pending}
          type="submit"
        >
          {pending ? "Đang gửi..." : "Gửi yêu cầu"}
        </button>
      </form>

      {isSuccessOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-5">
          <div className="w-full max-w-md rounded-[2rem] border border-[#f2e3cf]/14 bg-[#15110f] p-6 text-center shadow-[0_36px_90px_-44px_rgba(0,0,0,0.92)] md:p-8">
            <div className="mx-auto mb-6 w-full max-w-[11rem]">
              <Image
                alt="Xác nhận gửi yêu cầu thành công"
                height={180}
                priority
                src="/booking-success.svg"
                width={180}
              />
            </div>

            <h2 className="font-display text-3xl leading-tight text-[#f5e7d6]">
              Yêu cầu đã được gửi.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#d8c5ae] md:text-base">
              Cửa hàng sẽ kiểm tra và phản hồi sớm nhất về lịch hẹn của bạn.
            </p>

            <button
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#f2e3cf] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f8efe4]"
              onClick={() => setIsSuccessOpen(false)}
              type="button"
            >
              Đóng
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
