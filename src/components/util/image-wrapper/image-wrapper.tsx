import './image-wrapper.scss';

import clsx from 'clsx';
import Image from 'next/image';
import React, { forwardRef } from 'react';

type Props = {
  src: string;
  alt: string;
  aspectRatio?: number;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
};

const ImageWrapper = forwardRef(
  (
    {
      src,
      alt,
      aspectRatio = 1,
      className,
      objectFit = 'contain',
      ...props
    }: Props,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      className={clsx('Image-wrapper__root', className)}
      ref={ref}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="Image-wrapper__root__image"
        draggable={false}
        style={
          { objectFit, '--aspect-ratio': aspectRatio } as React.CSSProperties
        }
        loading="lazy"
      />
    </div>
  ),
);

ImageWrapper.displayName = 'ImageWrapper';

export default ImageWrapper;
