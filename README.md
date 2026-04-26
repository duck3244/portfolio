# Portfolio

[Next.js 15](https://nextjs.org) · TypeScript · Tailwind CSS 기반 개인 포트폴리오 사이트입니다. GitHub Pages에 정적 export로 배포됩니다.

배포 URL: https://duck3244.github.io/portfolio

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, `output: 'export'`)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS 3 (class-based dark mode)
- **Icons**: lucide-react
- **Lint/Format**: ESLint (`next/core-web-vitals`, `next/typescript`) · Prettier + `prettier-plugin-tailwindcss`
- **Deploy**: GitHub Actions → GitHub Pages

## Getting Started

```bash
npm install
npm run dev
```

기본 포트는 `3000`이고, `next.config.ts`의 `basePath`가 `/portfolio`로 설정되어 있어 다음 경로로 접근합니다.

- 사이트: http://localhost:3000/portfolio
- robots: http://localhost:3000/portfolio/robots.txt
- sitemap: http://localhost:3000/portfolio/sitemap.xml

## Scripts

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 정적 export 빌드 (`out/` 생성) |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 검사 |
| `npm run lint:fix` | ESLint 자동 수정 |
| `npm run type-check` | TypeScript 타입 검사 |
| `npm run format` | Prettier 포맷 적용 |
| `npm run format:check` | Prettier 포맷 검사 |

## Environment Variables

| 변수 | 기본값 | 설명 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://duck3244.github.io/portfolio` | `metadata`, `sitemap.xml`, `robots.txt`에서 사용하는 사이트 URL |

## Project Structure

```
portfolio/
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages 배포 (lint + type-check + build)
├── public/                     # 정적 자산 (svg 등)
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 메타데이터 (OG/Twitter), ThemeProvider, FOUC 방지
│   │   ├── page.tsx            # 홈 페이지 (Server Component)
│   │   ├── error.tsx           # 에러 boundary
│   │   ├── loading.tsx         # 로딩 상태
│   │   ├── not-found.tsx       # 404 페이지
│   │   ├── robots.ts           # /robots.txt 생성
│   │   ├── sitemap.ts          # /sitemap.xml 생성
│   │   └── favicon.ico
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   ├── ui/
│   │   │   └── Card.tsx        # 공용 카드 컴포넌트
│   │   ├── Header.tsx          # 헤더 + 다크모드 토글 (Client)
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeScript.tsx     # 다크모드 FOUC 방지 인라인 스크립트
│   ├── contexts/
│   │   └── ThemeContext.tsx    # prefers-color-scheme + localStorage 동기화
│   ├── data/                   # 포트폴리오 콘텐츠 (타입 export 포함)
│   │   ├── personalInfo.ts
│   │   ├── education.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   └── certifications.ts
│   └── styles/
│       └── globals.css
├── eslint.config.mjs
├── next.config.ts              # output: 'export', basePath: '/portfolio'
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── .prettierrc
└── .prettierignore
```

## Editing Content

콘텐츠는 모두 `src/data/*.ts`에서 관리합니다. 각 파일은 타입과 데이터를 함께 export 하므로 자동완성/타입 검사가 동작합니다.

- `personalInfo.ts` — 이름, 직함, 연락처, GitHub
- `education.ts` — 학력 (description은 `whitespace-pre-line`으로 줄바꿈 지원)
- `skills.ts` — 카테고리별 보유 스킬
- `experience.ts` — 회사 경력 요약
- `projects.ts` — 프로젝트 상세 (기간, 역할, 기술스택, 성과, 외부 링크)
- `certifications.ts` — 자격증 / 저작권 / 특허

## Theme

- 시스템 `prefers-color-scheme` 자동 감지
- `localStorage`에 사용자 선택 저장 → 새로고침 시 동기 적용 (FOUC 방지)
- `<head>`의 `ThemeScript`가 hydration 전에 `<html>`에 `dark` 클래스를 즉시 적용

## Deployment

`main` 브랜치에 push 시 `.github/workflows/deploy.yml`이 다음 단계를 실행합니다.

1. `npm ci`
2. `npm run lint`
3. `npm run type-check`
4. `npm run build` → `out/` 디렉터리 생성
5. GitHub Pages에 업로드 및 배포
