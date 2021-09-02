import { NextSeo } from 'next-seo';
import IndexSections from '../components/IndexSections/IndexSections';
import MoreInformation from '../components/MoreInformation';

export default function Home() {
  return (
    <>
      <NextSeo title="Awesome landing page demo" description="" />
      <IndexSections />
      <MoreInformation />
    </>
  );
}
