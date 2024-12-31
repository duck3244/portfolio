// src/data/certifications.ts
export interface Certification {
    id: string;
    type: 'certificate' | 'copyright' | 'patent';
    title: string;
    issuer: string;
    date: string;
    number?: string;
    description?: string;
    status?: string;
  }
  
  export const certifications: Certification[] = [
    {
      id: "patent-1",
      type: "patent",
      title: " 선로전환기별 맞춤 진단과 개별 알람이 가능한 장치 및 방법",
      issuer: "대한민국특허청",
      date: "2019.11.22.",
      number: "10-2019-0130383",
      status: "공개등록"
    },
    {
      id: "copyright-1",
      type: "copyright",
      title: "잔존 수명 예측을 위한 예측 시스템 개발",
      issuer: "한국저작권위원회",
      date: "2021.07.01.",
      number: "C-2021-026522",
      description: "딥러닝 기반 잔존 수명 예측 시스템"
    },
    {
        id: "certificate-1",
        type: "certificate",
        title: "1종보통운전면허",
        issuer: "경찰청(운전면허시험관리단)",
        date: "2008.12."
    },
    {
        id: "certificate-2",
        type: "certificate",
        title: "컴퓨터활용능력2급",
        issuer: "대한상공회의소",
        date: "2005.12."
    },
    {
        id: "certificate-3",
        type: "certificate",
        title: "정보기기운용기능사",
        issuer: "한국산업인력공단",
        date: "2003.08."
    },
    {
        id: "certificate-4",
        type: "certificate",
        title: "워드프로세서1급",
        issuer: "대한상공회의소",
        date: "2002.12."
    },
    {
        id: "certificate-5",
        type: "certificate",
        title: "정보처리기능사",
        issuer: "한국산업인력공단",
        date: "2001.08."
    }
  ];