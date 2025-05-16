import { test as base } from '@playwright/test';

export const test = base.extend<{
  specializations: [string[],{}],
  technologies: [string[],{}],
}>({
  // @ts-ignore
  specializations: async ({ gqlClientInBrowserContext }, use) => {
    const response = await gqlClientInBrowserContext.profile.getSpecializations();

    let names: string[] = new Array();
    let ids = {};

    for (const specialization of response) {
      names.push(specialization.name);
      ids[specialization.name] = specialization.id
    }

    await use([names, ids]);
  },
  // @ts-ignore
  technologies: async ({ gqlClientInBrowserContext }, use) => {
    const response = await gqlClientInBrowserContext.profile.getTechnologies('A');

    let names: string[] = new Array();
    let ids = {};

    for (const technology of response) {
      names.push(technology.name);
      ids[technology.name] = technology.id
    }

    await use([names, ids]);
  },
});
