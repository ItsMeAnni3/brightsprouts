// BrightSprouts Academy — Music subject for Grades 1–12.
// A progressive music curriculum: high/low & loud/soft → beat & rhythm → the musical alphabet →
// reading notes on the staff → time signatures → dynamics & tempo → scales → instruments →
// music history → harmony & chords → forms, genres & careers.
// Each grade has a hands-on activity and a bank of verifiable music questions (theory and music
// facts are objective) that feed the standard worksheet generator.
(function () {
  var MUS = {
    1: {
      title: "High & Low, Loud & Soft", emoji: "🔊",
      intro: "Music is everywhere — in birds, bells, and your own voice! Let's explore high and low, loud and soft.",
      learn: [
        "Music is sound organized in time. We can make it by singing, clapping, and playing.",
        "Pitch is how high or low a sound is. A bird tweets high; a big drum booms low.",
        "Dynamics means how loud or soft the music is.",
        "The beat is the steady pulse of music, like a heartbeat you can tap along to."
      ],
      activity: "🥁 Sound Hunt: Find something at home that makes a HIGH sound and something that makes a LOW sound. Then clap a steady beat while you hum a tune.",
      questions: [
        { q: "Is a bird's tweet a high sound or a low sound?", a: "A high sound" },
        { q: "Which makes a lower sound: a big drum or a tiny bell?", a: "A big drum" },
        { q: "When music is very quiet, we say it is ____.", a: "Soft (quiet)" },
        { q: "When music is very strong and noisy, we say it is ____.", a: "Loud" },
        { q: "The steady pulse in music, like a heartbeat, is called the ____.", a: "Beat" },
        { q: "How high or low a sound is, is called its ____.", a: "Pitch" },
        { q: "Name one way you can make music using just your body.", a: "Clapping, stomping, or singing" },
        { q: "Music is sound organized in ____.", a: "Time" },
        { q: "A tiny mouse would squeak with a ____ pitch.", a: "High" },
        { q: "Tap your foot along with the steady ____.", a: "Beat" }
      ]
    },
    2: {
      title: "Beat & Rhythm", emoji: "🥁",
      intro: "Every song has a heartbeat. Feel the beat and clap out rhythms!",
      learn: [
        "The beat is the steady pulse of the music — it never changes.",
        "Rhythm is the pattern of long and short sounds played on top of the beat.",
        "Tempo is how fast or slow the music goes.",
        "You can keep the beat by clapping, tapping, or marching."
      ],
      activity: "👏 Echo Rhythms: One person claps a short rhythm; the other echoes it back. Keep a steady beat with your feet the whole time!",
      questions: [
        { q: "The steady pulse of music is the ____.", a: "Beat" },
        { q: "The pattern of long and short sounds on top of the beat is the ____.", a: "Rhythm" },
        { q: "How fast or slow music goes is called the ____.", a: "Tempo" },
        { q: "If a song speeds up, its tempo gets ____.", a: "Faster" },
        { q: "Marching soldiers step on every ____.", a: "Beat" },
        { q: "Clapping a pattern of long and short claps makes a ____.", a: "Rhythm" },
        { q: "The beat is steady; the rhythm is the ____ on top of it.", a: "Pattern" },
        { q: "A gentle lullaby usually has a slow ____.", a: "Tempo" },
        { q: "True or False: beat and rhythm are exactly the same thing.", a: "False — the beat is the steady pulse, the rhythm is the pattern" },
        { q: "Tapping along with a clock's tick-tock helps you feel the ____.", a: "Beat" }
      ]
    },
    3: {
      title: "The Musical Alphabet & Melody", emoji: "🔤",
      intro: "Music has its own alphabet — only seven letters. Let's learn them and sing a melody.",
      learn: [
        "The musical alphabet uses only 7 letters: A B C D E F G, then it repeats.",
        "After G, the alphabet starts again at A.",
        "A melody is a tune — a line of notes you can sing, one after another.",
        "When a melody's pitches go up, we say it goes higher; when they go down, lower."
      ],
      activity: "🎤 Name That Note: Sing 'A-B-C-D-E-F-G' going up like stairs, then back down. Now make up a short melody using those letters.",
      questions: [
        { q: "How many letters are in the musical alphabet?", a: "7 (A B C D E F G)" },
        { q: "List the musical alphabet.", a: "A, B, C, D, E, F, G" },
        { q: "After the note G, the musical alphabet starts again at ____.", a: "A" },
        { q: "A tune you can sing, made of a line of notes, is a ____.", a: "Melody" },
        { q: "Does the musical alphabet use the letter H?", a: "No — it stops at G" },
        { q: "When a melody moves from a low note to a high note, the pitch goes ____.", a: "Up" },
        { q: "Which letter comes right after B in the musical alphabet?", a: "C" },
        { q: "The main tune of a song is called its ____.", a: "Melody" },
        { q: "When notes repeat, which letter comes right before A?", a: "G" },
        { q: "'Twinkle, Twinkle, Little Star' is an example of a ____.", a: "Melody (a tune)" }
      ]
    },
    4: {
      title: "Notes & Rests", emoji: "🎶",
      intro: "Music is written down! Meet the notes and rests that tell us how long to play.",
      learn: [
        "Written notes show how long to play a sound. In common (4/4) time: a whole note = 4 beats, a half note = 2 beats, a quarter note = 1 beat.",
        "A rest is a symbol for silence. A quarter rest = 1 beat of silence.",
        "The musical staff has 5 lines and 4 spaces.",
        "The longer the note's value, the longer you hold the sound."
      ],
      activity: "✏️ Rhythm Cards: Draw a whole note, a half note, and a quarter note. Clap each one for the right number of beats — 4, then 2, then 1!",
      questions: [
        { q: "How many beats does a whole note get in 4/4 time?", a: "4" },
        { q: "How many beats does a half note get?", a: "2" },
        { q: "How many beats does a quarter note get?", a: "1" },
        { q: "A symbol that means silence in music is called a ____.", a: "Rest" },
        { q: "How many beats of silence is a quarter rest?", a: "1" },
        { q: "How many lines does the musical staff have?", a: "5" },
        { q: "How many spaces does the musical staff have?", a: "4" },
        { q: "Which lasts longer: a whole note or a quarter note?", a: "A whole note" },
        { q: "Two half notes together last as long as one ____ note.", a: "Whole" },
        { q: "A quarter note is one beat of sound; a quarter rest is one beat of ____.", a: "Silence" }
      ]
    },
    5: {
      title: "The Staff & Treble Clef", emoji: "🎼",
      intro: "Time to read music. Meet the staff and the treble clef — and spell a secret word: FACE!",
      learn: [
        "The treble clef (also called the G clef) is used for higher notes; the bass clef (F clef) is used for lower notes.",
        "The notes in the treble-clef SPACES spell the word FACE (from bottom to top).",
        "The treble-clef LINES are E G B D F — remember 'Every Good Boy Does Fine'.",
        "The staff has 5 lines and 4 spaces, and each one stands for a different note."
      ],
      activity: "🎼 FACE Race: Draw a treble-clef staff and label the four space notes F-A-C-E. Then find those notes on a real or app keyboard.",
      questions: [
        { q: "The clef used for higher notes is the ____ clef.", a: "Treble (G clef)" },
        { q: "The clef used for lower notes is the ____ clef.", a: "Bass (F clef)" },
        { q: "The treble-clef SPACE notes spell what word (bottom to top)?", a: "FACE" },
        { q: "A saying for the treble-clef LINES (E G B D F) is 'Every Good Boy Does ____'.", a: "Fine" },
        { q: "How many lines are on the musical staff?", a: "5" },
        { q: "The treble clef is also called the ____ clef.", a: "G clef" },
        { q: "Are treble-clef notes generally higher or lower than bass-clef notes?", a: "Higher" },
        { q: "Name the treble-clef space notes from bottom to top.", a: "F, A, C, E" },
        { q: "The bass clef is also called the ____ clef.", a: "F clef" },
        { q: "Each line and space on the staff stands for a different ____.", a: "Note (pitch)" }
      ]
    },
    6: {
      title: "Rhythm & Time Signatures", emoji: "⏱️",
      intro: "Count me in! Learn how time signatures organize the beat into measures.",
      learn: [
        "A time signature (like 4/4) appears at the start of the music. The top number tells how many beats are in each measure.",
        "4/4 means four beats per measure — it's so common it's nicknamed 'common time'.",
        "A measure (or bar) is a group of beats between two bar lines.",
        "Two eighth notes last as long as one quarter note; an eighth note gets half a beat."
      ],
      activity: "🕒 Make a Measure: Tap 4/4 time — count '1-2-3-4' over and over, clapping on beat 1. Then try 3/4 time, which feels like a waltz.",
      questions: [
        { q: "In a time signature like 4/4, what does the TOP number tell you?", a: "How many beats are in each measure" },
        { q: "How many beats are in one measure of 4/4 time?", a: "4" },
        { q: "4/4 time is so common it is nicknamed ____ time.", a: "Common time" },
        { q: "The group of beats between two bar lines is called a ____.", a: "Measure (bar)" },
        { q: "How many eighth notes equal one quarter note?", a: "2" },
        { q: "How many beats does one eighth note get?", a: "Half a beat" },
        { q: "The vertical lines that divide music into measures are called ____ lines.", a: "Bar" },
        { q: "In 3/4 time, how many beats are in each measure?", a: "3" },
        { q: "A waltz is usually in ____ time (three beats per measure).", a: "3/4" },
        { q: "Two eighth notes together last as long as one ____ note.", a: "Quarter" }
      ]
    },
    7: {
      title: "Dynamics & Tempo", emoji: "🔉",
      intro: "Should it be soft as a whisper or loud as a lion? Learn the words that tell us how — dynamics and tempo.",
      learn: [
        "Dynamics means how loud or soft to play. 'piano' (p) = soft; 'forte' (f) = loud; 'mezzo' = medium.",
        "A crescendo means gradually get louder; a diminuendo (decrescendo) means gradually get softer.",
        "Tempo means how fast or slow to play.",
        "Common tempo words: 'allegro' = fast, 'andante' = a walking pace, 'adagio' = slow."
      ],
      activity: "🔊 Loud & Soft Story: 'Perform' one sentence three ways — piano (soft), forte (loud), then with a crescendo getting louder. How does the feeling change?",
      questions: [
        { q: "In music, 'piano' (p) means to play ____.", a: "Soft (quiet)" },
        { q: "In music, 'forte' (f) means to play ____.", a: "Loud" },
        { q: "Gradually getting LOUDER is called a ____.", a: "Crescendo" },
        { q: "Gradually getting SOFTER is called a diminuendo, or ____.", a: "Decrescendo" },
        { q: "How loud or soft music is played is called the ____.", a: "Dynamics" },
        { q: "'Allegro' tells you to play ____.", a: "Fast" },
        { q: "'Adagio' tells you to play ____.", a: "Slow" },
        { q: "'Mezzo' means ____ (as in mezzo-forte).", a: "Medium (medium-loud)" },
        { q: "The speed of the music is called the ____.", a: "Tempo" },
        { q: "'Andante' is a ____ pace, like a comfortable walk.", a: "Walking (moderate)" }
      ]
    },
    8: {
      title: "Scales, Keys & the Octave", emoji: "🎹",
      intro: "Do-re-mi! Discover scales, the octave, and how sharps and flats change a note.",
      learn: [
        "A scale is a set of notes in order, going up or down.",
        "An octave is the distance from one note to the next note with the same name — 8 notes apart.",
        "The C major scale uses only the white piano keys: C D E F G A B C, with no sharps or flats.",
        "A sharp (#) raises a note by a half step; a flat (b) lowers a note by a half step. The solfège syllables are do-re-mi-fa-sol-la-ti-do."
      ],
      activity: "🎹 Build a Scale: On a keyboard (real or an app), play C-D-E-F-G-A-B-C using only the white keys. You just played the C major scale!",
      questions: [
        { q: "A set of notes in order, going up or down, is called a ____.", a: "Scale" },
        { q: "How many notes apart is an octave?", a: "8" },
        { q: "The C major scale uses which piano keys only?", a: "The white keys (C D E F G A B C)" },
        { q: "How many sharps or flats does the C major scale have?", a: "None (zero)" },
        { q: "A sharp (#) ____ a note.", a: "Raises it (by a half step)" },
        { q: "A flat (b) ____ a note.", a: "Lowers it (by a half step)" },
        { q: "Sing the solfège syllables of the major scale.", a: "Do, re, mi, fa, sol, la, ti, do" },
        { q: "From one C up to the next C is one ____.", a: "Octave" },
        { q: "How many different notes does a major scale have before the octave repeats?", a: "7" },
        { q: "Which symbol RAISES a note: # or b?", a: "# (sharp)" }
      ]
    },
    9: {
      title: "Instruments of the Orchestra", emoji: "🎻",
      intro: "Meet the orchestra! Sort dozens of instruments into four big families.",
      learn: [
        "The orchestra has four instrument families: strings, woodwinds, brass, and percussion.",
        "Strings (violin, viola, cello, double bass) are played with a bow or plucked.",
        "Woodwinds (flute, clarinet, oboe, bassoon) and brass (trumpet, trombone, French horn, tuba) are blown.",
        "Percussion (drums, cymbals, xylophone) is played by hitting or shaking."
      ],
      activity: "🎻 Family Sort: Listen to orchestra clips and sort the instruments you hear into the four families — strings, woodwinds, brass, and percussion.",
      questions: [
        { q: "Name the four instrument families of the orchestra.", a: "Strings, woodwinds, brass, and percussion" },
        { q: "Which family does the violin belong to?", a: "Strings" },
        { q: "Which family does the trumpet belong to?", a: "Brass" },
        { q: "Which family does the flute belong to?", a: "Woodwinds" },
        { q: "Which family do drums and cymbals belong to?", a: "Percussion" },
        { q: "String instruments can be played with a bow or by ____.", a: "Plucking" },
        { q: "The largest, lowest string instrument in the orchestra is the ____.", a: "Double bass" },
        { q: "Name one brass instrument.", a: "Trumpet, trombone, French horn, or tuba" },
        { q: "You make sound on percussion instruments by ____.", a: "Hitting or shaking them" },
        { q: "Is a metal flute still counted as a woodwind?", a: "Yes" }
      ]
    },
    10: {
      title: "Music History: Periods & Composers", emoji: "🎼",
      intro: "Take a journey through time — from Bach to Tchaikovsky — and meet the great composers.",
      learn: [
        "Western music history has four main periods, in order: Baroque, Classical, Romantic, and Modern.",
        "Baroque (about 1600–1750): Johann Sebastian Bach and Antonio Vivaldi ('The Four Seasons').",
        "Classical (about 1750–1820): Wolfgang Amadeus Mozart and Joseph Haydn.",
        "Romantic (about 1820–1900): Tchaikovsky ('The Nutcracker') and Chopin. Beethoven bridged the Classical and Romantic periods."
      ],
      activity: "🎧 Time Travel: Listen to one short piece each by Bach, Mozart, and Tchaikovsky. Can you hear how music changed from one period to the next?",
      questions: [
        { q: "Name the four main periods of Western music history, in order.", a: "Baroque, Classical, Romantic, Modern" },
        { q: "Johann Sebastian Bach belongs to which period?", a: "Baroque" },
        { q: "Who composed 'The Four Seasons'?", a: "Antonio Vivaldi" },
        { q: "Wolfgang Amadeus Mozart belongs to which period?", a: "Classical" },
        { q: "Who composed 'The Nutcracker'?", a: "Pyotr Ilyich Tchaikovsky" },
        { q: "Which period came first: Baroque or Romantic?", a: "Baroque" },
        { q: "Ludwig van Beethoven helped bridge the Classical and ____ periods.", a: "Romantic" },
        { q: "'The Four Seasons' by Vivaldi is from which period?", a: "Baroque" },
        { q: "Name a composer from the Classical period.", a: "Mozart or Haydn" },
        { q: "'The Nutcracker' is a famous ballet by Tchaikovsky from the ____ period.", a: "Romantic" }
      ]
    },
    11: {
      title: "Harmony, Chords & Intervals", emoji: "🎸",
      intro: "When notes team up, magic happens. Explore harmony, chords, and intervals.",
      learn: [
        "Harmony is notes played together at the same time.",
        "A chord is 3 or more notes sounded together. A triad is a 3-note chord.",
        "Major chords usually sound bright and happy; minor chords usually sound sad.",
        "An interval is the distance between two notes — for example, one octave is 8 notes apart."
      ],
      activity: "🎹 Happy or Sad: Play (or find online) a major chord and a minor chord. Which sounds happy? Which sounds sad? Write down how each one makes you feel.",
      questions: [
        { q: "Notes played together at the same time create ____.", a: "Harmony" },
        { q: "A group of 3 or more notes played together is a ____.", a: "Chord" },
        { q: "A 3-note chord is called a ____.", a: "Triad" },
        { q: "Major chords usually sound ____ (bright).", a: "Happy" },
        { q: "Minor chords usually sound ____.", a: "Sad" },
        { q: "The distance between two notes is called an ____.", a: "Interval" },
        { q: "The melody is the tune; the ____ supports it underneath.", a: "Harmony" },
        { q: "How many notes make up a triad?", a: "3" },
        { q: "The interval from one note to the same note 8 steps higher is an ____.", a: "Octave" },
        { q: "Does a chord sound like one note or several notes together?", a: "Several notes together" }
      ]
    },
    12: {
      title: "Musical Forms, Genres & Careers", emoji: "🎤",
      intro: "Put it all together — how songs are built, the many styles of music, and the jobs music can become.",
      learn: [
        "Form is the structure of a piece. Common forms: verse-chorus (songs), ABA (ternary), and theme and variations.",
        "Genres (styles) include classical, jazz, rock, pop, hip-hop, folk, and the blues.",
        "Jazz is famous for improvisation — making up music on the spot. The blues helped create jazz and rock and roll.",
        "Music careers include performer, composer, conductor, producer, teacher, and sound engineer."
      ],
      activity: "🎶 Song Map: Pick a favorite song and map out its form — label the verses and choruses. Then name which genre (style) it belongs to.",
      questions: [
        { q: "The overall structure or 'plan' of a piece of music is its ____.", a: "Form" },
        { q: "Many pop songs are built with a ____-chorus form.", a: "Verse" },
        { q: "An A-B-A structure (a section, a new section, then the first again) is called ____ form.", a: "Ternary" },
        { q: "Making up music on the spot, common in jazz, is called ____.", a: "Improvisation" },
        { q: "Name one style (genre) of music.", a: "Any of: classical, jazz, rock, pop, hip-hop, folk, blues…" },
        { q: "Jazz and rock and roll both grew out of the ____.", a: "Blues" },
        { q: "Name one job someone can have in music.", a: "Performer, composer, conductor, producer, teacher, sound engineer…" },
        { q: "The person who leads an orchestra with a baton is the ____.", a: "Conductor" },
        { q: "A piece that states a tune, then changes it several ways, is 'theme and ____'.", a: "Variations" },
        { q: "The main sung section that repeats in a song is the ____.", a: "Chorus" }
      ]
    }
  };

  if (typeof LESSONS !== "undefined") {
    for (var g = 1; g <= 12; g++) {
      if (LESSONS[g]) LESSONS[g].music = MUS[g];
    }
  }
})();
