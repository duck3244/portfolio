export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github?: string;
  linkedin?: string;
}

export const personalInfo: PersonalInfo = {
  name: '김아용',
  title: 'Data Scientist · LLM Engineer · AI Engineer',
  email: 'gukgyeon@gmail.com',
  github: 'https://github.com/duck3244',
};
