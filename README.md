# Scroll-Stopping Headline Builder

A dependency-free, non-AI headline generator based on the Conversion Alchemy headline training.

## What it does

- Turns customer-research inputs into formula-based headline directions.
- Generates headline/subheadline pairs or a complete hero direction.
- Prioritizes offer- and proof-led ideas when the inputs support them.
- Checks headline length, estimated line count, relevance, and reason-to-believe support.
- Lets students edit, copy, favorite, and export their shortlist.
- Stores all inputs locally in the browser. No API, database, or account is required.

## Run locally

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8080 --directory headline-generator
```

Then open `http://localhost:8080`.

## Deploy to Cloudflare Pages

This project needs no build command. Set the output directory to `/` when the repository root contains these files, or to `headline-generator` if this folder sits inside a larger repository.

## Deploy to GitHub Pages

Push the contents of this folder to a repository. The included GitHub Actions workflow deploys the site automatically. In the repository's **Settings → Pages**, set the source to **GitHub Actions** if it is not selected automatically.

## Extend the formula library

Formula definitions live at the top of `app.js`. Each formula declares:

- a category;
- required inputs;
- a headline template;
- a subheadline template; and
- the copy framework pairing.

Use `{fieldName}` placeholders that match form field names. The generator only shows formulas whose required claims were supplied by the user.
