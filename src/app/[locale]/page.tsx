import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("");
  const locale = useLocale();

  return (
    <div className="container">
      <div className="first-cont">
        <div className="placeholder"></div>
        <div className="text-cont">
          <h1>
            Elevate Your Education with Student Savior – Your Path to Excellence
            Begins Here! ----
            {t("Hello world!")}
          </h1>{" "}
          <Link href="/mods/youtubesummarizer" lang={locale}>
            <button type="button">{t("Start Now !")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
