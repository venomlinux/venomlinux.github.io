<template>
  <Card style="margin-bottom: 1em; margin-top: 1em">
    <template #title> Community</template>
    <template #content>
      <p>
        We can be reached on many different channels. If you have questions,
        want to exchange ideas or just want to get to know other Venom Linux
        users, visit our community on one of the following platforms
      </p>
      <Button
        type="button"
        label="Facebook"
        icon="pi pi-facebook"
        class="p-button-info donateBtn"
        style="margin-right: .5em"
        @click="open('https://www.facebook.com/groups/venomlinux')"
      />
      <Button
        type="button"
        label="Twitter"
        icon="pi pi-twitter"
        class="p-button-info donateBtn"
        style="margin-right: .5em"
        @click="open('https://twitter.com/venomlinux')"
      />
      <Button
        type="button"
        label="Telegram"
        icon="pi pi-comment"
        class="p-button-info donateBtn"
        style="margin-right: .5em"
        @click="open('https://t.me/venomlinux')"
      />
      <Button
        type="button"
        label="Mail"
        icon="pi pi-envelope"
        class="p-button-info donateBtn"
        style="margin-right: .5em"
        @click="open('mailto:root@venomlinux.org')"
      />
      <Button
        type="button"
        label="Github"
        icon="pi pi-github"
        class="p-button-info donateBtn"
        style="margin-right: .5em"
        @click="open('https://github.com/venomlinux')"
      />
      <Button
        type="button"
        label="IRC"
        icon="pi pi-comment"
        class="p-button-info donateBtn"
        style="margin-right: .5em"
        @click="open('irc://irc.freenode.net/#venomlinux')"
      />
      <Button
        type="button"
        label="Discord"
        icon="pi pi-discord"
        class="p-button-info donateBtn"
        style="margin-right: .5em"
        @click="open('https://discord.gg/6xrt3R6')"
      />
    </template>
  </Card>
</template>

<script>
export default {
  methods: {
    open(link) {
      window.open(link, "_blank");
    }
  }
};
</script>

<style>
.donateBtn {
  width: 19%;
  margin-bottom: 0.5em;
}

@media screen and (max-width: 800px) {
  .donateBtn {
    display: block;
    margin-left: 0 !important;
    margin-bottom: 0.5em;
    width: 100% !important;
  }
}
</style>
