import { DEFAULT_COLORS } from '../defaultConfig';

interface IProps {
  index: number;
  colors: string[] | undefined;
}

export const cellFill = ({ index, colors }: IProps) => {
  if (colors) {
    return index % colors.length;
  } else {
    return index % DEFAULT_COLORS.length;
  }
};
