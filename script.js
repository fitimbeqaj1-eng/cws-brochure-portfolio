const IMAGE_PATH = "assets/images/thumbnails";
const MOCKUP_PATH = "assets/images/mockups";
const PDF_PATH = "assets/pdfs/brochures";

// thumbnails/sides are PDF-derived flat previews for the folding tool.
// mockups are presentation PNGs used for cards and detail-page mockup sections.
const brochures = [
  {
    title: "A Brighter Alternative BH",
    category: "Behavioral health",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/a-brighter-alternative-outside.png`,
    pdf: `${PDF_PATH}/a-brighter-alternative-outside.pdf`,
    mockup: `${MOCKUP_PATH}/a-brighter-alternative-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/a-brighter-alternative-outside.png`,
      inside: `${MOCKUP_PATH}/a-brighter-alternative-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/a-brighter-alternative-outside.png`,
      inside: `${IMAGE_PATH}/a-brighter-alternative-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/a-brighter-alternative-outside.pdf`,
      inside: `${PDF_PATH}/a-brighter-alternative-inside.pdf`,
    },
  },
  {
    title: "Able Minds ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${IMAGE_PATH}/able-minds-outside.png`,
    pdf: `${PDF_PATH}/able-minds-outside.pdf`,
    mockup: `${IMAGE_PATH}/able-minds-outside.png`,
    mockups: {
      outside: `${IMAGE_PATH}/able-minds-outside.png`,
      inside: `${IMAGE_PATH}/able-minds-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/able-minds-outside.png`,
      inside: `${IMAGE_PATH}/able-minds-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/able-minds-outside.pdf`,
      inside: `${PDF_PATH}/able-minds-inside.pdf`,
    },
  },
  {
    title: "Admire ABA Therapy",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/admire-aba-outside.png`,
    pdf: `${PDF_PATH}/admire-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/admire-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/admire-aba-outside.png`,
      inside: `${MOCKUP_PATH}/admire-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/admire-aba-outside.png`,
      inside: `${IMAGE_PATH}/admire-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/admire-aba-outside.pdf`,
      inside: `${PDF_PATH}/admire-aba-inside.pdf`,
    },
  },
  {
    title: "Aim Higher ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/aim-higher-aba-outside.png`,
    pdf: `${PDF_PATH}/aim-higher-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/aim-higher-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/aim-higher-aba-outside.png`,
      inside: `${MOCKUP_PATH}/aim-higher-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/aim-higher-aba-outside.png`,
      inside: `${IMAGE_PATH}/aim-higher-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/aim-higher-aba-outside.pdf`,
      inside: `${PDF_PATH}/aim-higher-aba-inside.pdf`,
    },
  },
  {
    title: "Argo ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${IMAGE_PATH}/argo-aba-outside.png`,
    pdf: `${PDF_PATH}/argo-aba-outside.pdf`,
    mockup: `${IMAGE_PATH}/argo-aba-outside.png`,
    mockups: {
      outside: `${IMAGE_PATH}/argo-aba-outside.png`,
      inside: `${IMAGE_PATH}/argo-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/argo-aba-outside.png`,
      inside: `${IMAGE_PATH}/argo-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/argo-aba-outside.pdf`,
      inside: `${PDF_PATH}/argo-aba-inside.pdf`,
    },
  },
  {
    title: "All Star ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/all-star-aba-outside.png`,
    pdf: `${PDF_PATH}/all-star-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/all-star-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/all-star-aba-outside.png`,
      inside: `${MOCKUP_PATH}/all-star-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/all-star-aba-outside.png`,
      inside: `${IMAGE_PATH}/all-star-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/all-star-aba-outside.pdf`,
      inside: `${PDF_PATH}/all-star-aba-inside.pdf`,
    },
  },
  {
    title: "Apek",
    category: "Healthcare",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "9 x 12 inches"],
    thumbnail: `${MOCKUP_PATH}/apek-outside.png`,
    pdf: `${PDF_PATH}/apek-outside.pdf`,
    mockup: `${MOCKUP_PATH}/apek-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/apek-outside.png`,
      inside: `${MOCKUP_PATH}/apek-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/apek-outside.png`,
      inside: `${IMAGE_PATH}/apek-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/apek-outside.pdf`,
      inside: `${PDF_PATH}/apek-inside.pdf`,
    },
  },
  {
    title: "Armature Lake",
    category: "Recovery care",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/armature-lake-outside.png`,
    pdf: `${PDF_PATH}/armature-lake-outside.pdf`,
    mockup: `${MOCKUP_PATH}/armature-lake-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/armature-lake-outside.png`,
      inside: `${MOCKUP_PATH}/armature-lake-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/armature-lake-outside.png`,
      inside: `${IMAGE_PATH}/armature-lake-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/armature-lake-outside.pdf`,
      inside: `${PDF_PATH}/armature-lake-inside.pdf`,
    },
  },
  {
    title: "Bright Bridge ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/bright-bridge-aba-outside.png`,
    pdf: `${PDF_PATH}/bright-bridge-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/bright-bridge-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/bright-bridge-aba-outside.png`,
      inside: `${MOCKUP_PATH}/bright-bridge-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/bright-bridge-aba-outside.png`,
      inside: `${IMAGE_PATH}/bright-bridge-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/bright-bridge-aba-outside.pdf`,
      inside: `${PDF_PATH}/bright-bridge-aba-inside.pdf`,
    },
  },
  {
    title: "EverReach ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/ever-reach-aba-outside.png`,
    pdf: `${PDF_PATH}/ever-reach-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/ever-reach-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/ever-reach-aba-outside.png`,
      inside: `${MOCKUP_PATH}/ever-reach-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/ever-reach-aba-outside.png`,
      inside: `${IMAGE_PATH}/ever-reach-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/ever-reach-aba-outside.pdf`,
      inside: `${PDF_PATH}/ever-reach-aba-inside.pdf`,
    },
  },
  {
    title: "Gradual Behavioral Health",
    category: "Behavioral health",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/gradual-behavioral-health-outside.png`,
    pdf: `${PDF_PATH}/gradual-behavioral-health-outside.pdf`,
    mockup: `${MOCKUP_PATH}/gradual-behavioral-health-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/gradual-behavioral-health-outside.png`,
      inside: `${MOCKUP_PATH}/gradual-behavioral-health-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/gradual-behavioral-health-outside.png`,
      inside: `${IMAGE_PATH}/gradual-behavioral-health-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/gradual-behavioral-health-outside.pdf`,
      inside: `${PDF_PATH}/gradual-behavioral-health-inside.pdf`,
    },
  },
  {
    title: "Little Champs ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/little-champs-aba-outside.png`,
    pdf: `${PDF_PATH}/little-champs-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/little-champs-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/little-champs-aba-outside.png`,
      inside: `${MOCKUP_PATH}/little-champs-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/little-champs-aba-outside.png`,
      inside: `${IMAGE_PATH}/little-champs-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/little-champs-aba-outside.pdf`,
      inside: `${PDF_PATH}/little-champs-aba-inside.pdf`,
    },
  },
  {
    title: "Utilize ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/utilize-aba-outside.png`,
    pdf: `${PDF_PATH}/utilize-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/utilize-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/utilize-aba-outside.png`,
      inside: `${MOCKUP_PATH}/utilize-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/utilize-aba-outside.png`,
      inside: `${IMAGE_PATH}/utilize-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/utilize-aba-outside.pdf`,
      inside: `${PDF_PATH}/utilize-aba-inside.pdf`,
    },
  },
  {
    title: "Willow Grove Recovery",
    category: "Recovery care",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/willow-grove-recovery-outside.png`,
    pdf: `${PDF_PATH}/willow-grove-recovery-outside.pdf`,
    mockup: `${MOCKUP_PATH}/willow-grove-recovery-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/willow-grove-recovery-outside.png`,
      inside: `${MOCKUP_PATH}/willow-grove-recovery-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/willow-grove-recovery-outside.png`,
      inside: `${IMAGE_PATH}/willow-grove-recovery-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/willow-grove-recovery-outside.pdf`,
      inside: `${PDF_PATH}/willow-grove-recovery-inside.pdf`,
    },
  },
  {
    title: "Attentive ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/attentive-aba-outside.png`,
    pdf: `${PDF_PATH}/attentive-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/attentive-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/attentive-aba-outside.png`,
      inside: `${MOCKUP_PATH}/attentive-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/attentive-aba-outside.png`,
      inside: `${IMAGE_PATH}/attentive-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/attentive-aba-outside.pdf`,
      inside: `${PDF_PATH}/attentive-aba-inside.pdf`,
    },
  },
  {
    title: "USVC",
    category: "Vascular care",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/usvc-outside.png`,
    pdf: `${PDF_PATH}/usvc-outside.pdf`,
    mockup: `${MOCKUP_PATH}/usvc-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/usvc-outside.png`,
      inside: `${MOCKUP_PATH}/usvc-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/usvc-outside.png`,
      inside: `${IMAGE_PATH}/usvc-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/usvc-outside.pdf`,
      inside: `${PDF_PATH}/usvc-inside.pdf`,
    },
  },
  {
    title: "Alpine Learning ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/alpine-learning-aba-outside.png`,
    pdf: `${PDF_PATH}/alpine-learning-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/alpine-learning-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/alpine-learning-aba-outside.png`,
      inside: `${MOCKUP_PATH}/alpine-learning-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/alpine-learning-aba-outside.png`,
      inside: `${IMAGE_PATH}/alpine-learning-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/alpine-learning-aba-outside.pdf`,
      inside: `${PDF_PATH}/alpine-learning-aba-inside.pdf`,
    },
  },
  {
    title: "Blue Bell",
    category: "Healthcare",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/blue-bell-outside.png`,
    pdf: `${PDF_PATH}/blue-bell-outside.pdf`,
    mockup: `${MOCKUP_PATH}/blue-bell-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/blue-bell-outside.png`,
      inside: `${MOCKUP_PATH}/blue-bell-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/blue-bell-outside.png`,
      inside: `${IMAGE_PATH}/blue-bell-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/blue-bell-outside.pdf`,
      inside: `${PDF_PATH}/blue-bell-inside.pdf`,
    },
  },
  {
    title: "Blue Jay ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/blue-jay-aba-outside.png`,
    pdf: `${PDF_PATH}/blue-jay-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/blue-jay-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/blue-jay-aba-outside.png`,
      inside: `${MOCKUP_PATH}/blue-jay-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/blue-jay-aba-outside.png`,
      inside: `${IMAGE_PATH}/blue-jay-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/blue-jay-aba-outside.pdf`,
      inside: `${PDF_PATH}/blue-jay-aba-inside.pdf`,
    },
  },
  {
    title: "Bridge Care ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/bridge-care-aba-2-outside.png`,
    pdf: `${PDF_PATH}/bridge-care-aba-2-outside.pdf`,
    mockup: `${MOCKUP_PATH}/bridge-care-aba-2-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/bridge-care-aba-2-outside.png`,
      inside: `${MOCKUP_PATH}/bridge-care-aba-2-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/bridge-care-aba-2-outside.png`,
      inside: `${IMAGE_PATH}/bridge-care-aba-2-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/bridge-care-aba-2-outside.pdf`,
      inside: `${PDF_PATH}/bridge-care-aba-2-inside.pdf`,
    },
  },
  {
    title: "Champions ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/champions-aba-outside.png`,
    pdf: `${PDF_PATH}/champions-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/champions-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/champions-aba-outside.png`,
      inside: `${MOCKUP_PATH}/champions-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/champions-aba-outside.png`,
      inside: `${IMAGE_PATH}/champions-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/champions-aba-outside.pdf`,
      inside: `${PDF_PATH}/champions-aba-inside.pdf`,
    },
  },
  {
    title: "Cherry Tree Village",
    category: "Senior care",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/cherry-tree-village-outside.png`,
    pdf: `${PDF_PATH}/cherry-tree-village-outside.pdf`,
    mockup: `${MOCKUP_PATH}/cherry-tree-village-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/cherry-tree-village-outside.png`,
      inside: `${MOCKUP_PATH}/cherry-tree-village-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/cherry-tree-village-outside.png`,
      inside: `${IMAGE_PATH}/cherry-tree-village-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/cherry-tree-village-outside.pdf`,
      inside: `${PDF_PATH}/cherry-tree-village-inside.pdf`,
    },
  },
  {
    title: "Connect N Care",
    category: "Healthcare",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/connect-n-care-outside.png`,
    pdf: `${PDF_PATH}/connect-n-care-outside.pdf`,
    mockup: `${MOCKUP_PATH}/connect-n-care-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/connect-n-care-outside.png`,
      inside: `${MOCKUP_PATH}/connect-n-care-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/connect-n-care-outside.png`,
      inside: `${IMAGE_PATH}/connect-n-care-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/connect-n-care-outside.pdf`,
      inside: `${PDF_PATH}/connect-n-care-inside.pdf`,
    },
  },
  {
    title: "Epic Minds Therapy",
    category: "Therapy services",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/epic-minds-therapy-outside.png`,
    pdf: `${PDF_PATH}/epic-minds-therapy-outside.pdf`,
    mockup: `${MOCKUP_PATH}/epic-minds-therapy-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/epic-minds-therapy-outside.png`,
      inside: `${MOCKUP_PATH}/epic-minds-therapy-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/epic-minds-therapy-outside.png`,
      inside: `${IMAGE_PATH}/epic-minds-therapy-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/epic-minds-therapy-outside.pdf`,
      inside: `${PDF_PATH}/epic-minds-therapy-inside.pdf`,
    },
  },
  {
    title: "Ever Rest ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/ever-rest-aba-outside.png`,
    pdf: `${PDF_PATH}/ever-rest-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/ever-rest-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/ever-rest-aba-outside.png`,
      inside: `${MOCKUP_PATH}/ever-rest-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/ever-rest-aba-outside.png`,
      inside: `${IMAGE_PATH}/ever-rest-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/ever-rest-aba-outside.pdf`,
      inside: `${PDF_PATH}/ever-rest-aba-inside.pdf`,
    },
  },
  {
    title: "Evolve ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/evolve-aba-outside.png`,
    pdf: `${PDF_PATH}/evolve-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/evolve-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/evolve-aba-outside.png`,
      inside: `${MOCKUP_PATH}/evolve-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/evolve-aba-outside.png`,
      inside: `${IMAGE_PATH}/evolve-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/evolve-aba-outside.pdf`,
      inside: `${PDF_PATH}/evolve-aba-inside.pdf`,
    },
  },
  {
    title: "Incredible Me",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/incredible-me-outside.png`,
    pdf: `${PDF_PATH}/incredible-me-outside.pdf`,
    mockup: `${MOCKUP_PATH}/incredible-me-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/incredible-me-outside.png`,
      inside: `${MOCKUP_PATH}/incredible-me-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/incredible-me-outside.png`,
      inside: `${IMAGE_PATH}/incredible-me-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/incredible-me-outside.pdf`,
      inside: `${PDF_PATH}/incredible-me-inside.pdf`,
    },
  },
  {
    title: "Kennedy ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/kennedy-aba-outside.png`,
    pdf: `${PDF_PATH}/kennedy-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/kennedy-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/kennedy-aba-outside.png`,
      inside: `${MOCKUP_PATH}/kennedy-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/kennedy-aba-outside.png`,
      inside: `${IMAGE_PATH}/kennedy-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/kennedy-aba-outside.pdf`,
      inside: `${PDF_PATH}/kennedy-aba-inside.pdf`,
    },
  },
  {
    title: "Kids N Heart",
    category: "Pediatric care",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/kids-n-heart-outside.png`,
    pdf: `${PDF_PATH}/kids-n-heart-outside.pdf`,
    mockup: `${MOCKUP_PATH}/kids-n-heart-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/kids-n-heart-outside.png`,
      inside: `${MOCKUP_PATH}/kids-n-heart-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/kids-n-heart-outside.png`,
      inside: `${IMAGE_PATH}/kids-n-heart-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/kids-n-heart-outside.pdf`,
      inside: `${PDF_PATH}/kids-n-heart-inside.pdf`,
    },
  },
  {
    title: "Knee Pain New York",
    category: "Healthcare",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/knee-pain-new-york-outside.png`,
    pdf: `${PDF_PATH}/knee-pain-new-york-outside.pdf`,
    mockup: `${MOCKUP_PATH}/knee-pain-new-york-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/knee-pain-new-york-outside.png`,
      inside: `${MOCKUP_PATH}/knee-pain-new-york-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/knee-pain-new-york-outside.png`,
      inside: `${IMAGE_PATH}/knee-pain-new-york-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/knee-pain-new-york-outside.pdf`,
      inside: `${PDF_PATH}/knee-pain-new-york-inside.pdf`,
    },
  },
  {
    title: "Precious ABA",
    category: "ABA therapy",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/precious-aba-outside.png`,
    pdf: `${PDF_PATH}/precious-aba-outside.pdf`,
    mockup: `${MOCKUP_PATH}/precious-aba-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/precious-aba-outside.png`,
      inside: `${MOCKUP_PATH}/precious-aba-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/precious-aba-outside.png`,
      inside: `${IMAGE_PATH}/precious-aba-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/precious-aba-outside.pdf`,
      inside: `${PDF_PATH}/precious-aba-inside.pdf`,
    },
  },
  {
    title: "TMS",
    category: "Mental health",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/tms-outside.png`,
    pdf: `${PDF_PATH}/tms-outside.pdf`,
    mockup: `${MOCKUP_PATH}/tms-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/tms-outside.png`,
      inside: `${MOCKUP_PATH}/tms-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/tms-outside.png`,
      inside: `${IMAGE_PATH}/tms-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/tms-outside.pdf`,
      inside: `${PDF_PATH}/tms-inside.pdf`,
    },
  },
  {
    title: "Up And Up",
    category: "Behavioral health",
    format: "Trifold brochure",
    tags: ["Trifold brochure", "8.5 x 11 inches"],
    thumbnail: `${MOCKUP_PATH}/up-and-up-outside.png`,
    pdf: `${PDF_PATH}/up-and-up-outside.pdf`,
    mockup: `${MOCKUP_PATH}/up-and-up-outside.png`,
    mockups: {
      outside: `${MOCKUP_PATH}/up-and-up-outside.png`,
      inside: `${MOCKUP_PATH}/up-and-up-inside.png`,
    },
    sides: {
      outside: `${IMAGE_PATH}/up-and-up-outside.png`,
      inside: `${IMAGE_PATH}/up-and-up-inside.png`,
    },
    pdfs: {
      outside: `${PDF_PATH}/up-and-up-outside.pdf`,
      inside: `${PDF_PATH}/up-and-up-inside.pdf`,
    },
  }
];

