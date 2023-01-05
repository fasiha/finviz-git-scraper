var fs = require('fs');
const o = JSON.parse(fs.readFileSync('map-sec_all.json', 'utf8'));

o.children.sort((a, b) => a.name.localeCompare(b.name));
const lines = [];
for (const top of o.children) {
  const subLines = [];
  let n = 0;
  for (const second of top.children) {
    n += second.children.length;
    const secondHeader = `  - ${second.name} (${second.children.length})`;
    subLines.push(secondHeader);
  }
  subLines.sort();
  lines.push(`- ${top.name} (${n})`);
  lines.push(...subLines);
}
console.log(lines.join('\n'));
