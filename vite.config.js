import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/kordy-portfolio/', // تأكد من أن القيمة تطابق اسم المستودع
  plugins: [react()],
})
