# Screenshots and graphics

Both stores reject a submission with no screenshots, and screenshots are the single biggest
influence on whether someone taps Install. These are the eight screens worth capturing, in the
order they should appear in the listing.

## Which screens, and why

| # | Screen | How to get there | Why this one |
|---|---|---|---|
| 1 | The Pick a Grade tiles | Lessons | Shows the whole scope at a glance: K to 12 plus all fifteen courses. |
| 2 | A lesson with its worksheet | Grade 3 → Math | The core promise. Make sure "Practice Time" is visible. |
| 3 | The Code Terminal, mid-run | Computer Science → Code Terminal → 7 Times Table → Run | The most surprising thing in the app. Capture it with green output on screen. |
| 4 | The Paper Activity Studio | Paper Activities | The grid of colourful drawings sells itself. |
| 5 | An open paper activity | Paper Activities → Paper Crane | Shows materials and numbered steps together. |
| 6 | The Game Arcade | Games | Colour and fun. Balances the worksheets. |
| 7 | The 3D Globe | Geography → The Globe | Spin it so a recognisable continent faces front. |
| 8 | The Sprout & Bud joke show | Kids & Family Jokes | Personality. Good last frame. |

Skip the pricing page. Nobody installs an app because of a price list, and it dates fast.

## Capturing them

The fastest honest way is a real device, because that gives real status bars and correct sizes.

**Android:** open the installed app, press Power and Volume Down together. Play needs at least
1080px on the longest side, which any modern phone exceeds.

**iPhone:** you need exact pixel sizes, so use the simulator in Xcode rather than a physical phone.
Open the iPhone 15 Pro Max simulator (1290 x 2796) and the iPhone 14 Plus simulator (1284 x 2778),
browse to the screen, then Device → Screenshot. Both sizes are required.

**From Windows, with no phone:** Chrome DevTools can do it. Open brightsprouts.academy, press F12,
click the device toolbar icon, choose Responsive, and type the exact pixel size. Then use the
three-dot menu in DevTools → Run command → "Capture screenshot". This gives correctly sized images,
just without a real status bar. Acceptable for Play. Apple prefers real device or simulator shots.

## Before you capture

- Sign in to a Premium account so nothing shows a padlock. A listing full of locked content looks
  like a demo.
- Turn the Sprout chat bubble off screen, or close it, so it does not cover the content.
- Use a clean browser profile so no extension bars appear.

## Feature graphic (Google Play only, 1024 x 500, required)

No mock-up for this exists yet. Compose it from what the site already has:

- Background: the purple to pink gradient already used on the app icon.
- Left: the Sprout mascot, large.
- Right: "BrightSprouts Academy" in Fredoka Bold, white, with "K-12 lessons, games and real coding"
  underneath in a lighter weight.
- Keep the middle clear. Play crops the edges on some layouts.

## App icon at 1024 (Apple only, required)

Apple needs 1024 x 1024 with **no transparency and no rounded corners**; the system rounds them.
`icons/icon-512.png` is half that size and has a transparent background, so it cannot be uploaded
as is. Re-export at 1024 with the background filled in, in any image editor.
