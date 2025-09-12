import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Gamepad2 } from "lucide-react";

// ---------- PROFILE ----------
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
  },
};

// ---------- PROJECTS ----------
const PROJECTS = [
  {
    title: "WCB2",
    year: 2021,
	type: "Profesional Project",
	company: "Creative Monkey Games & Technologies Pvt. Ltd.",
    blurb:	
	"Step into the world of World Cricket Battle 2 (WCB2), the most advanced next-gen 3D cricket game on Google Play Store, delivering an unmatched real cricket simulation experience. Perfect for all cricket enthusiasts, WCB2 offers a wide array of World Cricket Championships, including the most authentic My Career Mode, thrilling T20 Cricket Leagues, and intense Real-Time Cricket Batting Multiplayer!",
    role: "Gameplay, Multiplayer Systems, Animations",
    tech: ["Unity", "C#", "Photon", "PUN 2", "Node.js"],
    media: "https://play-lh.googleusercontent.com/ZJLlYWTMm5EZl0-fzbwXyp2fgtynC2T47WNdbC_1LMncZh0e_SjRlg_pOOKaCO5dYw=w526-h296-rw",
    tags: ["Multiplayer", "Sports", "Mobile", "Android", "iOS",  "Sports", "Game"],
	link: "https://play.google.com/store/apps/details?id=com.creativemonkeygames.worldcricketbattle&hl=en_IN",
  },
  {
    title: "Haydos 380",
    year: 2022,
	type: "Profesional Project",
	company: "Creative Monkey Games & Technologies Pvt. Ltd.",
    blurb:	
	"Haydos 380 offers a highly realistic cricket game with detailed graphics and smooth animations. The game’s mechanics replicate real-life cricket scenarios, providing an immersive experience for players. With multiple game modes — such as Quick Match, Tournament, and Challenge Mode — the game offers plenty of variety to keep players engaged.",
    role: "Gameplay, Multiplayer Systems, Animations",
    tech: ["Unity", "C#", "Photon", "PUN 2", "Node.js" ],
    media: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/a7802075-54c9-476f-be3c-59262edc2c57/3124170776/haydos-380-screenshot",
    tags: ["Multiplayer", "Sports", "Mobile", "Android", "Sports", "Game"],
	link: "https://www.youtube.com/watch?v=hUrpYbnqq4Q",
  },
   {
    title: "Cricket Gangsta",
    year: 2023,
	type: "Profesional Project",
	company: "Creative Monkey Games & Technologies Pvt. Ltd.",
    blurb:	
	"Experience Thrilling 2-Over Cricket Matches With Friends and Players Worldwide! Dive into a rapid-fire, adrenaline-pumping cricket experience that fits in the palm of your hand. Whether you're teaming up with buddies or taking on global competitors, you're only minutes away from unleashing your inner Cricket Gangsta. Get ready to embark on a thrilling Cricket journey today!",
    role: "Gameplay, Multiplayer Systems, Animations",
    tech: ["Unity", "C#", "Photon", "PUN 2", "Node.js"],
    media: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfpfWqQjFms1axPqUoU5finT7E7PMiAD6pZX6WFmYN65KC1CEYxpPgUgjfJXbatmv1ZI&usqp=CAU",
    tags: ["Multiplayer", "Sports", "Mobile", "Android", "iOS","Sports", "Game"],
	link: "https://play.google.com/store/apps/details?id=com.creativemonkeygames.wcbt20cricketpremierleague&hl=en_IN",
  },
  {
    title: "Digital Twin",
    year: 2024,
	type: "Profesional Project",
	company: "L&T Technologies Services",
    blurb:
      "A cutting-edge Digital Twin VR Cockpit concept that was showcased at CES 2024/2025.Built on Amazon Web Services (AWS), this Digital Twin provides a virtual replica of the entire car electric-electronic architecture - from information clusters to infotainment, and from Zone Control Units to body. Digital Twin streamlines software development and prototype creation, cutting costs by 70% and accelerating timelines.",
    role: "AR Systems, UX, Optimization",
    tech: ["Unity", "VR", "MQTT"],
    media: "https://www.ltts.com/sites/default/files/inline-images/Marelli.png",
    tags: ["VR", "Windows","App", "Digital Twin", "Meta Quest", "Automotive"],
	link: "https://www.ltts.com/press-release/LTTS-supports-Marelli-revolutionizing-automotive-infotainment",

  },
  {
    title: "Ludo Habibi",
    year: 2022,
	type: "Profesional Project",
	company: "Creative Monkey Games & Technologies Pvt. Ltd.",
    blurb:
      "Ludo Habibi is a very entertaining game and a great digital adaptation of one of the world's most popular board games. Ludo Habibi is a strategy board game for 2 to 4 players and can be played between friends and family. The goal is simple, each player has to race their four tokens from start to finish (home) according to the rolls of a single dice. ",
    role: "VR Systems, HMI Integration, Leadership",
    tech: ["Unity", "C#", "Pun 2"],
    media: "https://play-lh.googleusercontent.com/e7_Qm1KVu0wOKi8hH-49V71rHArWtli1scDxDzqQvq-2CrV88pTaEE4xmJokSQ0gdA=w1052-h592",
    tags: ["Multiplayer", "Mobile", "Android", "Board Game"],
	link: "https://play.google.com/store/apps/details?id=com.staryalla.ludo.habibi&hl=en_IN",

  },
   {
    title: "Skill Premier League (SPL)",
    year: 2020,
	type: "Profesional Project",
    company: "Digient Technologies Pvt. Ltd.",
    blurb:
      " Skill Premier League is a Platform for Mobile gamers. Target on Skill based gaming genres like pool, shooter, arcades & more. There are various tournaments conducted in the app which are Skill based. Players can participate in this tournament via Free entry and SPL coins as per the tournament structure. Players can participate in the games multiple times throughout the tournament time.",
    role: "VR Systems, HMI Integration, Leadership",
    tech: ["Unity", "C#", "Pun 2", "BestHTTP", "Socket.iO"],
    media: "https://scontent.fmaa3-3.fna.fbcdn.net/v/t1.6435-9/68288304_111832240165563_7358938952843132928_n.png?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=FDDlhmItF0UQ7kNvwGjBBa0&_nc_oc=AdmfbuL8BvzKW94iVjAN13P9xnpjWOTv6YoSnvoj_XnPzwyS4uKwUHqCagHy5E5JP_7gbnTweANRWdmIQh_POvn1&_nc_zt=23&_nc_ht=scontent.fmaa3-3.fna&_nc_gid=xzamj3LlQuNouKfRdUfl4g&oh=00_AfYkHcWtHkd99iABavUlvXzLKKECh1yggkojzPkQ11AT-w&oe=68E1ECA0",
    tags: ["Multiplayer", "Mobile", "Android", "iOS", "Real Money"],
	link: "https://www.facebook.com/PlaySPLOfficial/",
  },
   {
    title: "Street Chaser",
    year: 2017,
	type: "Profesional Project",
	company: "iGold Technologies Private Limited",
    blurb:
      " Your companion was robbed by a gang, You can help by running behind the robber to catch them. Run as fast as you can, Dodge the obstacles coming your way.Chase thief without loosing, Catch them by throwing bottles and kicking balls hitting them! Avoid obstacles by jumping and sliding while running through the streets",
    role: "VR Systems, HMI Integration, Leadership",
    tech: ["Unity", "C#", "Pun 2"],
    media: "https://play-lh.googleusercontent.com/BFyWSNUxrWOZ8yNnWiuoQNjF8-jYrFVzYKkLAusvB0qwW5Np9lspRLA3de38fnPC2jo",
    tags: ["Multiplayer", "Mobile", "Android", "iOS"],
	link: "https://play.google.com/store/apps/details?id=com.igoldtech.streetchaser&hl=en_IN",
  },
   {
    title: "Unblock Ball",
    year: 2017,
	type: "Profesional Project",
    company: "iGold Technologies Private Limited",
    blurb:
      " Pocket bouncing balls by moving blocks in this challenging, addictive & brand new Unblock game. 1000s of interesting puzzles in six different game modes each having hundreds of puzzles. Ultimate mind game to pass your boring moments and it also refreshes your thinking. Pocket the colored balls in the same color holes in given moves, avoid dropping them anywhere else",
    role: "VR Systems, HMI Integration, Leadership",
    tech: ["Unity", "C#", "Pun 2"],
    media: "https://play-lh.googleusercontent.com/6hcnH6Gi3ZlKMJUxxqy-0jXO9Ah3zBNFT2hw7ye7w4JtvLL3R9Ugwmi4bznFYc68CmA=w526-h296-rw",
    tags: ["Mobile", "Android", "iOS"],
	link: "https://play.google.com/store/apps/details?id=roll.unblock.ball.block.puzzle&hl=en_IN",
  },
  {
    title: "HMI - SmartCockpit",
    year: 2025,
	type: "Profesional Project",
	company: "L&T Technologies Services",
    blurb:
      " Powered by AI and machine learning, this platform offers a new level of personalization and connectivity, integrating seamlessly with users’ digital lives. It features simplified menus and AI-enabled experiences for navigation, media, climate, lighting, and productivity. The system would use AR to overlay information, such as the turn by turn navigation infomation",
    role: "VR Systems, HMI Integration, Leadership",
    tech: ["Unity", "C#", "AR"],
    media: "https://moparinsiders.com/wp-content/uploads/2023/09/Over-The-Air-OTA-Updates-and-WiFi-with-the-Uconnect-5-system.-Stellantis.-1-780x470.jpeg",
    tags: ["HMI", "Automotive", "AR"],
	link: "https://www.stellantis.com/en/innovation/intelligent-vehicles-software",

  },
  {
    title: "MeshGeneration",
    year: 2021,
	type: "Personal Project",
	company: "Personal",
    blurb:
      " Created mesh dynamically in unity. The mesh includes both floor and walls along with textures. This allows you to map points first and then when all the points are plotted, the wall and the floor meshes are generated. This system could be developed further for games that involves creating buildings dynamically.",
    role: "VR Systems, HMI Integration, Leadership",
    tech: ["Unity", "C#"],
    media: "https://camo.githubusercontent.com/e761aacf8f802aaabd606fd5a63a0e4edf7bd6c0591d2f0255523cb471f7ba1d/68747470733a2f2f692e696d6775722e636f6d2f4266464a5a49732e676966",
    tags: ["Personal"],
	link: "https://github.com/AswinVenkataraman/MeshGeneration",

  },
   {
    title: "InventorySystem",
    year: 2021,
	type: "Personal Project",
	company: "Personal",
    blurb:
      " A flexible inventory system made with Zenject DI that supports merging stackable items, swapping different ones, transferring items into the player’s inventory, and dropping them back into the world. This system balances functionality and simplicity, making it suitable for RPGs, survival games, or any project that requires efficient item management.",
    role: "VR Systems, HMI Integration, Leadership",
    tech: ["Unity", "C#"],
    media: "https://camo.githubusercontent.com/a89c7375346fb2087ab3f69d3c506c2a46be45f7b3d04b656cb1ba0160b37ef0/68747470733a2f2f692e696d6775722e636f6d2f487a4e76644a362e676966",
    tags: ["Personal"],
	link: "https://github.com/AswinVenkataraman/MeshGeneration",

  },
  {
    title: "AStarAlgorithm",
    year: 2021,
	type: "Personal Project",
	company: "Personal",
    blurb:
      " Basic AStar Algorithm Made In Unity. It has simple obstacle avoidance algorithm and find path from start point to the end point. The default move cost between cells are 10 and 14 for non diagonals and diagonals respectively. The algorithm is slowed down intentionally to view its search progress.",
    role: "VR Systems, HMI Integration, Leadership",
    tech: ["Unity", "C#"],
    media: "https://camo.githubusercontent.com/cef9447dc8c605b526c696ed931e2d98dc0c297dbfb576ec3e8e84ceca519c13/68747470733a2f2f692e696d6775722e636f6d2f4b7a326c6e786c2e676966",
    tags: ["Personal"],
	link: "https://github.com/AswinVenkataraman/AStarAlgorithm/",

  },
];

