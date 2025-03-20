import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import { fetchData } from 'src/lib/react-query/custom-fetcher';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
};

export type ActiveUsersMetric = {
  __typename?: 'ActiveUsersMetric';
  category: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type ActiveUsersOutput = {
  __typename?: 'ActiveUsersOutput';
  items: Array<ActiveUsersMetric>;
};

export type AddPageComponentInput = {
  componentId: Scalars['Int']['input'];
  order: Scalars['Int']['input'];
  pageId: Scalars['Int']['input'];
};

export type Admin = {
  __typename?: 'Admin';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  role?: Maybe<AdminRole>;
  roleId: Scalars['Int']['output'];
};

export type AdminRole = {
  __typename?: 'AdminRole';
  displayName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isSuperAdmin?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Permission>>;
};

export type Analytics = {
  __typename?: 'Analytics';
  dataStreamName: Scalars['String']['output'];
  defaultUri: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  measurementId: Scalars['String']['output'];
  parentAccountName: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
  propertyName: Scalars['String']['output'];
};

export type AttachDomainInput = {
  domainName: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type AttachDomainOutput = {
  __typename?: 'AttachDomainOutput';
  success: Scalars['Boolean']['output'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String']['output'];
  user: AuthUser;
};

export type AuthUser = {
  __typename?: 'AuthUser';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  role?: Maybe<Scalars['String']['output']>;
};

export type AvailableModels = {
  __typename?: 'AvailableModels';
  imageModels: Array<Scalars['String']['output']>;
  textModels: Array<Scalars['String']['output']>;
};

export type Blog = {
  __typename?: 'Blog';
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ChangeComponentLayoutInput = {
  componentId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  pageId: Scalars['Int']['input'];
};

export type Component = {
  __typename?: 'Component';
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type ContactMessage = {
  __typename?: 'ContactMessage';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
};

export type ContactRequest = {
  __typename?: 'ContactRequest';
  assignee?: Maybe<ContactRequestAssignee>;
  assigneeId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  status: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ContactRequestAssignee = {
  __typename?: 'ContactRequestAssignee';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CreateAdminInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  roleId: Scalars['Int']['input'];
};

export type CreateAdminRoleInput = {
  displayName: Scalars['String']['input'];
  isSuperAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  permissionsIds: Array<Scalars['Int']['input']>;
};

export type CreateAnalyticsInput = {
  defaultUri: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type CreateBlogInput = {
  body: Scalars['String']['input'];
  description: Scalars['String']['input'];
  imagePath: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateContactRequestInput = {
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  subject: Scalars['String']['input'];
};

export type CreateDomainRegistrationInput = {
  domainName: Scalars['String']['input'];
  method: Scalars['String']['input'];
  years: Scalars['Int']['input'];
};

export type CreateDomainRegistrationOutput = {
  __typename?: 'CreateDomainRegistrationOutput';
  redirectURL: Scalars['String']['output'];
};

export type SectionsInput = { componentId: number; order: number }[];
export type CreateDonationInput = {
  amount: Scalars['Float']['input'];
  method: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateDonationOutput = {
  __typename?: 'CreateDonationOutput';
  redirectURL: Scalars['String']['output'];
};

export type CreateFreeDomainRegistrationInput = {
  domainName: Scalars['String']['input'];
  years: Scalars['Int']['input'];
};

export type CreateFreeDomainRegistrationOutput = {
  __typename?: 'CreateFreeDomainRegistrationOutput';
  success: Scalars['Boolean']['output'];
};

export type CreateMediaInput = {
  path: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
  viewTypes: Array<Scalars['String']['input']>;
};

export type CreateMenuInput = {
  label: Scalars['String']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  pageId?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['String']['input'];
  place: Scalars['String']['input'];
  section?: Scalars['String']['input'];
};

export type CreateNotificationTemplateInput = {
  description: Scalars['String']['input'];
  privacy: Scalars['String']['input'];
  title: Scalars['String']['input'];
  usersIds: Array<Scalars['String']['input']>;
};

export type CreatePageInput = {
  description: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  sections: SectionsInput;
  generateAI: boolean;
  title: Scalars['String']['input'];
};

export type CreatePlanInput = {
  description: Scalars['String']['input'];
  discount?: InputMaybe<Scalars['Float']['input']>;
  extraFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  features: Array<PlanFeatureLimitationInput>;
  name: Scalars['String']['input'];
  period: Scalars['Int']['input'];
  periodType: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type CreatePostInput = {
  body: Scalars['String']['input'];
  description: Scalars['String']['input'];
  imagePath: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateProjectInput = {
  audience: ProjectAudienceInput;
  // contentType: ProjectContentTypeInput;
  description: Scalars['String']['input'];
  design: ProjectDesignInput;
  intellectualProperty: IntellectualPropertyInput;
  keywords: Array<Scalars['String']['input']>;
  mainLanguage: Scalars['String']['input'];
  media: Array<ProjectMediaInput>;
  name: Scalars['String']['input'];
  plugins: Array<Scalars['String']['input']>;
  sections: SectionsInput;
  generateAI: boolean;
  // posts: Array<ProjectPostInput>;
  // presentation: ProjectPresentationInput;
  purpose: Scalars['String']['input'];
  type: Scalars['String']['input'];
  similarWebsites: Array<Scalars['String']['input']>;
  websiteLocation: Scalars['String']['input'];
};

export type CreatePaletteInput = {
  neutral: Scalars['String']['input'];
  primary: Scalars['String']['input'];
  secondary: Scalars['String']['input'];
  subTitles: Scalars['String']['input'];
  titles: Scalars['String']['input'];
};

export type CreateSubscriptionInput = {
  method: Scalars['String']['input'];
  planId: Scalars['Int']['input'];
};

export type CreateSubscriptionOutput = {
  __typename?: 'CreateSubscriptionOutput';
  redirectURL: Scalars['String']['output'];
};

export type CreateTicketInput = {
  attachmentPath?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  priority: Scalars['String']['input'];
  subject: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  id: Scalars['String']['input'];
  imagePath?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type DateMetric = {
  __typename?: 'DateMetric';
  date: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type DeleteMediaInput = {
  id: Scalars['Int']['input'];
  projectId: Scalars['String']['input'];
};

export type DeleteMenuInput = {
  id: Scalars['Int']['input'];
  projectId: Scalars['String']['input'];
};

export type DeletePageInput = {
  pageId: Scalars['Int']['input'];
  projectId: Scalars['String']['input'];
};

export type DetachDomainInput = {
  projectId: Scalars['String']['input'];
};

export type DetachDomainOutput = {
  __typename?: 'DetachDomainOutput';
  success: Scalars['Boolean']['output'];
};

export type DomainPrice = {
  __typename?: 'DomainPrice';
  duration: Scalars['Int']['output'];
  durationType: Scalars['String']['output'];
  price: Scalars['Float']['output'];
};

export type DomainRegistration = {
  __typename?: 'DomainRegistration';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  domainName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isFree: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  years: Scalars['Int']['output'];
};

export type Donation = {
  __typename?: 'Donation';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type GetActiveUsersInput = {
  endDate: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type IntellectualPropertyInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  contactEmail: Scalars['String']['input'];
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  relatedLinks?: InputMaybe<Array<Scalars['String']['input']>>;
  type: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Media = {
  __typename?: 'Media';
  id: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  viewTypes: Array<Scalars['String']['output']>;
};

export type Menu = {
  __typename?: 'Menu';
  children?: Maybe<Array<Menu>>;
  id: Scalars['Int']['output'];
  label: Scalars['String']['output'];
  link?: Maybe<Scalars['String']['output']>;
  pageId?: Maybe<Scalars['Int']['output']>;
  pageSlug?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  projectId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addFreeCertificateToDomain: Scalars['Boolean']['output'];
  addPageComponent: PageComponent;
  adminLogin: AuthResponse;
  attachDomain: AttachDomainOutput;
  changePageComponentLayout: PageComponent;
  checkPaymentStatus: Scalars['String']['output'];
  createAdmin: Admin;
  createAdminRole: Role;
  createAnalytics: Analytics;
  createAnalyticsProperty: Scalars['Boolean']['output'];
  createBlog: Blog;
  createContactRequest: ContactRequest;
  createDomainRegistration: CreateDomainRegistrationOutput;
  createDonation: CreateDonationOutput;
  createFreeDomainRegistration: CreateFreeDomainRegistrationOutput;
  createMedia: Media;
  createMenu: Menu;
  createNotificationTemplate: NotificationTemplate;
  createPage: Page;
  createPlan: Plan;
  createPost: Post;
  createProject: Project;
  createSubscription: CreateSubscriptionOutput;
  createTicket: Ticket;
  createUser: User;
  deleteAdmin: Scalars['Boolean']['output'];
  deleteAdminRole: Role;
  deleteMedia: Media;
  deleteMenu: Menu;
  deletePage: Scalars['Boolean']['output'];
  deletePost: Post;
  deleteProject: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  detachDomain: DetachDomainOutput;
  enhanceText: Scalars['String']['output'];
  exportProject: Scalars['Boolean']['output'];
  generateImage: Scalars['String']['output'];
  generatePost: Post;
  generateText: Scalars['String']['output'];
  login: AuthResponse;
  loginWithGoogle: AuthResponse;
  publishProject: Scalars['Boolean']['output'];
  regeneratePage: Scalars['Boolean']['output'];
  regenerateText: Scalars['String']['output'];
  register: AuthUser;
  removeBlog: Blog;
  removeContactMessage: ContactMessage;
  removeContactRequest: ContactRequest;
  removeMultipleNotificationTemplate: Scalars['Boolean']['output'];
  removeNotificationTemplate: NotificationTemplate;
  removePageComponent: PageComponent;
  removePlan: Plan;
  removeTicket: Ticket;
  requestAdminRecoverPassword: Scalars['String']['output'];
  requestRecoverPassword: Scalars['String']['output'];
  resendAdminVerificationEmail: AuthUser;
  resendVerificationEmail: AuthUser;
  resetAdminPassword: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  sendMail: Scalars['String']['output'];
  suggestDomainNames: Array<Scalars['String']['output']>;
  suggestLogoTexts: Array<Scalars['String']['output']>;
  swapPageComponents: Scalars['Boolean']['output'];
  updateAdamWidgetConfig: Scalars['Boolean']['output'];
  updateAdmin: Admin;
  updateAdminPassword: Scalars['Boolean']['output'];
  updateAdminProfile: Admin;
  updateAdminRole: Role;
  updateBlog: Blog;
  updateContactRequest: ContactRequest;
  updateMedia: Media;
  updateMenu: Menu;
  updatePageComponent: Scalars['Boolean']['output'];
  updatePassword: UpdatePasswordResponse;
  updatePlan: Plan;
  updatePost: Post;
  updatePreferences: UpdatePreferencesOutput;
  updateProfile: User;
  updateProject: Scalars['Boolean']['output'];
  updateProjectSettings: Scalars['Boolean']['output'];
  updateTicket: Ticket;
  updateUser: User;
  verifyAdminEmail: AuthUser;
  verifyUserEmail: AuthUser;
};

export type MutationAddFreeCertificateToDomainArgs = {
  projectId: Scalars['String']['input'];
};

export type MutationAddPageComponentArgs = {
  input: AddPageComponentInput;
};

export type MutationAdminLoginArgs = {
  adminLoginInput: LoginInput;
};

export type MutationAttachDomainArgs = {
  attachDomainInput: AttachDomainInput;
};

export type MutationChangePageComponentLayoutArgs = {
  input: ChangeComponentLayoutInput;
};

export type MutationCheckPaymentStatusArgs = {
  transactionId: Scalars['String']['input'];
};

export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput;
};

export type MutationCreateAdminRoleArgs = {
  createAdminRoleInput: CreateAdminRoleInput;
};

export type MutationCreateAnalyticsArgs = {
  createAnalyticsInput: CreateAnalyticsInput;
};

export type MutationCreateAnalyticsPropertyArgs = {
  id: Scalars['String']['input'];
};

export type MutationCreateBlogArgs = {
  createBlogInput: CreateBlogInput;
};

export type MutationCreateContactRequestArgs = {
  createContactRequestInput: CreateContactRequestInput;
};

export type MutationCreateDomainRegistrationArgs = {
  createDomainRegistrationInput: CreateDomainRegistrationInput;
};

export type MutationCreateDonationArgs = {
  createDonationInput: CreateDonationInput;
};

export type MutationCreateFreeDomainRegistrationArgs = {
  createFreeDomainRegistrationInput: CreateFreeDomainRegistrationInput;
};

export type MutationCreateMediaArgs = {
  createMediaInput: CreateMediaInput;
};

export type MutationCreateMenuArgs = {
  createMenuInput: CreateMenuInput;
};

export type MutationCreateNotificationTemplateArgs = {
  createNotificationTemplateInput: CreateNotificationTemplateInput;
};

export type MutationCreatePageArgs = {
  input: CreatePageInput;
};

export type MutationCreatePlanArgs = {
  createPlanInput: CreatePlanInput;
};

export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};

export type MutationCreateProjectArgs = {
  createProjectInput: CreateProjectInput;
};

export type MutationCreateSubscriptionArgs = {
  createSubscriptionInput: CreateSubscriptionInput;
};

export type MutationCreateTicketArgs = {
  createTicketInput: CreateTicketInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationDeleteAdminArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteAdminRoleArgs = {
  id: Scalars['Int']['input'];
};

export type MutationDeleteMediaArgs = {
  deleteMediaInput: DeleteMediaInput;
};

export type MutationDeleteMenuArgs = {
  deleteMenuInput: DeleteMenuInput;
};

export type MutationDeletePageArgs = {
  input: DeletePageInput;
};

export type MutationDeletePostArgs = {
  id: Scalars['Int']['input'];
};

export type MutationDeleteProjectArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};

export type MutationDetachDomainArgs = {
  detachDomainInput: DetachDomainInput;
};

export type MutationEnhanceTextArgs = {
  text: Scalars['String']['input'];
};

export type MutationExportProjectArgs = {
  id: Scalars['String']['input'];
};

export type MutationGenerateImageArgs = {
  description: Scalars['String']['input'];
};

export type MutationGeneratePostArgs = {
  projectId: Scalars['String']['input'];
};

export type MutationGenerateTextArgs = {
  text: Scalars['String']['input'];
};

export type MutationLoginArgs = {
  loginInput: LoginInput;
};

export type MutationLoginWithGoogleArgs = {
  token: Scalars['String']['input'];
};

export type MutationPublishProjectArgs = {
  id: Scalars['String']['input'];
};

export type MutationRegeneratePageArgs = {
  input: RegeneratePageInput;
};

export type MutationRegenerateTextArgs = {
  input: RegenerateTextInput;
};

export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};

export type MutationRemoveBlogArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveContactMessageArgs = {
  removeContactMessageInput: RemoveContactMessageInput;
};

export type MutationRemoveContactRequestArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveMultipleNotificationTemplateArgs = {
  ids: Array<Scalars['Int']['input']>;
};

export type MutationRemoveNotificationTemplateArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemovePageComponentArgs = {
  input: RemovePageComponentInput;
};

export type MutationRemovePlanArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveTicketArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRequestAdminRecoverPasswordArgs = {
  requestAdminRecoverPasswordInput: RequestRecoverPasswordInput;
};

export type MutationRequestRecoverPasswordArgs = {
  requestRecoverPasswordInput: RequestRecoverPasswordInput;
};

export type MutationResendAdminVerificationEmailArgs = {
  resendAdminVerificationEmailInput: ResendVerificationEmailInput;
};

export type MutationResendVerificationEmailArgs = {
  resendVerificationEmailInput: ResendVerificationEmailInput;
};

export type MutationResetAdminPasswordArgs = {
  resetAdminPasswordInput: ResetPasswordInput;
};

export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};

export type MutationSuggestDomainNamesArgs = {
  keyword: Scalars['String']['input'];
};

export type MutationSuggestLogoTextsArgs = {
  keyword: Scalars['String']['input'];
};

export type MutationSwapPageComponentsArgs = {
  input: SwapPageComponentsInput;
};

export type MutationUpdateAdamWidgetConfigArgs = {
  updateAdamWidgetConfigInput: UpdateAdamWidgetConfigInput;
};

export type MutationUpdateAdminArgs = {
  id: Scalars['String']['input'];
  updateAdminInput: UpdateAdminInput;
};

export type MutationUpdateAdminPasswordArgs = {
  updateAdminPasswordInput: UpdateAdminPasswordInput;
};

export type MutationUpdateAdminProfileArgs = {
  updateAdminProfileInput: UpdateAdminProfileInput;
};

export type MutationUpdateAdminRoleArgs = {
  updateAdminRoleInput: UpdateAdminRoleInput;
};

export type MutationUpdateBlogArgs = {
  updateBlogInput: UpdateBlogInput;
};

export type MutationUpdateContactRequestArgs = {
  updateContactRequestInput: UpdateContactRequestInput;
};

export type MutationUpdateMediaArgs = {
  updateMediaInput: UpdateMediaInput;
};

export type MutationUpdateMenuArgs = {
  updateMenuInput: UpdateMenuInput;
};

export type MutationUpdatePageComponentArgs = {
  input: UpdatePageComponentInput;
};

export type MutationUpdatePasswordArgs = {
  updatePasswordInput: UpdatePasswordInput;
};

export type MutationUpdatePlanArgs = {
  updatePlanInput: UpdatePlanInput;
};

export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};

export type MutationUpdatePreferencesArgs = {
  updatePreferencesInput: UpdatePreferencesInput;
};

export type MutationUpdateProfileArgs = {
  updateProfileInput: UpdateProfileInput;
};

export type MutationUpdateProjectArgs = {
  updateProjectInput: UpdateProjectInput;
};

export type MutationUpdateProjectSettingsArgs = {
  updateProjectSettingsInput: UpdateProjectSettingsInput;
};

export type MutationUpdateTicketArgs = {
  updateTicketInput: UpdateTicketInput;
};

export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  updateUserInput: UpdateUserInput;
};

export type MutationVerifyAdminEmailArgs = {
  verifyAdminEmailInput: VerifyUserEmailInput;
};

export type MutationVerifyUserEmailArgs = {
  verifyUserEmailInput: VerifyUserEmailInput;
};

export type NotificationTemplate = {
  __typename?: 'NotificationTemplate';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  notificationTemplateUsers?: Maybe<Array<NotificationTemplateUser>>;
  privacy: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type NotificationTemplateUser = {
  __typename?: 'NotificationTemplateUser';
  id: Scalars['Int']['output'];
  templateId: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type Page = {
  __typename?: 'Page';
  components?: Maybe<Array<PageComponent>>;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  projectId: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  themeId: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type PageComponent = {
  __typename?: 'PageComponent';
  component?: Maybe<Component>;
  componentId: Scalars['Int']['output'];
  data: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  pageId: Scalars['Int']['output'];
};

export type Palette = {
  __typename?: 'Palette';
  neutral: Scalars['String']['output'];
  primary: Scalars['String']['output'];
  secondary: Scalars['String']['output'];
  subTitles: Scalars['String']['output'];
  titles: Scalars['String']['output'];
};

export type PaletteInput = {
  neutral: Scalars['String']['input'];
  primary: Scalars['String']['input'];
  secondary: Scalars['String']['input'];
  subTitles: Scalars['String']['input'];
  titles: Scalars['String']['input'];
};

export type Payment = {
  __typename?: 'Payment';
  cost: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  domainRegistrationId?: Maybe<Scalars['Int']['output']>;
  donationId?: Maybe<Scalars['Int']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  method: Scalars['String']['output'];
  paymentReference: Scalars['String']['output'];
  status: Scalars['String']['output'];
  subscriptionId?: Maybe<Scalars['Int']['output']>;
  transactionId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Permission = {
  __typename?: 'Permission';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Plan = {
  __typename?: 'Plan';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  discount: Scalars['Float']['output'];
  extraFeatures?: Maybe<Array<Scalars['String']['output']>>;
  features: Array<PlanFeatureLimitation>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  period: Scalars['Int']['output'];
  periodType: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PlanFeatureLimitation = {
  __typename?: 'PlanFeatureLimitation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  feature?: Maybe<PlanFeatureSchema>;
  featureId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  limitation?: Maybe<Scalars['JSON']['output']>;
  planId: Scalars['Int']['output'];
};

export type PlanFeatureLimitationInput = {
  description: Scalars['String']['input'];
  featureId: Scalars['Int']['input'];
  limitation?: InputMaybe<Scalars['JSON']['input']>;
};

export type PlanFeatureSchema = {
  __typename?: 'PlanFeatureSchema';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  limitationSchema?: Maybe<Scalars['JSON']['output']>;
  title: Scalars['String']['output'];
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imageAlt?: Maybe<Scalars['String']['output']>;
  imagePath: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Project = {
  __typename?: 'Project';
  audience?: Maybe<ProjectAudience>;
  cdnPullZoneId?: Maybe<Scalars['Int']['output']>;
  contactMessages?: Maybe<Array<ContactMessage>>;
  contentType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  domainRegistration?: Maybe<ProjectDomainRegistration>;
  id: Scalars['String']['output'];
  intellectualPropertyInfo: Scalars['JSON']['output'];
  intellectualPropertyType: Scalars['String']['output'];
  keywords: Array<Scalars['String']['output']>;
  mainLanguage: Scalars['String']['output'];
  media?: Maybe<Array<Media>>;
  name: Scalars['String']['output'];
  pages?: Maybe<Array<Page>>;
  plugins?: Maybe<Array<ProjectPlugin>>;
  posts?: Maybe<Array<Post>>;
  presentationVolume: Scalars['String']['output'];
  publicURL: Scalars['String']['output'];
  purpose: Scalars['String']['output'];
  settings?: Maybe<ProjectSettings>;
  similarWebsites: Array<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  visualTypes?: Maybe<Array<VisualTypeOnProject>>;
  websiteLocation: Scalars['String']['output'];
};

export type ProjectAudience = {
  __typename?: 'ProjectAudience';
  age: Array<Scalars['String']['output']>;
  countries?: Maybe<Array<Scalars['String']['output']>>;
  gender: Array<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  // language: Array<Scalars['String']['output']>;
  organizations?: Maybe<Array<Scalars['String']['output']>>;
  projectId: Scalars['String']['output'];
};

export type ProjectAudienceInput = {
  age: Array<Scalars['String']['input']>;
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  gender: Array<Scalars['String']['input']>;
  organizations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProjectContentTypeInput = {
  categoriesIds: Array<Scalars['Float']['input']>;
  type: Scalars['String']['input'];
};

export type ProjectDesignInput = {
  fontFamily: Scalars['String']['input'];
  logoType: Scalars['String']['input'];
  logoValue: Scalars['String']['input'];
  palette: PaletteInput;
  // themeId: Scalars['Float']['input'];
  // mode: Scalars['String']['input'];
};

export type ProjectDomainRegistration = {
  __typename?: 'ProjectDomainRegistration';
  domainRegistration: DomainRegistration;
  domainRegistrationId: Scalars['Int']['output'];
  projectId: Scalars['String']['output'];
};

export type ProjectGeneration = {
  __typename?: 'ProjectGeneration';
  createdAt: Scalars['DateTime']['output'];
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  logs?: Maybe<Scalars['String']['output']>;
  projectId: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type ProjectMediaInput = {
  path: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type ProjectPlugin = {
  __typename?: 'ProjectPlugin';
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
  value: Scalars['String']['output'];
  variation: Scalars['String']['output'];
};

export type ProjectPostInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ProjectPresentationInput = {
  visualTypesIds: Array<Scalars['Float']['input']>;
  volume: Scalars['String']['input'];
};

export type ProjectSettings = {
  __typename?: 'ProjectSettings';
  fontFamily: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  logoType: Scalars['String']['output'];
  logoValue: Scalars['String']['output'];
  palette: Palette;
  projectId: Scalars['String']['output'];
};

export type ProjectTargetType = {
  __typename?: 'ProjectTargetType';
  description: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  admin: Admin;
  adminMe: Admin;
  admins: Array<Admin>;
  blog: Blog;
  blogs: Array<Blog>;
  checkDomainAvailability: Scalars['Boolean']['output'];
  contactMessages: Array<ContactMessage>;
  contactRequest: ContactRequest;
  contactRequests: Array<ContactRequest>;
  donation: Donation;
  donations: Array<Donation>;
  getActiveUsersByContinent: ActiveUsersOutput;
  getActiveUsersByCountryInLast30Mins: ActiveUsersOutput;
  getActiveUsersByHour: ActiveUsersOutput;
  getActiveUsersByPage: ActiveUsersOutput;
  getAvailableAIModels: AvailableModels;
  getBlogBySlug: Blog;
  getDomainPricing: Array<DomainPrice>;
  getDomainRegistrations: Array<DomainRegistration>;
  getMyDonations: Array<Donation>;
  getMySubscription: Subscription;
  getProjectAnalyticsProperty: Analytics;
  getProjectMedia: Array<Media>;
  getProjectMenus: Array<Menu>;
  getReportByDate: ReportByDateOutput;
  getUnattachedDomains: Array<Scalars['String']['output']>;
  getUserUsage: UserUsageOutput;
  me: User;
  media: Media;
  menu: Menu;
  page: Page;
  plan: Plan;
  plans: Array<Plan>;
  post: Post;
  posts: Array<Post>;
  project: Project;
  projectGeneration: ProjectGeneration;
  projectTargetTypes: Array<ProjectTargetType>;
  projects: Array<Project>;
  subscription: Subscription;
  theme: Theme;
  themes: Array<Theme>;
  ticket: Ticket;
  tickets: Array<Ticket>;
  totalRevenue: TotalRevenueOutput;
  user: User;
  users: Array<User>;
};

export type QueryAdminArgs = {
  id: Scalars['String']['input'];
};

export type QueryBlogArgs = {
  id: Scalars['Int']['input'];
};

export type QueryCheckDomainAvailabilityArgs = {
  domainName: Scalars['String']['input'];
};

export type QueryContactMessagesArgs = {
  projectId: Scalars['String']['input'];
};

export type QueryContactRequestArgs = {
  id: Scalars['Int']['input'];
};

export type QueryDonationArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetActiveUsersByContinentArgs = {
  getActiveUsersInput: GetActiveUsersInput;
};

export type QueryGetActiveUsersByCountryInLast30MinsArgs = {
  projectId: Scalars['String']['input'];
};

export type QueryGetActiveUsersByHourArgs = {
  getActiveUsersInput: GetActiveUsersInput;
};

export type QueryGetActiveUsersByPageArgs = {
  getActiveUsersInput: GetActiveUsersInput;
};

export type QueryGetBlogBySlugArgs = {
  slug: Scalars['String']['input'];
};

export type QueryGetDomainPricingArgs = {
  domainName: Scalars['String']['input'];
};

export type QueryGetProjectAnalyticsPropertyArgs = {
  projectId: Scalars['String']['input'];
};

export type QueryGetProjectMediaArgs = {
  projectId: Scalars['String']['input'];
};

export type QueryGetProjectMenusArgs = {
  projectId: Scalars['String']['input'];
};

export type QueryGetReportByDateArgs = {
  projectId: Scalars['String']['input'];
};

export type QueryMediaArgs = {
  id: Scalars['Int']['input'];
};

export type QueryMenuArgs = {
  id: Scalars['Int']['input'];
};

export type QueryPageArgs = {
  id: Scalars['Int']['input'];
};

export type QueryPlanArgs = {
  id: Scalars['Int']['input'];
};

export type QueryPostArgs = {
  id: Scalars['Int']['input'];
};

export type QueryProjectArgs = {
  id: Scalars['String']['input'];
};

export type QueryProjectGenerationArgs = {
  projectId: Scalars['String']['input'];
};

export type QuerySubscriptionArgs = {
  id: Scalars['Int']['input'];
};

export type QueryThemeArgs = {
  id: Scalars['Int']['input'];
};

export type QueryTicketArgs = {
  id: Scalars['Int']['input'];
};

export type QueryTotalRevenueArgs = {
  totalRevenueInput: TotalRevenueInput;
};

export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type RegeneratePageInput = {
  pageId: Scalars['Int']['input'];
  projectId: Scalars['String']['input'];
};

export type RegenerateTextInput = {
  itemType: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  sectionType: Scalars['String']['input'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  imagePath?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type RemoveContactMessageInput = {
  id: Scalars['Int']['input'];
  projectId: Scalars['String']['input'];
};

export type RemovePageComponentInput = {
  componentId: Scalars['Int']['input'];
  pageId: Scalars['Int']['input'];
};

export type ReportByDateOutput = {
  __typename?: 'ReportByDateOutput';
  activeUsers: Array<DateMetric>;
  conversions: Array<DateMetric>;
  eventCount: Array<DateMetric>;
  newUsers: Array<DateMetric>;
};

export type RequestRecoverPasswordInput = {
  email: Scalars['String']['input'];
};

export type ResendVerificationEmailInput = {
  email: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  displayName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isSuperAdmin?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  cost: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  expirationDays?: Maybe<Scalars['Float']['output']>;
  expireAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  imageGenerations: Scalars['Int']['output'];
  isExpired?: Maybe<Scalars['Boolean']['output']>;
  payment?: Maybe<Payment>;
  plan?: Maybe<Plan>;
  planId: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  textGenerations: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type SwapPageComponentsInput = {
  componentsIds: Array<Scalars['Int']['input']>;
  pageId: Scalars['Int']['input'];
};

export type Theme = {
  __typename?: 'Theme';
  components: Array<ThemeComponent>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
};

export type ThemeComponent = {
  __typename?: 'ThemeComponent';
  component: Component;
};

export type Ticket = {
  __typename?: 'Ticket';
  attachmentPath?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  priority: Scalars['String']['output'];
  status: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TotalRevenueInput = {
  period: Scalars['Float']['input'];
  periodType: Scalars['String']['input'];
};

export type TotalRevenueItem = {
  __typename?: 'TotalRevenueItem';
  date: Scalars['DateTime']['output'];
  value: Scalars['Float']['output'];
};

export type TotalRevenueOutput = {
  __typename?: 'TotalRevenueOutput';
  items: Array<TotalRevenueItem>;
};

export type UpdateAdamWidgetConfigInput = {
  fontSize: Scalars['Int']['input'];
  primaryColor: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  secondaryColor: Scalars['String']['input'];
};

export type UpdateAdminInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateAdminPasswordInput = {
  confirmNewPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateAdminProfileInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAdminRoleInput = {
  displayName: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  isSuperAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  permissionsIds: Array<Scalars['Int']['input']>;
};

export type UpdateBlogInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  imagePath?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContactRequestInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMediaInput = {
  id: Scalars['Int']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  viewTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateMenuInput = {
  id: Scalars['Int']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  pageId?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  place: Scalars['String']['input'];
  section?: Scalars['String']['input'];
};

export type UpdatePageComponentInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['Int']['input'];
  pageId: Scalars['Int']['input'];
};

export type UpdatePasswordInput = {
  confirmNewPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdatePasswordResponse = {
  __typename?: 'UpdatePasswordResponse';
  success: Scalars['Boolean']['output'];
};

export type UpdatePlanInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  extraFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  features?: InputMaybe<Array<PlanFeatureLimitationInput>>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['Int']['input']>;
  periodType?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdatePostInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  imagePath?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePreferencesInput = {
  imageModel: Scalars['String']['input'];
  textModel: Scalars['String']['input'];
};

export type UpdatePreferencesOutput = {
  __typename?: 'UpdatePreferencesOutput';
  success: Scalars['Boolean']['output'];
};

export type UpdateProfileInput = {
  gender?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProjectDesignInput = {
  fontFamily: Scalars['String']['input'];
  logoType: Scalars['String']['input'];
  logoValue: Scalars['String']['input'];
  palette: PaletteInput;
  // mode: Scalars['String']['input'];
};

export type UpdateProjectInput = {
  audience?: InputMaybe<ProjectAudienceInput>;
  contentType?: InputMaybe<ProjectContentTypeInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  design?: InputMaybe<UpdateProjectDesignInput>;
  id: Scalars['String']['input'];
  intellectualProperty?: InputMaybe<IntellectualPropertyInput>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  mainLanguage?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Array<ProjectMediaInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  plugins?: InputMaybe<Array<Scalars['String']['input']>>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  similarWebsites?: InputMaybe<Array<Scalars['String']['input']>>;
  volume?: InputMaybe<Scalars['String']['input']>;
  websiteLocation?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProjectSettingsInput = {
  fontFamily: Scalars['String']['input'];
  logoType: Scalars['String']['input'];
  logoValue: Scalars['String']['input'];
  pageDescription: Scalars['String']['input'];
  pageId: Scalars['Int']['input'];
  pageTitle: Scalars['String']['input'];
  palette: PaletteInput;
  projectId: Scalars['String']['input'];
};

export type UpdateTicketInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type UpdateUserInput = {
  gender?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imagePath?: Maybe<Scalars['String']['output']>;
  metadata: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  preferences?: Maybe<UserPreferences>;
  verified: Scalars['Boolean']['output'];
};

export type UserPreferences = {
  __typename?: 'UserPreferences';
  imageModel: Scalars['String']['output'];
  textModel: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserUsageOutput = {
  __typename?: 'UserUsageOutput';
  hasOneProjectFreeTrial: Scalars['Boolean']['output'];
  projectsCount: Scalars['Int']['output'];
};

export type VerifyUserEmailInput = {
  token: Scalars['String']['input'];
};

export type VisualType = {
  __typename?: 'VisualType';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type VisualTypeOnProject = {
  __typename?: 'VisualTypeOnProject';
  visualType: VisualType;
};

export type GetActiveUsersByCountryInLast30MinsQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;

export type GetActiveUsersByCountryInLast30MinsQuery = {
  __typename?: 'Query';
  getActiveUsersByCountryInLast30Mins: {
    __typename?: 'ActiveUsersOutput';
    items: Array<{ __typename?: 'ActiveUsersMetric'; category: string; value: number }>;
  };
};

export type GetReportByDateQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;

export type GetReportByDateQuery = {
  __typename?: 'Query';
  getReportByDate: {
    __typename?: 'ReportByDateOutput';
    activeUsers: Array<{ __typename?: 'DateMetric'; date: string; value: number }>;
    conversions: Array<{ __typename?: 'DateMetric'; date: string; value: number }>;
    eventCount: Array<{ __typename?: 'DateMetric'; date: string; value: number }>;
    newUsers: Array<{ __typename?: 'DateMetric'; date: string; value: number }>;
  };
};

export type GetActiveUsersByContinentQueryVariables = Exact<{
  getActiveUsersInput: GetActiveUsersInput;
}>;

export type GetActiveUsersByContinentQuery = {
  __typename?: 'Query';
  getActiveUsersByContinent: {
    __typename?: 'ActiveUsersOutput';
    items: Array<{ __typename?: 'ActiveUsersMetric'; category: string; value: number }>;
  };
};

export type GetActiveUsersByHourQueryVariables = Exact<{
  getActiveUsersInput: GetActiveUsersInput;
}>;

export type GetActiveUsersByHourQuery = {
  __typename?: 'Query';
  getActiveUsersByHour: {
    __typename?: 'ActiveUsersOutput';
    items: Array<{ __typename?: 'ActiveUsersMetric'; category: string; value: number }>;
  };
};

export type GetActiveUsersByPageQueryVariables = Exact<{
  getActiveUsersInput: GetActiveUsersInput;
}>;

export type GetActiveUsersByPageQuery = {
  __typename?: 'Query';
  getActiveUsersByPage: {
    __typename?: 'ActiveUsersOutput';
    items: Array<{ __typename?: 'ActiveUsersMetric'; category: string; value: number }>;
  };
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'AuthResponse';
    token: string;
    user: { __typename?: 'AuthUser'; id: string; email: string };
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    gender: string;
    phoneNumber: string;
    imagePath?: string | null;
    verified: boolean;
    createdAt: any;
    preferences?: { __typename?: 'UserPreferences'; imageModel: string; textModel: string } | null;
  };
};

export type GetMySubscriptionQueryVariables = Exact<{ [key: string]: never }>;

export type GetMySubscriptionQuery = {
  __typename?: 'Query';
  getMySubscription: {
    __typename?: 'Subscription';
    id: number;
    cost: number;
    expireAt: any;
    createdAt: any;
    planId: number;
    userId: string;
    status: string;
    isExpired?: boolean | null;
    expirationDays?: number | null;
    imageGenerations: number;
    textGenerations: number;
  };
};

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;

export type RegisterMutation = {
  __typename?: 'Mutation';
  register: { __typename?: 'AuthUser'; id: string; email: string };
};

export type VerifyUserEmailMutationVariables = Exact<{
  verifyUserEmailInput: VerifyUserEmailInput;
}>;

export type VerifyUserEmailMutation = {
  __typename?: 'Mutation';
  verifyUserEmail: { __typename?: 'AuthUser'; id: string; email: string };
};

export type ResendVerificationEmailMutationVariables = Exact<{
  resendInput: ResendVerificationEmailInput;
}>;

export type ResendVerificationEmailMutation = {
  __typename?: 'Mutation';
  resendVerificationEmail: { __typename?: 'AuthUser'; id: string; email: string };
};

export type RequestRecoverPasswordMutationVariables = Exact<{
  requestRecoverPasswordInput: RequestRecoverPasswordInput;
}>;

export type RequestRecoverPasswordMutation = {
  __typename?: 'Mutation';
  requestRecoverPassword: string;
};

export type ResetPasswordMutationVariables = Exact<{
  resetPasswordInput: ResetPasswordInput;
}>;

export type ResetPasswordMutation = { __typename?: 'Mutation'; resetPassword: boolean };

export type LoginWithGoogleMutationVariables = Exact<{
  googleToken: Scalars['String']['input'];
}>;

export type LoginWithGoogleMutation = {
  __typename?: 'Mutation';
  loginWithGoogle: {
    __typename?: 'AuthResponse';
    token: string;
    user: { __typename?: 'AuthUser'; id: string; email: string };
  };
};

export type RemoveContactMessageMutationVariables = Exact<{
  removeContactMessageInput: RemoveContactMessageInput;
}>;

export type RemoveContactMessageMutation = {
  __typename?: 'Mutation';
  removeContactMessage: { __typename?: 'ContactMessage'; id: number };
};

export type SuggestDomainNamesMutationVariables = Exact<{
  keyword: Scalars['String']['input'];
}>;

export type SuggestDomainNamesMutation = {
  __typename?: 'Mutation';
  suggestDomainNames: Array<string>;
};

export type EnhanceTextMutationVariables = Exact<{
  text: Scalars['String']['input'];
}>;

export type EnhanceTextMutation = { __typename?: 'Mutation'; enhanceText: string };

export type SuggestLogoTextsMutationVariables = Exact<{
  keyword: Scalars['String']['input'];
}>;

export type SuggestLogoTextsMutation = { __typename?: 'Mutation'; suggestLogoTexts: Array<string> };

export type GenerateImageMutationVariables = Exact<{
  generateImageInput: Scalars['String']['input'];
}>;

export type GenerateImageMutation = { __typename?: 'Mutation'; generateImage: string };

export type GenerateTextMutationVariables = Exact<{
  generateTextInput: Scalars['String']['input'];
}>;

export type GenerateTextMutation = { __typename?: 'Mutation'; generateText: string };

export type RegenerateTextMutationVariables = Exact<{
  regenerateTextInput: RegenerateTextInput;
}>;

export type RegenerateTextMutation = { __typename?: 'Mutation'; regenerateText: string };

export type GetDomainPricingQueryVariables = Exact<{
  domainName: Scalars['String']['input'];
}>;

export type GetDomainPricingQuery = {
  __typename?: 'Query';
  getDomainPricing: Array<{
    __typename?: 'DomainPrice';
    price: number;
    duration: number;
    durationType: string;
  }>;
};

export type CreateDomainRegistrationMutationVariables = Exact<{
  createDomainRegistrationInput: CreateDomainRegistrationInput;
}>;

export type CreateDomainRegistrationMutation = {
  __typename?: 'Mutation';
  createDomainRegistration: { __typename?: 'CreateDomainRegistrationOutput'; redirectURL: string };
};

export type CreateFreeDomainRegistrationMutationVariables = Exact<{
  createFreeDomainRegistrationInput: CreateFreeDomainRegistrationInput;
}>;

export type CreateFreeDomainRegistrationMutation = {
  __typename?: 'Mutation';
  createFreeDomainRegistration: {
    __typename?: 'CreateFreeDomainRegistrationOutput';
    success: boolean;
  };
};

export type CheckDomainAvailabilityQueryVariables = Exact<{
  domainName: Scalars['String']['input'];
}>;

export type CheckDomainAvailabilityQuery = {
  __typename?: 'Query';
  checkDomainAvailability: boolean;
};

export type GetDomainRegistrationsQueryVariables = Exact<{ [key: string]: never }>;

export type GetDomainRegistrationsQuery = {
  __typename?: 'Query';
  getDomainRegistrations: Array<{
    __typename?: 'DomainRegistration';
    id: number;
    years: number;
    amount: number;
    isFree: boolean;
    status: string;
    domainName: string;
    userId: string;
    createdAt: any;
  }>;
};

export type GetUnattachedDomainsQueryVariables = Exact<{ [key: string]: never }>;

export type GetUnattachedDomainsQuery = {
  __typename?: 'Query';
  getUnattachedDomains: Array<string>;
};

export type AttachDomainMutationVariables = Exact<{
  attachDomainInput: AttachDomainInput;
}>;

export type AttachDomainMutation = {
  __typename?: 'Mutation';
  attachDomain: { __typename?: 'AttachDomainOutput'; success: boolean };
};

export type DetachDomainMutationVariables = Exact<{
  detachDomainInput: DetachDomainInput;
}>;

export type DetachDomainMutation = {
  __typename?: 'Mutation';
  detachDomain: { __typename?: 'DetachDomainOutput'; success: boolean };
};

export type AddFreeCertificateToDomainMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;

export type AddFreeCertificateToDomainMutation = {
  __typename?: 'Mutation';
  addFreeCertificateToDomain: boolean;
};

export type CreateDonationMutationVariables = Exact<{
  createDonationInput: CreateDonationInput;
}>;

export type CreateDonationMutation = {
  __typename?: 'Mutation';
  createDonation: { __typename?: 'CreateDonationOutput'; redirectURL: string };
};

export type GetMyDonationsQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyDonationsQuery = {
  __typename?: 'Query';
  getMyDonations: Array<{
    __typename?: 'Donation';
    id: number;
    amount: number;
    type: string;
    status: string;
    userId: string;
    createdAt: any;
  }>;
};

export type GetProjectMediaQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;

export type GetProjectMediaQuery = {
  __typename?: 'Query';
  getProjectMedia: Array<{
    __typename?: 'Media';
    id: number;
    type: string;
    title: string;
    path: string;
    projectId: string;
    viewTypes: Array<string>;
  }>;
};

export type CreateProjectMediaMutationVariables = Exact<{
  createMediaInput: CreateMediaInput;
}>;

export type CreateProjectMediaMutation = {
  __typename?: 'Mutation';
  createMedia: {
    __typename?: 'Media';
    id: number;
    type: string;
    title: string;
    path: string;
    projectId: string;
    viewTypes: Array<string>;
  };
};

export type UpdateProjectMediaMutationVariables = Exact<{
  updateMediaInput: UpdateMediaInput;
}>;

export type UpdateProjectMediaMutation = {
  __typename?: 'Mutation';
  updateMedia: {
    __typename?: 'Media';
    id: number;
    type: string;
    title: string;
    path: string;
    projectId: string;
    viewTypes: Array<string>;
  };
};

export type DeleteProjectMediaMutationVariables = Exact<{
  deleteMediaInput: DeleteMediaInput;
}>;

export type DeleteProjectMediaMutation = {
  __typename?: 'Mutation';
  deleteMedia: {
    __typename?: 'Media';
    id: number;
    type: string;
    title: string;
    path: string;
    projectId: string;
    viewTypes: Array<string>;
  };
};

export type GetProjectMenusQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;

export type GetProjectMenusQuery = {
  __typename?: 'Query';
  getProjectMenus: Array<{
    __typename?: 'Menu';
    id: number;
    label: string;
    pageId?: number | null;
    parentId?: number | null;
    projectId: string;
    link?: string | null;
    pageSlug?: string | null;
    children?: Array<{
      __typename?: 'Menu';
      id: number;
      label: string;
      pageId?: number | null;
      parentId?: number | null;
      projectId: string;
      link?: string | null;
    }> | null;
  }>;
};

export type CreateProjectMenuMutationVariables = Exact<{
  createMenuInput: CreateMenuInput;
}>;

export type CreateProjectMenuMutation = {
  __typename?: 'Mutation';
  createMenu: { __typename?: 'Menu'; id: number; label: string };
};

export type UpdateProjectMenuMutationVariables = Exact<{
  updateMenuInput: UpdateMenuInput;
}>;

export type UpdateProjectMenuMutation = {
  __typename?: 'Mutation';
  updateMenu: { __typename?: 'Menu'; id: number; label: string };
};

export type DeleteProjectMenuMutationVariables = Exact<{
  deleteMenuInput: DeleteMenuInput;
}>;

export type DeleteProjectMenuMutation = {
  __typename?: 'Mutation';
  deleteMenu: { __typename?: 'Menu'; id: number; label: string };
};

export type GetPageByIdQueryVariables = Exact<{
  pageId: Scalars['Int']['input'];
}>;

export type GetPageByIdQuery = {
  __typename?: 'Query';
  page: {
    __typename?: 'Page';
    id: number;
    projectId: string;
    title: string;
    description: string;
    slug?: string | null;
    themeId: number;
    components?: Array<{
      __typename?: 'PageComponent';
      id: number;
      order: number;
      data: any;
      componentId: number;
      component?: { __typename?: 'Component'; name: string; type: string } | null;
    }> | null;
  };
};

export type CreatePageMutationVariables = Exact<{
  createPageInput: CreatePageInput;
}>;

export type CreatePageMutation = {
  __typename?: 'Mutation';
  createPage: {
    __typename?: 'Page';
    id: number;
    title: string;
    description: string;
    projectId: string;
    generateAI: boolean;
    sections: SectionsInput;
  };
};

export type RegeneratePageMutationVariables = Exact<{
  regeneratePageInput: RegeneratePageInput;
}>;

export type RegeneratePageMutation = { __typename?: 'Mutation'; regeneratePage: boolean };

export type DeletePageMutationVariables = Exact<{
  deletePageInput: DeletePageInput;
}>;

export type DeletePageMutation = { __typename?: 'Mutation'; deletePage: boolean };

export type ChangePageComponentLayoutMutationVariables = Exact<{
  changePageComponentInput: ChangeComponentLayoutInput;
}>;

export type ChangePageComponentLayoutMutation = {
  __typename?: 'Mutation';
  changePageComponentLayout: {
    __typename?: 'PageComponent';
    id: number;
    componentId: number;
    pageId: number;
    order: number;
    data: any;
  };
};

export type AddComponentMutationVariables = Exact<{
  addComponentInput: AddPageComponentInput;
}>;

export type AddComponentMutation = {
  __typename?: 'Mutation';
  addPageComponent: {
    __typename?: 'PageComponent';
    id: number;
    pageId: number;
    componentId: number;
    order: number;
    data: any;
    component?: { __typename?: 'Component'; id: number; name: string; type: string } | null;
  };
};

export type RemoveComponentMutationVariables = Exact<{
  removeComponentInput: RemovePageComponentInput;
}>;

export type RemoveComponentMutation = {
  __typename?: 'Mutation';
  removePageComponent: {
    __typename?: 'PageComponent';
    id: number;
    componentId: number;
    pageId: number;
    order: number;
    data: any;
  };
};

export type SwapPageComponentsMutationVariables = Exact<{
  swapInput: SwapPageComponentsInput;
}>;

export type SwapPageComponentsMutation = { __typename?: 'Mutation'; swapPageComponents: boolean };

export type UpdatePageComponentMutationVariables = Exact<{
  pageComponentInput: UpdatePageComponentInput;
}>;

export type UpdatePageComponentMutation = { __typename?: 'Mutation'; updatePageComponent: boolean };

export type CreateSubscriptionMutationVariables = Exact<{
  createSubscriptionInput: CreateSubscriptionInput;
}>;

export type CreateSubscriptionMutation = {
  __typename?: 'Mutation';
  createSubscription: { __typename?: 'CreateSubscriptionOutput'; redirectURL: string };
};

export type CheckPaymentStatusMutationVariables = Exact<{
  transactionId: Scalars['String']['input'];
}>;

export type CheckPaymentStatusMutation = { __typename?: 'Mutation'; checkPaymentStatus: string };

export type GetPlansQueryVariables = Exact<{ [key: string]: never }>;

export type GetPlansQuery = {
  __typename?: 'Query';
  plans: Array<{
    __typename?: 'Plan';
    id: number;
    name: string;
    description: string;
    periodType: string;
    period: number;
    price: number;
    discount: number;
    extraFeatures?: Array<string> | null;
    createdAt: any;
    updatedAt: any;
    features: Array<{
      __typename?: 'PlanFeatureLimitation';
      id: number;
      featureId: number;
      limitation?: any | null;
      description: string;
      planId: number;
    }>;
  }>;
};

export type GetPlanQueryVariables = Exact<{
  planId: Scalars['Int']['input'];
}>;

export type GetPlanQuery = {
  __typename?: 'Query';
  plan: {
    __typename?: 'Plan';
    id: number;
    name: string;
    description: string;
    periodType: string;
    period: number;
    price: number;
    discount: number;
    extraFeatures?: Array<string> | null;
    createdAt: any;
    updatedAt: any;
    features: Array<{
      __typename?: 'PlanFeatureLimitation';
      id: number;
      featureId: number;
      limitation?: any | null;
      description: string;
      planId: number;
      feature?: { __typename?: 'PlanFeatureSchema'; key: string } | null;
    }>;
  };
};

export type UpdateAdamWidgetConfigMutationVariables = Exact<{
  updateAdamWidgetConfigInput: UpdateAdamWidgetConfigInput;
}>;

export type UpdateAdamWidgetConfigMutation = {
  __typename?: 'Mutation';
  updateAdamWidgetConfig: boolean;
};

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;

export type CreatePostMutation = {
  __typename?: 'Mutation';
  createPost: {
    __typename?: 'Post';
    id: number;
    title: string;
    slug?: string | null;
    description: string;
    body: string;
    imagePath: string;
    projectId: string;
  };
};

export type UpdatePostMutationVariables = Exact<{
  updatePostInput: UpdatePostInput;
}>;

export type UpdatePostMutation = {
  __typename?: 'Mutation';
  updatePost: {
    __typename?: 'Post';
    id: number;
    title: string;
    slug?: string | null;
    description: string;
    body: string;
    imagePath: string;
    projectId: string;
  };
};

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['Int']['input'];
}>;

export type DeletePostMutation = {
  __typename?: 'Mutation';
  deletePost: {
    __typename?: 'Post';
    id: number;
    title: string;
    slug?: string | null;
    description: string;
    body: string;
    imagePath: string;
    projectId: string;
  };
};

export type GeneratePostMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;

export type GeneratePostMutation = {
  __typename?: 'Mutation';
  generatePost: {
    __typename?: 'Post';
    id: number;
    title: string;
    slug?: string | null;
    description: string;
    body: string;
    imagePath: string;
    projectId: string;
  };
};

export type GetProjectByIdQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;

export type GetProjectByIdQuery = {
  __typename?: 'Query';
  project: {
    __typename?: 'Project';
    id: string;
    name: string;
    purpose: string;
    description: string;
    keywords: Array<string>;
    similarWebsites: Array<string>;
    websiteLocation: string;
    mainLanguage: string;
    intellectualPropertyType: string;
    intellectualPropertyInfo: any;
    cdnPullZoneId?: number | null;
    publicURL: string;
    audience?: {
      __typename?: 'ProjectAudience';
      id: number;
      age: Array<string>;
      // language: Array<string>;
      gender: Array<string>;
      organizations?: Array<string> | null;
      countries?: Array<string> | null;
      projectId: string;
    } | null;
    settings?: {
      __typename?: 'ProjectSettings';
      id: number;
      logoType: string;
      logoValue: string;
      fontFamily: string;
      projectId: string;
      palette: {
        __typename?: 'Palette';
        primary: string;
        secondary: string;
        neutral: string;
        titles: string;
        subTitles: string;
      };
    } | null;
    pages?: Array<{
      __typename?: 'Page';
      id: number;
      title: string;
      slug?: string | null;
      description: string;
      projectId: string;
      components?: Array<{
        __typename?: 'PageComponent';
        id: number;
        data: any;
        order: number;
        pageId: number;
        componentId: number;
        component?: { __typename?: 'Component'; name: string; type: string } | null;
      }> | null;
    }> | null;
    posts?: Array<{
      __typename?: 'Post';
      id: number;
      title: string;
      description: string;
      slug?: string | null;
      body: string;
      imagePath: string;
      imageAlt?: string | null;
      createdAt: any;
    }> | null;
    contactMessages?: Array<{
      __typename?: 'ContactMessage';
      id: number;
      name: string;
      email: string;
      description: string;
      createdAt: any;
    }> | null;
    media?: Array<{
      __typename?: 'Media';
      id: number;
      title: string;
      path: string;
      type: string;
      viewTypes: Array<string>;
    }> | null;
    plugins?: Array<{
      __typename?: 'ProjectPlugin';
      id: number;
      key: string;
      value: string;
      variation: string;
      projectId: string;
    }> | null;
    domainRegistration?: {
      __typename?: 'ProjectDomainRegistration';
      domainRegistrationId: number;
      projectId: string;
      domainRegistration: {
        __typename?: 'DomainRegistration';
        id: number;
        years: number;
        amount: number;
        isFree: boolean;
        status: string;
        domainName: string;
        userId: string;
        createdAt: any;
      };
    } | null;
  };
};

export type CreateProjectMutationVariables = Exact<{
  createProjectInput: CreateProjectInput;
}>;

export type CreateProjectMutation = {
  __typename?: 'Mutation';
  createProject: {
    __typename?: 'Project';
    id: string;
    name: string;
    purpose: string;
    description: string;
    keywords: Array<string>;
    similarWebsites: Array<string>;
    websiteLocation: string;
    mainLanguage: string;
    intellectualPropertyType: string;
    intellectualPropertyInfo: any;
  };
};

export type GetPaletteQueryVariables = Exact<{ [key: string]: never }>;

export type GetPaletteQuery = {
  __typename?: 'query_root';
  palettes: Array<{
    __typename?: 'Palettes';
    id: number;
    neutral: string;
    primary: string;
    secondary: string;
    subTitles: string;
    titles: string;
  }>;
};

export type CreatePaletteMutationVariables = Exact<{
  input: CreatePaletteInput;
}>;

export type CreatePaletteMutation = {
  __typename?: 'Mutation';
  createPalette: {
    __typename?: 'palette';
    id: string;
    neutral: string;
    primary: string;
    secondary: string;
    subTitles: string;
    titles: string;
  };
};

export type GetProjectTargetTypesQueryVariables = Exact<{ [key: string]: never }>;

export type GetProjectTargetTypesQuery = {
  __typename?: 'Query';
  projectTargetTypes: Array<{
    __typename?: 'ProjectTargetType';
    title: string;
    description: string;
    imageUrl: string;
  }>;
};

export type UpdateProjectSettingsMutationVariables = Exact<{
  updateProjectSettingsInput: UpdateProjectSettingsInput;
}>;

export type UpdateProjectSettingsMutation = {
  __typename?: 'Mutation';
  updateProjectSettings: boolean;
};

export type GetMyProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyProjectsQuery = {
  __typename?: 'Query';
  projects: Array<{
    __typename?: 'Project';
    id: string;
    name: string;
    cdnPullZoneId?: number | null;
    publicURL: string;
    createdAt: any;
    settings?: { __typename?: 'ProjectSettings'; logoType: string; logoValue: string } | null;
  }>;
};

export type UpdateProjectMutationVariables = Exact<{
  updateProjectInput: UpdateProjectInput;
}>;

export type UpdateProjectMutation = { __typename?: 'Mutation'; updateProject: boolean };

export type ExportProjectMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;

export type ExportProjectMutation = { __typename?: 'Mutation'; exportProject: boolean };

export type PublishProjectMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;

export type PublishProjectMutation = { __typename?: 'Mutation'; publishProject: boolean };

export type DeleteProjectMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;

export type DeleteProjectMutation = { __typename?: 'Mutation'; deleteProject: boolean };

export type CreateAnalyticsPropertyMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;

export type CreateAnalyticsPropertyMutation = {
  __typename?: 'Mutation';
  createAnalyticsProperty: boolean;
};

export type GetProjectAnalyticsPropertyQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;

export type GetProjectAnalyticsPropertyQuery = {
  __typename?: 'Query';
  getProjectAnalyticsProperty: {
    __typename?: 'Analytics';
    id: number;
    displayName: string;
    propertyName: string;
    dataStreamName: string;
    measurementId: string;
    defaultUri: string;
    parentAccountName: string;
  };
};

export type GetProjectGenerationQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;

export type GetProjectGenerationQuery = {
  __typename?: 'Query';
  projectGeneration: {
    __typename?: 'ProjectGeneration';
    id: number;
    projectId: string;
    status: string;
    logs?: string | null;
    error?: string | null;
    createdAt: any;
  };
};

export type GetThemesQueryVariables = Exact<{ [key: string]: never }>;

export type GetThemesQuery = {
  __typename?: 'Query';
  themes: Array<{ __typename?: 'Theme'; id: number; name: string; thumbnail: string }>;
};

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;

export type UpdateProfileMutation = {
  __typename?: 'Mutation';
  updateProfile: {
    __typename?: 'User';
    id: string;
    email: string;
    gender: string;
    name: string;
    imagePath?: string | null;
    phoneNumber: string;
  };
};

export type UpdatePasswordMutationVariables = Exact<{
  input: UpdatePasswordInput;
}>;

export type UpdatePasswordMutation = {
  __typename?: 'Mutation';
  updatePassword: { __typename?: 'UpdatePasswordResponse'; success: boolean };
};

export type UpdatePreferencesMutationVariables = Exact<{
  input: UpdatePreferencesInput;
}>;

export type UpdatePreferencesMutation = {
  __typename?: 'Mutation';
  updatePreferences: { __typename?: 'UpdatePreferencesOutput'; success: boolean };
};

export type GetUserUsageQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserUsageQuery = {
  __typename?: 'Query';
  getUserUsage: {
    __typename?: 'UserUsageOutput';
    projectsCount: number;
    hasOneProjectFreeTrial: boolean;
  };
};

export const GetActiveUsersByCountryInLast30MinsDocument = `
    query GetActiveUsersByCountryInLast30Mins($projectId: String!) {
  getActiveUsersByCountryInLast30Mins(projectId: $projectId) {
    items {
      category
      value
    }
  }
}
    `;
export const useGetActiveUsersByCountryInLast30MinsQuery = <
  TData = GetActiveUsersByCountryInLast30MinsQuery,
  TError = unknown
>(
  variables: GetActiveUsersByCountryInLast30MinsQueryVariables,
  options?: UseQueryOptions<GetActiveUsersByCountryInLast30MinsQuery, TError, TData>
) =>
  useQuery<GetActiveUsersByCountryInLast30MinsQuery, TError, TData>(
    ['GetActiveUsersByCountryInLast30Mins', variables],
    fetchData<
      GetActiveUsersByCountryInLast30MinsQuery,
      GetActiveUsersByCountryInLast30MinsQueryVariables
    >(GetActiveUsersByCountryInLast30MinsDocument, variables),
    options
  );
export const GetReportByDateDocument = `
    query GetReportByDate($projectId: String!) {
  getReportByDate(projectId: $projectId) {
    activeUsers {
      date
      value
    }
    conversions {
      date
      value
    }
    eventCount {
      date
      value
    }
    newUsers {
      date
      value
    }
  }
}
    `;
export const useGetReportByDateQuery = <TData = GetReportByDateQuery, TError = unknown>(
  variables: GetReportByDateQueryVariables,
  options?: UseQueryOptions<GetReportByDateQuery, TError, TData>
) =>
  useQuery<GetReportByDateQuery, TError, TData>(
    ['GetReportByDate', variables],
    fetchData<GetReportByDateQuery, GetReportByDateQueryVariables>(
      GetReportByDateDocument,
      variables
    ),
    options
  );
export const GetActiveUsersByContinentDocument = `
    query GetActiveUsersByContinent($getActiveUsersInput: GetActiveUsersInput!) {
  getActiveUsersByContinent(getActiveUsersInput: $getActiveUsersInput) {
    items {
      category
      value
    }
  }
}
    `;
export const useGetActiveUsersByContinentQuery = <
  TData = GetActiveUsersByContinentQuery,
  TError = unknown
>(
  variables: GetActiveUsersByContinentQueryVariables,
  options?: UseQueryOptions<GetActiveUsersByContinentQuery, TError, TData>
) =>
  useQuery<GetActiveUsersByContinentQuery, TError, TData>(
    ['GetActiveUsersByContinent', variables],
    fetchData<GetActiveUsersByContinentQuery, GetActiveUsersByContinentQueryVariables>(
      GetActiveUsersByContinentDocument,
      variables
    ),
    options
  );
export const GetActiveUsersByHourDocument = `
    query GetActiveUsersByHour($getActiveUsersInput: GetActiveUsersInput!) {
  getActiveUsersByHour(getActiveUsersInput: $getActiveUsersInput) {
    items {
      category
      value
    }
  }
}
    `;
export const useGetActiveUsersByHourQuery = <TData = GetActiveUsersByHourQuery, TError = unknown>(
  variables: GetActiveUsersByHourQueryVariables,
  options?: UseQueryOptions<GetActiveUsersByHourQuery, TError, TData>
) =>
  useQuery<GetActiveUsersByHourQuery, TError, TData>(
    ['GetActiveUsersByHour', variables],
    fetchData<GetActiveUsersByHourQuery, GetActiveUsersByHourQueryVariables>(
      GetActiveUsersByHourDocument,
      variables
    ),
    options
  );
export const GetActiveUsersByPageDocument = `
    query GetActiveUsersByPage($getActiveUsersInput: GetActiveUsersInput!) {
  getActiveUsersByPage(getActiveUsersInput: $getActiveUsersInput) {
    items {
      category
      value
    }
  }
}
    `;
export const useGetActiveUsersByPageQuery = <TData = GetActiveUsersByPageQuery, TError = unknown>(
  variables: GetActiveUsersByPageQueryVariables,
  options?: UseQueryOptions<GetActiveUsersByPageQuery, TError, TData>
) =>
  useQuery<GetActiveUsersByPageQuery, TError, TData>(
    ['GetActiveUsersByPage', variables],
    fetchData<GetActiveUsersByPageQuery, GetActiveUsersByPageQueryVariables>(
      GetActiveUsersByPageDocument,
      variables
    ),
    options
  );
export const LoginDocument = `
    mutation Login($input: LoginInput!) {
  login(loginInput: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;
export const useLoginMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>
) =>
  useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
    ['Login'],
    (variables?: LoginMutationVariables) =>
      fetchData<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
    options
  );
export const MeDocument = `
    query Me {
  me {
    id
    name
    email
    gender
    phoneNumber
    imagePath
    verified
    createdAt
    preferences {
      imageModel
      textModel
    }
  }
}
    `;
export const useMeQuery = <TData = MeQuery, TError = unknown>(
  variables?: MeQueryVariables,
  options?: UseQueryOptions<MeQuery, TError, TData>
) =>
  useQuery<MeQuery, TError, TData>(
    variables === undefined ? ['Me'] : ['Me', variables],
    fetchData<MeQuery, MeQueryVariables>(MeDocument, variables),
    options
  );
export const GetMySubscriptionDocument = `
    query GetMySubscription {
  getMySubscription {
    id
    cost
    expireAt
    createdAt
    planId
    userId
    status
    isExpired
    expirationDays
    imageGenerations
    textGenerations
  }
}
    `;
export const useGetMySubscriptionQuery = <TData = GetMySubscriptionQuery, TError = unknown>(
  variables?: GetMySubscriptionQueryVariables,
  options?: UseQueryOptions<GetMySubscriptionQuery, TError, TData>
) =>
  useQuery<GetMySubscriptionQuery, TError, TData>(
    variables === undefined ? ['GetMySubscription'] : ['GetMySubscription', variables],
    fetchData<GetMySubscriptionQuery, GetMySubscriptionQueryVariables>(
      GetMySubscriptionDocument,
      variables
    ),
    options
  );
export const RegisterDocument = `
    mutation Register($input: RegisterInput!) {
  register(registerInput: $input) {
    id
    email
  }
}
    `;
export const useRegisterMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<RegisterMutation, TError, RegisterMutationVariables, TContext>
) =>
  useMutation<RegisterMutation, TError, RegisterMutationVariables, TContext>(
    ['Register'],
    (variables?: RegisterMutationVariables) =>
      fetchData<RegisterMutation, RegisterMutationVariables>(RegisterDocument, variables)(),
    options
  );
export const VerifyUserEmailDocument = `
    mutation VerifyUserEmail($verifyUserEmailInput: VerifyUserEmailInput!) {
  verifyUserEmail(verifyUserEmailInput: $verifyUserEmailInput) {
    id
    email
  }
}
    `;
export const useVerifyUserEmailMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    VerifyUserEmailMutation,
    TError,
    VerifyUserEmailMutationVariables,
    TContext
  >
) =>
  useMutation<VerifyUserEmailMutation, TError, VerifyUserEmailMutationVariables, TContext>(
    ['VerifyUserEmail'],
    (variables?: VerifyUserEmailMutationVariables) =>
      fetchData<VerifyUserEmailMutation, VerifyUserEmailMutationVariables>(
        VerifyUserEmailDocument,
        variables
      )(),
    options
  );
export const ResendVerificationEmailDocument = `
    mutation ResendVerificationEmail($resendInput: ResendVerificationEmailInput!) {
  resendVerificationEmail(resendVerificationEmailInput: $resendInput) {
    id
    email
  }
}
    `;
export const useResendVerificationEmailMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    ResendVerificationEmailMutation,
    TError,
    ResendVerificationEmailMutationVariables,
    TContext
  >
) =>
  useMutation<
    ResendVerificationEmailMutation,
    TError,
    ResendVerificationEmailMutationVariables,
    TContext
  >(
    ['ResendVerificationEmail'],
    (variables?: ResendVerificationEmailMutationVariables) =>
      fetchData<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>(
        ResendVerificationEmailDocument,
        variables
      )(),
    options
  );
export const RequestRecoverPasswordDocument = `
    mutation RequestRecoverPassword($requestRecoverPasswordInput: RequestRecoverPasswordInput!) {
  requestRecoverPassword(
    requestRecoverPasswordInput: $requestRecoverPasswordInput
  )
}
    `;
export const useRequestRecoverPasswordMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    RequestRecoverPasswordMutation,
    TError,
    RequestRecoverPasswordMutationVariables,
    TContext
  >
) =>
  useMutation<
    RequestRecoverPasswordMutation,
    TError,
    RequestRecoverPasswordMutationVariables,
    TContext
  >(
    ['RequestRecoverPassword'],
    (variables?: RequestRecoverPasswordMutationVariables) =>
      fetchData<RequestRecoverPasswordMutation, RequestRecoverPasswordMutationVariables>(
        RequestRecoverPasswordDocument,
        variables
      )(),
    options
  );
export const ResetPasswordDocument = `
    mutation ResetPassword($resetPasswordInput: ResetPasswordInput!) {
  resetPassword(resetPasswordInput: $resetPasswordInput)
}
    `;
export const useResetPasswordMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    ResetPasswordMutation,
    TError,
    ResetPasswordMutationVariables,
    TContext
  >
) =>
  useMutation<ResetPasswordMutation, TError, ResetPasswordMutationVariables, TContext>(
    ['ResetPassword'],
    (variables?: ResetPasswordMutationVariables) =>
      fetchData<ResetPasswordMutation, ResetPasswordMutationVariables>(
        ResetPasswordDocument,
        variables
      )(),
    options
  );
export const LoginWithGoogleDocument = `
    mutation LoginWithGoogle($googleToken: String!) {
  loginWithGoogle(token: $googleToken) {
    token
    user {
      id
      email
    }
  }
}
    `;
export const useLoginWithGoogleMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    LoginWithGoogleMutation,
    TError,
    LoginWithGoogleMutationVariables,
    TContext
  >
) =>
  useMutation<LoginWithGoogleMutation, TError, LoginWithGoogleMutationVariables, TContext>(
    ['LoginWithGoogle'],
    (variables?: LoginWithGoogleMutationVariables) =>
      fetchData<LoginWithGoogleMutation, LoginWithGoogleMutationVariables>(
        LoginWithGoogleDocument,
        variables
      )(),
    options
  );
export const RemoveContactMessageDocument = `
    mutation RemoveContactMessage($removeContactMessageInput: RemoveContactMessageInput!) {
  removeContactMessage(removeContactMessageInput: $removeContactMessageInput) {
    id
  }
}
    `;
export const useRemoveContactMessageMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    RemoveContactMessageMutation,
    TError,
    RemoveContactMessageMutationVariables,
    TContext
  >
) =>
  useMutation<
    RemoveContactMessageMutation,
    TError,
    RemoveContactMessageMutationVariables,
    TContext
  >(
    ['RemoveContactMessage'],
    (variables?: RemoveContactMessageMutationVariables) =>
      fetchData<RemoveContactMessageMutation, RemoveContactMessageMutationVariables>(
        RemoveContactMessageDocument,
        variables
      )(),
    options
  );
export const SuggestDomainNamesDocument = `
    mutation SuggestDomainNames($keyword: String!) {
  suggestDomainNames(keyword: $keyword)
}
    `;
export const useSuggestDomainNamesMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    SuggestDomainNamesMutation,
    TError,
    SuggestDomainNamesMutationVariables,
    TContext
  >
) =>
  useMutation<SuggestDomainNamesMutation, TError, SuggestDomainNamesMutationVariables, TContext>(
    ['SuggestDomainNames'],
    (variables?: SuggestDomainNamesMutationVariables) =>
      fetchData<SuggestDomainNamesMutation, SuggestDomainNamesMutationVariables>(
        SuggestDomainNamesDocument,
        variables
      )(),
    options
  );
export const EnhanceTextDocument = `
    mutation EnhanceText($text: String!) {
  enhanceText(text: $text)
}
    `;
export const useEnhanceTextMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<EnhanceTextMutation, TError, EnhanceTextMutationVariables, TContext>
) =>
  useMutation<EnhanceTextMutation, TError, EnhanceTextMutationVariables, TContext>(
    ['EnhanceText'],
    (variables?: EnhanceTextMutationVariables) =>
      fetchData<EnhanceTextMutation, EnhanceTextMutationVariables>(
        EnhanceTextDocument,
        variables
      )(),
    options
  );
export const SuggestLogoTextsDocument = `
    mutation SuggestLogoTexts($keyword: String!) {
  suggestLogoTexts(keyword: $keyword)
}
    `;
export const useSuggestLogoTextsMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    SuggestLogoTextsMutation,
    TError,
    SuggestLogoTextsMutationVariables,
    TContext
  >
) =>
  useMutation<SuggestLogoTextsMutation, TError, SuggestLogoTextsMutationVariables, TContext>(
    ['SuggestLogoTexts'],
    (variables?: SuggestLogoTextsMutationVariables) =>
      fetchData<SuggestLogoTextsMutation, SuggestLogoTextsMutationVariables>(
        SuggestLogoTextsDocument,
        variables
      )(),
    options
  );
export const GenerateImageDocument = `
    mutation GenerateImage($generateImageInput: String!) {
  generateImage(description: $generateImageInput)
}
    `;
export const useGenerateImageMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    GenerateImageMutation,
    TError,
    GenerateImageMutationVariables,
    TContext
  >
) =>
  useMutation<GenerateImageMutation, TError, GenerateImageMutationVariables, TContext>(
    ['GenerateImage'],
    (variables?: GenerateImageMutationVariables) =>
      fetchData<GenerateImageMutation, GenerateImageMutationVariables>(
        GenerateImageDocument,
        variables
      )(),
    options
  );
export const GenerateTextDocument = `
    mutation GenerateText($generateTextInput: String!) {
  generateText(text: $generateTextInput)
}
    `;
export const useGenerateTextMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    GenerateTextMutation,
    TError,
    GenerateTextMutationVariables,
    TContext
  >
) =>
  useMutation<GenerateTextMutation, TError, GenerateTextMutationVariables, TContext>(
    ['GenerateText'],
    (variables?: GenerateTextMutationVariables) =>
      fetchData<GenerateTextMutation, GenerateTextMutationVariables>(
        GenerateTextDocument,
        variables
      )(),
    options
  );
export const RegenerateTextDocument = `
    mutation RegenerateText($regenerateTextInput: RegenerateTextInput!) {
  regenerateText(input: $regenerateTextInput)
}
    `;
export const useRegenerateTextMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    RegenerateTextMutation,
    TError,
    RegenerateTextMutationVariables,
    TContext
  >
) =>
  useMutation<RegenerateTextMutation, TError, RegenerateTextMutationVariables, TContext>(
    ['RegenerateText'],
    (variables?: RegenerateTextMutationVariables) =>
      fetchData<RegenerateTextMutation, RegenerateTextMutationVariables>(
        RegenerateTextDocument,
        variables
      )(),
    options
  );
export const GetDomainPricingDocument = `
    query GetDomainPricing($domainName: String!) {
  getDomainPricing(domainName: $domainName) {
    price
    duration
    durationType
  }
}
    `;
export const useGetDomainPricingQuery = <TData = GetDomainPricingQuery, TError = unknown>(
  variables: GetDomainPricingQueryVariables,
  options?: UseQueryOptions<GetDomainPricingQuery, TError, TData>
) =>
  useQuery<GetDomainPricingQuery, TError, TData>(
    ['GetDomainPricing', variables],
    fetchData<GetDomainPricingQuery, GetDomainPricingQueryVariables>(
      GetDomainPricingDocument,
      variables
    ),
    options
  );
export const CreateDomainRegistrationDocument = `
    mutation CreateDomainRegistration($createDomainRegistrationInput: CreateDomainRegistrationInput!) {
  createDomainRegistration(
    createDomainRegistrationInput: $createDomainRegistrationInput
  ) {
    redirectURL
  }
}
    `;
export const useCreateDomainRegistrationMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateDomainRegistrationMutation,
    TError,
    CreateDomainRegistrationMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateDomainRegistrationMutation,
    TError,
    CreateDomainRegistrationMutationVariables,
    TContext
  >(
    ['CreateDomainRegistration'],
    (variables?: CreateDomainRegistrationMutationVariables) =>
      fetchData<CreateDomainRegistrationMutation, CreateDomainRegistrationMutationVariables>(
        CreateDomainRegistrationDocument,
        variables
      )(),
    options
  );
export const CreateFreeDomainRegistrationDocument = `
    mutation CreateFreeDomainRegistration($createFreeDomainRegistrationInput: CreateFreeDomainRegistrationInput!) {
  createFreeDomainRegistration(
    createFreeDomainRegistrationInput: $createFreeDomainRegistrationInput
  ) {
    success
  }
}
    `;
export const useCreateFreeDomainRegistrationMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateFreeDomainRegistrationMutation,
    TError,
    CreateFreeDomainRegistrationMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateFreeDomainRegistrationMutation,
    TError,
    CreateFreeDomainRegistrationMutationVariables,
    TContext
  >(
    ['CreateFreeDomainRegistration'],
    (variables?: CreateFreeDomainRegistrationMutationVariables) =>
      fetchData<
        CreateFreeDomainRegistrationMutation,
        CreateFreeDomainRegistrationMutationVariables
      >(CreateFreeDomainRegistrationDocument, variables)(),
    options
  );
export const CheckDomainAvailabilityDocument = `
    query CheckDomainAvailability($domainName: String!) {
  checkDomainAvailability(domainName: $domainName)
}
    `;
export const useCheckDomainAvailabilityQuery = <
  TData = CheckDomainAvailabilityQuery,
  TError = unknown
>(
  variables: CheckDomainAvailabilityQueryVariables,
  options?: UseQueryOptions<CheckDomainAvailabilityQuery, TError, TData>
) =>
  useQuery<CheckDomainAvailabilityQuery, TError, TData>(
    ['CheckDomainAvailability', variables],
    fetchData<CheckDomainAvailabilityQuery, CheckDomainAvailabilityQueryVariables>(
      CheckDomainAvailabilityDocument,
      variables
    ),
    options
  );
export const GetDomainRegistrationsDocument = `
    query GetDomainRegistrations {
  getDomainRegistrations {
    id
    years
    amount
    isFree
    status
    domainName
    userId
    createdAt
  }
}
    `;
export const useGetDomainRegistrationsQuery = <
  TData = GetDomainRegistrationsQuery,
  TError = unknown
>(
  variables?: GetDomainRegistrationsQueryVariables,
  options?: UseQueryOptions<GetDomainRegistrationsQuery, TError, TData>
) =>
  useQuery<GetDomainRegistrationsQuery, TError, TData>(
    variables === undefined ? ['GetDomainRegistrations'] : ['GetDomainRegistrations', variables],
    fetchData<GetDomainRegistrationsQuery, GetDomainRegistrationsQueryVariables>(
      GetDomainRegistrationsDocument,
      variables
    ),
    options
  );
export const GetUnattachedDomainsDocument = `
    query GetUnattachedDomains {
  getUnattachedDomains
}
    `;
export const useGetUnattachedDomainsQuery = <TData = GetUnattachedDomainsQuery, TError = unknown>(
  variables?: GetUnattachedDomainsQueryVariables,
  options?: UseQueryOptions<GetUnattachedDomainsQuery, TError, TData>
) =>
  useQuery<GetUnattachedDomainsQuery, TError, TData>(
    variables === undefined ? ['GetUnattachedDomains'] : ['GetUnattachedDomains', variables],
    fetchData<GetUnattachedDomainsQuery, GetUnattachedDomainsQueryVariables>(
      GetUnattachedDomainsDocument,
      variables
    ),
    options
  );
export const AttachDomainDocument = `
    mutation AttachDomain($attachDomainInput: AttachDomainInput!) {
  attachDomain(attachDomainInput: $attachDomainInput) {
    success
  }
}
    `;
export const useAttachDomainMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    AttachDomainMutation,
    TError,
    AttachDomainMutationVariables,
    TContext
  >
) =>
  useMutation<AttachDomainMutation, TError, AttachDomainMutationVariables, TContext>(
    ['AttachDomain'],
    (variables?: AttachDomainMutationVariables) =>
      fetchData<AttachDomainMutation, AttachDomainMutationVariables>(
        AttachDomainDocument,
        variables
      )(),
    options
  );
export const DetachDomainDocument = `
    mutation DetachDomain($detachDomainInput: DetachDomainInput!) {
  detachDomain(detachDomainInput: $detachDomainInput) {
    success
  }
}
    `;
export const useDetachDomainMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DetachDomainMutation,
    TError,
    DetachDomainMutationVariables,
    TContext
  >
) =>
  useMutation<DetachDomainMutation, TError, DetachDomainMutationVariables, TContext>(
    ['DetachDomain'],
    (variables?: DetachDomainMutationVariables) =>
      fetchData<DetachDomainMutation, DetachDomainMutationVariables>(
        DetachDomainDocument,
        variables
      )(),
    options
  );
export const AddFreeCertificateToDomainDocument = `
    mutation AddFreeCertificateToDomain($projectId: String!) {
  addFreeCertificateToDomain(projectId: $projectId)
}
    `;
export const useAddFreeCertificateToDomainMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    AddFreeCertificateToDomainMutation,
    TError,
    AddFreeCertificateToDomainMutationVariables,
    TContext
  >
) =>
  useMutation<
    AddFreeCertificateToDomainMutation,
    TError,
    AddFreeCertificateToDomainMutationVariables,
    TContext
  >(
    ['AddFreeCertificateToDomain'],
    (variables?: AddFreeCertificateToDomainMutationVariables) =>
      fetchData<AddFreeCertificateToDomainMutation, AddFreeCertificateToDomainMutationVariables>(
        AddFreeCertificateToDomainDocument,
        variables
      )(),
    options
  );
export const CreateDonationDocument = `
    mutation CreateDonation($createDonationInput: CreateDonationInput!) {
  createDonation(createDonationInput: $createDonationInput) {
    redirectURL
  }
}
    `;
export const useCreateDonationMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateDonationMutation,
    TError,
    CreateDonationMutationVariables,
    TContext
  >
) =>
  useMutation<CreateDonationMutation, TError, CreateDonationMutationVariables, TContext>(
    ['CreateDonation'],
    (variables?: CreateDonationMutationVariables) =>
      fetchData<CreateDonationMutation, CreateDonationMutationVariables>(
        CreateDonationDocument,
        variables
      )(),
    options
  );
export const GetMyDonationsDocument = `
    query GetMyDonations {
  getMyDonations {
    id
    amount
    type
    status
    userId
    createdAt
  }
}
    `;
export const useGetMyDonationsQuery = <TData = GetMyDonationsQuery, TError = unknown>(
  variables?: GetMyDonationsQueryVariables,
  options?: UseQueryOptions<GetMyDonationsQuery, TError, TData>
) =>
  useQuery<GetMyDonationsQuery, TError, TData>(
    variables === undefined ? ['GetMyDonations'] : ['GetMyDonations', variables],
    fetchData<GetMyDonationsQuery, GetMyDonationsQueryVariables>(GetMyDonationsDocument, variables),
    options
  );
export const GetProjectMediaDocument = `
    query GetProjectMedia($projectId: String!) {
  getProjectMedia(projectId: $projectId) {
    id
    type
    title
    path
    projectId
    viewTypes
  }
}
    `;
export const useGetProjectMediaQuery = <TData = GetProjectMediaQuery, TError = unknown>(
  variables: GetProjectMediaQueryVariables,
  options?: UseQueryOptions<GetProjectMediaQuery, TError, TData>
) =>
  useQuery<GetProjectMediaQuery, TError, TData>(
    ['GetProjectMedia', variables],
    fetchData<GetProjectMediaQuery, GetProjectMediaQueryVariables>(
      GetProjectMediaDocument,
      variables
    ),
    options
  );
export const CreateProjectMediaDocument = `
    mutation CreateProjectMedia($createMediaInput: CreateMediaInput!) {
  createMedia(createMediaInput: $createMediaInput) {
    id
    type
    title
    path
    projectId
    viewTypes
  }
}
    `;
export const useCreateProjectMediaMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateProjectMediaMutation,
    TError,
    CreateProjectMediaMutationVariables,
    TContext
  >
) =>
  useMutation<CreateProjectMediaMutation, TError, CreateProjectMediaMutationVariables, TContext>(
    ['CreateProjectMedia'],
    (variables?: CreateProjectMediaMutationVariables) =>
      fetchData<CreateProjectMediaMutation, CreateProjectMediaMutationVariables>(
        CreateProjectMediaDocument,
        variables
      )(),
    options
  );
export const UpdateProjectMediaDocument = `
    mutation UpdateProjectMedia($updateMediaInput: UpdateMediaInput!) {
  updateMedia(updateMediaInput: $updateMediaInput) {
    id
    type
    title
    path
    projectId
    viewTypes
  }
}
    `;
export const useUpdateProjectMediaMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateProjectMediaMutation,
    TError,
    UpdateProjectMediaMutationVariables,
    TContext
  >
) =>
  useMutation<UpdateProjectMediaMutation, TError, UpdateProjectMediaMutationVariables, TContext>(
    ['UpdateProjectMedia'],
    (variables?: UpdateProjectMediaMutationVariables) =>
      fetchData<UpdateProjectMediaMutation, UpdateProjectMediaMutationVariables>(
        UpdateProjectMediaDocument,
        variables
      )(),
    options
  );
export const DeleteProjectMediaDocument = `
    mutation DeleteProjectMedia($deleteMediaInput: DeleteMediaInput!) {
  deleteMedia(deleteMediaInput: $deleteMediaInput) {
    id
    type
    title
    path
    projectId
    viewTypes
  }
}
    `;
export const useDeleteProjectMediaMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DeleteProjectMediaMutation,
    TError,
    DeleteProjectMediaMutationVariables,
    TContext
  >
) =>
  useMutation<DeleteProjectMediaMutation, TError, DeleteProjectMediaMutationVariables, TContext>(
    ['DeleteProjectMedia'],
    (variables?: DeleteProjectMediaMutationVariables) =>
      fetchData<DeleteProjectMediaMutation, DeleteProjectMediaMutationVariables>(
        DeleteProjectMediaDocument,
        variables
      )(),
    options
  );
export const GetProjectMenusDocument = `
    query GetProjectMenus($projectId: String!) {
  getProjectMenus(projectId: $projectId) {
    id
    label
    pageId
    parentId
    projectId
    link
    pageSlug
    section
    place
    children {
      id
      label
      pageId
      parentId
      projectId
      link
    }
  }
}
    `;
export const useGetProjectMenusQuery = <TData = GetProjectMenusQuery, TError = unknown>(
  variables: GetProjectMenusQueryVariables,
  options?: UseQueryOptions<GetProjectMenusQuery, TError, TData>
) =>
  useQuery<GetProjectMenusQuery, TError, TData>(
    ['GetProjectMenus', variables],
    fetchData<GetProjectMenusQuery, GetProjectMenusQueryVariables>(
      GetProjectMenusDocument,
      variables
    ),
    options
  );
export const CreateProjectMenuDocument = `
    mutation CreateProjectMenu($createMenuInput: CreateMenuInput!) {
  createMenu(createMenuInput: $createMenuInput) {
    id
    label
  }
}
    `;
export const useCreateProjectMenuMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateProjectMenuMutation,
    TError,
    CreateProjectMenuMutationVariables,
    TContext
  >
) =>
  useMutation<CreateProjectMenuMutation, TError, CreateProjectMenuMutationVariables, TContext>(
    ['CreateProjectMenu'],
    (variables?: CreateProjectMenuMutationVariables) =>
      fetchData<CreateProjectMenuMutation, CreateProjectMenuMutationVariables>(
        CreateProjectMenuDocument,
        variables
      )(),
    options
  );
export const UpdateProjectMenuDocument = `
    mutation UpdateProjectMenu($updateMenuInput: UpdateMenuInput!) {
  updateMenu(updateMenuInput: $updateMenuInput) {
    id
    label
  }
}
    `;
export const useUpdateProjectMenuMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateProjectMenuMutation,
    TError,
    UpdateProjectMenuMutationVariables,
    TContext
  >
) =>
  useMutation<UpdateProjectMenuMutation, TError, UpdateProjectMenuMutationVariables, TContext>(
    ['UpdateProjectMenu'],
    (variables?: UpdateProjectMenuMutationVariables) =>
      fetchData<UpdateProjectMenuMutation, UpdateProjectMenuMutationVariables>(
        UpdateProjectMenuDocument,
        variables
      )(),
    options
  );
export const DeleteProjectMenuDocument = `
    mutation DeleteProjectMenu($deleteMenuInput: DeleteMenuInput!) {
  deleteMenu(deleteMenuInput: $deleteMenuInput) {
    id
    label
  }
}
    `;
export const useDeleteProjectMenuMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DeleteProjectMenuMutation,
    TError,
    DeleteProjectMenuMutationVariables,
    TContext
  >
) =>
  useMutation<DeleteProjectMenuMutation, TError, DeleteProjectMenuMutationVariables, TContext>(
    ['DeleteProjectMenu'],
    (variables?: DeleteProjectMenuMutationVariables) =>
      fetchData<DeleteProjectMenuMutation, DeleteProjectMenuMutationVariables>(
        DeleteProjectMenuDocument,
        variables
      )(),
    options
  );
export const GetPageByIdDocument = `
    query GetPageById($pageId: Int!) {
  page(id: $pageId) {
    id
    projectId
    title
    description
    slug
    themeId
    components {
      id
      order
      data
      componentId
      component {
        name
        type
      }
    }
  }
}
    `;
export const useGetPageByIdQuery = <TData = GetPageByIdQuery, TError = unknown>(
  variables: GetPageByIdQueryVariables,
  options?: UseQueryOptions<GetPageByIdQuery, TError, TData>
) =>
  useQuery<GetPageByIdQuery, TError, TData>(
    ['GetPageById', variables],
    fetchData<GetPageByIdQuery, GetPageByIdQueryVariables>(GetPageByIdDocument, variables),
    options
  );
export const CreatePageDocument = `
    mutation CreatePage($createPageInput: CreatePageInput!) {
  createPage(input: $createPageInput) {
    id
    title
    description
    projectId
  }
}
    `;
export const useCreatePageMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<CreatePageMutation, TError, CreatePageMutationVariables, TContext>
) =>
  useMutation<CreatePageMutation, TError, CreatePageMutationVariables, TContext>(
    ['CreatePage'],
    (variables?: CreatePageMutationVariables) =>
      fetchData<CreatePageMutation, CreatePageMutationVariables>(CreatePageDocument, variables)(),
    options
  );
export const RegeneratePageDocument = `
    mutation RegeneratePage($regeneratePageInput: RegeneratePageInput!) {
  regeneratePage(input: $regeneratePageInput)
}
    `;
export const useRegeneratePageMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    RegeneratePageMutation,
    TError,
    RegeneratePageMutationVariables,
    TContext
  >
) =>
  useMutation<RegeneratePageMutation, TError, RegeneratePageMutationVariables, TContext>(
    ['RegeneratePage'],
    (variables?: RegeneratePageMutationVariables) =>
      fetchData<RegeneratePageMutation, RegeneratePageMutationVariables>(
        RegeneratePageDocument,
        variables
      )(),
    options
  );
export const DeletePageDocument = `
    mutation DeletePage($deletePageInput: DeletePageInput!) {
  deletePage(input: $deletePageInput)
}
    `;
export const useDeletePageMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<DeletePageMutation, TError, DeletePageMutationVariables, TContext>
) =>
  useMutation<DeletePageMutation, TError, DeletePageMutationVariables, TContext>(
    ['DeletePage'],
    (variables?: DeletePageMutationVariables) =>
      fetchData<DeletePageMutation, DeletePageMutationVariables>(DeletePageDocument, variables)(),
    options
  );
export const ChangePageComponentLayoutDocument = `
    mutation ChangePageComponentLayout($changePageComponentInput: ChangeComponentLayoutInput!) {
  changePageComponentLayout(input: $changePageComponentInput) {
    id
    componentId
    pageId
    order
    data
  }
}
    `;
export const useChangePageComponentLayoutMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    ChangePageComponentLayoutMutation,
    TError,
    ChangePageComponentLayoutMutationVariables,
    TContext
  >
) =>
  useMutation<
    ChangePageComponentLayoutMutation,
    TError,
    ChangePageComponentLayoutMutationVariables,
    TContext
  >(
    ['ChangePageComponentLayout'],
    (variables?: ChangePageComponentLayoutMutationVariables) =>
      fetchData<ChangePageComponentLayoutMutation, ChangePageComponentLayoutMutationVariables>(
        ChangePageComponentLayoutDocument,
        variables
      )(),
    options
  );
export const AddComponentDocument = `
    mutation AddComponent($addComponentInput: AddPageComponentInput!) {
  addPageComponent(input: $addComponentInput) {
    id
    pageId
    componentId
    order
    data
    component {
      id
      name
      type
    }
  }
}
    `;
export const useAddComponentMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    AddComponentMutation,
    TError,
    AddComponentMutationVariables,
    TContext
  >
) =>
  useMutation<AddComponentMutation, TError, AddComponentMutationVariables, TContext>(
    ['AddComponent'],
    (variables?: AddComponentMutationVariables) =>
      fetchData<AddComponentMutation, AddComponentMutationVariables>(
        AddComponentDocument,
        variables
      )(),
    options
  );
export const RemoveComponentDocument = `
    mutation RemoveComponent($removeComponentInput: RemovePageComponentInput!) {
  removePageComponent(input: $removeComponentInput) {
    id
    componentId
    pageId
    order
    data
  }
}
    `;
export const useRemoveComponentMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    RemoveComponentMutation,
    TError,
    RemoveComponentMutationVariables,
    TContext
  >
) =>
  useMutation<RemoveComponentMutation, TError, RemoveComponentMutationVariables, TContext>(
    ['RemoveComponent'],
    (variables?: RemoveComponentMutationVariables) =>
      fetchData<RemoveComponentMutation, RemoveComponentMutationVariables>(
        RemoveComponentDocument,
        variables
      )(),
    options
  );
export const SwapPageComponentsDocument = `
    mutation SwapPageComponents($swapInput: SwapPageComponentsInput!) {
  swapPageComponents(input: $swapInput)
}
    `;
export const useSwapPageComponentsMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    SwapPageComponentsMutation,
    TError,
    SwapPageComponentsMutationVariables,
    TContext
  >
) =>
  useMutation<SwapPageComponentsMutation, TError, SwapPageComponentsMutationVariables, TContext>(
    ['SwapPageComponents'],
    (variables?: SwapPageComponentsMutationVariables) =>
      fetchData<SwapPageComponentsMutation, SwapPageComponentsMutationVariables>(
        SwapPageComponentsDocument,
        variables
      )(),
    options
  );
export const UpdatePageComponentDocument = `
    mutation UpdatePageComponent($pageComponentInput: UpdatePageComponentInput!) {
  updatePageComponent(input: $pageComponentInput)
}
    `;
export const useUpdatePageComponentMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdatePageComponentMutation,
    TError,
    UpdatePageComponentMutationVariables,
    TContext
  >
) =>
  useMutation<UpdatePageComponentMutation, TError, UpdatePageComponentMutationVariables, TContext>(
    ['UpdatePageComponent'],
    (variables?: UpdatePageComponentMutationVariables) =>
      fetchData<UpdatePageComponentMutation, UpdatePageComponentMutationVariables>(
        UpdatePageComponentDocument,
        variables
      )(),
    options
  );
export const CreateSubscriptionDocument = `
    mutation CreateSubscription($createSubscriptionInput: CreateSubscriptionInput!) {
  createSubscription(createSubscriptionInput: $createSubscriptionInput) {
    redirectURL
  }
}
    `;
export const useCreateSubscriptionMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateSubscriptionMutation,
    TError,
    CreateSubscriptionMutationVariables,
    TContext
  >
) =>
  useMutation<CreateSubscriptionMutation, TError, CreateSubscriptionMutationVariables, TContext>(
    ['CreateSubscription'],
    (variables?: CreateSubscriptionMutationVariables) =>
      fetchData<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>(
        CreateSubscriptionDocument,
        variables
      )(),
    options
  );
export const CheckPaymentStatusDocument = `
    mutation CheckPaymentStatus($transactionId: String!) {
  checkPaymentStatus(transactionId: $transactionId)
}
    `;
export const useCheckPaymentStatusMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CheckPaymentStatusMutation,
    TError,
    CheckPaymentStatusMutationVariables,
    TContext
  >
) =>
  useMutation<CheckPaymentStatusMutation, TError, CheckPaymentStatusMutationVariables, TContext>(
    ['CheckPaymentStatus'],
    (variables?: CheckPaymentStatusMutationVariables) =>
      fetchData<CheckPaymentStatusMutation, CheckPaymentStatusMutationVariables>(
        CheckPaymentStatusDocument,
        variables
      )(),
    options
  );
export const GetPlansDocument = `
    query GetPlans {
  plans {
    id
    name
    description
    periodType
    period
    price
    discount
    features {
      id
      featureId
      limitation
      description
      planId
    }
    extraFeatures
    createdAt
    updatedAt
  }
}
    `;
export const useGetPlansQuery = <TData = GetPlansQuery, TError = unknown>(
  variables?: GetPlansQueryVariables,
  options?: UseQueryOptions<GetPlansQuery, TError, TData>
) =>
  useQuery<GetPlansQuery, TError, TData>(
    variables === undefined ? ['GetPlans'] : ['GetPlans', variables],
    fetchData<GetPlansQuery, GetPlansQueryVariables>(GetPlansDocument, variables),
    options
  );
export const GetPlanDocument = `
    query GetPlan($planId: Int!) {
  plan(id: $planId) {
    id
    name
    description
    periodType
    period
    price
    discount
    features {
      id
      featureId
      limitation
      description
      planId
      feature {
        key
      }
    }
    extraFeatures
    createdAt
    updatedAt
  }
}
    `;
export const useGetPlanQuery = <TData = GetPlanQuery, TError = unknown>(
  variables: GetPlanQueryVariables,
  options?: UseQueryOptions<GetPlanQuery, TError, TData>
) =>
  useQuery<GetPlanQuery, TError, TData>(
    ['GetPlan', variables],
    fetchData<GetPlanQuery, GetPlanQueryVariables>(GetPlanDocument, variables),
    options
  );
export const UpdateAdamWidgetConfigDocument = `
    mutation UpdateAdamWidgetConfig($updateAdamWidgetConfigInput: UpdateAdamWidgetConfigInput!) {
  updateAdamWidgetConfig(
    updateAdamWidgetConfigInput: $updateAdamWidgetConfigInput
  )
}
    `;
export const useUpdateAdamWidgetConfigMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateAdamWidgetConfigMutation,
    TError,
    UpdateAdamWidgetConfigMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateAdamWidgetConfigMutation,
    TError,
    UpdateAdamWidgetConfigMutationVariables,
    TContext
  >(
    ['UpdateAdamWidgetConfig'],
    (variables?: UpdateAdamWidgetConfigMutationVariables) =>
      fetchData<UpdateAdamWidgetConfigMutation, UpdateAdamWidgetConfigMutationVariables>(
        UpdateAdamWidgetConfigDocument,
        variables
      )(),
    options
  );
export const CreatePostDocument = `
    mutation CreatePost($createPostInput: CreatePostInput!) {
  createPost(createPostInput: $createPostInput) {
    id
    title
    slug
    description
    body
    imagePath
    projectId
  }
}
    `;
export const useCreatePostMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<CreatePostMutation, TError, CreatePostMutationVariables, TContext>
) =>
  useMutation<CreatePostMutation, TError, CreatePostMutationVariables, TContext>(
    ['CreatePost'],
    (variables?: CreatePostMutationVariables) =>
      fetchData<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, variables)(),
    options
  );
export const UpdatePostDocument = `
    mutation UpdatePost($updatePostInput: UpdatePostInput!) {
  updatePost(updatePostInput: $updatePostInput) {
    id
    title
    slug
    description
    body
    imagePath
    projectId
  }
}
    `;
export const useUpdatePostMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<UpdatePostMutation, TError, UpdatePostMutationVariables, TContext>
) =>
  useMutation<UpdatePostMutation, TError, UpdatePostMutationVariables, TContext>(
    ['UpdatePost'],
    (variables?: UpdatePostMutationVariables) =>
      fetchData<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, variables)(),
    options
  );
export const DeletePostDocument = `
    mutation DeletePost($postId: Int!) {
  deletePost(id: $postId) {
    id
    title
    slug
    description
    body
    imagePath
    projectId
  }
}
    `;
export const useDeletePostMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<DeletePostMutation, TError, DeletePostMutationVariables, TContext>
) =>
  useMutation<DeletePostMutation, TError, DeletePostMutationVariables, TContext>(
    ['DeletePost'],
    (variables?: DeletePostMutationVariables) =>
      fetchData<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, variables)(),
    options
  );
export const GeneratePostDocument = `
    mutation GeneratePost($projectId: String!) {
  generatePost(projectId: $projectId) {
    id
    title
    slug
    description
    body
    imagePath
    projectId
  }
}
    `;
export const useGeneratePostMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    GeneratePostMutation,
    TError,
    GeneratePostMutationVariables,
    TContext
  >
) =>
  useMutation<GeneratePostMutation, TError, GeneratePostMutationVariables, TContext>(
    ['GeneratePost'],
    (variables?: GeneratePostMutationVariables) =>
      fetchData<GeneratePostMutation, GeneratePostMutationVariables>(
        GeneratePostDocument,
        variables
      )(),
    options
  );
export const GetProjectByIdDocument = `
    query GetProjectById($projectId: String!) {
  project(id: $projectId) {
    id
    name
    purpose
    description
    keywords
    similarWebsites
    websiteLocation
    mainLanguage
    intellectualPropertyType
    intellectualPropertyInfo
    audience {
      id
      age
      gender
      organizations
      countries
      projectId
    }
    settings {
      id
      logoType
      logoValue
      fontFamily
      projectId
      palette {
        primary
        secondary
        neutral
        titles
        subTitles
      }
    }
    pages {
      id
      title
      slug
      description
      projectId
      components {
        id
        data
        order
        pageId
        componentId
        component {
          name
          type
        }
      }
    }
    posts {
      id
      title
      description
      slug
      body
      imagePath
      imageAlt
      createdAt
    }
    contactMessages {
      id
      name
      email
      description
      createdAt
    }
    cdnPullZoneId
    publicURL
    media {
      id
      title
      path
      type
      viewTypes
    }
    plugins {
      id
      key
      value
      variation
      projectId
    }
    domainRegistration {
      domainRegistrationId
      projectId
      domainRegistration {
        id
        years
        amount
        isFree
        status
        domainName
        userId
        createdAt
      }
    }
  }
}
    `;
export const useGetProjectByIdQuery = <TData = GetProjectByIdQuery, TError = unknown>(
  variables: GetProjectByIdQueryVariables,
  options?: UseQueryOptions<GetProjectByIdQuery, TError, TData>
) =>
  useQuery<GetProjectByIdQuery, TError, TData>(
    ['GetProjectById', variables],
    fetchData<GetProjectByIdQuery, GetProjectByIdQueryVariables>(GetProjectByIdDocument, variables),
    options
  );
export const CreateProjectDocument = `
    mutation CreateProject($createProjectInput: CreateProjectInput!) {
  createProject(createProjectInput: $createProjectInput) {
    id
    name
    purpose
    description
    keywords
    similarWebsites
    websiteLocation
    mainLanguage
    intellectualPropertyType
    intellectualPropertyInfo
  }
}
    `;
export const useCreateProjectMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateProjectMutation,
    TError,
    CreateProjectMutationVariables,
    TContext
  >
) =>
  useMutation<CreateProjectMutation, TError, CreateProjectMutationVariables, TContext>(
    ['CreateProject'],
    (variables?: CreateProjectMutationVariables) =>
      fetchData<CreateProjectMutation, CreateProjectMutationVariables>(
        CreateProjectDocument,
        variables
      )(),
    options
  );
export const GetProjectTargetTypesDocument = `
    query GetProjectTargetTypes {
  projectTargetTypes {
    title
    description
    imageUrl
  }
}
    `;
export const useGetProjectTargetTypesQuery = <TData = GetProjectTargetTypesQuery, TError = unknown>(
  variables?: GetProjectTargetTypesQueryVariables,
  options?: UseQueryOptions<GetProjectTargetTypesQuery, TError, TData>
) =>
  useQuery<GetProjectTargetTypesQuery, TError, TData>(
    variables === undefined ? ['GetProjectTargetTypes'] : ['GetProjectTargetTypes', variables],
    fetchData<GetProjectTargetTypesQuery, GetProjectTargetTypesQueryVariables>(
      GetProjectTargetTypesDocument,
      variables
    ),
    options
  );
export const UpdateProjectSettingsDocument = `
    mutation UpdateProjectSettings($updateProjectSettingsInput: UpdateProjectSettingsInput!) {
  updateProjectSettings(updateProjectSettingsInput: $updateProjectSettingsInput)
}
    `;
export const useUpdateProjectSettingsMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateProjectSettingsMutation,
    TError,
    UpdateProjectSettingsMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateProjectSettingsMutation,
    TError,
    UpdateProjectSettingsMutationVariables,
    TContext
  >(
    ['UpdateProjectSettings'],
    (variables?: UpdateProjectSettingsMutationVariables) =>
      fetchData<UpdateProjectSettingsMutation, UpdateProjectSettingsMutationVariables>(
        UpdateProjectSettingsDocument,
        variables
      )(),
    options
  );
export const GetMyProjectsDocument = `
    query GetMyProjects {
  projects {
    id
    name
    settings {
      logoType
      logoValue
    }
    cdnPullZoneId
    publicURL
    createdAt
  }
}
    `;
export const useGetMyProjectsQuery = <TData = GetMyProjectsQuery, TError = unknown>(
  variables?: GetMyProjectsQueryVariables,
  options?: UseQueryOptions<GetMyProjectsQuery, TError, TData>
) =>
  useQuery<GetMyProjectsQuery, TError, TData>(
    variables === undefined ? ['GetMyProjects'] : ['GetMyProjects', variables],
    fetchData<GetMyProjectsQuery, GetMyProjectsQueryVariables>(GetMyProjectsDocument, variables),
    options
  );
export const UpdateProjectDocument = `
    mutation UpdateProject($updateProjectInput: UpdateProjectInput!) {
  updateProject(updateProjectInput: $updateProjectInput)
}
    `;
export const useUpdateProjectMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateProjectMutation,
    TError,
    UpdateProjectMutationVariables,
    TContext
  >
) =>
  useMutation<UpdateProjectMutation, TError, UpdateProjectMutationVariables, TContext>(
    ['UpdateProject'],
    (variables?: UpdateProjectMutationVariables) =>
      fetchData<UpdateProjectMutation, UpdateProjectMutationVariables>(
        UpdateProjectDocument,
        variables
      )(),
    options
  );
export const ExportProjectDocument = `
    mutation ExportProject($projectId: String!) {
  exportProject(id: $projectId)
}
    `;
export const useExportProjectMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    ExportProjectMutation,
    TError,
    ExportProjectMutationVariables,
    TContext
  >
) =>
  useMutation<ExportProjectMutation, TError, ExportProjectMutationVariables, TContext>(
    ['ExportProject'],
    (variables?: ExportProjectMutationVariables) =>
      fetchData<ExportProjectMutation, ExportProjectMutationVariables>(
        ExportProjectDocument,
        variables
      )(),
    options
  );
export const PublishProjectDocument = `
    mutation PublishProject($projectId: String!) {
  publishProject(id: $projectId)
}
    `;
export const usePublishProjectMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    PublishProjectMutation,
    TError,
    PublishProjectMutationVariables,
    TContext
  >
) =>
  useMutation<PublishProjectMutation, TError, PublishProjectMutationVariables, TContext>(
    ['PublishProject'],
    (variables?: PublishProjectMutationVariables) =>
      fetchData<PublishProjectMutation, PublishProjectMutationVariables>(
        PublishProjectDocument,
        variables
      )(),
    options
  );
export const DeleteProjectDocument = `
    mutation DeleteProject($projectId: String!) {
  deleteProject(id: $projectId)
}
    `;
export const useDeleteProjectMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DeleteProjectMutation,
    TError,
    DeleteProjectMutationVariables,
    TContext
  >
) =>
  useMutation<DeleteProjectMutation, TError, DeleteProjectMutationVariables, TContext>(
    ['DeleteProject'],
    (variables?: DeleteProjectMutationVariables) =>
      fetchData<DeleteProjectMutation, DeleteProjectMutationVariables>(
        DeleteProjectDocument,
        variables
      )(),
    options
  );
export const CreateAnalyticsPropertyDocument = `
    mutation CreateAnalyticsProperty($projectId: String!) {
  createAnalyticsProperty(id: $projectId)
}
    `;
export const useCreateAnalyticsPropertyMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateAnalyticsPropertyMutation,
    TError,
    CreateAnalyticsPropertyMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateAnalyticsPropertyMutation,
    TError,
    CreateAnalyticsPropertyMutationVariables,
    TContext
  >(
    ['CreateAnalyticsProperty'],
    (variables?: CreateAnalyticsPropertyMutationVariables) =>
      fetchData<CreateAnalyticsPropertyMutation, CreateAnalyticsPropertyMutationVariables>(
        CreateAnalyticsPropertyDocument,
        variables
      )(),
    options
  );
export const GetProjectAnalyticsPropertyDocument = `
    query GetProjectAnalyticsProperty($projectId: String!) {
  getProjectAnalyticsProperty(projectId: $projectId) {
    id
    displayName
    propertyName
    dataStreamName
    measurementId
    defaultUri
    parentAccountName
  }
}
    `;
export const useGetProjectAnalyticsPropertyQuery = <
  TData = GetProjectAnalyticsPropertyQuery,
  TError = unknown
>(
  variables: GetProjectAnalyticsPropertyQueryVariables,
  options?: UseQueryOptions<GetProjectAnalyticsPropertyQuery, TError, TData>
) =>
  useQuery<GetProjectAnalyticsPropertyQuery, TError, TData>(
    ['GetProjectAnalyticsProperty', variables],
    fetchData<GetProjectAnalyticsPropertyQuery, GetProjectAnalyticsPropertyQueryVariables>(
      GetProjectAnalyticsPropertyDocument,
      variables
    ),
    options
  );
export const GetProjectGenerationDocument = `
    query GetProjectGeneration($projectId: String!) {
  projectGeneration(projectId: $projectId) {
    id
    projectId
    status
    logs
    error
    createdAt
  }
}
    `;
export const useGetProjectGenerationQuery = <TData = GetProjectGenerationQuery, TError = unknown>(
  variables: GetProjectGenerationQueryVariables,
  options?: UseQueryOptions<GetProjectGenerationQuery, TError, TData>
) =>
  useQuery<GetProjectGenerationQuery, TError, TData>(
    ['GetProjectGeneration', variables],
    fetchData<GetProjectGenerationQuery, GetProjectGenerationQueryVariables>(
      GetProjectGenerationDocument,
      variables
    ),
    options
  );
export const GetThemesDocument = `
    query GetThemes {
  themes {
    id
    name
    thumbnail
  }
}
    `;
export const useGetThemesQuery = <TData = GetThemesQuery, TError = unknown>(
  variables?: GetThemesQueryVariables,
  options?: UseQueryOptions<GetThemesQuery, TError, TData>
) =>
  useQuery<GetThemesQuery, TError, TData>(
    variables === undefined ? ['GetThemes'] : ['GetThemes', variables],
    fetchData<GetThemesQuery, GetThemesQueryVariables>(GetThemesDocument, variables),
    options
  );
export const UpdateProfileDocument = `
    mutation UpdateProfile($input: UpdateProfileInput!) {
  updateProfile(updateProfileInput: $input) {
    id
    email
    gender
    name
    imagePath
    phoneNumber
  }
}
    `;
export const useUpdateProfileMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateProfileMutation,
    TError,
    UpdateProfileMutationVariables,
    TContext
  >
) =>
  useMutation<UpdateProfileMutation, TError, UpdateProfileMutationVariables, TContext>(
    ['UpdateProfile'],
    (variables?: UpdateProfileMutationVariables) =>
      fetchData<UpdateProfileMutation, UpdateProfileMutationVariables>(
        UpdateProfileDocument,
        variables
      )(),
    options
  );
export const UpdatePasswordDocument = `
    mutation UpdatePassword($input: UpdatePasswordInput!) {
  updatePassword(updatePasswordInput: $input) {
    success
  }
}
    `;
export const useUpdatePasswordMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdatePasswordMutation,
    TError,
    UpdatePasswordMutationVariables,
    TContext
  >
) =>
  useMutation<UpdatePasswordMutation, TError, UpdatePasswordMutationVariables, TContext>(
    ['UpdatePassword'],
    (variables?: UpdatePasswordMutationVariables) =>
      fetchData<UpdatePasswordMutation, UpdatePasswordMutationVariables>(
        UpdatePasswordDocument,
        variables
      )(),
    options
  );
export const UpdatePreferencesDocument = `
    mutation UpdatePreferences($input: UpdatePreferencesInput!) {
  updatePreferences(updatePreferencesInput: $input) {
    success
  }
}
    `;
export const useUpdatePreferencesMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdatePreferencesMutation,
    TError,
    UpdatePreferencesMutationVariables,
    TContext
  >
) =>
  useMutation<UpdatePreferencesMutation, TError, UpdatePreferencesMutationVariables, TContext>(
    ['UpdatePreferences'],
    (variables?: UpdatePreferencesMutationVariables) =>
      fetchData<UpdatePreferencesMutation, UpdatePreferencesMutationVariables>(
        UpdatePreferencesDocument,
        variables
      )(),
    options
  );
export const GetUserUsageDocument = `
    query GetUserUsage {
  getUserUsage {
    projectsCount
    hasOneProjectFreeTrial
  }
}
    `;
export const useGetUserUsageQuery = <TData = GetUserUsageQuery, TError = unknown>(
  variables?: GetUserUsageQueryVariables,
  options?: UseQueryOptions<GetUserUsageQuery, TError, TData>
) =>
  useQuery<GetUserUsageQuery, TError, TData>(
    variables === undefined ? ['GetUserUsage'] : ['GetUserUsage', variables],
    fetchData<GetUserUsageQuery, GetUserUsageQueryVariables>(GetUserUsageDocument, variables),
    options
  );

export const GetPaletteDocument = `
query GetPalettes {
  palettes {
    id
    neutral
    primary
    secondary
    subTitles
    titles
  }
} `;

export const useGetPaletteQuery = <TData = GetPaletteQuery, TError = unknown>(
  variables?: GetPaletteQueryVariables,
  options?: UseQueryOptions<GetPaletteQuery, TError, TData>
) =>
  useQuery<GetPaletteQuery, TError, TData>(
    variables === undefined ? ['GetPalettes'] : ['GetPalettes', variables],
    fetchData<GetPaletteQuery, GetPaletteQueryVariables>(GetPaletteDocument, variables),
    options
  );

export const CreatePaletteDocument = `
mutation CreatePalette($input: CreatePaletteInput!) {
  createPalette(input: $input) {
    id
    neutral
    primary
    secondary
    subTitles
    titles
  }
}
 `;

export const useCreatePaletteMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreatePaletteMutation,
    TError,
    CreatePaletteMutationVariables,
    TContext
  >
) =>
  useMutation<CreatePaletteMutation, TError, CreatePaletteMutationVariables, TContext>(
    ['createPalette'],
    (variables?: CreatePaletteMutationVariables) =>
      fetchData<CreatePaletteMutation, CreatePaletteMutationVariables>(
        CreatePaletteDocument,
        variables
      )(),
    options
  );
