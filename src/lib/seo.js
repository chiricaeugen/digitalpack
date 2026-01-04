export function setMeta({ title, description }) {
  if (title) document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && description) meta.setAttribute("content", description);

  // OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogTitle && title) ogTitle.setAttribute("content", title);
  if (ogDesc && description) ogDesc.setAttribute("content", description);
}
/**
 * Compat: unele pagini folosesc setPageSEO().
 * Această funcție setează titlul + meta description + canonical.
 */
export function setPageSEO({ title, description, path }) {
  try {
    if (title) document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
    if (path) {
      const url = new URL(window.location.href);
      const canonicalHref = `${url.origin}${path}`;
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonicalHref);
    }
  } catch (e) {
    // no-op
  }
}

