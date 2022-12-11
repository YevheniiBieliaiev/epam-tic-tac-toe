import { MAX_AVATAR_SIZE } from '@tic-tac-toe/shared';
import { S3 } from '@aws-sdk/client-s3';
import { getEnv } from '@helpers';

export class S3StorageService {
  private _client: S3;

  private _bucketName: string;

  private _size = MAX_AVATAR_SIZE;

  constructor() {
    this._client = new S3({
      credentials: {
        accessKeyId: getEnv('S3_API_KEY_ID'),
        secretAccessKey: getEnv('S3_API_ACCESS_KEY'),
      },
    });

    this._bucketName = getEnv('S3_BUCKET_NAME');
  }
}
