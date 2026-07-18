// BrightSprouts Academy — Plant Life Cycle Game.
// Children pick a plant, then water it and give it sunshine to grow it through the six real
// stages of a flowering plant's life cycle. All art is hand-drawn SVG (viewBox 0 0 220 260),
// composed on the fly per stage. Biology is kept accurate — see PLANT_STAGES.

// The six stages of a flowering plant's life cycle, in the correct order.
// {flower} and {fruit} are replaced with each plant's own words.
const PLANT_STAGES = [
  { key:"seed",   name:"Seed",         fact:"A seed is a tiny plant fast asleep, with its own packed lunch of stored food tucked inside a tough coat. Give it water and warmth to wake it up!" },
  { key:"germ",   name:"Germination",  fact:"The seed wakes up! The root pushes DOWN into the soil to drink, and the little shoot reaches UP toward the light." },
  { key:"seedling",name:"Seedling",    fact:"The first leaves open and turn to face the sun. Now the little plant makes its own food from sunlight — that clever trick is called photosynthesis." },
  { key:"young",  name:"Young Plant",  fact:"Roots drink water and minerals from the soil while the leaves soak up sunshine. The plant grows taller and stronger every single day." },
  { key:"flower", name:"{FLOWER}",     fact:"{flower} open up to attract bees and butterflies. The visitors carry pollen from flower to flower — and that is called pollination." },
  { key:"fruit",  name:"{FRUIT}",      fact:"After pollination, {fruit} grow with brand-new seeds hidden inside. The seeds spread out to find fresh soil — and the whole life cycle begins all over again!" }
];

// Each plant: colours, body plan, and its own words for the flower & fruit stages.
const PLANTS = [
  { slug:"sunflower", name:"Sunflower", emoji:"🌻", plan:"flower",
    stem:"#4e9f3d", leaf:"#6bcb77", leafDark:"#3f8f4a",
    seedName:"a striped seed", flowerLabel:"Flowers", fruitLabel:"Seeds",
    flower:"#ffd166", flowerMid:"#c9821f", fruit:"#8b5a2b" },
  { slug:"rose", name:"Rose", emoji:"🌹", plan:"flower",
    stem:"#3f8f4a", leaf:"#6bcb77", leafDark:"#2f6b38",
    seedName:"a tiny seed", flowerLabel:"Blooms", fruitLabel:"Rose hips",
    flower:"#ff6b6b", flowerMid:"#c73c3c", fruit:"#e0503a" },
  { slug:"tomato", name:"Tomato", emoji:"🍅", plan:"flower",
    stem:"#4e9f3d", leaf:"#6bcb77", leafDark:"#3f8f4a",
    seedName:"a fuzzy seed", flowerLabel:"Flowers", fruitLabel:"Tomatoes",
    flower:"#ffd166", flowerMid:"#c9821f", fruit:"#ff5b4a" },
  { slug:"bean", name:"Bean", emoji:"🫘", plan:"flower",
    stem:"#5aa646", leaf:"#8fd694", leafDark:"#3f8f4a",
    seedName:"a smooth bean", flowerLabel:"Flowers", fruitLabel:"Bean pods",
    flower:"#f7d9ff", flowerMid:"#c39bff", fruit:"#6bcb77" },
  { slug:"apple", name:"Apple Tree", emoji:"🍎", plan:"tree",
    stem:"#8b5a2b", leaf:"#6bcb77", leafDark:"#3f8f4a",
    seedName:"an apple pip", flowerLabel:"Blossoms", fruitLabel:"Apples",
    flower:"#ffd9e5", flowerMid:"#ff8fb3", fruit:"#ff5b4a" },
  { slug:"oak", name:"Oak Tree", emoji:"🌳", plan:"tree",
    stem:"#8b5a2b", leaf:"#6bcb77", leafDark:"#2f6b38",
    seedName:"an acorn", flowerLabel:"Catkins", fruitLabel:"Acorns",
    flower:"#d7e8a0", flowerMid:"#a9c162", fruit:"#a9752e" }
];

