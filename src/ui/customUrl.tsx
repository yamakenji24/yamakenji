import { ReactTinyLink } from 'react-tiny-link';

interface Props {
  cardSize?: string;
  url: string;
  description: string;
}

const CustomURL = ({ cardSize = 'large', url, description }: Props): JSX.Element => {
  return (
    <ReactTinyLink cardSize={cardSize} showGraphic={true} url={url} description={description} />
  );
};

export default CustomURL;
