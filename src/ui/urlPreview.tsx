import dynamic from 'next/dynamic';

const DynamicReactTinyLink = dynamic(() => import('./customUrl'), { ssr: false });

interface Props {
  url: string;
  description: string;
}

export const URLPreview = ({ url, description }: Props): JSX.Element => {
  return <DynamicReactTinyLink url={url} description={description} />;
};
