import { Module } from "@nestjs/common";
import { SubscriptionService } from "./subscription.service";
import { SubscriptionController } from "./subscription.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Subscription } from "./entities/subscription.entity";
import { User } from "../users/entities/user.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [SequelizeModule.forFeature([Subscription, User]), JwtModule],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
})
export class SubscriptionModule {}
