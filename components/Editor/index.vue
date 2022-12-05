<script setup>
const imports = [import('@editorjs/editorjs'), import('@editorjs/header')]

onBeforeMount(async () => {
  const dynamicImports = await Promise.all(imports)
  const [EditorJS, Header] = dynamicImports.map((lib) => lib.default)

  const editor = new EditorJS({
    holder: 'editorjs',
    // autofocus: true,
    placeholder: 'Placeholder',
    tools: {
      header: {
        class: Header,
      },
    },
  })
})
</script>

<template>
  <div id="editorjs"></div>
</template>

<style lang="postcss" scoped>
#editorjs {
  width: 100%;
}
</style>
