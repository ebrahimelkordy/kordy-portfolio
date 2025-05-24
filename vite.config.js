import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  base: '/kordy-portfolio/',
  plugins: [react()],
   resolve: {
    extensions: ['.js', '.jsx'], 
}});