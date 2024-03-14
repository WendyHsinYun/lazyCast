import 'vuetify/styles';
import { createVuetify } from 'vuetify'

const customLightTheme = {
  dark: false,
  colors: {
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'customLightTheme',
      themes: {
        customLightTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
