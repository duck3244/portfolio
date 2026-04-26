export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  description?: string;
}

export const education: EducationItem[] = [
  {
    school: '배재대학교',
    degree: '컴퓨터공학 석사',
    period: '2013 - 2015',
    description: `[졸업논문] YARN 기반의 검색엔진 시스템에 관한 연구
[국내 논문지] 오픈 소스 프레임워크를 활용한 검색엔진 구현, 시그니처 기반의 무선 침입 탐지 시스템에 관한 연구
[국외 논문지] A Study on Wireless Intrusion Prevention System based on Snort`,
  },
  {
    school: '배재대학교',
    degree: '컴퓨터공학 학사',
    period: '2011 - 2013',
    description: '[졸업작품] Android App',
  },
  {
    school: '대원대학 (2년제)',
    degree: '인터넷전자상거래 전문학사',
    period: '2004 - 2006',
  },
];
