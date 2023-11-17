import { Dispatch, SetStateAction } from 'react';

export interface RenderMenuItemsProps {
  items: string[];
  anchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
  handleClose: () => void;
}
