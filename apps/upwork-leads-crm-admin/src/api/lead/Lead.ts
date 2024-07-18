import { Comment } from "../comment/Comment";
import { Task } from "../task/Task";

export type Lead = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  company: string | null;
  upworkProfile: string | null;
  priority?: "Option1" | null;
  projectCost: number | null;
  estimateInHours: number | null;
  briefDescription: string | null;
  comments?: Array<Comment>;
  tasks?: Array<Task>;
  responsibleUser: string | null;
};
