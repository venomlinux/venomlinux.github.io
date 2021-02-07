<template>
  <Card style="margin-bottom: 1em; margin-top: 1em">
    <template #title> Packages</template>
    <template #content>
      <p>Click on the filename to open the package contents at Github</p>
      <DataTable
        :value="packages"
        :paginator="true"
        class="p-datatable-sm"
        :rows="50"
        dataKey="name"
        :filters="filters"
        :loading="loading"
      >
        <Column field="repo" header="Repo">
          <template #body="slotProps">
            {{ slotProps.data.repo }}
          </template>
        </Column>
        <Column field="name" header="Name">
          <template #filter>
            <InputText
              type="text"
              v-model="filters['name']"
              class="p-column-filter"
              placeholder="Search"
            />
          </template>
          <template #body="slotProps" :class="name">
            <span
              class="package_link"
              @click="goToHomepage(slotProps.data.homepage)"
              v-tooltip.bottom="slotProps.data.homepage"
              >{{ slotProps.data.name }}</span
            >
          </template>
        </Column>
        <Column field="version" header="Version">
          <template #body="slotProps" :class="name">
            <span
              class="package_link"
              @click="goToPackage(slotProps.data.repo, slotProps.data.name)"
              v-tooltip.bottom="'Open package port'"
              >{{ slotProps.data.version }}</span
            >
          </template>
        </Column>
        <Column header="Action">
          <template #body="slotProps">
            <i
              class="pi pi-clock p-mr-2 pi-spin"
              @click="markOutdated(slotProps.data.name)"
              v-tooltip.bottom="'Mark package as outdated'"
            ></i>
            <i
              class="pi pi-exclamation-circle"
              @click="markBroken(slotProps.data.name)"
              v-tooltip.bottom="'Mark package as broken'"
            ></i>
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      filters: {},
      loading: true,
      packages: {}
    };
  },
  methods: {
    loadPackages() {
      axios
        .get(
          "https://raw.githubusercontent.com/venomlinux/ports/master/scripts/packages.json"
        )
        .then(
          function(response) {
            console.log(response.data);
            this.packages = response.data.sort((t1, t2) =>
              t1.name < t2.name ? -1 : 1
            );
            this.loading = false;
          }.bind(this)
        );
    },
    goToPackage(repo, pack) {
      window.open(
        "https://github.com/venomlinux/ports/tree/master/" + repo + "/" + pack,
        "_blank"
      );
    },
    goToHomepage(homepage) {
      window.open(homepage, "_blank");
    },
    markOutdated(pack) {
      window.open(
        "https://github.com/venomlinux/ports/issues/new?title=Package:%20" +
          pack +
          "%20|%20Flag:%20outdated&body=The%20Package%20%2A%2A" +
          pack +
          "%2A%2A%20is%20outdated!%20%0A%0A@MalteKiefer%20@emmett1",
        "_blank"
      );
    },
    markBroken(pack) {
      window.open(
        "https://github.com/venomlinux/ports/issues/new?title=Package:%20" +
          pack +
          "%20|%20Flag:%20broken&body=The%20package%20%2A%2A" +
          pack +
          "%2A%2A%20is%20broken%21%0A%0A---------------------------------------%0A%2A%2APlease%20provide%20your%20building%20logs%21%2A%2A%0A%0A---------------------------------------%0A%0A%40MalteKiefer%20%40emmett1",
        "_blank"
      );
    }
  },
  created: function() {
    this.loadPackages();
  }
};
</script>
<style>
table {
  font-size: 14px !important;
}

.p-inputtext {
  padding: 0.2rem 0.2rem;
  font-size: 14px;
}
.p-datatable-thead > tr > th {
  text-align: center !important;
}

.p-datatable-tbody > tr > td {
  text-align: center !important;
}

.p-datatable-tbody tr td:nth-child(2) {
  border-left: 1px solid #363636 !important;
  border-right: 1px solid #363636 !important;
}

.p-datatable-tbody tr td:nth-child(3) {
  border-right: 1px solid #363636 !important;
}

.package_link {
  cursor: pointer;
}

.package_link:hover {
  cursor: pointer;
  color: #000;
  font-weight: 600;
}
</style>
