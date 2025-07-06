// Agent.action.ts
import { Agent } from '@/types';
import mockAgents from '@/lib/data/mock-agents.json';


export const getAllAgents = async (): Promise<Agent[]> => {

  await new Promise(resolve => setTimeout(resolve, 1000));

  return mockAgents as Agent[];
};
