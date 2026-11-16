import { describe, expect, it } from "vitest";

import { buildGmailLink, buildMailtoLink, contactSchema } from "@/lib/contact";

const msg = { name: "Anna", email: "anna@example.com", message: "Hallo Manoj" };

describe("Contact form", () => {
  it("sends messages to manojchaudhary2.data@gmail.com", () => {
    expect(new URL(buildGmailLink(msg, "Hi")).searchParams.get("to")).toBe("manojchaudhary2.data@gmail.com");
    expect(buildMailtoLink(msg, "Hi").startsWith("mailto:manojchaudhary2.data@gmail.com?")).toBe(true);
  });

  it("puts the visitor's message, name and email in the email body", () => {
    expect(new URL(buildGmailLink(msg, "Hi")).searchParams.get("body")).toBe("Hallo Manoj\n\n— Anna\nanna@example.com");
  });

  it("rejects an empty name, an invalid email or an empty message", () => {
    expect(contactSchema.safeParse({ ...msg, name: "  " }).success).toBe(false);
    expect(contactSchema.safeParse({ ...msg, email: "not-an-email" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...msg, message: "" }).success).toBe(false);
    expect(contactSchema.safeParse(msg).success).toBe(true);
  });
});
