import { MutableRefObject, useEffect, useMemo, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';
import { IIndexSectionProps } from './IndexSections';
import getIndexSections from '../../data/indexSections';
import ToIndexSectionConverter from './ToIndexSectionConverter';
import { zip } from 'lodash';

// @ts-ignore
const fullConfig = resolveConfig(tailwindConfig);

const isMinWidthMd = (): boolean => {
  const mdBreakpoint = fullConfig?.theme?.screens?.md;
  return window.matchMedia(`(min-width: ${mdBreakpoint})`).matches;
};

const delayPercentValue = (percent: number, startAt: number): number => {
  const toReach = 1 - startAt;
  const alreadyReached = percent - startAt;
  return Math.max(alreadyReached / toReach, 0);
};

export const useLeftAndRightLane = () =>
  useMemo(() => {
    const pairs = getIndexSections().map(ToIndexSectionConverter);
    return zip(...pairs); // [[left1, right1], [left2, right2]] => [[left1, left2], [right1, right2]]
  }, []);

export const useOpacityChangeOnScroll = ({
  leftLaneTopOffset,
  rightLaneStartCliff,
}: IIndexSectionProps) => {
  useEffect(() => {
    $('.left-lane-item').percentAboveBottom(function callback(
      this: HTMLElement,
      percent,
      index
    ): void {
      const isFirst = index === 0;
      if (!isFirst) {
        const $right = $('.right-lane-item').eq(index);
        const $left = $(this);

        $left.css({
          top: `${(1 - percent) * leftLaneTopOffset}px`,
          opacity: percent,
        });
        $right.css('opacity', delayPercentValue(percent, rightLaneStartCliff));
      }
    });

    return () => {
      $(window).off('resize.percentAboveBottom scroll.percentAboveBottom');
    };
  });
};

export interface IHeightValues {
  leftLaneItemHeight: number;
  triggerHook: number;
}

export const useAdaptLeftLaneItemHeight = (
  container: MutableRefObject<HTMLDivElement>
) => {
  const [height, setHeight] = useState<IHeightValues>({
    leftLaneItemHeight: 0,
    triggerHook: 0,
  });

  useEffect(() => {
    const $container = $(container.current);
    const $window = $(window);
    const $leftLaneItem = $('.left-lane-item');

    const adaptLeftLaneItemHeight = () => {
      const spaceFromTop = $container.offset()?.top as number;
      const doubleSpaceFromTop = 2 * spaceFromTop;
      const leftLaneHeightAsCss = `calc(100vh - ${doubleSpaceFromTop}px)`;

      isMinWidthMd()
        ? $leftLaneItem.css({ height: leftLaneHeightAsCss, minHeight: 0 })
        : $leftLaneItem.css({ height: 'auto', minHeight: leftLaneHeightAsCss });

      const windowHeight = $window.height() as number;

      setHeight({
        leftLaneItemHeight: windowHeight - doubleSpaceFromTop,
        triggerHook: spaceFromTop / windowHeight,
      });
    };

    adaptLeftLaneItemHeight();
    $window.on('resize', adaptLeftLaneItemHeight);

    return () => {
      $window.off('resize', adaptLeftLaneItemHeight);
    };
  }, [container]);

  return height;
};
