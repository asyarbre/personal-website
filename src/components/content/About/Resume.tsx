import Link from 'next/link';
import { LuDownload as DownloadIcon } from 'react-icons/lu';

import GoogleDocsEmbed from '@/components/elements/GoogleDocsEmbed';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Resume() {
  const RESUME_URL = 'https://bit.ly/cv-asyari';
  return (
    <Card>
      <CardContent className='p-4 space-y-5'>
        <Button variant='outline' asChild>
          <Link
            href={RESUME_URL}
            target='_blank'
            rel='noopener noreferrer'
            passHref
          >
            <DownloadIcon className='mr-2 h-4 w-4' />
            Download Resume
          </Link>
        </Button>

        <GoogleDocsEmbed src='https://docs.google.com/document/d/1xuXdB3NEYDlylTr6LH13944xzn8HNUaN4Th6TmhaZHg/edit' />
      </CardContent>
    </Card>
  );
}
