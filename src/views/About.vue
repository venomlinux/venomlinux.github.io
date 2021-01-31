<template>
  <Card style="margin-bottom: 1em; margin-top: 1em">
    <template #title> About</template>
    <template #content>
      Venom Linux is a source-based Linux® distribution originating from
      Malaysia that targets experienced users. This distro is inspired by CRUX
      because of its simplicity and its KISS philosophy. Venom Linux uses simple
      tar compressed packages, a ports system, runit init and a collection of
      small packages which are trimmed down by removed unnecessary things like
      locale, doc, gtk-doc, info pages (man pages are kept), etc. Venom Linux
      uses a custom package manager, which is fully written in POSIX shell
      script, for installing, upgrading and removing packages. Venom Linux
      features:
      <ul>
        <li>Package build script in the style of BSD's ports.</li>
        <li>BSD-style init.</li>
        <li>Easy to write ports.</li>
        <li>Multilib support.</li>
        <li>Slim packages, trimmed by removing anything unnecessary.</li>
      </ul>
      Thanks most of all to the small Venom Linux community that has helped us
      get here :D
    </template>
  </Card>
</template>

<script>
export default {};
</script>
