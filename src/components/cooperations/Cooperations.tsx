import CoopLink from "./CoopLink";

export default function Cooperations() {
  return (
    <section id="cooperations" className="border-t border-slate-200 bg-white py-12 sm:py-16">
      <div className="site-container">
        <h2 className="section-heading text-center text-slate-800">Nasze współprace</h2>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 items-center gap-6 sm:mt-10 sm:gap-12">
          <CoopLink href="https://www.facebook.com/p/MAL-WOPR-Malbork-100054522967739/?locale=pl_PL" imgSrc="/wopr.png" height={1779} width={3487} maxWidth={240} name="MAL WOPR Malbork" />
          <CoopLink href="http://www.pomezania.pl" imgSrc="/Logo_Pomezania_Malbork.png" height={150} width={150} name="Pomezania Malbork" />
        </div>
      </div>
    </section>
  );
}
