//const currentLanguage = "fr";

const generalTranslations = {
  commentsLabel: {
    fr: "Commentaires :",
    en: "Comments:",
    ar: "تعليقات:",
    es: "Comentarios:",
    de: "Kommentare:",
    it: "Commenti:"
  },
  noComment: {
    fr: "Aucun commentaire",
    en: "No comment",
    ar: "لا يوجد تعليق",
    es: "Sin comentario",
    de: "Kein Kommentar",
    it: "Nessun commento"
  },
  placeholder: {
    fr: "Laissez vos commentaires ici...",
    en: "Leave your comments here...",
    ar: "اترك تعليقاتك هنا...",
    es: "Deja tus comentarios aquí...",
    de: "Hinterlassen Sie hier Ihre Kommentare...",
    it: "Lascia qui i tuoi commenti..."
  },
  choice: {
    fr: "Choix",
    en: "Choice",
    ar: "اختيار",
    es: "Elección",
    de: "Auswahl",
    it: "Scelta"
  },
  currencyLabel: {
  fr: "Dirhams",
  en: "Dirhams",
  ar: "درهم",
  es: "Dirhams",
  de: "Dirhams",
  it: "Dirham"
},
  superficy: {
      fr: "m²",
      en: "sqm",
      ar: "متر مربع",
      es: "m²",
      de: "m²",
      it: "m²"
    },
};

const properties = [
  {
    keys: {
      fr: "Villa",
      en: "Villa",
      ar: "فيلا",
      es: "Villa",
      de: "Villa",
      it: "Villa"
    },
    photo: "https://exemple.com/villa-photo.jpg",
    video: "https://exemple.com/villa-video.mp4",
    titles: {
      fr: "Belle Villa moderne",
      en: "Beautiful Modern Villa",
      ar: "فيلا جميلة وحديثة",
      es: "Hermosa villa moderna",
      de: "Schöne moderne Villa",
      it: "Bella villa moderna"
    },
    descriptions: {
      fr: "Grande villa avec piscine et jardin.",
      en: "Large villa with pool and garden.",
      ar: "فيلا كبيرة مع مسبح وحديقة.",
      es: "Amplia villa con piscina y jardín.",
      de: "Große Villa mit Pool und Garten.",
      it: "Grande villa con piscina e giardino."
    },
    areas: {
      fr: "350",
      en: "350",
      ar: "350",
      es: "350",
      de: "350",
      it: "350"
    },
    prices: {
      fr: "3 000 000,00",
      en: "3,000,000,00",
      ar: "3,000,000,00",
      es: "3.000.000,00",
      de: "3.000.000,00",
      it: "3.000.000,00"
    }
  },
  {
    keys: {
      fr: "Garage",
      en: "Garage",
      ar: "كراج",
      es: "Garaje",
      de: "Garage",
      it: "Garage"
    },
    photo: "https://exemple.com/garage-photo.jpg",
    video: "https://exemple.com/garage-video.mp4",
    titles: {
      fr: "Garage sécurisé",
      en: "Secure Garage",
      ar: "كراج آمن",
      es: "Garaje seguro",
      de: "Sichere Garage",
      it: "Garage sicuro"
    },
    descriptions: {
      fr: "Garage spacieux avec système de sécurité.",
      en: "Spacious garage with security system.",
      ar: "كراج واسع مع نظام أمني.",
      es: "Garaje espacioso con sistema de seguridad.",
      de: "Geräumige Garage mit Sicherheitssystem.",
      it: "Garage spazioso con sistema di sicurezza."
    },
    areas: {
      fr: "350",
      en: "350",
      ar: "350",
      es: "350",
      de: "350",
      it: "350"
    },
    prices: {
       fr: "3 000 000,00",
      en: "3,000,000,00",
      ar: "3,000,000,00",
      es: "3.000.000,00",
      de: "3.000.000,00",
      it: "3.000.000,00"
    }
  },
  {
    keys: {
      fr: "Terrain1",
      en: "Land",
      ar: "أرض",
      es: "Terreno",
      de: "Grundstück",
      it: "Terreno"
    },
    photo: "https://exemple.com/terrain1-photo.jpg",
    video: "https://exemple.com/terrain1-video.mp4",
    titles: {
      fr: "Terrain agricole fertile",
      en: "Fertile Agricultural Land",
      ar: "أرض زراعية خصبة",
      es: "Terreno agrícola fértil",
      de: "Fruchtbares Ackerland",
      it: "Terreno agricolo fertile"
    },
    descriptions: {
      fr: "Terrain idéal pour la culture, bien irrigué.",
      en: "Ideal land for farming, well irrigated.",
      ar: "أرض مثالية للزراعة، مزودة بالري الجيد.",
      es: "Terreno ideal para cultivo, bien irrigado.",
      de: "Ideal für Landwirtschaft, gut bewässert.",
      it: "Terreno ideale per l'agricoltura, ben irrigato."
    },
    areas: {
      fr: "350",
      en: "350",
      ar: "350",
      es: "350",
      de: "350",
      it: "350"
    },
    prices: {
       fr: "3 000 000,00",
      en: "3,000,000,00",
      ar: "3,000,000,00",
      es: "3.000.000,00",
      de: "3.000.000,00",
      it: "3.000.000,00"
    }
  },
  {
    keys: {
      fr: "Terrain2",
      en: "Land2",
      ar: "2 أرض ",
      es: "Terreno2",
      de: "Grundstück2",
      it: "Terreno2"
    },

    photo: "https://exemple.com/terrain2-photo.jpg",
    video: "https://exemple.com/terrain2-video.mp4",
    titles: {
      fr: "Terrain constructible",
      en: "Buildable Land",
      ar: "أرض قابلة للبناء",
      es: "Terreno urbanizable",
      de: "Bebaubarer Land",
      it: "Terreno edificabile"
    },
    descriptions: {
      fr: "Terrain plat prêt pour construction résidentielle.",
      en: "Flat land ready for residential building.",
      ar: "أرض مستوية جاهزة للبناء السكني.",
      es: "Terreno plano listo para construcción residencial.",
      de: "Flaches Land bereit für Wohnbebauung.",
      it: "Terreno pianeggiante pronto per costruzione residenziale."
    },
    areas: {
      fr: "350",
      en: "350",
      ar: "350",
      es: "350",
      de: "350",
      it: "350"
    },
    prices: {
      fr: "3 000 000,00",
      en: "3,000,000,00",
      ar: "3,000,000,00",
      es: "3.000.000,00",
      de: "3.000.000,00",
      it: "3.000.000,00"
    }
  },
  {
    keys: {
      fr: "Terrain3",
      en: "Land3",
      ar: "3 أرض ",
      es: "Terreno3",
      de: "Grundstück3",
      it: "Terreno3"
    },

    photo: "https://exemple.com/terrain3-photo.jpg",
    video: "https://exemple.com/terrain3-video.mp4",
    titles: {
      fr: "Terrain commercial",
      en: "Commercial Land",
      ar: "أرض تجارية",
      es: "Terreno comercial",
      de: "Gewerbegrundstück",
      it: "Terreno commerciale"
    },
    descriptions: {
      fr: "Terrain situé en zone commerciale dynamique.",
      en: "Land located in a dynamic commercial area.",
      ar: "أرض تقع في منطقة تجارية نشطة.",
      es: "Terreno ubicado en una zona comercial dinámica.",
      de: "Grundstück in dynamischem Gewerbegebiet gelegen.",
      it: "Terreno situato in una zona commerciale dinamica."
    },
    areas: {
      fr: "350",
      en: "350",
      ar: "350",
      es: "350",
      de: "350",
      it: "350"
    },
    prices: {
      fr: "3 000 000,00",
      en: "3,000,000,00",
      ar: "3,000,000,00",
      es: "3.000.000,00",
      de: "3.000.000,00",
      it: "3.000.000,00"
    }
  }
];

