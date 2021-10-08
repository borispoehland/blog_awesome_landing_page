import {
  useAdaptLeftLaneItemHeight,
  useLeftAndRightLane,
  useOpacityChangeOnScroll,
} from './hooks';
import { Controller, Scene } from 'react-scrollmagic';
import { MutableRefObject, useRef } from 'react';

export interface IIndexSectionProps {
  leftLaneTopOffset: number; // Makes the next left lane item "slide in". Default: 200px
  rightLaneStartCliff: number; // Delays the right lane item (image) fade animation. Default: 0.5 (meaning that the image starts fading when 50% of the next left lane item is visible)
}

const IndexSections = ({
  leftLaneTopOffset,
  rightLaneStartCliff,
}: IIndexSectionProps): JSX.Element => {
  const container = useRef() as MutableRefObject<HTMLDivElement>;

  const [leftLane, rightLane] = useLeftAndRightLane();

  useOpacityChangeOnScroll({ leftLaneTopOffset, rightLaneStartCliff });

  const { leftLaneItemHeight, triggerHook } =
    useAdaptLeftLaneItemHeight(container);

  return (
    <div className="index grid my-24" ref={container}>
      <div style={{ gridArea: 'left-lane' }}>{leftLane}</div>
      <div style={{ gridArea: 'right-lane' }} className="hidden md:block">
        <Controller>
          <Scene
            duration={`${(leftLane.length - 1) * leftLaneItemHeight}`}
            pin
            triggerHook={triggerHook}
          >
            <div
              className="relative flex items-center"
              // workaround to set the style here because the dom element doesn't exist within useEffect because of scrollmagic
              style={{ minHeight: leftLaneItemHeight }}
            >
              {rightLane}
            </div>
          </Scene>
        </Controller>
      </div>
    </div>
  );
};

IndexSections.defaultProps = {
  leftLaneTopOffset: 200,
  rightLaneStartCliff: 0.5,
};

export default IndexSections;
