// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
  PROJECT: '/project/:projectId',
  GENERATOR: '/generator',
  BUILDER: '/builder',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    login: `${ROOTS.AUTH}/login`,
    register: `${ROOTS.AUTH}/register`,
    verifyAccount: `${ROOTS.AUTH}/verify-account`,
    forgotPassword: `${ROOTS.AUTH}/forgot-password`,
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    profile: `${ROOTS.DASHBOARD}/profile`,
    preferences: `${ROOTS.DASHBOARD}/preferences`,
    organization: {
      roles: `${ROOTS.DASHBOARD}/roles`,
      users: `${ROOTS.DASHBOARD}/users`,
    },
    donations: {
      root: `${ROOTS.DASHBOARD}/donations`,
      donate: `${ROOTS.DASHBOARD}/donations/donate`,
    },
    payments: {
      root: `${ROOTS.DASHBOARD}/payments`,
      form: `${ROOTS.DASHBOARD}/payments/form`,
      checkStatus: `${ROOTS.DASHBOARD}/payments/check-status`,
    },
    subscriptions: {
      root: `${ROOTS.DASHBOARD}/subscriptions`,
      subscribe: `${ROOTS.DASHBOARD}/subscriptions/subscribe`,
    },
    domainRegistrations: {
      root: `${ROOTS.DASHBOARD}/domain-registrations`,
      register: `${ROOTS.DASHBOARD}/domain-registrations/register`,
    },
  },
  project: (projectId: string) => {
    const root = ROOTS.PROJECT.replace(':projectId', projectId);

    return {
      root,
      website: {
        root: `${root}/website`,
        domain: {
          root: `${root}/website/domain`,
        },
        info: `${root}/website/info`,
        intellectualProperty: `${root}/website/intellectual-property`,
        design: `${root}/website/design`,
        contactMessages: `${root}/website/contact-messages`,
        navigation: `${root}/website/navigation`,
      },
      content: {
        root: `${root}/content`,
        contentSettings: `${root}/content/content-settings`,
        pages: `${root}/content/pages`,
        blogs: `${root}/content/blogs`,
        blogsNew: `${root}/content/blogs/new`,
        blogEdit: (id: number) => `${root}/content/blogs/${id}/edit`,
        media: `${root}/content/media`,
        integrations: `${root}/content/integrations`,
      },
      analytics: {
        root: `${root}/analytics`,
        interactions: `${root}/analytics/interactions`,
      },
    };
  },
  // GENERATOR
  generator: {
    root: ROOTS.GENERATOR,
  },
  // BUILDER
  builder: {
    root: ROOTS.BUILDER,
    project: {
      edit: (id: string | number) => `${ROOTS.BUILDER}/${id}/edit`,
      preview: (id: string | number) => `${ROOTS.BUILDER}/${id}/preview`,
    },
  },
};
