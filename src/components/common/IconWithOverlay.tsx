import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Icon} from 'react-native-eva-icons';

type IconWithOverlayProps = TouchableOpacityProps & {
  iconName: string;
  shape?: 'rounded-full' | 'rounded-2xl';
  sizeIcon?: number;
  colorIcon?: string;
};

const IconWithOverlay = (props: IconWithOverlayProps) => {
  const {
    iconName,
    shape = 'rounded-full',
    sizeIcon = 24,
    colorIcon = 'white',
    ...otherProps
  } = props;
  return (
    <TouchableOpacity
      className={`${shape} w-11 h-11 bg-white shadow-xl shadow-slate-500 items-center justify-center`}
      {...otherProps}>
      <Icon
        name={iconName}
        width={sizeIcon}
        height={sizeIcon}
        fill={colorIcon}
      />
    </TouchableOpacity>
  );
};

export default IconWithOverlay;
