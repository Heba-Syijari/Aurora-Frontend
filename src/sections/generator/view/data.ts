import { CreateProjectInput } from 'src/graphql/generated';
import { ProjectData } from './types';

export const initProjectData: ProjectData = {
  purpose: '',
  type: '',
  websiteStory: {
    name: '',
    description: '',
    keywords: [],
    generateContentByAi: false
  },
  websiteInfo: {
    similarWebsites: [],
    mainLanguage: '',
    websiteLocation: '',
  },
  intellectualProperty: {
    type: 'GENERAL',
    contactEmail: '',
    relatedLinks: [],
  },
  websitePresentation: {
    volume: 'SIMPLE',
    visualTypeIds: [],
  },
  websiteContentType: {
    type: 'DIVERSIFIED',
    categories: [],
    subCategories: [],
  },
  websiteContent: {
    hasContent: true,
    items: [],
  },
  websiteAudience: {
    age: [],
    gender: [],
  },
  websiteDesign: {
    mode: 'light',
    logoType: 'text',
    logoValue: '',
    palette: {
      primary: '',
      secondary: '',
      neutral: '',
      subTitles: '',
      titles: '',
    },
    fontFamily: '',
    themeId: 1,
  },
  websitePlugins: {
    plugins: [],
  },
  WebsiteSections: [{ component: 1, type: 'HERO' }],
};

export const sampleProjectData: CreateProjectInput = {
  name: `Project - ${Date.now()}`,
  purpose: 'islamic advocacy',
  type: 'Static Website',
  description: "Let's learn about Prayer in Islam and its important",
  keywords: ['pray', 'Islam', 'prayer'],
  similarWebsites: [],
  websiteLocation: 'Damascus, Syria',
  mainLanguage: 'english',
  intellectualProperty: {
    contactEmail: 'test@test.com',
    relatedLinks: [
      'https://facebook.com',
      'https://youtube.com',
      'https://x.com',
      'https://instagram.com',
    ],
    type: 'GENERAL',
  },
  // presentation: {
  //   volume: 'BALANCED',
  //   visualTypesIds: [3, 2, 10],
  // },
  // contentType: {
  //   type: 'DIVERSIFIED',
  //   categoriesIds: [3, 2, 4],
  // },
  // posts: [
  //   {
  //     title: 'Put your creative energy to work',
  //     description:
  //       'Page layout is where these components come together, while wireframing is what depicts.',
  //   },
  //   {
  //     title: 'Powerful features for working smarter',
  //     description: 'The visual guide will provide a view to the customer of what their website.',
  //   },
  //   {
  //     title: 'A design mockup of a page is printed',
  //     description:
  //       'A visual guide could be a wireframe, creative composition, or information architecture.',
  //   },
  // ],
  media: [
    {
      title: 'Sample video for Demo use',
      path: 'https://www.youtube.com/watch?v=EngW7tLk6R8&ab_channel=%E8%BF%9B%E5%87%BA%E5%8F%A3%E6%9C%8D%E5%8A%A1',
      type: 'video',
    },
    {
      title: 'Wildlife Sample Video',
      path: 'https://www.youtube.com/watch?v=a3ICNMQW7Ok&ab_channel=TimotiusJoso',
      type: 'video',
    },
    {
      title: 'Sea waves & beach drone video',
      path: 'https://www.youtube.com/watch?v=6stlCkUDG_s&list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_&index=1&ab_channel=FreeHDvideos-nocopyright',
      type: 'video',
    },
    {
      title: '9-second melody using flute and whole drum ensemble',
      path: 'https://download.samplelib.com/mp3/sample-9s.mp3',
      type: 'audio',
    },
    {
      title: '6-second synth melody',
      path: 'https://download.samplelib.com/mp3/sample-6s.mp3',
      type: 'audio',
    },
  ].map((item) => ({ ...item, type: item.type.toUpperCase() })),
  audience: {
    age: ['adults', 'youth'],
    gender: ['male', 'female'],
  },
  design: {
    logoType: 'text',
    logoValue: 'LOGO',
    fontFamily: 'Poppins',
    // mode: 'light',
    palette: {
      primary: '#006E90',
      secondary: '#001015',
      neutral: '#ADCAD6',
      titles: '#2A3342',
      subTitles: '#8896AB',
    },
  },
  plugins: [],
  sections: [],
  generateAI: false,
};
