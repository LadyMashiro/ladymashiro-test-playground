<template>
  <div class="about">
    <Terminal title="Hello.. I am your bunny terminal."/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Terminal from '@/components/Terminal.vue'

  export default {
    name: 'about',
    components: {
      Terminal
    }
  }
</script>
