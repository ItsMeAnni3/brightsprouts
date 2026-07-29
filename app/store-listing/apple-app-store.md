# Apple App Store listing

Copy and paste. Character limits are Apple's, and everything below is inside them.

---

## App name (30 max)

```
BrightSprouts Academy
```

## Subtitle (30 max)

```
K-12 lessons, games & coding
```

## Promotional text (170 max, changeable any time without review)

```
New: handmade cards for every occasion, write real code in the Code Terminal, and 20 computer science activities that need no screen at all.
```

## Description (4000 max)

```
BrightSprouts Academy is everything one family needs for Kindergarten through Grade 12, in one app that works with no internet.

EVERY GRADE, K TO 12
Math, Reading, Phonics, Vocabulary, Spelling, Writing, Science, Social Studies, Art and Music, plus Biology, Chemistry and Physics for older students.

TWENTY FULL COURSES
Geography, Space, Biology, Mathematics, Chemistry, Physics, Visual Arts, Music, Computer Science, Spanish, Geology, Paleontology, Weather and Oceans, Time and Money, The History of Us, Feelings and Kindness, Kids and Family Jokes, Paper Activities, Additional Learning Materials and Books.

ENDLESS WORKSHEETS
Press one button for a brand-new worksheet. Maths problems are generated fresh every time, and every sheet prints with a name and date header and an optional answer key for parents.

WRITE REAL CODE
The Code Terminal is a real JavaScript console. Children write actual code, press Run, and see their own program's output. Fifteen challenges take them from printing one line to writing a search that finds a number in seven guesses. It runs in a sealed sandbox, so nothing can break, and a loop that never ends is stopped automatically.

COMPUTER SCIENCE WITHOUT A SCREEN
Twenty unplugged activities teach algorithms, binary, sorting, searching and networks using paper, cards and string. Each one says which idea it teaches.

112 PAPER ACTIVITIES
Origami animals, party decorations, flying machines, games to make and play, and handmade cards for birthdays, Diwali, Eid, Christmas, Hanukkah and Halloween. Every one shows a picture of the finished thing, lists what you need, and gives the steps in order.

51 LEARNING GAMES
An arcade at three difficulty levels, with stars and badges to collect.

STORIES AND BOOKS
Fifty original stories with morals and discussion questions, a story maker that writes a personalised story using your child's name, and a shelf of classic children's books to read free.

MORE
A spinning 3D globe with all 195 countries. Tracing sheets and a colouring book. Tap-to-hear Spanish and phonics audio. Sprout, a friendly helper who answers questions from the lessons themselves, by typing or out loud. A joke show with 100 clean jokes.

WORKS OFFLINE
The lessons, worksheets, games and activities all work with no connection.

PRIVACY FIRST
No advertising. No third-party trackers. We never ask a child for their name, age, birthday or school. Progress and accounts stay on your own device.

PRICING
Free forever: Kindergarten, Grade 1 and Grade 2, all 51 games, the free books library, Feelings and Kindness, and 10 stories.
Premium: $6.99 a month unlocks everything, for every child in the family.

Made for parents. Loved by kids.

BrightSprouts Academy is a supplemental learning resource. It is not affiliated with or endorsed by any school district, state education agency, or the U.S. Department of Education.
```

## Keywords (100 max, comma separated, no spaces)

```
kids,learning,worksheets,homeschool,phonics,math,reading,kindergarten,grade,coding,education,origami
```

Do not repeat words already in the app name or subtitle; Apple indexes those anyway, so repeating
them wastes characters.

## Support URL

```
https://brightsprouts.academy/#contact
```

## Marketing URL

```
https://brightsprouts.academy/
```

## Privacy policy URL

```
https://brightsprouts.academy/privacy.html
```

---

## Category and rating

| Field | Value |
|---|---|
| Primary category | Education |
| Secondary category | Reference |
| Age rating | 4+ |

**On the Kids Category:** it earns a badge and a place in a curated section, but the rules are
strict. No third-party analytics at all, no third-party ads, and no personal information leaving the
device without verified parental consent. The cookieless GoatCounter counter currently in the app
would have to be switched off for the app build. Education is the simpler listing and is what this
text assumes. Read `../ios/BUILD.md` before choosing.

---

## App Privacy questionnaire

These answers must match `privacy.html`. Apple checks, and a mismatch gets the app rejected or
pulled later.

**Do you or your third-party partners collect data from this app?** Yes.

| Category | Collected | Linked to identity | Used for tracking | Purpose |
|---|---|---|---|---|
| Contact Info: Email Address | Yes | Yes | **No** | App Functionality, and Developer's Marketing only where a parent asked for the packs |
| Contact Info: Name | Yes | Yes | **No** | App Functionality (contact form only) |
| Contact Info: Phone Number | Yes | Yes | **No** | App Functionality (optional contact form field) |
| Purchases: Purchase History | Yes | Yes | **No** | App Functionality (subscription, via Stripe) |
| Usage Data: Product Interaction | Yes | **No** | **No** | Analytics, through a cookieless counter that does not identify anyone |
| Audio Data | **No** | | | The microphone is transcribed by the operating system or browser. The app never receives, records or stores audio. |
| Identifiers, Location, Contacts, Photos, Health, Financial Info, Sensitive Info, Browsing History, Diagnostics | No | | | Never requested. |

**Do you use data for tracking?** **No.** Nothing is shared with data brokers, no advertising
identifier is read, and there is no cross-app or cross-site tracking. This answer is what lets the
app avoid the App Tracking Transparency prompt, and it is honest.

---

## Notes for the review team

Paste this into the "Notes" box when you submit. It exists because of Guideline 4.2.

```
BrightSprouts Academy is a K-12 learning app for families.

Native functionality beyond the web content:
- Full offline use. All lessons, worksheets, games and activities are cached on device and work with no connection.
- [ADD THE NATIVE FEATURES YOU BUILT: local notifications for practice reminders, Apple Pencil support on the tracing sheets, native share sheet, and so on. Do not submit without at least two.]

Account for review: [create a test account and put the email and password here]
Premium can be enabled for review with: [say how, or provide a pre-upgraded test account]

There is no user-generated content, no chat between users, no social features and no advertising. The chat helper answers only from the app's own lesson content and is not connected to any external service.

Microphone: used only when the child taps the microphone button in the chat helper, to turn a spoken question into text. No audio is recorded, stored or transmitted by us.
```

---

## Graphics you need to produce

| Asset | Size | Required |
|---|---|---|
| App icon | 1024 x 1024 PNG, no transparency, no rounded corners | Yes |
| iPhone 6.7" screenshots | 1290 x 2796 | Yes, at least 3 |
| iPhone 6.5" screenshots | 1284 x 2778 | Yes, at least 3 |
| iPad 12.9" screenshots | 2048 x 2732 | Only if you support iPad |

`icons/icon-512.png` in the site repo is too small for the 1024 requirement; it must be re-exported
at 1024 with a solid background. See `screenshots.md`.
