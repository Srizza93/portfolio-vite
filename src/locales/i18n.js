import { createI18n } from "vue-i18n";
import messages from "./messages.js";
export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "fr",
  globalInjection: true,
  messages,
});
