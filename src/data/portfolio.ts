export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  image: string;
  timeline: string;
  liveType: "Live" | "GitHub" | "NPM";
  tags: string[];
  bulletPoints: string[];
  engineeringFocus: string;
  metrics: string;
  problem: string;
  solution: string;
  architectureDetails: {
    layer: string;
    description: string;
  }[];
  tradeoffs: {
    decision: string;
    chosen: string;
    alternative: string;
    reasoning: string;
  }[];
  failureScenarios: {
    failure: string;
    impact: string;
    resolution: string;
  }[];
  codeSnippet: {
    title: string;
    language: string;
    code: string;
  };
  githubUrl: string;
  demoUrl?: string;
  status: "Production" | "Active" | "Research";
}

export interface Article {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: {
    heading: string;
    text: string;
    codeOrDiagram?: string;
  }[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  contributions: string[];
  techStack: string[];
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  details: string;
  focus: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    initials: "AS.",
    name: "Aditya Singh",
    role: "Backend & Distributed Systems Engineer",
    location: "India",
    statusText: "Available for Software Engineering & Backend Systems roles",
    heroHeading: "I build systems, not just endpoints.",
    heroSubhead: "Backend engineering · Distributed systems · Infrastructure",
    heroDescription:
      "Building reliable services, designing asynchronous workflows, and exploring the architectural trade-offs that make systems resilient under scale. Focused on queue dynamics, database optimization, and fault-tolerant microservices.",
    currentFocus: [
      "Distributed queue throughput & worker backpressure",
      "PostgreSQL query optimization & transactional locking",
      "Event-driven architecture with RabbitMQ & gRPC",
    ],
    email: "aditya3012singh@gmail.com",
    github: "https://github.com/aditya3012singh",
    linkedin: "https://linkedin.com/in/aditya3012singh",
    leetcode: "https://leetcode.com/u/aditya3012singh",
    resumeUrl: "https://drive.google.com/file/d/18oDRZjVKQB3Tp2WLcekpnn_QoXWqPd2m/view?usp=sharing",
  },

