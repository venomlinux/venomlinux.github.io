import { createApp } from "vue";
import PrimeVue from "primevue/config";

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import ToastService from "primevue/toastservice";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Panel from "primevue/panel";
import Menubar from "primevue/menubar";
import Card from "primevue/card";
import Toast from "primevue/toast";
import Knob from "primevue/knob";
import Divider from "primevue/divider";
import Message from "primevue/message";
import Fieldset from "primevue/fieldset";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const app = createApp(App);

app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("Panel", Panel);
app.component("Menubar", Menubar);
app.component("Card", Card);
app.component("Toast", Toast);
app.component("Knob", Knob);
app.component("Divider", Divider);
app.component("Message", Message);
app.component("Fieldset", Fieldset);
app.component("DataTable", DataTable);
app.component("Column", Column);

app.use(store);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.mount("#app");
