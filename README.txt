CHINA TOUR GUIDING — COMPETITION TRAINING SIMULATOR (PWA)
===========================================================

WHAT THIS IS
------------
The same training simulator as before — 10 official China attractions,
120 possible 3-attraction combinations, accurate 2-minute prep / 5-minute
presentation timers, Official Competition / Pressure Visual / Impromptu /
Visual Recall / Pure Random modes, coverage tracking, history, self-
evaluation, reflections, and settings — now packaged as an installable
Progressive Web App (PWA) for Android, with a mobile bottom navigation
bar, larger touch targets, screen-wake-lock during practice, optional
vibration cues, and export/import of your progress.

NOTHING WAS REMOVED. Every mode, timer, and tracking feature from the
original single-file version still works exactly the same way — this
package only adds mobile/PWA plumbing around it.


FOLDER CONTENTS
----------------
  index.html          the app itself (open this to run it)
  manifest.json        tells Android how to install it as an app
  service-worker.js    caches the app so it works with no internet
  icons/icon-192.png   home screen icon (small)
  icons/icon-512.png   home screen icon (large / splash)
  images/               kept empty on purpose — see "About images" below
  README.txt            this file


HOW TO USE ON ANDROID — QUICK START
-------------------------------------
1. Unzip this folder onto your computer.
2. Upload the whole folder to a free static host (see "Hosting" below).
3. Open the resulting web address on your Android phone.
4. Follow "How to install as an app" below.
5. From then on, launch it from your home screen — it keeps working
   offline once it has loaded at least once.

You can also open index.html directly from a downloaded folder (double-
tap it, or open it in a phone browser) for basic practice — but true
installation, offline caching, and the update banner all require the
app to be loaded from a real web address first. That is a browser
security rule (a "secure context"), not a limitation of this app. See
the in-app "How to Install" screen (bottom navigation, 📲 icon) for the
same explanation with more detail.


HOSTING — SIMPLEST FREE OPTIONS (no coding required)
-------------------------------------------------------
Any of these work. Pick whichever you're most comfortable with:

  • Netlify Drop  — https://app.netlify.com/drop
    Drag the unzipped folder onto the page. You get a link instantly.

  • GitHub Pages  — upload the folder to a new GitHub repository, then
    turn on "Pages" in the repository settings.

  • Vercel        — https://vercel.com — drag-and-drop deploy, similar
    to Netlify.

All three give you a free https:// link, which is what Android needs
to offer the "Install app" / "Add to Home screen" option and to let the
service worker cache the app for offline use.


HOW TO INSTALL AS AN APP (ANDROID / CHROME)
-----------------------------------------------
1. Open the hosted link in Chrome on your Android phone.
2. Tap the ⋮ menu in the top-right corner.
3. Choose "Add to Home screen" or "Install app" (wording varies by
   Chrome version).
4. Confirm.
5. Launch "China Tour Guiding" from your home screen like any other app.

The app also shows its own install banner automatically when your
browser supports it, and a full "How to Install" page is built into the
app itself (bottom navigation bar → 📲 Install).

Other Android browsers (Samsung Internet, Firefox, Edge) support similar
"Add to Home screen" features, but menu wording and exact PWA support
differ by browser.


HOW TO RUN LOCALLY (FOR TESTING ON A COMPUTER)
---------------------------------------------------
Simplest: just double-click index.html to open it in a desktop browser.
Every training feature works this way. Installation and full offline
service-worker caching won't activate from a bare local file — that
needs a real server. If you have Python installed, one option is to open
a terminal in this folder and run:

    python3 -m http.server 8000

then visit http://localhost:8000 in your browser — localhost counts as
a secure context, so install/offline features work there too.


HOW TO UPDATE
--------------
If you (or whoever hosts this for you) deploy a newer version of these
files to the same web address, the app will detect it automatically and
show a banner: "🔄 Update available". Tap "Update Now" whenever you're
ready. Your coverage, history, streak, ratings, reflections, and
settings are stored separately in the browser's local storage and are
never touched or deleted by an update.

You can also back up your progress any time from Settings → "Export My
Progress", and restore it later (same phone or a new one) with
Settings → "Import Progress".


ABOUT IMAGES
-------------
The attraction cards use clean, custom line-art icons drawn directly in
the app's own code (not photos). This was a deliberate choice for this
package, not a missing feature: real attraction photographs pulled from
the internet would need individual licensing checks, and hot-linked
photos are exactly the kind of thing that breaks on Android — no
internet, dead links, CORS blocks, slow connections. Bundled vector
icons can't fail to load, need no separate image files, and keep the
whole app working offline from the very first install. The empty
images/ folder is kept in this package in case you want to drop in your
own licensed photographs later; the app does not currently reference
anything in it.


OFFLINE BEHAVIOR
------------------
After the app has loaded once while online (or been installed), the
service worker keeps index.html, manifest.json, and both icons cached.
Turning on airplane mode after that point, the entire simulator keeps
working: randomization, all 120 combinations, both timers, every
practice mode, progress tracking, history, self-evaluation, reflections,
and settings. Nothing in the core training flow calls out to the
internet.


NOT AN OFFICIAL SCORING TOOL
--------------------------------
This app tracks your practice behavior and your own self-ratings. It
does not and cannot predict how competition judges will actually score
you.