function plantStageLabel(plant, i) {
  return PLANT_STAGES[i].name.replace("{FLOWER}", plant.flowerLabel).replace("{FRUIT}", plant.fruitLabel);
}
function plantStageFact(plant, i) {
  return PLANT_STAGES[i].fact
    .replace("{flower}", plant.flowerLabel).replace("{fruit}", plant.fruitLabel.toLowerCase());
}

// ---- drawing helpers ----
function pgLeaf(x, y, dir, w, c, cd) {
  const h = w * 0.55;
  return `<path d="M${x} ${y} q ${dir * w * 0.55} ${-h} ${dir * w} ${-h * 0.25} q ${-dir * w * 0.35} ${h * 0.7} ${-dir * w} ${h * 0.25} z"
            fill="${c}" stroke="${cd}" stroke-width="1.6" stroke-linejoin="round"/>`;
}
function pgRoots(depth) {
  return `<path d="M110 206 L110 ${206 + depth}" stroke="#c68a5e" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M110 ${206 + depth * 0.5} q -14 6 -20 ${depth * 0.4}" stroke="#c68a5e" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M110 ${206 + depth * 0.6} q 14 6 20 ${depth * 0.35}" stroke="#c68a5e" stroke-width="2" fill="none" stroke-linecap="round"/>`;
}

