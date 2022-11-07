import { Tag } from "./Tag";

export type Todo = {
    id: Number;
    name: string;
    completed: boolean;
    deadline: string;
    createdAt: string;
    deletedAt: string;
    tag: Tag[];
};
