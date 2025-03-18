import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

const SecondaryHeader = () => {
  return (
    <div className="w-full bg-chillGreen flex flex-wrap justify-around px-10 py-1 text-sm hamburger:text-xs max-h-7">
      <div>
        <LocalPhoneIcon /> <a href={`tel:+48 453 696 345`}>+48 453 696 345</a>
      </div>
      <div>
        <LocationOnIcon /> ul. Mickiewicza 31B, 82-200 Malbork
      </div>
      <div className="mobile:hidden mobile-xs:hidden">
        <DriveFileRenameOutlineIcon /> Rejestracja : Pon & Czw 8:00-16:00, Wt &
        Pt 7:00-15:00, Śr 12:00-18:00
      </div>
    </div>
  );
};

export default SecondaryHeader;
