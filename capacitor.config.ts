import { CapacitorConfig } from '@capacitor/cli';

const server = process.argv.includes('-hmr') ? {
  'url': 'http://192.168.153.1:5173',   // always have http:// in url
  'cleartext': true
} : {};

if (process.argv.includes('-hmr')) console.log('WARNING: running capacitor with livereload server config', server);

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'my-skeleton-app',
  webDir: 'build',
  bundledWebRuntime: false,
  server
};

export default config;
