interface ImportMetaEnv {
  readonly VITE_ACCESS_KEY: string;
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
