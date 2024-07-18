import { Lead } from "../lead/Lead";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  lead?: Lead | null;
};
