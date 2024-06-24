import Link from "next/link";

export function Intro() {
  return (
    <section>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
          <Link href="/" className="hover:underline">
            Metaphasic Labs
          </Link>
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          A Visual Project Log
        </h4>
      </section>
      <hr className="mb-8" /> </section>
  );
}
