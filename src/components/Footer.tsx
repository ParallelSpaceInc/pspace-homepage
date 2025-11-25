"use client";
import { Facebook, Youtube, Linkedin, MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-16 font-sans">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Info Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <h2 className="text-white text-xl font-bold tracking-tight">
              {t("footer.companyName")}
            </h2>
            <div className="flex flex-col gap-2 text-sm leading-relaxed">
              <p>{t("footer.registration")}</p>
              <p>{t("footer.ceo")}</p>
              <p>{t("footer.telecomReport")}</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-xs border-b border-gray-600 pb-0.5 hover:border-white">
                  {t("footer.terms")}
                </span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-xs border-b border-gray-600 pb-0.5 hover:border-white">
                  {t("footer.privacy")}
                </span>
              </a>
            </div>
          </div>

          {/* Address Column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div>
              <h3 className="text-white text-sm font-semibold mb-3">
                {t("footer.locationTitle")}
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li className="flex gap-3">
                  <span className="text-gray-500 min-w-[60px]">
                    {t("footer.hqLabel")}
                  </span>
                  <span>{t("footer.hqAddress")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-500 min-w-[60px]">
                    {t("footer.rndLabel")}
                  </span>
                  <span>{t("footer.rndAddress")}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Social Column */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <div>
              <h3 className="text-white text-sm font-semibold mb-3">
                {t("footer.contactTitle")}
              </h3>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <span className="text-gray-500 mr-2">
                    {t("footer.telLabel")}
                  </span>
                  02-6101-0909
                </li>
                <li>
                  <span className="text-gray-500 mr-2">
                    {t("footer.emailLabel")}
                  </span>
                  support@pspace.ai
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <div className="flex gap-4">
                <a
                  href="#"
                  className="size-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="size-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all"
                  aria-label="Naver Blog"
                >
                  <MessageCircle size={18} />
                </a>
                <a
                  href="#"
                  className="size-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all"
                  aria-label="Youtube"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
