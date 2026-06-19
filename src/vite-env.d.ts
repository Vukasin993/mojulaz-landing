/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SIGNUP_ENDPOINT?: string
  readonly VITE_APP_STORE_URL?: string
  readonly VITE_GOOGLE_PLAY_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'react-simple-maps'