function slugifyBrochure(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const brochureDescriptions = {
  "A Brighter Alternative BH": "A behavioral health brochure designed to communicate supportive care, practical clarity, and an approachable next step for families.",
  "Able Minds ABA": "An ABA therapy brochure built around family guidance, services, and clear intake information for parents exploring support.",
  "Admire ABA Therapy": "A warm ABA therapy brochure focused on compassionate care, parent confidence, and easy-to-scan service details.",
  "Aim Higher": "A behavioral care brochure shaped to present services, support pathways, and family-centered messaging in a polished print format.",
  "Argo ABA": "An ABA therapy brochure designed to make service information feel clear, modern, and reassuring for families.",
  "Gradual Behavioral Health": "A behavioral health brochure created to introduce care services with a calm, professional, and approachable presentation.",
  "Gradual Behavioral Health II": "A second brochure concept for Gradual Behavioral Health with a refreshed structure for presenting support and service information.",
};

brochures.forEach((brochure) => {
  brochure.id = slugifyBrochure(brochure.title);
  brochure.size = brochure.tags[1] || "8.5 x 11 inches";
  brochure.description = brochure.description || brochureDescriptions[brochure.title] || "A polished client-ready print piece designed for clear brochure presentation.";
});

window.BROCHURES = brochures;
window.slugifyBrochure = slugifyBrochure;

const hasPortfolioPage = document.querySelector("#portfolioGrid");

if (hasPortfolioPage) {
const trifold = document.querySelector("#trifold");
const foldRange = document.querySelector("#foldRange");
const foldValue = document.querySelector("#foldValue");
const sideButtons = document.querySelectorAll("[data-side]");
const brochureSelect = document.querySelector("#brochureSelect");
const grid = document.querySelector("#portfolioGrid");
const carousel = document.querySelector("#brochureCarousel");
const carouselTrack = document.querySelector("#carouselTrack");
const carouselPrev = document.querySelector("#carouselPrev");
const carouselNext = document.querySelector("#carouselNext");

let currentIndex = 0;
let currentSide = "outside";
const trifoldBrochures = brochures.filter((brochure) => brochure.format === "Trifold brochure");

function imageUrl(path) {
  return `url("${path}")`;
}

function currentBrochure() {
  return trifoldBrochures[currentIndex] || trifoldBrochures[0];
}

function setBrochureImage() {
  const brochure = currentBrochure();
  trifold.style.setProperty("--brochure-image", imageUrl(brochure.sides[currentSide]));
}

function setCurrentBrochure(index, options = {}) {
  currentIndex = (index + trifoldBrochures.length) % trifoldBrochures.length;
  setBrochureImage();
  if (brochureSelect) {
    brochureSelect.value = String(currentIndex);
  }
  carouselTrack.querySelectorAll(".preview-card").forEach((card) => {
    const cardIndex = Number(card.dataset.previewIndex);
    card.classList.toggle("is-active", cardIndex === currentIndex);
    card.setAttribute("aria-pressed", String(cardIndex === currentIndex));
  });
  if (options.scrollCarousel !== false) {
    carouselTrack
      .querySelector(`[data-preview-index="${currentIndex}"]`)
      ?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
}

function updateTickerDistance() {
  const firstDuplicate = carouselTrack.querySelector('[data-clone-start="true"]');

  if (!firstDuplicate) {
    return;
  }

  carousel.style.setProperty("--ticker-distance", `${firstDuplicate.offsetLeft}px`);
}

function setFold(value) {
  const fold = Number(value) / 100;
  trifold.style.setProperty("--fold", fold.toFixed(2));
  trifold.classList.toggle("is-folded", fold > 0.55);
  foldRange.value = String(value);
  foldValue.textContent = `${value}%`;
}

function renderBrochureSelect() {
  if (!brochureSelect) {
    return;
  }

  brochureSelect.innerHTML = trifoldBrochures
    .map((brochure, index) => `<option value="${index}">${brochure.title}</option>`)
    .join("");
}

function renderCarousel() {
  function renderCards(isClone = false) {
    return trifoldBrochures
      .map(
        (brochure, index) => `
      <button class="preview-card${isClone ? " is-clone" : ""}${index === currentIndex ? " is-active" : ""}" type="button" aria-pressed="${index === currentIndex}" data-preview-index="${index}"${isClone && index === 0 ? ' data-clone-start="true"' : ""}>
        <span class="preview-thumb">
          <img src="${brochure.thumbnail}" alt="${brochure.title} outside preview" loading="lazy">
        </span>
        <strong>${brochure.title}</strong>
        <span>${brochure.category}</span>
      </button>
    `,
      )
      .join("");
  }

  carouselTrack.innerHTML = `${renderCards()}${renderCards(true)}`;
  requestAnimationFrame(updateTickerDistance);
  carouselTrack.querySelectorAll("img").forEach((image) => {
    image.addEventListener("load", updateTickerDistance, { once: true });
  });
}

function renderGrid() {
  grid.innerHTML = trifoldBrochures
    .map((brochure) => {
      const detailUrl = `brochure.html?id=${brochure.id}`;

      return `
      <a class="portfolio-card" href="${detailUrl}" aria-label="View ${brochure.title} brochure details">
        <div class="card-art">
          <img src="${brochure.mockups?.outside || brochure.sides.outside}" alt="${brochure.title} outside brochure design" loading="lazy">
          <img src="${brochure.mockups?.inside || brochure.sides.inside}" alt="${brochure.title} inside brochure design" loading="lazy">
        </div>
        <div class="card-copy">
          <h3>${brochure.title}</h3>
          <p>${brochure.category}</p>
          <div class="tag-row">
            ${brochure.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
      </a>
    `;
    })
    .join("");
}

sideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentSide = button.dataset.side;
    sideButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    setBrochureImage();
  });
});

brochureSelect?.addEventListener("change", (event) => {
  setCurrentBrochure(Number(event.target.value), { scrollCarousel: false });
});

carouselTrack.addEventListener("click", (event) => {
  const card = event.target.closest("[data-preview-index]");

  if (!card) {
    return;
  }

  setCurrentBrochure(Number(card.dataset.previewIndex));
});


carouselPrev.addEventListener("click", () => setCurrentBrochure(currentIndex - 1));
carouselNext.addEventListener("click", () => setCurrentBrochure(currentIndex + 1));
window.addEventListener("resize", updateTickerDistance);

document.querySelector("#openBrochure").addEventListener("click", () => setFold(0));
document.querySelector("#closeBrochure").addEventListener("click", () => setFold(100));
foldRange.addEventListener("input", (event) => setFold(event.target.value));

renderBrochureSelect();
renderCarousel();
renderGrid();
setBrochureImage();
setFold(34);
}
