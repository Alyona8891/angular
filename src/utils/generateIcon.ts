import { IconName, Library, library } from '@fortawesome/fontawesome-svg-core';

interface TotalLibrary extends Library {
  definitions: {
    fas: { [key: string]: string };
  };
}

export const generateIcon = () => {
  const fasArray = Object.keys((library as TotalLibrary).definitions.fas);
  const randomNum = Math.floor(Math.random() * fasArray.length);
  return fasArray[randomNum] as IconName;
};
