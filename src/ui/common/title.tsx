import { css } from '../../../styled-system/css';

interface Props {
  title: string;
  fontSize?: 'h4' | 'h5' | 'h6';
}

export const Title = ({ title, fontSize }: Props) => {
  return (
    <h2
      className={css({
        fontSize: '32px',
        fontWeight: 'bold',
        letterSpacing: 'wide',
        my: '24px',
        textAlign: 'center'
      })}
    >
      {title}
    </h2>
  );
};
