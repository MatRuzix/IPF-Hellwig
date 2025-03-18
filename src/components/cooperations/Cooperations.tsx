import CoopLink from "./CoopLink";

const Cooperations = () => {
  return (
    <div
      className="flex flex-col items-center text-6xl mobile-xs:text-3xl w-full h-[calc(100vh-144px)] bg-gradient-to-b from-slate-100 to-chillGreenHover pb-2 px-10 overflow-hidden space-y-20"
      id="cooperations"
    >
      <div className="mt-10 z-40">Nasze współprace</div>
      <div className="flex w-full h-full justify-center space-x-[20%]">
        <CoopLink
          href="https://www.facebook.com/p/MAL-WOPR-Malbork-100054522967739/?locale=pl_PL"
          imgSrc="/wopr.png"
          height={120}
          width={240}
        />
        <CoopLink
          href="http://www.pomezania.pl"
          imgSrc="/Logo_Pomezania_Malbork.png"
          height={150}
          width={150}
        />
      </div>
    </div>
  );
};

export default Cooperations;
