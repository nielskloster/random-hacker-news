# Getting hacker news stories

This app gets ten random news stories from Hacker News and shows them ranked by
score.

Implementation notes:

- We are using NextJs and Tailwind with Typescript as the basic framework.
- The layout should be somewhat responsive, but is missing some polish.
- Loading data is done using the fetch api. Requests are loaded in parallel, but
  if any of them fail the page will fail to load.
