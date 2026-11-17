#!/bin/bash
# Copies the web app (repo root) into ios-app/www for Capacitor.
set -e
cd "$(dirname "$0")"
rm -rf www && mkdir www
for f in index.html manifest.webmanifest favicon-32.png apple-touch-icon.png icon-192.png icon-512.png icon-maskable.png; do cp "../$f" www/; done
# The service worker is for the browser version only; inside the app files are already local.
sed -i.bak '/serviceWorker.register/d' www/index.html && rm -f www/index.html.bak
