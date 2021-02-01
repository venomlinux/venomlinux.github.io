<template>
  <Card style="margin-bottom: 1em; margin-top: 1em">
    <template #title> Team</template>
    <template #content>
      <div class="p-d-flex team-view">
        <div class="p-mr-2">
          <Card class="team team-card">
            <template #header>
              <img
                alt="user header"
                src="https://icotar.com/initials/Syazwan%20Emmett.png?s=400"
              />
            </template>
            <template #title>
              Syazwan Emmett | Emmett1 (Malaysia)
            </template>
            <template #subtitle>
              Lead Developer
            </template>
            <template #content>
              <p>Emmett1 is the lead developer from the VenomLinux project.</p>
            </template>
            <template #footer>
              <Button
                icon="pi pi-envelope"
                label=""
                @click="mail('emmett1.2miligrams@gmail.com')"
              />
              <Button
                icon="pi pi-github"
                label=""
                @click="github('emmett1')"
                class="p-button-secondary"
                style="margin-left: .5em"
              />
            </template>
          </Card>
        </div>
        <div class="p-mr-2">
          <Card class="team team-card">
            <template #header>
              <img
                alt="user header"
                src="https://www.gravatar.com/avatar/230048b8b5247c510b71a0e8b6ca9344?s=400&d=retro&r=g"
              />
            </template>
            <template #title>
              Malte Kiefer | beli3ver (Germany)
            </template>
            <template #subtitle>
              Package Maintainer
            </template>
            <template #content>
              <p>
                beli3ver is the main package maintainer and the server
                administrator.
              </p>
            </template>
            <template #footer>
              <Button
                icon="pi pi-envelope"
                label=""
                @click="mail('malte.kiefer@tuta.io')"
              />
              <Button
                icon="pi pi-github"
                label=""
                @click="github('maltekiefer')"
                class="p-button-secondary"
                style="margin-left: .5em"
              />
              <Button
                icon="pi pi-globe"
                label=""
                @click="open('https://malte-kiefer.de')"
                class="p-button-success"
                style="margin-left: .5em"
              />
            </template>
          </Card>
        </div>
        <div class="p-mr-2">
          <Card class="team team-card">
            <template #header>
              <img
                alt="user header"
                src="https://avatars.githubusercontent.com/u/47093017?s=400&u=a82d615befc113c35d90feb74abea40a00ffbe23&v=4"
              />
            </template>
            <template #title>
              Mohammad Tanio | Tan (Indonesia)
            </template>
            <template #subtitle>
              Web Designer
            </template>
            <template #content>
              <p>
                Tan is the web designer and is a part of the team since the
                beginning.
              </p>
            </template>
            <template #footer>
              <Button
                icon="pi pi-envelope"
                label=""
                @click="mail('tanmyid1337@gmail.com')"
              />
              <Button
                icon="pi pi-github"
                label=""
                @click="github('tanmyid')"
                class="p-button-secondary"
                style="margin-left: .5em"
              />
              <Button
                icon="pi pi-globe"
                label=""
                @click="open('http://tanmyid.github.io')"
                class="p-button-success"
                style="margin-left: .5em"
              />
            </template>
          </Card>
        </div>
        <div class="p-mr-2">
          <Card class="team team-card">
            <template #header>
              <img
                alt="user header"
                src="https://icotar.com/initials/Jens%20Thys.png?s=400"
              />
            </template>
            <template #title>
              Jens Thys | Jens (France)
            </template>
            <template #subtitle>
              Tester / Contributor
            </template>
            <template #content>
              <p>Jens is a contributor and a tester.</p>
            </template>
            <template #footer>
              <Button
                icon="pi pi-envelope"
                label=""
                @click="mail('jens.thys@gmail.com')"
              />
              <Button
                icon="pi pi-github"
                label=""
                @click="github('daemonbsd56')"
                class="p-button-secondary"
                style="margin-left: .5em"
              />
            </template>
          </Card>
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  methods: {
    github(user) {
      window.open("https://github.com/" + user, "_blank");
    },
    mail(mail) {
      window.open("mailto:" + mail);
    },
    open(link) {
      window.open(link, "_blank");
    }
  }
};
</script>
<style>
@media screen and (max-width: 1000px) {
  .team-view {
    display: block !important;
  }

  .team-card {
    min-width: 300px;
    max-width: 300px;
    margin-bottom: 0.5em;
  }
}

.team-card {
  min-width: 300px;
  max-width: 300px;
}

.team .p-card-footer {
  text-align: center;
}

.team .p-card-title {
  min-height: 60px !important;
}

.team .p-card-content {
  min-height: 130px !important;
}

.team .p-card-header img {
  width: 300px;
  max-width: 300px;
}
</style>
