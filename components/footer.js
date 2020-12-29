import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Staytuned과 함께 의미 있는 소비를 주도하세요!
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://staytuned.kr/brand/sign-up"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              입점 시작하기
            </a>
            <a
              href="https://docs.google.com/forms/d/14B0AK8QgcjqoXTT-X4H22JCvmDznir7pjULUXQnpWfY/edit"
              className="mx-3 font-bold hover:underline"
            >
              입점 상담하기
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
