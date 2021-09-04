import { zip } from 'lodash';
import { useAdaptLeftLaneItemHeight, useOpacityChangeOnScroll } from './hooks';
import { Controller, Scene } from 'react-scrollmagic';
import ToIndexSectionConverter from './converters/ToIndexSectionConverter';
import { MutableRefObject, useMemo, useRef } from 'react';
import getIndexSections from '../../data/indexSections';

export interface IIndexSectionProps {
  leftLaneTopOffset: number;
  rightLaneStartCliff: number;
}

const IndexSections = ({
  leftLaneTopOffset,
  rightLaneStartCliff,
}: IIndexSectionProps): JSX.Element => {
  const container = useRef() as MutableRefObject<HTMLDivElement>;

  const [leftLane, rightLane] = useMemo(() => {
    const pairs = getIndexSections().map(ToIndexSectionConverter);
    return zip(...pairs); // [[left1, right1], [left2, right2]] => [[left1, left2], [right1, right2]]
  }, []);

  useOpacityChangeOnScroll({ rightLaneStartCliff, leftLaneTopOffset });

  const { leftLaneItemHeight, triggerHook } =
    useAdaptLeftLaneItemHeight(container);

  return (
    <div className="index grid" ref={container}>
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
