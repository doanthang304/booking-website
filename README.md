
# Hệ Thống Đặt Lịch Hẹn Đơn Giản Cho Hộ Kinh Doanh Nhỏ

Đây là một giải pháp mã nguồn mở được xây dựng trên nền tảng Next.js, giúp các cửa hàng nhỏ (tiệm tóc, phòng khám, studio, v.v.) có thể tiếp nhận yêu cầu đặt lịch từ khách hàng một cách nhanh chóng. Hệ thống tập trung vào sự tối giản, hiệu quả và dễ dàng triển khai mà không cần đến các hệ thống quản trị phức tạp.

## Mục tiêu dự án

Dự án này giải quyết vấn đề quản lý lịch hẹn cho các đơn vị kinh doanh chưa cần đến một hệ thống CRM chuyên sâu. Khi khách hàng gửi thông tin qua biểu mẫu, một email thông báo sẽ được gửi trực tiếp đến Gmail của chủ cửa hàng thông qua thư viện Resend. Từ đó, chủ cửa hàng có thể chủ động liên lạc lại để xác nhận với khách.

## Các tính năng chính

* Giao diện đặt lịch tối giản, thân thiện với thiết bị di động.
* Tích hợp thư viện Resend để gửi thông báo email theo thời gian thực.
* Xác thực dữ liệu biểu mẫu đảm bảo thông tin khách hàng chính xác.
* Dễ dàng tùy chỉnh giao diện và các trường thông tin theo đặc thù từng ngành nghề.

## Công nghệ sử dụng

* Framework: Next.js 14+ (App Router)
* Ngôn ngữ: TypeScript
* Styling: Tailwind CSS
* Email Service: Resend
* Form Handling: React Hook Form & Zod

## Hướng dẫn cài đặt cho nhà phát triển

Để chạy dự án này ở môi trường máy cục bộ (local), bạn thực hiện theo các bước sau:

### 1. Clone dự án

```bash
git clone https://github.com/doanthang304/booking-website
cd booking-website
```

### 2. Cài đặt thư viện

```bash
npm install
# hoặc
yarn install
```

### 3. Cấu hình biến môi trường

Tạo một tệp có tên `.env.local` tại thư mục gốc và thêm vào mã API của Resend (bạn có thể lấy mã này tại resend.com):

```env
RESEND_API_KEY=your_api_key_here
RESEND_FROM_EMAIL=email_lap_resend@gmail.com
BOOKING_TO_EMAIL=email_lap_resend@resend.dev
```

### 4. Chạy dự án

```bash
npm run dev
```

## Triển khai (Deployment)

Cách nhanh nhất để đưa dự án lên môi trường thực tế là sử dụng nền tảng Vercel:

1.  Đẩy mã nguồn lên GitHub.
2.  Kết nối tài khoản GitHub với Vercel.
3.  Thêm các biến môi trường. Import .env vào Vercel
4.  Nhấn Deploy.

## Hướng dẫn cho người dùng/hộ kinh doanh

Sau khi hệ thống được triển khai:
1.  Khách hàng truy cập trang web và điền thông tin (Tên, Số điện thoại, Thời gian, Yêu cầu).
2.  Hệ thống tự động gửi một email chứa toàn bộ thông tin này đến Gmail của bạn.
3.  Bạn kiểm tra Gmail và Reply lại khách bằng một form theo của riêng bạn thiết kế.

## Đóng góp cho dự án

Mọi sự đóng góp nhằm cải thiện tính năng hoặc giao diện đều được trân trọng. Nếu bạn có ý tưởng mới hoặc phát hiện lỗi, vui lòng:
1.  Fork dự án.
2.  Tạo một Branch mới cho tính năng của bạn.
3.  Gửi Pull Request để chúng ta cùng thảo luận.



