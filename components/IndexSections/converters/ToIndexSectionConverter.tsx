import Image, { ImageProps } from 'next/image';
import { ElementType, ReactNode } from 'react';

export interface IIndexSection {
  actionButton?: ReactNode;
  heading: string;
  img: ImageProps;
  tag?: keyof HTMLElementTagNameMap;
  textContent: ReactNode;
}

interface IProps extends IIndexSection {}

const LeftLaneItem = ({
  heading,
  img,
  textContent,
  actionButton,
  tag,
}: IProps) => {
  const Tag = tag as ElementType;
  return (
    <div className="left-lane-item relative flex flex-col justify-center invisible">
      <div className="md:hidden">
        <Image width={1920} height={1080} {...img} />
      </div>
      <div className="my-2 md:pt-2 md:mt-0">
        <h1 className="text-3xl bold">{heading}</h1>
      </div>
      <Tag className="mb-3 overflow-y-auto">{textContent}</Tag>
      {actionButton && <div className="md:pb-2">{actionButton}</div>}
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
