#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

module.exports = function (context) {
  const rootdir = context.opts.projectRoot;
  const platformDir = path.join(rootdir, 'platforms', 'android', 'app');
  const srcFile = path.join(rootdir, 'resources', 'google-services.json');
  const destFile = path.join(platformDir, 'google-services.json');

  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
    console.log('✔ google-services.json copied to platforms/android/app');
  } else {
    console.warn('⚠ google-services.json not found in /resources');
  }
};
