import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Link as LinkIcon, PlayCircle, Download, Gamepad2, Filter, Sparkles, Phone, MapPin, ExternalLink } from "lucide-react";

// ---------- PROFILE (from uploaded resume) ----------
const PROFILE = {
  name: "Aswin Venkataraman",
  title: "Unity Developer | AR/VR | HMI | Digital Twin",
  tagline:
    "Dynamic software professional with 8+ years of experience in Game, AR/VR, HMI, and Digital Twin development.",
  location: "Chennai, India",
  email: "aswinvenkataraman@gmail.com",
  phone: "+91 9566221403",
  links: {
    github: "https://github.com/AswinVenkataraman",
    linkedin: "https://www.linkedin.com/in/aswinvenkataraman/",
    itch: "https://aswinvenkataraman.itch.io/",
    resume: "/resume.pdf",
    portfolioVideo: "",
  },
};

// ---------- PROJECTS (extracted & adapted) ----------
const PROJECTS = [
  {
    title: "Real-time Multiplayer Cricket Game",
    year: 2023,
    blurb:
      "Scaled from prototype to production with robust multiplayer systems and a rapidly growing player base.",
    role: "Gameplay, Multiplayer Systems, Animations",
    tech: ["Unity", "C#", "Photon", "Node.js"],
    media: "https://picsum.photos/seed/cricket/800/450",
    links: {},
    tags: ["Multiplayer", "Sports", "Mobile"],
    impact: [
      "Implemented reconnection, leaderboards, achievements, and shop system",
      "Developed batting, bowling, and fielding mechanics with animations",
    ],
  },
  {
    title: "AR Product Configuration App",
    year: 2023,
    blurb:
      "Enabled players to project shop characters, change skins, and view them through the camera in real-time.",
    role: "AR Systems, UX, Optimization",
    tech: ["Unity", "AR Foundation", "ARKit", "ARCore"],
    media: "https://picsum.photos/seed/arconfig/800/450",
    links: {},
    tags: ["AR", "Mobile"],
    impact: ["Real-time AR visualization of characters and assets"],
  },
  {
    title: "Digital Twin VR Cockpit (CES 2024/25 Showcase)",
    year: 2025,
    blurb:
      "Cutting-edge VR cockpit concept showcased at CES with real-time streaming and interactive HMI systems.",
    role: "VR Systems, HMI Integration, Leadership",
    tech: ["Unity", "C#", "MQTT", "Ethernet"],
    media: "https://picsum.photos/seed/digitaltwin/800/450",
    links: {},
    tags: ["VR", "HMI", "Automotive"],
    impact: [
      "Created VNC streaming service to mirror cockpit data",
      "Supervised 10+ Unity developers to deliver custom automotive solutions",
    ],
  },
  {
    title: "StreetChaser (100M+ Downloads)",
    year: 2019,
    blurb:
      "Endless runner with advanced pathfinding and optimized performance for low-end devices.",
    role: "Gameplay Systems, Optimization, UI",
    tech: ["Unity", "C#"],
    media: "https://picsum.photos/seed/streetchaser/800/450",
    links: {},
    tags: ["Mobile", "2D", "Runner"],
    impact: ["Maintained 60 FPS across devices", "Developed gameplay features and crash fixes"],
  },
  {
    title: "Skill Premier League (SPL)",
    year: 2021,
    blurb: "Mobile gaming platform with real-time battles and tournament modes.",
    role: "Platform Development, Multiplayer, AR Integration",
    tech: ["Unity", "C#", "Best HTTP/2", "Asset Bundles"],
    media: "https://picsum.photos/seed/spl/800/450",
    links: {},
    tags: ["Multiplayer", "Mobile", "Platform"],
    impact: [
      "Integrated Ludo, Dare2Jump, FuzzyBirds, 9Ball, FireBall, Sequence",
      "Converted Pool and Darts into AR experiences",
    ],
  },
];

// ---------- SKILLS ----------
const SKILLS = {
  Core: [
    "Unity (2D, 3D, AR/VR, HMI)",
    "C# (Gameplay, Systems, Tools)",
    "Multiplayer (Photon, Node.js)",
    "Digital Twin Development",
    "Optimization & Profiling",
  ],
  Tools: ["Git/Plastic", "Jira", "Blender (basic)", "Photoshop/GIMP", "Figma"],
  Plus: ["Shaders (HLSL/Shader Graph)", "Cinemachine", "Timeline", "Addressables"],
};

