<template>
  <el-switch 
    v-model="theme"
    :active-action-icon="Moon"
    :inactive-action-icon="Sunny"
    active-color="#2f2f2f"
    active-value="dark"
    inactive-value="light"
    @change="changeDark"
  ></el-switch>
</template>

<script setup>
  import { Sunny, Moon } from '@element-plus/icons-vue'

  import useTheme from '../hooks/useTheme'

  const { theme } = useTheme()

  const changeDark = (data) => {
    theme.value === data
  }
</script>

<style scoped>

</style>