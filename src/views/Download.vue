<template>
  <Card style="margin-bottom: 1em; margin-top: 1em">
    <template #title> Download</template>
    <template #content>
      <strong>Venom Linux</strong> can be obtained from various sources. Choose
      the source and variant that suits you.
      <br />
      Users can use the
      <code>scratch</code> command to keep their <strong>Venom Linux</strong> up
      to date, since <strong>Venom Linux</strong> is a rolling release.<br /><br />
      <Fieldset legend="Download">
        <Panel header="Venomlinux Server (Location: Germany)">
          <DataTable :value="download_server_germany">
            <Column field="version" header="Version">
              <template #body="slotProps">
                <strong>{{ slotProps.data.version }}</strong>
              </template>
            </Column>
            <Column field="download" header="Download">
              <template #body="slotProps">
                <Button
                  type="button"
                  label="Download"
                  icon="pi pi-download"
                  class="p-button-info down"
                  @click="open(slotProps.data.download)"
                />
              </template>
            </Column>
            <Column field="md5" header="Verify">
              <template #body="slotProps">
                <Button
                  type="button"
                  label="md5sum"
                  icon="pi pi-key"
                  class="p-button-secondary down"
                  @click="open(slotProps.data.md5)"
                />
              </template>
            </Column>
          </DataTable> </Panel
        ><br />
        <Panel header="OSDN">
          <DataTable :value="download_osdn">
            <Column field="version" header="Version">
              <template #body="slotProps">
                <strong>{{ slotProps.data.version }}</strong>
              </template>
            </Column>
            <Column field="download" header="Download">
              <template #body="slotProps">
                <Button
                  type="button"
                  label="Download"
                  icon="pi pi-download"
                  class="p-button-info down"
                  @click="open(slotProps.data.download)"
                />
              </template>
            </Column>
            <Column field="md5" header="Verify">
              <template #body="slotProps">
                <Button
                  type="button"
                  label="md5sum"
                  icon="pi pi-key"
                  class="p-button-secondary down"
                  @click="open(slotProps.data.md5)"
                />
              </template>
            </Column>
          </DataTable> </Panel
        ><br />
        <Panel header="Sourceforge">
          <DataTable :value="download_sourceforge">
            <Column field="version" header="Version">
              <template #body="slotProps">
                <strong>{{ slotProps.data.version }}</strong>
              </template>
            </Column>
            <Column field="download" header="Download">
              <template #body="slotProps">
                <Button
                  type="button"
                  label="Download"
                  icon="pi pi-download"
                  class="p-button-info down"
                  @click="open(slotProps.data.download)"
                />
              </template>
            </Column>
            <Column field="md5" header="Verify">
              <template #body="slotProps">
                <Button
                  type="button"
                  label="md5sum"
                  icon="pi pi-key"
                  class="p-button-secondary down"
                  @click="open(slotProps.data.md5)"
                />
              </template>
            </Column>
          </DataTable>
        </Panel> </Fieldset
      ><br />

      <Fieldset legend="Login">
        <Panel header="normal user">
          username: venom <br />
          password: venom <br /> </Panel
        ><br />
        <Panel header="privileged user">
          username: root <br />
          password: root <br />
        </Panel>
      </Fieldset>

      <Message severity="info" :closable="false"
        >To install <strong>Venom Linux</strong> run '<strong
          >sudo venom-installer</strong
        >' on terminal/tty</Message
      >
      <Message severity="info" :closable="false"
        >If you like <strong>Venom Linux</strong>, please
        <a
          href="http://distrowatch.org/dwres.php?waitingdistro=516&resource=links#new"
          >recommend us on DistroWatch</a
        >.</Message
      >
      <p>Thanks for using <strong>Venom Linux</strong>!</p>
    </template>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      download_server_germany: [
        {
          version: "Openbox ISO",
          download: "https://dl.venomlinux.org/venomlinux-20210312.iso",
          md5: "https://dl.venomlinux.org/venomlinux-20210312.iso.md5"
        },
        {
          version: "Base rootfs tarball",
          download: "https://dl.venomlinux.org/venomlinux-rootfs.tar.xz",
          md5: "https://dl.venomlinux.org/venomlinux-rootfs.tar.xz.md5"
        }
      ],
      download_osdn: [
        {
          version: "Openbox ISO",
          download: "https://osdn.net/dl/venomlinux/venomlinux-20210312.iso",
          md5: "https://osdn.net/dl/venomlinux/venomlinux-20210312.iso.md5"
        },
        {
          version: "Base rootfs tarball",
          download: "https://osdn.net/dl/venomlinux/venomlinux-rootfs.tar.xz",
          md5: "https://osdn.net/dl/venomlinux/venomlinux-rootfs.tar.xz.md5"
        }
      ],
      download_sourceforge: [
        {
          version: "Openbox ISO",
          download:
            "https://sourceforge.net/projects/venomlinux/files/202103/venomlinux-20210312.iso/download",
          md5:
            "https://sourceforge.net/projects/venomlinux/files/202103/venomlinux-20210312.iso/download"
        },
        {
          version: "Base rootfs tarball",
          download:
            "https://sourceforge.net/projects/venomlinux/files/202103/venomlinux-rootfs.tar.xz/download",
          md5:
            "https://sourceforge.net/projects/venomlinux/files/202103/venomlinux-rootfs.tar.xz.md5/download"
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
<style>
@media screen and (max-width: 800px) {
  .down .p-button-label {
    display: none !important;
  }

  .down .p-button-icon-left {
    margin-right: 0 !important;
  }
}
</style>
