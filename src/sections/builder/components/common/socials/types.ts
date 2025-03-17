export type SocialsPaltforms = 'facebook' | 'linkedin' | 'twitter' | 'instagram';
export type Socials = Record<SocialsPaltforms, string>;
export type SocialData = { socials: Socials; socialIconsColor: string };
