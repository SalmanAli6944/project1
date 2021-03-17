export class Task{

    id:string;
    title:string;
    description:string;
    status:TaskStatus;
}

export enum TaskStatus{

OPEN='OPEN',
IN_PROGRESS='In_progress',
Done='DONE',
}