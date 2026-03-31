export const projectsData = [
  {
    id: 1,
    name: "Fast Feedback Development Platform",
    description:
      "Designed and deployed an enterprise Fast Feedback platform at Ericsson by containerising Java microservices with Docker and orchestrating them using Kubernetes-in-Docker (Kind). Replicated full staging-equivalent environments locally, cutting feature validation time from 30 minutes to under 10 minutes — a 3x improvement. Reduced cloud infrastructure dependency by 40–60% and per-machine memory footprint by 60% through Helm-based resource optimisation.",
    tools: ["Java", "Docker", "Kubernetes", "Helm", "Spring Boot"],
    role: "R&D Engineer",
    code: "",
    demo: "",
  },
  {
    id: 2,
    name: "Kubernetes Pod Connectivity Framework",
    description:
      "Engineered an automated pod connectivity and service discovery framework within Kubernetes at Ericsson to eliminate manual inter-service configuration. The framework automated service-to-service communication across distributed microservices, reducing manual configuration time by 80% and enabling seamless CI/CD pipeline integration across all connected services.",
    tools: ["Java", "Kubernetes", "Spring Boot", "CI/CD", "Jenkins"],
    role: "Associate Software Engineer",
    code: "",
    demo: "",
  },
  {
    id: 3,
    name: "Automated Test Suite Framework",
    description:
      "Built a comprehensive automated testing framework at Ericsson covering 150+ regression, smoke, integration, and contract test cases using JUnit and Robot Framework. The framework covered Kafka-backed service pipelines and REST API contracts, reducing manual QA effort by 40% and accelerating release cycles by 30%. Integrated into CI/CD pipelines via Jenkins and GitLab CI for continuous validation.",
    tools: ["JUnit", "Robot Framework", "Java", "GitLab CI", "Jenkins"],
    role: "Associate Software Engineer",
    code: "",
    demo: "",
  },
  {
    id: 4,
    name: "AI-Assisted Developer Tooling Integration",
    description:
      "Led the integration of Amazon Q Developer and Q CLI AI-assisted tooling into Ericsson's engineering workflows. Developed internal documentation, best-practice prompting guides, and training materials as a certified Prompt Engineer (Ericsson BCSS BOS). The initiative drove a 30% improvement in developer efficiency metrics in quarterly reviews and established AI-assisted workflows as a team standard.",
    tools: ["Amazon Q Developer", "Python", "Java", "AI Prompt Engineering"],
    role: "Associate Software Engineer",
    code: "",
    demo: "",
  },
];