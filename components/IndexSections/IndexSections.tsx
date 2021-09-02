import { zip } from 'lodash';
import { useAdaptLeftLaneItemHeight, useOpacityChangeOnScroll } from './hooks';
import { Controller, Scene } from 'react-scrollmagic';
import ToIndexSectionConverter from './converters/ToIndexSectionConverter';
import { useMemo } from 'react';
import getIndexSections from '../../data/indexSections';

interface IProps {
  startRightLaneTransitionAtPercent: number;
  topOffset: number;
}

const IndexSections = ({
  startRightLaneTransitionAtPercent,
  topOffset,
}: IProps): JSX.Element => {
  const [leftLane, rightLane] = useMemo(() => {
    const pairs = getIndexSections().map(ToIndexSectionConverter);
    return zip(...pairs); // [[left1, right1], [left2, right2]] => [[left1, left2], [right1, right2]]
  }, []);

  useOpacityChangeOnScroll(topOffset, startRightLaneTransitionAtPercent);

  const { leftLaneItemHeight, indexSectionStartFromTopInPercent } =
    useAdaptLeftLaneItemHeight();

  return (
    <div className="index grid">
      <div style={{ gridArea: 'left-lane' }}>{leftLane}</div>
      <div style={{ gridArea: 'right-lane' }} className="hidden md:block">
        <Controller>
          <Scene
            duration={`${(leftLane.length - 1) * leftLaneItemHeight}`}
            pin
            triggerHook={indexSectionStartFromTopInPercent}
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
  startRightLaneTransitionAtPercent: 0.5,
  topOffset: 200,
};

export default IndexSections;
