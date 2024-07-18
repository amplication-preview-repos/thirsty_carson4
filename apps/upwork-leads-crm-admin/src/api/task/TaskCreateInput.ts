import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  dateAndTime?: Date | null;
  lead?: LeadWhereUniqueInput | null;
};
