import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { business } from "@/content/site";

/** Thumb-friendly sticky booking bar for mobile visitors. */
export function MobileBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-onink/15 bg-ink/95 backdrop-blur-md sm:hidden">
      <div className="flex items-stretch gap-2 p-2">
        <a
          href={business.phoneHref}
          aria-label={`Call ${business.name} at ${business.phone}`}
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-onink/25 px-4 text-onink"
        >
          <Phone className="size-4" aria-hidden="true" />
        </a>
        <Link to="/contact" className="btn-lux flex-1 border-champagne bg-champagne text-ink">
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}
