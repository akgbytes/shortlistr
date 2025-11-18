<h1 align="center">Shortlistr</h1>

<div align="center">

[![X Badge](https://img.shields.io/badge/-@akgbytes-1ca0f1?style=social&labelColor=red&logo=x&logoColor=black&link=https://x.com/akgbytes)](https://x.com/akgbytes) &nbsp;
[![LinkedIn Badge](https://img.shields.io/badge/@akgbytes-0e76a8?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akgbytes/) &nbsp;
[![Mail Badge](https://img.shields.io/badge/-akgbytes@gmail.com-c0392b?style=flat&labelColor=c0392b&logo=gmail&logoColor=white)](mailto:akgbytes@gmail.com) &nbsp;
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org) &nbsp;
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

</div>

<div align="center">
  <img width="800" alt="SecureAuth Preview" src="./public/landing.png" />
  
</div>

## Overview

**Shortlistr** is an AI-powered resume analyzer that helps job seekers improve their resumes using ATS-based analysis.
Upload your resume, match it against a job description, and receive actionable feedback, scores, and improvement suggestions.

## Features

- Upload PDF resume
- Client-side PDF → Image conversion (no resume upload before processing)
- Secure image upload using UploadThing
- AI-powered ATS feedback using OpenAI
- Structured feedback (score, strengths, missing keywords, improvements)
- Resume history stored in database
- Built with modern Next.js, React, TypeScript, TailwindCSS, and more.



## Tech Stack


[![Next.js](https://img.shields.io/badge/Next.js-000000.svg?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC.svg?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-000000.svg)](https://github.com/pmndrs/zustand)
[![pdf.js](https://img.shields.io/badge/pdf.js-FF0000.svg)](https://mozilla.github.io/pdf.js/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791.svg?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-000.svg)](https://orm.drizzle.team/)


## Getting Started

### Prerequisites

Ensure you have installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)

### 1. Clone the repository

```bash
git clone https://github.com/akgbytes/resume-analyzer.git
cd resume-analyzer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the sample .env file and fill in your credentials:

```bash
cp .env.example .env
```

### 4.  Run the app

```bash
npm run dev
```

## Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a PR.

## License

Shortlistr is licensed under the MIT License.
Use it freely and build something awesome.