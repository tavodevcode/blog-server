import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { HelloWord } from './interfaces/App.interfaces'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): HelloWord {
    return this.appService.getHello()
  }
}
