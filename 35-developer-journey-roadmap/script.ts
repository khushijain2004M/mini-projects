type Status = "todo" | "learning" | "done";
type Skill = {
  id: string;
  stage: string;
  name: string;
  desc: string;
  effort: string;
  pre: string;
  url: string;
  tracks: string[];
};
type Saved = { status: Record<string, Status>; notes: Record<string, string> };
const skills: Skill[] = [
  {
    id: "html",
    stage: "01 · FOUNDATIONS",
    name: "HTML foundations",
    desc: "Create meaningful, accessible document structure.",
    effort: "4 hours",
    pre: "None",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content",
    tracks: ["frontend", "fullstack"],
  },
  {
    id: "css",
    stage: "01 · FOUNDATIONS",
    name: "Modern CSS",
    desc: "Build responsive layouts with resilient visual rules.",
    effort: "10 hours",
    pre: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics",
    tracks: ["frontend", "fullstack"],
  },
  {
    id: "js",
    stage: "02 · PROGRAMMING",
    name: "JavaScript & TypeScript",
    desc: "Model data, events and asynchronous application logic.",
    effort: "30 hours",
    pre: "HTML + CSS",
    url: "https://www.typescriptlang.org/docs/handbook/intro.html",
    tracks: ["frontend", "backend", "fullstack"],
  },
  {
    id: "git",
    stage: "02 · PROGRAMMING",
    name: "Git workflow",
    desc: "Track work, collaborate safely and communicate changes.",
    effort: "6 hours",
    pre: "Terminal basics",
    url: "https://git-scm.com/docs/gittutorial",
    tracks: ["frontend", "backend", "fullstack"],
  },
  {
    id: "react",
    stage: "03 · APPLICATIONS",
    name: "Component architecture",
    desc: "Compose stateful interfaces from focused components.",
    effort: "24 hours",
    pre: "JavaScript",
    url: "https://react.dev/learn",
    tracks: ["frontend", "fullstack"],
  },
  {
    id: "api",
    stage: "03 · APPLICATIONS",
    name: "HTTP & REST APIs",
    desc: "Design predictable endpoints, validation and errors.",
    effort: "14 hours",
    pre: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
    tracks: ["backend", "fullstack"],
  },
  {
    id: "db",
    stage: "03 · APPLICATIONS",
    name: "SQL & data modelling",
    desc: "Store consistent data and query it intentionally.",
    effort: "20 hours",
    pre: "Programming basics",
    url: "https://www.postgresql.org/docs/current/tutorial.html",
    tracks: ["backend", "fullstack"],
  },
  {
    id: "testing",
    stage: "04 · PRODUCTION",
    name: "Automated testing",
    desc: "Verify important behaviour at unit and browser levels.",
    effort: "12 hours",
    pre: "Applications",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing",
    tracks: ["frontend", "backend", "fullstack"],
  },
  {
    id: "deploy",
    stage: "04 · PRODUCTION",
    name: "Deployment & monitoring",
    desc: "Release safely and observe real application health.",
    effort: "10 hours",
    pre: "Git + testing",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Deploying_our_app",
    tracks: ["frontend", "backend", "fullstack"],
  },
];
skills.push(
  {
    id: "a11y",
    stage: "02 · PROGRAMMING",
    name: "Web accessibility",
    desc: "Build keyboard-friendly, semantic and understandable experiences.",
    effort: "12 hours",
    pre: "HTML + CSS",
    url: "#",
    tracks: ["frontend", "fullstack"],
  },
  {
    id: "browser",
    stage: "02 · PROGRAMMING",
    name: "Browser fundamentals",
    desc: "Understand rendering, events, storage, networking and developer tools.",
    effort: "10 hours",
    pre: "JavaScript",
    url: "#",
    tracks: ["frontend", "fullstack"],
  },
  {
    id: "node",
    stage: "03 · APPLICATIONS",
    name: "Node.js services",
    desc: "Create server-side modules, configuration and reliable request handling.",
    effort: "22 hours",
    pre: "JavaScript",
    url: "#",
    tracks: ["backend", "fullstack"],
  },
  {
    id: "auth",
    stage: "03 · APPLICATIONS",
    name: "Authentication & authorization",
    desc: "Model identity, sessions, roles and safe access boundaries.",
    effort: "16 hours",
    pre: "HTTP APIs",
    url: "#",
    tracks: ["backend", "fullstack"],
  },
  {
    id: "cache",
    stage: "03 · APPLICATIONS",
    name: "Caching strategies",
    desc: "Reduce repeated work while keeping data freshness explicit.",
    effort: "8 hours",
    pre: "APIs + databases",
    url: "#",
    tracks: ["backend", "fullstack"],
  },
  {
    id: "state",
    stage: "03 · APPLICATIONS",
    name: "Frontend state design",
    desc: "Separate server, URL, form and local interface state.",
    effort: "12 hours",
    pre: "Components",
    url: "#",
    tracks: ["frontend", "fullstack"],
  },
  {
    id: "security",
    stage: "04 · PRODUCTION",
    name: "Application security",
    desc: "Protect secrets, validate input and reduce common web risks.",
    effort: "18 hours",
    pre: "Full application",
    url: "#",
    tracks: ["frontend", "backend", "fullstack"],
  },
  {
    id: "performance",
    stage: "04 · PRODUCTION",
    name: "Performance profiling",
    desc: "Measure bottlenecks, improve critical paths and verify impact.",
    effort: "12 hours",
    pre: "Testing",
    url: "#",
    tracks: ["frontend", "backend", "fullstack"],
  },
  {
    id: "ci",
    stage: "04 · PRODUCTION",
    name: "CI/CD pipelines",
    desc: "Automate checks, builds and controlled releases.",
    effort: "10 hours",
    pre: "Git + testing",
    url: "#",
    tracks: ["frontend", "backend", "fullstack"],
  },
  {
    id: "observability",
    stage: "05 · GROWTH",
    name: "Logs, metrics & tracing",
    desc: "Explain system behaviour with structured operational signals.",
    effort: "12 hours",
    pre: "Deployment",
    url: "#",
    tracks: ["backend", "fullstack"],
  },
  {
    id: "architecture",
    stage: "05 · GROWTH",
    name: "System design basics",
    desc: "Reason about boundaries, scale, consistency and failure modes.",
    effort: "24 hours",
    pre: "Production apps",
    url: "#",
    tracks: ["backend", "fullstack"],
  },
  {
    id: "portfolio",
    stage: "05 · GROWTH",
    name: "Portfolio & communication",
    desc: "Explain decisions, outcomes and evidence behind your projects.",
    effort: "8 hours",
    pre: "Completed projects",
    url: "#",
    tracks: ["frontend", "backend", "fullstack"],
  },
);
const get = <T extends HTMLElement>(id: string) =>
  document.getElementById(id) as T;
