import * as React from 'react';
import { Wrapper } from '../../Wrappers';
import Advertisements from '../Advertisements';
import type { MultiAdProps, AdItem } from '../Advertisements';

const MultiAdContainer = React.forwardRef<HTMLDivElement, MultiAdProps>(
  (
    {
      ads,
      maxAds = 3,
      layout = 'stack',
      spacing = 16,
      ...props
    },
    ref
  ) => {
    const [currentAds, setCurrentAds] = React.useState<AdItem[]>([]);
    const [rotationIndex, setRotationIndex] = React.useState(0);

    // Initialize ads
    React.useEffect(() => {
      const limitedAds = ads.slice(0, maxAds);
      setCurrentAds(limitedAds);
    }, [ads, maxAds]);

    // Auto-rotation
    React.useEffect(() => {
      if (
        props.autoRotate &&
        props.rotationInterval &&
        currentAds.length > 1
      ) {
        const timer = setInterval(() => {
          setRotationIndex((prev) => (prev + 1) % currentAds.length);
        }, props.rotationInterval);
        return () => clearInterval(timer);
      }
    }, [props.autoRotate, props.rotationInterval, currentAds.length]);

    // Layout styles
    const containerStyles: React.CSSProperties = {
      display: layout === 'grid' ? 'grid' : 'flex',
      ...(layout === 'stack' && { flexDirection: 'column' }),
      ...(layout === 'carousel' && { flexDirection: 'row', overflowX: 'auto' }),
      ...(layout === 'grid' && { gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }),
      gap: spacing,
      alignItems: props.alignItems,
      justifyContent: props.justifyContent,
      ...props.style,
    };

    if (!currentAds.length) {
      return (
        props.showFallbackOnError && props.fallbackContent ? (
          <Wrapper ref={ref}>{props.fallbackContent}</Wrapper>
        ) : null
      );
    }

    return (
      <Wrapper
        ref={ref}
        className={props.className}
        style={containerStyles}
        data-testid={props['data-testid']}
      >
        {currentAds.map((ad, index) => (
          <Advertisements
            key={`${ad.kind}-${index}`}
            {...ad.content}
            {...ad.style}
            {...ad.behavior}
            kind={ad.kind}
            count="one"
            onAdLoad={props.onAdLoad}
            onAdClick={props.onAdClick}
            onAdImpression={props.onAdImpression}
            onAdClose={props.onAdClose}
            onAdError={props.onAdError}
            onRewardEarned={props.onRewardEarned}
          />
        ))}
      </Wrapper>
    );
  }
);

MultiAdContainer.displayName = 'MultiAdContainer';
export default MultiAdContainer;
