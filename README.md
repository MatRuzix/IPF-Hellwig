# IPF Hellwig

Strona gabinetu fizjoterapii i rehabilitacji IPF Hellwig w Malborku.
Docelowa domena: https://www.ipf-hellwig.com/.

## Środowisko

- Next.js 16.3.8, App Router i React 19.3.0.
- Node.js 24.x (określony w package.json i .nvmrc).
- pnpm 9.15.9 (określony w packageManager).

## Uruchomienie

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Podgląd: http://localhost:3000/. Główna strona znajduje się w src/app/page.tsx.
Projekt używa fontu Poppins ładowanego przez next/font/google.

## Sprawdzenie i kompilacja

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

Turbopack jest domyślnym kompilatorem w Next.js 16. Skrypt build uruchamia
ESLint przed kompilacją, ponieważ sam next build nie sprawdza już reguł ESLint.
Kompilacja sprawdza również typy TypeScript.

## Vercel

Katalog główny projektu musi wskazywać folder zawierający ten package.json.
Vercel odczytuje Node.js 24.x z engines.node. Polecenie kompilacji: pnpm build.
Pozostaw instalację jako automatyczną, aby Vercel wykrył menedżer z pliku zależności.
Aby użyć dokładnie pnpm 9.15.9 z packageManager, włącz Corepack na Vercel przez
zmienną ENABLE_EXPERIMENTAL_COREPACK=1. Sam override „pnpm install” może wybrać
starszą wersję pnpm, więc bez Corepack nie ustawiaj takiego override.
pnpm-lock.yaml jest podstawowym plikiem zależności; package-lock.json pozostaje
aktualny dla instalacji przez npm.

## Google Fonts na Windows

Jeżeli lokalna kompilacja zgłasza problem połączenia z Google Fonts, uruchom
poniższe polecenia w PowerShell. Turbopack użyje wtedy certyfikatów zaufanych
przez system Windows, zachowując weryfikację TLS:

```powershell
$env:NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS = "1"
pnpm build
```

Ta zmienna działa w bieżącej sesji terminala, także dla pnpm dev.
Nie jest wymagana przez samą migrację na Vercel.
