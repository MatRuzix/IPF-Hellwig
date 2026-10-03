"use client";

import Dialog from "@mui/material/Dialog";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import BookingProfileCard from "./BookingProfileCard";

type RegistrationCardsProps = { isRegistrationOpen: boolean; onClose: () => void };

export default function RegistrationCards({ isRegistrationOpen, onClose }: RegistrationCardsProps) {
  return (
    <Dialog open={isRegistrationOpen} onClose={onClose} aria-labelledby="registration-title" maxWidth="md" fullWidth PaperProps={{ sx: { borderRadius: 3, margin: 2, width: "calc(100% - 32px)" } }}>
      <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-8">
        <h2 id="registration-title" className="text-xl font-semibold text-slate-800 sm:text-2xl">Umów wizytę</h2>
        <button type="button" aria-label="Zamknij rejestrację" onClick={onClose} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg hover:bg-slate-100"><CloseRoundedIcon /></button>
      </div>
      <div className="overflow-y-auto p-5 sm:p-8">
        <p className="mb-6 text-sm leading-6 text-slate-600">Wybierz fizjoterapeutę i sprawdź dostępne terminy w serwisie ZnanyLekarz.</p>
        <div className="grid min-w-0 gap-6 md:grid-cols-2">
          <BookingProfileCard variant="krystian" />
          <BookingProfileCard variant="marta" />
        </div>
      </div>
    </Dialog>
  );
}
