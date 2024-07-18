import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  company?: SortOrder;
  upworkProfile?: SortOrder;
  priority?: SortOrder;
  projectCost?: SortOrder;
  estimateInHours?: SortOrder;
  briefDescription?: SortOrder;
  responsibleUser?: SortOrder;
};
