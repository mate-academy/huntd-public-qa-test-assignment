import { camelCaseToPhrase, capitalize } from './stringHelpers';
import { Logger } from "@/common/logger/Logger";

export function parseTestTreeHierarchy(fileName: string, logger: Logger): string[] {
  const testFolder = 'tests/e2e/';

  const attributesCamelCase: string[] = fileName
    .substring(fileName.indexOf(testFolder) + testFolder.length)
    .split('/');

  let attributes: string[] = attributesCamelCase.map(attribute =>
    capitalize(camelCaseToPhrase(attribute)),
  );

  if (attributes[2].includes('.spec.js')) {
    attributes = attributes.slice(0, 2);
  }

  logger.debug(`Parsed test hierarchy: ${JSON.stringify(attributes)}`);

  return attributes;
}
