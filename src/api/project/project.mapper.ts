import { IProject } from 'src/types/project';

export class ProjectMapper {
  static fromApi(project: any): IProject {
    return {
      id: project.id,
      name: project.name,
      purpose: project.purpose,
      description: project.description,
      keywords: project.keywords,
      similarWebsites: project.similarWebsites,
      websiteLocation: project.websiteLocation,
      mainLanguage: project.mainLanguage,
      intellectualProperty: project.intellectualPropertyInfo,
      contentType: project.contentType,
      presentationVolume: project.presentationVolume,
      settings: project.settings,
      pages: project.pages,
      posts: project.posts,
      audience: project.audience,
      contactMessages: project.contactMessages,
      cdnPullZoneId: project.cdnPullZoneId,
      publicURL: project.publicURL,
      media: project.media,
      plugins: project.plugins,
      domainRegistration: project.domainRegistration,
    };
  }
}
