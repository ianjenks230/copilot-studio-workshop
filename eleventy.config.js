import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownItAnchor from "markdown-it-anchor";
import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  // Syntax highlighting for code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Custom Markdown config with anchor links
  const mdOptions = {
    html: true,
    breaks: false,
    linkify: true,
  };

  const mdAnchorOpts = {
    permalink: markdownItAnchor.permalink.headerLink({
      safariReaderFix: true,
      class: "header-anchor",
    }),
    level: [2, 3, 4],
    slugify: (s) =>
      s
        .trim()
        .toLowerCase()
        .replace(/[\s+]/g, "-")
        .replace(/[^\w-]/g, ""),
  };

  const md = markdownIt(mdOptions).use(markdownItAnchor, mdAnchorOpts);
  eleventyConfig.setLibrary("md", md);

  // Collection: all workshop pages sorted by order
  eleventyConfig.addCollection("workshopPages", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("workshop")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  // Filter to extract headings from content for "On this page" TOC
  eleventyConfig.addFilter("toc", function (content) {
    if (!content) return [];
    const headings = [];
    const regex = /<h([23])\s+id="([^"]+)"[^>]*>(.*?)<\/h[23]>/gi;
    let match;
    while ((match = regex.exec(content)) !== null) {
      headings.push({
        level: parseInt(match[1]),
        id: match[2],
        text: match[3].replace(/<[^>]+>/g, "").trim(),
      });
    }
    return headings;
  });

  // Filter for previous/next navigation
  eleventyConfig.addFilter("getPreviousPage", function (page, collection) {
    const index = collection.findIndex((p) => p.url === page.url);
    return index > 0 ? collection[index - 1] : null;
  });

  eleventyConfig.addFilter("getNextPage", function (page, collection) {
    const index = collection.findIndex((p) => p.url === page.url);
    return index < collection.length - 1 ? collection[index + 1] : null;
  });

  // Date filter
  eleventyConfig.addFilter("dateDisplay", function (date) {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
}
