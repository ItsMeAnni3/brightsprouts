// BrightSprouts Academy: Additional Learning Material
LESSONS[14] = {

};


const TRACE_MODES = [
  ["upper",   "A B C: Capitals"],
  ["lower",   "a b c: Small letters"],
  ["both",    "Aa Bb: Both"],
  ["num10",   "1–10 Numbers"],
  ["num20",   "1–20 Numbers"],
  ["num100",  "1–100 Grid"],
  ["random",  "🎲 Practice set"]
];

// ---- Formula sheet: grade-banded, each with a plain-English meaning ----
const FORMULAS = [
 { band: "Grades 1–2 · First Numbers", items: [
   ["Addition", "a + b = c", "Put two groups together. 3 + 4 = 7"],
   ["Subtraction", "a − b = c", "Take away. 7 − 4 = 3"],
   ["Adding zero", "a + 0 = a", "Adding nothing changes nothing"],
   ["Order doesn't matter (addition)", "a + b = b + a", "3 + 5 is the same as 5 + 3"],
   ["Doubles", "a + a = 2 × a", "6 + 6 = 12"]
 ]},
 { band: "Grades 3–4 · Times, Share & Shapes", items: [
   ["Multiplication", "a × b = c", "Groups of. 4 × 3 = four groups of three = 12"],
   ["Division", "a ÷ b = c", "Fair sharing. 12 ÷ 3 = 4 each"],
   ["Order doesn't matter (×)", "a × b = b × a", "Halves what you must memorise!"],
   ["Perimeter of a rectangle", "P = 2 × (l + w)", "The fence around it"],
   ["Area of a rectangle", "A = l × w", "The carpet inside it"],
   ["Area of a square", "A = s²", "All sides equal"],
   ["Fraction of a number", "part = (a/b) × n", "½ of 10 = 5"]
 ]},
 { band: "Grades 5–6 · Fractions, Decimals, Percent", items: [
   ["Adding fractions (same bottom)", "a/c + b/c = (a+b)/c", "2/5 + 1/5 = 3/5"],
   ["Adding fractions (different bottom)", "a/b + c/d = (ad + cb)/(bd)", "Make the bottoms match first"],
   ["Multiplying fractions", "a/b × c/d = (a×c)/(b×d)", "Straight across"],
   ["Dividing fractions", "a/b ÷ c/d = a/b × d/c", "Flip the second one and multiply"],
   ["Percent of a number", "part = (p ÷ 100) × n", "20% of 50 = 10"],
   ["Percent change", "% change = ((new − old) ÷ old) × 100", "Price rises and sale discounts"],
   ["Average (mean)", "mean = sum ÷ how many", "Add them up, share them out"],
   ["Area of a triangle", "A = ½ × b × h", "Half of the rectangle around it"],
   ["Area of a circle", "A = πr²", "π ≈ 3.14159"],
   ["Circumference of a circle", "C = 2πr  (= πd)", "The distance around"]
 ]},
 { band: "Grades 7–8 · Algebra Begins", items: [
   ["Slope of a line", "m = (y₂ − y₁) ÷ (x₂ − x₁)", "Rise over run, how steep"],
   ["Straight line", "y = mx + b", "m = slope, b = where it crosses the y-axis"],
   ["Distance / speed / time", "d = s × t", "Also s = d ÷ t and t = d ÷ s"],
   ["Simple interest", "I = P × r × t", "Money earned on savings"],
   ["Volume of a box", "V = l × w × h", "How much fits inside"],
   ["Volume of a cylinder", "V = πr²h", "Circle area × height"],
   ["Pythagorean theorem", "a² + b² = c²", "Right triangles only. c is the longest side"],
   ["Angles in a triangle", "a + b + c = 180°", "Always, in every triangle"],
   ["Angles in a quadrilateral", "sum = 360°", "Any four-sided shape"]
 ]},
 { band: "Grades 9–10 · Algebra & Geometry", items: [
   ["Difference of squares", "a² − b² = (a + b)(a − b)", "A factoring shortcut"],
   ["Square of a sum", "(a + b)² = a² + 2ab + b²", "Not a² + b²! The 2ab matters"],
   ["Square of a difference", "(a − b)² = a² − 2ab + b²", ""],
   ["Quadratic formula", "x = (−b ± √(b² − 4ac)) ÷ 2a", "Solves any ax² + bx + c = 0"],
   ["Discriminant", "D = b² − 4ac", "D>0: two roots, D=0: one, D<0: none real"],
   ["Distance between two points", "d = √((x₂−x₁)² + (y₂−y₁)²)", "Pythagoras in disguise"],
   ["Midpoint", "M = ((x₁+x₂)/2, (y₁+y₂)/2)", "The average of the ends"],
   ["Surface area of a sphere", "A = 4πr²", ""],
   ["Volume of a sphere", "V = (4/3)πr³", ""],
   ["Volume of a cone", "V = (1/3)πr²h", "Exactly a third of the cylinder"],
   ["Exponent rules", "xᵃ · xᵇ = xᵃ⁺ᵇ ,  (xᵃ)ᵇ = xᵃᵇ ,  x⁻ᵃ = 1/xᵃ ,  x⁰ = 1", ""]
 ]},
 { band: "Grades 11–12 · Trig, Logs & Beyond", items: [
   ["SOH-CAH-TOA", "sin = opp/hyp ,  cos = adj/hyp ,  tan = opp/adj", "Right triangles"],
   ["Pythagorean identity", "sin²θ + cos²θ = 1", "True for every angle"],
   ["Law of sines", "a/sin A = b/sin B = c/sin C", "Any triangle"],
   ["Law of cosines", "c² = a² + b² − 2ab·cos C", "Pythagoras for non-right triangles"],
   ["Logarithm definition", "log_b(x) = y  ⟺  bʸ = x", "A log asks: what power?"],
   ["Log rules", "log(ab) = log a + log b ,  log(a/b) = log a − log b ,  log(aⁿ) = n·log a", ""],
   ["Compound interest", "A = P(1 + r/n)^(nt)", "n = times compounded per year"],
   ["Exponential growth/decay", "y = a·bˣ", "b>1 grows, 0<b<1 decays"],
   ["Arithmetic sequence", "aₙ = a₁ + (n − 1)d", "Adds d each time"],
   ["Geometric sequence", "aₙ = a₁ · r⁽ⁿ⁻¹⁾", "Multiplies by r each time"],
   ["Probability", "P(event) = favourable ÷ total", "Independent events multiply"],
   ["Combinations", "C(n,r) = n! ÷ (r!(n−r)!)", "Order doesn't matter"],
   ["Permutations", "P(n,r) = n! ÷ (n−r)!", "Order matters"]
 ]}
];