  projects: [
    {
      id: "challengx",
      index: "01",
      title: "ChallengX – Real-Time Competitive Coding Platform",
      subtitle: "1v1/team coding battles with isolated online judge and live match synchronization",
      image: "/challengx_preview.jpg",
      timeline: "Jan 2026 – Present",
      liveType: "Live",
      tags: ["BullMQ", "Redis", "gRPC", "Docker", "WebSockets", "Prometheus", "Grafana"],
      bulletPoints: [
        "Built a real-time competitive coding platform with 1v1/team battles, matchmaking, ELO ratings, spectator mode, and live match synchronization.",
        "Designed a distributed online judge using BullMQ, Redis, gRPC, and isolated Docker containers for asynchronous, multi-language code execution.",
        "Engineered a dual-mode event architecture using local events and Redis Pub/Sub with idempotency, event persistence, retries, and dead-letter handling.",
        "Implemented production observability with trace propagation, structured logging, Prometheus, and Grafana for monitoring latency and system health.",
      ],
      engineeringFocus: "Execution isolation, judging workflows, real-time events, and failure handling.",
      metrics: "Sub-second code evaluation (<450ms) · Sandboxed cgroup limits · Zero host leakage",
      status: "Production",
      githubUrl: "https://github.com",
      demoUrl: "https://challengx.live",
      problem:
        "Executing untrusted user-submitted code in multi-language environments (C++, Python, Java) introduces major security vulnerabilities: fork bombs, infinite memory allocation, malicious filesystem access, and port scanning. Contest scenarios also require instantaneous real-time match state synchronization without database write bottlenecks.",
      solution:
        "Architected an isolated execution sandbox utilizing pre-warmed Docker containers secured with Linux cgroups (CPU/RAM caps), strict seccomp profiles blocking dangerous syscalls, and read-only tmpfs mounts. Submissions are dispatched through BullMQ and Redis, evaluated against test cases via gRPC, and streamed over WebSockets.",
      architectureDetails: [
        {
          layer: "Contest Gateway & WebSockets",
          description:
            "Bidirectional WebSocket server handling 1v1 matchmaking, spectator broadcasts, and match state synchronization.",
        },
        {
          layer: "Distributed Online Judge",
          description:
            "BullMQ + Redis task queues dispatching jobs over gRPC to isolated Docker container runners with cgroup CPU/memory caps.",
        },
        {
          layer: "Dual-Mode Event Architecture",
          description:
            "Local event bus for in-process dispatch combined with Redis Pub/Sub for multi-instance match synchronization and dead-letter handling.",
        },
        {
          layer: "Production Observability",
          description:
            "Distributed tracing, structured logging, Prometheus metrics, and Grafana dashboards monitoring latency and judge node health.",
        },
      ],
      tradeoffs: [
        {
          decision: "Pre-warmed Container Pool vs Cold Docker Run",
          chosen: "Pre-warmed Container Pool",
          alternative: "Fresh container per submission",
          reasoning:
            "Cold Docker container startup adds 800ms-1200ms latency. A pre-warmed pool running under strict cgroups reduced evaluation latency to under 450ms.",
        },
      ],
      failureScenarios: [
        {
          failure: "Infinite Loop / Resource Exhaustion Attack",
          impact: "Host kernel CPU starvation and thread exhaustion.",
          resolution:
            "Linux cgroups enforce pids.max=64 and cpu.cfs_quota_us limits. Watchdog timer terminates rogue jobs after a 2000ms threshold.",
        },
      ],
      codeSnippet: {
        title: "Docker Sandbox Execution Runner",
        language: "typescript",
        code: `import Docker from 'dockerode';
const docker = new Docker();

export async function runInSandbox(codeFilePath: string, languageConfig: LanguageConfig) {
  const container = await docker.createContainer({
    Image: languageConfig.image,
    Cmd: languageConfig.execCommand,
    NetworkDisabled: true, // Complete isolation
    HostConfig: {
      Memory: 256 * 1024 * 1024,      // 256 MB RAM limit
      NanoCpus: 1_000_000_000,        // 1 CPU core allocation
      PidsLimit: 64,                  // Prevent fork bombs
      ReadonlyRootfs: true,
      Binds: [\`\${codeFilePath}:/app/solution:ro\`],
      SecurityOpt: ['no-new-privileges:true', 'seccomp=/etc/docker/seccomp-judge.json'],
    },
  });

  await container.start();
  return monitorContainerExecution(container, languageConfig.timeoutMs);
}`,
      },
    },

    {
      id: "enterprise-payment-engine",
      index: "02",
      title: "Enterprise Payment Engine",
      subtitle: "Financial transaction engine with double-entry ledger accounting and transactional outbox",
      image: "/payment_engine_preview.jpg",
      timeline: "Aug 2026",
      liveType: "GitHub",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Apache Kafka", "Redis", "Docker"],
      bulletPoints: [
        "Designed a financial transaction engine using Java, Spring Boot, PostgreSQL, and double-entry ledger accounting to maintain consistent account balances.",
        "Implemented Transactional Outbox, idempotency, and Redis distributed locking for reliable event delivery and duplicate-safe transaction processing.",
        "Built asynchronous Kafka workers with retries, exponential backoff, DLQs, and reconciliation jobs for resilient payment processing and failure recovery.",
      ],
      engineeringFocus: "Double-entry ledger accounting, transactional outbox, distributed locking, and reconciliation.",
      metrics: "Guaranteed exactly-once accounting semantics · Zero balance discrepancies · 100% audit trail",
      status: "Active",
      githubUrl: "https://github.com",
      problem:
        "Financial transactions in high-throughput environments are prone to double-spending, race conditions, partial write corruption, and silent network drops between payment gateways and internal databases.",
      solution:
        "Engineered an enterprise transaction engine in Java & Spring Boot built on immutable double-entry ledger accounting principles. Enforced Redis distributed locks on account mutations, combined with the Transactional Outbox pattern and Kafka workers with dead-letter queues and automated daily ledger reconciliation.",
      architectureDetails: [
        {
          layer: "Core Transaction Ledger",
          description:
            "Strict double-entry accounting in PostgreSQL where total debits strictly equal total credits within an atomic ACID transaction.",
        },
        {
          layer: "Transactional Outbox & Kafka",
          description:
            "Outbox pattern ensures payment events are published to Kafka topics reliably without dual-write inconsistency.",
        },
        {
          layer: "Concurrency & Distributed Locking",
          description:
            "Redis distributed locks (Redlock) keyed by account ID prevent concurrent race conditions during debit authorizations.",
        },
        {
          layer: "Reconciliation & DLQ",
          description:
            "Automated audit workers cross-check gateway settlements against internal ledger records with automated exponential backoff and DLQ routing.",
        },
      ],
      tradeoffs: [
        {
          decision: "Double-Entry Ledger vs Single Balance Column",
          chosen: "Immutable Double-Entry Ledger",
          alternative: "UPDATE accounts SET balance = balance - amount",
          reasoning:
            "Direct balance updates lose historical context and invite silent accounting discrepancies. An append-only ledger provides an irrefutable audit trail.",
        },
      ],
      failureScenarios: [
        {
          failure: "Duplicate Payment Callback / Network Retry",
          impact: "Customer balance debited twice for a single order.",
          resolution:
            "Redis-backed idempotency key verification checked at gateway entry, rejecting duplicate transaction requests before ledger commit.",
        },
      ],
      codeSnippet: {
        title: "Atomic Double-Entry Ledger Posting",
        language: "java",
        code: `@Transactional(isolation = Isolation.SERIALIZABLE)
public LedgerEntry postTransaction(TransactionRequest request) {
    // 1. Acquire distributed lock on payer account
    String lockKey = "lock:account:" + request.getPayerAccountId();
    if (!redisLock.acquire(lockKey, 5000)) {
        throw new ConcurrentMutationException("Account locked by concurrent transaction");
    }

    try {
        // 2. Validate balance and create debit/credit entries (debits == credits)
        Account payer = accountRepository.findByIdForUpdate(request.getPayerAccountId());
        Account payee = accountRepository.findByIdForUpdate(request.getPayeeAccountId());
        
        LedgerEntry debit = new LedgerEntry(payer, request.getAmount(), EntryType.DEBIT);
        LedgerEntry credit = new LedgerEntry(payee, request.getAmount(), EntryType.CREDIT);
        
        ledgerRepository.saveAll(List.of(debit, credit));
        outboxRepository.save(new OutboxEvent("PAYMENT_SETTLED", request));
        return debit;
    } finally {
        redisLock.release(lockKey);
    }
}`,
      },
    },

    {
      id: "create-base-backend",
      index: "03",
      title: "Create Base Backend – Production Backend Scaffolding CLI",
      subtitle: "Interactive NPM CLI that scaffolds production-ready Node.js/Express architectures",
      image: "/cli_scaffolding_preview.jpg",
      timeline: "Jul 2026",
      liveType: "NPM",
      tags: ["Node.js", "TypeScript", "Express", "RabbitMQ", "Kafka", "Prisma", "Docker"],
      bulletPoints: [
        "Developed and published @aditya3012singh/create-base-backend, an interactive NPM CLI that scaffolds production-ready Node.js/Express backends with npx @aditya3012singh/create-base-backend.",
        "Built customizable architecture selection for JavaScript/TypeScript, PostgreSQL + Prisma or MongoDB + Mongoose, and Redis Pub/Sub, RabbitMQ, or Apache Kafka, automatically pruning unused dependencies and configurations.",
        "Built reusable production infrastructure including JWT/OAuth authentication, rate limiting, Redis caching, BullMQ workers, structured logging, request tracing, Prometheus metrics, health checks, and automated tests.",
        "Abstracted event publishing and subscription behind a unified event-bus interface, allowing applications to switch between Redis, RabbitMQ, and Kafka without changing business logic.",
      ],
      engineeringFocus: "CLI tooling, modular architecture scaffolding, dependency pruning, and event-bus abstraction.",
      metrics: "Published on NPM Registry · Zero external runtime bloat · Multi-broker abstraction",
      status: "Production",
      githubUrl: "https://github.com",
      demoUrl: "https://www.npmjs.com/package/@aditya3012singh/create-base-backend",
      problem:
        "Setting up production-grade backend services with structured logging, Docker, message brokers, caching, and ORMs from scratch repeatedly takes days and frequently leads to inconsistent architectural patterns.",
      solution:
        "Developed and published an open-source NPM CLI tool that dynamically scaffolds clean-architecture Node.js/Express backends. Supports interactive stack selection (SQL vs NoSQL, RabbitMQ vs Kafka vs Redis), automatically prunes unselected libraries, and configures production-ready telemetry out of the box.",
      architectureDetails: [
        {
          layer: "Interactive CLI Engine",
          description:
            "Lightweight interactive CLI runner using Commander and Prompts to collect project configurations and target requirements.",
        },
        {
          layer: "Dynamic Dependency & File Pruner",
          description:
            "AST-aware template generator that strips out unused brokers, drivers, and Dockerfiles to guarantee zero dependency bloat.",
        },
        {
          layer: "Unified Event-Bus Abstraction",
          description:
            "Generic publish/subscribe interface abstracting RabbitMQ, Redis, and Kafka behind standard EventBus contracts.",
        },
        {
          layer: "Production Infrastructure Scaffolding",
          description:
            "Pre-configured Prometheus metrics, Pino structured logging, Docker Compose networks, and JWT security middleware.",
        },
      ],
      tradeoffs: [
        {
          decision: "Unified Event-Bus Interface vs Provider-Specific SDKs",
          chosen: "Unified Event-Bus Interface",
          alternative: "Direct amqplib / kafkajs usage in services",
          reasoning:
            "Abstracting event operations behind an interface allows projects to transition from Redis Pub/Sub to RabbitMQ or Kafka seamlessly without touching core domain code.",
        },
      ],
      failureScenarios: [
        {
          failure: "Broker Disconnect During Event Publication",
          impact: "Unpublished events lost or unhandled socket exceptions crash the server.",
          resolution:
            "In-memory backoff buffer with exponential retry that queues events during transient broker reconnections.",
        },
      ],
      codeSnippet: {
        title: "Unified EventBus Interface Contract",
        language: "typescript",
        code: `export interface EventBus {
  publish<T>(topic: string, event: T): Promise<void>;
  subscribe<T>(topic: string, handler: (event: T) => Promise<void>): Promise<void>;
}

// Seamlessly switch between Redis, RabbitMQ, or Kafka without changing business logic
export function createEventBus(type: 'redis' | 'rabbitmq' | 'kafka'): EventBus {
  switch (type) {
    case 'rabbitmq':
      return new RabbitMQEventBus(process.env.RABBITMQ_URL);
    case 'kafka':
      return new KafkaEventBus(process.env.KAFKA_BROKERS.split(','));
    case 'redis':
    default:
      return new RedisPubSubEventBus(process.env.REDIS_URL);
  }
}`,
      },
    },

    {
      id: "kiet-dsa-tracker",
      index: "04",
      title: "KIET DSA Tracker",
      subtitle: "Coding analytics and distributed job processing engine",
      image: "/kiet_dsa_tracker_preview.jpg",
      timeline: "2025 – 2026",
      liveType: "Live",
      tags: ["Node.js", "Redis", "BullMQ", "PostgreSQL", "Docker", "Prisma"],
      bulletPoints: [
        "Engineered an asynchronous job queue pipeline using BullMQ and Redis to automate daily coding analytics ingestion across competitive platforms.",
        "Implemented token-bucket domain throttling and exponential backoff retries with jitter, completely eliminating upstream HTTP 429 rate-limiting bans.",
        "Batch-upserted parsed submission records (100 rows/tx) to PostgreSQL via PgBouncer connection pooling, cutting database IOPS and row-lock contention by 84%.",
        "Configured stalled job heartbeats, automated DLQ isolation for malformed payloads, and Prometheus queue telemetry monitoring worker active states.",
      ],
      engineeringFocus: "Queue processing, worker throughput, retries, and observability.",
      metrics: "25,000+ daily submissions parsed · 99.98% queue reliability · <35ms p95 job processing latency",
      status: "Production",
      githubUrl: "https://github.com",
      demoUrl: "https://demo.example.com",
      problem:
        "Tracking coding metrics across hundreds of competitive programmers required periodic automated scraping and webhook ingestion from LeetCode, Codeforces, and CodeChef. Synchronous HTTP polling choked server execution threads, caused database lock contention, and crashed whenever external platforms imposed rate limits.",
      solution:
        "Engineered an asynchronous worker-queue pipeline using BullMQ and Redis. Ingestion triggers are immediately acknowledged as lightweight task events and dispatched into prioritized BullMQ queues with exponential backoff retries, token-bucket domain throttling, and horizontally scalable worker pools that batch transactional writes to PostgreSQL.",
      architectureDetails: [
        {
          layer: "Ingestion & API Gateway",
          description:
            "Receives sync triggers and manual audit requests. Validates inputs, assigns idempotency tokens, and enqueues jobs without blocking request threads.",
        },
        {
          layer: "Queue Orchestration (BullMQ + Redis)",
          description:
            "Segregated into three distinct queues: High-Priority (single user on-demand audit), Standard (nightly bulk scrape), and Dead Letter Queue (DLQ for fatal payloads).",
        },
        {
          layer: "Worker Processing Pool",
          description:
            "Node.js worker instances with configurable concurrency. Workers utilize token-bucket rate limiters per upstream domain to prevent 429 penalties.",
        },
        {
          layer: "Data Store & Persistence",
          description:
            "PostgreSQL connected via PgBouncer connection pooling. Batch upserts commit up to 100 parsed submission rows per atomic transaction.",
        },
        {
          layer: "Telemetry & Observability",
          description:
            "Prometheus metrics scraping BullMQ queue depth, stalled job alerts, worker active durations, and Redis memory consumption.",
        },
      ],
      tradeoffs: [
        {
          decision: "BullMQ on Redis vs. Apache Kafka",
          chosen: "BullMQ + Redis",
          alternative: "Apache Kafka",
          reasoning:
            "For sub-100k daily task workloads requiring native delayed retries, job prioritization, and instant job removal, Kafka introduces excessive KRaft/ZooKeeper operational complexity. Redis provides memory-speed status tracking and low latency.",
        },
        {
          decision: "Batch Upserts vs. Immediate Single Row Inserts",
          chosen: "Chunked Batch Upsert (100 rows / tx)",
          alternative: "Per-submission individual inserts",
          reasoning:
            "Writing each submission individually created lock escalation and saturated PostgreSQL IOPS during nightly cron syncs. Batching reduced write roundtrips by 84% and eliminated deadlock exceptions.",
        },
      ],
      failureScenarios: [
        {
          failure: "Upstream Platform Rate Limiting (HTTP 429)",
          impact: "External provider temporarily bans worker IP; unhandled requests get dropped.",
          resolution:
            "Engineered token-bucket rate limiting per provider domain combined with BullMQ exponential backoff with random jitter (2^n + jitter) before retry.",
        },
        {
          failure: "Worker Process Crash Mid-Execution",
          impact: "Job is left in an uncompleted active state, causing user data to desynchronize.",
          resolution:
            "BullMQ heartbeat lock renewal. If a worker terminates abruptly without renewing lock within 30s, Redis marks the job stalled and automatically reassigns it to an active worker.",
        },
      ],
      codeSnippet: {
        title: "Queue Worker with Idempotency & Exponential Backoff",
        language: "typescript",
        code: `import { Worker, Job } from 'bullmq';
import { redisClient } from './redis';
import { processSubmissionBatch } from './ingestion';

export const scraperWorker = new Worker(
  'SCRAPER_QUEUE',
  async (job: Job<{ userId: string; platform: string; idempotencyKey: string }>) => {
    const { userId, platform, idempotencyKey } = job.data;
    
    // Acquire temporary processing lock to prevent duplicate concurrent runs
    const lockKey = \`lock:scrape:\${platform}:\${userId}\`;
    const acquired = await redisClient.set(lockKey, 'locked', 'NX', 'EX', 120);
    if (!acquired) {
      return { status: 'skipped', reason: 'already_processing' };
    }

    try {
      // Execute batched ingestion with domain-level token bucket
      const result = await processSubmissionBatch(userId, platform);
      return { status: 'completed', processedCount: result.count };
    } finally {
      await redisClient.del(lockKey);
    }
  },
  {
    connection: redisClient,
    concurrency: 5,
    limiter: { max: 10, duration: 1000 },
  }
);`,
      },
    },
  ] as Project[],

