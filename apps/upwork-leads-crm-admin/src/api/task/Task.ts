import { Lead } from "../lead/Lead";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  dateAndTime: Date | null;
  lead?: Lead | null;
};
