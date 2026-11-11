#!/bin/bash
# Copies the web app (repo root) into android-app/www for Capacitor.
set -e
cd "$(dirname "$0")"
rm -rf www && mkdir www
for f in index.html manifest.webmanifest favicon-32.png apple-touch-icon.png icon-192.png icon-512.png icon-maskable.png; do cp "../$f" www/; done
# The service worker is for the browser version only; inside the Android app files are already local.
sed -i '/serviceWorker.register/d' www/index.html || true
