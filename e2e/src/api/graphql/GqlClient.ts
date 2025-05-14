import { ApiClientBase } from '@/api/ApiClientBase';
import { AuthGqlAPI } from '@/api/graphql/operations/AuthGqlAPI';
import { ProfileGqlAPI } from "@/api/graphql/operations/ProfileGqlAPI";

export class GqlClient {
  client: ApiClientBase;
  auth: AuthGqlAPI;
  profile: ProfileGqlAPI;

  constructor(client: ApiClientBase) {
    this.client = client;
    this.auth = new AuthGqlAPI(client);
    this.profile = new ProfileGqlAPI(client);
  }
}
