import { CommentUpdateManyWithoutLeadsInput } from "./CommentUpdateManyWithoutLeadsInput";
import { TaskUpdateManyWithoutLeadsInput } from "./TaskUpdateManyWithoutLeadsInput";

export type LeadUpdateInput = {
  name?: string | null;
  company?: string | null;
  upworkProfile?: string | null;
  priority?: "Option1" | null;
  projectCost?: number | null;
  estimateInHours?: number | null;
  briefDescription?: string | null;
  comments?: CommentUpdateManyWithoutLeadsInput;
  tasks?: TaskUpdateManyWithoutLeadsInput;
  responsibleUser?: string | null;
};
