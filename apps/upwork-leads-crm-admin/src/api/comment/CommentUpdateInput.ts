import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  lead?: LeadWhereUniqueInput | null;
};
