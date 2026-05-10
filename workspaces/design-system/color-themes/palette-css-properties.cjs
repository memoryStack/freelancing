const fs = require('fs');

const paletteData = {
  "palettes": {
    "primary": {
      "0": "#000000",
      "5": "#160041",
      "10": "#22005D",
      "15": "#2D1067",
      "20": "#381E72",
      "25": "#432B7E",
      "30": "#4F378A",
      "35": "#5B4397",
      "40": "#6750A4",
      "50": "#8069BF",
      "60": "#9A83DB",
      "70": "#B69DF7",
      "80": "#CFBCFF",
      "90": "#E9DDFF",
      "95": "#F6EEFF",
      "98": "#FDF7FF",
      "99": "#FFFBFF",
      "100": "#FFFFFF"
    },
    "secondary": {
      "0": "#000000",
      "5": "#130E20",
      "10": "#1E192B",
      "15": "#282336",
      "20": "#332D41",
      "25": "#3E384D",
      "30": "#4A4459",
      "35": "#564F65",
      "40": "#625B71",
      "50": "#7B738B",
      "60": "#958DA5",
      "70": "#B0A7C0",
      "80": "#CCC2DC",
      "90": "#E8DEF9",
      "95": "#F6EEFF",
      "98": "#FDF7FF",
      "99": "#FFFBFF",
      "100": "#FFFFFF"
    },
    "tertiary": {
      "0": "#000000",
      "5": "#240612",
      "10": "#31101D",
      "15": "#3D1B27",
      "20": "#4A2532",
      "25": "#56303D",
      "30": "#633B48",
      "35": "#704654",
      "40": "#7E5260",
      "50": "#996A78",
      "60": "#B58392",
      "70": "#D29DAC",
      "80": "#EFB8C8",
      "90": "#FFD9E3",
      "95": "#FFECF0",
      "98": "#FFF8F8",
      "99": "#FFFBFF",
      "100": "#FFFFFF"
    },
    "neutral": {
      "0": "#000000",
      "5": "#111111",
      "10": "#1C1B1C",
      "15": "#262526",
      "20": "#313030",
      "25": "#3C3B3B",
      "30": "#484646",
      "35": "#545252",
      "40": "#605E5E",
      "50": "#797676",
      "60": "#939090",
      "70": "#ADAAAA",
      "80": "#C9C6C5",
      "90": "#E5E1E1",
      "95": "#F4F0EF",
      "98": "#FDF8F8",
      "99": "#FFFBFF",
      "100": "#FFFFFF"
    },
    "neutral-variant": {
      "0": "#000000",
      "5": "#111112",
      "10": "#1C1B1C",
      "15": "#262526",
      "20": "#313031",
      "25": "#3C3B3C",
      "30": "#484647",
      "35": "#545253",
      "40": "#605E5F",
      "50": "#797677",
      "60": "#939091",
      "70": "#AEAAAB",
      "80": "#C9C5C6",
      "90": "#E6E1E2",
      "95": "#F4F0F0",
      "98": "#FDF8F9",
      "99": "#FFFBFF",
      "100": "#FFFFFF"
    }
  }
};

function generatePaletteCSS(palettes, formatOptions = {}) {
  const {
    indent = '  ',
    newline = '\n',
    sortKeys = true
  } = formatOptions;
  
  let css = ':root {' + newline;
  
  for (const [paletteName, colors] of Object.entries(palettes)) {
    const cssVarName = paletteName;
    let keys = Object.keys(colors);
    
    if (sortKeys) {
      keys.sort((a, b) => Number(a) - Number(b));
    }
    
    for (const key of keys) {
      const colorValue = colors[key];
      css += `${indent}--md-ref-palette-${cssVarName}${key}: ${colorValue};${newline}`;
    }
    
    // Add an empty line between palette categories for better readability
    css += newline;
  }
  
  css += '}' + newline;
  return css;
}

// Generate with default options
const cssContent = generatePaletteCSS(paletteData.palettes);

// Write to file
fs.writeFileSync('palette.css', cssContent, 'utf8');

console.log('✅ palette.css has been generated successfully!');

// Also log the generated content
console.log('\n📄 Generated content:');
console.log('─'.repeat(60));
console.log(cssContent);

// Optional: Create a minified version
const minifiedCSS = generatePaletteCSS(paletteData.palettes, {
  indent: '',
  newline: '',
  sortKeys: true
});
fs.writeFileSync('palette.min.css', minifiedCSS, 'utf8');
console.log('\n✅ palette.min.css (minified version) also generated!');