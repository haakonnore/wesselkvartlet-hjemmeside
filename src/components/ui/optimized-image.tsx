import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  sizes = '100vw',
  quality = 85,
  placeholder = 'empty',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP and fallback URLs
  const getImageUrls = (originalSrc: string) => {
    const isExternalUrl = originalSrc.startsWith('http') || originalSrc.startsWith('//');
    
    if (isExternalUrl) {
      return {
        webp: originalSrc,
        fallback: originalSrc,
      };
    }

    const extension = originalSrc.split('.').pop()?.toLowerCase();
    const basePath = originalSrc.replace(/\.[^/.]+$/, '');
    
    return {
      webp: `${basePath}.webp`,
      fallback: originalSrc,
    };
  };

  const { webp, fallback } = getImageUrls(src);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate responsive srcset
  const generateSrcSet = (imageSrc: string) => {
    const isExternalUrl = imageSrc.startsWith('http') || imageSrc.startsWith('//');
    
    if (isExternalUrl) {
      return imageSrc;
    }

    const extension = imageSrc.split('.').pop()?.toLowerCase();
    const basePath = imageSrc.replace(/\.[^/.]+$/, '');
    
    // Generate different sizes
    const sizes = [400, 800, 1200, 1600];
    return sizes
      .map(size => `${basePath}-${size}w.${extension} ${size}w`)
      .join(', ');
  };

  return (
    <div ref={imgRef} className={cn('relative overflow-hidden', className)}>
      {placeholder === 'blur' && !isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
      )}
      
      {isInView && !hasError && (
        <picture>
          <source
            srcSet={generateSrcSet(webp)}
            sizes={sizes}
            type="image/webp"
          />
          <img
            src={fallback}
            srcSet={generateSrcSet(fallback)}
            sizes={sizes}
            alt={alt}
            className={cn(
              'transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0',
              className
            )}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
          />
        </picture>
      )}
      
      {hasError && (
        <div className="flex items-center justify-center bg-gray-100 text-gray-500 text-sm p-4">
          Failed to load image
        </div>
      )}
    </div>
  );
}