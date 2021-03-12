<template>
  <Card style="margin-bottom: 1em; margin-top: 1em">
    <template #title> Donate</template>
    <template #content>
      <p>
        A lot of work and free time goes into Venom Linux.<br />
        We would therefore be pleased if you would like to finance us by making
        a small donation.
      </p>
      <p>Thanks!</p>
    </template>

    <template #footer>
      <Fieldset legend="Emmett1 (Lead Developer)">
        <Button
          icon="pi pi-paypal"
          label="PayPal"
          @click="open('https://paypal.me/syazwanemmett')"
          class="donateBtn"
        />
        <Button
          icon="pi pi-credit-card"
          label="Liberapay"
          class="p-button-warning donateBtn"
          style="margin-left: 0.5em"
          @click="open('https://liberapay.com/emmett1')"
        />
        <Button
          icon="pi pi-dollar"
          label="BuyMeACoffee"
          class="p-button-secondary donateBtn"
          style="margin-left: 0.5em"
          @click="open('https://buymeacoffee.com/venomlinux')"
        /> </Fieldset
      ><br />
      <Fieldset legend="Malte (Port Maintainer)">
        <Button
          icon="pi pi-paypal"
          label="PayPal"
          @click="open('https://paypal.me/maltekiefer')"
          class="donateBtn"
        />
        <Button
          icon="pi pi-credit-card"
          label="Liberapay"
          class="p-button-warning donateBtn"
          style="margin-left: 0.5em"
          @click="open('https://liberapay.com/beli3ver')"
        />
      </Fieldset>
    </template>
  </Card>
  <Toast />
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
  width: 20%;
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
