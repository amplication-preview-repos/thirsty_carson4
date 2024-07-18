import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  dateAndTime?: DateTimeNullableFilter;
  lead?: LeadWhereUniqueInput;
};
