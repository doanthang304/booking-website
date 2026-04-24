import Link from "next/link";
import Image from "next/image";
import ImageCarousel from "@/app/components/image_carousel";
import portraitImage from "@/public/anh1.jpg";
import heroImage from "@/public/anh_bia.jpg";
import galleryOne from "@/public/ig1.jpg";
import galleryTwo from "@/public/ig2.jpg";
import galleryThree from "@/public/ig3.jpg";

const MAP_LINK = "https://maps.app.goo.gl/uMonuARAAtPdovAR7";

const consultationFlow = [
  {
    step: "01",
    title: "Nghe brief thật nhanh nhưng đúng trọng tâm",
    description:
      "Cửa hàng hỏi về gu hiện tại, môi trường dùng mùi, dịp chính và mức chi để không bắt đầu từ một rừng lựa chọn.",
  },
  {
    step: "02",
    title: "Chia mùi theo nhóm để thử có định hướng",
    description:
      "Khách được thử theo các nhịp khác nhau như sạch gọn, ấm áp hay nổi bật để cảm nhận rõ cá tính từng nhóm mùi.",
  },
  {
    step: "03",
    title: "So sánh trên da và chỉnh theo phản hồi thật",
    description:
      "Từng ứng viên được đặt cạnh nhau, lọc tiếp theo độ thoải mái trên da, khả năng dùng hằng ngày và độ hợp hoàn cảnh.",
  },
  {
    step: "04",
    title: "Chốt shortlist và hướng dẫn dùng mùi về sau",
    description:
      "Buổi hẹn kết thúc bằng một shortlist rõ ràng và ghi chú để khách quay lại vẫn tiếp tục được hành trình đã mở.",
  },
];

const fitCases = [
  "Muốn tìm một mùi signature gọn gàng nhưng không nhạt cá tính.",
  "Cần quà tặng đủ an toàn, có câu chuyện và không tạo cảm giác chọn vội.",
  "Muốn nâng cấp tủ hương theo bối cảnh đi làm, đi chơi và sự kiện riêng.",
  "Thích được nói kỹ, thử kỹ trước khi xuống tiền cho một chai nghiêm túc.",
];

const carouselSlides = [
  {
    image: galleryOne,
    alt: "Không gian boutique với ánh sáng ấm tại muốn thơm.",
    title: "Không gian tối hơn để mùi lên tiếng rõ hơn",
    caption:
      "Carousel này thay phần uy tín cũ bằng thị giác mạnh hơn: ít chữ, nhiều nhịp ảnh, giữ cảm giác boutique kín và có chủ đích.",
  },
  {
    image: portraitImage,
    alt: "Khoảnh khắc chọn mùi hương riêng tại muốn thơm.",
    title: "Hình ảnh gần da, gần gu và gần cảm xúc",
    caption:
      "Ảnh được đưa vào carousel để website kể câu chuyện bằng chất liệu thật thay vì giải thích quá nhiều bằng lời.",
  },
  {
    image: heroImage,
    alt: "Góc trưng bày nước hoa trong tông tối và kem.",
    title: "Boutique mood với nền tối và sắc kem",
    caption:
      "Nhịp màu chính chuyển về nền sâu, điểm kem và ánh hổ phách để tạo cảm giác chậm, ấm và có độ tin cậy cao hơn.",
  },
  {
    image: galleryThree,
    alt: "Hình ảnh thương hiệu muốn thơm với nhịp thị giác boutique.",
    title: "Gallery được gom lại thành một layout carousel",
    caption:
      "Người xem không bị ngắt mạch. Họ lướt qua từng frame như bước qua các điểm chạm trong cùng một không gian mùi hương.",
  },
];

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      {kicker ? <p className="section-kicker">{kicker}</p> : null}
      <h2 className="font-display text-4xl leading-tight text-[#f5e7d6] md:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-[#d8c5ae] md:text-lg">
        {description}
      </p>
    </div>
  );
}

function AddressIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-[#f2e3cf]"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-[#f2e3cf]"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M6.6 4h3.02c.48 0 .9.33 1 .8l.55 2.75c.08.39-.04.8-.31 1.08l-1.5 1.5a14.55 14.55 0 0 0 4.5 4.5l1.5-1.5c.28-.27.69-.39 1.08-.31l2.75.55c.47.1.8.52.8 1V17.4c0 .88-.72 1.6-1.6 1.6h-.8C10.86 19 5 13.14 5 5.6v-.8C5 4.72 5.72 4 6.6 4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <main className="flex flex-col">
        <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
          <Image
            alt="Ảnh nền chính của muốn thơm với phong cách tối và ấm."
            className="object-cover"
            fill
            priority
            sizes="100vw"
            src={galleryTwo}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,3,2,0.5),rgba(4,3,2,0.72))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,227,207,0.06),transparent_34%),radial-gradient(circle_at_top,rgba(242,227,207,0.08),transparent_28%)]" />
          <div className="relative z-10 px-5">
            <div className="flex max-w-4xl flex-col items-center gap-5 text-center">
              <h1 className="font-display text-6xl leading-none tracking-tight text-[#f5e7d6] sm:text-7xl md:text-[7rem]">
                Muốn thơm
              </h1>
              <p className="font-display text-2xl italic tracking-[0.06em] text-[#e4d2bc] sm:text-3xl md:text-4xl">
                Want to smell good?
              </p>
            </div>
            <div className="mt-8 flex justify-center px-4">
              <div className="glass-surface inline-flex w-full max-w-[19rem] rounded-full border border-[#f2e3cf]/28 p-2 shadow-[0_28px_80px_-32px_rgba(0,0,0,0.88)] sm:w-auto sm:max-w-none">
              <Link
                className="inline-flex w-full items-center justify-center rounded-full bg-[#f2e3cf] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] !text-black transition hover:bg-[#f8efe4] hover:text-gray-800 sm:w-auto sm:px-10 sm:py-5"
                href="/dat-lich"
              >
                Đặt lịch tư vấn ngay
              </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-7xl flex-col gap-28 px-5 py-18 md:px-8 md:py-24">
          <section className="space-y-10" id="khong-gian">
            <SectionHeading
              description="Phần này thay cho khối uy tín và branding cũ. Thay vì giải thích nhiều, website dùng carousel để dẫn mắt người xem qua các góc ảnh còn lại trong một nhịp tối và kem thống nhất."
              kicker=""
              title="Một carousel lớn để hình ảnh tự tạo sức nặng cho thương hiệu."
            />
            <ImageCarousel slides={carouselSlides} />
          </section>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-18 md:px-8 md:pb-24 lg:grid-cols-[0.9fr_1.1fr]" id="quy-trinh">
          <div className="space-y-6">
            <SectionHeading
              description="Buổi tư vấn được chia thành những bước rõ ràng để khách thấy an tâm ngay từ đầu. Từ brief đến shortlist, mọi thứ đều được thiết kế để rút ngắn sự phân vân nhưng không làm mất chiều sâu trải nghiệm."
              kicker="Quy Trình Hẹn Riêng"
              title="Một hành trình đủ chậm để cảm mùi, đủ gọn để ra quyết định."
            />
            <div className="glass-surface rounded-[2rem] border border-[#f2e3cf]/12 p-6 shadow-[0_24px_50px_-38px_rgba(0,0,0,0.88)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c7ae90]">
                phù hợp khi bạn
              </p>
              <div className="mt-5 space-y-4">
                {fitCases.map((item) => (
                  <div
                    className="flex items-start gap-3 rounded-2xl border border-[#f2e3cf]/10 bg-[#171311] px-4 py-4"
                    key={item}
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#f2e3cf]" />
                    <p className="text-sm leading-7 text-[#dfccb6]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {consultationFlow.map((item) => (
              <article
                className="group rounded-[2rem] border border-[#f2e3cf]/12 bg-[rgba(18,14,12,0.88)] p-6 shadow-[0_22px_46px_-36px_rgba(0,0,0,0.92)] transition hover:-translate-y-0.5"
                key={item.step}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8946c]">
                      bước {item.step}
                    </p>
                    <h3 className="max-w-xl font-display text-3xl leading-tight text-[#f5e7d6]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="h-px w-full bg-[#f2e3cf]/16 md:mt-6 md:h-16 md:w-px" />
                  <p className="max-w-xl text-base leading-8 text-[#d8c5ae]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-18 md:px-8 md:pb-24" id="vi-tri">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="space-y-6">
              <SectionHeading
                description="Nhấn vào hình ảnh bản đồ hoặc địa chỉ để tới cửa hàng."
                kicker="Vị Trí"
                title="Bản đồ dẫn đường tới Muốn thơm."
              />

              <div className="glass-surface rounded-[2rem] border border-[#f2e3cf]/12 p-6 shadow-[0_24px_50px_-38px_rgba(0,0,0,0.88)]">
                <div className="space-y-4">
                  <a
                    className="flex items-start gap-4 rounded-[1.4rem] border border-[#f2e3cf]/10 bg-[#171311] px-4 py-4 transition hover:border-[#f2e3cf]/25"
                    href={MAP_LINK}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AddressIcon />
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b8946c]">
                        Địa chỉ
                      </p>
                      <p className="text-sm leading-7 text-[#d8c5ae]">
                        24 P.Nam Ngư, Cửa Nam, Hà Nội
                      </p>
                    </div>
                  </a>

                  <a
                    className="flex items-start gap-4 rounded-[1.4rem] border border-[#f2e3cf]/10 bg-[#171311] px-4 py-4 transition hover:border-[#f2e3cf]/25"
                    href="tel:+84979692410"
                  >
                    <PhoneIcon />
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b8946c]">
                        Phone
                      </p>
                      <p className="text-sm leading-7 text-[#d8c5ae]">
                        +84 979 692 410
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a
              className="group relative overflow-hidden rounded-[2.4rem] border border-[#f2e3cf]/12 bg-[#171311] shadow-[0_36px_90px_-44px_rgba(0,0,0,0.92)]"
              href={MAP_LINK}
              rel="noreferrer"
              target="_blank"
            >
              <div className="relative aspect-[16/11] min-h-[22rem]">
                <Image
                  alt="Bản đồ vị trí cửa hàng muốn thơm."
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  src="/map-preview.svg"
                />
                {/* <div className="absolute left-1/2 top-4 w-[82%] max-w-none -translate-x-1/2 overflow-hidden rounded-[1.6rem] border border-white/12 shadow-[0_26px_70px_-34px_rgba(0,0,0,0.95)] sm:top-6 sm:w-[72%] lg:w-[74%]">
                  <div className="relative aspect-[568/422]">
                    <Image
                      alt="Ảnh vị trí cửa hàng muốn thơm."
                      className="h-full w-full object-cover"
                      fill
                      sizes="(min-width: 1024px) 38vw, 82vw"
                      src="/location.png"
                    />
                  </div>
                </div> */}

                <div className="absolute inset-0 overflow-hidden rounded-[2.4rem]">
                  <Image
                    alt="Ảnh vị trí cửa hàng muốn thơm."
                    className="h-full w-full object-cover"
                    fill
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    src="/location.png"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 md:p-8">
                  <p className="max-w-xl text-sm leading-7 text-[#dec9b1] md:text-base">
                    24 P.Nam Ngư, Cửa Nam, Hà Nội
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className="border-t border-[#f2e3cf]/10 bg-black px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 text-center">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.32em] text-[#b8946c]">
              Muon thom
            </p>
            <p className="font-display text-4xl leading-[1.04] text-[#f2e3cf] md:text-7xl">
              “Muốn thơm thì cầm”
            </p>
          </div>
        </section>
        
      </main>
    </div>
  );
}
