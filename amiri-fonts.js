// amiri-fonts.js

// Coller ici le Base64 des fichiers .ttf générés
const amiriRegularBase64 = "PASTE_TON_BASE64_ICI..."; 
const amiriBoldBase64 = "PASTE_TON_BASE64_ICI...";

// Ajout des polices à pdfMake
pdfMake.vfs = pdfMake.vfs || {};
pdfMake.vfs["Amiri-Regular.ttf"] = amiriRegularBase64;
pdfMake.vfs["Amiri-Bold.ttf"] = amiriBoldBase64;

pdfMake.fonts = {
  Amiri: {
    normal: "Amiri-Regular.ttf",
    bold: "Amiri-Bold.ttf"
  }
};

