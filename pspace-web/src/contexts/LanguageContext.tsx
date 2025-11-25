"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { translations } from "../data/translations";

type Language = "ko" | "en";
type Translations = typeof translations.ko;

// Helper type to access nested properties
type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}.${NestedKeyOf<ObjectType[Key]>}` | `${Key}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ko");

  const t = (key: string): any => {
    const keys = key.split(".");
    let current: any = translations[language];

    for (const k of keys) {
      if (current === undefined || current[k] === undefined) {
        console.warn(`Translation key missing: ${key}`);
        return key;
      }
      current = current[k];
    }

    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
