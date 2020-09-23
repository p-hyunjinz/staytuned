import Link from "next/link";

export default function Header() {
  return (
    <h2>
      <Link href="/">
        <a className="hover:underline tracking-widest font-titleCustom text-2xl md:text-4xl font-bold leading-tight mb-20 mt-20">staytuned</a>
      </Link>
      .
    </h2>
  );
}