// ---------- SKILLS ----------
const SKILLS = {
  Core: ["Unity (2D, 3D, AR/VR, HMI)", "C#", "Multiplayer (Photon)", "Digital Twin"],
  Tools: ["Unity", "Visual Studio", "Blender", "Photoshop", "Figma"],
  Plus: ["Shaders", "Cinemachine", "Timeline", "Addressables", "UI", "Optimization"],
};

// ---------- EXPERIENCE ----------
const EXPERIENCE = [
  {
    role: "Technology Lead",
    company: "L&T Technology Services",
    period: "Oct 2023 – Aug 2025",
    points: [
		"Worked on various HMI related projects including creating fully functional vehicle infotainment system from scratch for production vehicles for a popular automotive company.",
		"Created a cutting-edge Digital Twin VR Cockpit concept and showcased it at CES 2024/2025",
		"Delivered high-quality HMI solutions for automotive industry applications",
		"Handled Communication between automobile system using MQTT and Ethernet Communications in Unity",
		"Created a VNC Streaming service in Unity to stream live cockpit details into the twin.",
		"Supervised and mentored a team of around 10 unity developers to create customized solutions for various clients"
    ],
  },
  {
    role: "Unity Developer",
    company: "Creative Monkey Games & Technologies Pvt. Ltd.",
    period: "Jul 2021 – Oct 2023",
    points: [
		"Developed core logic for real-time multiplayer cricket game, scaling from prototype to seamless product with rapidly growing player base",
		"Implemented robust game features including re-connection systems, leaderboards, achievements, shop system and much more",
		"Implemented batting logic such as bat-ball connection, batting animations, taunts, timing meter.",
		"Implemented bowling logic such as custom ball path curves, bowling animations, timing meter.",
		"Implemented fielding logic such as fielding management, fielding animations and reaction and runs scoring system.",
		"Developed custom multiplayer mode using Node.JS and Photon networking",
		"Created AR product configuration app enabling players to project shop characters, change skins, and view them through camera in real-time",
    ],
  },
  {
    role: "Unity Developer",
    company: "Digient Technologies Pvt. Ltd.",
    period: "Nov 2019 – July 2021",
    points: [
		"Built mobile gaming platform (Skill Premier League - SPL) involving native coding integration between Android, iOS, and Unity",
		"Implemented tournament and real-time battle modes using Best HTTP/2 and asset bundles",
		"Developed and integrated multiple games including LUDO, Dare2Jump, FuzzyBirds, 9Ball and Sequence",
		"Converted existing games (PoolGame and Darts) into Augmented Reality (AR) experiences",
		"Created a iGaming system that uses leaderboards to distribute real cash rewards",
    ],
  },
  {
    role: "Unity Developer",
    company: "iGold Technologies Private Limited",
    period: "Nov 2016 – Nov 2019",
    points: [
		"Developed multiple games in collaboration with designers, consistently delivering expected outputs.",
		"StreetChaser (Android/iOS) - Contributed to game with 100+ Million Downloads:",
		"Implemented core gameplay with advanced pathfinding algorithms",
		"Optimized game performance for low-end devices while maintaining 60 fps",
		"Developed new gameplay features and updated game UI",
		"Monitored game crashes, produced fixes, and resolved customer issues",
		"Worked on unreleased AR game similar to Pokemon-Go with GPS-based gameplay, point, accumulation, and leaderboard competition",
		"Contributed to additional projects: Tapped Geo (Android) and Rope Rider (iOS)",
    ],
  },
];

