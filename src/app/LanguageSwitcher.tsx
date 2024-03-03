import i18n from '../../i18n'; 
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {

  const changeLanguage = (lng:any) => {
    
    i18n.changeLanguage(lng);
  };


    return (
      <div>
        <select>
          <option value='en'  onClick={() => changeLanguage('en')}>English</option>
          <option value='fr' onClick={() => changeLanguage('fr')}>francais</option>
        </select>
      </div>
    );
  }