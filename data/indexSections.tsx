import NextLink from '../components/NextLink';
import { ReactNode } from 'react';
import { ImageProps } from 'next/image';

export interface IIndexSection {
  actionButton: ReactNode;
  heading: string;
  img: ImageProps;
  tag?: keyof HTMLElementTagNameMap;
  textContent: ReactNode;
}

const getIndexSections = (): IIndexSection[] => {
  return [
    {
      heading: '1st heading',
      img: {
        src: '/img/1.png', // public/img/1.png is the path
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
        src: '/img/2.png', // public/img/2.png is the path
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
        src: '/img/3.png', // public/img/3.png is the path
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
