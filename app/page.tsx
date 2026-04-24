import Image from "next/image";
import BookingForm from "@/app/components/booking-form";
import portraitImage from "@/public/anh1.jpg";
import heroImage from "@/public/anh_bia.jpg";
import galleryOne from "@/public/ig1.jpg";
import galleryTwo from "@/public/ig2.jpg";
import galleryThree from "@/public/ig3.jpg";

const highlights = [
  {
    value: "1:1",
    label: "Mỗi khung hẹn chỉ dành cho một khách",
  },
  {
    value: "3 lớp",
    label: "Lọc mùi theo gu, dịp dùng và ngân sách",
  },
  {
    value: "Sau hẹn",
    label: "Ghi chú shortlist để khách quay lại dễ tiếp tục",
  },
];

const credibilityPillars = [
  {
    title: "Tư vấn có cấu trúc, không bán theo cảm tính",
    description:
      "muốn thơm bắt đầu từ thói quen sống, cường độ mùi mong muốn và mức đầu tư thực tế để shortlist gọn và chắc tay hơn.",
  },
  {
    title: "Không gian thử mùi đủ yên để khách cảm mùi đúng",
    description:
      "Khách có khoảng riêng để thử trên da, so sánh từng lựa chọn và hiểu rõ vì sao một mùi hợp với mình hơn mùi còn lại.",
  },
  {
    title: "Minh bạch về độ lưu, độ toả và tình huống sử dụng",
    description:
      "Thương hiệu được xây trên sự rõ ràng: mùi nào đi làm ổn, mùi nào hợp tối muộn, mùi nào đáng tiền với nhu cầu của bạn.",
  },
];

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

const promiseList = [
  "Giữ sẵn bàn thử và blotter trước giờ hẹn để buổi gặp không bị loãng.",
  "Tư vấn theo ngân sách khách đặt ra, không đẩy khách vào lựa chọn quá tay.",
  "Hỗ trợ ghi chú mùi đã thử để khách quay lại vẫn tiếp tục được cuộc trò chuyện cũ.",
];

