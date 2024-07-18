import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type LeadWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  company?: StringNullableFilter;
  upworkProfile?: StringNullableFilter;
  priority?: "Option1";
  projectCost?: FloatNullableFilter;
  estimateInHours?: IntNullableFilter;
  briefDescription?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  tasks?: TaskListRelationFilter;
  responsibleUser?: StringNullableFilter;
};
