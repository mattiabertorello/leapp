import { Integration } from "./integration";

export interface AwsSsoIntegration extends Integration {
  id: string;
  alias: string;
  type: string;
  portalUrl: string;
  region: string;
  accessTokenExpiration: string;
  browserOpening: string;
}
