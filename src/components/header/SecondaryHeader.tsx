import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { site } from "@/lib/site";

export default function SecondaryHeader() {
  return (
    <div className="bg-slate-800 text-white">
      <div className="site-container flex h-8 items-center justify-between gap-3 text-xs">
        <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-teal-300"><LocalPhoneOutlinedIcon sx={{ fontSize: 15 }} />{site.phone}</a>
        <a href="#contact" className="inline-flex items-center gap-1 hover:text-teal-300">
          <LocationOnOutlinedIcon sx={{ fontSize: 15 }} /><span className="sm:hidden">Malbork</span><span className="hidden sm:inline">{site.address}</span>
        </a>
      </div>
    </div>
  );
}
