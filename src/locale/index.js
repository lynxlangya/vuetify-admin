import Vue from 'vue';
import VueI18n from 'vue-i18n';

import enLocaleVuetify from 'vuetify/es5/locale/en';
import zhHansLocaleVuetify from 'vuetify/es5/locale/zh-Hans';
import jaLocaleVuetify from 'vuetify/es5/locale/ja';

import enLocale from './en';
import zhHansLocale from './zhHans';
import jaLocale from './ja';

Vue.use(VueI18n);

const messages = {
    en: {
        ...enLocale,
        $vuetify: enLocaleVuetify
    },
    zhHans: {
        ...zhHansLocale,
        $vuetify: zhHansLocaleVuetify
    },
    ja: {
        ...jaLocale,
        $vuetify: jaLocaleVuetify
    }
};

export const locales = [{
    title: 'English',
    locale: 'en',
    abbr: 'ENG'
},
{
    title: '简体中文',
    locale: 'zhHans',
    abbr: 'ZH'
},
{
    title: '日本語',
    locale: 'ja',
    abbr: 'JA'
}
];

const defaultLocale = locales[1];

const i18n = new VueI18n({
    locale: defaultLocale.locale,
    messages
});

export function changeLocale(newLocale) {
    return new Promise((resolve, reject) => {
        try {
            if (i18n.locale !== newLocale) {
                console.log(`Change locale to "${newLocale}"`);
                i18n.locale = newLocale || defaultLocale.locale;
            } else {
                console.warn(`"${newLocale}" is current locale `);
            }
            resolve(i18n.locale);
        } catch (e) {
            reject(e);
        }
    });
}

export default i18n;
