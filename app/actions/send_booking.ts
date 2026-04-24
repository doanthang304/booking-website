"use server";

export type BookingActionState = {
  error?: string;
  success: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d+$/;

type BookingPayload = {
  date: string;
  email: string;
  name: string;
  note: string;
  phone: string;
  timeframe: string;
};

const initialActionState: BookingActionState = {
  success: false,
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function readPayload(formData: FormData): BookingPayload {
  return {
    date: String(formData.get("date") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    name: String(formData.get("name") ?? "").trim(),
    note: String(formData.get("note") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    timeframe: String(formData.get("timeframe") ?? "").trim(),
  };
}

function validatePayload(payload: BookingPayload) {
  if (!payload.name) {
    return "Thiếu họ và tên.";
  }

  if (!payload.email || !emailPattern.test(payload.email)) {
    return "Email không hợp lệ.";
  }

  if (!payload.phone || !phonePattern.test(payload.phone)) {
    return "Số điện thoại phải là chuỗi chỉ gồm chữ số.";
  }

  if (!payload.date) {
    return "Thiếu ngày mong muốn.";
  }

  if (!payload.timeframe) {
    return "Thiếu khung giờ.";
  }

  return null;
}

function formatPlainText(payload: BookingPayload) {
  return [
    "YEU CAU DAT LICH TU VAN - MUON THOM",
    "",
    `Ho va ten: ${payload.name}`,
    `Email: ${payload.email}`,
    `So dien thoai: ${payload.phone}`,
    `Ngay mong muon: ${payload.date}`,
    `Khung gio: ${payload.timeframe}`,
    `Ghi chu them: ${payload.note || "Khong co"}`,
  ].join("\n");
}

function renderBookingHtml(payload: BookingPayload) {
  const submittedAt = new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date());

  const rows = [
    ["Họ và tên", payload.name],
    ["Email", payload.email],
    ["Số điện thoại", payload.phone],
    ["Ngày mong muốn", payload.date],
    ["Khung giờ", payload.timeframe],
    ["Ghi chú thêm", payload.note || "Không có"],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #eadcc9;color:#6e5a45;font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;width:180px;vertical-align:top;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:14px 0;border-bottom:1px solid #eadcc9;color:#1d1814;font-size:15px;line-height:1.7;">
            ${escapeHtml(value)}
          </td>
        </tr>
      `,
    )
    .join("");

  return `
    <div style="margin:0;background:#f6efe6;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#1d1814;">
      <div style="max-width:680px;margin:0 auto;overflow:hidden;border:1px solid #eadcc9;border-radius:28px;background:#fffaf4;">
        <div style="padding:28px 32px;background:#171311;color:#f3e4cf;">
          <div style="font-size:12px;font-weight:700;letter-spacing:.28em;text-transform:uppercase;color:#c59d71;">Muốn thơm</div>
          <h1 style="margin:14px 0 8px;font-size:30px;line-height:1.2;">
            Yêu cầu đặt lịch tư vấn mới
          </h1>
          <p style="margin:0;font-size:14px;line-height:1.7;color:#dec9b1;">
            Một khách hàng vừa gửi yêu cầu hẹn tư vấn từ form trên website.
          </p>
        </div>

        <div style="padding:28px 32px 32px;">
          <div style="margin-bottom:20px;padding:18px 20px;border-radius:20px;background:#f3e7d8;">
            <div style="font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#8a6a48;">Thời điểm nhận</div>
            <div style="margin-top:8px;font-size:15px;line-height:1.7;color:#1d1814;">${escapeHtml(submittedAt)}</div>
          </div>

          <table style="width:100%;border-collapse:collapse;">
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export async function submitBooking(
  formData: FormData,
): Promise<BookingActionState> {
  const payload = readPayload(formData);
  const validationError = validatePayload(payload);

  if (validationError) {
    return {
      error: validationError,
      success: false,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.BOOKING_TO_EMAIL;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "Muốn Thơm <onboarding@resend.dev>";

  if (!apiKey) {
    return {
      error: "Thiếu RESEND_API_KEY trong biến môi trường.",
      success: false,
    };
  }

  if (!toEmail) {
    return {
      error: "Thiếu BOOKING_TO_EMAIL trong biến môi trường.",
      success: false,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "booking-website/1.0",
      },
      body: JSON.stringify({
        from: fromEmail,
        html: renderBookingHtml(payload),
        reply_to: payload.email,
        subject: `[Muốn thơm] ${payload.name} - ${payload.date} ${payload.timeframe}`,
        text: formatPlainText(payload),
        to: [toEmail],
      }),
    });

    if (!response.ok) {
      const errorBody = (await response.json().catch(() => null)) as
        | { message?: string; name?: string }
        | null;

      return {
        error:
          errorBody?.message ??
          errorBody?.name ??
          "Không gửi được email qua Resend.",
        success: false,
      };
    }

    return {
      success: true,
    };
  } catch {
    return {
      error: "Có lỗi xảy ra khi kết nối tới Resend.",
      success: false,
    };
  }
}

export async function sendBooking(
  _prevState: BookingActionState,
  formData: FormData,
): Promise<BookingActionState> {
  return submitBooking(formData);
}

const bookingInitialState = initialActionState;
