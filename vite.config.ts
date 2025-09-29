import replace from '@rollup/plugin-replace'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import vitePluginCssInjectedByJs from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: 'dist/types', // las definiciones se coloquen en dist/types
      insertTypesEntry: true, // Crea un archivo de entrada en dist/types/index.d.ts
      include: ['src/**/*'], // Incluir todos los archivos en src para generar definiciones
      exclude: ['**/*.spec.ts', '**/*.test.ts', '**/*.stories.ts'], // Excluir archivos de prueba y de historias
      rollupTypes: false, // Consolidar todas las definiciones en el archivo de entrada
      cleanVueFileName: false, // No limpiar nombres de archivos (útil si no se usa Vue)
      copyDtsFiles: false, // Copia los archivos .d.ts a la carpeta de salida,
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'import.meta.env.IS_DEV': JSON.stringify(process.env.IS_DEV),
      preventAssignment: true,
    }),
    vitePluginCssInjectedByJs(),
  ],
  resolve: {
    alias: {
      contexts: path.resolve(__dirname, 'src/contexts'),
      types: path.resolve(__dirname, 'src/types'),
      utils: path.resolve(__dirname, 'src/utils'),
      components: path.resolve(__dirname, 'src/components'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      enums: path.resolve(__dirname, 'src/enums'),
      styles: path.resolve(__dirname, 'src/styles'),
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'yourLibName',
      formats: ['es', 'cjs'],
      fileName: (format) => `yourLibName.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        // Put here all the dependencies that you don't want to bundle
        // in your library. Usually these are 'react' and 'react-dom'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          // Provide global variables to use in the UMD build
          // for externalized deps
          // e.g. react: 'React'
        },
      },
    },
    sourcemap: true,
    emptyOutDir: false,
  },
})
