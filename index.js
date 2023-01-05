const regions = 'sec,geo,sec_all'.split(',')
const horizons = 'd1,w1,w4,w13,w26,w52,ytd'.split(',')

const urlFilenames = [];

for (const region of regions) {
  const map = `https://finviz.com/maps/${region}.json?rev=320`
  urlFilenames.push([map, `map-${region}.json`])
  for (const horizon of horizons) {
    const perf =
        `https://finviz.com/api/map_perf.ashx?t=${region}&st=${horizon}`
    urlFilenames.push([perf, `perf-${region}-${horizon}.json`]);
  }
}

for (const [url, filename] of urlFilenames) {
  console.log(`curl "${url}" | jq . > ${filename}`)
  console.log('sleep 2')
}