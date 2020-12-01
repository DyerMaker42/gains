import React from 'react';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';
import Filter7Icon from '@material-ui/icons/Filter7';
import Filter8Icon from '@material-ui/icons/Filter8';
import Filter9Icon from '@material-ui/icons/Filter9';
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';

const renderSwitch = (index:number):React.ReactElement => {
  switch(index){
    case 0:
      return <Filter1Icon/>;
    case 1:
      return <Filter2Icon/>;
    case 2:
      return <Filter3Icon/>;
    case 3:
      return <Filter4Icon/>;
    case 4:
      return <Filter5Icon/>;
    case 5:
      return <Filter6Icon/>;
    case 6:
      return <Filter7Icon/>;
    case 7:
      return <Filter8Icon/>;
    case 8:
      return <Filter9Icon/>;
    case 9:
      return <Filter9PlusIcon/>;
    default:
      return <></>;
  }
}
export const FilterIcon = (props: {index:number}):React.ReactElement => {
  return(
    renderSwitch(props.index)
  )
}