// ---------- EXPERIENCE ----------
const EXPERIENCE = [
  {
    role: "Technology Lead",
    company: "L&T Technology Services",
    period: "Oct 2023 – Jul 2025",
    points: [
      "Developed HMI systems and infotainment for production vehicles",
      "Created Digital Twin VR Cockpit showcased at CES 2024/2025",
      "Implemented VNC streaming in Unity for live cockpit data",
      "Mentored a team of 10 Unity developers",
    ],
  },
  {
    role: "Unity Developer",
    company: "Creative Monkey Games & Technologies Pvt. Ltd.",
    period: "Jul 2021 – Oct 2023",
    points: [
      "Developed multiplayer cricket game (batting, bowling, fielding systems)",
      "Implemented achievements, leaderboards, reconnection systems",
      "Created AR product configuration app",
    ],
  },
  {
    role: "Unity Developer",
    company: "Digient Technologies Pvt. Ltd.",
    period: "Nov 2019 – Jul 2021",
    points: [
      "Built Skill Premier League (SPL) platform with tournaments and battles",
      "Converted Pool and Darts into AR experiences",
      "Developed multiple real-time multiplayer mobile games",
    ],
  },
  {
    role: "Unity Developer",
    company: "iGold Technologies Pvt. Ltd.",
    period: "Nov 2016 – Nov 2019",
    points: [
      "Contributed to StreetChaser (100M+ downloads)",
      "Developed AR game similar to Pokémon Go",
      "Optimized performance and maintained 60fps on low-end devices",
    ],
  },
];

const TAGS = ["All", "AR", "VR", "2D", "3D", "Multiplayer", "Mobile", "PC", "HMI", "Automotive"];

// ---------- UI Helpers & Components ----------
function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {Icon && <Icon className="h-5 w-5" />}
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{children}</h2>
    </div>
  );
}

