import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  lead?: LeadWhereUniqueInput | null;
};
