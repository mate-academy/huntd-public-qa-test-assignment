import { ROUTES } from '@/api/constants';

export function isWebhookUrl(url: string): boolean {
  return Object.values(ROUTES.webhooks).includes(url);
}
