"use client";

import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HeaderLink from "./HeaderLink";
import { navigation, site } from "@/lib/site";

export default function HeaderDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" aria-label="Otwórz menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-slate-800 hover:bg-slate-200 lg:hidden">
        <MenuRoundedIcon />
      </button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <nav id="mobile-navigation" aria-label="Menu mobilne" className="flex w-72 max-w-[85vw] flex-col gap-2 p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-semibold text-slate-800">IPF Hellwig</span>
            <button type="button" aria-label="Zamknij menu" onClick={() => setOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-slate-100"><CloseRoundedIcon /></button>
          </div>
          {navigation.map((item) => <HeaderLink key={item.targetId} {...item} onClick={() => setOpen(false)} className="rounded-lg px-3 py-4 text-lg text-slate-800 hover:bg-slate-100" />)}
          <a href={site.phoneHref} className="button-primary mt-6">{site.phone}</a>
        </nav>
      </Drawer>
    </>
  );
}
