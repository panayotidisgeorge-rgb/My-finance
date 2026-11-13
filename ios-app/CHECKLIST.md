# SpendPattern iOS checklist (separate from Android)

Folder `ios-app/` + workflow `.github/workflows/ios.yml` only. Android (`android-app/`, `android.yml`) is untouched.

## Before the first signed build
1. Apple Developer membership approved (email from Apple).
2. App Store Connect: create app record, bundle ID `app.spendpattern.finance`, name SpendPattern.
3. Create API key (Users and Access > Integrations): add GitHub secrets APPSTORE_KEY_ID, APPSTORE_ISSUER_ID, APPSTORE_KEY_P8_B64 (base64 of .p8), APPLE_TEAM_ID.
4. Real 1024x1024 icon (no transparency) in ios-app/assets/icon-1024.png (current one is a placeholder).

## App Store Connect
- Subscription group with products (iOS needs one product ID per duration, e.g. spendpattern_monthly, spendpattern_annual), 4-day free trial intro offer.
- Privacy policy URL, support email infospendpattern@gmail.com, privacy nutrition answers.
- Screenshots: iPhone 6.9" and iPad 13".
- Review notes: explain the app works offline, data stays on device, paywall after trial.

## Changes needed in index.html (do later, triggers an Android build, so only with OK)
- SUB product IDs per platform; Apple wording instead of "Google Play" strings.
- Check purchase-state logic for StoreKit results.
- Add restore purchases button (Apple requires it).

## Known untested
- `cap add ios` could not be run in the sandbox (npm blocked); first test is the GitHub macOS run.
