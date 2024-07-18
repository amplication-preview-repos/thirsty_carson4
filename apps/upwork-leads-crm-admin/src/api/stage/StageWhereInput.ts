import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StageWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
