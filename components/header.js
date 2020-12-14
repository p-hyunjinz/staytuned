import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const WIDTH = 200;
  const HEIGHT = (WIDTH * 185) / 828;

  return (
    <h2 className="mt-8">
      <Link href="/">
        <a className="hover:underline tracking-widest font-titleCustom text-2xl md:text-4xl font-bold leading-tight mb-10 mt-8">
          <Image
            src="/st_logo.png"
            alt="logo"
            layout="intrinsic"
            width={WIDTH}
            height={HEIGHT}
            objectPosition="left top"
          />
        </a>
      </Link>
    </h2>
  );
}
