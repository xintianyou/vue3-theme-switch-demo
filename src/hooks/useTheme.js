import { ref, watchEffect } from 'vue'

// 默认用亮色
const theme = ref(localStorage.getItem('theme') || 'light')

// 每次改变都设置一下
watchEffect(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
})

export default function useTheme() {
  return {
    theme
  }
}