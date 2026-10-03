import clsx from "clsx";
import { site } from "@/lib/site";

export default function DirectionsButton({ className }: { className?: string }) {
  return (
    <a
      href={site.directionsUrl}
      aria-label="Wyznacz trasę do IPF Hellwig w Google Maps"
      className={clsx("button-directions whitespace-nowrap", className)}
    >
      Wyznacz trasę
    </a>
  );
}