function ProjectCard({ p }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
      <Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        {p.media && <img src={p.media} alt={p.title} className="w-full h-48 object-cover" />}
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">{p.title}</CardTitle>
            <Badge variant="secondary">{p.year}</Badge>
          </div>
          {p.blurb && <p className="text-sm text-muted-foreground mt-1">{p.blurb}</p>}
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          <div className="flex flex-wrap gap-2">
            {(p.tech || []).map((t) => (
              <Badge key={t} variant="outline" className="rounded-full">{t}</Badge>
            ))}
          </div>

          {(p.impact || []).length > 0 && (
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {p.impact.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 pt-1">
            {p.links?.demo && (
              <Button asChild size="sm" variant="default" className="rounded-2xl">
                <a href={p.links.demo} target="_blank" rel="noreferrer">
                  <PlayCircle className="h-4 w-4 mr-2" /> Play Demo
                </a>
              </Button>
            )}
            {p.links?.code && (
              <Button asChild size="sm" variant="secondary" className="rounded-2xl">
                <a href={p.links.code} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4 mr-2" /> Code
                </a>
              </Button>
            )}
            {p.links?.video && (
              <Button asChild size="sm" variant="ghost" className="rounded-2xl">
                <a href={p.links.video} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> Video
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SkillsList() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {Object.entries(SKILLS).map(([group, items]) => (
        <Card key={group} className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">{group}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {items.map((s) => (
              <Badge key={s} variant="outline" className="rounded-full">{s}</Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ExperienceList() {
  return (
    <div className="grid gap-4">
      {EXPERIENCE.map((e) => (
        <Card key={`${e.role}-${e.company}`} className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base flex items-center justify-between">
              <span>{e.role} · {e.company}</span>
              <Badge variant="secondary">{e.period}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {(e.points || []).map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [q, setQ] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const hay = [p.title, p.blurb, p.role, ...(p.tech || []), ...(p.tags || [])]
        .join(" ")
        .toLowerCase();
      const matchesText = text === "" ? true : hay.includes(text);
      const matchesTag = activeTag === "All" || (p.tags || []).includes(activeTag);
      return matchesText && matchesTag;
    });
  }, [q, activeTag]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3 justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5" />
            <span className="font-semibold">{PROFILE.name}</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <a href="#projects" className="text-sm hover:underline">Projects</a>
            <a href="#skills" className="text-sm hover:underline">Skills</a>
            <a href="#experience" className="text-sm hover:underline">Experience</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-2xl">
              <a href={PROFILE.links.resume} target="_blank" rel="noreferrer">
                <Download className="h-4 w-4 mr-2" /> Resume
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-2xl md:text-4xl font-bold tracking-tight">
              {PROFILE.title}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.4 }} className="mt-3 text-slate-600">
              {PROFILE.tagline}
            </motion.p>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <Badge variant="secondary" className="rounded-full"><MapPin className="h-3 w-3 mr-1" /> {PROFILE.location}</Badge>
              <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${PROFILE.email}`}>
                <Mail className="h-4 w-4" /> {PROFILE.email}
              </a>
              <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4" /> {PROFILE.phone}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild variant="secondary" className="rounded-2xl">
                <a href={PROFILE.links.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2" /> GitHub</a>
              </Button>
              <Button asChild variant="secondary" className="rounded-2xl">
                <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2" /> LinkedIn</a>
              </Button>
              <Button asChild variant="secondary" className="rounded-2xl">
                <a href={PROFILE.links.itch} target="_blank" rel="noreferrer"><LinkIcon className="h-4 w-4 mr-2" /> itch.io</a>
              </Button>
              {PROFILE.links.portfolioVideo && (
                <Button asChild variant="ghost" className="rounded-2xl">
                  <a href={PROFILE.links.portfolioVideo} target="_blank" rel="noreferrer"><PlayCircle className="h-4 w-4 mr-2" /> Portfolio Reel</a>
                </Button>
              )}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="p-4">
            <Card className="rounded-2xl">
              <CardContent className="p-4">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 grid place-items-center">
                  <Sparkles className="h-8 w-8" />
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Tip: Replace the gradient block with a short reel thumbnail or avatar.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </header>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 pb-12">
        <SectionTitle icon={Gamepad2}>Featured Projects</SectionTitle>

        <div className="flex flex-col md:flex-row gap-3 md:items-center mb-6">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <div className="flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <Button key={t} size="sm" variant={activeTag === t ? "default" : "secondary"} className="rounded-2xl" onClick={() => setActiveTag(t)}>
                  {t}
                </Button>
              ))}
            </div>
          </div>
          <div className="md:ml-auto">
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects, tech, tags…" className="w-full md:w-72" />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground">No projects match your search. Try a different keyword or tag.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        )}
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-4 pb-12">
        <SectionTitle icon={Sparkles}>Skills</SectionTitle>
        <SkillsList />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-4 pb-12">
        <SectionTitle icon={Gamepad2}>Experience</SectionTitle>
        <ExperienceList />
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 pb-16">
        <SectionTitle icon={Mail}>Contact</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">Reach out</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-700">
              <p>
                Open to full‑time roles, internships, and freelance projects. If you’d like a tailored demo or code sample, send me a note.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="rounded-full">Unity</Badge>
                <Badge variant="secondary" className="rounded-full">C#</Badge>
                <Badge variant="secondary" className="rounded-full">AR/VR</Badge>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button asChild variant="secondary" className="rounded-2xl">
                  <a href={`mailto:${PROFILE.email}`}><Mail className="h-4 w-4 mr-2" /> Email</a>
                </Button>
                <Button asChild variant="secondary" className="rounded-2xl">
                  <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2" /> LinkedIn</a>
                </Button>
                <Button asChild variant="secondary" className="rounded-2xl">
                  <a href={PROFILE.links.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2" /> GitHub</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">Quick message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Your name" />
              <Input type="email" placeholder="Your email" />
              <Textarea placeholder="Tell me about your project…" />
              <Button className="rounded-2xl">Send</Button>
              <p className="text-xs text-muted-foreground">This is a static form for demo. Hook it to your email/API.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a className="hover:underline" href={PROFILE.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:underline" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:underline" href={PROFILE.links.itch} target="_blank" rel="noreferrer">itch.io</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
