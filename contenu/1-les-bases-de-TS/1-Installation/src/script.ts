// ======================
// PREMIER FICHIER TYPESCRIPT
// ======================

// Déclaration d'une variable typée explicitement
let str: string = "poule";

// Affichage dans la console
console.log(str);

// ======================
// COMPILATION TYPESCRIPT
// ======================

// TypeScript ne s’exécute PAS directement dans le navigateur ou Node
// Il doit d’abord être compilé en JavaScript

// 👉 Commande pour compiler un fichier précis :
// tsc script.ts
// → génère un fichier script.js

// ======================
// FICHIER DE CONFIGURATION
// ======================

// Commande pour créer un fichier tsconfig.json :
// tsc --init
//
// Ce fichier permet de :
// - configurer la compilation
// - définir la version de JavaScript cible
// - activer des règles plus strictes

// ======================
// MODE WATCH
// ======================

// Commande pour surveiller les changements :
// tsc -w
//
// TypeScript recompile automatiquement
// dès qu’un fichier .ts est modifié
// → plus besoin de compiler à la main

// ======================
// FONCTIONS
// ======================

// Fonction simple
// Le type de retour est inféré : string
function foo() {
  return "test";
}
