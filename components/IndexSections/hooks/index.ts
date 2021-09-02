import { useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config.js';

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

export const useOpacityChangeOnScroll = (
  leftLaneTopOffset: number,
  rightLaneStartCliff: number,
) => {
  useEffect(() => {
    $('.left-lane-item').percentAboveBottom(function callback(
      this: HTMLElement,
      percent,
      index,
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
  indexSectionStartFromTopInPercent: number;
}

export const useAdaptLeftLaneItemHeight = () => {
  const [height, setHeight] = useState<IHeightValues>({
    leftLaneItemHeight: 0,
    indexSectionStartFromTopInPercent: 0,
  });

  useEffect(() => {
    const $navbar = $('.navbar');
    const $window = $(window);
    const $leftLaneItem = $('.left-lane-item');

    const adaptMobileLaneItemHeight = () => {
      const spaceFromTop = $navbar.outerHeight(false) as number;
      const doubleSpaceFromTop = 2 * spaceFromTop;
      const leftLaneHeightAsCss = `calc(100vh - ${doubleSpaceFromTop}px)`;

      isMinWidthMd()
        ? $leftLaneItem.css({ height: leftLaneHeightAsCss, minHeight: 0, visibility: 'visible' })
        : $leftLaneItem.css({ height: 'auto', minHeight: leftLaneHeightAsCss, visibility: 'visible' });

      const leftLaneHeightAsPx = $leftLaneItem.height() as number;
      const windowHeightAsPx = $window.height() as number;

      setHeight({
        leftLaneItemHeight: leftLaneHeightAsPx,
        indexSectionStartFromTopInPercent: spaceFromTop / windowHeightAsPx,
      });
    };

    adaptMobileLaneItemHeight();
    $window.on('resize', adaptMobileLaneItemHeight);

    return () => {
      $window.off('resize', adaptMobileLaneItemHeight);
    };
  }, []);

  return height;
};
