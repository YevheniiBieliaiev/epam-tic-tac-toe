import path from 'path';
import { getEnv } from '@helpers';
import type { TLocals, TTemplates, TPart, TSendSmtpEmail } from '@types';
import type { EmailSubjects } from '@enums';
import { EmailProvider } from '@providers';
import pug from 'pug';
import juice from 'juice';

export class EmailService {
  private _emailProviderInstance = new EmailProvider();

  private _appEmail = getEnv('APP_EMAIL');

  private _appName = getEnv('APP_NAME');

  private _appUrl = getEnv('APP_URL');

  private _sender: TPart = {
    email: this._appEmail,
    name: this._appName,
  };

  private _createPatternLocals({
    email,
    token,
  }: {
    email: string;
    token: string;
  }): TLocals {
    return {
      emailFrom: this._appEmail,
      appUrl: this._appUrl,
      email,
      token,
    };
  }

  private _renderPattern({
    pattern,
    locals,
  }: {
    pattern: TTemplates;
    locals?: TLocals;
  }): string {
    const html = pug.renderFile(
      path.join(__dirname, '../templates', pattern) + '.pug',
      locals || {},
    );

    return juice(html);
  }

  public createEmailOptions(
    pattern: TTemplates,
    email: string,
    token: string,
    emailSubject: EmailSubjects,
  ): TSendSmtpEmail {
    const locals = this._createPatternLocals({ email, token });
    const htmlContent = this._renderPattern({ pattern, locals });
    const receiver: TPart = { email };

    return {
      htmlContent,
      to: [receiver],
      sender: this._sender,
      subject: `[${this._appName}] ${emailSubject}`,
    };
  }

  public async sendEmail(emailOptions: TSendSmtpEmail): Promise<void> {
    await this._emailProviderInstance.sendEmail({ emailOptions });
  }
}
