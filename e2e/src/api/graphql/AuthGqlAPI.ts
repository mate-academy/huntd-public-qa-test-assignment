import { signUpPayload } from '@/api/graphql/payloads/signUP';
import { GqlApiClient } from '@/api/graphql/GqlApiClient';
import { test } from '@tests/_fixtures/fixtures';

export class AuthGqlAPI extends GqlApiClient {
  async signUpUser(
    email: string,
    password: string,
    repeatPassword: string,
  ): Promise<void> {
    await test.step('Sign up user using API', async () => {
      const payload = signUpPayload(email, password, repeatPassword);

      await this.postGQLRequest({ payload });
    });
  }
}
