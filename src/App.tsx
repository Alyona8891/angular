import { useState } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from './components/button';
import { ICON_PREFIX } from './constants';

import styles from './App.module.scss';

export function App() {
  const [icon, setIcon] = useState<IconName | null>(null);

  return (
    <main className={styles.main}>
      <Button setIcon={setIcon} />
      {icon ? (
        <FontAwesomeIcon icon={[ICON_PREFIX, icon]} />
      ) : (
        <span className={styles.space} />
      )}
    </main>
  );
}
