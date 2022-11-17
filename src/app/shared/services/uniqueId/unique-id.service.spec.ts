import { faFirstAid } from '@fortawesome/free-solid-svg-icons';
import { UniqueIdService } from './unique-id.service';

describe(`${UniqueIdService.name}`, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();

    const id = service.generateUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
    const service = new UniqueIdService();
    const numberOfGenerateIds = 100;
    const ids = new Set();

    for (let index = 0; index < numberOfGenerateIds; index++) {
      ids.add(service.generateUniqueIdWithPrefix(`app`));
    }

    expect(ids.size).toBe(numberOfGenerateIds);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name} should return the number of generatedIds when called`, () => {
    const service = new UniqueIdService();
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');

    expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
  });
});
