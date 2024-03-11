import i18n from "../../i18n";
import "./LanguageSwitcher.css";
export default function LanguageSwitcher() {
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lang-switch">
      <span
        id="en"
        className="lang-flag"
        onClick={() => changeLanguage("en")}
      ></span>
      <span
        id="fr"
        className="lang-flag"
        onClick={() => changeLanguage("fr")}
      ></span>
    </div>
  );
}
