import { init } from "@plausible-analytics/tracker";

/**
 * Privacy-friendly analytics (self-hosted Plausible, cookieless). The tracker is bundled into the
 * site's own JS (no third-party script) and posts to e.flipping.tools, our own subdomain pointing at
 * the Plausible instance, so there is no well-known analytics host for ad blockers to match.
 * GitHub Pages can't proxy, hence the subdomain instead of a same-origin path.
 * Opt out per browser with `localStorage.plausible_ignore = "true"`.
 */
try {
  init({
    domain: "flipping.tools",
    endpoint: "https://e.flipping.tools/api/event",
    outboundLinks: true,
    bindToWindow: false,
    logging: false,
  });
} catch {
  // Never let analytics break the site.
}
