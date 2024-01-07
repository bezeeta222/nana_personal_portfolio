import Card from '@/components/Card';
import Card2 from '@/components/Card2';
import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import config from 'config';

export default function Courses(): React.ReactElement {
  return (
    <>
      <PageSEO
        title={`Courses - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header
          title='Portfolios'
          subtitle="Some of the brands I've worked with:"
        />
        <div className='container py-12'>
          <div className='-m-4 flex flex-wrap'>
            {config.courses.map(({ slug, title, description, banner }) => (
              <Card
                key={slug}
                title={title}
                description={description}
                banner={banner}
                href={''}
              />
            ))}
          </div>
        </div>
        <div className='space-y-2 pb-8 pt-6 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100'>
            Poster Designs
          </h1>
          <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
            Some of the posters I've designed
          </p>
        </div>
        <div className='container py-12'>
          <div className='-m-4 flex flex-wrap'>
            {config.portfolio.map(({ slug, title, description, banner }) => (
              <Card2
                key={slug}
                title={title}
                description={description}
                banner={banner}
                href={''}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
