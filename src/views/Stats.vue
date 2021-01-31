<template>
  <Card style="margin-bottom: 1em; margin-top: 1em">
    <template #title> Stats</template>
    <template #content>
      <div style="text-align: center;"><h3>Infos</h3></div>
      <div class="p-grid p-formgrid p-text-center">
        <div class="p-field p-col-12 p-md-4">
          <h5>Stars</h5>
          <Knob v-model="stars" :max="100" valueColor="#363636" />
        </div>
        <div class="p-field p-col-12 p-md-4">
          <h5>Forks</h5>
          <Knob v-model="forks" :max="100" valueColor="#363636" />
        </div>
        <div class="p-field p-col-12 p-md-4">
          <h5>Issues</h5>
          <Knob v-model="issues" :max="100" valueColor="#363636" />
        </div>
      </div>
      <Divider />
      <div style="text-align: center;"><h3>Packages</h3></div>
      <div class="p-grid p-formgrid p-text-center">
        <div class="p-field p-col-12 p-md-3">
          <h5>Core</h5>
          <Knob v-model="core" :max="5000" valueColor="#363636" />
        </div>
        <div class="p-field p-col-12 p-md-3">
          <h5>Nonfree</h5>
          <Knob v-model="nonfree" :max="5000" valueColor="#363636" />
        </div>
        <div class="p-field p-col-12 p-md-3">
          <h5>Multilib</h5>
          <Knob v-model="multilib" :max="5000" valueColor="#363636" />
        </div>
        <div class="p-field p-col-12 p-md-3">
          <h5>Testing</h5>
          <Knob v-model="testing" :max="5000" valueColor="#363636" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      stars: 0,
      forks: 0,
      issues: 0,
      core: 0,
      nonfree: 0,
      testing: 0,
      multilib: 0
    };
  },
  methods: {
    loadStats() {
      axios.get("https://api.github.com/repos/venomlinux/ports").then(
        function(response) {
          this.stars = parseInt(response.data.stargazers_count);
          this.forks = parseInt(response.data.forks);
          this.issues = parseInt(response.data.open_issues);
        }.bind(this)
      );

      axios
        .get("https://api.github.com/repos/venomlinux/ports/contents/nonfree")
        .then(
          function(response) {
            this.nonfree = parseInt(response.data.length) - parseInt(3);
          }.bind(this)
        );

      axios
        .get("https://api.github.com/repos/venomlinux/ports/contents/core")
        .then(
          function(response) {
            this.core = parseInt(response.data.length) - parseInt(3);
          }.bind(this)
        );

      axios
        .get("https://api.github.com/repos/venomlinux/ports/contents/multilib")
        .then(
          function(response) {
            this.multilib = parseInt(response.data.length) - parseInt(3);
          }.bind(this)
        );

      axios
        .get("https://api.github.com/repos/venomlinux/ports/contents/testing")
        .then(
          function(response) {
            this.testing = parseInt(response.data.length) - parseInt(3);
          }.bind(this)
        );
    }
  },
  created: function() {
    this.loadStats();
  }
};
</script>
