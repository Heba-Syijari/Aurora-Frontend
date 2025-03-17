import Iconify from 'src/components/iconify';
import { SocialIconButton } from './social-icon-button';

type Props = {
  link: string;
};

export function SocialLinksFactory({ link }: Props) {
  if (link.includes('facebook')) {
    return (
      <SocialIconButton link={link} hovercolor="#4267B2">
        <Iconify icon="mdi:facebook" width={24} />
      </SocialIconButton>
    );
  }

  if (link.includes('twitter') || link.includes('x.com')) {
    return (
      <SocialIconButton link={link} hovercolor="#1DA1F2">
        {/* <Iconify icon="mdi:twitter" width={24} /> */}
        <Iconify icon="ri:twitter-x-fill" width={24} />
      </SocialIconButton>
    );
  }

  if (link.includes('youtube')) {
    return (
      <SocialIconButton link={link} hovercolor="#FF0000">
        <Iconify icon="mdi:youtube" width={24} />
      </SocialIconButton>
    );
  }

  if (link.includes('instagram')) {
    return (
      <SocialIconButton link={link} hovercolor="#f09433">
        <Iconify icon="mdi:instagram" width={24} />
      </SocialIconButton>
    );
  }

  return null;
}
