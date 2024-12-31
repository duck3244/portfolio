This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Install command
bash
npx create-next-app@latest portfolio --typescript --tailwind
npm install lucide-react
npm install @types/node @types/react @types/react-dom
npm install clsx
npm install tailwind-merge

# Create File : .env.local
NEXT_PUBLIC_API_URL=your_api_url

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## File Structure
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions 배포 설정
│
├── public/                   # 정적 파일 저장
│   ├── images/              # 이미지 파일들
│   └── favicon.ico
│
├── src/
│   ├── app/                 # Next.js 13+ App Router
│   │   ├── layout.tsx      # 루트 레이아웃
│   │   └── page.tsx        # 메인 페이지
│   │
│   ├── components/          # 리액트 컴포넌트
│   │   ├── layout/         # 레이아웃 관련 컴포넌트
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   │
│   │   ├── Header.tsx      # 헤더 컴포넌트
│   │   ├── Education.tsx   # 학력 섹션
│   │   ├── Skills.tsx      # 스킬 섹션
│   │   ├── Experience.tsx  # 경력 섹션
│   │   ├── Projects.tsx    # 프로젝트 섹션
│   │   ├── Certifications.tsx # 자격증/특허 섹션
│   │   └── Footer.tsx      # 푸터 컴포넌트
│   │
│   ├── contexts/           # Context API 관련
│   │   └── ThemeContext.tsx  # 다크모드 context
│   │
│   ├── data/              # 데이터 파일들
│   │   ├── personalInfo.ts  # 개인 정보
│   │   ├── education.ts     # 학력 정보
│   │   ├── skills.ts        # 기술 스택
│   │   ├── experience.ts    # 경력 사항
│   │   ├── projects.ts      # 프로젝트 정보
│   │   └── certifications.ts # 자격증/특허 정보
│   │
│   └── styles/            # 스타일 파일들
│       └── globals.css    # 전역 스타일
│
├── .gitignore             # Git 제외 파일 설정
├── next.config.js         # Next.js 설정
├── package.json           # 프로젝트 의존성 및 스크립트
├── tailwind.config.js     # Tailwind CSS 설정
└── tsconfig.json          # TypeScript 설정

## Made by claude 3.5 sonnet ##