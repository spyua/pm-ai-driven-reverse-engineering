# GEMINI.md

This file provides guidance for me, Gemini, when working on this repository. It is adapted from `CLAUDE.md` and tailored to my capabilities.

## 1. Project Overview

This is a tutorial project teaching product managers and developers how to use AI-powered tools, specifically the Cursor editor, for code analysis and reverse engineering. The project includes a 9-chapter course, a sample microservices application for practice, and a collection of reusable AI prompts.

## 2. Project Structure

```
pm-ai-driven-reverse-engineering/
├── docs/                       # VitePress documentation site (main tutorial content)
│   ├── chapters/               # Tutorial chapters
│   ├── guide/                  # Guide documents
│   ├── checkpoints/            # Learning checkpoints
│   ├── resources/              # Resource files
│   └── package.json            # VitePress dependencies
├── tutorial-sample-project/    # Sample project (Cloudy microservices)
├── reverse-system-prompt/      # AI system prompt templates
└── .content-source/            # Raw content sources (for development)
    ├── outlines/               # Original chapter plans
    └── references/             # Reference materials
```

## 3. Core Technologies

### Documentation System
- **Framework**: VitePress 1.0.0
- **Frontend**: Vue 3.3.0
- **Deployment**: GitHub Pages via GitHub Actions

### Sample Project
- **Framework**: Spring Boot 3.1.0
- **Language**: Java 17
- **Cloud**: Google Cloud Platform (GCP)
- **Database**: PostgreSQL (Google Cloud SQL)
- **Security**: Spring Security + JWT

## 4. Common Development Commands

### VitePress Site (in `docs/` directory)
- `npm install`: Install dependencies.
- `npm run docs:dev`: Start the local development server.
- `npm run docs:build`: Build the documentation site.
- `npm run docs:preview`: Preview the built site.

### Sample Project (in `tutorial-sample-project/` directory)
- `mvn clean install`: Build all modules.
- `mvn test`: Run tests for all modules.
- `cd cloudy-account && mvn spring-boot:run`: Run a specific microservice.

## 5. My Core Workflow & Principles

My primary goal is to assist in developing this tutorial while maintaining high quality, consistency, and adherence to the project's established structure. I will follow a systematic workflow for every task.

### **My Workflow: Understand -> Plan -> Implement -> Verify**

1.  **Understand (Analyze First):**
    *   Before any action, I will use my tools (`read_file`, `search_file_content`, `glob`) to thoroughly understand the request and its context.
    *   I will always check for existing patterns, conventions, and documentation in the `docs/`, `methodology/`, and `workflows/` directories.
    *   **Key Principle: Context is King.** I will not make assumptions about the code or content.

2.  **Plan (Think Systematically):**
    *   I will formulate a clear plan and, if the change is significant, I will share it before execution.
    *   **Dependency Check:** A critical part of my planning is to identify all files that might be affected by a change. I will use `search_file_content` to find references, links, and conceptual dependencies.
    *   **User-Centric Mindset:** I will always consider the end-user (the PM or developer learning from the tutorial). "How does this change make their learning journey clearer and more effective?"

3.  **Implement (Execute with Precision):**
    *   I will use my tools (`replace`, `write_file`) to make changes according to the plan.
    *   I will follow the existing code style and content structure precisely.

4.  **Verify (Trust, but Verify):**
    *   **Mandatory Check:** After ANY file modification inside the `docs/` directory, I MUST run the build command to ensure site integrity: `npm run docs:build --prefix docs`.
    *   I will use the dependency checklist (see section below) to manually confirm that all related files are updated.
    *   I will re-read the changed files to ensure the quality of the output.

### **Dependency Management Checklist**

When I modify a file, especially a chapter in `docs/chapters/`, I MUST check and update related files.

-   **[ ] Search for file name:** Use `search_file_content` to find all explicit links to the file I'm changing.
-   **[ ] Search for key concepts:** Search for the core ideas or terms of the section I'm editing to find conceptual dependencies.
-   **[ ] Check navigation & summaries:**
    -   `docs/.vitepress/config.ts` (Sidebar navigation)
    -   `docs/chapters/index.md` (Chapter summaries)
    -   `docs/guide/learning-path.md` (Overall learning path)
    -   `docs/index.md` (Homepage introduction)
-   **[ ] Review related resources:** Check `docs/resources/` for any documents that might need updates.

### **Error Prevention: Learning from the Past**

To avoid previous mistakes (like the Chapter 3 design error), I will adhere to these strict rules:

1.  **Verify Builds Immediately:** A failed VitePress build (`npm run docs:build --prefix docs`) means I have introduced an error. I must fix it before proceeding.
2.  **Prioritize User Experience:** When designing or explaining a feature, I will always default to the simplest, most efficient workflow for the end-user.
3.  **Confirm Complex Requirements:** If a request is complex or could be interpreted in multiple ways, I will restate my understanding to confirm it before starting implementation.

By following these guidelines, I will ensure that my contributions are accurate, consistent, and enhance the value of this educational project.
