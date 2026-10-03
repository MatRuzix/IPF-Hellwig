import Image from "next/image";
import { bookingProfiles } from "@/lib/site";

type BookingProfileCardProps = { variant: keyof typeof bookingProfiles };

export default function BookingProfileCard({ variant }: BookingProfileCardProps) {
  const profile = bookingProfiles[variant];
  return (
    <section className="min-w-0 rounded-xl border border-slate-200 p-5">
      <div className="mb-5 flex items-center gap-4">
        <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100">
          <Image src={variant === "krystian" ? "/krystian_transp_back.png" : "/marta_transp_back.png"} alt={profile.name} fill sizes="80px" className="object-contain object-bottom" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{profile.name}</h3>
          <p className="mt-1 text-sm text-slate-600">Fizjoterapeuta</p>
        </div>
      </div>
      <a href={profile.url} target="_blank" rel="noopener noreferrer" className="button-primary w-full" aria-label={"Sprawdź terminy — " + profile.name + " w ZnanyLekarz (nowa karta)"}>Sprawdź terminy</a>
    </section>
  );
}
