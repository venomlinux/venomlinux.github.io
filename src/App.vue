<template>
  <div id="app">
    <div class="p-grid vertical-container">
      <div class="p-col p-as-center">
        <Menubar :model="items">
          <template #start>
            <img
              alt="logo"
              src="https://raw.githubusercontent.com/venomlinux/venomlinux.github.io/master/assets/ico/venom-logo.jpg"
              height="40"
              class="p-mr-2"
            />
          </template>
        </Menubar>
        <router-view />
        <Menubar class="footer">
          <template #start>
            &copy; by Venom Linux
          </template>
          <template #end>
            <Button
              type="button"
              icon="pi pi-github"
              class="p-button-secondary"
              @click="open('https://github.com/venomlinux')"
              style="margin-right: .5em; background-color: #363636;"
            />
            <Button
              type="button"
              icon="pi pi-facebook"
              class="p-button-secondary"
              style="margin-right: .5em; background-color: #363636;"
              @click="open('https://www.facebook.com/groups/venomlinux')"
            />
            <Button
              type="button"
              icon="pi pi-twitter"
              class="p-button-secondary"
              style="margin-right: .5em; background-color: #363636;"
              @click="open('https://twitter.com/venomlinux')"
            />
          </template>
        </Menubar>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

body {
  font-family: "Lato", sans-serif;
  margin-left: 15%;
  margin-right: 15%;
  background-color: #363636;
}

.p-component {
  font-family: "Lato" !important;
}

.p-menubar {
  background-color: #ffffff;
  border-color: #929292;
}

.footer .p-menubar-button {
  display: none !important;
}

@media screen and (max-width: 800px) {
  body {
    margin-left: 1%;
    margin-right: 1%;
  }
}

#app {
  top: 0;
  justify-content: center;
  align-items: center;
}
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Start",
          icon: "pi pi-home",
          to: "/"
        },
        {
          label: "About",
          icon: "pi pi-info-circle",
          to: "/about"
        },
        {
          label: "Download",
          icon: "pi pi-download",
          to: "/download"
        },
        {
          label: "Stats",
          icon: "pi pi-star",
          to: "/stats"
        },
        {
          label: "Donate",
          icon: "pi pi-wallet",
          to: "/donate"
        },
        {
          label: "Wiki",
          icon: "pi pi-book",
          url: "https://github.com/venomlinux/ports/wiki"
        },
        {
          label: "Community",
          icon: "pi pi-comment",
          to: "/community"
        },
        {
          label: "Team",
          icon: "pi pi-users",
          to: "/team"
        }
      ]
    };
  },
  methods: {
    open(link) {
      window.open(link, "_blank");
    }
  }
};
</script>
