import { UniqueIdService } from './unique-id.service';

describe(`${UniqueIdService.name}`, () => {
  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should not generate duplicate IDs when called multiple times`, () => {
    const numberOfGenerateIds = 100;
    const ids = new Set();

    for (let index = 0; index < numberOfGenerateIds; index++) {
      ids.add(service.generateUniqueIdWithPrefix(`app`));
    }

    expect(ids.size).toBe(numberOfGenerateIds);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name} 
    should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');

    expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should return throw when called with empty`, () => {
    const ERRO_VALUES = [null, undefined, '', '0', '1'];
    ERRO_VALUES.forEach((errorValue) =>
      expect(() => service.generateUniqueIdWithPrefix(errorValue))
        .withContext(`Empty value: ${errorValue}`)
        .toThrow()
    );
  });
});
