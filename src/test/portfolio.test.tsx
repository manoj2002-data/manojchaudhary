import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { buildWhatsAppLink, content, navItems } from "@/data/portfolio";
import { routeTree } from "@/routeTree.gen";

describe("WhatsApp contact link", () => {
  it("keeps only digits from the phone number", () => {
    expect(buildWhatsAppLink("+977 980-000 0000")).toBe("https://wa.me/9779800000000");
  });

  it("encodes the prefilled message", () => {
    expect(buildWhatsAppLink("977", "Hi Manoj!")).toBe("https://wa.me/977?text=Hi%20Manoj!");
  });
});

describe("Site pages", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it.each(["/about", "/skills", "/projects", "/timeline", "/contact"])(
    "%s has its own page",
    (path) => {
      expect(router.matchRoutes(path).at(-1)?.routeId).toBe(path);
    },
  );

  it("every menu item points to its own page", () => {
    expect(navItems.map((n) => n.to)).toEqual([
      "/about",
      "/skills",
      "/projects",
      "/timeline",
      "/contact",
    ]);
  });
});

describe("Language toggle content", () => {
  it("German and English have the same homepage sections", () => {
    expect(content.de.intro).toHaveLength(content.en.intro.length);
    expect(content.de.skills.items.map((s) => s.id)).toEqual(content.en.skills.items.map((s) => s.id));
    expect(content.de.projects.items.map((p) => p.id)).toEqual(
      content.en.projects.items.map((p) => p.id),
    );
  });
});