// Build the whole scene for a plant at a given stage.
function plantScene(plant, stage) {
  const sunBright = 0.35 + stage * 0.13;            // sun brightens as the plant grows
  let sky = `<rect width="220" height="260" fill="#dff1ff"/>
    <circle cx="182" cy="34" r="20" fill="#ffd166" opacity="${sunBright.toFixed(2)}" class="pg-sun"/>
    <g class="sc-float"><ellipse cx="46" cy="40" rx="20" ry="11" fill="#fff"/><ellipse cx="62" cy="34" rx="13" ry="9" fill="#fff"/></g>
    <path d="M0 200 Q110 190 220 200 L220 260 L0 260 Z" fill="#a9752e"/>
    <path d="M0 200 Q110 190 220 200 L220 208 Q110 198 0 208 Z" fill="#8b5a2b"/>`;

  let art = "";
  if (stage === 0) {
    // seed resting in the soil
    art = `<ellipse cx="110" cy="200" rx="9" ry="6" fill="${plant.fruit}" stroke="#5c3a1a" stroke-width="1.5" transform="rotate(-20 110 200)"/>
           <path d="M104 199 q6 -3 12 0" stroke="#5c3a1a" stroke-width="1" fill="none"/>`;
  } else if (stage === 1) {
    // germination: root down, tiny shoot up
    art = pgRoots(30) +
      `<path d="M110 206 C 108 198, 112 194, 110 188" stroke="${plant.stem}" stroke-width="4" fill="none" stroke-linecap="round"/>
       ${pgLeaf(110, 190, 1, 12, plant.leaf, plant.leafDark)}`;
  } else {
    // stages 2..5 — a growing plant
    art += pgRoots(Math.min(42, 24 + stage * 6));
    if (plant.plan === "flower") {
      const H = [0, 0, 46, 96, 134, 138][stage];
      const topY = 206 - H;
      art += `<path d="M110 206 C 106 ${206 - H * 0.4}, 114 ${206 - H * 0.7}, 110 ${topY}"
                stroke="${plant.stem}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      const pairs = stage >= 4 ? 3 : stage === 3 ? 2 : 1;
      for (let p = 0; p < pairs; p++) {
        const ly = 206 - H * (0.35 + p * 0.28);
        art += pgLeaf(110, ly, -1, 20, plant.leaf, plant.leafDark) + pgLeaf(110, ly, 1, 20, plant.leaf, plant.leafDark);
      }
      if (stage === 4) art += plantBloom(plant, 110, topY);
      if (stage === 5) art += plantFlowerFruit(plant, 110, topY);
    } else {
      // tree
      const trunkH = [0, 0, 30, 58, 78, 80][stage];
      const canopyR = [0, 0, 12, 26, 38, 40][stage];
      const trunkTop = 206 - trunkH;
      art += `<path d="M103 206 L${107 - (canopyR > 20 ? 2 : 0)} ${trunkTop} L${113 + (canopyR > 20 ? 2 : 0)} ${trunkTop} L117 206 Z"
                fill="${plant.stem}" stroke="#5c3a1a" stroke-width="1.5"/>`;
      if (canopyR > 0) {
        const cy = trunkTop - canopyR * 0.4;
        art += `<circle cx="110" cy="${cy}" r="${canopyR}" fill="${plant.leaf}" stroke="${plant.leafDark}" stroke-width="2"/>
                <circle cx="${110 - canopyR * 0.7}" cy="${cy + 4}" r="${canopyR * 0.6}" fill="${plant.leaf}" stroke="${plant.leafDark}" stroke-width="2"/>
                <circle cx="${110 + canopyR * 0.7}" cy="${cy + 4}" r="${canopyR * 0.6}" fill="${plant.leaf}" stroke="${plant.leafDark}" stroke-width="2"/>`;
        const spots = [[-canopyR * 0.5, cy - canopyR * 0.3], [canopyR * 0.5, cy], [0, cy - canopyR * 0.5], [-canopyR * 0.2, cy + canopyR * 0.4], [canopyR * 0.6, cy - canopyR * 0.4]];
        if (stage === 4) spots.forEach((s, i) => art += `<circle cx="${(110 + s[0]).toFixed(0)}" cy="${s[1].toFixed(0)}" r="4" fill="${plant.flower}" stroke="${plant.flowerMid}" stroke-width="1.4" class="pg-tw" style="animation-delay:${i * 0.2}s"/>`);
        if (stage === 5) spots.forEach(s => art += plantTreeFruit(plant, 110 + s[0], s[1]));
      }
    }
  }
  return { sky, art };
}

// blooms for flower-plan plants (stage 4)
function plantBloom(plant, cx, cy) {
  if (plant.slug === "sunflower") {
    let petals = "";
    for (let a = 0; a < 12; a++) { const r = a * 30 * Math.PI / 180; petals += `<ellipse cx="${(cx + Math.cos(r) * 16).toFixed(1)}" cy="${(cy + Math.sin(r) * 16).toFixed(1)}" rx="8" ry="4" fill="${plant.flower}" stroke="${plant.flowerMid}" stroke-width="1.2" transform="rotate(${a * 30} ${(cx + Math.cos(r) * 16).toFixed(1)} ${(cy + Math.sin(r) * 16).toFixed(1)})"/>`; }
    return `<g class="pg-sway" style="transform-origin:${cx}px ${cy + 16}px">${petals}<circle cx="${cx}" cy="${cy}" r="11" fill="${plant.flowerMid}"/><circle cx="${cx}" cy="${cy}" r="7" fill="#6b4a1f"/></g>`;
  }
  if (plant.slug === "rose") {
    return `<g class="pg-sway" style="transform-origin:${cx}px ${cy + 12}px"><circle cx="${cx}" cy="${cy}" r="13" fill="${plant.flower}" stroke="${plant.flowerMid}" stroke-width="1.6"/>
      <path d="M${cx} ${cy - 8} a8 8 0 1 1 -7 12 a5 5 0 1 0 5 -7" fill="none" stroke="${plant.flowerMid}" stroke-width="1.6"/><circle cx="${cx}" cy="${cy}" r="3.5" fill="${plant.flowerMid}"/></g>`;
  }
  // tomato / bean — clusters of small flowers
  let cl = "";
  [[-10, 4], [10, 2], [0, -8]].forEach((o, i) => {
    let pet = "";
    for (let a = 0; a < 5; a++) { const r = a * 72 * Math.PI / 180; pet += `<ellipse cx="${(cx + o[0] + Math.cos(r) * 5).toFixed(1)}" cy="${(cy + o[1] + Math.sin(r) * 5).toFixed(1)}" rx="3.5" ry="2" fill="${plant.flower}" stroke="${plant.flowerMid}" stroke-width="1"/>`; }
    cl += `<g class="pg-tw" style="animation-delay:${i * 0.25}s">${pet}<circle cx="${cx + o[0]}" cy="${cy + o[1]}" r="2.4" fill="${plant.flowerMid}"/></g>`;
  });
  return cl;
}
// fruit for flower-plan plants (stage 5)
function plantFlowerFruit(plant, cx, cy) {
  if (plant.slug === "sunflower") {
    let seeds = "";
    for (let a = 0; a < 12; a++) { const r = a * 30 * Math.PI / 180; seeds += `<ellipse cx="${(cx + Math.cos(r) * 15).toFixed(1)}" cy="${(cy + Math.sin(r) * 15).toFixed(1)}" rx="7" ry="3.5" fill="#d9a441" stroke="${plant.flowerMid}" stroke-width="1" transform="rotate(${a * 30} ${(cx + Math.cos(r) * 15).toFixed(1)} ${(cy + Math.sin(r) * 15).toFixed(1)})"/>`; }
    return `${seeds}<circle cx="${cx}" cy="${cy}" r="13" fill="#6b4a1f"/>` +
      "<g>" + Array.from({ length: 14 }, (_, i) => { const r = i * 25.7 * Math.PI / 180, rr = 4 + (i % 3) * 2.5; return `<circle cx="${(cx + Math.cos(r) * rr).toFixed(1)}" cy="${(cy + Math.sin(r) * rr).toFixed(1)}" r="1.6" fill="#3a2712"/>`; }).join("") + "</g>";
  }
  if (plant.slug === "bean") {
    return [[-12, 2], [8, 6], [0, -6]].map((o, i) => `<path d="M${cx + o[0]} ${cy + o[1]} q 6 14 -2 20 q -6 -8 2 -20 z" fill="${plant.fruit}" stroke="${plant.leafDark}" stroke-width="1.4" class="pg-float" style="animation-delay:${i * 0.3}s"/>`).join("");
  }
  if (plant.slug === "rose") {
    return [[-10, 2], [10, 4], [0, -6]].map((o, i) => `<ellipse cx="${cx + o[0]}" cy="${cy + o[1]}" rx="5" ry="7" fill="${plant.fruit}" stroke="#a13a28" stroke-width="1.3" class="pg-float" style="animation-delay:${i * 0.3}s"/><path d="M${cx + o[0]} ${cy + o[1] - 7} l0 -3" stroke="#3f8f4a" stroke-width="1.4"/>`).join("");
  }
  // tomato
  return [[-11, 4], [11, 6], [0, -6]].map((o, i) => `<circle cx="${cx + o[0]}" cy="${cy + o[1]}" r="8" fill="${plant.fruit}" stroke="#c73c2c" stroke-width="1.4" class="pg-float" style="animation-delay:${i * 0.3}s"/><path d="M${cx + o[0] - 3} ${cy + o[1] - 8} l3 3 3 -3" stroke="#3f8f4a" stroke-width="1.6" fill="none"/>`).join("");
}
// fruit dotted in a tree canopy (stage 5)
function plantTreeFruit(plant, x, y) {
  if (plant.slug === "oak") {
    return `<ellipse cx="${x.toFixed(1)}" cy="${(y + 2).toFixed(1)}" rx="4" ry="5.5" fill="${plant.fruit}" stroke="#6b4a1f" stroke-width="1.2"/>
            <path d="M${(x - 4).toFixed(1)} ${(y - 3).toFixed(1)} a4 3 0 0 0 8 0 z" fill="#6b4a1f"/>`;
  }
  return `<circle cx="${x.toFixed(1)}" cy="${(y + 2).toFixed(1)}" r="5.5" fill="${plant.fruit}" stroke="#c73c2c" stroke-width="1.3" class="pg-tw"/>
          <path d="M${x.toFixed(1)} ${(y - 4).toFixed(1)} l0 -3" stroke="#3f8f4a" stroke-width="1.6"/>`;
}
