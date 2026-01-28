export interface AnswerData {
  answer: string;
  interpretation: string;
}

export enum AppState {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  FLIPPING = 'FLIPPING',
  SHOWING_ANSWER = 'SHOWING_ANSWER',
}