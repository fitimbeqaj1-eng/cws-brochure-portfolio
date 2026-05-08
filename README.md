# CWS Brochure Portfolio

A static CWS brochure portfolio website for sharing polished brochure previews with clients without sending production source files directly.

## Project Structure

```text
index.html
styles.css
script.js
assets/
  images/
    thumbnails/
    mockups/
    logos/
    icons/
  pdfs/
    brochures/
```

## Run Locally

Open `index.html` directly in a browser, or run a small local server from this folder:

```bash
python3 -m http.server 3000
```

Then open:

```text
http://127.0.0.1:3000/
```

## Add New Brochures

Place preview images in:

```text
assets/images/thumbnails/
```

Place brochure PDF files in:

```text
assets/pdfs/brochures/
```

Presentation mockups go in:

```text
assets/images/mockups/
```

The outside mockup can also be used as the card thumbnail by setting `thumbnail` to the outside mockup path.

Then add one new item to the `brochures` array at the top of `script.js`:

```js
{
  title: "New Brochure Name",
  category: "Service category",
  format: "Trifold brochure",
  tags: ["Trifold brochure", "Outside + inside"],
  thumbnail: `${IMAGE_PATH}/new-brochure-outside.png`,
  pdf: `${PDF_PATH}/new-brochure-outside.pdf`,
  mockup: "",
  sides: {
    outside: `${IMAGE_PATH}/new-brochure-outside.png`,
    inside: `${IMAGE_PATH}/new-brochure-inside.png`,
  },
  pdfs: {
    outside: `${PDF_PATH}/new-brochure-outside.pdf`,
    inside: `${PDF_PATH}/new-brochure-inside.pdf`,
  },
}
```

Trifold brochures automatically appear in the interactive carousel. All brochures appear in the portfolio gallery.


## Brochure Detail Pages

Gallery cards on the homepage open the reusable detail page:

```text
brochure.html?id=able-minds-aba
```

The page is powered by the same `brochures` data in `script.js`. It shows the brand name, category, format, size, outside and inside mockup views, and an interactive preview for that brochure.

When adding a new brochure, you only need to add the brochure object in `script.js`; the homepage card and detail page URL are generated automatically.


## Imported Desktop Assets

The latest trifold assets were copied from:

```text
/Users/fitim/Desktop/trifold-assets/
```

Original Desktop files were not moved or deleted. The project copies live in:

```text
assets/images/mockups/
assets/pdfs/brochures/
```


## Interactive Preview Images

Interactive folding panels use flat preview images generated from the brochure PDFs and stored in:

```text
assets/images/thumbnails/
```

Presentation cards and detail-page mockups use the PNG mockups stored in:

```text
assets/images/mockups/
```

Interactive previews use PDF-derived flat images so the folding layout stays accurate.
