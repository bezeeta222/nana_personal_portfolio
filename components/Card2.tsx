import Image from 'next/image';
import Link from './Link';

function Card2({ title, description, banner, href }): React.ReactElement {
  const image = (
    <Image
      alt={title}
      src={banner}
      className='object-cover object-center md:h-36 lg:h-48'
      width={744}
      quality={100}
      height={906}
    />
  );

  return (
    <div className='md p-4 md:w-1/2' style={{ maxWidth: '544px' }}>
      <div
        className={`${
          banner && 'h-full'
        }  overflow-hidden  border-0 border-gray-100 border-opacity-60 dark:border-gray-800`}
      >
        {image}
      </div>
    </div>
  );
}

export default Card2;
