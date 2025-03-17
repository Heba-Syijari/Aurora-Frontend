import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { useGetProjectMenus } from 'src/api/project';
import { IVideo } from 'src/types/media';
import { ComponentVariation, ComponentVariationType, IProject } from 'src/types/project';

const BlogsFactory = dynamic(() => import('./blogs/factory'), { ssr: false });
const ContactFactory = dynamic(() => import('./contact/factory'), { ssr: false });
const HeroFactory = dynamic(() => import('./hero/factory'), { ssr: false });
const AboutFactory = dynamic(() => import('./about/factory'), { ssr: false });
const VideoFactory = dynamic(() => import('./video/factory'), { ssr: false });
const FAQsFactory = dynamic(() => import('./faq/factory'), { ssr: false });
const ImpactFactory = dynamic(() => import('./impact/factory'), { ssr: false });
const ImportanceFactory = dynamic(() => import('./importance/factory'), { ssr: false });
const SpecialTimesFactory = dynamic(() => import('./special-times/factory'), { ssr: false });
const TeamFactory = dynamic(() => import('./team/factory'), { ssr: false });
const FeaturesFactory = dynamic(() => import('./featuers/factory'), { ssr: false });
const GalleryFactory = dynamic(() => import('./gallery/factory'), { ssr: false });
const FooterFactory = dynamic(() => import('./footer/factory'), { ssr: false });
const PrivacyPolicy = dynamic(() => import('./privacy-policy/factory'), { ssr: false });
const TermsAndServices = dynamic(() => import('./terms-and-services/factory'), { ssr: false });
const CopyWrites = dynamic(() => import('./copy-writes/factory'), { ssr: false });
const Subscription = dynamic(() => import('./subscription/factory'), { ssr: false });
const OurClients = dynamic(() => import('./our-clients/factory'), { ssr: false });
const HowItWorks = dynamic(() => import('./how-it-works/factory'), { ssr: false });
const Slider = dynamic(() => import('./slider/factory'), { ssr: false });
const OurSolution = dynamic(() => import('./our-solution/factory'), { ssr: false });
const MessageWithActionFactory = dynamic(() => import('./message-with-action/factory'), {
  ssr: false,
});
type ComponentFactoryProps = {
  type: ComponentVariationType;
  project: IProject;
  name: any;
  data: any;
  pageId: number;
  editMode?: boolean;
  setLocalData: (v: Record<string, any>) => void;
};

export default function ComponentFactory({
  type,
  pageId,
  project,
  ...rest
}: ComponentFactoryProps) {
  const { menus } = useGetProjectMenus(project.id);
  const { settings } = project;
  const component = useMemo(() => {
    switch (type) {
      case ComponentVariation.HERO:
        return <HeroFactory {...rest} />;

      case ComponentVariation.ABOUT:
        return <AboutFactory {...rest} />;

      case ComponentVariation.FAQ:
        return <FAQsFactory {...rest} />;

      case ComponentVariation.BLOGS:
        return <BlogsFactory {...rest} posts={[...project.posts].reverse()} />;

      case ComponentVariation.IMPACT:
        return <ImpactFactory {...rest} />;

      case ComponentVariation.TEAM:
        return <TeamFactory {...rest} />;

      case ComponentVariation.FEATURES:
        return <FeaturesFactory {...rest} />;
      case ComponentVariation.HOW_IT_WORKS:
        return <HowItWorks {...rest} />;
      case ComponentVariation.SLIDER:
        return <Slider {...rest} />;
      case ComponentVariation.GALLERY:
        return <GalleryFactory {...rest} />;

      case ComponentVariation.OUR_SOLUTION:
        return <OurSolution {...rest} />;

      case ComponentVariation.VIDEO:
        return (
          <VideoFactory
            {...rest}
            videos={project.media.filter((media) => media.type === 'VIDEO') as IVideo[]}
          />
        );

      case ComponentVariation.IMPORTANCE:
        return <ImportanceFactory {...rest} />;

      case ComponentVariation.SPECIAL_TIMES:
        return <SpecialTimesFactory {...rest} />;
      case ComponentVariation.SUBSCRIPTION:
        return <Subscription {...rest} />;
      case ComponentVariation.OUR_CLIENTS:
        return <OurClients {...rest} />;
      case ComponentVariation.CONTACT:
        return (
          <ContactFactory
            {...rest}
            intellectualProperty={project.intellectualProperty}
            projectId={project.id}
          />
        );
      case ComponentVariation.PRIVACY_POLICY:
        return <PrivacyPolicy {...rest} />;
      case ComponentVariation.TERMS_AND_SERVICES:
        return <TermsAndServices {...rest} />;
      case ComponentVariation.COPY_WRITE:
        return <CopyWrites {...rest} />;
      case ComponentVariation.MWSSAGE_WITH_ACTION:
        return (
          <MessageWithActionFactory
            logoType={settings.logoType}
            logoValue={settings.logoValue}
            {...rest}
          />
        );
      case ComponentVariation.FOOTER:
        return (
          <FooterFactory
            menus={menus.filter(
              ({ parentId, place, pageId: menuPageId }) =>
                !parentId && place === 'footer' && menuPageId !== pageId
            )}
            logoType={settings.logoType}
            logoValue={settings.logoValue}
            {...rest}
          />
        );

      default:
        return null;
    }
  }, [project, rest, type, menus, pageId, settings]);

  return component;
}
