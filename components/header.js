import Link from "next/link";

export default function Header() {
  return (
    <h2 className="tracking-widest font-titleCustom text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline tracking-widest font-titleCustom text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">staytuned</a>
      </Link>
      .
    </h2>
  );
}
