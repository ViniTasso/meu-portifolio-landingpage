# AI Context — 51dd340f-44ca-4d32-a2fd-a61a9a945f9b

> Auto-generated. Single source of truth for AI design replication.


## 1. Site

- **Type:** spa
- **Framework:** next
- **Features:** none
- **Assets:** png:50, jpg:38, js:24, svg:16, css:5, html:4, woff:4, eot:4
- **Bundles:** CSS 17 arquivo(s) | JS 29 arquivo(s)


## 2. Design Tokens

### Color Palette

```css
#32373c  #13232a  #ff0  #c0c0c0
#d31818  #757171  #eceae0  #f6f6f6
#86988b  #7e929c  #839699  #796841
#a29e9e  #464646  #617275  #00a0d2
#46b450  #dc3232  #f56e28  #ffb900
#23282d  #fbfbfc
```

```css
rgba(0, 0, 0, 0)
rgba(134, 152, 139, 0)
rgb(0, 0, 238)
rgb(236, 234, 224)
rgb(255, 255, 255)
rgb(0, 0, 0)
```

### Breakpoints (Media Queries)

```css
@media only screen and (min-width:768px)
@media all and (max-width:320px)
@media all and (max-width:440px)
@media all and (max-height:450px) and (max-width:825px) and (min-width:450px) and (orientation:landscape)
@media all and (max-width:460px)
@media all and (min-width:460px)
@media all and (max-width:580px)
@media all and (max-width:750px)
@media all and (max-width:767px)
@media all and (min-width:800px)
@media all and (max-width:800px)
@media all and (min-width:800px) and (max-width:1100px)
@media all and (max-width:920px)
@media all and (min-width:1024px) and (max-width:1440px)
@media all and (max-width:1025px)
@media all and (max-width:1100px)
@media all and (max-width:1200px)
@media all and (max-width:1450px)
@media all and (min-width:2000px)
@media (prefers-reduced-motion:reduce)
```

### CSS Files

- `assets/css/base.css`
- `assets/css/classic-themes.min.css`
- `assets/css/en_style_1.css`
- `assets/css/fonts.css`
- `assets/css/globals.css`
- `assets/css/important.css`
- `assets/css/index_style_1.css`
- `assets/css/keyframes.css`
- `assets/css/medias/base_medias.css`
- `assets/css/selectors.css`
- `assets/css/style.min.css`
- `assets/css/style_001.css`
- `assets/css/style_002.css`
- `assets/css/styles.css`
- `assets/css/styles_002.css`
- `assets/css/styles_003.css`
- `assets/css/styles_004.css`

### Font Faces

- **PFGrandGothikWide** weight:normal style:normal → `PFGrandGothikWide-Regular.eot`
- **PFGrandGothikWideBold** weight:normal style:normal → `PFGrandGothikWide-Bold.eot`
- **PFGrandGothikCompressed** weight:400 style:normal → `PFGrandGothikCompressed-Reg.eot`
- **icomoon** weight:normal style:normal → `icomoon_ef8a6078b593.eot`

### Keyframes

```css
@keyframes textLoop {
}
@keyframes mouse-scroll {
  0%,
    100% {
      -moz-transform: translateY(-4px);
      transform: translateY(-4px)
    }
  
    50% {
      -moz-transform: translateY(15%);
      transform: translateY(15%)
    }
}
@keyframes marqueeTop {
}
@keyframes marqueeBottom {
}
@keyframes spin {
  from {
      transform: rotate(0deg)
    }
  
    to {
      transform: rotate(360deg)
    }
}
@keyframes blink {
  from {
      opacity: 0
    }
  
    50% {
      opacity: 1
    }
  
    to {
      opacity: 0
    }
}
```


## 3. Computed Typography

> Values computed by the browser (source of truth over CSS declarations).

| Selector | Font | Size | Weight | Line-H | Letter-S | Transform | Color |
|---|---|---|---|---|---|---|---|
| `h1` | PFGrandGothikWide | 20px | 400 |  |  | none | rgb(0, 0, 0) |
| `h2` | PFGrandGothikWide | 20px | 400 |  |  | none | rgb(236, 234, 224) |
| `h3` | PFGrandGothikWideBold | 26px | 400 |  |  | none | rgb(0, 0, 0) |
| `a` | PFGrandGothikWide | 18px | 400 | 26px |  | none | rgb(0, 0, 238) |
| `span` | PFGrandGothikWide | 20px | 400 |  |  | none | rgb(236, 234, 224) |


## 4. Runtime Files

- JS bundles: `CustomEase.min.js`, `SplitText.min.js`, `TweenMax.min.js`, `app.js`, `blankshield.min.js`, `configuration.js`, `frame-modern.js`, `functions.js`, `index.js`, `index_2.js`, `index_script_5.js`, `jquery-migrate.min.js`


## 7. Assets

- Images: 104 | Fonts: 7 | 3D Models: 0 | Animations: 2
- **By type:** png:50, jpg:38, js:24, svg:16, css:5, html:4, woff:4, eot:4


## 8. Rules for AI

1. **DO NOT** invent colors, fonts or spacing outside the tokens above
2. **DO NOT** normalize to Bootstrap/Tailwind defaults
3. **DO** use exact palette, font families and keyframes extracted
4. **DO** preserve visual DNA (dark site → keep dark, neon → keep neon)
5. **DO** use computed styles as source of truth for layout/spacing
6. **DO** maintain the component hierarchy from the structure section

---

*Auto-generated — all data evidence-based, no assumptions.*
