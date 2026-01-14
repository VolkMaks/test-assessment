import type { Achievement } from './Achievement';
import type { Skill } from './Skill';

export interface CandidateSummary {
  profile: {
    summary: string;
    availability: string;
    availaibityHours: string;
    readyToStart: string;
    isDirectHirePossible: boolean;
    skills: Skill[];
    achievements: Achievement[];
  };
}
