import { BaseGqlApi } from '@/api/graphql/BaseGqlApi';
import { test } from '@tests/_fixtures/fixtures';
import { specializationPayload } from "@/api/graphql/payloads/specialization";
import { technologiesPayload } from "@/api/graphql/payloads/technologies";

export class ProfileGqlAPI extends BaseGqlApi {
  async getSpecializations(): Promise<object> {
    const specializations = await test.step('Get specializations list using API', async () => {
      const payload = specializationPayload();

      const response = await this.postGQLRequest({ payload });

      const body = await response.json();

      return body.data.specializations;
    });

    return specializations;
  }

  async getTechnologies(query: string): Promise<object> {
    const technologies = await test.step('Get technologies list using API', async () => {
      const payload = technologiesPayload(query);

      const response = await this.postGQLRequest({ payload });

      const body = await response.json();

      return body.data.technologies;
    });

    return technologies;
  }
}
