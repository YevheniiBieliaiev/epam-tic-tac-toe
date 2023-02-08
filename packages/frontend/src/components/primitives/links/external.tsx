import { SVGIcon } from '@primitives';
import type { ExternalLinkProps } from './types';
import * as styles from './styles';

export const ExternalLink = ({
  href,
  label,
  txtSize,
  contrast,
  icon,
  iconSize,
}: ExternalLinkProps) => (
  <div>
    <a css={styles.link} href={href} target="_blank" rel="noreferrer">
      {icon && <SVGIcon icon={icon} size={iconSize} />}
      {label && (
        <span css={styles.linkLabel} data-size={txtSize} data-color={contrast}>
          {label}
        </span>
      )}
    </a>
  </div>
);
