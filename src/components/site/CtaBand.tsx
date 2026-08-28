import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { business } from "@/content/site";

export function CtaBand({
  eyebrow = "Booking",
  title = "Book Your Look.",
  body = "Tell Natasha about your occasion and the look you have in mind. Every appointment begins with a conversation.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="grain bg-ink text-onink">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-6 font-display text-[2.2rem] leading-tight text-onink sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-onink-muted sm:text-base">
            {body}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-lux border-champagne bg-champagne text-ink">
              Book an Appointment
            </Link>
            <a href={business.phoneHref} className="btn-outline-lux text-onink">
              Call {business.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
