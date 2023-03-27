import { SubscriptionRepository } from "../../../domain/repositories/subscription/subscription.repository";

export class GetSubscriptionDetail  {
  constructor(private readonly repository: SubscriptionRepository) {
    this.repository = repository;
  }

  async run(id: string): Promise<void> {
    // Aquí va toda la lógica del caso de uso
    await this.repository.getById(id);
  }
}

