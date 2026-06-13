import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.egosim.app',
  appName: 'EGO Sim',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;