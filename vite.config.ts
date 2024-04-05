import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx, defineManifest } from '@crxjs/vite-plugin';

const IMAGE_DIR = 'src/assets/images';
const SCRIPT_DIR = 'src/scripts';

const manifest = defineManifest({
  manifest_version: 3,
  name: 'ぱすはにツール',
  short_name: 'ぱすはに',
  description: '',
  version: '1.0',
  icons: {
    '16': `${IMAGE_DIR}/icon-16.jpg`,
    '32': `${IMAGE_DIR}/icon-32.jpg`,
    '48': `${IMAGE_DIR}/icon-48.jpg`,
    '128': `${IMAGE_DIR}/icon-128.jpg`,
  },
  content_scripts: [
    {
      js: [`${SCRIPT_DIR}/content.ts`],
      matches: ['http://*/*', 'https://*/*'],
    },
  ],
  action: {
    default_popup: 'src/popup.html',
    default_icon: `${IMAGE_DIR}/icon-48.jpg`,
    default_title: 'ぱすはに',
  },
  // background: {
  //   service_worker: 'src/scripts/background.ts',
  // },
});

export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
