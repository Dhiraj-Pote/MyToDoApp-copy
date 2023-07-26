import { useMediaQuery } from "@material-ui/core";
import { MoreVert, MoreHoriz, SvgIconComponent } from "@material-ui/icons";
import React from 'react';

export default function useChangeMenuIcon(): SvgIconComponent {
  const Icon: SvgIconComponent = () =>
    useMediaQuery("(max-width: 768px)") ? <MoreVert /> : <MoreHoriz />;
  return Icon;
}
