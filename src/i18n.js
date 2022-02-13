import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import  en_UK from './locale/en_UK.json';
import  en_US from './locale/en_US.json';


export default i18n.use(initReactI18next).init({
    resources: {
        en_UK: {translation: en_UK}
        ,
        en_US:{translation: en_US}
        
    },
    lng: 'en_US',
    fallbackLng: 'en_UK',
    interpolation: {
        escapeValue: false,
        
    }
})