  articles: [
    {
      id: "job-queue-backpressure",
      index: "01",
      title: "What happens when a job queue falls behind?",
      subtitle: "Queue depth, processing rate, backpressure, and worker capacity.",
      category: "DISTRIBUTED SYSTEMS",
      readTime: "6 min read",
      date: "Oct 2026",
      summary:
        "A breakdown of what occurs when event arrival velocity exceeds consumer processing bandwidth, how backpressure cascades, and how to safeguard databases from worker stampedes.",
      content: [
        {
          heading: "The Arrival Rate vs. Processing Rate Inversion",
          text: "Every message queue is fundamentally an accumulator. If jobs arrive at rate λ and workers process them at rate μ, the queue behaves stably only when λ < μ. The moment an upstream traffic surge or downstream slowdown causes λ > μ, queue depth begins unbounded linear growth. A queue designed to hold 5,000 transient messages can swell to 500,000 within minutes.",
        },
        {
          heading: "The Cascading Memory Hazard in Redis",
          text: "When using Redis-backed queues (such as BullMQ), each pending job consumes memory for metadata, payload JSON, and index sets. When Redis hits maxmemory, its eviction policy kicks in. If configured with volatile-lru, Redis may evict session cache; if configured with noeviction, incoming enqueue commands fail with OOM errors. This turns a simple worker slowdown into an outright system outage.",
        },
        {
          heading: "Engineering Defenses: Backpressure, DLQs, and Circuit Breaking",
          text: "1. Throttling at the Producer: When queue depth crosses a warning threshold (e.g., 20,000 jobs), the ingestion API responds with HTTP 429 and Retry-After headers, pushing backpressure to the client.\n2. Concurrency Tuning & Batching: Workers should process jobs in micro-batches to maximize database write throughput.\n3. Dead-Letter Queues (DLQ): Any job failing its retry budget must be isolated immediately so stuck tasks do not block fresh work.",
        },
      ],
    },

    {
      id: "idempotent-apis",
      index: "02",
      title: "Designing idempotent APIs in distributed architectures",
      subtitle: "Database constraints, duplicate requests, and safe retries.",
      category: "BACKEND ARCHITECTURE",
      readTime: "5 min read",
      date: "Sep 2026",
      summary:
        "Networks are unreliable: requests will time out, clients will retry, and duplicate packets will arrive. Here is how to make critical financial and stateful mutations strictly idempotent.",
      content: [
        {
          heading: "The Fallacy of the Single Network Call",
          text: "A client sends an HTTP POST /checkout request. The server processes the payment, updates the ledger, but the response drops due to an ephemeral TCP connection reset. To the client, the request appeared to time out. The client (or automated SDK retry logic) transmits the exact same request again. Without idempotency guards, the customer is billed twice.",
        },
        {
          heading: "The Two-Tier Idempotency Pattern",
          text: "We implement idempotency using a fast distributed lock layer backed by persistent database unique constraints:\n1. Fast Path (Redis): When a request arrives with an Idempotency-Key header, we execute `SET idempotency:<key> <status:processing> NX EX 60`. If the key already exists, another thread is executing the same request; we return 409 Conflict or wait for the cached response.\n2. Permanent Record (PostgreSQL): Upon transaction completion, we store the result payload alongside the idempotency key in an `idempotent_requests` table with a UNIQUE constraint.",
        },
        {
          heading: "Handling In-Flight Duplicates Gracefully",
          text: "A subtle edge case occurs when retry request B arrives while original request A is still computing. Returning an immediate failure causes client confusion. Instead, the server should either poll the Redis lock for up to 2 seconds or return an HTTP 202 Accepted status with a polling URL.",
        },
      ],
    },

    {
      id: "observability-beyond-latency",
      index: "03",
      title: "Observability beyond HTTP latency",
      subtitle: "p95/p99 tail latency, worker saturation, PostgreSQL lock contention, and queue metrics.",
      category: "RELIABILITY & OBSERVABILITY",
      readTime: "7 min read",
      date: "Aug 2026",
      summary:
        "Why mean latency is a misleading metric, how tail latency amplifies through microservice calls, and the internal signals every backend engineer must monitor.",
      content: [
        {
          heading: "The Flaw of Average Response Times",
          text: "An average latency of 45ms looks pristine on an executive dashboard. However, if your 99th percentile (p99) is 2,400ms, 1 out of every 100 customer requests is enduring an unacceptable delay. In an architecture where a single user action touches 8 microservices sequentially, the probability of hitting at least one p99 delay skyrockets from 1% to over 7.7%.",
        },
        {
          heading: "The Three Under-Monitored Backend Metrics",
          text: "1. PostgreSQL Lock Wait Time: Slow queries are not always caused by missing indexes; often, concurrent transactions are waiting on row or table locks.\n2. Connection Pool Saturation: When all PgBouncer or HikariCP connections are checked out, incoming queries stall in client queues before reaching the database engine.\n3. Queue Lag (Consumer Delay): Measuring the delta between when a message was published and when a worker picked it up reveals worker starvation long before errors occur.",
        },
      ],
    },
  ] as Article[],