let currentLanguage = "fr";

const translations = {
  fr: {
    selectLanguage: "Choisissez votre langue :",
    welcome: "Bienvenue !",
    username: "Nom d'utilisateur :",
    phone: "Numéro de téléphone :",
    continue: "Continuer",
    back: "Retour au menu des langues",
    propertyTitle: "Nos biens disponibles :",
    save: "Enregistrer en PDF",
    tableHeaders: [
      "N°",
      "Bien",
      //   "Titre",
      //    "Description",
      "Superficie",
      "Prix",
      //    "Photo",
      //   "Vidéo",
      "Valider",
      "Proposition",
      "Annuler"
    ],
    validate: "Valider",
    propose: "Proposer",
    cancel: "Annuler",
    noDesire: "Bien non désiré",
    fillAll: "Veuillez remplir tous les champs.",
    invalidPhone: "Numéro de téléphone invalide.",
    invalidPrice: "Prix invalide.",
    actionRequired: "Veuillez sélectionner une action pour chaque bien.",
    pdfSaved: "PDF enregistré sous le nom :",
    purchaseProcedureTitle: "Procédure d'achat :",
    purchaseProcedure:
"01. Vérifiez les biens et les choix dans le tableau.\n" +
"02. Contactez notre service commercial au numéro indiqué.\n" +
"03. Un conseiller vous accompagnera pour finaliser la transaction.\n" +
"04. Vous recevrez une confirmation par email avec les détails.\n" +
"05. Vous recevrez une confirmation par email avec les détails.\n" +
"06. Vous recevrez une confirmation par email avec les détails.\n" +      
"07. Vous recevrez une confirmation par email avec les détails.\n" +      
"08. Vous recevrez une confirmation par email avec les détails.\n" +      
"09. Vous recevrez une confirmation par email avec les détails.\n" +      
 "10. Vous recevrez une confirmation par email avec les détails.\n" +     
 "11. Monaie : en Dirhams Marocain (DH).\n" +      
 "12. Vous recevrez une confirmation par email avec les détails.\n" +      
 "13. Envoyer votre proposition par email/whatsup.\n" +
      "", +
      " 🤝 Merci de votre confiance 🤝",
    summaryTitle: "Résumé des choix",
    nameLabel: "Nom :",
    phoneLabel: "Téléphone :",
    dateLabel: "Date de saisie :",
    photoText: "Photo",
    videoText: "Vidéo"
  },
  en: {
    selectLanguage: "Choose your language:",
    welcome: "Welcome!",
    username: "Username:",
    phone: "Phone number:",
    continue: "Continue",
    back: "Back to language menu",
    propertyTitle: "Available properties:",
    save: "Save as PDF",
    tableHeaders: [
      "No.",
      "Property",
      //   "Title",
      //   "Description",
      "Area",
      "Price",
      //   "Photo",
      //   "Video",
      "Validate",
      "Proposal",
      "Cancel"
    ],
    validate: "Validate",
    propose: "Propose",
    cancel: "Cancel",
    noDesire: "Not interested",
    fillAll: "Please fill all fields.",
    invalidPhone: "Invalid phone number.",
    invalidPrice: "Invalid price.",
    actionRequired: "Please select an action for each property.",
    pdfSaved: "PDF saved as:",
    purchaseProcedureTitle: "Purchase procedure:",
    purchaseProcedure:
      "1. Check the properties and selections in the table.\n" +
      "2. Contact our sales department at the indicated number.\n" +
      "3. A consultant will assist you in finalizing the transaction.\n" +
      "4. You will receive a confirmation email with details.\n" +
      "Thank you for your trust.",
    summaryTitle: "Summary of selections",
    nameLabel: "Name:",
    phoneLabel: "Phone:",
    dateLabel: "Entry date:",
    photoText: "Photo",
    videoText: "Video"
  },
ar: {
    selectLanguage: "اختر لغتك:",
    welcome: "مرحبا!",
    username: "اسم المستخدم:",
    phone: "رقم الهاتف:",
    continue: "استمرار",
    back: "العودة إلى قائمة اللغات",
    propertyTitle: "العقارات المتاحة:",
    save: "حفظ كملف PDF",
    tableHeaders: [
      "رقم",
      "العقار",
      // "العنوان",
      // "الوصف",
      "المساحة",
      "السعر",
      // "صورة",
      // "فيديو",
      "تأكيد",
      "اقتراح",
      "إلغاء"
    ],
    validate: "تأكيد",
    propose: "اقتراح",
    cancel: "إلغاء",
    noDesire: "غير مهتم",
    fillAll: "يرجى ملء جميع الحقول.",
    invalidPhone: "رقم الهاتف غير صالح.",
    invalidPrice: "سعر غير صالح.",
    actionRequired: "يرجى اختيار إجراء لكل عقار.",
    pdfSaved: "تم حفظ ملف PDF باسم :",
    purchaseProcedureTitle: "إجراءات الشراء :",

    purchaseProcedure: [
          ".1 تحقق من العقارات والاختيارات في الجدول.",
          ".2 اتصل بقسم المبيعات على الرقم المذكور.",
          ".3 سيقوم المستشار بمساعدتك لإتمام المعاملة.",
          ".4 ستتلقى رسالة تأكيد عبر البريد الإلكتروني.",
          ".5 أرسل عرضك عبر البريد الإلكتروني أو الواتساب.",
          "شكراً لثقتك."
        ],
  
    summaryTitle: "ملخص الاختيارات",
    nameLabel: "الاسم :",
    phoneLabel: "الهاتف :",
    dateLabel: "تاريخ الإدخال :",
    photoText: "صورة",
    videoText: "فيديو"
  },
  es: {
    selectLanguage: "Elija su idioma:",
    welcome: "¡Bienvenido!",
    username: "Nombre de usuario:",
    phone: "Número de teléfono:",
    continue: "Continuar",
    back: "Volver al menú de idiomas",
    propertyTitle: "Propiedades disponibles:",
    save: "Guardar como PDF",
    tableHeaders: [
      "N°",
      "Propiedad",
      //    "Título",
      //     "Descripción",
      "Superficie",
      "Precio",
      //      "Foto",
      //     "Vídeo",
      "Validar",
      "Propuesta",
      "Cancelar"
    ],
    validate: "Validar",
    propose: "Proponer",
    cancel: "Cancelar",
    noDesire: "No interesado",
    fillAll: "Por favor, complete todos los campos.",
    invalidPhone: "Número de teléfono inválido.",
    invalidPrice: "Precio inválido.",
    actionRequired: "Por favor, seleccione una acción para cada propiedad.",
    pdfSaved: "PDF guardado como:",
    purchaseProcedureTitle: "Procedimiento de compra:",
    purchaseProcedure:
      "1. Verifique las propiedades y selecciones en la tabla.\n" +
      "2. Contacte a nuestro departamento de ventas al número indicado.\n" +
      "3. Un asesor le ayudará a finalizar la transacción.\n" +
      "4. Recibirá un correo electrónico de confirmación con los detalles.\n" +
      "Gracias por su confianza.",
    summaryTitle: "Resumen de selecciones",
    nameLabel: "Nombre:",
    phoneLabel: "Teléfono:",
    dateLabel: "Fecha de ingreso:",
    photoText: "Foto",
    videoText: "Vídeo"
  },
  de: {
    selectLanguage: "Wählen Sie Ihre Sprache:",
    welcome: "Willkommen!",
    username: "Benutzername:",
    phone: "Telefonnummer:",
    continue: "Weiter",
    back: "Zurück zum Sprachmenü",
    propertyTitle: "Verfügbare Immobilien:",
    save: "Als PDF speichern",
    tableHeaders: [
      "Nr.",
      "Immobilie",
      //    "Titel",
      //     "Beschreibung",
      "Fläche",
      "Preis",
      //     "Foto",
      //     "Video",
      "Bestätigen",
      "Vorschlag",
      "Stornieren"
    ],
    validate: "Bestätigen",
    propose: "Vorschlagen",
    cancel: "Stornieren",
    noDesire: "Nicht interessiert",
    fillAll: "Bitte alle Felder ausfüllen.",
    invalidPhone: "Ungültige Telefonnummer.",
    invalidPrice: "Ungültiger Preis.",
    actionRequired: "Bitte wählen Sie eine Aktion für jede Immobilie aus.",
    pdfSaved: "PDF gespeichert als:",
    purchaseProcedureTitle: "Kaufverfahren:",
    purchaseProcedure:
      "1. Überprüfen Sie die Immobilien und Auswahlen in der Tabelle.\n" +
      "2. Kontaktieren Sie unsere Verkaufsabteilung unter der angegebenen Nummer.\n" +
      "3. Ein Berater unterstützt Sie bei der Finalisierung der Transaktion.\n" +
      "4. Sie erhalten eine Bestätigungs-E-Mail mit Details.\n" +
      "Vielen Dank für Ihr Vertrauen.",

    summaryTitle: "Zusammenfassung der Auswahl",
    nameLabel: "Name:",
    phoneLabel: "Telefon:",
    dateLabel: "Eingabedatum:",

    photoText: "Foto",
    videoText: "Video"
  },
  it: {
    selectLanguage: "Scegli la tua lingua:",
    welcome: "Benvenuto!",
    username: "Nome utente:",
    phone: "Numero di telefono:",
    continue: "Continua",
    back: "Torna al menu lingue",
    propertyTitle: "Immobili disponibili:",
    save: "Salva come PDF",
    tableHeaders: [
      "N°",
      "Immobile",
      //  "Titolo",
      //    "Descrizione",
      "Superficie",
      "Prezzo",
      //    "Foto",
      //    "Video",
      "Conferma",
      "Proposta",
      "Annulla"
    ],
    validate: "Conferma",
    propose: "Proponi",
    cancel: "Annulla",
    noDesire: "Non interessato",
    fillAll: "Per favore compila tutti i campi.",
    invalidPhone: "Numero di telefono non valido.",
    invalidPrice: "Prezzo non valido.",
    actionRequired: "Seleziona un'azione per ogni immobile.",
    pdfSaved: "PDF salvato come:",
    purchaseProcedureTitle: "Procedura di acquisto:",
    purchaseProcedure:
      "1. Controlla le proprietà e le scelte nella tabella.\n" +
      "2. Contatta il nostro servizio commerciale al numero indicato.\n" +
      "3. Un consulente ti accompagnerà per finalizzare la transazione.\n" +
      "4. Riceverai una conferma via email con i dettagli.\n" +
      "Grazie per la tua fiducia.",
    summaryTitle: "Riepilogo delle scelte",
    nameLabel: "Nome:",
    phoneLabel: "Telefono:",
    dateLabel: "Data di inserimento:",
    photoText: "Foto",
    videoText: "Video"
  }
};
