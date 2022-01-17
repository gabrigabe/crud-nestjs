import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { User } from '../entities/Users';
import { AppService } from '../services/users.service';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('users')
  create(@Res() res: Response, @Body() body: User): Response {
    const newUser = this.appService.create(body);
    return res.status(201).json(newUser);
  }

  @Get('users')
  getAllUsers(@Res() res: Response): Response {
    const users = this.appService.getAll();
    return res.status(200).json(users);
  }
  @Get('users/:id')
  getOneUser(@Res() res: Response, @Param('id') id: string): Response {
    const user = this.appService.getOne(id);
    return res.status(200).json(user);
  }
  @Put('users/:id')
  updateUser(
    @Res() res: Response,
    @Param('id') id: string,
    @Body('name') name: string,
  ): void {
    this.appService.update({ id, name });
    return res.status(204).end();
  }
  @Delete('users/:id')
  removeUser(@Res() res: Response, @Param('id') id: string): void {
    this.appService.delete(id);
    return res.status(204).end();
  }
}
