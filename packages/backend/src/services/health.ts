import type { HealthRepository } from '@repositories';

export class HealthService {
  private _healthRepository: HealthRepository;

  constructor({ healthRepository }: { healthRepository: HealthRepository }) {
    this._healthRepository = healthRepository;
  }

  public select(): Promise<unknown> {
    return this._healthRepository.select();
  }
}
