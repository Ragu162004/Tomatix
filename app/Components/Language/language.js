import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                welcome: "welcomes",
                appFeatureText:"Your go-to platform for all things tomato! Discover an extensive range of tomato varieties with detailed care instructions, manage your fertilizer needs effortlessly, and access real-time insights to optimize your cultivation practices. Engage with our interactive tools to get personalized recommendations and stay updated with expert tips. Dive in now and transform your tomato farming experience with Tomatix!",
            },
        },
        ta: {
            translation: {
                welcome: "வணக்கம்",
                appFeatureText:"தக்காளி எல்லாவற்றுக்கும் நீங்கள் செல்லக்கூடிய தளம்! விரிவான பராமரிப்பு வழிமுறைகளுடன் விரிவான அளவிலான தக்காளி வகைகளைக் கண்டறியவும், உங்கள் உரத் தேவைகளை சிரமமின்றி நிர்வகிக்கவும் மற்றும் உங்கள் சாகுபடி நடைமுறைகளை மேம்படுத்த நிகழ்நேர நுண்ணறிவுகளை அணுகவும். தனிப்பயனாக்கப்பட்ட பரிந்துரைகளைப் பெற எங்கள் ஊடாடும் கருவிகளுடன் ஈடுபடவும் மற்றும் நிபுணர் உதவிக்குறிப்புகளுடன் புதுப்பித்த நிலையில் இருக்கவும். இப்போது முழுக்கு மற்றும் உங்கள் தக்காளி விவசாய அனுபவத்தை Tomatix உடன் மாற்றவும்!"
            }
        }
    },
    lng: "en", 
    fallbackLng: "en",  
    interpolation: {
        escapeValue: false, 
    }
});
