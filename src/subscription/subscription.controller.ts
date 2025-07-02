import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { SubscriptionService } from "./subscription.service";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import { JwtAdminAuthGuard } from "../common/guards/admin.guard";
import { JwtUserAuthGuard } from "../common/guards/user.guard";

@Controller("subscription")
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @UseGuards(JwtAdminAuthGuard)
  @Post()
  create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionService.create(createSubscriptionDto);
  }

  @UseGuards(JwtUserAuthGuard)
  @UseGuards(JwtAdminAuthGuard)
  @Get()
  findAll() {
    return this.subscriptionService.findAll();
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.subscriptionService.findOne(+id);
  }
  @UseGuards(JwtAdminAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateSubscriptionDto: UpdateSubscriptionDto
  ) {
    return this.subscriptionService.update(+id, updateSubscriptionDto);
  }
  @UseGuards(JwtAdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.subscriptionService.remove(+id);
  }
}
