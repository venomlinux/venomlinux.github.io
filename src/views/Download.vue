<template>
  <Card style="margin-bottom: 1em; margin-top: 1em">
    <template #title> Download</template>
    <template #content>
      <strong>Venom Linux</strong> can be obtained from various sources. Choose
      the source and variant that suits you.
      <br />
      <strong>Venom Linux</strong> users can use the
      <code>scratch</code> command to keep their <strong>Venom Linux</strong> up
      to date, since <strong>Venom Linux</strong> is a rolling release.<br /><br />
      <Fieldset legend="Download">
        <Panel header="Venom">
          <DataTable :value="download_own">
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
            <Column field="sha512" header="SHA512">
              <template #body="slotProps">
                <Button
                  type="button"
                  label="sha512sum"
                  icon="pi pi-key"
                  class="p-button-secondary down"
                  v-if="slotProps.data.sha512"
                  @click="open(slotProps.data.sha512)"
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
            <Column field="md5" header="MD5">
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
      download_own: [
        {
          version: "A complete xfce4 desktop (ISO)",
          download: "https://files.venomlinux.org/venomlinux.iso",
          md5: "https://files.venomlinux.org/venomlinux.md5",
          sha512: "https://files.venomlinux.org/venomlinux.sha512"
        },
        {
          version: "A minimal base system (ISO)",
          download: "https://files.venomlinux.org/venomlinux-base.iso",
          md5: "https://files.venomlinux.org/venomlinux-base.md5",
          sha512: "https://files.venomlinux.org/venomlinux-base.sha512"
        },
        {
          version: "A tarball of the rootfs (tar.xz)",
          download: "https://files.venomlinux.org/venomlinux-rootfs.tar.xz",
          md5: "https://files.venomlinux.org/venomlinux-rootfs.md5",
          sha512: "https://files.venomlinux.org/venomlinux-rootfs.sha512"
        }
      ],
      download_osdn: [
        {
          version: "A complete xfce4 desktop (ISO)",
          download: "https://osdn.net/dl/venomlinux/venomlinux-20201116.iso",
          md5: "https://osdn.net/dl/venomlinux/venomlinux-20201116.iso.md5"
        },
        {
          version: "A minimal base system (ISO)",
          download:
            "https://osdn.net/dl/venomlinux/venomlinux-base-20201124.iso",
          md5: "https://osdn.net/dl/venomlinux/venomlinux-base-20201124.iso.md5"
        },
        {
          version: "A tarball of the rootfs (tar.xz)",
          download: "https://osdn.net/dl/venomlinux/venomlinux-rootfs.tar.xz",
          md5: "https://osdn.net/dl/venomlinux/venomlinux-rootfs.tar.xz.md5"
        }
      ],
      download_sourceforge: [
        {
          version: "A complete xfce4 desktop (ISO)",
          download:
            "https://sourceforge.net/projects/venomlinux/files/202011/venomlinux-base-20201124.iso/download",
          md5:
            "https://sourceforge.net/projects/venomlinux/files/202011/venomlinux-base-20201124.iso/download"
        },
        {
          version: "A minimal base system (ISO)",
          download:
            "https://sourceforge.net/projects/venomlinux/files/202011/venomlinux-base-20201124.iso/download",
          md5:
            "https://sourceforge.net/projects/venomlinux/files/202011/venomlinux-base-20201124.iso/download"
        },
        {
          version: "A tarball of the rootfs (tar.xz)",
          download:
            "https://sourceforge.net/projects/venomlinux/files/202011/venomlinux-rootfs.tar.xz/download",
          md5:
            "https://sourceforge.net/projects/venomlinux/files/202011/venomlinux-rootfs.tar.xz.md5/download"
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
