import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
import { Task, TaskStatus } from './tasks.model';
import * as uuid from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
private tasks=[];

getAllTasks(){
    return this.tasks;
}


getTaskById(id:string):Task{
return this.tasks.find( task=> task.id===id);

}

//createtask(title : string, description:string)  

createtask(createtaskdto: CreateTaskDto) : Task{
    const {title, description}=createtaskdto;
    const id=Date().toString();
    const task : Task={
        id : id,
        title,
        description,
        status : TaskStatus.Done
    }

    this.tasks.push(task);
    return task;
}
deleteTask(id:string):void{

    this.tasks= this.tasks.filter (task=>task.id !==id);
}

updateTask(id:string,status:TaskStatus):Task{
const task=this.getTaskById(id);
task.status=status;
return task;

}
}
