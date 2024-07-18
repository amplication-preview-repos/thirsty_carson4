import { CommentCreateNestedManyWithoutLeadsInput } from "./CommentCreateNestedManyWithoutLeadsInput";
import { TaskCreateNestedManyWithoutLeadsInput } from "./TaskCreateNestedManyWithoutLeadsInput";

export type LeadCreateInput = {
  name?: string | null;
  company?: string | null;
  upworkProfile?: string | null;
  priority?: "Option1" | null;
  projectCost?: number | null;
  estimateInHours?: number | null;
  briefDescription?: string | null;
  comments?: CommentCreateNestedManyWithoutLeadsInput;
  tasks?: TaskCreateNestedManyWithoutLeadsInput;
  responsibleUser?: string | null;
};