const galleryImages = [
  {
    image: heroImage,
    alt: "Không gian boutique của muốn thơm với ánh sáng ấm.",
    className: "md:row-span-2",
  },
  {
    image: galleryOne,
    alt: "Góc trưng bày mùi hương được sắp xếp chỉn chu tại muốn thơm.",
    className: "",
  },
  {
    image: portraitImage,
    alt: "Khoảnh khắc chọn mùi trong trải nghiệm tư vấn riêng tại muốn thơm.",
    className: "",
  },
  {
    image: galleryTwo,
    alt: "Ảnh không gian thử mùi mang tinh thần boutique của muốn thơm.",
    className: "",
  },
  {
    image: galleryThree,
    alt: "Hình ảnh thương hiệu muốn thơm với sắc độ ấm và gần gũi.",
    className: "",
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
      <p className="section-kicker">{kicker}</p>
      <h2 className="font-display text-4xl leading-tight text-stone-900 md:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-stone-700 md:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(191,129,74,0.34),transparent_52%)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-80 -z-10 h-80 w-80 rounded-full bg-emerald-900/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-6rem] top-[58rem] -z-10 h-72 w-72 rounded-full bg-amber-700/10 blur-3xl" />

      <header className="sticky top-0 z-40 border-b border-white/30 bg-[rgba(248,242,233,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a className="flex flex-col" href="#top">
            <span className="font-display text-3xl leading-none tracking-tight text-stone-950">
              muốn thơm
            </span>
            <span className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-stone-500">
              private scent consultation
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-stone-700 md:flex">
            <a className="transition hover:text-stone-950" href="#uy-tin">
              Uy tín
            </a>
            <a className="transition hover:text-stone-950" href="#quy-trinh">
              Quy trình
            </a>
            <a className="transition hover:text-stone-950" href="#khong-gian">
              Không gian
            </a>
            <a
              className="rounded-full border border-stone-900 px-5 py-2.5 text-stone-900 transition hover:bg-stone-900 hover:text-stone-50"
              href="#dat-lich"
            >
              Đặt lịch
            </a>
          </nav>

          <a
            className="rounded-full bg-stone-900 px-4 py-2.5 text-sm font-semibold text-stone-50 md:hidden"
            href="#dat-lich"
          >
            Đặt lịch
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-28 px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-10">
        <section
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
          id="top"
        >
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="section-kicker">Boutique Fragrance Editing</p>
              <div className="space-y-5">
                <h1 className="max-w-3xl font-display text-5xl leading-[0.94] tracking-tight text-stone-950 sm:text-6xl lg:text-[5.4rem]">
                  Đặt lịch hẹn riêng để chọn mùi hương thật đúng với cách bạn
                  muốn xuất hiện.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-700 md:text-lg">
                  muốn thơm được dựng như một boutique tư vấn mùi hương riêng:
                  ít nhưng kỹ, đủ riêng tư để khách thử trên da, nghe phân tích
                  rõ ràng và chốt một lựa chọn có lý do thay vì chọn theo cảm
                  hứng thoáng qua.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="glass-surface rounded-full border border-white/60 px-4 py-2 text-sm font-semibold text-stone-700">
                Tư vấn 1:1 theo lịch hẹn
              </span>
              <span className="glass-surface rounded-full border border-white/60 px-4 py-2 text-sm font-semibold text-stone-700">
                Lọc mùi theo ngân sách
              </span>
              <span className="glass-surface rounded-full border border-white/60 px-4 py-2 text-sm font-semibold text-stone-700">
                Không gian boutique yên tĩnh
              </span>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-stone-950 px-7 py-4 text-sm font-semibold text-stone-50 transition hover:bg-stone-800"
                href="#dat-lich"
              >
                Đặt lịch tư vấn ngay
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-stone-900/20 bg-white/70 px-7 py-4 text-sm font-semibold text-stone-900 transition hover:border-stone-900 hover:bg-white"
                href="#khong-gian"
              >
                Xem không gian thương hiệu
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  className="soft-panel rounded-[28px] border border-white/70 p-5 shadow-[0_24px_50px_-38px_rgba(34,48,39,0.75)]"
                  key={item.label}
                >
                  <p className="font-display text-3xl text-stone-950">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-stone-700">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-6 hidden h-32 w-32 rounded-full bg-amber-500/20 blur-3xl md:block" />
            <div className="absolute -right-8 bottom-16 hidden h-40 w-40 rounded-full bg-emerald-900/15 blur-3xl md:block" />

            <div className="relative mx-auto max-w-[35rem]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_36px_80px_-42px_rgba(34,48,39,0.8)]">
                <Image
                  alt="Góc trưng bày nước hoa sang trọng của muốn thơm."
                  className="h-full w-full object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  src={heroImage}
                />
              </div>

              <div className="glass-surface absolute -left-4 -top-4 max-w-xs rounded-[1.75rem] border border-white/70 p-5 shadow-[0_30px_60px_-36px_rgba(34,48,39,0.7)] md:left-auto md:right-[-2.5rem] md:top-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">
                  lịch tư vấn riêng
                </p>
                <p className="mt-3 font-display text-2xl leading-tight text-stone-950">
                  Một buổi hẹn tốt bắt đầu bằng việc hiểu bạn muốn mùi hương làm
                  gì cho mình.
                </p>
                <div className="mt-4 space-y-2 text-sm leading-6 text-stone-700">
                  <p>Gu cá nhân rõ hơn sau từng lượt thử trên da.</p>
                  <p>Chốt shortlist gọn, không mệt vì quá nhiều lựa chọn.</p>
                </div>
              </div>

              <div className="soft-panel absolute -bottom-10 left-6 flex max-w-sm items-center gap-4 rounded-[1.75rem] border border-white/70 p-4 shadow-[0_28px_70px_-36px_rgba(34,48,39,0.78)] sm:left-10">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[1.2rem]">
                  <Image
                    alt="Cận cảnh trải nghiệm cá nhân hóa tại muốn thơm."
                    className="h-full w-full object-cover"
                    fill
                    sizes="88px"
                    src={portraitImage}
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                    brand note
                  </p>
                  <p className="text-sm leading-6 text-stone-700">
                    muốn thơm không chạy theo cảm giác đông đúc. Cửa hàng chọn
                    sự vừa đủ, nói kỹ và giữ chất lượng cuộc hẹn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10" id="uy-tin">
          <SectionHeading
            description="Uy tín của một cửa hàng mùi hương không đến từ lời nói lớn, mà đến từ cách họ giúp khách đưa ra lựa chọn đúng. Vì vậy landing page này nhấn mạnh quy trình, sự minh bạch và cảm giác boutique có kiểm soát."
            kicker="Uy Tín Và Branding"
            title="muốn thơm khẳng định thương hiệu bằng trải nghiệm tư vấn có phương pháp."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {credibilityPillars.map((pillar) => (
              <article
                className="rounded-[2rem] border border-white/70 bg-[rgba(255,250,244,0.74)] p-7 shadow-[0_24px_50px_-38px_rgba(34,48,39,0.75)]"
                key={pillar.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">
                  credibility
                </p>
                <h3 className="mt-5 font-display text-3xl leading-tight text-stone-950">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-stone-700">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]" id="quy-trinh">
          <div className="space-y-6">
            <SectionHeading
              description="Buổi tư vấn được chia thành những bước rõ ràng để khách thấy an tâm ngay từ đầu. Từ brief đến shortlist, mọi thứ đều được thiết kế để rút ngắn sự phân vân nhưng không làm mất chiều sâu trải nghiệm."
              kicker="Quy Trình Hẹn Riêng"
              title="Một hành trình đủ chậm để cảm mùi, đủ gọn để ra quyết định."
            />
            <div className="glass-surface rounded-[2rem] border border-white/70 p-6 shadow-[0_24px_50px_-38px_rgba(34,48,39,0.72)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                phù hợp khi bạn
              </p>
              <div className="mt-5 space-y-4">
                {fitCases.map((item) => (
                  <div
                    className="flex items-start gap-3 rounded-2xl border border-stone-200/70 bg-white/70 px-4 py-4"
                    key={item}
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-700" />
                    <p className="text-sm leading-7 text-stone-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {consultationFlow.map((item) => (
              <article
                className="group rounded-[2rem] border border-white/70 bg-[rgba(255,250,244,0.76)] p-6 shadow-[0_22px_46px_-36px_rgba(34,48,39,0.72)] transition hover:-translate-y-0.5"
                key={item.step}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">
                      bước {item.step}
                    </p>
                    <h3 className="max-w-xl font-display text-3xl leading-tight text-stone-950">
                      {item.title}
                    </h3>
                  </div>
                  <div className="h-px w-full bg-stone-300/70 md:mt-6 md:h-16 md:w-px" />
                  <p className="max-w-xl text-base leading-8 text-stone-700">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10" id="khong-gian">
          <SectionHeading
            description="Bố cục hình ảnh ưu tiên sự ấm áp, yên tĩnh và thủ công. Đây là phần giúp khách cảm nhận chất boutique của thương hiệu trước cả khi bước vào buổi hẹn."
            kicker="Không Gian Và Hình Ảnh"
            title="Một landing page kể chuyện bằng ảnh thật, chất liệu ấm và nhịp thị giác nhẹ nhưng chắc."
          />

          <div className="grid auto-rows-[15rem] gap-4 md:grid-cols-3">
            {galleryImages.map((item) => (
              <div
                className={`group relative overflow-hidden rounded-[1.8rem] border border-white/70 shadow-[0_20px_48px_-34px_rgba(34,48,39,0.78)] ${item.className}`}
                key={item.alt}
              >
                <Image
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={item.image}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-5">
                  <p className="max-w-xs text-sm leading-6 text-white/92">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="grid gap-8 rounded-[2.4rem] border border-white/70 bg-[linear-gradient(135deg,rgba(34,48,39,0.98),rgba(70,82,66,0.94))] px-6 py-8 text-stone-50 shadow-[0_34px_80px_-40px_rgba(12,18,15,0.82)] md:px-10 md:py-10 lg:grid-cols-[0.95fr_1.05fr]"
          id="dat-lich"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-300">
                Đặt Lịch Ngay
              </p>
              <h2 className="max-w-2xl font-display text-4xl leading-tight md:text-5xl">
                Chốt một buổi tư vấn riêng để muốn thơm chọn đúng mùi, đúng
                nhịp sống và đúng mức đầu tư của bạn.
              </h2>
              <p className="max-w-xl text-base leading-8 text-stone-300">
                Form bên cạnh được tối ưu để khách để lại brief nhanh, sau đó
                cửa hàng chỉ cần xác nhận khung hẹn và chuẩn bị shortlist phù
                hợp trước buổi gặp.
              </p>
            </div>

            <div className="grid gap-4">
              {promiseList.map((item) => (
                <div
                  className="rounded-[1.6rem] border border-white/12 bg-white/8 px-5 py-4"
                  key={item}
                >
                  <p className="text-sm leading-7 text-stone-200">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/12 bg-white/8 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
                  boutique tone
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-200">
                  Ngôn ngữ thương hiệu đi theo cảm giác ấm, điềm tĩnh và đáng
                  tin thay vì tạo áp lực mua hàng.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/12 bg-white/8 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
                  mobile ready
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-200">
                  Toàn bộ block được dựng responsive để CTA, ảnh và form vẫn rõ
                  nhịp trên màn hình nhỏ.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[rgba(249,244,236,0.96)] p-5 text-stone-900 shadow-[0_32px_60px_-38px_rgba(0,0,0,0.75)] md:p-7">
            <div className="mb-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">
                booking brief
              </p>
              <h3 className="font-display text-3xl leading-tight">
                Gửi yêu cầu tư vấn trong chưa tới hai phút.
              </h3>
              <p className="text-sm leading-7 text-stone-600">
                Điền ngắn gọn nhu cầu và thời gian bạn mong muốn. Nội dung đặt
                lịch sẽ được tạo sẵn để quá trình xác nhận diễn ra nhanh hơn.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-stone-900/10 pt-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl text-stone-950">muốn thơm</p>
            <p className="mt-1 max-w-xl leading-7">
              Landing page tập trung vào đặt lịch hẹn riêng, xây cảm giác boutique
              đáng tin và tạo một điểm chạm thương hiệu đủ khác biệt.
            </p>
          </div>
          <a
            className="inline-flex items-center justify-center rounded-full border border-stone-900 px-5 py-3 font-semibold text-stone-900 transition hover:bg-stone-900 hover:text-stone-50"
            href="#dat-lich"
          >
            Quay lại form đặt lịch
          </a>
        </footer>
      </main>
    </div>
  );
}
