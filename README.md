# generativepde.github.io

Source for the hub page at **https://generativepde.github.io**.

It's a single static page with no build step. GitHub Pages serves this repository's `main` branch as is.

| File | What it holds |
|---|---|
| `projects.js` | Site title and tagline, every project card, the people list, and related links. **This is the only file you normally edit.** |
| `index.html` | Layout, styles, and the animated header field. |
| `.nojekyll` | Tells GitHub Pages to serve files as they are. |

## Adding a project

1. Create your code repository from the [project template](https://github.com/generativepde/project-template) ("Use this template" → owner `generativepde`).
2. In this repository, add an entry at the **top** of `PROJECTS` in `projects.js`. Copy an existing entry and fill in:
   - `title`, `authors`, `venue`, `year`
   - `teaser`: a GIF or image URL (or put the file in `assets/` and use `assets/<name>.gif`)
   - `summary`: one or two sentences in plain language
   - `links.paper`, `links.page`, `links.code` (leave `""` to hide a button)
   - `bibtex`
3. Add yourself to `PEOPLE` if you're not there yet.
4. Open a pull request. Check the preview by opening `index.html` in a browser.

## Previewing locally

Open `index.html` directly in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
