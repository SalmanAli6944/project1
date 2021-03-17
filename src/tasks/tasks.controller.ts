import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService : TasksService) {
  }
  
  @Get()
  getalltasks():Task[]{

    return this.tasksService.getAllTasks();
  }

    @Get('/:id')
    getTaskById(@Param('id') id:string):Task{
        return this.tasksService.getTaskById(id);
    }

//   createTask(@Body() Body) it will be used to call whole body...
 //createTask(@Body('title') title:string,@Body('description') description:string) when calling specific fields... 
@Post()
createTask(@Body() createtaskdto : CreateTaskDto) :Task
{
return this.tasksService.createtask(createtaskdto);

}

@Delete('/:id')
deleteTask(@Param('id')id:string):void{

    this.tasksService.deleteTask(id);
}
    @Patch('/:id/status')
    updateTask(@Param ('id') id:string,
    @Body('status')status:TaskStatus){

return this.tasksService.updateTask(id,status);

    }

    }

