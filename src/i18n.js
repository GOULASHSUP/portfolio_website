import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import hu from "./locales/hu.json";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "hu",
  fallbackLocale: "en",
  messages: { en, hu },
});
