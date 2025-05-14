import { signUpPayload } from '@/api/graphql/payloads/signUP';
import { BaseGqlApi } from '@/api/graphql/BaseGqlApi';
import { test } from '@tests/_fixtures/fixtures';

export class AuthGqlAPI extends BaseGqlApi {
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
