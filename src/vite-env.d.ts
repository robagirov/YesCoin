/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_LOCAL_USER_ID: number
  readonly VITE_BOT_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
