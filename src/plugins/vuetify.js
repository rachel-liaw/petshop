import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#4EC690',
            light: '#EDF5F1',
            dark: '#2DB479',
            info: '#1976D2',
            mainInfo: "#2196F3",
            success:'#4CAF50',
          },
        },
      },
});
