import Image from 'next/image';
import { ElementType } from 'react';
import { IIndexSection } from '../../../data/indexSections';

interface IProps extends IIndexSection {}

const imgDimensions = {
  width: 1920,
  height: 1080,
};

const LeftLaneItem = ({
  heading,
  img,
  textContent,
  actionButton,
  tag,
}: IProps) => {
  const Tag = tag as ElementType;
  return (
    <div className="left-lane-item relative flex flex-col justify-center">
      <div className="md:hidden">
        <Image {...imgDimensions} {...img} />
      </div>
      <div className="my-2 md:pt-2 md:mt-0">
        <h1 className="text-3xl bold">{heading}</h1>
      </div>
      <Tag className="mb-3 overflow-y-auto">{textContent}</Tag>
      <div className="md:pb-2">{actionButton}</div>
    </div>
  );
};

const RightLaneItem = ({ img }: IProps) => (
  <div className="right-lane-item flex justify-center items-center absolute w-full h-full opacity-0 first:opacity-100">
    <Image layout="fill" objectFit="contain" {...img} />
  </div>
);

const ToIndexSectionConverter = (props: IProps) => {
  const { heading } = props;
  return [
    <LeftLaneItem key={heading} {...props} />,
    <RightLaneItem key={heading} {...props} />,
  ];
};

LeftLaneItem.defaultProps = {
  tag: 'section',
};

export default ToIndexSectionConverter;
