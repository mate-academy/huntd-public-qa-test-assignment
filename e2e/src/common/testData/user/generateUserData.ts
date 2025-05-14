import faker from 'faker';
import { MIN_PASSWORD_LENGTH, PASSWORD_CONTENT_PREFIX } from '@/common/constants/auth';
import { Logger } from "@/common/logger/Logger";

export function generateUsername(): string {
  const randomEmail = faker.internet.email().toLowerCase();
  const [localPart, domain] = randomEmail.split('@');
  const uniqueSuffix = Date.now().toString().slice(-4);

  return `${localPart}-${uniqueSuffix}@${domain}`;
}

export function generateEmail(): string {
  const randomEmail = faker.internet.email().toLowerCase();
  const [localPart, domain] = randomEmail.split('@');
  const uniqueSuffix = Date.now().toString().slice(-4);

  return `${localPart}-${uniqueSuffix}@${domain}`;
}

export function generatePassword(length = MIN_PASSWORD_LENGTH): string {
  return faker.internet.password(
    length,
    false,
    null,
    PASSWORD_CONTENT_PREFIX,
  );
}
