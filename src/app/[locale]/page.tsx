import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div className="container">
      <div className="first-cont">
        <div className="placeholder"></div>
        <div className="text-cont">
          <h1>
            Elevate Your Education with Student Savior – Your Path to Excellence
            Begins Here! ----
            {t("title")}
          </h1>{" "}
          <a href="#mod1">
            <button type="button">Start Now !</button>
          </a>
        </div>
      </div>
    </div>
  );
}
