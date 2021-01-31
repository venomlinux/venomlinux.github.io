<template>
  <Card style="margin-bottom: 1em; margin-top: 1em">
    <template #title> Venom Linux </template>
    <template #content>
      <div style="text-align: center;">
        <img
          src="../assets/screen1.png"
          alt="screen"
          style="width: 100%;max-width: 680px; border-radius: 5px;"
        />
      </div>
      <p>
        Venom Linux is a lightweight source-based Linux® distribution for the
        x86-64 architecture and targeted experienced users. This distro is built
        from scratch independently then grown to make it suitable for daily use.
        This distro is inspired by CRUX because of its simplicity and KISS
        philosophy.
      </p>
      <p>
        <strong>Venom Linux</strong> uses BSD-style init as main init and a
        BSD-like ports system for packages. Packages are managed by its own
        package manager, called scratchpkg, that has dependency checking and is
        fully written in POSIX sh.
      </p>
    </template>
  </Card>
</template>

<script>
export default {};
</script>
