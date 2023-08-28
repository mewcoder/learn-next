import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center`}>
      <Image
        className="mt-4"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <ul className="mt-4">
        <li className="underline">
          <Link href="/client">/client</Link>
        </li>
        <li className="underline">
          <Link href="/ssg">/ssg</Link>
        </li>
      </ul>
    </main>
  );
}
