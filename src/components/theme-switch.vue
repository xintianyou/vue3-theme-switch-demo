<template>
  <el-switch 
    v-model="theme"
    :active-action-icon="Moon"
    :inactive-action-icon="Sunny"
    active-color="#2f2f2f"
    active-value="dark"
    inactive-value="light"
  ></el-switch>
</template>

<script setup>
  import { Sunny, Moon } from '@element-plus/icons-vue'

  import useTheme from '../hooks/useTheme'

  const { theme } = useTheme()

  // 不需要这个方法，v-model已经双向绑定了
  const changeDark = (data) => {
    console.log('data', data)
    theme.value = data
  }
</script>

<style scoped>

</style>