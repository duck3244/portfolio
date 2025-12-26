// src/data/projects.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    period: string;
    role: string;
    company: string;
    tasks: string[];
    technologies: string[];
    achievements: string[];
    links?: {
      github?: string;
      demo?: string;
      paper?: string;
      news?: string;
    };
  }
  
  export const projects: Project[] = [
    {
      id: "project-1",
      title: "SKHy AI Enabled 비정형 데이터 시스템 구축",
      description: "SK Hynix 용역 과제",
      period: "2025.06 - 2025.12",
      role: "Backend Developer",
      company: "시프트원",
      tasks: [
        "LLM 서비스 플랫폼 개발",
        "서버 장비 관리 플랫폼 개발"
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Oracle",
        "Redis"       
      ],
      achievements: [
        "LLM 서비스 플랫폼 개발 완료",
        "서버 장비 관리 플랫폼 개발 완료"
      ]
    },
    {
      id: "project-2",
      title: "건설 근로자 위험도 사고예측 알고리즘 V3.0",
      description: "딥러닝 기반 건설 근로자의 재해 사고 예측 모델 개발",
      period: "2023.08 - 2024.12",
      role: "Senior ML/DL Engineer",
      company: "리스크제로",
      tasks: [
        "건설 근로자의 사고 사례 데이터 분석 및 데이터셋 생성",
        "멀티모달 대규모 언어 모델 기반으로 근로자 위험도 사고 예측 모델 개발",
        "모델 경량화 및 Model Serving"
      ],
      technologies: [
        "Python",
        "JavaScript",
        "Tensorflow",
        "Transformers",
        "Scikit-Learn",
        "FastAPI",
        "Celery",
        "Redis",
        "CUDA",
        "Next.js",
        "NGINX",
        "Docker"
      ],
      achievements: [
        "건설 근로자의 재해 사고 예측 모델 개발",
        "실시간 처리 정확도 86% 달성",
        "CPU 기반으로 Model Serving",
        "투자 유치에 기여"
      ],
      links: {
        news:"https://www.ikld.kr/news/articleView.html?idxno=304203"
      }
    },
    {
      id: "project-3",
      title: "중대재해처벌법 및 산업안전보건법에 대한 법률 챗봇 프로토타입 개발",
      description: "건설업 관련 법률 챗봇 모델 개발",
      period: "2024.01 - 2024.03",
      role: "Senior ML/DL Engineer",
      company: "리스크제로",
      tasks: [
        "법률을 기반으로 합성 데이터셋(Q&A) 생성",
        "Open LLM 모델을 합성 데이터셋으로 파인튜닝하여 법률 챗봇 모델 생성",
        "대시보드 기반 법률 챗봇 프로토타입 개발"
      ],
      technologies: [
        "Python",
        "Pytorch",
        "Transformers",
        "FAISS",
        "Streamlit",
        "CUDA"        
      ],
      achievements: [
        "건설업 관련 법률 챗봇 프로토타입 개발",
        "투자 유치에 기여"
      ]
    },
    {
      id: "project-4",
      title: "안전점검회의(TBM) 안전 교육에 대한 의미 기반 검색 개발",
      description: "안전점검회의 관련 자료를 의미 기반으로 검색하는 서비스 개발",
      period: "2024.03 - 2025.02",
      role: "Senior ML/DL Engineer",
      company: "리스크제로",
      tasks: [
        "안전점검회의 관련 데이터 수집 및 Vector Store, NoSQL 구축",
        "Open LLM 모델과 Vector Store, NoSQL로 의미 기반 검색 서비스 개발"
      ],
      technologies: [
        "Python",
        "JavaScript",
        "Pytorch",
        "Transformers",
        "FastAPI",
        "Celery",
        "Next.js",
        "FAISS",
        "MongoDB",
        "Redis",
        "NGINX",
        "Docker"
      ],
      achievements: [
        "안전점검회의 안전 교육 자료에 대한 의미 기반 검색 기술 개발",
        "안전점검회의 유사 사고 사례에 대한 의미 기반 검색 프로토타입 개발",
        "CPU 기반으로 Model Serving"
      ]
    },
    {
      id: "project-5",
      title: "건설현장 작업자 안전관리 AI 영상 솔루션 프로토타입 개발",
      description: "영상 기반 안전관리 AI 모델 개발",
      period: "2024.07 - 2024.11",
      role: "Senior ML/DL Engineer",
      company: "리스크제로",
      tasks: [
        "컴퓨터 비전 모델 타당성 검토",
        "객체 탐지 및 인식, 객체 수 계산 및 거리 계산, 안면 인식 등 후처리 기능 개발",
        "웹 기반으로 영상 솔루션 프로토타입 개발"
      ],
      technologies: [
        "Python",
        "Tensorflow",
        "Pytorch",
        "OpenCV",
        "FAISS",
        "Gradio",
        "CUDA"
      ],
      achievements: [
        "건설현장 영상 기반 안전관리 프로토타입 개발"
      ]
    },
    {
      id: "project-6",
      title: "자동차 휠 베어링 상태 진단 기술 내재화",
      description: "자동차 휠 베어링 상태 진단 알고리즘 개발 및 내재화",
      period: "2020.11 - 2022.06",
      role: "Algorithm Researcher",
      company: "일진글로벌",
      tasks: [
        "가속도 센서 데이터 분석 및 전처리(필터링, 특징 추출)",
        "규칙 기반 분류기 (Rule-based Classifier) 연구 개발",
        "연구실 및 실차 환경 검증"
      ],
      technologies: [
        "Matlab",
        "Python",
        "Scikit-learn",
        "Numpy"
      ],
      achievements: [
        "국내외 기술 홍보 및 공동 연구 개발 진행"
      ]
    },
    {
      id: "project-7",
      title: "자동차 휠 베어링 고장 예측 알고리즘 연구",
      description: "(충북지역 주력산업 육성사업 과제) 자동차 휠 베어링 고장 예측 알고리즘 연구 및 시스템 구축",
      period: "2020.09 - 2021.10",
      role: "Algorithm Researcher",
      company: "일진글로벌",
      tasks: [
        "센서 데이터 계측 및 저장 시스템 설계",
        "외주 협력업체 관리(센서 데이터 계측 및 저장 시스템 구축)",
        "정량적 평가를 위한 공인 시험 진행 (성능 시험, 환경 시험, 알고리즘 성능 시험)"
      ],
      technologies: [
        "Python",
        "Numpy",
        "MongoDB"
      ],
      achievements: [
        "국책 과제 수행 및 기초 연구 완료"
      ]
    },
    {
      id: "project-8",
      title: "자동차 휠 베어링 고장 검출 알고리즘 연구",
      description: "(충북지역 주력산업 육성사업 과제) 자동차 휠 베어링 고장 검출 알고리즘 연구 및 시스템 개발",
      period: "2019.09 - 2020.08",
      role: "Algorithm Researcher",
      company: "일진글로벌",
      tasks: [
        "센서 데이터 전처리 및 데이터셋 생성",
        "딥러닝 모델과 센서 데이터를 사용하여 휠 베어링의 상태를 분류하는 모델 개발",
        "개발한 모델의 성능 평가를 위한 공인 시험 수행 및 최종 평가를 위한 산출물 작성"
      ],
      technologies: [
        "Python",
        "Tensorflow",
        "Scikit-learn",
        "Numpy"        
      ],
      achievements: [
        "국책 과제 수행 및 신규 과제 수주"
      ]
    },
    {
      id: "project-9",
      title: "전기설비기술지원 시스템 고도화",
      description: "기존 자사의 모니터링 시스템에 건전성 예측 및 관리(PHM) 기술 적용",
      period: "2017.10 - 2019.09",
      role: "Data Scientist",
      company: "세화",
      tasks: [
        "자사 데이터베이스에서 센서 데이터를 추출 및 분석하여 데이터셋 생성",
        "ML 기반 데이터셋 생성 모델 연구 개발",
        "DL 기반 고장 진단 및 예측 모델 연구 개발",
        "프로토타입을 위한 대시보드 개발"
      ],
      technologies: [
        "Python",
        "Tensorflow",
        "Scikit-learn",
        "Django",
        "Rest Framework",
        "jQuery",
        "Ajax",
        "Oracle"
      ],
      achievements: [
        "주요 고객사와 협약으로 인해 시범 사업 추진"
      ]
    },
    {
      id: "project-10",
      title: "지능형 빅데이터 해석학 기술을 이용한 선로전환기 고장예측진단 시스템",
      description: "(중소기업기술혁신개발 [과제번호:S2312692]) 선로전환기의 고장 진단 및 수명을 예측하기 위해 산학협력을 통한 연구 개발",
      period: "2016.08 - 2017.10",
      role: "Data Scientist",
      company: "세화",
      tasks: [
        "시뮬레이터로부터 센서 데이터 수집 및 분석하는 소프트웨어 개발",
        "센서 데이터로 상태를 분류하는 알고리즘 및 소프트웨어 개발",
        "알고리즘 성능 검증을 위한 공인 시험 수행 및 최종 평가를 위한 산출물 작성"
      ],
      technologies: [
        "C/C++",
        "Tcpdump",
        "Python",
        "FastDTW",
        "Scikit-learn",
        "Oracle"
      ],
      achievements: [
        "프로젝트 가능성 타당성 검증 후 기술 내재화 프로젝트로 승격"
      ]
    },
    {
      id: "project-11",
      title: "3D공간정보 구축기반 감시정찰용 자동이착륙 무인이동체 시스템",
      description: "(특구기술사업화사업 [과제번호:14DD1093]) 자동이착륙과 미리 설정한 경로를 기반으로 비행하는 드론을 개발",
      period: "2015.03 - 2016.06",
      role: "Researcher",
      company: "두시텍",
      tasks: [
        "영상 기반 객체 탐지 및 인식, 추적하는 알고리즘 및 소프트웨어 개발",
        "GUI 기반 드론 제어 시스템 개발",
        "드론 짐벌 및 LTE 기반 송수신 프로토타입 개발"
      ],
      technologies: [
        "C/C++",
        "OpenCV",
        "Gstreamer",
        "Ardupilot",
        "Bash shel",
        "Raspberry Pi"
      ],
      achievements: [
        "국책 과제 수행 및 초기 모델 개발 완료"
      ]
    }
  ];
