import Image from "next/image"
import { Github, Linkedin, Mail, Phone, Calendar, Download, ChevronRight, Code, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-navy-950 dark:to-navy-900">
      {/* Header/Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-900 dark:to-navy-950 clip-path-slant">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-dots opacity-10"></div>
          <div className="absolute -top-[40%] -right-[10%] h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl"></div>
          <div className="absolute top-[20%] -left-[10%] h-[300px] w-[300px] rounded-full bg-blue-300/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 blur-xl opacity-30 animate-pulse"></div>
              <div className="w-36 h-36 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-white/30 dark:border-blue-900/50 shadow-xl blue-glow">
                <Image
                  src="/me.jpg?height=200&width=200"
                  alt="Idriss EL ABIDI"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">Idriss EL ABIDI</h1>

            <p className="text-xl text-blue-100 mb-8 max-w-md">
              Software Engineering Student with a passion for building innovative solutions
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
            <Button
                variant="default"
                size="lg"
                className="gap-2 rounded-full bg-white text-blue-700 hover:bg-blue-50 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 transition-all duration-300"
                href="mailto:idriselabidi@gmail.com"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </Button>
              <a href="/idrissELABIDI_EN.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 rounded-full border-white/30 text-blue-700 hover:bg-white/10 dark:border-blue-700/50 dark:hover:bg-blue-800/40 transition-all duration-300"
              >
                <Download size={18} />
                <span>Download CV</span>
              </Button>
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="www.linkedin.com/in/idriss-elabidi" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Idriss-Abidi" className="text-white/80 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              {/* <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Phone size={24} />
              </a> */}
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="currentColor"
              className="text-blue-50 dark:text-navy-950"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* About Me Section */}
        <section className="mb-24 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="flex items-center mb-10">
            <div className="section-divider"></div>
            <h2 className="section-heading">About Me</h2>
            <div className="section-divider-reverse"></div>
          </div>

          <div className="glass-effect p-8 rounded-2xl card-shadow max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <p className="text-foreground text-lg leading-relaxed">
              Software Engineering student at ENSIAS with a strong background in Mathematics and Computer Science.
              Experienced in full-stack development, data engineering, and competitive programming. Passionate about
              building efficient and user-friendly applications with modern technologies.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60">
                <Code size={14} className="mr-1" /> Full-Stack Developer
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60">
                <Database size={14} className="mr-1" /> Data Engineer
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60">
                <Globe size={14} className="mr-1" /> Web Developer
              </Badge>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-24 relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="flex items-center mb-10">
            <div className="section-divider"></div>
            <h2 className="section-heading">Education</h2>
            <div className="section-divider-reverse"></div>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-md bg-white/80 dark:bg-navy-900/80 backdrop-blur-sm card-shadow">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-blue-700"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300">
                  École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-blue-700/70 dark:text-blue-400/70">
                  <Calendar size={14} />
                  <span>Sept 2023 - Present</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Currently in 2nd year of Software Engineering program at one of Morocco's most prestigious engineering
                  schools.
                </p>
                <Badge
                  variant="secondary"
                  className="mt-4 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
                >
                  Software Engineering
                </Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-md bg-white/80 dark:bg-navy-900/80 backdrop-blur-sm card-shadow">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-blue-700"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300">
                  UM5R - Faculté des Sciences Rabat (FSR)
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-blue-700/70 dark:text-blue-400/70">
                  <Calendar size={14} />
                  <span>Sept 2020 - June 2023</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Completed a bachelor's degree with focus on mathematics and computer science fundamentals.
                </p>
                <Badge
                  variant="secondary"
                  className="mt-4 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
                >
                  Mathematical and Computer Sciences (SMI)
                </Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-24 relative">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="flex items-center mb-10">
            <div className="section-divider"></div>
            <h2 className="section-heading">Professional Experience</h2>
            <div className="section-divider-reverse"></div>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-md bg-white/80 dark:bg-navy-900/80 backdrop-blur-sm card-shadow">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-blue-700"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300">
                  ELT Pipeline and BI Solution for CNRST
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-blue-700/70 dark:text-blue-400/70">
                  <Calendar size={14} />
                  <span>Centre National pour la Recherche Scientifique et Technique | July 2024 - August 2024</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-foreground">
                  <li>
                    Designed and implemented an ELT pipeline using Airbyte to extract and load data from various
                    structured sources (databases, CSV files) to PostgreSQL.
                  </li>
                  <li>
                    Used DBT to transform raw data in PostgreSQL into analysis-ready tables, ensuring data consistency
                    and quality.
                  </li>
                  <li>
                    Deployed the complete pipeline with Docker, and used Metabase to create dynamic dashboards for data
                    visualization.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Airbyte", "PostgreSQL", "DBT", "Docker", "Metabase"].map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-md bg-white/80 dark:bg-navy-900/80 backdrop-blur-sm card-shadow">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-blue-700"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300">
                  Web Application for Objective Contracts Management
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-blue-700/70 dark:text-blue-400/70">
                  <Calendar size={14} />
                  <span>Ministry of Economy and Finance | Sept 2022 - Oct 2022</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-foreground">
                  <li>Developed a web application with ASP.NET to manage the Ministry's Objective Contracts.</li>
                  <li>
                    Designed and implemented a dashboard to track project progress with detailed performance indicators
                    and SQL Server database integration.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["ASP.NET", "SQL Server", "Dashboard Design"].map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Academic Projects Section */}
        <section className="mb-24 relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="flex items-center mb-10">
            <div className="section-divider"></div>
            <h2 className="section-heading">Academic Projects</h2>
            <div className="section-divider-reverse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group overflow-hidden border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg bg-white/80 dark:bg-navy-900/80 backdrop-blur-sm card-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 dark:from-blue-800/10 dark:to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-800/20 dark:to-blue-700/20 rounded-bl-full"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-blue-900 dark:text-blue-300 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Spatial Quiz Web Application
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-blue-700/70 dark:text-blue-400/70">
                  <Calendar size={14} />
                  <span>ENSIAS | March 2025 - May 2025</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Interactive quiz platform using Next.js and Spring Boot, with JWT authentication for secure user
                  sessions and personalized content access. Integrated NASA API for real-time space news, Oracle
                  Database (OCI) for persistent data storage, and Cloudinary for efficient image management.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "React", "Next.js", "Oracle DB", "Cloudinary"].map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 p-0 h-auto"
                >
                  View Details{" "}
                  <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg bg-white/80 dark:bg-navy-900/80 backdrop-blur-sm card-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 dark:from-blue-800/10 dark:to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-800/20 dark:to-blue-700/20 rounded-bl-full"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-blue-900 dark:text-blue-300 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Internship Management Web Application
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-blue-700/70 dark:text-blue-400/70">
                  <Calendar size={14} />
                  <span>ENSIAS | Dec 2024 - Jan 2025</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Full-stack web application built with Next.js (frontend) and Spring Boot (backend), featuring
                  JWT-based authentication for secure, role-based access control. Utilized Oracle Cloud Infrastructure
                  (OCI), with Oracle Database for structured data storage and Object Storage Buckets for managing
                  uploaded documents.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "React", "Next.js", "Oracle DB", "Merise"].map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 p-0 h-auto"
                >
                  View Details{" "}
                  <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg bg-white/80 dark:bg-navy-900/80 backdrop-blur-sm card-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 dark:from-blue-800/10 dark:to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-800/20 dark:to-blue-700/20 rounded-bl-full"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-blue-900 dark:text-blue-300 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Document Analysis based on Language Model
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-blue-700/70 dark:text-blue-400/70">
                  <Calendar size={14} />
                  <span>ENSIAS | March 2024 - June 2024</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Developed an Arabic semantic search system using AraBERT, fine-tuned with Hugging Face and PyTorch for
                  document embedding, contextual understanding, and result reranking. Stored text embeddings in
                  Elasticsearch, applied cosine similarity for initial ranking, and used AraBERT for reranking to
                  improve result relevance.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "PyTorch", "BERT", "AraBERT", "Elasticsearch", "RAG"].map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 p-0 h-auto"
                >
                  View Details{" "}
                  <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg bg-white/80 dark:bg-navy-900/80 backdrop-blur-sm card-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 dark:from-blue-800/10 dark:to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-800/20 dark:to-blue-700/20 rounded-bl-full"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-blue-900 dark:text-blue-300 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Personal Project and Task Management Web Application
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-blue-700/70 dark:text-blue-400/70">
                  <Calendar size={14} />
                  <span>FSR | Feb 2023 - June 2023</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Developed a web application for managing personal projects and tasks using Laravel. Designed
                  application features with UML and managed database creation and maintenance with MySQL.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["PHP", "Laravel", "MySQL", "OpenAI API", "UML"].map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 p-0 h-auto"
                >
                  View Details{" "}
                  <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="flex items-center mb-10">
            <div className="section-divider"></div>
            <h2 className="section-heading">Skills & Languages</h2>
            <div className="section-divider-reverse"></div>
          </div>

          <div className="glass-effect p-8 rounded-2xl card-shadow">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                    Programming Languages & Scripting
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["C/C++", "Python", "Java", "JavaScript", "HTML/CSS", "PHP", "SQL"].map((skill) => (
                      <Badge
                        key={skill}
                        className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Database Management</h3>
                  <div className="flex flex-wrap gap-2">
                    {["MySQL", "PostgreSQL", "Microsoft SQL Server", "Oracle Database"].map((skill) => (
                      <Badge
                        key={skill}
                        className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Other Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Competitive Programming", "Data Engineering", "Full-Stack Development", "UML", "Docker"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Arabic", "English", "French"].map((lang) => (
                      <Badge
                        key={lang}
                        className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-24 relative">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="flex items-center mb-10">
            <div className="section-divider"></div>
            <h2 className="section-heading">Contact Me</h2>
            <div className="section-divider-reverse"></div>
          </div>

          <div className="glass-effect p-8 rounded-2xl card-shadow max-w-3xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="tel:+21262008-0473"
                className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-700 dark:text-blue-400">Phone</h3>
                  <p className="text-muted-foreground">+212 62008-0473</p>
                </div>
              </a>

              <a
                href="mailto:idriselabidi@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-700 dark:text-blue-400">Email</h3>
                  <p className="text-muted-foreground">idriselabidi@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/idriss-elabidi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-700 dark:text-blue-400">LinkedIn</h3>
                  <p className="text-muted-foreground">idriss-elabidi</p>
                </div>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Github className="text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-700 dark:text-blue-400">GitHub</h3>
                  <p className="text-muted-foreground">View my projects</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-blue-900 dark:from-blue-900 dark:to-navy-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Idriss EL ABIDI. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://linkedin.com/in/idriss-elabidi" className="hover:text-blue-200 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Idriss-Abidi" className="hover:text-blue-200 transition-colors duration-300">
              <Github size={20} />
            </a>
        
            <a href="mailto:idriselabidi@gmail.com" className="hover:text-blue-200 transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
