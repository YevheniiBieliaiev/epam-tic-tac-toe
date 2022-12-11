import {
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
} from 'sib-api-v3-typescript';
import { getEnv } from '@helpers';
import type { TSendSmtpEmail } from '@types';

export class EmailProvider {
  private _emailApiKey = getEnv('EMAIL_SERVICE_API_KEY');

  private _apiInstance = new TransactionalEmailsApi();

  constructor() {
    this._apiInstance.setApiKey(
      TransactionalEmailsApiApiKeys.apiKey,
      this._emailApiKey,
    );
  }

  public async sendEmail({
    emailOptions,
  }: {
    emailOptions: TSendSmtpEmail;
  }): Promise<void> {
    await this._apiInstance.sendTransacEmail(emailOptions);
  }
}
