interface Props {
  title: string;
  fontSize?: 'h4' | 'h5' | 'h6';
}

export const Title = ({ title }: Props): JSX.Element => {
  return <h2 className="text-4xl font-bold tracking-wide text-center my-12">{title}</h2>;
};