const TAGS = ["All", "AR", "VR", "Multiplayer", "Mobile", "Automotive", "Personal"];

// ---------- UI Components ----------
function SectionTitle({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-2xl font-semibold text-white drop-shadow mb-6"
    >
      {children}
    </motion.h2>
  );
}

function ProjectCard({ p }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg overflow-hidden hover:shadow-xl hover:border-white/50 transition">
        <a href={p.link} target="_blank">
	
		{p.media && <img src={p.media} alt={p.title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"/>}
		</a>
        <div className="p-4 text-white">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold drop-shadow">{p.title}</h3> 
            <span className="text-xs bg-white/30 px-2 py-1 rounded-full">{p.year}</span>
          </div>
		  		  <p className="text-xs text-white/80 mt-1 line-clamp-0"><i>({p.company})</i></p>

          <p className="text-sm text-white/80 mt-1 line-clamp-10">{p.blurb}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {(p.tech || []).map((t) => (
              <span key={t} className="text-xs bg-white/20 px-2 py-1 rounded-full border border-white/40">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SkillsList() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-4">
      {Object.entries(SKILLS).map(([group, items]) => (
        <div
          key={group}
          className="rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg p-4 text-white hover:bg-white/30 transition"
        >
          <h3 className="font-semibold mb-2 drop-shadow">{group}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((s) => (
              <span key={s} className="text-xs bg-white/20 px-2 py-1 rounded-full border border-white/40">
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function ExperienceList() {
  return (
    <div className="grid gap-4">
      {EXPERIENCE.map((e, i) => (
        <motion.div
          key={`${e.role}-${e.company}`}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg p-4 text-white hover:bg-white/30 transition"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold drop-shadow">{e.role} · {e.company}</h3>
            <span className="text-xs bg-white/30 px-2 py-1 rounded-full">{e.period}</span>
          </div>
          <ul className="list-disc list-inside text-sm text-white/80 mt-2 space-y-1">
            {(e.points || []).map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [q, setQ] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  const blobStyle = (offsetX, offsetY) => ({
    transform: `translate(${mousePos.x * offsetX}px, ${mousePos.y * offsetY}px) scale(1.2)`
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
      {/* Animated Blobs with Strong Parallax */}
      <div
        className="absolute -z-10 top-0 left-0 w-[30rem] h-[30rem] bg-pink-500/40 rounded-full blur-3xl animate-blob"
        style={blobStyle(0.01, 0.01)}
      ></div>
      <div
        className="absolute -z-10 top-40 right-0 w-[30rem] h-[30rem] bg-purple-500/40 rounded-full blur-3xl animate-blob animation-delay-2000"
        style={blobStyle(-0.008, 0.01)}
      ></div>
      <div
        className="absolute -z-10 bottom-0 left-1/2 w-[30rem] h-[30rem] bg-indigo-500/40 rounded-full blur-3xl animate-blob animation-delay-4000"
        style={blobStyle(0.008, -0.008)}
      ></div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-20 backdrop-blur bg-white/10 border-b border-white/20"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5" />
            <span className="font-semibold drop-shadow">{PROFILE.name}</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <a
            href={PROFILE.links.resume}
            target="_blank"
            rel="noreferrer"
            className="flex items-center bg-white/20 backdrop-blur-lg px-3 py-1 rounded-full text-sm border border-white/30 hover:bg-white/30 transition"
          >
            <Download className="h-4 w-4 mr-1" /> Resume
          </a>
        </div>
      </motion.nav>

      {/* HERO */}
      <header className="max-w-6xl mx-auto px-4 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 drop-shadow"
        >
          {PROFILE.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg text-white/80 max-w-2xl mx-auto drop-shadow"
        >
          {PROFILE.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full bg-white/20 border border-white/30 hover:bg-white/30 transition">GitHub</a>
          <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full bg-white/20 border border-white/30 hover:bg-white/30 transition">LinkedIn</a>
          <a href={PROFILE.links.itch} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full bg-white/20 border border-white/30 hover:bg-white/30 transition">itch.io</a>
        </motion.div>
      </header>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 pb-16">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="flex flex-col md:flex-row gap-3 md:items-center mb-6">
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-3 py-1 rounded-full text-sm border border-white/30 backdrop-blur-lg ${activeTag === t ? 'bg-white/40' : 'bg-white/20'} hover:bg-white/30 transition`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="md:ml-auto">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects, tech, tags…"
              className="border border-white/30 bg-white/20 backdrop-blur-lg px-3 py-1 rounded-full w-full md:w-72 text-white placeholder-white/70 focus:ring-2 focus:ring-pink-300 transition"
            />
          </div>
        </div>
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-white/80">No projects found.</p>
        )}
      </section>
	  
      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-4 pb-16">
        <SectionTitle>Skills</SectionTitle>
        <SkillsList />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-4 pb-16">
        <SectionTitle>Experience</SectionTitle>
        <ExperienceList />
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 pb-16">
        <SectionTitle>Contact</SectionTitle>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg p-6 text-white text-center hover:bg-white/30 transition"
        >
          <p className="text-lg mb-3">Let’s build something together 🚀</p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="px-4 py-2 rounded-full bg-white/20 border border-white/30 hover:bg-white/30 transition"
          >
            Email Me
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/20 backdrop-blur bg-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
            <a href={PROFILE.links.itch} target="_blank" rel="noreferrer" className="hover:text-white transition">itch.io</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
