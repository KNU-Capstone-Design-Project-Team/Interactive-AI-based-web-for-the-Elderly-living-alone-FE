import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // 네트워크에서 접근 가능하도록 설정
  },
  plugins: [react()],
  optimizeDeps: {
    include: ["@chakra-ui/react", "@emotion/react", "@emotion/styled", "framer-motion"],
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
