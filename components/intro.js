export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Staytuned.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <div style={{ textAlign: "right" }}>
          Staytuned 블로그에 오신 것을 환영합니다!{" "}
          <a
            href="https://staytuned.kr/"
            className="underline hover:text-success duration-200 transition-colors"
          >
            <div>몰 이동하기</div>
          </a>
        </div>
      </h4>
    </section>
  );
}
