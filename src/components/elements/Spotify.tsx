import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { SiSpotify } from 'react-icons/si';
import useSWR from 'swr';

import { cn } from '@/lib/utils';

import { SpotifyData } from '@/types/spotify';

export default function Spotify({
  className,
  ...rest
}: React.HTMLProps<HTMLDivElement>) {
  const { data } = useSWR<SpotifyData>('/api/spotify');

  return data?.isPlaying ? (
    <div
      className={cn('border border-border rounded-md p-3', className)}
      {...rest}
    >
      <p className='text-sm text-center italic font-medium'>Now Listening</p>
      <Link
        rel='noopener noreferrer'
        target='_blank'
        href={data.songUrl}
        className={cn(
          'relative flex items-center w-72 gap-4 mt-2',
          'shadow-sm dark:shadow-none',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary',
        )}
      >
        <Image
          className='w-16 shadow-md dark:shadow-none'
          src={data.albumImageUrl}
          alt={data.album}
          width={640}
          height={640}
          unoptimized
        />
        <div className='flex-1'>
          <p className='text-sm font-medium'>{data.title}</p>
          <p className='mt-1 text-xs text-muted-foreground'>{data.artist}</p>
        </div>
        <div className='absolute bottom-1.5 right-1.5'>
          <SiSpotify size={20} color='#1ED760' />
        </div>
      </Link>
    </div>
  ) : null;
}
