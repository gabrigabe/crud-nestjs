import { Module } from '@nestjs/common';
import { AppController } from './app/controllers/users.controller';
import { AppService } from './app/services/users.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
