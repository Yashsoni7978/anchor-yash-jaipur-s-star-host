import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // --- NEW OPTIMIZATION SECTION START ---
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 1. Split React core (load this first)
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // 2. Split Animations (load this only when needed)
          animations: ['framer-motion'],
          // 3. Split UI Components (icons, buttons, etc)
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-slot', 'lucide-react', 'clsx', 'tailwind-merge']
        },
      },
    },
    // Increases the warning limit so the console is cleaner
    chunkSizeWarningLimit: 1000,
  },
  // --- NEW OPTIMIZATION SECTION END ---
}));
