import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const numberFormats = {
  en: {
    currency: {
      style: "currency",
      currency: "USD",
    },
  },
  es: {
    currency: {
      style: "currency",
      currency: "COP",
    },
  },
  de: {
    currency: {
      style: "currency",
      currency: "EUR",
    },
  },
  nb: {
    currency: {
      style: "currency",
      currency: "NOK",
    },
  },
};

const setDateTimeFormats = {
  short: {
    year: "numeric",
    month: "short",
    day: "numeric",
  },
  long: {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  },
};

const dateTimeFormats = {
  en: setDateTimeFormats,
  "en-GB": setDateTimeFormats,
  es: setDateTimeFormats,
  de: setDateTimeFormats,
  eo: setDateTimeFormats,
  nb: setDateTimeFormats,
};

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
  dateTimeFormats: dateTimeFormats,
  numberFormats: numberFormats,
});