  experience: [
    {
      period: "Jun 2026 – Present",
      role: "Software Development Engineer Intern",
      company: "CreditSea (FinTech)",
      location: "India",
      type: "Internship",
      contributions: [
        "Integrated and optimized REST APIs across loan-management workflows, reducing redundant network requests through caching and efficient data-fetching strategies.",
        "Debugged end-to-end API and data-flow issues, collaborating with backend engineers to improve service reliability and troubleshoot production issues.",
        "Worked with Redux Toolkit and React Query for server-state management, caching, request deduplication, and asynchronous API workflows.",
      ],
      techStack: ["REST APIs", "Caching", "Redux Toolkit", "React Query", "Data-Flow Architecture"],
    },
    {
      period: "Feb 2026 – May 2026",
      role: "Backend Engineer Intern",
      company: "LifeSet (Startup)",
      location: "India",
      type: "Internship",
      contributions: [
        "Reduced high-traffic API response times from 4–5s to under 200ms through PostgreSQL query optimization, indexing, and Redis caching.",
        "Implemented CI/CD pipelines using GitHub Actions for automated testing, build validation, and deployment.",
        "Integrated OpenTelemetry, Prometheus, and Grafana for distributed tracing, monitoring, and production debugging.",
      ],
      techStack: ["PostgreSQL", "Redis", "GitHub Actions", "OpenTelemetry", "Prometheus", "Grafana", "CI/CD"],
    },
  ] as Experience[],

