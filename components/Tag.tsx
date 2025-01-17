import Link from '@/components/Link';
import kebabCase from '@/lib/utils/kebabCase';

interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      className='mr-3 mt-1 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
      href={`/tags/${kebabCase(text)}`}
    >
      {text.split(' ').join('-')}
    </Link>
  );
};

export default Tag;
