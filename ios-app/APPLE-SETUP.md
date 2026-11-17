# Apple setup for SpendPattern (iPhone + iPad)

Bundle ID: `app.spendpattern.finance` · Subscription products: `spendpattern_premium_monthly` (CHF 1.90) and `spendpattern_premium_annual` (CHF 19.90).

## 1. Collect three values (about 10 minutes)
1. **Team ID**: developer.apple.com → Account → Membership details → *Team ID* (10 characters).
2. **API key**: appstoreconnect.apple.com → Users and Access → Integrations → *App Store Connect API* → Team Keys → "+". Name `GitHub build`, access **Admin** (needed to create certificates automatically). Download the `.p8` file (possible only once). Note the **Key ID** and the **Issuer ID** (shown at the top of the page).
3. Make a base64 copy of the `.p8` (Mac Terminal: `base64 -i AuthKey_XXXX.p8 | pbcopy`; Windows PowerShell: `[Convert]::ToBase64String([IO.File]::ReadAllBytes("AuthKey_XXXX.p8")) | Set-Clipboard`).

## 2. Four GitHub secrets
github.com/panayotidisgeorge-rgb/My-finance → Settings → Secrets and variables → Actions → New repository secret:
`APPLE_TEAM_ID`, `ASC_KEY_ID`, `ASC_ISSUER_ID`, `ASC_KEY_P8_B64` (the full text of the .p8 file, or its base64). Enter them yourself in GitHub; never paste the key in a chat.

## 3. App record in App Store Connect
My Apps → "+" → New App: platform iOS, name SpendPattern, primary language English (U.S.), bundle ID `app.spendpattern.finance` (if missing in the list, register it first at developer.apple.com → Identifiers), SKU `spendpattern-ios`, full access.

## 4. Subscriptions (same prices as Google Play)
App → Monetization → Subscriptions → create group **SpendPattern Premium**. Add two subscriptions:
- Reference name "Monthly", Product ID `spendpattern_premium_monthly`, duration 1 month, price CHF 1.90 (pick the nearest price point if 1.90 is not offered and tell me).
- Reference name "Yearly", Product ID `spendpattern_premium_annual`, duration 1 year, price CHF 19.90.
Give both a display name and description in each language, put Yearly above Monthly in the group, and upload a paywall screenshot. No introductory offer: the 4-day trial runs inside the app.
Also: Business → Agreements → *Paid Apps* agreement, bank and tax details must be active, otherwise prices stay empty. Apply for the **App Store Small Business Program** (15 %).

## 5. Store page
Category Finance, age rating questionnaire (no objectionable content), privacy policy URL `https://panayotidisgeorge-rgb.github.io/My-finance/privacy.html`, support URL (the same site), App Privacy: *Data Not Collected*, export compliance already answered in the app (no non-exempt encryption). Screenshots: iPhone 6.9" (1320×2868) and iPad 13" (2064×2752).

## 6. Build
GitHub → Actions → "iOS build (TestFlight)" → Run workflow. The first run may need small fixes. A successful run uploads the build to TestFlight; then add yourself and testers under TestFlight, test the purchase with a Sandbox account, then submit for review.
