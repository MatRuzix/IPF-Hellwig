import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

const SecondaryHeader = () => {
  return (
    <div className="h-8 w-full bg-znanylekarz flex justify-around px-10 py-1 text-sm">
      <div>
        <LocalPhoneIcon /> +48 453 696 345
      </div>
      <div>
        <LocationOnIcon /> ul. Mickiewicza 31B, 82-200 Malbork
      </div>
      <div>
        <DriveFileRenameOutlineIcon /> Rejestracja : Pon & Czw 8:00-16:00, Wt &
        Pt 7:00-15:00, Śr 12:00-18:00
      </div>
    </div>
  );
};

export default SecondaryHeader;
