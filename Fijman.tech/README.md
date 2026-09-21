# Fijman.tech — project structure

```
index.html
css/
  style.css      ← all site styles (extracted from the old inline <style>)
js/
  main.js        ← all site logic (extracted from the old inline <script>)
assets/
  img/
    SiteBG.png
    SiteBG.webp
    SiteBG-mobile.webp
    Fijman_tech.png
```

A tiny inline `<script>` is still left in `<head>` — this is intentional. It
detects the language before first paint to avoid a flash of English text
before switching to Russian. Moving it to an external file would add a
network request and reintroduce that flash, so it stays inline by design.

## Missing files

`favicon-192.png` and `apple-touch-icon.png` are referenced in `<head>`
(now pointing at `assets/img/`) but were never part of the upload — add
them to `assets/img/` yourself, or the icons just won't show.

## The Live Viewer fix

The "Live viewer" window (the block that shows the Gnezdino site live,
inside an iframe with a scaled-down desktop layout) had two sizing systems
that didn't agree with each other:

- The **container** (`.shot-body`) had a height set in CSS via
  `clamp(340px, 62vh, 620px)` — based on viewport height.
- The **iframe wrapper** (`.frame-scale`) was hardcoded to `1440×1300px`
  and scaled down in JS by `containerWidth / 1440` — based on container
  width.

These two numbers had nothing to do with each other, so depending on the
actual aspect ratio of the block, the scaled site was either cropped
(container too short) or left a blank gap underneath (container too tall).

On phones it was worse: below 640px wide, the code skipped scaling
entirely and loaded the iframe at the **container's own pixel size**
(e.g. ~300px), with no scale transform. The embedded site's own mobile
media queries then reacted to that arbitrary tiny width instead of a real
phone width, which is why it looked broken on mobile specifically.

### What changed (`js/main.js`, `scaleLiveFrame()`)

- Two logical frame sizes are now defined: **desktop `1440×900`**, and
  **mobile `390×844`** (a real phone viewport, not the container's own
  size).
- The iframe is scaled by `containerWidth / logicalWidth`, exactly as
  before.
- The container's height is now set explicitly to
  `logicalHeight * scale` — matching the scaled iframe pixel-for-pixel.
  No more cropping, no more empty space, on any screen size.
- The `ResizeObserver` now watches the *parent* of `.shot-body` instead
  of `.shot-body` itself, since the function now changes `.shot-body`'s
  own height (watching the element you're resizing yourself risks
  feedback loops).
- Switching to a "coming soon" project resets the inline height back to
  the CSS default.

### What changed (`css/style.css`)

- `.shot-body` no longer has a fixed/clamped height. It falls back to
  `aspect-ratio: 1440 / 900` (390/844 on phones) for the brief moment
  before JS runs; JS then sets the exact pixel height.
- `.frame-scale` / `.frame-scale iframe` no longer hardcode `1440×1300px`
  — their size is driven entirely by the inline styles JS sets per
  breakpoint.
- Removed the conflicting `.shot-body` height/min-height overrides in the
  tablet and phone media queries, since they're no longer needed.
