export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  achievements: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: '넥스트코드',
    position: 'AI Engineer (Freelancer)',
    period: '2026.01 - 2026.04',
    achievements: [
      'AI Agent 기반 데이터 수집 및 분석 자동화 솔루션 개발 및 고도화'
    ],
  },
  {
    company: '시프트원',
    position: 'AI Engineer (Freelancer)',
    period: '2025.06 - 2025.12',
    achievements: ['LLM 서비스 플랫폼 개발', '서버 장비 관리 플랫폼 개발'],
  },
  {
    company: '리스크제로',
    position: 'LLM Engineer',
    period: '2023.08 - 2025.03',
    achievements: [
      '건설 근로자의 위험도 사고 예측 알고리즘 V3.0 연구 개발',
      '중대재해처벌법 및 산업안전보건법에 대한 법률 챗봇 프로토타입 개발',
      '안전점검회의(TBM)의 안전 교육 자료에 대한 의미 기반 검색 기술 개발',
      '안전점검회의(TBM)의 유사 사고 사례에 대한 의미 기반 검색 프로토타입 개발',
      '건설현장 작업자 안전관리 AI 영상 솔루션 프로토타입 개발',
    ],
  },
  {
    company: '일진글로벌',
    position: 'Data Scientist',
    period: '2019.10 - 2022.10',
    achievements: [
      '자동차 휠 베어링 상태 진단 기술 내재화',
      '자동차 휠 베어링 고장 예측 알고리즘 연구',
      '자동차 휠 베어링 고장 검출 알고리즘 연구',
    ],
  },
  {
    company: '세화',
    position: 'Data Scientist',
    period: '2016.08 - 2019.09',
    achievements: [
      '전기설비기술지원 시스템 고도화',
      '지능형 빅데이터 해석학 기술을 이용한 선로전환기 고장예측진단 시스템',
    ],
  },
  {
    company: '두시텍',
    position: 'Researcher',
    period: '2015.02 - 2016.06',
    achievements: ['드론 제어 시스템 및 영상 처리 소프트웨어 개발'],
  },
];
