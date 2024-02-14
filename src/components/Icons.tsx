import React from 'react'
import type { PropsWithChildren } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name} : IconsProps) => {
  switch (name) {
    case 'circle':
        return <Icon name="circle-thin" size={38} color="#8feb24"/>
        break;

    case 'cross':
        return <Icon name="times" size={38} color="#9E15CD"/>
        break;
  
    default:
        return <Icon name="pencil" size={38} color="#80C491"/>
  }
}

export default Icons