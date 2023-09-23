import { Injectable } from '@nestjs/common'
import { HelloWord } from './interfaces/App.interfaces'

@Injectable()
export class AppService {
  getHello(): HelloWord {
    return { message: 'Hello World!' }
  }
}
