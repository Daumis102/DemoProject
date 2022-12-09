import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

const useOrientationStyle = <T, K>(portraitStyle: T, landscapeStyle: K) => {
  const [style, setStyle] = useState<T | K>(portraitStyle);
  useEffect(() => {
    const sub = Dimensions.addEventListener(
      'change',
      ({window: {width, height}}) => {
        if (width > height) {
          setStyle(landscapeStyle);
        } else {
          setStyle(portraitStyle);
        }
      },
    );
    return sub.remove;
  }, []);
  return {style};
};

export default useOrientationStyle;
