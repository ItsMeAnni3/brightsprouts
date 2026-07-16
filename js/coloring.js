// BrightSprouts Academy — Coloring book line art.
// Every picture is outline-only SVG (no fills) so children can colour it in,
// and it prints crisply at any size. viewBox is always 0 0 100 100.
// [id, name, theme, svg-inner-markup]
const COLOR_ART = [

// ---------------- TREES & FLOWERS ----------------
["apple-tree","Apple Tree","nature",`
<path d="M50 8 Q28 8 24 26 Q10 32 15 47 Q20 60 38 58 L62 58 Q80 60 85 47 Q90 32 76 26 Q72 8 50 8 Z"/>
<path d="M44 58 L44 86 M56 58 L56 86"/><path d="M44 86 Q50 89 56 86"/>
<path d="M44 70 Q37 64 31 67 M56 68 Q64 62 70 65"/>
<circle cx="37" cy="30" r="5"/><path d="M37 25 Q38 21 41 21"/>
<circle cx="60" cy="24" r="5"/><path d="M60 19 Q61 15 64 15"/>
<circle cx="55" cy="45" r="5"/><path d="M55 40 Q56 36 59 36"/>
<circle cx="30" cy="46" r="5"/><path d="M30 41 Q31 37 34 37"/>
<line x1="16" y1="86" x2="84" y2="86"/>`],

["pine-tree","Pine Tree","nature",`
<path d="M50 8 L34 34 L66 34 Z"/><path d="M50 24 L28 52 L72 52 Z"/><path d="M50 42 L22 72 L78 72 Z"/>
<path d="M45 72 L45 86 L55 86 L55 72"/>
<line x1="16" y1="86" x2="84" y2="86"/>
<circle cx="50" cy="6" r="3"/>`],

["palm-tree","Palm Tree","nature",`
<path d="M46 88 Q44 60 50 34 M58 88 Q58 60 56 34"/>
<path d="M46 60 L58 60 M47 72 L58 72 M46 48 L57 48"/>
<path d="M53 32 Q30 22 14 32 Q32 28 50 38"/>
<path d="M53 32 Q76 22 92 32 Q74 28 55 38"/>
<path d="M53 32 Q40 12 24 10 Q42 20 50 36"/>
<path d="M53 32 Q66 12 82 10 Q64 20 56 36"/>
<circle cx="47" cy="40" r="3.5"/><circle cx="58" cy="41" r="3.5"/>
<path d="M16 88 Q50 82 88 88"/>`],

["sunflower","Sunflower","nature",`
<circle cx="50" cy="34" r="13"/>
<ellipse cx="50" cy="14" rx="5" ry="8"/><ellipse cx="50" cy="54" rx="5" ry="8"/>
<ellipse cx="30" cy="34" rx="8" ry="5"/><ellipse cx="70" cy="34" rx="8" ry="5"/>
<ellipse cx="36" cy="20" rx="5" ry="8" transform="rotate(-45 36 20)"/>
<ellipse cx="64" cy="20" rx="5" ry="8" transform="rotate(45 64 20)"/>
<ellipse cx="36" cy="48" rx="5" ry="8" transform="rotate(45 36 48)"/>
<ellipse cx="64" cy="48" rx="5" ry="8" transform="rotate(-45 64 48)"/>
<ellipse cx="41" cy="15" rx="4" ry="8" transform="rotate(-22 41 15)"/>
<ellipse cx="59" cy="15" rx="4" ry="8" transform="rotate(22 59 15)"/>
<ellipse cx="41" cy="53" rx="4" ry="8" transform="rotate(22 41 53)"/>
<ellipse cx="59" cy="53" rx="4" ry="8" transform="rotate(-22 59 53)"/>
<path d="M42 30 L58 30 M40 34 L60 34 M42 38 L58 38"/>
<path d="M46 27 L46 41 M50 26 L50 42 M54 27 L54 41"/>
<path d="M50 47 L50 90"/>
<path d="M50 62 Q34 54 26 64 Q38 72 50 68"/><path d="M50 74 Q66 66 74 76 Q62 84 50 80"/>`],

["tulip","Tulip","nature",`
<path d="M36 34 Q36 22 42 14 Q46 22 50 14 Q54 22 58 14 Q64 22 64 34 Q64 46 50 50 Q36 46 36 34 Z"/>
<path d="M42 16 Q44 32 44 48 M58 16 Q56 32 56 48"/>
<path d="M50 50 L50 90"/>
<path d="M50 64 Q32 56 24 70 Q40 76 50 70"/><path d="M50 74 Q68 66 76 80 Q60 86 50 80"/>`],

["daisy","Daisy","nature",`
<circle cx="50" cy="32" r="8"/>
<ellipse cx="50" cy="15" rx="5" ry="9"/><ellipse cx="50" cy="49" rx="5" ry="9"/>
<ellipse cx="33" cy="32" rx="9" ry="5"/><ellipse cx="67" cy="32" rx="9" ry="5"/>
<ellipse cx="38" cy="20" rx="5" ry="8" transform="rotate(-45 38 20)"/>
<ellipse cx="62" cy="20" rx="5" ry="8" transform="rotate(45 62 20)"/>
<ellipse cx="38" cy="44" rx="5" ry="8" transform="rotate(45 38 44)"/>
<ellipse cx="62" cy="44" rx="5" ry="8" transform="rotate(-45 62 44)"/>
<path d="M50 58 L50 90"/>
<path d="M50 70 Q34 62 26 74 Q40 80 50 74"/><path d="M50 80 Q66 74 72 84 Q58 88 50 84"/>`],

["mushroom","Mushroom","nature",`
<path d="M18 50 Q18 22 50 22 Q82 22 82 50 Z"/>
<circle cx="36" cy="38" r="5"/><circle cx="58" cy="34" r="6"/><circle cx="68" cy="45" r="4"/><circle cx="46" cy="46" r="3.5"/>
<path d="M38 50 Q36 74 32 86 Q50 92 68 86 Q64 74 62 50"/>
<path d="M44 62 Q50 66 56 62"/>
<line x1="16" y1="88" x2="84" y2="88"/>`],

["potted-plant","Potted Plant","nature",`
<path d="M32 58 L36 88 L64 88 L68 58 Z"/><rect x="28" y="52" width="44" height="8" rx="2"/>
<path d="M50 52 L50 24"/>
<path d="M50 44 Q34 40 30 26 Q46 28 50 40"/><path d="M50 38 Q66 34 70 20 Q54 22 50 34"/>
<path d="M50 30 Q42 20 46 8 Q56 16 52 30"/>
<path d="M38 70 L62 70"/>`],

// ---------------- ANIMALS ----------------
["cat","Cat","animals",`
<circle cx="50" cy="36" r="20"/>
<path d="M34 22 L30 6 L46 16"/><path d="M66 22 L70 6 L54 16"/>
<circle cx="42" cy="34" r="3"/><circle cx="58" cy="34" r="3"/>
<path d="M50 42 L46 46 L54 46 Z"/><path d="M50 46 L50 50 M50 50 Q45 54 41 50 M50 50 Q55 54 59 50"/>
<path d="M32 42 L16 38 M32 46 L16 48 M68 42 L84 38 M68 46 L84 48"/>
<path d="M36 54 Q30 70 34 88 L66 88 Q70 70 64 54"/>
<path d="M66 80 Q84 78 82 60 Q80 50 72 52"/>`],

["fish","Fish","animals",`
<path d="M22 50 Q40 26 64 32 Q80 38 82 50 Q80 62 64 68 Q40 74 22 50 Z"/>
<path d="M82 50 L94 38 L94 62 Z"/>
<circle cx="66" cy="44" r="3"/>
<path d="M52 34 Q50 50 52 66"/>
<path d="M60 44 Q66 50 60 56 M68 46 Q74 50 68 54"/>
<path d="M40 40 Q38 32 44 26 M40 60 Q38 68 44 74"/>
<circle cx="14" cy="34" r="4"/><circle cx="8" cy="22" r="3"/><circle cx="16" cy="14" r="2"/>`],

["butterfly","Butterfly","animals",`
<ellipse cx="50" cy="52" rx="4" ry="22"/>
<circle cx="50" cy="26" r="5"/>
<path d="M46 24 Q36 8 24 6 M54 24 Q64 8 76 6"/>
<circle cx="23" cy="5" r="2.5"/><circle cx="77" cy="5" r="2.5"/>
<path d="M46 38 Q22 20 12 38 Q6 54 26 56 Q42 56 46 46"/>
<path d="M54 38 Q78 20 88 38 Q94 54 74 56 Q58 56 54 46"/>
<path d="M46 58 Q28 62 24 78 Q30 92 44 80 Q48 70 46 60"/>
<path d="M54 58 Q72 62 76 78 Q70 92 56 80 Q52 70 54 60"/>
<circle cx="26" cy="40" r="4"/><circle cx="74" cy="40" r="4"/>
<circle cx="34" cy="76" r="3"/><circle cx="66" cy="76" r="3"/>`],

["ladybug","Ladybug","animals",`
<ellipse cx="50" cy="54" rx="30" ry="28"/>
<path d="M50 26 L50 82"/>
<path d="M32 30 Q50 20 68 30"/>
<circle cx="50" cy="24" r="10"/>
<circle cx="46" cy="22" r="2"/><circle cx="54" cy="22" r="2"/>
<path d="M44 16 L38 6 M56 16 L62 6"/><circle cx="37" cy="5" r="2"/><circle cx="63" cy="5" r="2"/>
<circle cx="38" cy="44" r="4"/><circle cx="62" cy="44" r="4"/>
<circle cx="34" cy="60" r="4"/><circle cx="66" cy="60" r="4"/>
<circle cx="44" cy="72" r="3.5"/><circle cx="56" cy="72" r="3.5"/>
<path d="M22 44 L12 38 M20 56 L8 56 M24 68 L14 76 M78 44 L88 38 M80 56 L92 56 M76 68 L86 76"/>`],

["snail","Snail","animals",`
<circle cx="58" cy="42" r="22"/>
<path d="M80 42 A22 22 0 0 1 36 42 A20 20 0 0 1 76 42 A18 18 0 0 1 40 42 A16 16 0 0 1 72 42 A14 14 0 0 1 44 42 A12 12 0 0 1 68 42 A10 10 0 0 1 48 42 A8 8 0 0 1 64 42 A6 6 0 0 1 52 42"/>
<path d="M38 60 Q20 62 16 74 Q16 84 28 84 L74 84 Q86 84 86 74"/>
<path d="M20 70 Q15 58 19 48"/><path d="M29 67 Q27 55 33 46"/>
<circle cx="19" cy="45" r="3.5"/><circle cx="34" cy="43" r="3.5"/>
<circle cx="19" cy="45" r="1"/><circle cx="34" cy="43" r="1"/>
<path d="M40 78 Q54 82 70 78"/>
<line x1="8" y1="88" x2="92" y2="88"/>`],

["turtle","Turtle","animals",`
<path d="M20 62 Q20 32 50 32 Q80 32 80 62 Z"/>
<path d="M20 62 L80 62"/>
<path d="M50 32 L50 62 M34 36 L38 62 M66 36 L62 62 M24 50 L76 50"/>
<path d="M80 52 Q92 48 92 40 Q92 32 84 34"/>
<circle cx="88" cy="40" r="2"/>
<path d="M26 62 L22 76 L32 76 L34 62 M66 62 L68 76 L78 76 L74 62"/>
<path d="M18 58 Q8 60 10 68"/>
<line x1="6" y1="78" x2="94" y2="78"/>`],

["bird","Bird","animals",`
<ellipse cx="46" cy="46" rx="24" ry="20"/>
<circle cx="30" cy="34" r="12"/>
<path d="M18 34 L6 38 L18 42 Z"/>
<circle cx="28" cy="31" r="2.5"/>
<path d="M50 40 Q66 32 74 44 Q64 54 50 52"/>
<path d="M68 54 Q84 56 92 44 M68 58 Q84 64 90 54"/>
<path d="M42 66 L40 80 M54 66 L56 80"/>
<path d="M34 80 L48 80 M50 80 L64 80"/>
<path d="M12 80 Q50 74 92 80"/>`],

["bunny","Bunny","animals",`
<ellipse cx="50" cy="42" rx="17" ry="15"/>
<ellipse cx="41" cy="16" rx="6" ry="16"/><ellipse cx="59" cy="16" rx="6" ry="16"/>
<ellipse cx="41" cy="16" rx="2.5" ry="10"/><ellipse cx="59" cy="16" rx="2.5" ry="10"/>
<circle cx="44" cy="40" r="2.5"/><circle cx="56" cy="40" r="2.5"/>
<path d="M50 46 L47 49 L53 49 Z"/><path d="M50 49 L50 52 M50 52 Q45 55 42 52 M50 52 Q55 55 58 52"/>
<path d="M34 44 L20 42 M34 48 L20 52 M66 44 L80 42 M66 48 L80 52"/>
<path d="M38 55 Q30 70 34 86 L66 86 Q70 70 62 55"/>
<circle cx="70" cy="76" r="7"/>
<path d="M40 86 Q44 80 50 86 Q56 80 60 86"/>`],

["bear","Bear","animals",`
<circle cx="50" cy="34" r="18"/>
<circle cx="33" cy="20" r="8"/><circle cx="67" cy="20" r="8"/>
<circle cx="33" cy="20" r="3.5"/><circle cx="67" cy="20" r="3.5"/>
<circle cx="43" cy="32" r="2.5"/><circle cx="57" cy="32" r="2.5"/>
<ellipse cx="50" cy="42" rx="8" ry="6"/>
<path d="M50 38 L50 44 M50 44 Q46 47 43 44 M50 44 Q54 47 57 44"/>
<path d="M34 50 Q28 68 32 88 L68 88 Q72 68 66 50"/>
<path d="M34 60 Q22 62 22 74 Q24 80 32 78"/>
<path d="M66 60 Q78 62 78 74 Q76 80 68 78"/>
<path d="M40 88 Q46 82 50 88 M50 88 Q54 82 60 88"/>`],

["elephant","Elephant","animals",`
<circle cx="44" cy="38" r="20"/>
<path d="M26 30 Q8 26 8 44 Q8 60 26 54"/>
<circle cx="44" cy="34" r="2.5"/>
<path d="M44 56 Q42 74 34 84 Q30 90 36 92 Q44 90 46 78"/>
<path d="M56 40 Q80 38 84 58 Q86 76 72 82 L44 82"/>
<path d="M62 82 L62 92 M78 78 L80 92"/>
<path d="M56 90 L68 90 M74 90 L86 90"/>
<path d="M84 58 Q92 56 94 64 Q92 70 86 68"/>
<line x1="8" y1="92" x2="96" y2="92"/>`],

// ---------------- TOYS ----------------
["teddy","Teddy Bear","toys",`
<circle cx="50" cy="30" r="15"/>
<circle cx="35" cy="18" r="7"/><circle cx="65" cy="18" r="7"/>
<circle cx="35" cy="18" r="3"/><circle cx="65" cy="18" r="3"/>
<circle cx="45" cy="28" r="2"/><circle cx="55" cy="28" r="2"/>
<ellipse cx="50" cy="36" rx="6" ry="4.5"/><path d="M50 33 L50 38 M50 38 Q47 41 45 38 M50 38 Q53 41 55 38"/>
<ellipse cx="50" cy="62" rx="17" ry="18"/>
<ellipse cx="50" cy="64" rx="9" ry="10"/>
<ellipse cx="28" cy="56" rx="8" ry="11" transform="rotate(20 28 56)"/>
<ellipse cx="72" cy="56" rx="8" ry="11" transform="rotate(-20 72 56)"/>
<ellipse cx="37" cy="86" rx="9" ry="7"/><ellipse cx="63" cy="86" rx="9" ry="7"/>
<path d="M44 46 Q50 50 56 46"/>`],

["ball","Beach Ball","toys",`
<circle cx="50" cy="52" r="34"/>
<path d="M50 18 Q34 52 50 86 M50 18 Q66 52 50 86"/>
<path d="M50 18 Q20 40 22 66 M50 18 Q80 40 78 66"/>
<path d="M16 52 L84 52"/>
<circle cx="50" cy="52" r="6"/>`],

["kite","Kite","toys",`
<path d="M50 6 L20 40 L50 82 L80 40 Z"/>
<path d="M50 6 L50 82 M20 40 L80 40"/>
<path d="M50 82 Q56 90 48 94 Q56 98 50 100"/>
<path d="M44 88 L56 92 M42 96 L54 100"/>
<path d="M20 40 Q10 60 14 80"/>`],

["robot","Robot","toys",`
<rect x="32" y="20" width="36" height="28" rx="4"/>
<circle cx="42" cy="32" r="4"/><circle cx="58" cy="32" r="4"/>
<path d="M40 42 L60 42"/><path d="M44 42 L44 46 M52 42 L52 46"/>
<line x1="50" y1="20" x2="50" y2="10"/><circle cx="50" cy="7" r="3.5"/>
<rect x="36" y="52" width="28" height="30" rx="3"/>
<circle cx="50" cy="60" r="4"/><rect x="42" y="70" width="16" height="6" rx="1"/>
<path d="M36 56 L22 56 L22 72 M64 56 L78 56 L78 72"/>
<circle cx="22" cy="76" r="5"/><circle cx="78" cy="76" r="5"/>
<rect x="38" y="82" width="8" height="10" rx="2"/><rect x="54" y="82" width="8" height="10" rx="2"/>`],

["train","Train","toys",`
<path d="M14 68 L14 46 L38 46 L38 30 L58 30 L58 68 Z"/>
<rect x="20" y="52" width="12" height="10" rx="1"/>
<rect x="42" y="38" width="12" height="10" rx="1"/>
<rect x="62" y="42" width="26" height="26" rx="2"/>
<rect x="68" y="48" width="14" height="10" rx="1"/>
<circle cx="24" cy="76" r="8"/><circle cx="48" cy="76" r="8"/><circle cx="76" cy="76" r="8"/>
<circle cx="24" cy="76" r="3"/><circle cx="48" cy="76" r="3"/><circle cx="76" cy="76" r="3"/>
<rect x="42" y="20" width="10" height="10"/>
<circle cx="40" cy="12" r="5"/><circle cx="52" cy="8" r="6"/><circle cx="64" cy="10" r="4"/>
<line x1="8" y1="84" x2="92" y2="84"/>`],

["blocks","Building Blocks","toys",`
<rect x="30" y="14" width="26" height="26"/>
<rect x="16" y="42" width="26" height="26"/><rect x="46" y="42" width="26" height="26"/>
<rect x="30" y="70" width="26" height="22"/>
<text x="43" y="33" font-size="16" text-anchor="middle" font-family="Arial" stroke-width="1.5">A</text>
<text x="29" y="61" font-size="16" text-anchor="middle" font-family="Arial" stroke-width="1.5">B</text>
<text x="59" y="61" font-size="16" text-anchor="middle" font-family="Arial" stroke-width="1.5">C</text>
<circle cx="38" cy="80" r="4"/><circle cx="48" cy="80" r="4"/>`],

["balloon","Balloons","toys",`
<ellipse cx="32" cy="30" rx="17" ry="21"/><path d="M32 51 L29 56 L35 56 Z"/>
<ellipse cx="66" cy="24" rx="14" ry="18"/><path d="M66 42 L63 47 L69 47 Z"/>
<path d="M32 56 Q38 74 30 92"/><path d="M66 47 Q60 68 68 92"/>
<path d="M26 20 Q30 16 36 18"/><path d="M61 16 Q64 13 69 15"/>`],

["rocking-horse","Rocking Horse","toys",`
<ellipse cx="44" cy="54" rx="21" ry="12"/>
<path d="M58 46 Q64 34 66 26"/><path d="M47 44 Q54 32 57 24"/>
<path d="M57 24 Q55 16 63 12 Q74 10 79 18 Q82 25 74 29 L64 31 Q57 31 57 24 Z"/>
<circle cx="70" cy="20" r="2.5"/>
<path d="M79 22 Q84 23 84 26"/>
<path d="M63 12 L61 3 L70 10"/>
<path d="M60 20 Q52 24 50 32 Q46 38 47 44"/>
<path d="M24 50 Q11 47 9 60 Q13 70 22 63"/>
<path d="M34 64 L29 82 M42 66 L40 84 M50 66 L53 84 M58 64 L63 82"/>
<path d="M35 44 Q44 41 53 45 L51 55 Q42 58 35 54 Z"/>
<path d="M12 86 Q50 97 88 86"/><path d="M12 86 Q50 79 88 86"/>
<line x1="6" y1="90" x2="94" y2="90"/>`],

// ---------------- EVERYDAY THINGS ----------------
["house","House","things",`
<path d="M18 48 L50 20 L82 48"/>
<path d="M24 48 L24 84 L76 84 L76 48"/>
<rect x="44" y="62" width="14" height="22"/>
<circle cx="55" cy="74" r="1.5"/>
<rect x="30" y="56" width="12" height="12"/><path d="M36 56 L36 68 M30 62 L42 62"/>
<rect x="60" y="56" width="12" height="12"/><path d="M66 56 L66 68 M60 62 L72 62"/>
<path d="M66 30 L66 18 L74 18 L74 38"/>
<line x1="12" y1="84" x2="88" y2="84"/>
<circle cx="18" cy="26" r="7"/><path d="M18 15 L18 10 M18 42 L18 37 M29 26 L34 26 M7 26 L2 26"/>`],

["car","Car","things",`
<path d="M12 64 L12 52 Q12 48 18 48 L28 48 L38 32 L64 32 L74 48 L84 48 Q88 48 88 54 L88 64 Z"/>
<path d="M40 36 L40 48 M60 36 L60 48"/>
<path d="M32 48 L68 48"/>
<circle cx="30" cy="66" r="9"/><circle cx="70" cy="66" r="9"/>
<circle cx="30" cy="66" r="3.5"/><circle cx="70" cy="66" r="3.5"/>
<rect x="14" y="52" width="6" height="5" rx="1"/><rect x="80" y="52" width="6" height="5" rx="1"/>
<line x1="6" y1="76" x2="94" y2="76"/>`],

["boat","Sailboat","things",`
<path d="M16 70 L84 70 L74 84 L26 84 Z"/>
<line x1="50" y1="70" x2="50" y2="14"/>
<path d="M46 18 L46 66 L14 66 Z"/>
<path d="M54 22 L54 66 L84 66 Z"/>
<path d="M50 14 L62 10 L50 6"/>
<path d="M6 88 Q18 82 30 88 Q42 82 54 88 Q66 82 78 88 Q90 82 98 88"/>
<circle cx="80" cy="18" r="8"/><path d="M80 4 L80 8 M80 28 L80 32 M94 18 L90 18 M70 18 L66 18"/>`],

["sun","Happy Sun","things",`
<circle cx="50" cy="50" r="24"/>
<circle cx="42" cy="44" r="3"/><circle cx="58" cy="44" r="3"/>
<path d="M38 56 Q50 68 62 56"/>
<circle cx="34" cy="56" r="3"/><circle cx="66" cy="56" r="3"/>
<path d="M50 26 L50 8 M50 74 L50 92 M26 50 L8 50 M74 50 L92 50"/>
<path d="M33 33 L20 20 M67 33 L80 20 M33 67 L20 80 M67 67 L80 80"/>`],

["cupcake","Cupcake","things",`
<path d="M28 52 L34 88 L66 88 L72 52 Z"/>
<path d="M40 52 L43 88 M50 52 L50 88 M60 52 L57 88"/>
<path d="M24 52 Q24 40 34 38 Q36 26 50 26 Q64 26 66 38 Q76 40 76 52 Z"/>
<path d="M24 52 Q36 46 48 52 Q60 46 76 52"/>
<circle cx="50" cy="20" r="6"/><path d="M50 14 Q52 8 56 8"/>
<circle cx="38" cy="42" r="2"/><circle cx="62" cy="44" r="2"/><circle cx="50" cy="38" r="2"/>`],

["ice-cream","Ice Cream","things",`
<path d="M32 46 L50 92 L68 46 Z"/>
<path d="M36 56 L58 78 M44 46 L64 62 M32 46 L52 88"/>
<path d="M36 46 Q30 34 40 30 Q42 18 54 20 Q66 20 66 32 Q74 36 68 46 Z"/>
<circle cx="42" cy="34" r="7"/><circle cx="58" cy="32" r="8"/><circle cx="50" cy="24" r="7"/>
<circle cx="50" cy="14" r="4"/>`],

["star","Star","things",`
<path d="M50 8 L61 38 L93 38 L67 57 L77 88 L50 69 L23 88 L33 57 L7 38 L39 38 Z"/>
<circle cx="42" cy="45" r="2.5"/><circle cx="58" cy="45" r="2.5"/>
<path d="M42 56 Q50 64 58 56"/>`],

["umbrella","Umbrella","things",`
<path d="M8 52 Q8 16 50 16 Q92 16 92 52 Z"/>
<path d="M8 52 Q22 42 36 52 Q50 42 64 52 Q78 42 92 52"/>
<path d="M36 52 Q40 24 50 16 M64 52 Q60 24 50 16"/>
<line x1="50" y1="16" x2="50" y2="10"/><circle cx="50" cy="8" r="2.5"/>
<path d="M50 52 L50 78 Q50 90 38 90 Q28 90 28 80"/>
<path d="M14 66 L18 74 M74 62 L78 70 M84 76 L88 84 M22 88 L26 96"/>`],

["mug","Hot Mug","things",`
<path d="M24 40 L28 82 Q28 88 34 88 L62 88 Q68 88 68 82 L72 40 Z"/>
<path d="M22 40 L74 40"/>
<path d="M71 50 Q86 48 86 62 Q86 74 69 74"/>
<path d="M40 30 Q34 22 40 14 Q46 8 42 2"/>
<path d="M56 30 Q50 22 56 14 Q62 8 58 2"/>
<path d="M34 60 Q48 66 62 60"/>`],

["present","Present","things",`
<rect x="16" y="38" width="68" height="48" rx="3"/>
<rect x="12" y="28" width="76" height="12" rx="2"/>
<path d="M50 28 L50 86"/>
<path d="M44 28 Q30 24 30 14 Q30 6 40 8 Q50 12 50 28"/>
<path d="M56 28 Q70 24 70 14 Q70 6 60 8 Q50 12 50 28"/>
<path d="M28 52 L28 86 M72 52 L72 86"/>`]
];

const COLOR_THEMES = [
  ["all", "🎨 Everything"],
  ["nature", "🌳 Trees & Flowers"],
  ["animals", "🐱 Animals"],
  ["toys", "🧸 Toys"],
  ["things", "🏠 Things"]
];

LESSONS[14].coloring = {
  title: "Colouring Book", emoji: "🖍️",
  intro: "Fresh colouring pages any time you like! Pick a theme, press the button for a new set, and print. Every picture is drawn as clean outlines — perfect for crayons, pencils or paint.",
  learn: [
    "Colouring is real learning: it builds the hand muscles and pencil grip your child needs for writing.",
    "It also trains focus, patience, and staying inside a boundary — the same control needed to form letters.",
    "There are no wrong colours! A purple elephant is a fine choice. Ask 'tell me about your picture' rather than 'what is it?'",
    "For little ones (3–5), pick the big simple pictures. Older children can add their own backgrounds, patterns and shading."
  ],
  activity: "🖼️ Family Gallery: Colour a page each — grown-ups too! — then hang them all on the fridge. Ask everyone to explain one colour choice they made.",
  coloringBook: true
};