let saved: Saved = JSON.parse(
    localStorage.getItem("djr-state") || '{"status":{},"notes":{}}',
  ),
  active = "html";
const track = get<HTMLSelectElement>("track"),
  search = get<HTMLInputElement>("search"),
  roadmap = get("roadmap");
function store() {
  localStorage.setItem("djr-state", JSON.stringify(saved));
}
function current() {
  return skills.filter(
    (s) =>
      s.tracks.includes(track.value) &&
      `${s.name} ${s.desc}`.toLowerCase().includes(search.value.toLowerCase()),
  );
}
function render() {
  const list = current(),
    stages = [...new Set(list.map((s) => s.stage))];
  roadmap.innerHTML =
    stages
      .map(
        (stage) =>
          `<section class="stage"><div class="stage-title"><i></i><span>${stage}</span></div><div class="skills">${list
            .filter((s) => s.stage === stage)
            .map(
              (s) =>
                `<button class="skill ${saved.status[s.id] || "todo"}" data-id="${s.id}"><small>${s.effort}</small><h3>${s.name}</h3><p>${s.desc}</p><span class="state">${saved.status[s.id] === "done" ? "✓ Completed" : saved.status[s.id] === "learning" ? "● Learning" : "○ Not started"}</span></button>`,
            )
            .join("")}</div></section>`,
      )
      .join("") || "<p>No matching skills.</p>";
  document
    .querySelectorAll<HTMLButtonElement>(".skill")
    .forEach((b) => (b.onclick = () => openSkill(b.dataset.id || "html")));
  const all = skills.filter((s) => s.tracks.includes(track.value)),
    done = all.filter((s) => saved.status[s.id] === "done").length,
    p = Math.round((done / all.length) * 100),
    next = all.find((s) => saved.status[s.id] !== "done");
  get("percent").textContent = p + "%";
  get<HTMLElement>("bar").style.width = p + "%";
  get("nextSkill").textContent = next?.name || "Roadmap complete";
  get("nextMeta").textContent = next
    ? `${next.stage} · ${next.effort}`
    : "Excellent work";
}
function openSkill(id: string) {
  active = id;
  const s = skills.find((x) => x.id === id)!;
  get("stageLabel").textContent = s.stage;
  get("skillTitle").textContent = s.name;
  get("skillDesc").textContent = s.desc;
  get("effort").textContent = s.effort;
  get("prereq").textContent = s.pre;
  get<HTMLSelectElement>("status").value = saved.status[id] || "todo";
  get<HTMLTextAreaElement>("notes").value = saved.notes[id] || "";
  const resource = get<HTMLAnchorElement>("resource");
  resource.href = "#";
  resource.onclick = (event) => {
    event.preventDefault();
    const guide = `${s.name} — In-app study guide\n\nWHY IT MATTERS\n${s.desc}\n\nLEARNING PLAN\n1. Explain the core idea in your own words.\n2. Build one focused example without copying.\n3. Test a normal, empty and failure case.\n4. Review accessibility, security and performance.\n5. Write what you would improve next.\n\nPRACTICE TARGET\n${s.effort}; prerequisite: ${s.pre}.`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([guide], { type: "text/plain" }));
    a.download = `${s.id}-study-guide.txt`;
    a.click();
  };
  get<HTMLDialogElement>("detail").showModal();
}
track.onchange = render;
search.oninput = render;
get<HTMLButtonElement>("close").onclick = () =>
  get<HTMLDialogElement>("detail").close();
get<HTMLSelectElement>("status").onchange = (e) => {
  saved.status[active] = (e.target as HTMLSelectElement).value as Status;
  store();
  render();
};
get<HTMLTextAreaElement>("notes").oninput = (e) => {
  saved.notes[active] = (e.target as HTMLTextAreaElement).value;
  store();
};
get<HTMLButtonElement>("resetBtn").onclick = () => {
  saved = { status: {}, notes: {} };
  store();
  render();
};
get<HTMLButtonElement>("exportBtn").onclick = () => {
  const body = skills
      .map(
        (s) =>
          `${saved.status[s.id] || "todo"} | ${s.name} | ${saved.notes[s.id] || ""}`,
      )
      .join("\n"),
    a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob([`Developer Journey Roadmap — Khushi Jain\n\n${body}`], {
      type: "text/plain",
    }),
  );
  a.download = "developer-roadmap-progress.txt";
  a.click();
  URL.revokeObjectURL(a.href);
};
render();
