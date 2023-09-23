<template>
  <main>
    <p>主题切换demo</p>
    <ThemeSwitch></ThemeSwitch>
    <p>当前主题：{{theme}}</p>
  </main>
</template>

<script setup>
  import ThemeSwitch from './components/theme-switch.vue'
  import useTheme from './hooks/useTheme'

  const { theme } = useTheme()
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--bg);
  color: var(--text-color);
}
p {
  margin: 20px 0;
}
</style>
