import { CreateUserDto } from '../../logics/user/dto/create-user.dto';
import {
  Controller,
  Post,
  Body,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  RegisterGuard,
  LoginGuard,
} from '../../logics/auth/guards';

@Controller('api/auth')
export class ApiAuthController {
  @Post('register')
  @UseGuards(RegisterGuard)
  // public register(@Req() req, @Res() res) {
  public register(@Res() res, @Body(ValidationPipe) createUserDto: CreateUserDto) {
    res.json(createUserDto);
    // console.log(req.user);
    console.log(createUserDto);
  }

  @Post('login')
  @UseGuards(LoginGuard)
  public login(@Req() req, @Res() res) {
    res.json(req.user);
  }

  @Post('logout')
  public logout(@Req() req, @Res() res) {
    req.session.destroy(() => {
      res.json(true);
    });
  }
}
