# Finviz Git Scraper

Gitscraping ([explanation](https://simonwillison.net/2020/Oct/9/git-scraping/)) the [Finviz Map](https://finviz.com/map.ashx) data.

Three regions:
- S&P 500 (`sec`)
- World ADRs (`geo`)
- Combined (`sec_all`)

Seven time horizons (for now, we might reduce these to daily once we have a year's worth of daily data?):
- daily
- weekly
- monthly
- quarterly
- half-year
- annual
- year to date (YTD)

GitHub Actions will download all twenty-four combinations (seven horizons and one sector breakdowns, times three regions) on weekdays a little before midnight UTC (which will always be after the close in New York).

There's a tiny little JS/Node script in `index.js` to generate all combinations and the shell command for GitHub Actions to run.
