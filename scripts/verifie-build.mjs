// Vérifie que les clés EmailJS sont réellement dans le bundle exporté.
//
// Pourquoi : le site est un export statique. Les NEXT_PUBLIC_* sont écrites en
// dur dans le JS au build. Si le .env est absent (ou si une clé manque), le
// build réussit quand même, le formulaire s'affiche, et l'envoi échoue sans
// que personne ne s'en aperçoive. C'est arrivé une fois : tous les messages
// reçus ont été perdus.
//
// Lancé automatiquement après `next build` (script "build" de package.json).

import fs from "node:fs";
import path from "node:path";

const RACINE = process.cwd();
const CHUNKS = path.join(RACINE, "out", "_next", "static", "chunks");

function echouer(message) {
  console.error("\n✗ BUILD REFUSÉ — " + message + "\n");
  console.error("  Le formulaire de contact partirait muet. Corrige le .env");
  console.error("  (voir .env.example), puis relance : npm run build\n");
  process.exit(1);
}

function lireEnv() {
  const fichier = path.join(RACINE, ".env");
  if (!fs.existsSync(fichier)) {
    echouer("fichier .env absent à la racine du projet.");
  }
  const env = {};
  for (const ligne of fs.readFileSync(fichier, "utf8").split("\n")) {
    const brute = ligne.trim();
    if (!brute || brute.startsWith("#")) continue;
    const i = brute.indexOf("=");
    if (i === -1) continue;
    env[brute.slice(0, i).trim()] = brute
      .slice(i + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
  }
  return env;
}

const env = lireEnv();
const attendues = {
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: 12,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: 12,
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: 12,
};

for (const [cle, mini] of Object.entries(attendues)) {
  const valeur = env[cle];
  if (!valeur) echouer(`${cle} est vide ou absente du .env.`);
  if (valeur.length < mini) echouer(`${cle} a l'air tronquée (${valeur.length} caractères).`);
}

if (!fs.existsSync(CHUNKS)) {
  echouer("dossier out/_next/static/chunks introuvable — le build a-t-il bien exporté ?");
}

const fichiers = fs.readdirSync(CHUNKS).filter((f) => f.endsWith(".js"));
const manquantes = Object.keys(attendues).filter(
  (cle) => !fichiers.some((f) => fs.readFileSync(path.join(CHUNKS, f), "utf8").includes(env[cle]))
);

if (manquantes.length) {
  echouer(
    "ces valeurs ne sont pas dans le bundle exporté : " +
      manquantes.join(", ") +
      ". Le .env a probablement été ajouté après le build, ou le cache .next est périmé."
  );
}

console.log(`✓ Clés EmailJS présentes dans le bundle (${fichiers.length} chunks vérifiés).`);
