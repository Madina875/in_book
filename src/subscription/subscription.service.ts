import { Injectable } from "@nestjs/common";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Subscription } from "./entities/subscription.entity";

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectModel(Subscription)
    private readonly subscriptionModel: typeof Subscription
  ) {}
  create(createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionModel.create(createSubscriptionDto);
  }

  findAll() {
    return this.subscriptionModel.findAll();
  }

  findOne(id: number) {
    return this.subscriptionModel.findByPk(id);
  }

  async update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    const s = await this.subscriptionModel.update(updateSubscriptionDto, {
      where: { id },
      returning: true,
    });
    return s[1][0];
  }

  async remove(id: number) {
    const result = await this.subscriptionModel.destroy({ where: { id } });

    if (result > 0) {
      return { message: "deleted successfully" };
    }
    return { message: "not found" };
  }
}
