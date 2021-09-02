import { IIndexSection } from '../components/IndexSections/converters/ToIndexSectionConverter';
import NextLink from '../components/NextLink';

const getIndexSections = (): IIndexSection[] => {
  return [
    {
      heading: '1st heading',
      img: {
        src: '/img/1.png',
        alt: 'This is the first image',
        priority: true,
      },
      textContent: (
        <>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </>
      ),
      actionButton: <NextLink href="#">Read more</NextLink>,
      tag: 'main',
    },
    {
      heading: '2nd heading',
      img: {
        src: '/img/2.png',
        alt: 'This is the second image',
        priority: false,
      },
      textContent: (
        <>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </>
      ),
      actionButton: <NextLink href="#">Read more</NextLink>,
    },
    {
      heading: '3rd heading',
      img: {
        src: '/img/3.png',
        alt: 'This is the third image',
        priority: false,
      },
      textContent: (
        <>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </>
      ),
      actionButton: <NextLink href="#">Read more</NextLink>,
    },
  ];
};

export default getIndexSections;
