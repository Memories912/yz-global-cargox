# Design QA

- Source visual truth: `/Users/rose/Documents/Codex/2026-07-03/b2b-y-z-global-cargox-group/work/reference/control-tower.png`
- Implementation screenshot: `/Users/rose/Documents/Codex/2026-07-03/b2b-y-z-global-cargox-group/work/qa/home-hero-desktop-final.png`
- Viewport: 1440 × 1000 desktop; supplementary checks at 1024 × 768, 390 × 844 and 375 × 812
- State: Home route, initial loaded state, hero video ready/fallback content visible

## Full-view Comparison Evidence

`/Users/rose/Documents/Codex/2026-07-03/b2b-y-z-global-cargox-group/work/qa/design-comparison.png`

The implementation preserves the source composition: two-column cinematic hero, high-contrast condensed headline, yellow primary action, operational map, dark teal overlay and a structured process rail. The implementation intentionally keeps the hero at a true full viewport, placing the larger Fast Quote Process section immediately below the fold as required by the product brief.

## Focused Region Comparison Evidence

- Title and hierarchy: `/Users/rose/Documents/Codex/2026-07-03/b2b-y-z-global-cargox-group/work/qa/focused-title-comparison.png`
- CTA, supporting copy and map: `/Users/rose/Documents/Codex/2026-07-03/b2b-y-z-global-cargox-group/work/qa/focused-map-comparison.png`

## Required Fidelity Surfaces

- Fonts and typography: Barlow Condensed 800 matches the source's industrial display voice. Helvetica/Arial body copy retains readable hierarchy and appropriate line length. Mobile headings wrap inside the viewport at 375px.
- Spacing and layout rhythm: Hero grid, left/right balance, CTA spacing and bottom process rail match the visual target. Content sections use clear 24–32px internal spacing and generous section gaps without nested cards.
- Colors and visual tokens: `#002A35`, `#FFDA00`, white, `#F7F7F2` and limited `#6682C2` are used consistently. Text contrast meets the intended AA target.
- Image quality and asset fidelity: The user-provided hero video remains the primary background. The unavailable remote map placeholder was replaced with a local high-resolution map asset derived from the approved visual target, with Motion path animation layered above it.
- Copy and content: Importer outcomes, 24-hour quotation, supplier verification, certification, quality, warehousing, after-sales and Korea/Japan focus are all represented as specified.

## Findings

No actionable P0, P1 or P2 issues remain.

## Patches Made Since Previous Pass

- Replaced the unavailable remote map image with a local production asset.
- Removed transient horizontal overflow caused by off-screen market-card entrance transforms.
- Added React Router future flags to remove development warnings.
- Kept off-screen content visibly rendered before its entrance motion to avoid blank full-page/headless captures.
- Verified form success state and mobile-menu open/close state.

## Follow-up Polish

- P3: The live video frame can be lighter than the static reference at some timestamps; the layered teal masks maintain copy contrast across the supplied footage.
- P3: Real WhatsApp, WeChat and KakaoTalk identifiers should replace the editable placeholder labels before launch.

## Final Result

final result: passed

## Localization QA — 2026-07-03

- Japanese desktop hero: `/Users/rose/Documents/Codex/2026-07-03/b2b-y-z-global-cargox-group/work/qa/localization/home-ja-desktop.png`
- Korean desktop hero: `/Users/rose/Documents/Codex/2026-07-03/b2b-y-z-global-cargox-group/work/qa/localization/home-ko-desktop.png`
- Chinese mobile hero: `/Users/rose/Documents/Codex/2026-07-03/b2b-y-z-global-cargox-group/work/qa/localization/home-zh-mobile.png`
- Japanese mobile hero: `/Users/rose/Documents/Codex/2026-07-03/b2b-y-z-global-cargox-group/work/qa/localization/home-ja-mobile.png`
- Japanese Core Services page: `/Users/rose/Documents/Codex/2026-07-03/b2b-y-z-global-cargox-group/work/qa/localization/services-ja-desktop.png`

The home, process, solutions, services and contact routes were checked in localized modes. Quote steps, pain/solution cards, guarantees, services, market details, process steps, solution rows, form labels, placeholders, CTA copy and footer copy now use one language consistently. Brand names, certification acronyms and platform names remain unchanged intentionally.

At 1024px, the Japanese hero headline ends at x=519 and the right-side copy begins at x=615, leaving approximately 96px of separation. At 390px the content stacks with no overlap or horizontal overflow. The `/services` route passes desktop and mobile checks.

final result: passed
