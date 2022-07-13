interface ICustomizedLabelProps {
  percent: number;
}

export const CustomizedLabel = ({ percent }: ICustomizedLabelProps) => {
  return `${(percent * 100).toFixed(0)}%`;
};
