import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//            target: 'https://localhost:3001',
//            changeOrigin: true,     
//            rewrite: (path) => path.replace(/^\/api/, '')
//        }
//   },
  // plugins: [react()]
// }})

export default defineConfig( {
  plugins: [react()],
})