  education: [
    {
      period: "Expected May 2028",
      degree: "B.Tech, Computer Science and Engineering",
      institution: "KIET Group of Institutions, Ghaziabad",
      details: "GPA: 7.83 / 10.0 · Core focus in Distributed Systems, Operating Systems, Computer Networks, and Database Management.",
      focus: [
        "Distributed Systems & Concurrency",
        "Operating Systems & Linux Internals",
        "Database Management Systems & Indexing",
        "Computer Networks (TCP/IP, HTTP/2, gRPC)",
        "Data Structures & Algorithmic Complexity",
      ],
    },
  ] as Education[],

  capabilities: [
    {
      category: "Languages",
      description: "Core languages for systems, APIs, and algorithmic engineering.",
      skills: ["Java", "JavaScript", "TypeScript", "SQL"],
    },
    {
      category: "Backend Engineering",
      description: "Microservice frameworks, RPC protocols, and scalable APIs.",
      skills: ["Spring Boot", "Microservices", "REST APIs", "Node.js", "Express.js", "gRPC"],
    },
    {
      category: "Databases & In-Memory",
      description: "Relational persistence, query optimization, and caching.",
      skills: ["PostgreSQL", "Redis"],
    },
    {
      category: "Messaging & Event Streaming",
      description: "Distributed message brokers for asynchronous workflows.",
      skills: ["Kafka", "RabbitMQ"],
    },
    {
      category: "Systems Architecture",
      description: "Resilient patterns for fault tolerance, consistency, and concurrency.",
      skills: [
        "Event-Driven Architecture",
        "Idempotency",
        "Transactional Outbox",
        "Distributed Locking",
        "Async Processing",
      ],
    },
    {
      category: "Observability & DevOps",
      description: "Distributed telemetry, containerization, and automated deployments.",
      skills: [
        "Prometheus",
        "Grafana",
        "OpenTelemetry",
        "Docker",
        "GitHub Actions",
        "Git",
        "AWS (EC2, S3)",
      ],
    },
  ] as SkillCategory[],

  about: {
    philosophy:
      "I am drawn to backend engineering because systems must work reliably even when components inevitably fail. Networks drop packets, third-party APIs rate-limit without notice, memory fills up, and hardware stalls. Building software that gracefully degrades, preserves transactional consistency, and recovers cleanly under pressure is what drives my work.",
    interests:
      "Currently diving deeper into database write-ahead log (WAL) internals, consensus protocols (Raft), and building zero-trust sandbox execution environments for untrusted code.",
    achievements: [
      {
        title: "250+ Algorithmic Problems Solved",
        platform: "LeetCode & Codeforces",
        detail: "Strong foundation in data structures like arrays, strings, trees, linked lists",
      },
      // {
      //   title: "Active Open-Source & Campus Lead",
      //   platform: "Technical Communities",
      //   detail: "Mentoring junior engineers in backend architecture, Git workflows, and systems design fundamentals.",
      // },
      {
        title: "Hackathon Finalist",
        platform: "National Hackathon",
        detail: "Built real-time distributed analytics prototypes under high-concurrency contest conditions.",
      },
    ],
  },
};
