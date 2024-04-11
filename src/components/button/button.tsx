import { FC, useState } from 'react';
import { IconName, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { generateIcon } from '../../utils/generateIcon';
import { GENERATE_ICON_BUTTON, TIMER } from '../../constants';

import styles from './button.module.scss';

library.add(fas);

export const Button: FC<{
  setIcon: React.Dispatch<React.SetStateAction<IconName | null>>;
}> = ({ setIcon }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const onClick = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIcon(generateIcon());
      setIsDisabled(false);
    }, TIMER);
  };

  return (
    <button className={styles.button} onClick={onClick} disabled={isDisabled}>
      {GENERATE_ICON_BUTTON}
    </button>
  );
};
