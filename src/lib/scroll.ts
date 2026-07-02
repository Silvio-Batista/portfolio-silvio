export const NAVBAR_OFFSET = 88;

export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const top =
    section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}
