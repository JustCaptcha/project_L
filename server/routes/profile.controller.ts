import { Controller, Get, Req, Res } from "@nestjs/common";
import { NextService } from '@nestpress/next';

@Controller('profile')
export class ProfileController {
    constructor(
        private readonly nextService: NextService,
    ) {}

    // @Get()
    // public showProfile(@Req() req, @Res() res) {
        // return this.nextService.render('profile/index', req, res);
    // }
}