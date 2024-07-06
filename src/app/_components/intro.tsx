import Link from "next/link";

export function Intro() {
  return (
    <section>
      <section className="mt-8 mb-2 md:mb-2">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
          <Link href="/" className="hover:underline">
            Metaphasic Labs
          </Link>
        </h1>
        <h4 className="mt-5">
          A Visual Project Log
        </h4>
      </section>
      <div className="flex justify-end">
        <a className="header-link" href="/about"> ABOUT </a>
        <a className="header-link" href="/contact"> CONTACT </a>
        <a className="header-link" href="https://github.com/reubenstr"> GIT </a>
      </div>
      <hr className="mb-6" />
    </section>
  );
}