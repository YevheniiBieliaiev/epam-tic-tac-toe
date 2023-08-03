import { Button, SVGIcon } from '@primitives';
import { enLocal } from '@locals';
import type { EditedFieldProps } from './types';
import * as styles from './styles';

export const EditedField = ({
  label,
  onClick,
  isEdit,
  children,
}: EditedFieldProps) => (
  <div css={styles.block}>
    <div css={styles.blockInner}>
      <div css={styles.blockHeader}>
        <span css={styles.header}>{label}</span>

        <Button type="button" contrast="secondary" size="xxs" onClick={onClick}>
          <span css={styles.edit}>
            {isEdit
              ? enLocal.profile.editButton.cancel
              : enLocal.profile.editButton.edit}
          </span>

          <SVGIcon
            icon={isEdit ? 'xCloseSecondary' : 'pencil'}
            size="xxs"
            cssExtension={styles.editIcon}
          />
        </Button>
      </div>

      <div>{children}</div>
    </div>
  </div>
);
