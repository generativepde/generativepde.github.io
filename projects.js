// ---------------------------------------------------------------------------
// Everything listed on the hub page lives in this file.
// To add a project: copy one entry in PROJECTS, fill it in, open a pull request.
// Newest projects go first. Leave a link as "" to hide its button.
// ---------------------------------------------------------------------------

window.SITE = {
  org: "generativepde",
  title: "Generative PDE Solving",
  tagline:
    "Generative models that recover full physical fields from sparse, partial observations, for forward and inverse problems alike.",
  github: "https://github.com/generativepde",
};

window.PROJECTS = [
  {
    id: "videopde",
    title: "VideoPDE: Unified Generative PDE Solving via Video Inpainting Diffusion Models",
    shortTitle: "VideoPDE",
    authors: ["Edward Li", "Zichen Wang", "Jiahe Huang", "Jeong Joon Park"],
    venue: "arXiv preprint",
    year: 2025,
    teaser: "https://jjparkcv.github.io/jjpark_files/videopde.gif",
    summary:
      "Treats PDE solving as video inpainting: one video diffusion model fills in the unobserved parts of a spatiotemporal field, covering forward prediction, inverse problems and partial observation in a single framework.",
    links: {
      paper: "https://arxiv.org/abs/2506.13754",
      page: "https://videopde.github.io/",
      // Old URL; GitHub redirects it automatically once the repo is transferred.
      code: "https://github.com/videopde/VideoPDE",
    },
    bibtex: `@article{li2025videopde,
  title   = {VideoPDE: Unified Generative PDE Solving via Video Inpainting Diffusion Models},
  author  = {Li, Edward and Wang, Zichen and Huang, Jiahe and Park, Jeong Joon},
  journal = {arXiv preprint arXiv:2506.13754},
  year    = {2025}
}`,
  },
  {
    id: "diffusionpde",
    title: "DiffusionPDE: Generative PDE-Solving Under Partial Observation",
    shortTitle: "DiffusionPDE",
    authors: ["Jiahe Huang", "Guandao Yang", "Zichen Wang", "Jeong Joon Park"],
    venue: "NeurIPS",
    year: 2024,
    teaser: "https://jjparkcv.github.io/jjpark_files/ns_inverse.gif",
    summary:
      "Learns the joint distribution of PDE coefficients and solutions with a diffusion model, then samples both from sparse observations under PDE guidance, solving forward and inverse problems when much of the field is missing.",
    links: {
      paper: "https://arxiv.org/abs/2406.17763",
      page: "https://jhhuang.tech/Diffusion-PDE/",
      // Valid after the repo is transferred into the org (see SETUP.md, step 4).
      code: "https://github.com/generativepde/DiffusionPDE",
    },
    bibtex: `@inproceedings{huang2024diffusionpde,
  title     = {DiffusionPDE: Generative PDE-Solving Under Partial Observation},
  author    = {Huang, Jiahe and Yang, Guandao and Wang, Zichen and Park, Jeong Joon},
  booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
  year      = {2024}
}`,
  },
];

// People who have contributed to projects on this site. Add yourself with your project.
window.PEOPLE = [
  { name: "Jeong Joon Park", url: "https://jjparkcv.github.io/", note: "University of Michigan" },
  { name: "Jiahe Huang", url: "https://jhhuang.tech/", note: "" },
  { name: "Zichen Wang", url: "", note: "" },
  { name: "Edward Li", url: "", note: "" },
  { name: "Guandao Yang", url: "", note: "" },
];

// Related lines of work, shown at the bottom of the page.
window.RELATED = [
  {
    name: "Neural Solvers",
    url: "https://neuralsolver.github.io/",
    note: "Deterministic solvers that feed the PDE residual back into the network to correct their own errors (Error-Conditioned Neural Solvers).",
  },
];
