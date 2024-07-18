import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";

export type TaskUpdateInput = {
  description?: string | null;
  dateAndTime?: Date | null;
  lead?: LeadWhereUniqueInput | null;
};
