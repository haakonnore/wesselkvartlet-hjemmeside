# Wesselkvartalet Hjemmeside

Dette er nettsiden for Wesselkvartalet i Asker – et moderne byutviklingsprosjekt der arkitektur, bærekraft og innovasjon møtes.

## Utvikling med Antigravity

Dette prosjektet utvikles nå med **Antigravity**, en kraftfull AI-drevet kodeassistent. Arbeidsflyten baserer seg på lokal utvikling, versjonskontroll med GitHub, og deployment til Cloudflare Pages.

### Slik kommer du i gang

For å arbeide med prosjektet lokalt trenger du Node.js og npm installert.

1.  **Klone repoet**:
    ```sh
    git clone https://github.com/haakonnore/wesselkvartlet-hjemmeside.git
    cd wesselkvartlet-hjemmeside
    ```

2.  **Installere avhengigheter**:
    ```sh
    npm install
    ```

3.  **Starte utviklingsserver**:
    ```sh
    npm run dev
    ```
    Dette starter Vite-serveren med auto-reloading og forhåndsvisning.

## Teknologier

Prosjektet er bygget med:
- **Vite** (Build tool)
- **TypeScript** (Programmeringsspråk)
- **React** (UI-bibliotek)
- **shadcn-ui** (Komponenter)
- **Tailwind CSS** (Styling)

## Deployment

Vi bruker **Cloudflare Pages** for hosting. Deployment gjøres med **Wrangler** (Cloudflare CLI).

### Manuelt deployment

For å bygge og deploye endringer manuelt fra din lokale maskin:

1.  **Bygg prosjektet**:
    ```sh
    npm run build
    ```

2.  **Deploy til Cloudflare**:
    ```sh
    npx wrangler pages deploy dist --project-name wesselkvartlet-hjemmeside
    ```

### Automatisk deployment

Når endringer pushes til `main`-branchen på GitHub, vil Cloudflare Pages automatisk bygge og deploye den nyeste versjonen til [wesselkvartalet.no](https://wesselkvartalet.no/).

## Bidra til prosjektet

Alle endringer skal gjøres via Pull Requests eller direkte commits til `main` (for mindre endringer). Bruk gjerne Antigravity for å planlegge og utføre endringer i kodebasen.
