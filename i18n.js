/**
 * Kinemo landing page internationalization (i18n).
 *
 * - Spanish is the default content written in the HTML.
 * - The selected language is stored in localStorage and restored on the next visit.
 * - On the first visit, English is used when the browser language is English.
 */
(function () {
    const STORAGE_KEY = 'kinemo-language';
    const SUPPORTED_LANGUAGES = ['es', 'en'];
    const DEFAULT_LANGUAGE = 'es';
    const translations = window.KINEMO_TRANSLATIONS || {};

    let currentLanguage = DEFAULT_LANGUAGE;

    const readStoredLanguage = () => {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (error) {
            return null;
        }
    };

    const storeLanguage = (language) => {
        try {
            localStorage.setItem(STORAGE_KEY, language);
        } catch (error) {
            // Storage can be unavailable (private mode); the language still changes for this visit.
        }
    };

    const detectLanguage = () => {
        const stored = readStoredLanguage();
        if (SUPPORTED_LANGUAGES.includes(stored)) return stored;
        const browserLanguage = (navigator.language || DEFAULT_LANGUAGE).toLowerCase();
        return browserLanguage.startsWith('en') ? 'en' : DEFAULT_LANGUAGE;
    };

    const translate = (key) => {
        const dictionary = translations[currentLanguage] || {};
        const fallback = translations[DEFAULT_LANGUAGE] || {};
        return dictionary[key] ?? fallback[key] ?? key;
    };

    const setMetaDescription = (text) => {
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', text);
    };

    const applyLanguage = (language) => {
        currentLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
        document.documentElement.lang = currentLanguage;

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            element.innerHTML = translate(element.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
            element.setAttribute('aria-label', translate(element.dataset.i18nAria));
        });

        const page = document.body.dataset.page || 'home';
        document.title = translate(`${page}.meta.title`);
        setMetaDescription(translate(`${page}.meta.description`));

        document.querySelectorAll('[data-lang]').forEach((button) => {
            button.setAttribute('aria-pressed', String(button.dataset.lang === currentLanguage));
        });

        storeLanguage(currentLanguage);
        document.dispatchEvent(new CustomEvent('kinemo:languagechange', { detail: { language: currentLanguage } }));
    };

    window.kinemoI18n = {
        t: translate,
        setLanguage: applyLanguage,
        get language() {
            return currentLanguage;
        }
    };

    document.querySelectorAll('[data-lang]').forEach((button) => {
        button.addEventListener('click', () => applyLanguage(button.dataset.lang));
    });

    applyLanguage(detectLanguage());
})();
