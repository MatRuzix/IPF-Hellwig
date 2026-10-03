import { bookingProfiles, navigation, site } from "@/lib/site";
import RzetelnaFirmaWidget from "./RzetelnaFirmaWidget";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-800 text-slate-200">
      <div className="site-container py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-12">
          <section>
            <h2 className="mb-5 text-2xl font-semibold text-white">Kontakt</h2>
            <p className="mb-4 text-lg font-semibold text-white">{site.name}</p>
            <address className="space-y-4 text-sm not-italic leading-7">
              <p>{site.address}</p>
              <p><a href={site.phoneHref} className="text-lg font-semibold text-teal-300 hover:text-teal-200">{site.phone}</a></p>
              <p><a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-teal-300">Wyznacz trasę do gabinetu</a></p>
            </address>
          </section>
          <section>
            <h3 className="mb-5 text-lg font-semibold text-white">Godziny rejestracji</h3>
            <dl className="space-y-3 text-sm leading-6">
              <div className="flex justify-between gap-4"><dt>Poniedziałek, czwartek</dt><dd className="whitespace-nowrap">08:00–16:00</dd></div>
              <div className="flex justify-between gap-4"><dt>Wtorek, piątek</dt><dd className="whitespace-nowrap">07:00–15:00</dd></div>
              <div className="flex justify-between gap-4"><dt>Środa</dt><dd className="whitespace-nowrap">12:00–18:00</dd></div>
            </dl>
            <h3 className="mb-3 mt-7 text-lg font-semibold text-white">Rejestracja online</h3>
            <ul className="space-y-2 text-sm leading-6">
              {Object.values(bookingProfiles).map((profile) => <li key={profile.url}><a href={profile.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-teal-300">{profile.name} — umów wizytę</a></li>)}
            </ul>
          </section>
          <section>
            <h3 className="mb-5 text-lg font-semibold text-white">Rzetelna Firma</h3>
            <RzetelnaFirmaWidget />
            <a href="https://wizytowka.rzetelnafirma.pl/DRUBV8BP/widget" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm underline underline-offset-4 hover:text-teal-300">Sprawdź certyfikat</a>
          </section>
        </div>
        <div className="mt-10 flex flex-col gap-5 border-t border-slate-600 pt-6 text-xs leading-6 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IPF Hellwig</p>
          <nav aria-label="Menu w stopce">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {navigation.map((item) => <li key={item.targetId}><a href={"#" + item.targetId} className="hover:text-teal-300">{item.text}</a></li>)}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
