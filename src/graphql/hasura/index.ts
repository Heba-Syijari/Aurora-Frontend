import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import { fetchData } from 'src/lib/react-query/hasura-fetcher';

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
  ComponentType: { input: any; output: any };
  ContentTypeVariation: { input: any; output: any };
  DomainRegistrationStatus: { input: any; output: any };
  DonationStatus: { input: any; output: any };
  Gender: { input: any; output: any };
  IntellectualPropertyType: { input: any; output: any };
  MediaVariation: { input: any; output: any };
  NotificationTemplatePrivacy: { input: any; output: any };
  PaymentStatus: { input: any; output: any };
  PaymentType: { input: any; output: any };
  PlanPeriod: { input: any; output: any };
  PresentationVolume: { input: any; output: any };
  SubscriptionStatus: { input: any; output: any };
  TicketStatus: { input: any; output: any };
  VisualTypeVariation: { input: any; output: any };
  float8: { input: any; output: any };
  jsonb: { input: any; output: any };
  timestamp: { input: any; output: any };
  timestamptz: { input: any; output: any };
  uuid: { input: any; output: any };
};

/** columns and relationships of "Admin" */
export type Admin = {
  __typename?: 'Admin';
  /** An object relationship */
  AdminRole: AdminRole;
  /** An array relationship */
  ContactRequests: Array<ContactRequest>;
  /** An aggregate relationship */
  ContactRequests_aggregate: ContactRequest_Aggregate;
  /** An array relationship */
  Notifications: Array<Notification>;
  /** An aggregate relationship */
  Notifications_aggregate: Notification_Aggregate;
  createdAt: Scalars['timestamp']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  roleId: Scalars['Int']['output'];
  verified: Scalars['Boolean']['output'];
};

/** columns and relationships of "Admin" */
export type AdminContactRequestsArgs = {
  distinct_on?: InputMaybe<Array<ContactRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContactRequest_Order_By>>;
  where?: InputMaybe<ContactRequest_Bool_Exp>;
};

/** columns and relationships of "Admin" */
export type AdminContactRequests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContactRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContactRequest_Order_By>>;
  where?: InputMaybe<ContactRequest_Bool_Exp>;
};

/** columns and relationships of "Admin" */
export type AdminNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** columns and relationships of "Admin" */
export type AdminNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** columns and relationships of "AdminPermission" */
export type AdminPermission = {
  __typename?: 'AdminPermission';
  /** An array relationship */
  AdminPermissionsOnRoles: Array<AdminPermissionsOnRoles>;
  /** An aggregate relationship */
  AdminPermissionsOnRoles_aggregate: AdminPermissionsOnRoles_Aggregate;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** columns and relationships of "AdminPermission" */
export type AdminPermissionAdminPermissionsOnRolesArgs = {
  distinct_on?: InputMaybe<Array<AdminPermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminPermissionsOnRoles_Order_By>>;
  where?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
};

/** columns and relationships of "AdminPermission" */
export type AdminPermissionAdminPermissionsOnRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AdminPermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminPermissionsOnRoles_Order_By>>;
  where?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
};

/** aggregated selection of "AdminPermission" */
export type AdminPermission_Aggregate = {
  __typename?: 'AdminPermission_aggregate';
  aggregate?: Maybe<AdminPermission_Aggregate_Fields>;
  nodes: Array<AdminPermission>;
};

/** aggregate fields of "AdminPermission" */
export type AdminPermission_Aggregate_Fields = {
  __typename?: 'AdminPermission_aggregate_fields';
  avg?: Maybe<AdminPermission_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AdminPermission_Max_Fields>;
  min?: Maybe<AdminPermission_Min_Fields>;
  stddev?: Maybe<AdminPermission_Stddev_Fields>;
  stddev_pop?: Maybe<AdminPermission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AdminPermission_Stddev_Samp_Fields>;
  sum?: Maybe<AdminPermission_Sum_Fields>;
  var_pop?: Maybe<AdminPermission_Var_Pop_Fields>;
  var_samp?: Maybe<AdminPermission_Var_Samp_Fields>;
  variance?: Maybe<AdminPermission_Variance_Fields>;
};

/** aggregate fields of "AdminPermission" */
export type AdminPermission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AdminPermission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type AdminPermission_Avg_Fields = {
  __typename?: 'AdminPermission_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "AdminPermission". All fields are combined with a logical 'AND'. */
export type AdminPermission_Bool_Exp = {
  AdminPermissionsOnRoles?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
  AdminPermissionsOnRoles_aggregate?: InputMaybe<AdminPermissionsOnRoles_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<AdminPermission_Bool_Exp>>;
  _not?: InputMaybe<AdminPermission_Bool_Exp>;
  _or?: InputMaybe<Array<AdminPermission_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "AdminPermission" */
export enum AdminPermission_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPermissionPkey = 'AdminPermission_pkey',
}

/** input type for incrementing numeric columns in table "AdminPermission" */
export type AdminPermission_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "AdminPermission" */
export type AdminPermission_Insert_Input = {
  AdminPermissionsOnRoles?: InputMaybe<AdminPermissionsOnRoles_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type AdminPermission_Max_Fields = {
  __typename?: 'AdminPermission_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AdminPermission_Min_Fields = {
  __typename?: 'AdminPermission_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "AdminPermission" */
export type AdminPermission_Mutation_Response = {
  __typename?: 'AdminPermission_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AdminPermission>;
};

/** input type for inserting object relation for remote table "AdminPermission" */
export type AdminPermission_Obj_Rel_Insert_Input = {
  data: AdminPermission_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AdminPermission_On_Conflict>;
};

/** on_conflict condition type for table "AdminPermission" */
export type AdminPermission_On_Conflict = {
  constraint: AdminPermission_Constraint;
  update_columns?: Array<AdminPermission_Update_Column>;
  where?: InputMaybe<AdminPermission_Bool_Exp>;
};

/** Ordering options when selecting data from "AdminPermission". */
export type AdminPermission_Order_By = {
  AdminPermissionsOnRoles_aggregate?: InputMaybe<AdminPermissionsOnRoles_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: AdminPermission */
export type AdminPermission_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "AdminPermission" */
export enum AdminPermission_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "AdminPermission" */
export type AdminPermission_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type AdminPermission_Stddev_Fields = {
  __typename?: 'AdminPermission_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type AdminPermission_Stddev_Pop_Fields = {
  __typename?: 'AdminPermission_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type AdminPermission_Stddev_Samp_Fields = {
  __typename?: 'AdminPermission_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "AdminPermission" */
export type AdminPermission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AdminPermission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AdminPermission_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type AdminPermission_Sum_Fields = {
  __typename?: 'AdminPermission_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "AdminPermission" */
export enum AdminPermission_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

export type AdminPermission_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AdminPermission_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AdminPermission_Set_Input>;
  /** filter the rows which have to be updated */
  where: AdminPermission_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AdminPermission_Var_Pop_Fields = {
  __typename?: 'AdminPermission_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type AdminPermission_Var_Samp_Fields = {
  __typename?: 'AdminPermission_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type AdminPermission_Variance_Fields = {
  __typename?: 'AdminPermission_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles = {
  __typename?: 'AdminPermissionsOnRoles';
  /** An object relationship */
  AdminPermission: AdminPermission;
  /** An object relationship */
  AdminRole: AdminRole;
  permissionId: Scalars['Int']['output'];
  roleId: Scalars['Int']['output'];
};

/** aggregated selection of "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Aggregate = {
  __typename?: 'AdminPermissionsOnRoles_aggregate';
  aggregate?: Maybe<AdminPermissionsOnRoles_Aggregate_Fields>;
  nodes: Array<AdminPermissionsOnRoles>;
};

export type AdminPermissionsOnRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AdminPermissionsOnRoles_Aggregate_Bool_Exp_Count>;
};

export type AdminPermissionsOnRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AdminPermissionsOnRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Aggregate_Fields = {
  __typename?: 'AdminPermissionsOnRoles_aggregate_fields';
  avg?: Maybe<AdminPermissionsOnRoles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AdminPermissionsOnRoles_Max_Fields>;
  min?: Maybe<AdminPermissionsOnRoles_Min_Fields>;
  stddev?: Maybe<AdminPermissionsOnRoles_Stddev_Fields>;
  stddev_pop?: Maybe<AdminPermissionsOnRoles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AdminPermissionsOnRoles_Stddev_Samp_Fields>;
  sum?: Maybe<AdminPermissionsOnRoles_Sum_Fields>;
  var_pop?: Maybe<AdminPermissionsOnRoles_Var_Pop_Fields>;
  var_samp?: Maybe<AdminPermissionsOnRoles_Var_Samp_Fields>;
  variance?: Maybe<AdminPermissionsOnRoles_Variance_Fields>;
};

/** aggregate fields of "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AdminPermissionsOnRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Aggregate_Order_By = {
  avg?: InputMaybe<AdminPermissionsOnRoles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AdminPermissionsOnRoles_Max_Order_By>;
  min?: InputMaybe<AdminPermissionsOnRoles_Min_Order_By>;
  stddev?: InputMaybe<AdminPermissionsOnRoles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AdminPermissionsOnRoles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AdminPermissionsOnRoles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AdminPermissionsOnRoles_Sum_Order_By>;
  var_pop?: InputMaybe<AdminPermissionsOnRoles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AdminPermissionsOnRoles_Var_Samp_Order_By>;
  variance?: InputMaybe<AdminPermissionsOnRoles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Arr_Rel_Insert_Input = {
  data: Array<AdminPermissionsOnRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AdminPermissionsOnRoles_On_Conflict>;
};

/** aggregate avg on columns */
export type AdminPermissionsOnRoles_Avg_Fields = {
  __typename?: 'AdminPermissionsOnRoles_avg_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Avg_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "AdminPermissionsOnRoles". All fields are combined with a logical 'AND'. */
export type AdminPermissionsOnRoles_Bool_Exp = {
  AdminPermission?: InputMaybe<AdminPermission_Bool_Exp>;
  AdminRole?: InputMaybe<AdminRole_Bool_Exp>;
  _and?: InputMaybe<Array<AdminPermissionsOnRoles_Bool_Exp>>;
  _not?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AdminPermissionsOnRoles_Bool_Exp>>;
  permissionId?: InputMaybe<Int_Comparison_Exp>;
  roleId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "AdminPermissionsOnRoles" */
export enum AdminPermissionsOnRoles_Constraint {
  /** unique or primary key constraint on columns "roleId", "permissionId" */
  AdminPermissionsOnRolesPkey = 'AdminPermissionsOnRoles_pkey',
}

/** input type for incrementing numeric columns in table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Inc_Input = {
  permissionId?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Insert_Input = {
  AdminPermission?: InputMaybe<AdminPermission_Obj_Rel_Insert_Input>;
  AdminRole?: InputMaybe<AdminRole_Obj_Rel_Insert_Input>;
  permissionId?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type AdminPermissionsOnRoles_Max_Fields = {
  __typename?: 'AdminPermissionsOnRoles_max_fields';
  permissionId?: Maybe<Scalars['Int']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Max_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AdminPermissionsOnRoles_Min_Fields = {
  __typename?: 'AdminPermissionsOnRoles_min_fields';
  permissionId?: Maybe<Scalars['Int']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Min_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Mutation_Response = {
  __typename?: 'AdminPermissionsOnRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AdminPermissionsOnRoles>;
};

/** on_conflict condition type for table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_On_Conflict = {
  constraint: AdminPermissionsOnRoles_Constraint;
  update_columns?: Array<AdminPermissionsOnRoles_Update_Column>;
  where?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "AdminPermissionsOnRoles". */
export type AdminPermissionsOnRoles_Order_By = {
  AdminPermission?: InputMaybe<AdminPermission_Order_By>;
  AdminRole?: InputMaybe<AdminRole_Order_By>;
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: AdminPermissionsOnRoles */
export type AdminPermissionsOnRoles_Pk_Columns_Input = {
  permissionId: Scalars['Int']['input'];
  roleId: Scalars['Int']['input'];
};

/** select columns of table "AdminPermissionsOnRoles" */
export enum AdminPermissionsOnRoles_Select_Column {
  /** column name */
  PermissionId = 'permissionId',
  /** column name */
  RoleId = 'roleId',
}

/** input type for updating data in table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Set_Input = {
  permissionId?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type AdminPermissionsOnRoles_Stddev_Fields = {
  __typename?: 'AdminPermissionsOnRoles_stddev_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Stddev_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AdminPermissionsOnRoles_Stddev_Pop_Fields = {
  __typename?: 'AdminPermissionsOnRoles_stddev_pop_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Stddev_Pop_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AdminPermissionsOnRoles_Stddev_Samp_Fields = {
  __typename?: 'AdminPermissionsOnRoles_stddev_samp_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Stddev_Samp_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AdminPermissionsOnRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AdminPermissionsOnRoles_Stream_Cursor_Value_Input = {
  permissionId?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type AdminPermissionsOnRoles_Sum_Fields = {
  __typename?: 'AdminPermissionsOnRoles_sum_fields';
  permissionId?: Maybe<Scalars['Int']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Sum_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** update columns of table "AdminPermissionsOnRoles" */
export enum AdminPermissionsOnRoles_Update_Column {
  /** column name */
  PermissionId = 'permissionId',
  /** column name */
  RoleId = 'roleId',
}

export type AdminPermissionsOnRoles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AdminPermissionsOnRoles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AdminPermissionsOnRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AdminPermissionsOnRoles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AdminPermissionsOnRoles_Var_Pop_Fields = {
  __typename?: 'AdminPermissionsOnRoles_var_pop_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Var_Pop_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AdminPermissionsOnRoles_Var_Samp_Fields = {
  __typename?: 'AdminPermissionsOnRoles_var_samp_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Var_Samp_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AdminPermissionsOnRoles_Variance_Fields = {
  __typename?: 'AdminPermissionsOnRoles_variance_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "AdminPermissionsOnRoles" */
export type AdminPermissionsOnRoles_Variance_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** columns and relationships of "AdminRole" */
export type AdminRole = {
  __typename?: 'AdminRole';
  /** An array relationship */
  AdminPermissionsOnRoles: Array<AdminPermissionsOnRoles>;
  /** An aggregate relationship */
  AdminPermissionsOnRoles_aggregate: AdminPermissionsOnRoles_Aggregate;
  /** An array relationship */
  Admins: Array<Admin>;
  /** An aggregate relationship */
  Admins_aggregate: Admin_Aggregate;
  displayName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isSuperAdmin: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

/** columns and relationships of "AdminRole" */
export type AdminRoleAdminPermissionsOnRolesArgs = {
  distinct_on?: InputMaybe<Array<AdminPermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminPermissionsOnRoles_Order_By>>;
  where?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
};

/** columns and relationships of "AdminRole" */
export type AdminRoleAdminPermissionsOnRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AdminPermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminPermissionsOnRoles_Order_By>>;
  where?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
};

/** columns and relationships of "AdminRole" */
export type AdminRoleAdminsArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** columns and relationships of "AdminRole" */
export type AdminRoleAdmins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** aggregated selection of "AdminRole" */
export type AdminRole_Aggregate = {
  __typename?: 'AdminRole_aggregate';
  aggregate?: Maybe<AdminRole_Aggregate_Fields>;
  nodes: Array<AdminRole>;
};

/** aggregate fields of "AdminRole" */
export type AdminRole_Aggregate_Fields = {
  __typename?: 'AdminRole_aggregate_fields';
  avg?: Maybe<AdminRole_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AdminRole_Max_Fields>;
  min?: Maybe<AdminRole_Min_Fields>;
  stddev?: Maybe<AdminRole_Stddev_Fields>;
  stddev_pop?: Maybe<AdminRole_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AdminRole_Stddev_Samp_Fields>;
  sum?: Maybe<AdminRole_Sum_Fields>;
  var_pop?: Maybe<AdminRole_Var_Pop_Fields>;
  var_samp?: Maybe<AdminRole_Var_Samp_Fields>;
  variance?: Maybe<AdminRole_Variance_Fields>;
};

/** aggregate fields of "AdminRole" */
export type AdminRole_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AdminRole_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type AdminRole_Avg_Fields = {
  __typename?: 'AdminRole_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "AdminRole". All fields are combined with a logical 'AND'. */
export type AdminRole_Bool_Exp = {
  AdminPermissionsOnRoles?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
  AdminPermissionsOnRoles_aggregate?: InputMaybe<AdminPermissionsOnRoles_Aggregate_Bool_Exp>;
  Admins?: InputMaybe<Admin_Bool_Exp>;
  Admins_aggregate?: InputMaybe<Admin_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<AdminRole_Bool_Exp>>;
  _not?: InputMaybe<AdminRole_Bool_Exp>;
  _or?: InputMaybe<Array<AdminRole_Bool_Exp>>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isSuperAdmin?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "AdminRole" */
export enum AdminRole_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminRolePkey = 'AdminRole_pkey',
}

/** input type for incrementing numeric columns in table "AdminRole" */
export type AdminRole_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "AdminRole" */
export type AdminRole_Insert_Input = {
  AdminPermissionsOnRoles?: InputMaybe<AdminPermissionsOnRoles_Arr_Rel_Insert_Input>;
  Admins?: InputMaybe<Admin_Arr_Rel_Insert_Input>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isSuperAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type AdminRole_Max_Fields = {
  __typename?: 'AdminRole_max_fields';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AdminRole_Min_Fields = {
  __typename?: 'AdminRole_min_fields';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "AdminRole" */
export type AdminRole_Mutation_Response = {
  __typename?: 'AdminRole_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AdminRole>;
};

/** input type for inserting object relation for remote table "AdminRole" */
export type AdminRole_Obj_Rel_Insert_Input = {
  data: AdminRole_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AdminRole_On_Conflict>;
};

/** on_conflict condition type for table "AdminRole" */
export type AdminRole_On_Conflict = {
  constraint: AdminRole_Constraint;
  update_columns?: Array<AdminRole_Update_Column>;
  where?: InputMaybe<AdminRole_Bool_Exp>;
};

/** Ordering options when selecting data from "AdminRole". */
export type AdminRole_Order_By = {
  AdminPermissionsOnRoles_aggregate?: InputMaybe<AdminPermissionsOnRoles_Aggregate_Order_By>;
  Admins_aggregate?: InputMaybe<Admin_Aggregate_Order_By>;
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isSuperAdmin?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: AdminRole */
export type AdminRole_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "AdminRole" */
export enum AdminRole_Select_Column {
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  IsSuperAdmin = 'isSuperAdmin',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "AdminRole" */
export type AdminRole_Set_Input = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isSuperAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type AdminRole_Stddev_Fields = {
  __typename?: 'AdminRole_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type AdminRole_Stddev_Pop_Fields = {
  __typename?: 'AdminRole_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type AdminRole_Stddev_Samp_Fields = {
  __typename?: 'AdminRole_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "AdminRole" */
export type AdminRole_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AdminRole_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AdminRole_Stream_Cursor_Value_Input = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isSuperAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type AdminRole_Sum_Fields = {
  __typename?: 'AdminRole_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "AdminRole" */
export enum AdminRole_Update_Column {
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  IsSuperAdmin = 'isSuperAdmin',
  /** column name */
  Name = 'name',
}

export type AdminRole_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AdminRole_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AdminRole_Set_Input>;
  /** filter the rows which have to be updated */
  where: AdminRole_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AdminRole_Var_Pop_Fields = {
  __typename?: 'AdminRole_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type AdminRole_Var_Samp_Fields = {
  __typename?: 'AdminRole_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type AdminRole_Variance_Fields = {
  __typename?: 'AdminRole_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregated selection of "Admin" */
export type Admin_Aggregate = {
  __typename?: 'Admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

export type Admin_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Admin_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Admin_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Admin_Aggregate_Bool_Exp_Count>;
};

export type Admin_Aggregate_Bool_Exp_Bool_And = {
  arguments: Admin_Select_Column_Admin_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Admin_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Admin_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Admin_Select_Column_Admin_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Admin_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Admin_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Admin_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Admin" */
export type Admin_Aggregate_Fields = {
  __typename?: 'Admin_aggregate_fields';
  avg?: Maybe<Admin_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
  stddev?: Maybe<Admin_Stddev_Fields>;
  stddev_pop?: Maybe<Admin_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Admin_Stddev_Samp_Fields>;
  sum?: Maybe<Admin_Sum_Fields>;
  var_pop?: Maybe<Admin_Var_Pop_Fields>;
  var_samp?: Maybe<Admin_Var_Samp_Fields>;
  variance?: Maybe<Admin_Variance_Fields>;
};

/** aggregate fields of "Admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Admin" */
export type Admin_Aggregate_Order_By = {
  avg?: InputMaybe<Admin_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Admin_Max_Order_By>;
  min?: InputMaybe<Admin_Min_Order_By>;
  stddev?: InputMaybe<Admin_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Admin_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Admin_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Admin_Sum_Order_By>;
  var_pop?: InputMaybe<Admin_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Admin_Var_Samp_Order_By>;
  variance?: InputMaybe<Admin_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Admin" */
export type Admin_Arr_Rel_Insert_Input = {
  data: Array<Admin_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};

/** aggregate avg on columns */
export type Admin_Avg_Fields = {
  __typename?: 'Admin_avg_fields';
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Admin" */
export type Admin_Avg_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  AdminRole?: InputMaybe<AdminRole_Bool_Exp>;
  ContactRequests?: InputMaybe<ContactRequest_Bool_Exp>;
  ContactRequests_aggregate?: InputMaybe<ContactRequest_Aggregate_Bool_Exp>;
  Notifications?: InputMaybe<Notification_Bool_Exp>;
  Notifications_aggregate?: InputMaybe<Notification_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  roleId?: InputMaybe<Int_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "Admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "email" */
  AdminEmailKey = 'Admin_email_key',
  /** unique or primary key constraint on columns "id" */
  AdminIdKey = 'Admin_id_key',
  /** unique or primary key constraint on columns "id" */
  AdminPkey = 'Admin_pkey',
}

/** input type for incrementing numeric columns in table "Admin" */
export type Admin_Inc_Input = {
  roleId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Admin" */
export type Admin_Insert_Input = {
  AdminRole?: InputMaybe<AdminRole_Obj_Rel_Insert_Input>;
  ContactRequests?: InputMaybe<ContactRequest_Arr_Rel_Insert_Input>;
  Notifications?: InputMaybe<Notification_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: 'Admin_max_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "Admin" */
export type Admin_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: 'Admin_min_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "Admin" */
export type Admin_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Admin" */
export type Admin_Mutation_Response = {
  __typename?: 'Admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** input type for inserting object relation for remote table "Admin" */
export type Admin_Obj_Rel_Insert_Input = {
  data: Admin_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};

/** on_conflict condition type for table "Admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "Admin". */
export type Admin_Order_By = {
  AdminRole?: InputMaybe<AdminRole_Order_By>;
  ContactRequests_aggregate?: InputMaybe<ContactRequest_Aggregate_Order_By>;
  Notifications_aggregate?: InputMaybe<Notification_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "Admin" */
export enum Admin_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  RoleId = 'roleId',
  /** column name */
  Verified = 'verified',
}

/** select "Admin_aggregate_bool_exp_bool_and_arguments_columns" columns of table "Admin" */
export enum Admin_Select_Column_Admin_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Verified = 'verified',
}

/** select "Admin_aggregate_bool_exp_bool_or_arguments_columns" columns of table "Admin" */
export enum Admin_Select_Column_Admin_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Verified = 'verified',
}

/** input type for updating data in table "Admin" */
export type Admin_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Admin_Stddev_Fields = {
  __typename?: 'Admin_stddev_fields';
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Admin" */
export type Admin_Stddev_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Admin_Stddev_Pop_Fields = {
  __typename?: 'Admin_stddev_pop_fields';
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Admin" */
export type Admin_Stddev_Pop_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Admin_Stddev_Samp_Fields = {
  __typename?: 'Admin_stddev_samp_fields';
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Admin" */
export type Admin_Stddev_Samp_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Admin" */
export type Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Admin_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Admin_Sum_Fields = {
  __typename?: 'Admin_sum_fields';
  roleId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Admin" */
export type Admin_Sum_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** update columns of table "Admin" */
export enum Admin_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  RoleId = 'roleId',
  /** column name */
  Verified = 'verified',
}

export type Admin_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Admin_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Admin_Set_Input>;
  /** filter the rows which have to be updated */
  where: Admin_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Admin_Var_Pop_Fields = {
  __typename?: 'Admin_var_pop_fields';
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Admin" */
export type Admin_Var_Pop_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Admin_Var_Samp_Fields = {
  __typename?: 'Admin_var_samp_fields';
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Admin" */
export type Admin_Var_Samp_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Admin_Variance_Fields = {
  __typename?: 'Admin_variance_fields';
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Admin" */
export type Admin_Variance_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Analytics" */
export type Analytics = {
  __typename?: 'Analytics';
  /** An object relationship */
  Project: Project;
  dataStreamName: Scalars['String']['output'];
  defaultUri: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  measurementId: Scalars['String']['output'];
  parentAccountName: Scalars['String']['output'];
  projectId: Scalars['uuid']['output'];
  propertyName: Scalars['String']['output'];
};

/** aggregated selection of "Analytics" */
export type Analytics_Aggregate = {
  __typename?: 'Analytics_aggregate';
  aggregate?: Maybe<Analytics_Aggregate_Fields>;
  nodes: Array<Analytics>;
};

export type Analytics_Aggregate_Bool_Exp = {
  count?: InputMaybe<Analytics_Aggregate_Bool_Exp_Count>;
};

export type Analytics_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Analytics_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Analytics_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Analytics" */
export type Analytics_Aggregate_Fields = {
  __typename?: 'Analytics_aggregate_fields';
  avg?: Maybe<Analytics_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Analytics_Max_Fields>;
  min?: Maybe<Analytics_Min_Fields>;
  stddev?: Maybe<Analytics_Stddev_Fields>;
  stddev_pop?: Maybe<Analytics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Analytics_Stddev_Samp_Fields>;
  sum?: Maybe<Analytics_Sum_Fields>;
  var_pop?: Maybe<Analytics_Var_Pop_Fields>;
  var_samp?: Maybe<Analytics_Var_Samp_Fields>;
  variance?: Maybe<Analytics_Variance_Fields>;
};

/** aggregate fields of "Analytics" */
export type Analytics_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Analytics_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Analytics" */
export type Analytics_Aggregate_Order_By = {
  avg?: InputMaybe<Analytics_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Analytics_Max_Order_By>;
  min?: InputMaybe<Analytics_Min_Order_By>;
  stddev?: InputMaybe<Analytics_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Analytics_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Analytics_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Analytics_Sum_Order_By>;
  var_pop?: InputMaybe<Analytics_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Analytics_Var_Samp_Order_By>;
  variance?: InputMaybe<Analytics_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Analytics" */
export type Analytics_Arr_Rel_Insert_Input = {
  data: Array<Analytics_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Analytics_On_Conflict>;
};

/** aggregate avg on columns */
export type Analytics_Avg_Fields = {
  __typename?: 'Analytics_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Analytics" */
export type Analytics_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Analytics". All fields are combined with a logical 'AND'. */
export type Analytics_Bool_Exp = {
  Project?: InputMaybe<Project_Bool_Exp>;
  _and?: InputMaybe<Array<Analytics_Bool_Exp>>;
  _not?: InputMaybe<Analytics_Bool_Exp>;
  _or?: InputMaybe<Array<Analytics_Bool_Exp>>;
  dataStreamName?: InputMaybe<String_Comparison_Exp>;
  defaultUri?: InputMaybe<String_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  measurementId?: InputMaybe<String_Comparison_Exp>;
  parentAccountName?: InputMaybe<String_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
  propertyName?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Analytics" */
export enum Analytics_Constraint {
  /** unique or primary key constraint on columns "id" */
  AnalyticsPkey = 'Analytics_pkey',
  /** unique or primary key constraint on columns "projectId" */
  AnalyticsProjectIdKey = 'Analytics_projectId_key',
}

/** input type for incrementing numeric columns in table "Analytics" */
export type Analytics_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Analytics" */
export type Analytics_Insert_Input = {
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  dataStreamName?: InputMaybe<Scalars['String']['input']>;
  defaultUri?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  measurementId?: InputMaybe<Scalars['String']['input']>;
  parentAccountName?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  propertyName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Analytics_Max_Fields = {
  __typename?: 'Analytics_max_fields';
  dataStreamName?: Maybe<Scalars['String']['output']>;
  defaultUri?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  measurementId?: Maybe<Scalars['String']['output']>;
  parentAccountName?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  propertyName?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "Analytics" */
export type Analytics_Max_Order_By = {
  dataStreamName?: InputMaybe<Order_By>;
  defaultUri?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  measurementId?: InputMaybe<Order_By>;
  parentAccountName?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  propertyName?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Analytics_Min_Fields = {
  __typename?: 'Analytics_min_fields';
  dataStreamName?: Maybe<Scalars['String']['output']>;
  defaultUri?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  measurementId?: Maybe<Scalars['String']['output']>;
  parentAccountName?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  propertyName?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "Analytics" */
export type Analytics_Min_Order_By = {
  dataStreamName?: InputMaybe<Order_By>;
  defaultUri?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  measurementId?: InputMaybe<Order_By>;
  parentAccountName?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  propertyName?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Analytics" */
export type Analytics_Mutation_Response = {
  __typename?: 'Analytics_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Analytics>;
};

/** on_conflict condition type for table "Analytics" */
export type Analytics_On_Conflict = {
  constraint: Analytics_Constraint;
  update_columns?: Array<Analytics_Update_Column>;
  where?: InputMaybe<Analytics_Bool_Exp>;
};

/** Ordering options when selecting data from "Analytics". */
export type Analytics_Order_By = {
  Project?: InputMaybe<Project_Order_By>;
  dataStreamName?: InputMaybe<Order_By>;
  defaultUri?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  measurementId?: InputMaybe<Order_By>;
  parentAccountName?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  propertyName?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Analytics */
export type Analytics_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Analytics" */
export enum Analytics_Select_Column {
  /** column name */
  DataStreamName = 'dataStreamName',
  /** column name */
  DefaultUri = 'defaultUri',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  MeasurementId = 'measurementId',
  /** column name */
  ParentAccountName = 'parentAccountName',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  PropertyName = 'propertyName',
}

/** input type for updating data in table "Analytics" */
export type Analytics_Set_Input = {
  dataStreamName?: InputMaybe<Scalars['String']['input']>;
  defaultUri?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  measurementId?: InputMaybe<Scalars['String']['input']>;
  parentAccountName?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  propertyName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Analytics_Stddev_Fields = {
  __typename?: 'Analytics_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Analytics" */
export type Analytics_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Analytics_Stddev_Pop_Fields = {
  __typename?: 'Analytics_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Analytics" */
export type Analytics_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Analytics_Stddev_Samp_Fields = {
  __typename?: 'Analytics_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Analytics" */
export type Analytics_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Analytics" */
export type Analytics_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Analytics_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Analytics_Stream_Cursor_Value_Input = {
  dataStreamName?: InputMaybe<Scalars['String']['input']>;
  defaultUri?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  measurementId?: InputMaybe<Scalars['String']['input']>;
  parentAccountName?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  propertyName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Analytics_Sum_Fields = {
  __typename?: 'Analytics_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Analytics" */
export type Analytics_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "Analytics" */
export enum Analytics_Update_Column {
  /** column name */
  DataStreamName = 'dataStreamName',
  /** column name */
  DefaultUri = 'defaultUri',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  MeasurementId = 'measurementId',
  /** column name */
  ParentAccountName = 'parentAccountName',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  PropertyName = 'propertyName',
}

export type Analytics_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Analytics_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Analytics_Set_Input>;
  /** filter the rows which have to be updated */
  where: Analytics_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Analytics_Var_Pop_Fields = {
  __typename?: 'Analytics_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Analytics" */
export type Analytics_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Analytics_Var_Samp_Fields = {
  __typename?: 'Analytics_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Analytics" */
export type Analytics_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Analytics_Variance_Fields = {
  __typename?: 'Analytics_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Analytics" */
export type Analytics_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "Blog" */
export type Blog = {
  __typename?: 'Blog';
  body: Scalars['String']['output'];
  createdAt: Scalars['timestamp']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

/** aggregated selection of "Blog" */
export type Blog_Aggregate = {
  __typename?: 'Blog_aggregate';
  aggregate?: Maybe<Blog_Aggregate_Fields>;
  nodes: Array<Blog>;
};

/** aggregate fields of "Blog" */
export type Blog_Aggregate_Fields = {
  __typename?: 'Blog_aggregate_fields';
  avg?: Maybe<Blog_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Blog_Max_Fields>;
  min?: Maybe<Blog_Min_Fields>;
  stddev?: Maybe<Blog_Stddev_Fields>;
  stddev_pop?: Maybe<Blog_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Blog_Stddev_Samp_Fields>;
  sum?: Maybe<Blog_Sum_Fields>;
  var_pop?: Maybe<Blog_Var_Pop_Fields>;
  var_samp?: Maybe<Blog_Var_Samp_Fields>;
  variance?: Maybe<Blog_Variance_Fields>;
};

/** aggregate fields of "Blog" */
export type Blog_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blog_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Blog_Avg_Fields = {
  __typename?: 'Blog_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Blog". All fields are combined with a logical 'AND'. */
export type Blog_Bool_Exp = {
  _and?: InputMaybe<Array<Blog_Bool_Exp>>;
  _not?: InputMaybe<Blog_Bool_Exp>;
  _or?: InputMaybe<Array<Blog_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  imagePath?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Blog" */
export enum Blog_Constraint {
  /** unique or primary key constraint on columns "id" */
  BlogPkey = 'Blog_pkey',
  /** unique or primary key constraint on columns "slug" */
  BlogSlugKey = 'Blog_slug_key',
}

/** input type for incrementing numeric columns in table "Blog" */
export type Blog_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Blog" */
export type Blog_Insert_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Blog_Max_Fields = {
  __typename?: 'Blog_max_fields';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Blog_Min_Fields = {
  __typename?: 'Blog_min_fields';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Blog" */
export type Blog_Mutation_Response = {
  __typename?: 'Blog_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Blog>;
};

/** on_conflict condition type for table "Blog" */
export type Blog_On_Conflict = {
  constraint: Blog_Constraint;
  update_columns?: Array<Blog_Update_Column>;
  where?: InputMaybe<Blog_Bool_Exp>;
};

/** Ordering options when selecting data from "Blog". */
export type Blog_Order_By = {
  body?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imagePath?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Blog */
export type Blog_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Blog" */
export enum Blog_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImagePath = 'imagePath',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
}

/** input type for updating data in table "Blog" */
export type Blog_Set_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Blog_Stddev_Fields = {
  __typename?: 'Blog_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Blog_Stddev_Pop_Fields = {
  __typename?: 'Blog_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Blog_Stddev_Samp_Fields = {
  __typename?: 'Blog_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Blog" */
export type Blog_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Blog_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Blog_Stream_Cursor_Value_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Blog_Sum_Fields = {
  __typename?: 'Blog_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Blog" */
export enum Blog_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImagePath = 'imagePath',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
}

export type Blog_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Blog_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Blog_Set_Input>;
  /** filter the rows which have to be updated */
  where: Blog_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Blog_Var_Pop_Fields = {
  __typename?: 'Blog_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Blog_Var_Samp_Fields = {
  __typename?: 'Blog_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Blog_Variance_Fields = {
  __typename?: 'Blog_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** columns and relationships of "Component" */
export type Component = {
  __typename?: 'Component';
  /** An array relationship */
  ComponentsOnPages: Array<ComponentsOnPages>;
  /** An aggregate relationship */
  ComponentsOnPages_aggregate: ComponentsOnPages_Aggregate;
  /** An array relationship */
  ComponentsOnThemes: Array<ComponentsOnThemes>;
  /** An aggregate relationship */
  ComponentsOnThemes_aggregate: ComponentsOnThemes_Aggregate;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['ComponentType']['output'];
};

/** columns and relationships of "Component" */
export type ComponentComponentsOnPagesArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnPages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnPages_Order_By>>;
  where?: InputMaybe<ComponentsOnPages_Bool_Exp>;
};

/** columns and relationships of "Component" */
export type ComponentComponentsOnPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnPages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnPages_Order_By>>;
  where?: InputMaybe<ComponentsOnPages_Bool_Exp>;
};

/** columns and relationships of "Component" */
export type ComponentComponentsOnThemesArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnThemes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnThemes_Order_By>>;
  where?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
};

/** columns and relationships of "Component" */
export type ComponentComponentsOnThemes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnThemes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnThemes_Order_By>>;
  where?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
};

/** Boolean expression to compare columns of type "ComponentType". All fields are combined with logical 'AND'. */
export type ComponentType_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['ComponentType']['input']>;
  _gt?: InputMaybe<Scalars['ComponentType']['input']>;
  _gte?: InputMaybe<Scalars['ComponentType']['input']>;
  _in?: InputMaybe<Array<Scalars['ComponentType']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['ComponentType']['input']>;
  _lte?: InputMaybe<Scalars['ComponentType']['input']>;
  _neq?: InputMaybe<Scalars['ComponentType']['input']>;
  _nin?: InputMaybe<Array<Scalars['ComponentType']['input']>>;
};

/** aggregated selection of "Component" */
export type Component_Aggregate = {
  __typename?: 'Component_aggregate';
  aggregate?: Maybe<Component_Aggregate_Fields>;
  nodes: Array<Component>;
};

/** aggregate fields of "Component" */
export type Component_Aggregate_Fields = {
  __typename?: 'Component_aggregate_fields';
  avg?: Maybe<Component_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Component_Max_Fields>;
  min?: Maybe<Component_Min_Fields>;
  stddev?: Maybe<Component_Stddev_Fields>;
  stddev_pop?: Maybe<Component_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Component_Stddev_Samp_Fields>;
  sum?: Maybe<Component_Sum_Fields>;
  var_pop?: Maybe<Component_Var_Pop_Fields>;
  var_samp?: Maybe<Component_Var_Samp_Fields>;
  variance?: Maybe<Component_Variance_Fields>;
};

/** aggregate fields of "Component" */
export type Component_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Component_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Component_Avg_Fields = {
  __typename?: 'Component_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Component". All fields are combined with a logical 'AND'. */
export type Component_Bool_Exp = {
  ComponentsOnPages?: InputMaybe<ComponentsOnPages_Bool_Exp>;
  ComponentsOnPages_aggregate?: InputMaybe<ComponentsOnPages_Aggregate_Bool_Exp>;
  ComponentsOnThemes?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
  ComponentsOnThemes_aggregate?: InputMaybe<ComponentsOnThemes_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Component_Bool_Exp>>;
  _not?: InputMaybe<Component_Bool_Exp>;
  _or?: InputMaybe<Array<Component_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<ComponentType_Comparison_Exp>;
};

/** unique or primary key constraints on table "Component" */
export enum Component_Constraint {
  /** unique or primary key constraint on columns "name" */
  ComponentNameKey = 'Component_name_key',
  /** unique or primary key constraint on columns "id" */
  ComponentPkey = 'Component_pkey',
}

/** input type for incrementing numeric columns in table "Component" */
export type Component_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Component" */
export type Component_Insert_Input = {
  ComponentsOnPages?: InputMaybe<ComponentsOnPages_Arr_Rel_Insert_Input>;
  ComponentsOnThemes?: InputMaybe<ComponentsOnThemes_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['ComponentType']['input']>;
};

/** aggregate max on columns */
export type Component_Max_Fields = {
  __typename?: 'Component_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['ComponentType']['output']>;
};

/** aggregate min on columns */
export type Component_Min_Fields = {
  __typename?: 'Component_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['ComponentType']['output']>;
};

/** response of any mutation on the table "Component" */
export type Component_Mutation_Response = {
  __typename?: 'Component_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Component>;
};

/** input type for inserting object relation for remote table "Component" */
export type Component_Obj_Rel_Insert_Input = {
  data: Component_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Component_On_Conflict>;
};

/** on_conflict condition type for table "Component" */
export type Component_On_Conflict = {
  constraint: Component_Constraint;
  update_columns?: Array<Component_Update_Column>;
  where?: InputMaybe<Component_Bool_Exp>;
};

/** Ordering options when selecting data from "Component". */
export type Component_Order_By = {
  ComponentsOnPages_aggregate?: InputMaybe<ComponentsOnPages_Aggregate_Order_By>;
  ComponentsOnThemes_aggregate?: InputMaybe<ComponentsOnThemes_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Component */
export type Component_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Component" */
export enum Component_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "Component" */
export type Component_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['ComponentType']['input']>;
};

/** aggregate stddev on columns */
export type Component_Stddev_Fields = {
  __typename?: 'Component_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Component_Stddev_Pop_Fields = {
  __typename?: 'Component_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Component_Stddev_Samp_Fields = {
  __typename?: 'Component_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Component" */
export type Component_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Component_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Component_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['ComponentType']['input']>;
};

/** aggregate sum on columns */
export type Component_Sum_Fields = {
  __typename?: 'Component_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Component" */
export enum Component_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
}

export type Component_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Component_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Component_Set_Input>;
  /** filter the rows which have to be updated */
  where: Component_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Component_Var_Pop_Fields = {
  __typename?: 'Component_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Component_Var_Samp_Fields = {
  __typename?: 'Component_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Component_Variance_Fields = {
  __typename?: 'Component_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "ComponentsOnPages" */
export type ComponentsOnPages = {
  __typename?: 'ComponentsOnPages';
  /** An object relationship */
  Component: Component;
  /** An object relationship */
  Page: Page;
  componentId: Scalars['Int']['output'];
  data: Scalars['jsonb']['output'];
  id: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  pageId: Scalars['Int']['output'];
};

/** columns and relationships of "ComponentsOnPages" */
export type ComponentsOnPagesDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "ComponentsOnPages" */
export type ComponentsOnPages_Aggregate = {
  __typename?: 'ComponentsOnPages_aggregate';
  aggregate?: Maybe<ComponentsOnPages_Aggregate_Fields>;
  nodes: Array<ComponentsOnPages>;
};

export type ComponentsOnPages_Aggregate_Bool_Exp = {
  count?: InputMaybe<ComponentsOnPages_Aggregate_Bool_Exp_Count>;
};

export type ComponentsOnPages_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ComponentsOnPages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ComponentsOnPages_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ComponentsOnPages" */
export type ComponentsOnPages_Aggregate_Fields = {
  __typename?: 'ComponentsOnPages_aggregate_fields';
  avg?: Maybe<ComponentsOnPages_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ComponentsOnPages_Max_Fields>;
  min?: Maybe<ComponentsOnPages_Min_Fields>;
  stddev?: Maybe<ComponentsOnPages_Stddev_Fields>;
  stddev_pop?: Maybe<ComponentsOnPages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ComponentsOnPages_Stddev_Samp_Fields>;
  sum?: Maybe<ComponentsOnPages_Sum_Fields>;
  var_pop?: Maybe<ComponentsOnPages_Var_Pop_Fields>;
  var_samp?: Maybe<ComponentsOnPages_Var_Samp_Fields>;
  variance?: Maybe<ComponentsOnPages_Variance_Fields>;
};

/** aggregate fields of "ComponentsOnPages" */
export type ComponentsOnPages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ComponentsOnPages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "ComponentsOnPages" */
export type ComponentsOnPages_Aggregate_Order_By = {
  avg?: InputMaybe<ComponentsOnPages_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ComponentsOnPages_Max_Order_By>;
  min?: InputMaybe<ComponentsOnPages_Min_Order_By>;
  stddev?: InputMaybe<ComponentsOnPages_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ComponentsOnPages_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ComponentsOnPages_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ComponentsOnPages_Sum_Order_By>;
  var_pop?: InputMaybe<ComponentsOnPages_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ComponentsOnPages_Var_Samp_Order_By>;
  variance?: InputMaybe<ComponentsOnPages_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ComponentsOnPages_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "ComponentsOnPages" */
export type ComponentsOnPages_Arr_Rel_Insert_Input = {
  data: Array<ComponentsOnPages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<ComponentsOnPages_On_Conflict>;
};

/** aggregate avg on columns */
export type ComponentsOnPages_Avg_Fields = {
  __typename?: 'ComponentsOnPages_avg_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "ComponentsOnPages" */
export type ComponentsOnPages_Avg_Order_By = {
  componentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ComponentsOnPages". All fields are combined with a logical 'AND'. */
export type ComponentsOnPages_Bool_Exp = {
  Component?: InputMaybe<Component_Bool_Exp>;
  Page?: InputMaybe<Page_Bool_Exp>;
  _and?: InputMaybe<Array<ComponentsOnPages_Bool_Exp>>;
  _not?: InputMaybe<ComponentsOnPages_Bool_Exp>;
  _or?: InputMaybe<Array<ComponentsOnPages_Bool_Exp>>;
  componentId?: InputMaybe<Int_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  pageId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "ComponentsOnPages" */
export enum ComponentsOnPages_Constraint {
  /** unique or primary key constraint on columns "id" */
  ComponentsOnPagesPkey = 'ComponentsOnPages_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ComponentsOnPages_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ComponentsOnPages_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ComponentsOnPages_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "ComponentsOnPages" */
export type ComponentsOnPages_Inc_Input = {
  componentId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  pageId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ComponentsOnPages" */
export type ComponentsOnPages_Insert_Input = {
  Component?: InputMaybe<Component_Obj_Rel_Insert_Input>;
  Page?: InputMaybe<Page_Obj_Rel_Insert_Input>;
  componentId?: InputMaybe<Scalars['Int']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  pageId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type ComponentsOnPages_Max_Fields = {
  __typename?: 'ComponentsOnPages_max_fields';
  componentId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  pageId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "ComponentsOnPages" */
export type ComponentsOnPages_Max_Order_By = {
  componentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ComponentsOnPages_Min_Fields = {
  __typename?: 'ComponentsOnPages_min_fields';
  componentId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  pageId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "ComponentsOnPages" */
export type ComponentsOnPages_Min_Order_By = {
  componentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ComponentsOnPages" */
export type ComponentsOnPages_Mutation_Response = {
  __typename?: 'ComponentsOnPages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ComponentsOnPages>;
};

/** on_conflict condition type for table "ComponentsOnPages" */
export type ComponentsOnPages_On_Conflict = {
  constraint: ComponentsOnPages_Constraint;
  update_columns?: Array<ComponentsOnPages_Update_Column>;
  where?: InputMaybe<ComponentsOnPages_Bool_Exp>;
};

/** Ordering options when selecting data from "ComponentsOnPages". */
export type ComponentsOnPages_Order_By = {
  Component?: InputMaybe<Component_Order_By>;
  Page?: InputMaybe<Page_Order_By>;
  componentId?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ComponentsOnPages */
export type ComponentsOnPages_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ComponentsOnPages_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "ComponentsOnPages" */
export enum ComponentsOnPages_Select_Column {
  /** column name */
  ComponentId = 'componentId',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  PageId = 'pageId',
}

/** input type for updating data in table "ComponentsOnPages" */
export type ComponentsOnPages_Set_Input = {
  componentId?: InputMaybe<Scalars['Int']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  pageId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type ComponentsOnPages_Stddev_Fields = {
  __typename?: 'ComponentsOnPages_stddev_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "ComponentsOnPages" */
export type ComponentsOnPages_Stddev_Order_By = {
  componentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ComponentsOnPages_Stddev_Pop_Fields = {
  __typename?: 'ComponentsOnPages_stddev_pop_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "ComponentsOnPages" */
export type ComponentsOnPages_Stddev_Pop_Order_By = {
  componentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ComponentsOnPages_Stddev_Samp_Fields = {
  __typename?: 'ComponentsOnPages_stddev_samp_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "ComponentsOnPages" */
export type ComponentsOnPages_Stddev_Samp_Order_By = {
  componentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ComponentsOnPages" */
export type ComponentsOnPages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ComponentsOnPages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ComponentsOnPages_Stream_Cursor_Value_Input = {
  componentId?: InputMaybe<Scalars['Int']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  pageId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type ComponentsOnPages_Sum_Fields = {
  __typename?: 'ComponentsOnPages_sum_fields';
  componentId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  pageId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "ComponentsOnPages" */
export type ComponentsOnPages_Sum_Order_By = {
  componentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** update columns of table "ComponentsOnPages" */
export enum ComponentsOnPages_Update_Column {
  /** column name */
  ComponentId = 'componentId',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  PageId = 'pageId',
}

export type ComponentsOnPages_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<ComponentsOnPages_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<ComponentsOnPages_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<ComponentsOnPages_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<ComponentsOnPages_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ComponentsOnPages_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<ComponentsOnPages_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ComponentsOnPages_Set_Input>;
  /** filter the rows which have to be updated */
  where: ComponentsOnPages_Bool_Exp;
};

/** aggregate var_pop on columns */
export type ComponentsOnPages_Var_Pop_Fields = {
  __typename?: 'ComponentsOnPages_var_pop_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "ComponentsOnPages" */
export type ComponentsOnPages_Var_Pop_Order_By = {
  componentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ComponentsOnPages_Var_Samp_Fields = {
  __typename?: 'ComponentsOnPages_var_samp_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "ComponentsOnPages" */
export type ComponentsOnPages_Var_Samp_Order_By = {
  componentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type ComponentsOnPages_Variance_Fields = {
  __typename?: 'ComponentsOnPages_variance_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "ComponentsOnPages" */
export type ComponentsOnPages_Variance_Order_By = {
  componentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** columns and relationships of "ComponentsOnThemes" */
export type ComponentsOnThemes = {
  __typename?: 'ComponentsOnThemes';
  /** An object relationship */
  Component: Component;
  /** An object relationship */
  Theme: Theme;
  componentId: Scalars['Int']['output'];
  themeId: Scalars['Int']['output'];
};

/** aggregated selection of "ComponentsOnThemes" */
export type ComponentsOnThemes_Aggregate = {
  __typename?: 'ComponentsOnThemes_aggregate';
  aggregate?: Maybe<ComponentsOnThemes_Aggregate_Fields>;
  nodes: Array<ComponentsOnThemes>;
};

export type ComponentsOnThemes_Aggregate_Bool_Exp = {
  count?: InputMaybe<ComponentsOnThemes_Aggregate_Bool_Exp_Count>;
};

export type ComponentsOnThemes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ComponentsOnThemes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ComponentsOnThemes" */
export type ComponentsOnThemes_Aggregate_Fields = {
  __typename?: 'ComponentsOnThemes_aggregate_fields';
  avg?: Maybe<ComponentsOnThemes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ComponentsOnThemes_Max_Fields>;
  min?: Maybe<ComponentsOnThemes_Min_Fields>;
  stddev?: Maybe<ComponentsOnThemes_Stddev_Fields>;
  stddev_pop?: Maybe<ComponentsOnThemes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ComponentsOnThemes_Stddev_Samp_Fields>;
  sum?: Maybe<ComponentsOnThemes_Sum_Fields>;
  var_pop?: Maybe<ComponentsOnThemes_Var_Pop_Fields>;
  var_samp?: Maybe<ComponentsOnThemes_Var_Samp_Fields>;
  variance?: Maybe<ComponentsOnThemes_Variance_Fields>;
};

/** aggregate fields of "ComponentsOnThemes" */
export type ComponentsOnThemes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ComponentsOnThemes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "ComponentsOnThemes" */
export type ComponentsOnThemes_Aggregate_Order_By = {
  avg?: InputMaybe<ComponentsOnThemes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ComponentsOnThemes_Max_Order_By>;
  min?: InputMaybe<ComponentsOnThemes_Min_Order_By>;
  stddev?: InputMaybe<ComponentsOnThemes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ComponentsOnThemes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ComponentsOnThemes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ComponentsOnThemes_Sum_Order_By>;
  var_pop?: InputMaybe<ComponentsOnThemes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ComponentsOnThemes_Var_Samp_Order_By>;
  variance?: InputMaybe<ComponentsOnThemes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ComponentsOnThemes" */
export type ComponentsOnThemes_Arr_Rel_Insert_Input = {
  data: Array<ComponentsOnThemes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<ComponentsOnThemes_On_Conflict>;
};

/** aggregate avg on columns */
export type ComponentsOnThemes_Avg_Fields = {
  __typename?: 'ComponentsOnThemes_avg_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "ComponentsOnThemes" */
export type ComponentsOnThemes_Avg_Order_By = {
  componentId?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ComponentsOnThemes". All fields are combined with a logical 'AND'. */
export type ComponentsOnThemes_Bool_Exp = {
  Component?: InputMaybe<Component_Bool_Exp>;
  Theme?: InputMaybe<Theme_Bool_Exp>;
  _and?: InputMaybe<Array<ComponentsOnThemes_Bool_Exp>>;
  _not?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
  _or?: InputMaybe<Array<ComponentsOnThemes_Bool_Exp>>;
  componentId?: InputMaybe<Int_Comparison_Exp>;
  themeId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "ComponentsOnThemes" */
export enum ComponentsOnThemes_Constraint {
  /** unique or primary key constraint on columns "componentId", "themeId" */
  ComponentsOnThemesPkey = 'ComponentsOnThemes_pkey',
}

/** input type for incrementing numeric columns in table "ComponentsOnThemes" */
export type ComponentsOnThemes_Inc_Input = {
  componentId?: InputMaybe<Scalars['Int']['input']>;
  themeId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ComponentsOnThemes" */
export type ComponentsOnThemes_Insert_Input = {
  Component?: InputMaybe<Component_Obj_Rel_Insert_Input>;
  Theme?: InputMaybe<Theme_Obj_Rel_Insert_Input>;
  componentId?: InputMaybe<Scalars['Int']['input']>;
  themeId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type ComponentsOnThemes_Max_Fields = {
  __typename?: 'ComponentsOnThemes_max_fields';
  componentId?: Maybe<Scalars['Int']['output']>;
  themeId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "ComponentsOnThemes" */
export type ComponentsOnThemes_Max_Order_By = {
  componentId?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ComponentsOnThemes_Min_Fields = {
  __typename?: 'ComponentsOnThemes_min_fields';
  componentId?: Maybe<Scalars['Int']['output']>;
  themeId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "ComponentsOnThemes" */
export type ComponentsOnThemes_Min_Order_By = {
  componentId?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ComponentsOnThemes" */
export type ComponentsOnThemes_Mutation_Response = {
  __typename?: 'ComponentsOnThemes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ComponentsOnThemes>;
};

/** on_conflict condition type for table "ComponentsOnThemes" */
export type ComponentsOnThemes_On_Conflict = {
  constraint: ComponentsOnThemes_Constraint;
  update_columns?: Array<ComponentsOnThemes_Update_Column>;
  where?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
};

/** Ordering options when selecting data from "ComponentsOnThemes". */
export type ComponentsOnThemes_Order_By = {
  Component?: InputMaybe<Component_Order_By>;
  Theme?: InputMaybe<Theme_Order_By>;
  componentId?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ComponentsOnThemes */
export type ComponentsOnThemes_Pk_Columns_Input = {
  componentId: Scalars['Int']['input'];
  themeId: Scalars['Int']['input'];
};

/** select columns of table "ComponentsOnThemes" */
export enum ComponentsOnThemes_Select_Column {
  /** column name */
  ComponentId = 'componentId',
  /** column name */
  ThemeId = 'themeId',
}

/** input type for updating data in table "ComponentsOnThemes" */
export type ComponentsOnThemes_Set_Input = {
  componentId?: InputMaybe<Scalars['Int']['input']>;
  themeId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type ComponentsOnThemes_Stddev_Fields = {
  __typename?: 'ComponentsOnThemes_stddev_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "ComponentsOnThemes" */
export type ComponentsOnThemes_Stddev_Order_By = {
  componentId?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ComponentsOnThemes_Stddev_Pop_Fields = {
  __typename?: 'ComponentsOnThemes_stddev_pop_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "ComponentsOnThemes" */
export type ComponentsOnThemes_Stddev_Pop_Order_By = {
  componentId?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ComponentsOnThemes_Stddev_Samp_Fields = {
  __typename?: 'ComponentsOnThemes_stddev_samp_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "ComponentsOnThemes" */
export type ComponentsOnThemes_Stddev_Samp_Order_By = {
  componentId?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ComponentsOnThemes" */
export type ComponentsOnThemes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ComponentsOnThemes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ComponentsOnThemes_Stream_Cursor_Value_Input = {
  componentId?: InputMaybe<Scalars['Int']['input']>;
  themeId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type ComponentsOnThemes_Sum_Fields = {
  __typename?: 'ComponentsOnThemes_sum_fields';
  componentId?: Maybe<Scalars['Int']['output']>;
  themeId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "ComponentsOnThemes" */
export type ComponentsOnThemes_Sum_Order_By = {
  componentId?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** update columns of table "ComponentsOnThemes" */
export enum ComponentsOnThemes_Update_Column {
  /** column name */
  ComponentId = 'componentId',
  /** column name */
  ThemeId = 'themeId',
}

export type ComponentsOnThemes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ComponentsOnThemes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ComponentsOnThemes_Set_Input>;
  /** filter the rows which have to be updated */
  where: ComponentsOnThemes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type ComponentsOnThemes_Var_Pop_Fields = {
  __typename?: 'ComponentsOnThemes_var_pop_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "ComponentsOnThemes" */
export type ComponentsOnThemes_Var_Pop_Order_By = {
  componentId?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ComponentsOnThemes_Var_Samp_Fields = {
  __typename?: 'ComponentsOnThemes_var_samp_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "ComponentsOnThemes" */
export type ComponentsOnThemes_Var_Samp_Order_By = {
  componentId?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type ComponentsOnThemes_Variance_Fields = {
  __typename?: 'ComponentsOnThemes_variance_fields';
  componentId?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "ComponentsOnThemes" */
export type ComponentsOnThemes_Variance_Order_By = {
  componentId?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** columns and relationships of "ContactMessage" */
export type ContactMessage = {
  __typename?: 'ContactMessage';
  /** An object relationship */
  Project: Project;
  createdAt: Scalars['timestamp']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  projectId: Scalars['uuid']['output'];
};

/** aggregated selection of "ContactMessage" */
export type ContactMessage_Aggregate = {
  __typename?: 'ContactMessage_aggregate';
  aggregate?: Maybe<ContactMessage_Aggregate_Fields>;
  nodes: Array<ContactMessage>;
};

export type ContactMessage_Aggregate_Bool_Exp = {
  count?: InputMaybe<ContactMessage_Aggregate_Bool_Exp_Count>;
};

export type ContactMessage_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ContactMessage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContactMessage_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ContactMessage" */
export type ContactMessage_Aggregate_Fields = {
  __typename?: 'ContactMessage_aggregate_fields';
  avg?: Maybe<ContactMessage_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ContactMessage_Max_Fields>;
  min?: Maybe<ContactMessage_Min_Fields>;
  stddev?: Maybe<ContactMessage_Stddev_Fields>;
  stddev_pop?: Maybe<ContactMessage_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ContactMessage_Stddev_Samp_Fields>;
  sum?: Maybe<ContactMessage_Sum_Fields>;
  var_pop?: Maybe<ContactMessage_Var_Pop_Fields>;
  var_samp?: Maybe<ContactMessage_Var_Samp_Fields>;
  variance?: Maybe<ContactMessage_Variance_Fields>;
};

/** aggregate fields of "ContactMessage" */
export type ContactMessage_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ContactMessage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "ContactMessage" */
export type ContactMessage_Aggregate_Order_By = {
  avg?: InputMaybe<ContactMessage_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ContactMessage_Max_Order_By>;
  min?: InputMaybe<ContactMessage_Min_Order_By>;
  stddev?: InputMaybe<ContactMessage_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ContactMessage_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ContactMessage_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ContactMessage_Sum_Order_By>;
  var_pop?: InputMaybe<ContactMessage_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ContactMessage_Var_Samp_Order_By>;
  variance?: InputMaybe<ContactMessage_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ContactMessage" */
export type ContactMessage_Arr_Rel_Insert_Input = {
  data: Array<ContactMessage_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<ContactMessage_On_Conflict>;
};

/** aggregate avg on columns */
export type ContactMessage_Avg_Fields = {
  __typename?: 'ContactMessage_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "ContactMessage" */
export type ContactMessage_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ContactMessage". All fields are combined with a logical 'AND'. */
export type ContactMessage_Bool_Exp = {
  Project?: InputMaybe<Project_Bool_Exp>;
  _and?: InputMaybe<Array<ContactMessage_Bool_Exp>>;
  _not?: InputMaybe<ContactMessage_Bool_Exp>;
  _or?: InputMaybe<Array<ContactMessage_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "ContactMessage" */
export enum ContactMessage_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContactMessagePkey = 'ContactMessage_pkey',
}

/** input type for incrementing numeric columns in table "ContactMessage" */
export type ContactMessage_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ContactMessage" */
export type ContactMessage_Insert_Input = {
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type ContactMessage_Max_Fields = {
  __typename?: 'ContactMessage_max_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "ContactMessage" */
export type ContactMessage_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ContactMessage_Min_Fields = {
  __typename?: 'ContactMessage_min_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "ContactMessage" */
export type ContactMessage_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ContactMessage" */
export type ContactMessage_Mutation_Response = {
  __typename?: 'ContactMessage_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ContactMessage>;
};

/** on_conflict condition type for table "ContactMessage" */
export type ContactMessage_On_Conflict = {
  constraint: ContactMessage_Constraint;
  update_columns?: Array<ContactMessage_Update_Column>;
  where?: InputMaybe<ContactMessage_Bool_Exp>;
};

/** Ordering options when selecting data from "ContactMessage". */
export type ContactMessage_Order_By = {
  Project?: InputMaybe<Project_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ContactMessage */
export type ContactMessage_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "ContactMessage" */
export enum ContactMessage_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'projectId',
}

/** input type for updating data in table "ContactMessage" */
export type ContactMessage_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type ContactMessage_Stddev_Fields = {
  __typename?: 'ContactMessage_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "ContactMessage" */
export type ContactMessage_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ContactMessage_Stddev_Pop_Fields = {
  __typename?: 'ContactMessage_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "ContactMessage" */
export type ContactMessage_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ContactMessage_Stddev_Samp_Fields = {
  __typename?: 'ContactMessage_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "ContactMessage" */
export type ContactMessage_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ContactMessage" */
export type ContactMessage_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ContactMessage_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ContactMessage_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type ContactMessage_Sum_Fields = {
  __typename?: 'ContactMessage_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "ContactMessage" */
export type ContactMessage_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "ContactMessage" */
export enum ContactMessage_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'projectId',
}

export type ContactMessage_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ContactMessage_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ContactMessage_Set_Input>;
  /** filter the rows which have to be updated */
  where: ContactMessage_Bool_Exp;
};

/** aggregate var_pop on columns */
export type ContactMessage_Var_Pop_Fields = {
  __typename?: 'ContactMessage_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "ContactMessage" */
export type ContactMessage_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ContactMessage_Var_Samp_Fields = {
  __typename?: 'ContactMessage_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "ContactMessage" */
export type ContactMessage_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type ContactMessage_Variance_Fields = {
  __typename?: 'ContactMessage_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "ContactMessage" */
export type ContactMessage_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "ContactRequest" */
export type ContactRequest = {
  __typename?: 'ContactRequest';
  /** An object relationship */
  Admin?: Maybe<Admin>;
  assigneeId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamp']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  status: Scalars['TicketStatus']['output'];
  subject: Scalars['String']['output'];
  updatedAt: Scalars['timestamp']['output'];
};

/** aggregated selection of "ContactRequest" */
export type ContactRequest_Aggregate = {
  __typename?: 'ContactRequest_aggregate';
  aggregate?: Maybe<ContactRequest_Aggregate_Fields>;
  nodes: Array<ContactRequest>;
};

export type ContactRequest_Aggregate_Bool_Exp = {
  count?: InputMaybe<ContactRequest_Aggregate_Bool_Exp_Count>;
};

export type ContactRequest_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ContactRequest_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContactRequest_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ContactRequest" */
export type ContactRequest_Aggregate_Fields = {
  __typename?: 'ContactRequest_aggregate_fields';
  avg?: Maybe<ContactRequest_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ContactRequest_Max_Fields>;
  min?: Maybe<ContactRequest_Min_Fields>;
  stddev?: Maybe<ContactRequest_Stddev_Fields>;
  stddev_pop?: Maybe<ContactRequest_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ContactRequest_Stddev_Samp_Fields>;
  sum?: Maybe<ContactRequest_Sum_Fields>;
  var_pop?: Maybe<ContactRequest_Var_Pop_Fields>;
  var_samp?: Maybe<ContactRequest_Var_Samp_Fields>;
  variance?: Maybe<ContactRequest_Variance_Fields>;
};

/** aggregate fields of "ContactRequest" */
export type ContactRequest_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ContactRequest_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "ContactRequest" */
export type ContactRequest_Aggregate_Order_By = {
  avg?: InputMaybe<ContactRequest_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ContactRequest_Max_Order_By>;
  min?: InputMaybe<ContactRequest_Min_Order_By>;
  stddev?: InputMaybe<ContactRequest_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ContactRequest_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ContactRequest_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ContactRequest_Sum_Order_By>;
  var_pop?: InputMaybe<ContactRequest_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ContactRequest_Var_Samp_Order_By>;
  variance?: InputMaybe<ContactRequest_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ContactRequest" */
export type ContactRequest_Arr_Rel_Insert_Input = {
  data: Array<ContactRequest_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<ContactRequest_On_Conflict>;
};

/** aggregate avg on columns */
export type ContactRequest_Avg_Fields = {
  __typename?: 'ContactRequest_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "ContactRequest" */
export type ContactRequest_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ContactRequest". All fields are combined with a logical 'AND'. */
export type ContactRequest_Bool_Exp = {
  Admin?: InputMaybe<Admin_Bool_Exp>;
  _and?: InputMaybe<Array<ContactRequest_Bool_Exp>>;
  _not?: InputMaybe<ContactRequest_Bool_Exp>;
  _or?: InputMaybe<Array<ContactRequest_Bool_Exp>>;
  assigneeId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<TicketStatus_Comparison_Exp>;
  subject?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "ContactRequest" */
export enum ContactRequest_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContactRequestPkey = 'ContactRequest_pkey',
}

/** input type for incrementing numeric columns in table "ContactRequest" */
export type ContactRequest_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ContactRequest" */
export type ContactRequest_Insert_Input = {
  Admin?: InputMaybe<Admin_Obj_Rel_Insert_Input>;
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['TicketStatus']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type ContactRequest_Max_Fields = {
  __typename?: 'ContactRequest_max_fields';
  assigneeId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['TicketStatus']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "ContactRequest" */
export type ContactRequest_Max_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ContactRequest_Min_Fields = {
  __typename?: 'ContactRequest_min_fields';
  assigneeId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['TicketStatus']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "ContactRequest" */
export type ContactRequest_Min_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ContactRequest" */
export type ContactRequest_Mutation_Response = {
  __typename?: 'ContactRequest_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ContactRequest>;
};

/** on_conflict condition type for table "ContactRequest" */
export type ContactRequest_On_Conflict = {
  constraint: ContactRequest_Constraint;
  update_columns?: Array<ContactRequest_Update_Column>;
  where?: InputMaybe<ContactRequest_Bool_Exp>;
};

/** Ordering options when selecting data from "ContactRequest". */
export type ContactRequest_Order_By = {
  Admin?: InputMaybe<Admin_Order_By>;
  assigneeId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ContactRequest */
export type ContactRequest_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "ContactRequest" */
export enum ContactRequest_Select_Column {
  /** column name */
  AssigneeId = 'assigneeId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Status = 'status',
  /** column name */
  Subject = 'subject',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "ContactRequest" */
export type ContactRequest_Set_Input = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['TicketStatus']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type ContactRequest_Stddev_Fields = {
  __typename?: 'ContactRequest_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "ContactRequest" */
export type ContactRequest_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ContactRequest_Stddev_Pop_Fields = {
  __typename?: 'ContactRequest_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "ContactRequest" */
export type ContactRequest_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ContactRequest_Stddev_Samp_Fields = {
  __typename?: 'ContactRequest_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "ContactRequest" */
export type ContactRequest_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ContactRequest" */
export type ContactRequest_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ContactRequest_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ContactRequest_Stream_Cursor_Value_Input = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['TicketStatus']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type ContactRequest_Sum_Fields = {
  __typename?: 'ContactRequest_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "ContactRequest" */
export type ContactRequest_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "ContactRequest" */
export enum ContactRequest_Update_Column {
  /** column name */
  AssigneeId = 'assigneeId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Status = 'status',
  /** column name */
  Subject = 'subject',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type ContactRequest_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ContactRequest_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ContactRequest_Set_Input>;
  /** filter the rows which have to be updated */
  where: ContactRequest_Bool_Exp;
};

/** aggregate var_pop on columns */
export type ContactRequest_Var_Pop_Fields = {
  __typename?: 'ContactRequest_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "ContactRequest" */
export type ContactRequest_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ContactRequest_Var_Samp_Fields = {
  __typename?: 'ContactRequest_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "ContactRequest" */
export type ContactRequest_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type ContactRequest_Variance_Fields = {
  __typename?: 'ContactRequest_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "ContactRequest" */
export type ContactRequest_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "ContentType" */
export type ContentType = {
  __typename?: 'ContentType';
  /** An object relationship */
  ContentType?: Maybe<ContentType>;
  /** An array relationship */
  ContentTypesOnProjects: Array<ContentTypesOnProjects>;
  /** An aggregate relationship */
  ContentTypesOnProjects_aggregate: ContentTypesOnProjects_Aggregate;
  /** An array relationship */
  children: Array<ContentType>;
  /** An aggregate relationship */
  children_aggregate: ContentType_Aggregate;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['Int']['output']>;
  type: Scalars['ContentTypeVariation']['output'];
};

/** columns and relationships of "ContentType" */
export type ContentTypeContentTypesOnProjectsArgs = {
  distinct_on?: InputMaybe<Array<ContentTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentTypesOnProjects_Order_By>>;
  where?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
};

/** columns and relationships of "ContentType" */
export type ContentTypeContentTypesOnProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContentTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentTypesOnProjects_Order_By>>;
  where?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
};

/** columns and relationships of "ContentType" */
export type ContentTypeChildrenArgs = {
  distinct_on?: InputMaybe<Array<ContentType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentType_Order_By>>;
  where?: InputMaybe<ContentType_Bool_Exp>;
};

/** columns and relationships of "ContentType" */
export type ContentTypeChildren_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContentType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentType_Order_By>>;
  where?: InputMaybe<ContentType_Bool_Exp>;
};

/** Boolean expression to compare columns of type "ContentTypeVariation". All fields are combined with logical 'AND'. */
export type ContentTypeVariation_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['ContentTypeVariation']['input']>;
  _gt?: InputMaybe<Scalars['ContentTypeVariation']['input']>;
  _gte?: InputMaybe<Scalars['ContentTypeVariation']['input']>;
  _in?: InputMaybe<Array<Scalars['ContentTypeVariation']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['ContentTypeVariation']['input']>;
  _lte?: InputMaybe<Scalars['ContentTypeVariation']['input']>;
  _neq?: InputMaybe<Scalars['ContentTypeVariation']['input']>;
  _nin?: InputMaybe<Array<Scalars['ContentTypeVariation']['input']>>;
};

/** aggregated selection of "ContentType" */
export type ContentType_Aggregate = {
  __typename?: 'ContentType_aggregate';
  aggregate?: Maybe<ContentType_Aggregate_Fields>;
  nodes: Array<ContentType>;
};

export type ContentType_Aggregate_Bool_Exp = {
  count?: InputMaybe<ContentType_Aggregate_Bool_Exp_Count>;
};

export type ContentType_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ContentType_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContentType_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ContentType" */
export type ContentType_Aggregate_Fields = {
  __typename?: 'ContentType_aggregate_fields';
  avg?: Maybe<ContentType_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ContentType_Max_Fields>;
  min?: Maybe<ContentType_Min_Fields>;
  stddev?: Maybe<ContentType_Stddev_Fields>;
  stddev_pop?: Maybe<ContentType_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ContentType_Stddev_Samp_Fields>;
  sum?: Maybe<ContentType_Sum_Fields>;
  var_pop?: Maybe<ContentType_Var_Pop_Fields>;
  var_samp?: Maybe<ContentType_Var_Samp_Fields>;
  variance?: Maybe<ContentType_Variance_Fields>;
};

/** aggregate fields of "ContentType" */
export type ContentType_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ContentType_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "ContentType" */
export type ContentType_Aggregate_Order_By = {
  avg?: InputMaybe<ContentType_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ContentType_Max_Order_By>;
  min?: InputMaybe<ContentType_Min_Order_By>;
  stddev?: InputMaybe<ContentType_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ContentType_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ContentType_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ContentType_Sum_Order_By>;
  var_pop?: InputMaybe<ContentType_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ContentType_Var_Samp_Order_By>;
  variance?: InputMaybe<ContentType_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ContentType" */
export type ContentType_Arr_Rel_Insert_Input = {
  data: Array<ContentType_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<ContentType_On_Conflict>;
};

/** aggregate avg on columns */
export type ContentType_Avg_Fields = {
  __typename?: 'ContentType_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "ContentType" */
export type ContentType_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ContentType". All fields are combined with a logical 'AND'. */
export type ContentType_Bool_Exp = {
  ContentType?: InputMaybe<ContentType_Bool_Exp>;
  ContentTypesOnProjects?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
  ContentTypesOnProjects_aggregate?: InputMaybe<ContentTypesOnProjects_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<ContentType_Bool_Exp>>;
  _not?: InputMaybe<ContentType_Bool_Exp>;
  _or?: InputMaybe<Array<ContentType_Bool_Exp>>;
  children?: InputMaybe<ContentType_Bool_Exp>;
  children_aggregate?: InputMaybe<ContentType_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  parentId?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<ContentTypeVariation_Comparison_Exp>;
};

/** unique or primary key constraints on table "ContentType" */
export enum ContentType_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContentTypePkey = 'ContentType_pkey',
}

/** input type for incrementing numeric columns in table "ContentType" */
export type ContentType_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ContentType" */
export type ContentType_Insert_Input = {
  ContentType?: InputMaybe<ContentType_Obj_Rel_Insert_Input>;
  ContentTypesOnProjects?: InputMaybe<ContentTypesOnProjects_Arr_Rel_Insert_Input>;
  children?: InputMaybe<ContentType_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['ContentTypeVariation']['input']>;
};

/** aggregate max on columns */
export type ContentType_Max_Fields = {
  __typename?: 'ContentType_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['ContentTypeVariation']['output']>;
};

/** order by max() on columns of table "ContentType" */
export type ContentType_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ContentType_Min_Fields = {
  __typename?: 'ContentType_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['ContentTypeVariation']['output']>;
};

/** order by min() on columns of table "ContentType" */
export type ContentType_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ContentType" */
export type ContentType_Mutation_Response = {
  __typename?: 'ContentType_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ContentType>;
};

/** input type for inserting object relation for remote table "ContentType" */
export type ContentType_Obj_Rel_Insert_Input = {
  data: ContentType_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<ContentType_On_Conflict>;
};

/** on_conflict condition type for table "ContentType" */
export type ContentType_On_Conflict = {
  constraint: ContentType_Constraint;
  update_columns?: Array<ContentType_Update_Column>;
  where?: InputMaybe<ContentType_Bool_Exp>;
};

/** Ordering options when selecting data from "ContentType". */
export type ContentType_Order_By = {
  ContentType?: InputMaybe<ContentType_Order_By>;
  ContentTypesOnProjects_aggregate?: InputMaybe<ContentTypesOnProjects_Aggregate_Order_By>;
  children_aggregate?: InputMaybe<ContentType_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ContentType */
export type ContentType_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "ContentType" */
export enum ContentType_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "ContentType" */
export type ContentType_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['ContentTypeVariation']['input']>;
};

/** aggregate stddev on columns */
export type ContentType_Stddev_Fields = {
  __typename?: 'ContentType_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "ContentType" */
export type ContentType_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ContentType_Stddev_Pop_Fields = {
  __typename?: 'ContentType_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "ContentType" */
export type ContentType_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ContentType_Stddev_Samp_Fields = {
  __typename?: 'ContentType_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "ContentType" */
export type ContentType_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ContentType" */
export type ContentType_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ContentType_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ContentType_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['ContentTypeVariation']['input']>;
};

/** aggregate sum on columns */
export type ContentType_Sum_Fields = {
  __typename?: 'ContentType_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "ContentType" */
export type ContentType_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** update columns of table "ContentType" */
export enum ContentType_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  Type = 'type',
}

export type ContentType_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ContentType_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ContentType_Set_Input>;
  /** filter the rows which have to be updated */
  where: ContentType_Bool_Exp;
};

/** aggregate var_pop on columns */
export type ContentType_Var_Pop_Fields = {
  __typename?: 'ContentType_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "ContentType" */
export type ContentType_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ContentType_Var_Samp_Fields = {
  __typename?: 'ContentType_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "ContentType" */
export type ContentType_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type ContentType_Variance_Fields = {
  __typename?: 'ContentType_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "ContentType" */
export type ContentType_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** columns and relationships of "ContentTypesOnProjects" */
export type ContentTypesOnProjects = {
  __typename?: 'ContentTypesOnProjects';
  /** An object relationship */
  ContentType: ContentType;
  /** An object relationship */
  Project: Project;
  contentTypeId: Scalars['Int']['output'];
  projectId: Scalars['uuid']['output'];
};

/** aggregated selection of "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Aggregate = {
  __typename?: 'ContentTypesOnProjects_aggregate';
  aggregate?: Maybe<ContentTypesOnProjects_Aggregate_Fields>;
  nodes: Array<ContentTypesOnProjects>;
};

export type ContentTypesOnProjects_Aggregate_Bool_Exp = {
  count?: InputMaybe<ContentTypesOnProjects_Aggregate_Bool_Exp_Count>;
};

export type ContentTypesOnProjects_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ContentTypesOnProjects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Aggregate_Fields = {
  __typename?: 'ContentTypesOnProjects_aggregate_fields';
  avg?: Maybe<ContentTypesOnProjects_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ContentTypesOnProjects_Max_Fields>;
  min?: Maybe<ContentTypesOnProjects_Min_Fields>;
  stddev?: Maybe<ContentTypesOnProjects_Stddev_Fields>;
  stddev_pop?: Maybe<ContentTypesOnProjects_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ContentTypesOnProjects_Stddev_Samp_Fields>;
  sum?: Maybe<ContentTypesOnProjects_Sum_Fields>;
  var_pop?: Maybe<ContentTypesOnProjects_Var_Pop_Fields>;
  var_samp?: Maybe<ContentTypesOnProjects_Var_Samp_Fields>;
  variance?: Maybe<ContentTypesOnProjects_Variance_Fields>;
};

/** aggregate fields of "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ContentTypesOnProjects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Aggregate_Order_By = {
  avg?: InputMaybe<ContentTypesOnProjects_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ContentTypesOnProjects_Max_Order_By>;
  min?: InputMaybe<ContentTypesOnProjects_Min_Order_By>;
  stddev?: InputMaybe<ContentTypesOnProjects_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ContentTypesOnProjects_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ContentTypesOnProjects_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ContentTypesOnProjects_Sum_Order_By>;
  var_pop?: InputMaybe<ContentTypesOnProjects_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ContentTypesOnProjects_Var_Samp_Order_By>;
  variance?: InputMaybe<ContentTypesOnProjects_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Arr_Rel_Insert_Input = {
  data: Array<ContentTypesOnProjects_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<ContentTypesOnProjects_On_Conflict>;
};

/** aggregate avg on columns */
export type ContentTypesOnProjects_Avg_Fields = {
  __typename?: 'ContentTypesOnProjects_avg_fields';
  contentTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Avg_Order_By = {
  contentTypeId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ContentTypesOnProjects". All fields are combined with a logical 'AND'. */
export type ContentTypesOnProjects_Bool_Exp = {
  ContentType?: InputMaybe<ContentType_Bool_Exp>;
  Project?: InputMaybe<Project_Bool_Exp>;
  _and?: InputMaybe<Array<ContentTypesOnProjects_Bool_Exp>>;
  _not?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
  _or?: InputMaybe<Array<ContentTypesOnProjects_Bool_Exp>>;
  contentTypeId?: InputMaybe<Int_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "ContentTypesOnProjects" */
export enum ContentTypesOnProjects_Constraint {
  /** unique or primary key constraint on columns "contentTypeId", "projectId" */
  ContentTypesOnProjectsPkey = 'ContentTypesOnProjects_pkey',
}

/** input type for incrementing numeric columns in table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Inc_Input = {
  contentTypeId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Insert_Input = {
  ContentType?: InputMaybe<ContentType_Obj_Rel_Insert_Input>;
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  contentTypeId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type ContentTypesOnProjects_Max_Fields = {
  __typename?: 'ContentTypesOnProjects_max_fields';
  contentTypeId?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Max_Order_By = {
  contentTypeId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ContentTypesOnProjects_Min_Fields = {
  __typename?: 'ContentTypesOnProjects_min_fields';
  contentTypeId?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Min_Order_By = {
  contentTypeId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Mutation_Response = {
  __typename?: 'ContentTypesOnProjects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ContentTypesOnProjects>;
};

/** on_conflict condition type for table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_On_Conflict = {
  constraint: ContentTypesOnProjects_Constraint;
  update_columns?: Array<ContentTypesOnProjects_Update_Column>;
  where?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
};

/** Ordering options when selecting data from "ContentTypesOnProjects". */
export type ContentTypesOnProjects_Order_By = {
  ContentType?: InputMaybe<ContentType_Order_By>;
  Project?: InputMaybe<Project_Order_By>;
  contentTypeId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ContentTypesOnProjects */
export type ContentTypesOnProjects_Pk_Columns_Input = {
  contentTypeId: Scalars['Int']['input'];
  projectId: Scalars['uuid']['input'];
};

/** select columns of table "ContentTypesOnProjects" */
export enum ContentTypesOnProjects_Select_Column {
  /** column name */
  ContentTypeId = 'contentTypeId',
  /** column name */
  ProjectId = 'projectId',
}

/** input type for updating data in table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Set_Input = {
  contentTypeId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type ContentTypesOnProjects_Stddev_Fields = {
  __typename?: 'ContentTypesOnProjects_stddev_fields';
  contentTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Stddev_Order_By = {
  contentTypeId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ContentTypesOnProjects_Stddev_Pop_Fields = {
  __typename?: 'ContentTypesOnProjects_stddev_pop_fields';
  contentTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Stddev_Pop_Order_By = {
  contentTypeId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ContentTypesOnProjects_Stddev_Samp_Fields = {
  __typename?: 'ContentTypesOnProjects_stddev_samp_fields';
  contentTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Stddev_Samp_Order_By = {
  contentTypeId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ContentTypesOnProjects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ContentTypesOnProjects_Stream_Cursor_Value_Input = {
  contentTypeId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type ContentTypesOnProjects_Sum_Fields = {
  __typename?: 'ContentTypesOnProjects_sum_fields';
  contentTypeId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Sum_Order_By = {
  contentTypeId?: InputMaybe<Order_By>;
};

/** update columns of table "ContentTypesOnProjects" */
export enum ContentTypesOnProjects_Update_Column {
  /** column name */
  ContentTypeId = 'contentTypeId',
  /** column name */
  ProjectId = 'projectId',
}

export type ContentTypesOnProjects_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ContentTypesOnProjects_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ContentTypesOnProjects_Set_Input>;
  /** filter the rows which have to be updated */
  where: ContentTypesOnProjects_Bool_Exp;
};

/** aggregate var_pop on columns */
export type ContentTypesOnProjects_Var_Pop_Fields = {
  __typename?: 'ContentTypesOnProjects_var_pop_fields';
  contentTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Var_Pop_Order_By = {
  contentTypeId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ContentTypesOnProjects_Var_Samp_Fields = {
  __typename?: 'ContentTypesOnProjects_var_samp_fields';
  contentTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Var_Samp_Order_By = {
  contentTypeId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type ContentTypesOnProjects_Variance_Fields = {
  __typename?: 'ContentTypesOnProjects_variance_fields';
  contentTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "ContentTypesOnProjects" */
export type ContentTypesOnProjects_Variance_Order_By = {
  contentTypeId?: InputMaybe<Order_By>;
};

/** columns and relationships of "DomainRegistration" */
export type DomainRegistration = {
  __typename?: 'DomainRegistration';
  /** An array relationship */
  DomainRegistrationsOnProjects: Array<DomainRegistrationsOnProjects>;
  /** An aggregate relationship */
  DomainRegistrationsOnProjects_aggregate: DomainRegistrationsOnProjects_Aggregate;
  /** An array relationship */
  Payments: Array<Payment>;
  /** An aggregate relationship */
  Payments_aggregate: Payment_Aggregate;
  /** An object relationship */
  User: User;
  amount: Scalars['float8']['output'];
  createdAt: Scalars['timestamp']['output'];
  domainName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isFree: Scalars['Boolean']['output'];
  status: Scalars['DomainRegistrationStatus']['output'];
  updatedAt: Scalars['timestamp']['output'];
  userId: Scalars['String']['output'];
  years: Scalars['Int']['output'];
};

/** columns and relationships of "DomainRegistration" */
export type DomainRegistrationDomainRegistrationsOnProjectsArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistrationsOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistrationsOnProjects_Order_By>>;
  where?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
};

/** columns and relationships of "DomainRegistration" */
export type DomainRegistrationDomainRegistrationsOnProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistrationsOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistrationsOnProjects_Order_By>>;
  where?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
};

/** columns and relationships of "DomainRegistration" */
export type DomainRegistrationPaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

/** columns and relationships of "DomainRegistration" */
export type DomainRegistrationPayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

/** Boolean expression to compare columns of type "DomainRegistrationStatus". All fields are combined with logical 'AND'. */
export type DomainRegistrationStatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['DomainRegistrationStatus']['input']>;
  _gt?: InputMaybe<Scalars['DomainRegistrationStatus']['input']>;
  _gte?: InputMaybe<Scalars['DomainRegistrationStatus']['input']>;
  _in?: InputMaybe<Array<Scalars['DomainRegistrationStatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['DomainRegistrationStatus']['input']>;
  _lte?: InputMaybe<Scalars['DomainRegistrationStatus']['input']>;
  _neq?: InputMaybe<Scalars['DomainRegistrationStatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['DomainRegistrationStatus']['input']>>;
};

/** aggregated selection of "DomainRegistration" */
export type DomainRegistration_Aggregate = {
  __typename?: 'DomainRegistration_aggregate';
  aggregate?: Maybe<DomainRegistration_Aggregate_Fields>;
  nodes: Array<DomainRegistration>;
};

export type DomainRegistration_Aggregate_Bool_Exp = {
  avg?: InputMaybe<DomainRegistration_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<DomainRegistration_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<DomainRegistration_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<DomainRegistration_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<DomainRegistration_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<DomainRegistration_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<DomainRegistration_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<DomainRegistration_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<DomainRegistration_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<DomainRegistration_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<DomainRegistration_Aggregate_Bool_Exp_Var_Samp>;
};

export type DomainRegistration_Aggregate_Bool_Exp_Avg = {
  arguments: DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DomainRegistration_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type DomainRegistration_Aggregate_Bool_Exp_Bool_And = {
  arguments: DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DomainRegistration_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type DomainRegistration_Aggregate_Bool_Exp_Bool_Or = {
  arguments: DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DomainRegistration_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type DomainRegistration_Aggregate_Bool_Exp_Corr = {
  arguments: DomainRegistration_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DomainRegistration_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type DomainRegistration_Aggregate_Bool_Exp_Corr_Arguments = {
  X: DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type DomainRegistration_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DomainRegistration_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DomainRegistration_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type DomainRegistration_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: DomainRegistration_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DomainRegistration_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type DomainRegistration_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type DomainRegistration_Aggregate_Bool_Exp_Max = {
  arguments: DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DomainRegistration_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type DomainRegistration_Aggregate_Bool_Exp_Min = {
  arguments: DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DomainRegistration_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type DomainRegistration_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DomainRegistration_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type DomainRegistration_Aggregate_Bool_Exp_Sum = {
  arguments: DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DomainRegistration_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type DomainRegistration_Aggregate_Bool_Exp_Var_Samp = {
  arguments: DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DomainRegistration_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "DomainRegistration" */
export type DomainRegistration_Aggregate_Fields = {
  __typename?: 'DomainRegistration_aggregate_fields';
  avg?: Maybe<DomainRegistration_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<DomainRegistration_Max_Fields>;
  min?: Maybe<DomainRegistration_Min_Fields>;
  stddev?: Maybe<DomainRegistration_Stddev_Fields>;
  stddev_pop?: Maybe<DomainRegistration_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<DomainRegistration_Stddev_Samp_Fields>;
  sum?: Maybe<DomainRegistration_Sum_Fields>;
  var_pop?: Maybe<DomainRegistration_Var_Pop_Fields>;
  var_samp?: Maybe<DomainRegistration_Var_Samp_Fields>;
  variance?: Maybe<DomainRegistration_Variance_Fields>;
};

/** aggregate fields of "DomainRegistration" */
export type DomainRegistration_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DomainRegistration_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "DomainRegistration" */
export type DomainRegistration_Aggregate_Order_By = {
  avg?: InputMaybe<DomainRegistration_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<DomainRegistration_Max_Order_By>;
  min?: InputMaybe<DomainRegistration_Min_Order_By>;
  stddev?: InputMaybe<DomainRegistration_Stddev_Order_By>;
  stddev_pop?: InputMaybe<DomainRegistration_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<DomainRegistration_Stddev_Samp_Order_By>;
  sum?: InputMaybe<DomainRegistration_Sum_Order_By>;
  var_pop?: InputMaybe<DomainRegistration_Var_Pop_Order_By>;
  var_samp?: InputMaybe<DomainRegistration_Var_Samp_Order_By>;
  variance?: InputMaybe<DomainRegistration_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "DomainRegistration" */
export type DomainRegistration_Arr_Rel_Insert_Input = {
  data: Array<DomainRegistration_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DomainRegistration_On_Conflict>;
};

/** aggregate avg on columns */
export type DomainRegistration_Avg_Fields = {
  __typename?: 'DomainRegistration_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  years?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "DomainRegistration" */
export type DomainRegistration_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  years?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "DomainRegistration". All fields are combined with a logical 'AND'. */
export type DomainRegistration_Bool_Exp = {
  DomainRegistrationsOnProjects?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
  DomainRegistrationsOnProjects_aggregate?: InputMaybe<DomainRegistrationsOnProjects_Aggregate_Bool_Exp>;
  Payments?: InputMaybe<Payment_Bool_Exp>;
  Payments_aggregate?: InputMaybe<Payment_Aggregate_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<DomainRegistration_Bool_Exp>>;
  _not?: InputMaybe<DomainRegistration_Bool_Exp>;
  _or?: InputMaybe<Array<DomainRegistration_Bool_Exp>>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  domainName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isFree?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<DomainRegistrationStatus_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
  years?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "DomainRegistration" */
export enum DomainRegistration_Constraint {
  /** unique or primary key constraint on columns "id" */
  DomainRegistrationPkey = 'DomainRegistration_pkey',
}

/** input type for incrementing numeric columns in table "DomainRegistration" */
export type DomainRegistration_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  years?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "DomainRegistration" */
export type DomainRegistration_Insert_Input = {
  DomainRegistrationsOnProjects?: InputMaybe<DomainRegistrationsOnProjects_Arr_Rel_Insert_Input>;
  Payments?: InputMaybe<Payment_Arr_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['DomainRegistrationStatus']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  years?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type DomainRegistration_Max_Fields = {
  __typename?: 'DomainRegistration_max_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  domainName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['DomainRegistrationStatus']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  years?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "DomainRegistration" */
export type DomainRegistration_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  domainName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  years?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type DomainRegistration_Min_Fields = {
  __typename?: 'DomainRegistration_min_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  domainName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['DomainRegistrationStatus']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  years?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "DomainRegistration" */
export type DomainRegistration_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  domainName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  years?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "DomainRegistration" */
export type DomainRegistration_Mutation_Response = {
  __typename?: 'DomainRegistration_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<DomainRegistration>;
};

/** input type for inserting object relation for remote table "DomainRegistration" */
export type DomainRegistration_Obj_Rel_Insert_Input = {
  data: DomainRegistration_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<DomainRegistration_On_Conflict>;
};

/** on_conflict condition type for table "DomainRegistration" */
export type DomainRegistration_On_Conflict = {
  constraint: DomainRegistration_Constraint;
  update_columns?: Array<DomainRegistration_Update_Column>;
  where?: InputMaybe<DomainRegistration_Bool_Exp>;
};

/** Ordering options when selecting data from "DomainRegistration". */
export type DomainRegistration_Order_By = {
  DomainRegistrationsOnProjects_aggregate?: InputMaybe<DomainRegistrationsOnProjects_Aggregate_Order_By>;
  Payments_aggregate?: InputMaybe<Payment_Aggregate_Order_By>;
  User?: InputMaybe<User_Order_By>;
  amount?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  domainName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isFree?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  years?: InputMaybe<Order_By>;
};

/** primary key columns input for table: DomainRegistration */
export type DomainRegistration_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "DomainRegistration" */
export enum DomainRegistration_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DomainName = 'domainName',
  /** column name */
  Id = 'id',
  /** column name */
  IsFree = 'isFree',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  Years = 'years',
}

/** select "DomainRegistration_aggregate_bool_exp_avg_arguments_columns" columns of table "DomainRegistration" */
export enum DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "DomainRegistration_aggregate_bool_exp_bool_and_arguments_columns" columns of table "DomainRegistration" */
export enum DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFree = 'isFree',
}

/** select "DomainRegistration_aggregate_bool_exp_bool_or_arguments_columns" columns of table "DomainRegistration" */
export enum DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFree = 'isFree',
}

/** select "DomainRegistration_aggregate_bool_exp_corr_arguments_columns" columns of table "DomainRegistration" */
export enum DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "DomainRegistration_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "DomainRegistration" */
export enum DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "DomainRegistration_aggregate_bool_exp_max_arguments_columns" columns of table "DomainRegistration" */
export enum DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "DomainRegistration_aggregate_bool_exp_min_arguments_columns" columns of table "DomainRegistration" */
export enum DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "DomainRegistration_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "DomainRegistration" */
export enum DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "DomainRegistration_aggregate_bool_exp_sum_arguments_columns" columns of table "DomainRegistration" */
export enum DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "DomainRegistration_aggregate_bool_exp_var_samp_arguments_columns" columns of table "DomainRegistration" */
export enum DomainRegistration_Select_Column_DomainRegistration_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** input type for updating data in table "DomainRegistration" */
export type DomainRegistration_Set_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['DomainRegistrationStatus']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  years?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type DomainRegistration_Stddev_Fields = {
  __typename?: 'DomainRegistration_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  years?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "DomainRegistration" */
export type DomainRegistration_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  years?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type DomainRegistration_Stddev_Pop_Fields = {
  __typename?: 'DomainRegistration_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  years?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "DomainRegistration" */
export type DomainRegistration_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  years?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type DomainRegistration_Stddev_Samp_Fields = {
  __typename?: 'DomainRegistration_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  years?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "DomainRegistration" */
export type DomainRegistration_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  years?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "DomainRegistration" */
export type DomainRegistration_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DomainRegistration_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DomainRegistration_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['DomainRegistrationStatus']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  years?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type DomainRegistration_Sum_Fields = {
  __typename?: 'DomainRegistration_sum_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  years?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "DomainRegistration" */
export type DomainRegistration_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  years?: InputMaybe<Order_By>;
};

/** update columns of table "DomainRegistration" */
export enum DomainRegistration_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DomainName = 'domainName',
  /** column name */
  Id = 'id',
  /** column name */
  IsFree = 'isFree',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  Years = 'years',
}

export type DomainRegistration_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DomainRegistration_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DomainRegistration_Set_Input>;
  /** filter the rows which have to be updated */
  where: DomainRegistration_Bool_Exp;
};

/** aggregate var_pop on columns */
export type DomainRegistration_Var_Pop_Fields = {
  __typename?: 'DomainRegistration_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  years?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "DomainRegistration" */
export type DomainRegistration_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  years?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type DomainRegistration_Var_Samp_Fields = {
  __typename?: 'DomainRegistration_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  years?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "DomainRegistration" */
export type DomainRegistration_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  years?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type DomainRegistration_Variance_Fields = {
  __typename?: 'DomainRegistration_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  years?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "DomainRegistration" */
export type DomainRegistration_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  years?: InputMaybe<Order_By>;
};

/** columns and relationships of "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects = {
  __typename?: 'DomainRegistrationsOnProjects';
  /** An object relationship */
  DomainRegistration: DomainRegistration;
  /** An object relationship */
  Project: Project;
  domainRegistrationId: Scalars['Int']['output'];
  projectId: Scalars['uuid']['output'];
};

/** aggregated selection of "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Aggregate = {
  __typename?: 'DomainRegistrationsOnProjects_aggregate';
  aggregate?: Maybe<DomainRegistrationsOnProjects_Aggregate_Fields>;
  nodes: Array<DomainRegistrationsOnProjects>;
};

export type DomainRegistrationsOnProjects_Aggregate_Bool_Exp = {
  count?: InputMaybe<DomainRegistrationsOnProjects_Aggregate_Bool_Exp_Count>;
};

export type DomainRegistrationsOnProjects_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DomainRegistrationsOnProjects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Aggregate_Fields = {
  __typename?: 'DomainRegistrationsOnProjects_aggregate_fields';
  avg?: Maybe<DomainRegistrationsOnProjects_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<DomainRegistrationsOnProjects_Max_Fields>;
  min?: Maybe<DomainRegistrationsOnProjects_Min_Fields>;
  stddev?: Maybe<DomainRegistrationsOnProjects_Stddev_Fields>;
  stddev_pop?: Maybe<DomainRegistrationsOnProjects_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<DomainRegistrationsOnProjects_Stddev_Samp_Fields>;
  sum?: Maybe<DomainRegistrationsOnProjects_Sum_Fields>;
  var_pop?: Maybe<DomainRegistrationsOnProjects_Var_Pop_Fields>;
  var_samp?: Maybe<DomainRegistrationsOnProjects_Var_Samp_Fields>;
  variance?: Maybe<DomainRegistrationsOnProjects_Variance_Fields>;
};

/** aggregate fields of "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DomainRegistrationsOnProjects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Aggregate_Order_By = {
  avg?: InputMaybe<DomainRegistrationsOnProjects_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<DomainRegistrationsOnProjects_Max_Order_By>;
  min?: InputMaybe<DomainRegistrationsOnProjects_Min_Order_By>;
  stddev?: InputMaybe<DomainRegistrationsOnProjects_Stddev_Order_By>;
  stddev_pop?: InputMaybe<DomainRegistrationsOnProjects_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<DomainRegistrationsOnProjects_Stddev_Samp_Order_By>;
  sum?: InputMaybe<DomainRegistrationsOnProjects_Sum_Order_By>;
  var_pop?: InputMaybe<DomainRegistrationsOnProjects_Var_Pop_Order_By>;
  var_samp?: InputMaybe<DomainRegistrationsOnProjects_Var_Samp_Order_By>;
  variance?: InputMaybe<DomainRegistrationsOnProjects_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Arr_Rel_Insert_Input = {
  data: Array<DomainRegistrationsOnProjects_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DomainRegistrationsOnProjects_On_Conflict>;
};

/** aggregate avg on columns */
export type DomainRegistrationsOnProjects_Avg_Fields = {
  __typename?: 'DomainRegistrationsOnProjects_avg_fields';
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Avg_Order_By = {
  domainRegistrationId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "DomainRegistrationsOnProjects". All fields are combined with a logical 'AND'. */
export type DomainRegistrationsOnProjects_Bool_Exp = {
  DomainRegistration?: InputMaybe<DomainRegistration_Bool_Exp>;
  Project?: InputMaybe<Project_Bool_Exp>;
  _and?: InputMaybe<Array<DomainRegistrationsOnProjects_Bool_Exp>>;
  _not?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
  _or?: InputMaybe<Array<DomainRegistrationsOnProjects_Bool_Exp>>;
  domainRegistrationId?: InputMaybe<Int_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "DomainRegistrationsOnProjects" */
export enum DomainRegistrationsOnProjects_Constraint {
  /** unique or primary key constraint on columns "domainRegistrationId" */
  DomainRegistrationsOnProjectsDomainRegistrationIdKey = 'DomainRegistrationsOnProjects_domainRegistrationId_key',
  /** unique or primary key constraint on columns "projectId" */
  DomainRegistrationsOnProjectsProjectIdKey = 'DomainRegistrationsOnProjects_projectId_key',
}

/** input type for incrementing numeric columns in table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Inc_Input = {
  domainRegistrationId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Insert_Input = {
  DomainRegistration?: InputMaybe<DomainRegistration_Obj_Rel_Insert_Input>;
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  domainRegistrationId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type DomainRegistrationsOnProjects_Max_Fields = {
  __typename?: 'DomainRegistrationsOnProjects_max_fields';
  domainRegistrationId?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Max_Order_By = {
  domainRegistrationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type DomainRegistrationsOnProjects_Min_Fields = {
  __typename?: 'DomainRegistrationsOnProjects_min_fields';
  domainRegistrationId?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Min_Order_By = {
  domainRegistrationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Mutation_Response = {
  __typename?: 'DomainRegistrationsOnProjects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<DomainRegistrationsOnProjects>;
};

/** on_conflict condition type for table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_On_Conflict = {
  constraint: DomainRegistrationsOnProjects_Constraint;
  update_columns?: Array<DomainRegistrationsOnProjects_Update_Column>;
  where?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
};

/** Ordering options when selecting data from "DomainRegistrationsOnProjects". */
export type DomainRegistrationsOnProjects_Order_By = {
  DomainRegistration?: InputMaybe<DomainRegistration_Order_By>;
  Project?: InputMaybe<Project_Order_By>;
  domainRegistrationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** select columns of table "DomainRegistrationsOnProjects" */
export enum DomainRegistrationsOnProjects_Select_Column {
  /** column name */
  DomainRegistrationId = 'domainRegistrationId',
  /** column name */
  ProjectId = 'projectId',
}

/** input type for updating data in table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Set_Input = {
  domainRegistrationId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type DomainRegistrationsOnProjects_Stddev_Fields = {
  __typename?: 'DomainRegistrationsOnProjects_stddev_fields';
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Stddev_Order_By = {
  domainRegistrationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type DomainRegistrationsOnProjects_Stddev_Pop_Fields = {
  __typename?: 'DomainRegistrationsOnProjects_stddev_pop_fields';
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Stddev_Pop_Order_By = {
  domainRegistrationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type DomainRegistrationsOnProjects_Stddev_Samp_Fields = {
  __typename?: 'DomainRegistrationsOnProjects_stddev_samp_fields';
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Stddev_Samp_Order_By = {
  domainRegistrationId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DomainRegistrationsOnProjects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DomainRegistrationsOnProjects_Stream_Cursor_Value_Input = {
  domainRegistrationId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type DomainRegistrationsOnProjects_Sum_Fields = {
  __typename?: 'DomainRegistrationsOnProjects_sum_fields';
  domainRegistrationId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Sum_Order_By = {
  domainRegistrationId?: InputMaybe<Order_By>;
};

/** update columns of table "DomainRegistrationsOnProjects" */
export enum DomainRegistrationsOnProjects_Update_Column {
  /** column name */
  DomainRegistrationId = 'domainRegistrationId',
  /** column name */
  ProjectId = 'projectId',
}

export type DomainRegistrationsOnProjects_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DomainRegistrationsOnProjects_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DomainRegistrationsOnProjects_Set_Input>;
  /** filter the rows which have to be updated */
  where: DomainRegistrationsOnProjects_Bool_Exp;
};

/** aggregate var_pop on columns */
export type DomainRegistrationsOnProjects_Var_Pop_Fields = {
  __typename?: 'DomainRegistrationsOnProjects_var_pop_fields';
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Var_Pop_Order_By = {
  domainRegistrationId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type DomainRegistrationsOnProjects_Var_Samp_Fields = {
  __typename?: 'DomainRegistrationsOnProjects_var_samp_fields';
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Var_Samp_Order_By = {
  domainRegistrationId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type DomainRegistrationsOnProjects_Variance_Fields = {
  __typename?: 'DomainRegistrationsOnProjects_variance_fields';
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "DomainRegistrationsOnProjects" */
export type DomainRegistrationsOnProjects_Variance_Order_By = {
  domainRegistrationId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Donation" */
export type Donation = {
  __typename?: 'Donation';
  /** An array relationship */
  Payments: Array<Payment>;
  /** An aggregate relationship */
  Payments_aggregate: Payment_Aggregate;
  /** An object relationship */
  User: User;
  amount: Scalars['float8']['output'];
  createdAt: Scalars['timestamp']['output'];
  id: Scalars['Int']['output'];
  status: Scalars['DonationStatus']['output'];
  type: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

/** columns and relationships of "Donation" */
export type DonationPaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

/** columns and relationships of "Donation" */
export type DonationPayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

/** Boolean expression to compare columns of type "DonationStatus". All fields are combined with logical 'AND'. */
export type DonationStatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['DonationStatus']['input']>;
  _gt?: InputMaybe<Scalars['DonationStatus']['input']>;
  _gte?: InputMaybe<Scalars['DonationStatus']['input']>;
  _in?: InputMaybe<Array<Scalars['DonationStatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['DonationStatus']['input']>;
  _lte?: InputMaybe<Scalars['DonationStatus']['input']>;
  _neq?: InputMaybe<Scalars['DonationStatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['DonationStatus']['input']>>;
};

/** aggregated selection of "Donation" */
export type Donation_Aggregate = {
  __typename?: 'Donation_aggregate';
  aggregate?: Maybe<Donation_Aggregate_Fields>;
  nodes: Array<Donation>;
};

export type Donation_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Donation_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Donation_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Donation_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Donation_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Donation_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Donation_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Donation_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Donation_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Donation_Aggregate_Bool_Exp_Var_Samp>;
};

export type Donation_Aggregate_Bool_Exp_Avg = {
  arguments: Donation_Select_Column_Donation_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Donation_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Donation_Aggregate_Bool_Exp_Corr = {
  arguments: Donation_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Donation_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Donation_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Donation_Select_Column_Donation_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Donation_Select_Column_Donation_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Donation_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Donation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Donation_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Donation_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Donation_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Donation_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Donation_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Donation_Select_Column_Donation_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Donation_Select_Column_Donation_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Donation_Aggregate_Bool_Exp_Max = {
  arguments: Donation_Select_Column_Donation_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Donation_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Donation_Aggregate_Bool_Exp_Min = {
  arguments: Donation_Select_Column_Donation_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Donation_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Donation_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Donation_Select_Column_Donation_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Donation_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Donation_Aggregate_Bool_Exp_Sum = {
  arguments: Donation_Select_Column_Donation_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Donation_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Donation_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Donation_Select_Column_Donation_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Donation_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "Donation" */
export type Donation_Aggregate_Fields = {
  __typename?: 'Donation_aggregate_fields';
  avg?: Maybe<Donation_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Donation_Max_Fields>;
  min?: Maybe<Donation_Min_Fields>;
  stddev?: Maybe<Donation_Stddev_Fields>;
  stddev_pop?: Maybe<Donation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Donation_Stddev_Samp_Fields>;
  sum?: Maybe<Donation_Sum_Fields>;
  var_pop?: Maybe<Donation_Var_Pop_Fields>;
  var_samp?: Maybe<Donation_Var_Samp_Fields>;
  variance?: Maybe<Donation_Variance_Fields>;
};

/** aggregate fields of "Donation" */
export type Donation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Donation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Donation" */
export type Donation_Aggregate_Order_By = {
  avg?: InputMaybe<Donation_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Donation_Max_Order_By>;
  min?: InputMaybe<Donation_Min_Order_By>;
  stddev?: InputMaybe<Donation_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Donation_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Donation_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Donation_Sum_Order_By>;
  var_pop?: InputMaybe<Donation_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Donation_Var_Samp_Order_By>;
  variance?: InputMaybe<Donation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Donation" */
export type Donation_Arr_Rel_Insert_Input = {
  data: Array<Donation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Donation_On_Conflict>;
};

/** aggregate avg on columns */
export type Donation_Avg_Fields = {
  __typename?: 'Donation_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Donation" */
export type Donation_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Donation". All fields are combined with a logical 'AND'. */
export type Donation_Bool_Exp = {
  Payments?: InputMaybe<Payment_Bool_Exp>;
  Payments_aggregate?: InputMaybe<Payment_Aggregate_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Donation_Bool_Exp>>;
  _not?: InputMaybe<Donation_Bool_Exp>;
  _or?: InputMaybe<Array<Donation_Bool_Exp>>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<DonationStatus_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Donation" */
export enum Donation_Constraint {
  /** unique or primary key constraint on columns "id" */
  DonationPkey = 'Donation_pkey',
}

/** input type for incrementing numeric columns in table "Donation" */
export type Donation_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Donation" */
export type Donation_Insert_Input = {
  Payments?: InputMaybe<Payment_Arr_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['DonationStatus']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Donation_Max_Fields = {
  __typename?: 'Donation_max_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['DonationStatus']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "Donation" */
export type Donation_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Donation_Min_Fields = {
  __typename?: 'Donation_min_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['DonationStatus']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "Donation" */
export type Donation_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Donation" */
export type Donation_Mutation_Response = {
  __typename?: 'Donation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Donation>;
};

/** input type for inserting object relation for remote table "Donation" */
export type Donation_Obj_Rel_Insert_Input = {
  data: Donation_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Donation_On_Conflict>;
};

/** on_conflict condition type for table "Donation" */
export type Donation_On_Conflict = {
  constraint: Donation_Constraint;
  update_columns?: Array<Donation_Update_Column>;
  where?: InputMaybe<Donation_Bool_Exp>;
};

/** Ordering options when selecting data from "Donation". */
export type Donation_Order_By = {
  Payments_aggregate?: InputMaybe<Payment_Aggregate_Order_By>;
  User?: InputMaybe<User_Order_By>;
  amount?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Donation */
export type Donation_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Donation" */
export enum Donation_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
}

/** select "Donation_aggregate_bool_exp_avg_arguments_columns" columns of table "Donation" */
export enum Donation_Select_Column_Donation_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "Donation_aggregate_bool_exp_corr_arguments_columns" columns of table "Donation" */
export enum Donation_Select_Column_Donation_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "Donation_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "Donation" */
export enum Donation_Select_Column_Donation_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "Donation_aggregate_bool_exp_max_arguments_columns" columns of table "Donation" */
export enum Donation_Select_Column_Donation_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "Donation_aggregate_bool_exp_min_arguments_columns" columns of table "Donation" */
export enum Donation_Select_Column_Donation_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "Donation_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "Donation" */
export enum Donation_Select_Column_Donation_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "Donation_aggregate_bool_exp_sum_arguments_columns" columns of table "Donation" */
export enum Donation_Select_Column_Donation_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "Donation_aggregate_bool_exp_var_samp_arguments_columns" columns of table "Donation" */
export enum Donation_Select_Column_Donation_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** input type for updating data in table "Donation" */
export type Donation_Set_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['DonationStatus']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Donation_Stddev_Fields = {
  __typename?: 'Donation_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Donation" */
export type Donation_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Donation_Stddev_Pop_Fields = {
  __typename?: 'Donation_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Donation" */
export type Donation_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Donation_Stddev_Samp_Fields = {
  __typename?: 'Donation_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Donation" */
export type Donation_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Donation" */
export type Donation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Donation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Donation_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['DonationStatus']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Donation_Sum_Fields = {
  __typename?: 'Donation_sum_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Donation" */
export type Donation_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "Donation" */
export enum Donation_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
}

export type Donation_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Donation_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Donation_Set_Input>;
  /** filter the rows which have to be updated */
  where: Donation_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Donation_Var_Pop_Fields = {
  __typename?: 'Donation_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Donation" */
export type Donation_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Donation_Var_Samp_Fields = {
  __typename?: 'Donation_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Donation" */
export type Donation_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Donation_Variance_Fields = {
  __typename?: 'Donation_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Donation" */
export type Donation_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "FAQ" */
export type Faq = {
  __typename?: 'FAQ';
  answer: Scalars['String']['output'];
  createdAt: Scalars['timestamp']['output'];
  id: Scalars['Int']['output'];
  question: Scalars['String']['output'];
};

/** aggregated selection of "FAQ" */
export type Faq_Aggregate = {
  __typename?: 'FAQ_aggregate';
  aggregate?: Maybe<Faq_Aggregate_Fields>;
  nodes: Array<Faq>;
};

/** aggregate fields of "FAQ" */
export type Faq_Aggregate_Fields = {
  __typename?: 'FAQ_aggregate_fields';
  avg?: Maybe<Faq_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Faq_Max_Fields>;
  min?: Maybe<Faq_Min_Fields>;
  stddev?: Maybe<Faq_Stddev_Fields>;
  stddev_pop?: Maybe<Faq_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Faq_Stddev_Samp_Fields>;
  sum?: Maybe<Faq_Sum_Fields>;
  var_pop?: Maybe<Faq_Var_Pop_Fields>;
  var_samp?: Maybe<Faq_Var_Samp_Fields>;
  variance?: Maybe<Faq_Variance_Fields>;
};

/** aggregate fields of "FAQ" */
export type Faq_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Faq_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Faq_Avg_Fields = {
  __typename?: 'FAQ_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "FAQ". All fields are combined with a logical 'AND'. */
export type Faq_Bool_Exp = {
  _and?: InputMaybe<Array<Faq_Bool_Exp>>;
  _not?: InputMaybe<Faq_Bool_Exp>;
  _or?: InputMaybe<Array<Faq_Bool_Exp>>;
  answer?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  question?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "FAQ" */
export enum Faq_Constraint {
  /** unique or primary key constraint on columns "id" */
  FaqPkey = 'FAQ_pkey',
}

/** input type for incrementing numeric columns in table "FAQ" */
export type Faq_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "FAQ" */
export type Faq_Insert_Input = {
  answer?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Faq_Max_Fields = {
  __typename?: 'FAQ_max_fields';
  answer?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  question?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Faq_Min_Fields = {
  __typename?: 'FAQ_min_fields';
  answer?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  question?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "FAQ" */
export type Faq_Mutation_Response = {
  __typename?: 'FAQ_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Faq>;
};

/** on_conflict condition type for table "FAQ" */
export type Faq_On_Conflict = {
  constraint: Faq_Constraint;
  update_columns?: Array<Faq_Update_Column>;
  where?: InputMaybe<Faq_Bool_Exp>;
};

/** Ordering options when selecting data from "FAQ". */
export type Faq_Order_By = {
  answer?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question?: InputMaybe<Order_By>;
};

/** primary key columns input for table: FAQ */
export type Faq_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "FAQ" */
export enum Faq_Select_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Question = 'question',
}

/** input type for updating data in table "FAQ" */
export type Faq_Set_Input = {
  answer?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Faq_Stddev_Fields = {
  __typename?: 'FAQ_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Faq_Stddev_Pop_Fields = {
  __typename?: 'FAQ_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Faq_Stddev_Samp_Fields = {
  __typename?: 'FAQ_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "FAQ" */
export type Faq_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Faq_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Faq_Stream_Cursor_Value_Input = {
  answer?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Faq_Sum_Fields = {
  __typename?: 'FAQ_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "FAQ" */
export enum Faq_Update_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Question = 'question',
}

export type Faq_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Faq_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Faq_Set_Input>;
  /** filter the rows which have to be updated */
  where: Faq_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Faq_Var_Pop_Fields = {
  __typename?: 'FAQ_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Faq_Var_Samp_Fields = {
  __typename?: 'FAQ_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Faq_Variance_Fields = {
  __typename?: 'FAQ_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "Gender". All fields are combined with logical 'AND'. */
export type Gender_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Gender']['input']>;
  _gt?: InputMaybe<Scalars['Gender']['input']>;
  _gte?: InputMaybe<Scalars['Gender']['input']>;
  _in?: InputMaybe<Array<Scalars['Gender']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Gender']['input']>;
  _lte?: InputMaybe<Scalars['Gender']['input']>;
  _neq?: InputMaybe<Scalars['Gender']['input']>;
  _nin?: InputMaybe<Array<Scalars['Gender']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "IntellectualPropertyType". All fields are combined with logical 'AND'. */
export type IntellectualPropertyType_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['IntellectualPropertyType']['input']>;
  _gt?: InputMaybe<Scalars['IntellectualPropertyType']['input']>;
  _gte?: InputMaybe<Scalars['IntellectualPropertyType']['input']>;
  _in?: InputMaybe<Array<Scalars['IntellectualPropertyType']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['IntellectualPropertyType']['input']>;
  _lte?: InputMaybe<Scalars['IntellectualPropertyType']['input']>;
  _neq?: InputMaybe<Scalars['IntellectualPropertyType']['input']>;
  _nin?: InputMaybe<Array<Scalars['IntellectualPropertyType']['input']>>;
};

/** columns and relationships of "LegalContent" */
export type LegalContent = {
  __typename?: 'LegalContent';
  body: Scalars['String']['output'];
  createdAt: Scalars['timestamp']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['timestamp']['output'];
};

/** aggregated selection of "LegalContent" */
export type LegalContent_Aggregate = {
  __typename?: 'LegalContent_aggregate';
  aggregate?: Maybe<LegalContent_Aggregate_Fields>;
  nodes: Array<LegalContent>;
};

/** aggregate fields of "LegalContent" */
export type LegalContent_Aggregate_Fields = {
  __typename?: 'LegalContent_aggregate_fields';
  avg?: Maybe<LegalContent_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<LegalContent_Max_Fields>;
  min?: Maybe<LegalContent_Min_Fields>;
  stddev?: Maybe<LegalContent_Stddev_Fields>;
  stddev_pop?: Maybe<LegalContent_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<LegalContent_Stddev_Samp_Fields>;
  sum?: Maybe<LegalContent_Sum_Fields>;
  var_pop?: Maybe<LegalContent_Var_Pop_Fields>;
  var_samp?: Maybe<LegalContent_Var_Samp_Fields>;
  variance?: Maybe<LegalContent_Variance_Fields>;
};

/** aggregate fields of "LegalContent" */
export type LegalContent_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<LegalContent_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type LegalContent_Avg_Fields = {
  __typename?: 'LegalContent_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "LegalContent". All fields are combined with a logical 'AND'. */
export type LegalContent_Bool_Exp = {
  _and?: InputMaybe<Array<LegalContent_Bool_Exp>>;
  _not?: InputMaybe<LegalContent_Bool_Exp>;
  _or?: InputMaybe<Array<LegalContent_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "LegalContent" */
export enum LegalContent_Constraint {
  /** unique or primary key constraint on columns "id" */
  LegalContentPkey = 'LegalContent_pkey',
}

/** input type for incrementing numeric columns in table "LegalContent" */
export type LegalContent_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "LegalContent" */
export type LegalContent_Insert_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type LegalContent_Max_Fields = {
  __typename?: 'LegalContent_max_fields';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type LegalContent_Min_Fields = {
  __typename?: 'LegalContent_min_fields';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "LegalContent" */
export type LegalContent_Mutation_Response = {
  __typename?: 'LegalContent_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<LegalContent>;
};

/** on_conflict condition type for table "LegalContent" */
export type LegalContent_On_Conflict = {
  constraint: LegalContent_Constraint;
  update_columns?: Array<LegalContent_Update_Column>;
  where?: InputMaybe<LegalContent_Bool_Exp>;
};

/** Ordering options when selecting data from "LegalContent". */
export type LegalContent_Order_By = {
  body?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: LegalContent */
export type LegalContent_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "LegalContent" */
export enum LegalContent_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "LegalContent" */
export type LegalContent_Set_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type LegalContent_Stddev_Fields = {
  __typename?: 'LegalContent_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type LegalContent_Stddev_Pop_Fields = {
  __typename?: 'LegalContent_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type LegalContent_Stddev_Samp_Fields = {
  __typename?: 'LegalContent_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "LegalContent" */
export type LegalContent_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: LegalContent_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LegalContent_Stream_Cursor_Value_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type LegalContent_Sum_Fields = {
  __typename?: 'LegalContent_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "LegalContent" */
export enum LegalContent_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type LegalContent_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<LegalContent_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<LegalContent_Set_Input>;
  /** filter the rows which have to be updated */
  where: LegalContent_Bool_Exp;
};

/** aggregate var_pop on columns */
export type LegalContent_Var_Pop_Fields = {
  __typename?: 'LegalContent_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type LegalContent_Var_Samp_Fields = {
  __typename?: 'LegalContent_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type LegalContent_Variance_Fields = {
  __typename?: 'LegalContent_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "Media" */
export type Media = {
  __typename?: 'Media';
  /** An object relationship */
  Project: Project;
  id: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  projectId: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
  type: Scalars['MediaVariation']['output'];
  viewTypes?: Maybe<Array<Scalars['String']['output']>>;
};

/** Boolean expression to compare columns of type "MediaVariation". All fields are combined with logical 'AND'. */
export type MediaVariation_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['MediaVariation']['input']>;
  _gt?: InputMaybe<Scalars['MediaVariation']['input']>;
  _gte?: InputMaybe<Scalars['MediaVariation']['input']>;
  _in?: InputMaybe<Array<Scalars['MediaVariation']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['MediaVariation']['input']>;
  _lte?: InputMaybe<Scalars['MediaVariation']['input']>;
  _neq?: InputMaybe<Scalars['MediaVariation']['input']>;
  _nin?: InputMaybe<Array<Scalars['MediaVariation']['input']>>;
};

/** aggregated selection of "Media" */
export type Media_Aggregate = {
  __typename?: 'Media_aggregate';
  aggregate?: Maybe<Media_Aggregate_Fields>;
  nodes: Array<Media>;
};

export type Media_Aggregate_Bool_Exp = {
  count?: InputMaybe<Media_Aggregate_Bool_Exp_Count>;
};

export type Media_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Media_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Media" */
export type Media_Aggregate_Fields = {
  __typename?: 'Media_aggregate_fields';
  avg?: Maybe<Media_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Media_Max_Fields>;
  min?: Maybe<Media_Min_Fields>;
  stddev?: Maybe<Media_Stddev_Fields>;
  stddev_pop?: Maybe<Media_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Media_Stddev_Samp_Fields>;
  sum?: Maybe<Media_Sum_Fields>;
  var_pop?: Maybe<Media_Var_Pop_Fields>;
  var_samp?: Maybe<Media_Var_Samp_Fields>;
  variance?: Maybe<Media_Variance_Fields>;
};

/** aggregate fields of "Media" */
export type Media_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Media" */
export type Media_Aggregate_Order_By = {
  avg?: InputMaybe<Media_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Media_Max_Order_By>;
  min?: InputMaybe<Media_Min_Order_By>;
  stddev?: InputMaybe<Media_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Media_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Media_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Media_Sum_Order_By>;
  var_pop?: InputMaybe<Media_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Media_Var_Samp_Order_By>;
  variance?: InputMaybe<Media_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Media" */
export type Media_Arr_Rel_Insert_Input = {
  data: Array<Media_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Media_On_Conflict>;
};

/** aggregate avg on columns */
export type Media_Avg_Fields = {
  __typename?: 'Media_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Media" */
export type Media_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Media". All fields are combined with a logical 'AND'. */
export type Media_Bool_Exp = {
  Project?: InputMaybe<Project_Bool_Exp>;
  _and?: InputMaybe<Array<Media_Bool_Exp>>;
  _not?: InputMaybe<Media_Bool_Exp>;
  _or?: InputMaybe<Array<Media_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<MediaVariation_Comparison_Exp>;
  viewTypes?: InputMaybe<String_Array_Comparison_Exp>;
};

/** unique or primary key constraints on table "Media" */
export enum Media_Constraint {
  /** unique or primary key constraint on columns "id" */
  MediaPkey = 'Media_pkey',
}

/** input type for incrementing numeric columns in table "Media" */
export type Media_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Media" */
export type Media_Insert_Input = {
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['MediaVariation']['input']>;
  viewTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** aggregate max on columns */
export type Media_Max_Fields = {
  __typename?: 'Media_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['MediaVariation']['output']>;
  viewTypes?: Maybe<Array<Scalars['String']['output']>>;
};

/** order by max() on columns of table "Media" */
export type Media_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  viewTypes?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Media_Min_Fields = {
  __typename?: 'Media_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['MediaVariation']['output']>;
  viewTypes?: Maybe<Array<Scalars['String']['output']>>;
};

/** order by min() on columns of table "Media" */
export type Media_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  viewTypes?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Media" */
export type Media_Mutation_Response = {
  __typename?: 'Media_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Media>;
};

/** on_conflict condition type for table "Media" */
export type Media_On_Conflict = {
  constraint: Media_Constraint;
  update_columns?: Array<Media_Update_Column>;
  where?: InputMaybe<Media_Bool_Exp>;
};

/** Ordering options when selecting data from "Media". */
export type Media_Order_By = {
  Project?: InputMaybe<Project_Order_By>;
  id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  viewTypes?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Media */
export type Media_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Media" */
export enum Media_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Path = 'path',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  ViewTypes = 'viewTypes',
}

/** input type for updating data in table "Media" */
export type Media_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['MediaVariation']['input']>;
  viewTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** aggregate stddev on columns */
export type Media_Stddev_Fields = {
  __typename?: 'Media_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Media" */
export type Media_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Media_Stddev_Pop_Fields = {
  __typename?: 'Media_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Media" */
export type Media_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Media_Stddev_Samp_Fields = {
  __typename?: 'Media_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Media" */
export type Media_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Media" */
export type Media_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Media_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Media_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['MediaVariation']['input']>;
  viewTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** aggregate sum on columns */
export type Media_Sum_Fields = {
  __typename?: 'Media_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Media" */
export type Media_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "Media" */
export enum Media_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Path = 'path',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  ViewTypes = 'viewTypes',
}

export type Media_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Media_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Media_Set_Input>;
  /** filter the rows which have to be updated */
  where: Media_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Media_Var_Pop_Fields = {
  __typename?: 'Media_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Media" */
export type Media_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Media_Var_Samp_Fields = {
  __typename?: 'Media_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Media" */
export type Media_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Media_Variance_Fields = {
  __typename?: 'Media_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Media" */
export type Media_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "Menu" */
export type Menu = {
  __typename?: 'Menu';
  /** An object relationship */
  Menu?: Maybe<Menu>;
  /** An array relationship */
  Menus: Array<Menu>;
  /** An aggregate relationship */
  Menus_aggregate: Menu_Aggregate;
  /** An object relationship */
  Page?: Maybe<Page>;
  /** An object relationship */
  Project: Project;
  id: Scalars['Int']['output'];
  label: Scalars['String']['output'];
  link?: Maybe<Scalars['String']['output']>;
  pageId?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  projectId: Scalars['uuid']['output'];
};

/** columns and relationships of "Menu" */
export type MenuMenusArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** columns and relationships of "Menu" */
export type MenuMenus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** aggregated selection of "Menu" */
export type Menu_Aggregate = {
  __typename?: 'Menu_aggregate';
  aggregate?: Maybe<Menu_Aggregate_Fields>;
  nodes: Array<Menu>;
};

export type Menu_Aggregate_Bool_Exp = {
  count?: InputMaybe<Menu_Aggregate_Bool_Exp_Count>;
};

export type Menu_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Menu_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Menu_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Menu" */
export type Menu_Aggregate_Fields = {
  __typename?: 'Menu_aggregate_fields';
  avg?: Maybe<Menu_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Menu_Max_Fields>;
  min?: Maybe<Menu_Min_Fields>;
  stddev?: Maybe<Menu_Stddev_Fields>;
  stddev_pop?: Maybe<Menu_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Menu_Stddev_Samp_Fields>;
  sum?: Maybe<Menu_Sum_Fields>;
  var_pop?: Maybe<Menu_Var_Pop_Fields>;
  var_samp?: Maybe<Menu_Var_Samp_Fields>;
  variance?: Maybe<Menu_Variance_Fields>;
};

/** aggregate fields of "Menu" */
export type Menu_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Menu_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Menu" */
export type Menu_Aggregate_Order_By = {
  avg?: InputMaybe<Menu_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Menu_Max_Order_By>;
  min?: InputMaybe<Menu_Min_Order_By>;
  stddev?: InputMaybe<Menu_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Menu_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Menu_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Menu_Sum_Order_By>;
  var_pop?: InputMaybe<Menu_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Menu_Var_Samp_Order_By>;
  variance?: InputMaybe<Menu_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Menu" */
export type Menu_Arr_Rel_Insert_Input = {
  data: Array<Menu_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** aggregate avg on columns */
export type Menu_Avg_Fields = {
  __typename?: 'Menu_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Menu" */
export type Menu_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Menu". All fields are combined with a logical 'AND'. */
export type Menu_Bool_Exp = {
  Menu?: InputMaybe<Menu_Bool_Exp>;
  Menus?: InputMaybe<Menu_Bool_Exp>;
  Menus_aggregate?: InputMaybe<Menu_Aggregate_Bool_Exp>;
  Page?: InputMaybe<Page_Bool_Exp>;
  Project?: InputMaybe<Project_Bool_Exp>;
  _and?: InputMaybe<Array<Menu_Bool_Exp>>;
  _not?: InputMaybe<Menu_Bool_Exp>;
  _or?: InputMaybe<Array<Menu_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  pageId?: InputMaybe<Int_Comparison_Exp>;
  parentId?: InputMaybe<Int_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "Menu" */
export enum Menu_Constraint {
  /** unique or primary key constraint on columns "id" */
  MenuPkey = 'Menu_pkey',
}

/** input type for incrementing numeric columns in table "Menu" */
export type Menu_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  pageId?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Menu" */
export type Menu_Insert_Input = {
  Menu?: InputMaybe<Menu_Obj_Rel_Insert_Input>;
  Menus?: InputMaybe<Menu_Arr_Rel_Insert_Input>;
  Page?: InputMaybe<Page_Obj_Rel_Insert_Input>;
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  pageId?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Menu_Max_Fields = {
  __typename?: 'Menu_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  pageId?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "Menu" */
export type Menu_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Menu_Min_Fields = {
  __typename?: 'Menu_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  pageId?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "Menu" */
export type Menu_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Menu" */
export type Menu_Mutation_Response = {
  __typename?: 'Menu_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Menu>;
};

/** input type for inserting object relation for remote table "Menu" */
export type Menu_Obj_Rel_Insert_Input = {
  data: Menu_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** on_conflict condition type for table "Menu" */
export type Menu_On_Conflict = {
  constraint: Menu_Constraint;
  update_columns?: Array<Menu_Update_Column>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** Ordering options when selecting data from "Menu". */
export type Menu_Order_By = {
  Menu?: InputMaybe<Menu_Order_By>;
  Menus_aggregate?: InputMaybe<Menu_Aggregate_Order_By>;
  Page?: InputMaybe<Page_Order_By>;
  Project?: InputMaybe<Project_Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Menu */
export type Menu_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Menu" */
export enum Menu_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Link = 'link',
  /** column name */
  PageId = 'pageId',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  ProjectId = 'projectId',
}

/** input type for updating data in table "Menu" */
export type Menu_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  pageId?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Menu_Stddev_Fields = {
  __typename?: 'Menu_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Menu" */
export type Menu_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Menu_Stddev_Pop_Fields = {
  __typename?: 'Menu_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Menu" */
export type Menu_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Menu_Stddev_Samp_Fields = {
  __typename?: 'Menu_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Menu" */
export type Menu_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Menu" */
export type Menu_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Menu_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Menu_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  pageId?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Menu_Sum_Fields = {
  __typename?: 'Menu_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  pageId?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Menu" */
export type Menu_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** update columns of table "Menu" */
export enum Menu_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Link = 'link',
  /** column name */
  PageId = 'pageId',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  ProjectId = 'projectId',
}

export type Menu_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Menu_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Menu_Set_Input>;
  /** filter the rows which have to be updated */
  where: Menu_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Menu_Var_Pop_Fields = {
  __typename?: 'Menu_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Menu" */
export type Menu_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Menu_Var_Samp_Fields = {
  __typename?: 'Menu_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Menu" */
export type Menu_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Menu_Variance_Fields = {
  __typename?: 'Menu_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Menu" */
export type Menu_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Notification" */
export type Notification = {
  __typename?: 'Notification';
  /** An object relationship */
  Admin?: Maybe<Admin>;
  /** An object relationship */
  User?: Maybe<User>;
  adminId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamp']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  readAt?: Maybe<Scalars['timestamp']['output']>;
  title: Scalars['String']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

/** columns and relationships of "NotificationTemplate" */
export type NotificationTemplate = {
  __typename?: 'NotificationTemplate';
  /** An array relationship */
  NotificationTemplateUsers: Array<NotificationTemplateUser>;
  /** An aggregate relationship */
  NotificationTemplateUsers_aggregate: NotificationTemplateUser_Aggregate;
  createdAt: Scalars['timestamp']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  privacy: Scalars['NotificationTemplatePrivacy']['output'];
  title: Scalars['String']['output'];
};

/** columns and relationships of "NotificationTemplate" */
export type NotificationTemplateNotificationTemplateUsersArgs = {
  distinct_on?: InputMaybe<Array<NotificationTemplateUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTemplateUser_Order_By>>;
  where?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
};

/** columns and relationships of "NotificationTemplate" */
export type NotificationTemplateNotificationTemplateUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationTemplateUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTemplateUser_Order_By>>;
  where?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
};

/** Boolean expression to compare columns of type "NotificationTemplatePrivacy". All fields are combined with logical 'AND'. */
export type NotificationTemplatePrivacy_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['NotificationTemplatePrivacy']['input']>;
  _gt?: InputMaybe<Scalars['NotificationTemplatePrivacy']['input']>;
  _gte?: InputMaybe<Scalars['NotificationTemplatePrivacy']['input']>;
  _in?: InputMaybe<Array<Scalars['NotificationTemplatePrivacy']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['NotificationTemplatePrivacy']['input']>;
  _lte?: InputMaybe<Scalars['NotificationTemplatePrivacy']['input']>;
  _neq?: InputMaybe<Scalars['NotificationTemplatePrivacy']['input']>;
  _nin?: InputMaybe<Array<Scalars['NotificationTemplatePrivacy']['input']>>;
};

/** columns and relationships of "NotificationTemplateUser" */
export type NotificationTemplateUser = {
  __typename?: 'NotificationTemplateUser';
  /** An object relationship */
  NotificationTemplate: NotificationTemplate;
  /** An object relationship */
  User: User;
  id: Scalars['Int']['output'];
  templateId: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

/** aggregated selection of "NotificationTemplateUser" */
export type NotificationTemplateUser_Aggregate = {
  __typename?: 'NotificationTemplateUser_aggregate';
  aggregate?: Maybe<NotificationTemplateUser_Aggregate_Fields>;
  nodes: Array<NotificationTemplateUser>;
};

export type NotificationTemplateUser_Aggregate_Bool_Exp = {
  count?: InputMaybe<NotificationTemplateUser_Aggregate_Bool_Exp_Count>;
};

export type NotificationTemplateUser_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<NotificationTemplateUser_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "NotificationTemplateUser" */
export type NotificationTemplateUser_Aggregate_Fields = {
  __typename?: 'NotificationTemplateUser_aggregate_fields';
  avg?: Maybe<NotificationTemplateUser_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<NotificationTemplateUser_Max_Fields>;
  min?: Maybe<NotificationTemplateUser_Min_Fields>;
  stddev?: Maybe<NotificationTemplateUser_Stddev_Fields>;
  stddev_pop?: Maybe<NotificationTemplateUser_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<NotificationTemplateUser_Stddev_Samp_Fields>;
  sum?: Maybe<NotificationTemplateUser_Sum_Fields>;
  var_pop?: Maybe<NotificationTemplateUser_Var_Pop_Fields>;
  var_samp?: Maybe<NotificationTemplateUser_Var_Samp_Fields>;
  variance?: Maybe<NotificationTemplateUser_Variance_Fields>;
};

/** aggregate fields of "NotificationTemplateUser" */
export type NotificationTemplateUser_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<NotificationTemplateUser_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "NotificationTemplateUser" */
export type NotificationTemplateUser_Aggregate_Order_By = {
  avg?: InputMaybe<NotificationTemplateUser_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<NotificationTemplateUser_Max_Order_By>;
  min?: InputMaybe<NotificationTemplateUser_Min_Order_By>;
  stddev?: InputMaybe<NotificationTemplateUser_Stddev_Order_By>;
  stddev_pop?: InputMaybe<NotificationTemplateUser_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<NotificationTemplateUser_Stddev_Samp_Order_By>;
  sum?: InputMaybe<NotificationTemplateUser_Sum_Order_By>;
  var_pop?: InputMaybe<NotificationTemplateUser_Var_Pop_Order_By>;
  var_samp?: InputMaybe<NotificationTemplateUser_Var_Samp_Order_By>;
  variance?: InputMaybe<NotificationTemplateUser_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "NotificationTemplateUser" */
export type NotificationTemplateUser_Arr_Rel_Insert_Input = {
  data: Array<NotificationTemplateUser_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<NotificationTemplateUser_On_Conflict>;
};

/** aggregate avg on columns */
export type NotificationTemplateUser_Avg_Fields = {
  __typename?: 'NotificationTemplateUser_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  templateId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "NotificationTemplateUser" */
export type NotificationTemplateUser_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  templateId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "NotificationTemplateUser". All fields are combined with a logical 'AND'. */
export type NotificationTemplateUser_Bool_Exp = {
  NotificationTemplate?: InputMaybe<NotificationTemplate_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<NotificationTemplateUser_Bool_Exp>>;
  _not?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
  _or?: InputMaybe<Array<NotificationTemplateUser_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  templateId?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "NotificationTemplateUser" */
export enum NotificationTemplateUser_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotificationTemplateUserPkey = 'NotificationTemplateUser_pkey',
}

/** input type for incrementing numeric columns in table "NotificationTemplateUser" */
export type NotificationTemplateUser_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  templateId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "NotificationTemplateUser" */
export type NotificationTemplateUser_Insert_Input = {
  NotificationTemplate?: InputMaybe<NotificationTemplate_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  templateId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type NotificationTemplateUser_Max_Fields = {
  __typename?: 'NotificationTemplateUser_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  templateId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "NotificationTemplateUser" */
export type NotificationTemplateUser_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  templateId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type NotificationTemplateUser_Min_Fields = {
  __typename?: 'NotificationTemplateUser_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  templateId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "NotificationTemplateUser" */
export type NotificationTemplateUser_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  templateId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "NotificationTemplateUser" */
export type NotificationTemplateUser_Mutation_Response = {
  __typename?: 'NotificationTemplateUser_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<NotificationTemplateUser>;
};

/** on_conflict condition type for table "NotificationTemplateUser" */
export type NotificationTemplateUser_On_Conflict = {
  constraint: NotificationTemplateUser_Constraint;
  update_columns?: Array<NotificationTemplateUser_Update_Column>;
  where?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
};

/** Ordering options when selecting data from "NotificationTemplateUser". */
export type NotificationTemplateUser_Order_By = {
  NotificationTemplate?: InputMaybe<NotificationTemplate_Order_By>;
  User?: InputMaybe<User_Order_By>;
  id?: InputMaybe<Order_By>;
  templateId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: NotificationTemplateUser */
export type NotificationTemplateUser_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "NotificationTemplateUser" */
export enum NotificationTemplateUser_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TemplateId = 'templateId',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "NotificationTemplateUser" */
export type NotificationTemplateUser_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  templateId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type NotificationTemplateUser_Stddev_Fields = {
  __typename?: 'NotificationTemplateUser_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  templateId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "NotificationTemplateUser" */
export type NotificationTemplateUser_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  templateId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type NotificationTemplateUser_Stddev_Pop_Fields = {
  __typename?: 'NotificationTemplateUser_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  templateId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "NotificationTemplateUser" */
export type NotificationTemplateUser_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  templateId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type NotificationTemplateUser_Stddev_Samp_Fields = {
  __typename?: 'NotificationTemplateUser_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  templateId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "NotificationTemplateUser" */
export type NotificationTemplateUser_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  templateId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "NotificationTemplateUser" */
export type NotificationTemplateUser_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: NotificationTemplateUser_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type NotificationTemplateUser_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  templateId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type NotificationTemplateUser_Sum_Fields = {
  __typename?: 'NotificationTemplateUser_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  templateId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "NotificationTemplateUser" */
export type NotificationTemplateUser_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  templateId?: InputMaybe<Order_By>;
};

/** update columns of table "NotificationTemplateUser" */
export enum NotificationTemplateUser_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TemplateId = 'templateId',
  /** column name */
  UserId = 'userId',
}

export type NotificationTemplateUser_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<NotificationTemplateUser_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<NotificationTemplateUser_Set_Input>;
  /** filter the rows which have to be updated */
  where: NotificationTemplateUser_Bool_Exp;
};

/** aggregate var_pop on columns */
export type NotificationTemplateUser_Var_Pop_Fields = {
  __typename?: 'NotificationTemplateUser_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  templateId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "NotificationTemplateUser" */
export type NotificationTemplateUser_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  templateId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type NotificationTemplateUser_Var_Samp_Fields = {
  __typename?: 'NotificationTemplateUser_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  templateId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "NotificationTemplateUser" */
export type NotificationTemplateUser_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  templateId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type NotificationTemplateUser_Variance_Fields = {
  __typename?: 'NotificationTemplateUser_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  templateId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "NotificationTemplateUser" */
export type NotificationTemplateUser_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  templateId?: InputMaybe<Order_By>;
};

/** aggregated selection of "NotificationTemplate" */
export type NotificationTemplate_Aggregate = {
  __typename?: 'NotificationTemplate_aggregate';
  aggregate?: Maybe<NotificationTemplate_Aggregate_Fields>;
  nodes: Array<NotificationTemplate>;
};

/** aggregate fields of "NotificationTemplate" */
export type NotificationTemplate_Aggregate_Fields = {
  __typename?: 'NotificationTemplate_aggregate_fields';
  avg?: Maybe<NotificationTemplate_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<NotificationTemplate_Max_Fields>;
  min?: Maybe<NotificationTemplate_Min_Fields>;
  stddev?: Maybe<NotificationTemplate_Stddev_Fields>;
  stddev_pop?: Maybe<NotificationTemplate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<NotificationTemplate_Stddev_Samp_Fields>;
  sum?: Maybe<NotificationTemplate_Sum_Fields>;
  var_pop?: Maybe<NotificationTemplate_Var_Pop_Fields>;
  var_samp?: Maybe<NotificationTemplate_Var_Samp_Fields>;
  variance?: Maybe<NotificationTemplate_Variance_Fields>;
};

/** aggregate fields of "NotificationTemplate" */
export type NotificationTemplate_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<NotificationTemplate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type NotificationTemplate_Avg_Fields = {
  __typename?: 'NotificationTemplate_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "NotificationTemplate". All fields are combined with a logical 'AND'. */
export type NotificationTemplate_Bool_Exp = {
  NotificationTemplateUsers?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
  NotificationTemplateUsers_aggregate?: InputMaybe<NotificationTemplateUser_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<NotificationTemplate_Bool_Exp>>;
  _not?: InputMaybe<NotificationTemplate_Bool_Exp>;
  _or?: InputMaybe<Array<NotificationTemplate_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  privacy?: InputMaybe<NotificationTemplatePrivacy_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "NotificationTemplate" */
export enum NotificationTemplate_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotificationTemplatePkey = 'NotificationTemplate_pkey',
}

/** input type for incrementing numeric columns in table "NotificationTemplate" */
export type NotificationTemplate_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "NotificationTemplate" */
export type NotificationTemplate_Insert_Input = {
  NotificationTemplateUsers?: InputMaybe<NotificationTemplateUser_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  privacy?: InputMaybe<Scalars['NotificationTemplatePrivacy']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type NotificationTemplate_Max_Fields = {
  __typename?: 'NotificationTemplate_max_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  privacy?: Maybe<Scalars['NotificationTemplatePrivacy']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type NotificationTemplate_Min_Fields = {
  __typename?: 'NotificationTemplate_min_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  privacy?: Maybe<Scalars['NotificationTemplatePrivacy']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "NotificationTemplate" */
export type NotificationTemplate_Mutation_Response = {
  __typename?: 'NotificationTemplate_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<NotificationTemplate>;
};

/** input type for inserting object relation for remote table "NotificationTemplate" */
export type NotificationTemplate_Obj_Rel_Insert_Input = {
  data: NotificationTemplate_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<NotificationTemplate_On_Conflict>;
};

/** on_conflict condition type for table "NotificationTemplate" */
export type NotificationTemplate_On_Conflict = {
  constraint: NotificationTemplate_Constraint;
  update_columns?: Array<NotificationTemplate_Update_Column>;
  where?: InputMaybe<NotificationTemplate_Bool_Exp>;
};

/** Ordering options when selecting data from "NotificationTemplate". */
export type NotificationTemplate_Order_By = {
  NotificationTemplateUsers_aggregate?: InputMaybe<NotificationTemplateUser_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: NotificationTemplate */
export type NotificationTemplate_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "NotificationTemplate" */
export enum NotificationTemplate_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Privacy = 'privacy',
  /** column name */
  Title = 'title',
}

/** input type for updating data in table "NotificationTemplate" */
export type NotificationTemplate_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  privacy?: InputMaybe<Scalars['NotificationTemplatePrivacy']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type NotificationTemplate_Stddev_Fields = {
  __typename?: 'NotificationTemplate_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type NotificationTemplate_Stddev_Pop_Fields = {
  __typename?: 'NotificationTemplate_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type NotificationTemplate_Stddev_Samp_Fields = {
  __typename?: 'NotificationTemplate_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "NotificationTemplate" */
export type NotificationTemplate_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: NotificationTemplate_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type NotificationTemplate_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  privacy?: InputMaybe<Scalars['NotificationTemplatePrivacy']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type NotificationTemplate_Sum_Fields = {
  __typename?: 'NotificationTemplate_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "NotificationTemplate" */
export enum NotificationTemplate_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Privacy = 'privacy',
  /** column name */
  Title = 'title',
}

export type NotificationTemplate_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<NotificationTemplate_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<NotificationTemplate_Set_Input>;
  /** filter the rows which have to be updated */
  where: NotificationTemplate_Bool_Exp;
};

/** aggregate var_pop on columns */
export type NotificationTemplate_Var_Pop_Fields = {
  __typename?: 'NotificationTemplate_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type NotificationTemplate_Var_Samp_Fields = {
  __typename?: 'NotificationTemplate_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type NotificationTemplate_Variance_Fields = {
  __typename?: 'NotificationTemplate_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregated selection of "Notification" */
export type Notification_Aggregate = {
  __typename?: 'Notification_aggregate';
  aggregate?: Maybe<Notification_Aggregate_Fields>;
  nodes: Array<Notification>;
};

export type Notification_Aggregate_Bool_Exp = {
  count?: InputMaybe<Notification_Aggregate_Bool_Exp_Count>;
};

export type Notification_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Notification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notification_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Notification" */
export type Notification_Aggregate_Fields = {
  __typename?: 'Notification_aggregate_fields';
  avg?: Maybe<Notification_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Notification_Max_Fields>;
  min?: Maybe<Notification_Min_Fields>;
  stddev?: Maybe<Notification_Stddev_Fields>;
  stddev_pop?: Maybe<Notification_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notification_Stddev_Samp_Fields>;
  sum?: Maybe<Notification_Sum_Fields>;
  var_pop?: Maybe<Notification_Var_Pop_Fields>;
  var_samp?: Maybe<Notification_Var_Samp_Fields>;
  variance?: Maybe<Notification_Variance_Fields>;
};

/** aggregate fields of "Notification" */
export type Notification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Notification" */
export type Notification_Aggregate_Order_By = {
  avg?: InputMaybe<Notification_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notification_Max_Order_By>;
  min?: InputMaybe<Notification_Min_Order_By>;
  stddev?: InputMaybe<Notification_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Notification_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Notification_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Notification_Sum_Order_By>;
  var_pop?: InputMaybe<Notification_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Notification_Var_Samp_Order_By>;
  variance?: InputMaybe<Notification_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Notification" */
export type Notification_Arr_Rel_Insert_Input = {
  data: Array<Notification_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};

/** aggregate avg on columns */
export type Notification_Avg_Fields = {
  __typename?: 'Notification_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Notification" */
export type Notification_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Notification". All fields are combined with a logical 'AND'. */
export type Notification_Bool_Exp = {
  Admin?: InputMaybe<Admin_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Notification_Bool_Exp>>;
  _not?: InputMaybe<Notification_Bool_Exp>;
  _or?: InputMaybe<Array<Notification_Bool_Exp>>;
  adminId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  readAt?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Notification" */
export enum Notification_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotificationPkey = 'Notification_pkey',
}

/** input type for incrementing numeric columns in table "Notification" */
export type Notification_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Notification" */
export type Notification_Insert_Input = {
  Admin?: InputMaybe<Admin_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  adminId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  readAt?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Notification_Max_Fields = {
  __typename?: 'Notification_max_fields';
  adminId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  readAt?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "Notification" */
export type Notification_Max_Order_By = {
  adminId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  readAt?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Notification_Min_Fields = {
  __typename?: 'Notification_min_fields';
  adminId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  readAt?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "Notification" */
export type Notification_Min_Order_By = {
  adminId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  readAt?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Notification" */
export type Notification_Mutation_Response = {
  __typename?: 'Notification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notification>;
};

/** on_conflict condition type for table "Notification" */
export type Notification_On_Conflict = {
  constraint: Notification_Constraint;
  update_columns?: Array<Notification_Update_Column>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** Ordering options when selecting data from "Notification". */
export type Notification_Order_By = {
  Admin?: InputMaybe<Admin_Order_By>;
  User?: InputMaybe<User_Order_By>;
  adminId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  readAt?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Notification */
export type Notification_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Notification" */
export enum Notification_Select_Column {
  /** column name */
  AdminId = 'adminId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ReadAt = 'readAt',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "Notification" */
export type Notification_Set_Input = {
  adminId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  readAt?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Notification_Stddev_Fields = {
  __typename?: 'Notification_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Notification" */
export type Notification_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Notification_Stddev_Pop_Fields = {
  __typename?: 'Notification_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Notification" */
export type Notification_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Notification_Stddev_Samp_Fields = {
  __typename?: 'Notification_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Notification" */
export type Notification_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Notification" */
export type Notification_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notification_Stream_Cursor_Value_Input = {
  adminId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  readAt?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Notification_Sum_Fields = {
  __typename?: 'Notification_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Notification" */
export type Notification_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "Notification" */
export enum Notification_Update_Column {
  /** column name */
  AdminId = 'adminId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ReadAt = 'readAt',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'userId',
}

export type Notification_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Notification_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notification_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notification_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Notification_Var_Pop_Fields = {
  __typename?: 'Notification_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Notification" */
export type Notification_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Notification_Var_Samp_Fields = {
  __typename?: 'Notification_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Notification" */
export type Notification_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Notification_Variance_Fields = {
  __typename?: 'Notification_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Notification" */
export type Notification_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "Organization" */
export type Organization = {
  __typename?: 'Organization';
  /** An array relationship */
  Roles: Array<Role>;
  /** An aggregate relationship */
  Roles_aggregate: Role_Aggregate;
  createdAt: Scalars['timestamp']['output'];
  id: Scalars['Int']['output'];
  maxUsers: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  superAdminEmail: Scalars['String']['output'];
};

/** columns and relationships of "Organization" */
export type OrganizationRolesArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** columns and relationships of "Organization" */
export type OrganizationRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** aggregated selection of "Organization" */
export type Organization_Aggregate = {
  __typename?: 'Organization_aggregate';
  aggregate?: Maybe<Organization_Aggregate_Fields>;
  nodes: Array<Organization>;
};

/** aggregate fields of "Organization" */
export type Organization_Aggregate_Fields = {
  __typename?: 'Organization_aggregate_fields';
  avg?: Maybe<Organization_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Max_Fields>;
  min?: Maybe<Organization_Min_Fields>;
  stddev?: Maybe<Organization_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_Sum_Fields>;
  var_pop?: Maybe<Organization_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_Var_Samp_Fields>;
  variance?: Maybe<Organization_Variance_Fields>;
};

/** aggregate fields of "Organization" */
export type Organization_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Organization_Avg_Fields = {
  __typename?: 'Organization_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxUsers?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  Roles?: InputMaybe<Role_Bool_Exp>;
  Roles_aggregate?: InputMaybe<Role_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Organization_Bool_Exp>>;
  _not?: InputMaybe<Organization_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  maxUsers?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  superAdminEmail?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Organization" */
export enum Organization_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationPkey = 'Organization_pkey',
}

/** input type for incrementing numeric columns in table "Organization" */
export type Organization_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  maxUsers?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Organization" */
export type Organization_Insert_Input = {
  Roles?: InputMaybe<Role_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  maxUsers?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  superAdminEmail?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Organization_Max_Fields = {
  __typename?: 'Organization_max_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  maxUsers?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  superAdminEmail?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organization_Min_Fields = {
  __typename?: 'Organization_min_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  maxUsers?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  superAdminEmail?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Organization" */
export type Organization_Mutation_Response = {
  __typename?: 'Organization_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization>;
};

/** input type for inserting object relation for remote table "Organization" */
export type Organization_Obj_Rel_Insert_Input = {
  data: Organization_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};

/** on_conflict condition type for table "Organization" */
export type Organization_On_Conflict = {
  constraint: Organization_Constraint;
  update_columns?: Array<Organization_Update_Column>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

/** Ordering options when selecting data from "Organization". */
export type Organization_Order_By = {
  Roles_aggregate?: InputMaybe<Role_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  maxUsers?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  superAdminEmail?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Organization */
export type Organization_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Organization" */
export enum Organization_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUsers = 'maxUsers',
  /** column name */
  Name = 'name',
  /** column name */
  SuperAdminEmail = 'superAdminEmail',
}

/** input type for updating data in table "Organization" */
export type Organization_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  maxUsers?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  superAdminEmail?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Organization_Stddev_Fields = {
  __typename?: 'Organization_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxUsers?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Organization_Stddev_Pop_Fields = {
  __typename?: 'Organization_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxUsers?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Organization_Stddev_Samp_Fields = {
  __typename?: 'Organization_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxUsers?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Organization" */
export type Organization_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  maxUsers?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  superAdminEmail?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Organization_Sum_Fields = {
  __typename?: 'Organization_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  maxUsers?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Organization" */
export enum Organization_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUsers = 'maxUsers',
  /** column name */
  Name = 'name',
  /** column name */
  SuperAdminEmail = 'superAdminEmail',
}

export type Organization_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organization_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Organization_Var_Pop_Fields = {
  __typename?: 'Organization_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxUsers?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Organization_Var_Samp_Fields = {
  __typename?: 'Organization_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxUsers?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Organization_Variance_Fields = {
  __typename?: 'Organization_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  maxUsers?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "Page" */
export type Page = {
  __typename?: 'Page';
  /** An array relationship */
  ComponentsOnPages: Array<ComponentsOnPages>;
  /** An aggregate relationship */
  ComponentsOnPages_aggregate: ComponentsOnPages_Aggregate;
  /** An array relationship */
  Menus: Array<Menu>;
  /** An aggregate relationship */
  Menus_aggregate: Menu_Aggregate;
  /** An object relationship */
  Project: Project;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  projectId: Scalars['uuid']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  themeId: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

/** columns and relationships of "Page" */
export type PageComponentsOnPagesArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnPages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnPages_Order_By>>;
  where?: InputMaybe<ComponentsOnPages_Bool_Exp>;
};

/** columns and relationships of "Page" */
export type PageComponentsOnPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnPages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnPages_Order_By>>;
  where?: InputMaybe<ComponentsOnPages_Bool_Exp>;
};

/** columns and relationships of "Page" */
export type PageMenusArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** columns and relationships of "Page" */
export type PageMenus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** aggregated selection of "Page" */
export type Page_Aggregate = {
  __typename?: 'Page_aggregate';
  aggregate?: Maybe<Page_Aggregate_Fields>;
  nodes: Array<Page>;
};

export type Page_Aggregate_Bool_Exp = {
  count?: InputMaybe<Page_Aggregate_Bool_Exp_Count>;
};

export type Page_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Page_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Page_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Page" */
export type Page_Aggregate_Fields = {
  __typename?: 'Page_aggregate_fields';
  avg?: Maybe<Page_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Page_Max_Fields>;
  min?: Maybe<Page_Min_Fields>;
  stddev?: Maybe<Page_Stddev_Fields>;
  stddev_pop?: Maybe<Page_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Page_Stddev_Samp_Fields>;
  sum?: Maybe<Page_Sum_Fields>;
  var_pop?: Maybe<Page_Var_Pop_Fields>;
  var_samp?: Maybe<Page_Var_Samp_Fields>;
  variance?: Maybe<Page_Variance_Fields>;
};

/** aggregate fields of "Page" */
export type Page_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Page_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Page" */
export type Page_Aggregate_Order_By = {
  avg?: InputMaybe<Page_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Page_Max_Order_By>;
  min?: InputMaybe<Page_Min_Order_By>;
  stddev?: InputMaybe<Page_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Page_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Page_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Page_Sum_Order_By>;
  var_pop?: InputMaybe<Page_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Page_Var_Samp_Order_By>;
  variance?: InputMaybe<Page_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Page" */
export type Page_Arr_Rel_Insert_Input = {
  data: Array<Page_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Page_On_Conflict>;
};

/** aggregate avg on columns */
export type Page_Avg_Fields = {
  __typename?: 'Page_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Page" */
export type Page_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Page". All fields are combined with a logical 'AND'. */
export type Page_Bool_Exp = {
  ComponentsOnPages?: InputMaybe<ComponentsOnPages_Bool_Exp>;
  ComponentsOnPages_aggregate?: InputMaybe<ComponentsOnPages_Aggregate_Bool_Exp>;
  Menus?: InputMaybe<Menu_Bool_Exp>;
  Menus_aggregate?: InputMaybe<Menu_Aggregate_Bool_Exp>;
  Project?: InputMaybe<Project_Bool_Exp>;
  _and?: InputMaybe<Array<Page_Bool_Exp>>;
  _not?: InputMaybe<Page_Bool_Exp>;
  _or?: InputMaybe<Array<Page_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  themeId?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Page" */
export enum Page_Constraint {
  /** unique or primary key constraint on columns "id" */
  PagePkey = 'Page_pkey',
}

/** input type for incrementing numeric columns in table "Page" */
export type Page_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  themeId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Page" */
export type Page_Insert_Input = {
  ComponentsOnPages?: InputMaybe<ComponentsOnPages_Arr_Rel_Insert_Input>;
  Menus?: InputMaybe<Menu_Arr_Rel_Insert_Input>;
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  themeId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Page_Max_Fields = {
  __typename?: 'Page_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  themeId?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "Page" */
export type Page_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Page_Min_Fields = {
  __typename?: 'Page_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  themeId?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "Page" */
export type Page_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Page" */
export type Page_Mutation_Response = {
  __typename?: 'Page_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Page>;
};

/** input type for inserting object relation for remote table "Page" */
export type Page_Obj_Rel_Insert_Input = {
  data: Page_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Page_On_Conflict>;
};

/** on_conflict condition type for table "Page" */
export type Page_On_Conflict = {
  constraint: Page_Constraint;
  update_columns?: Array<Page_Update_Column>;
  where?: InputMaybe<Page_Bool_Exp>;
};

/** Ordering options when selecting data from "Page". */
export type Page_Order_By = {
  ComponentsOnPages_aggregate?: InputMaybe<ComponentsOnPages_Aggregate_Order_By>;
  Menus_aggregate?: InputMaybe<Menu_Aggregate_Order_By>;
  Project?: InputMaybe<Project_Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Page */
export type Page_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Page" */
export enum Page_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Slug = 'slug',
  /** column name */
  ThemeId = 'themeId',
  /** column name */
  Title = 'title',
}

/** input type for updating data in table "Page" */
export type Page_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  themeId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Page_Stddev_Fields = {
  __typename?: 'Page_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Page" */
export type Page_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Page_Stddev_Pop_Fields = {
  __typename?: 'Page_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Page" */
export type Page_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Page_Stddev_Samp_Fields = {
  __typename?: 'Page_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Page" */
export type Page_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Page" */
export type Page_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Page_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Page_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  themeId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Page_Sum_Fields = {
  __typename?: 'Page_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  themeId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Page" */
export type Page_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** update columns of table "Page" */
export enum Page_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Slug = 'slug',
  /** column name */
  ThemeId = 'themeId',
  /** column name */
  Title = 'title',
}

export type Page_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Page_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Page_Set_Input>;
  /** filter the rows which have to be updated */
  where: Page_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Page_Var_Pop_Fields = {
  __typename?: 'Page_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Page" */
export type Page_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Page_Var_Samp_Fields = {
  __typename?: 'Page_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Page" */
export type Page_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Page_Variance_Fields = {
  __typename?: 'Page_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  themeId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Page" */
export type Page_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  themeId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Payment" */
export type Payment = {
  __typename?: 'Payment';
  /** An object relationship */
  DomainRegistration?: Maybe<DomainRegistration>;
  /** An object relationship */
  Donation?: Maybe<Donation>;
  /** An object relationship */
  Subscription?: Maybe<Subscription>;
  /** An object relationship */
  User: User;
  cost: Scalars['float8']['output'];
  createdAt: Scalars['timestamp']['output'];
  currency: Scalars['String']['output'];
  domainRegistrationId?: Maybe<Scalars['Int']['output']>;
  donationId?: Maybe<Scalars['Int']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  method: Scalars['String']['output'];
  paymentReference: Scalars['String']['output'];
  status: Scalars['PaymentStatus']['output'];
  subscriptionId?: Maybe<Scalars['Int']['output']>;
  transactionId?: Maybe<Scalars['String']['output']>;
  type: Scalars['PaymentType']['output'];
  userId: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "PaymentStatus". All fields are combined with logical 'AND'. */
export type PaymentStatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['PaymentStatus']['input']>;
  _gt?: InputMaybe<Scalars['PaymentStatus']['input']>;
  _gte?: InputMaybe<Scalars['PaymentStatus']['input']>;
  _in?: InputMaybe<Array<Scalars['PaymentStatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['PaymentStatus']['input']>;
  _lte?: InputMaybe<Scalars['PaymentStatus']['input']>;
  _neq?: InputMaybe<Scalars['PaymentStatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['PaymentStatus']['input']>>;
};

/** Boolean expression to compare columns of type "PaymentType". All fields are combined with logical 'AND'. */
export type PaymentType_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['PaymentType']['input']>;
  _gt?: InputMaybe<Scalars['PaymentType']['input']>;
  _gte?: InputMaybe<Scalars['PaymentType']['input']>;
  _in?: InputMaybe<Array<Scalars['PaymentType']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['PaymentType']['input']>;
  _lte?: InputMaybe<Scalars['PaymentType']['input']>;
  _neq?: InputMaybe<Scalars['PaymentType']['input']>;
  _nin?: InputMaybe<Array<Scalars['PaymentType']['input']>>;
};

/** aggregated selection of "Payment" */
export type Payment_Aggregate = {
  __typename?: 'Payment_aggregate';
  aggregate?: Maybe<Payment_Aggregate_Fields>;
  nodes: Array<Payment>;
};

export type Payment_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Payment_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Payment_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Payment_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Payment_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Payment_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Payment_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Payment_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Payment_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Payment_Aggregate_Bool_Exp_Var_Samp>;
};

export type Payment_Aggregate_Bool_Exp_Avg = {
  arguments: Payment_Select_Column_Payment_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Aggregate_Bool_Exp_Corr = {
  arguments: Payment_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Payment_Select_Column_Payment_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Payment_Select_Column_Payment_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Payment_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Payment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Payment_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Payment_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Payment_Select_Column_Payment_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Payment_Select_Column_Payment_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Payment_Aggregate_Bool_Exp_Max = {
  arguments: Payment_Select_Column_Payment_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Aggregate_Bool_Exp_Min = {
  arguments: Payment_Select_Column_Payment_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Payment_Select_Column_Payment_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Aggregate_Bool_Exp_Sum = {
  arguments: Payment_Select_Column_Payment_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Payment_Select_Column_Payment_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "Payment" */
export type Payment_Aggregate_Fields = {
  __typename?: 'Payment_aggregate_fields';
  avg?: Maybe<Payment_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Payment_Max_Fields>;
  min?: Maybe<Payment_Min_Fields>;
  stddev?: Maybe<Payment_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_Sum_Fields>;
  var_pop?: Maybe<Payment_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_Var_Samp_Fields>;
  variance?: Maybe<Payment_Variance_Fields>;
};

/** aggregate fields of "Payment" */
export type Payment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Payment" */
export type Payment_Aggregate_Order_By = {
  avg?: InputMaybe<Payment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Payment_Max_Order_By>;
  min?: InputMaybe<Payment_Min_Order_By>;
  stddev?: InputMaybe<Payment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Payment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Payment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Payment_Sum_Order_By>;
  var_pop?: InputMaybe<Payment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Payment_Var_Samp_Order_By>;
  variance?: InputMaybe<Payment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Payment" */
export type Payment_Arr_Rel_Insert_Input = {
  data: Array<Payment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Payment_On_Conflict>;
};

/** aggregate avg on columns */
export type Payment_Avg_Fields = {
  __typename?: 'Payment_avg_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
  donationId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  subscriptionId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Payment" */
export type Payment_Avg_Order_By = {
  cost?: InputMaybe<Order_By>;
  domainRegistrationId?: InputMaybe<Order_By>;
  donationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscriptionId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Payment". All fields are combined with a logical 'AND'. */
export type Payment_Bool_Exp = {
  DomainRegistration?: InputMaybe<DomainRegistration_Bool_Exp>;
  Donation?: InputMaybe<Donation_Bool_Exp>;
  Subscription?: InputMaybe<Subscription_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Payment_Bool_Exp>>;
  _not?: InputMaybe<Payment_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_Bool_Exp>>;
  cost?: InputMaybe<Float8_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  domainRegistrationId?: InputMaybe<Int_Comparison_Exp>;
  donationId?: InputMaybe<Int_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  method?: InputMaybe<String_Comparison_Exp>;
  paymentReference?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<PaymentStatus_Comparison_Exp>;
  subscriptionId?: InputMaybe<Int_Comparison_Exp>;
  transactionId?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<PaymentType_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Payment" */
export enum Payment_Constraint {
  /** unique or primary key constraint on columns "domainRegistrationId" */
  PaymentDomainRegistrationIdKey = 'Payment_domainRegistrationId_key',
  /** unique or primary key constraint on columns "donationId" */
  PaymentDonationIdKey = 'Payment_donationId_key',
  /** unique or primary key constraint on columns "id" */
  PaymentPkey = 'Payment_pkey',
  /** unique or primary key constraint on columns "subscriptionId" */
  PaymentSubscriptionIdKey = 'Payment_subscriptionId_key',
}

/** input type for incrementing numeric columns in table "Payment" */
export type Payment_Inc_Input = {
  cost?: InputMaybe<Scalars['float8']['input']>;
  domainRegistrationId?: InputMaybe<Scalars['Int']['input']>;
  donationId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  subscriptionId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Payment" */
export type Payment_Insert_Input = {
  DomainRegistration?: InputMaybe<DomainRegistration_Obj_Rel_Insert_Input>;
  Donation?: InputMaybe<Donation_Obj_Rel_Insert_Input>;
  Subscription?: InputMaybe<Subscription_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  cost?: InputMaybe<Scalars['float8']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  domainRegistrationId?: InputMaybe<Scalars['Int']['input']>;
  donationId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  paymentReference?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['PaymentStatus']['input']>;
  subscriptionId?: InputMaybe<Scalars['Int']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['PaymentType']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Payment_Max_Fields = {
  __typename?: 'Payment_max_fields';
  cost?: Maybe<Scalars['float8']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  domainRegistrationId?: Maybe<Scalars['Int']['output']>;
  donationId?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  paymentReference?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['PaymentStatus']['output']>;
  subscriptionId?: Maybe<Scalars['Int']['output']>;
  transactionId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['PaymentType']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "Payment" */
export type Payment_Max_Order_By = {
  cost?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  domainRegistrationId?: InputMaybe<Order_By>;
  donationId?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  method?: InputMaybe<Order_By>;
  paymentReference?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subscriptionId?: InputMaybe<Order_By>;
  transactionId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Payment_Min_Fields = {
  __typename?: 'Payment_min_fields';
  cost?: Maybe<Scalars['float8']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  domainRegistrationId?: Maybe<Scalars['Int']['output']>;
  donationId?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  paymentReference?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['PaymentStatus']['output']>;
  subscriptionId?: Maybe<Scalars['Int']['output']>;
  transactionId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['PaymentType']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "Payment" */
export type Payment_Min_Order_By = {
  cost?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  domainRegistrationId?: InputMaybe<Order_By>;
  donationId?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  method?: InputMaybe<Order_By>;
  paymentReference?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subscriptionId?: InputMaybe<Order_By>;
  transactionId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Payment" */
export type Payment_Mutation_Response = {
  __typename?: 'Payment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment>;
};

/** on_conflict condition type for table "Payment" */
export type Payment_On_Conflict = {
  constraint: Payment_Constraint;
  update_columns?: Array<Payment_Update_Column>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

/** Ordering options when selecting data from "Payment". */
export type Payment_Order_By = {
  DomainRegistration?: InputMaybe<DomainRegistration_Order_By>;
  Donation?: InputMaybe<Donation_Order_By>;
  Subscription?: InputMaybe<Subscription_Order_By>;
  User?: InputMaybe<User_Order_By>;
  cost?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  domainRegistrationId?: InputMaybe<Order_By>;
  donationId?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  method?: InputMaybe<Order_By>;
  paymentReference?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subscriptionId?: InputMaybe<Order_By>;
  transactionId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Payment */
export type Payment_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Payment" */
export enum Payment_Select_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Currency = 'currency',
  /** column name */
  DomainRegistrationId = 'domainRegistrationId',
  /** column name */
  DonationId = 'donationId',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Method = 'method',
  /** column name */
  PaymentReference = 'paymentReference',
  /** column name */
  Status = 'status',
  /** column name */
  SubscriptionId = 'subscriptionId',
  /** column name */
  TransactionId = 'transactionId',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
}

/** select "Payment_aggregate_bool_exp_avg_arguments_columns" columns of table "Payment" */
export enum Payment_Select_Column_Payment_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Payment_aggregate_bool_exp_corr_arguments_columns" columns of table "Payment" */
export enum Payment_Select_Column_Payment_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Payment_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "Payment" */
export enum Payment_Select_Column_Payment_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Payment_aggregate_bool_exp_max_arguments_columns" columns of table "Payment" */
export enum Payment_Select_Column_Payment_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Payment_aggregate_bool_exp_min_arguments_columns" columns of table "Payment" */
export enum Payment_Select_Column_Payment_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Payment_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "Payment" */
export enum Payment_Select_Column_Payment_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Payment_aggregate_bool_exp_sum_arguments_columns" columns of table "Payment" */
export enum Payment_Select_Column_Payment_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Payment_aggregate_bool_exp_var_samp_arguments_columns" columns of table "Payment" */
export enum Payment_Select_Column_Payment_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** input type for updating data in table "Payment" */
export type Payment_Set_Input = {
  cost?: InputMaybe<Scalars['float8']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  domainRegistrationId?: InputMaybe<Scalars['Int']['input']>;
  donationId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  paymentReference?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['PaymentStatus']['input']>;
  subscriptionId?: InputMaybe<Scalars['Int']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['PaymentType']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Payment_Stddev_Fields = {
  __typename?: 'Payment_stddev_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
  donationId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  subscriptionId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Payment" */
export type Payment_Stddev_Order_By = {
  cost?: InputMaybe<Order_By>;
  domainRegistrationId?: InputMaybe<Order_By>;
  donationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscriptionId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Payment_Stddev_Pop_Fields = {
  __typename?: 'Payment_stddev_pop_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
  donationId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  subscriptionId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Payment" */
export type Payment_Stddev_Pop_Order_By = {
  cost?: InputMaybe<Order_By>;
  domainRegistrationId?: InputMaybe<Order_By>;
  donationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscriptionId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Payment_Stddev_Samp_Fields = {
  __typename?: 'Payment_stddev_samp_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
  donationId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  subscriptionId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Payment" */
export type Payment_Stddev_Samp_Order_By = {
  cost?: InputMaybe<Order_By>;
  domainRegistrationId?: InputMaybe<Order_By>;
  donationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscriptionId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Payment" */
export type Payment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_Stream_Cursor_Value_Input = {
  cost?: InputMaybe<Scalars['float8']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  domainRegistrationId?: InputMaybe<Scalars['Int']['input']>;
  donationId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  paymentReference?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['PaymentStatus']['input']>;
  subscriptionId?: InputMaybe<Scalars['Int']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['PaymentType']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Payment_Sum_Fields = {
  __typename?: 'Payment_sum_fields';
  cost?: Maybe<Scalars['float8']['output']>;
  domainRegistrationId?: Maybe<Scalars['Int']['output']>;
  donationId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  subscriptionId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Payment" */
export type Payment_Sum_Order_By = {
  cost?: InputMaybe<Order_By>;
  domainRegistrationId?: InputMaybe<Order_By>;
  donationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscriptionId?: InputMaybe<Order_By>;
};

/** update columns of table "Payment" */
export enum Payment_Update_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Currency = 'currency',
  /** column name */
  DomainRegistrationId = 'domainRegistrationId',
  /** column name */
  DonationId = 'donationId',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Method = 'method',
  /** column name */
  PaymentReference = 'paymentReference',
  /** column name */
  Status = 'status',
  /** column name */
  SubscriptionId = 'subscriptionId',
  /** column name */
  TransactionId = 'transactionId',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
}

export type Payment_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Payment_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payment_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payment_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Payment_Var_Pop_Fields = {
  __typename?: 'Payment_var_pop_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
  donationId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  subscriptionId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Payment" */
export type Payment_Var_Pop_Order_By = {
  cost?: InputMaybe<Order_By>;
  domainRegistrationId?: InputMaybe<Order_By>;
  donationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscriptionId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Payment_Var_Samp_Fields = {
  __typename?: 'Payment_var_samp_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
  donationId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  subscriptionId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Payment" */
export type Payment_Var_Samp_Order_By = {
  cost?: InputMaybe<Order_By>;
  domainRegistrationId?: InputMaybe<Order_By>;
  donationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscriptionId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Payment_Variance_Fields = {
  __typename?: 'Payment_variance_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  domainRegistrationId?: Maybe<Scalars['Float']['output']>;
  donationId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  subscriptionId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Payment" */
export type Payment_Variance_Order_By = {
  cost?: InputMaybe<Order_By>;
  domainRegistrationId?: InputMaybe<Order_By>;
  donationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscriptionId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Permission" */
export type Permission = {
  __typename?: 'Permission';
  /** An array relationship */
  PermissionsOnRoles: Array<PermissionsOnRoles>;
  /** An aggregate relationship */
  PermissionsOnRoles_aggregate: PermissionsOnRoles_Aggregate;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** columns and relationships of "Permission" */
export type PermissionPermissionsOnRolesArgs = {
  distinct_on?: InputMaybe<Array<PermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PermissionsOnRoles_Order_By>>;
  where?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
};

/** columns and relationships of "Permission" */
export type PermissionPermissionsOnRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PermissionsOnRoles_Order_By>>;
  where?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
};

/** aggregated selection of "Permission" */
export type Permission_Aggregate = {
  __typename?: 'Permission_aggregate';
  aggregate?: Maybe<Permission_Aggregate_Fields>;
  nodes: Array<Permission>;
};

/** aggregate fields of "Permission" */
export type Permission_Aggregate_Fields = {
  __typename?: 'Permission_aggregate_fields';
  avg?: Maybe<Permission_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Permission_Max_Fields>;
  min?: Maybe<Permission_Min_Fields>;
  stddev?: Maybe<Permission_Stddev_Fields>;
  stddev_pop?: Maybe<Permission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Permission_Stddev_Samp_Fields>;
  sum?: Maybe<Permission_Sum_Fields>;
  var_pop?: Maybe<Permission_Var_Pop_Fields>;
  var_samp?: Maybe<Permission_Var_Samp_Fields>;
  variance?: Maybe<Permission_Variance_Fields>;
};

/** aggregate fields of "Permission" */
export type Permission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Permission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Permission_Avg_Fields = {
  __typename?: 'Permission_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Permission". All fields are combined with a logical 'AND'. */
export type Permission_Bool_Exp = {
  PermissionsOnRoles?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
  PermissionsOnRoles_aggregate?: InputMaybe<PermissionsOnRoles_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Permission_Bool_Exp>>;
  _not?: InputMaybe<Permission_Bool_Exp>;
  _or?: InputMaybe<Array<Permission_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Permission" */
export enum Permission_Constraint {
  /** unique or primary key constraint on columns "id" */
  PermissionPkey = 'Permission_pkey',
}

/** input type for incrementing numeric columns in table "Permission" */
export type Permission_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Permission" */
export type Permission_Insert_Input = {
  PermissionsOnRoles?: InputMaybe<PermissionsOnRoles_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Permission_Max_Fields = {
  __typename?: 'Permission_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Permission_Min_Fields = {
  __typename?: 'Permission_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Permission" */
export type Permission_Mutation_Response = {
  __typename?: 'Permission_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Permission>;
};

/** input type for inserting object relation for remote table "Permission" */
export type Permission_Obj_Rel_Insert_Input = {
  data: Permission_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};

/** on_conflict condition type for table "Permission" */
export type Permission_On_Conflict = {
  constraint: Permission_Constraint;
  update_columns?: Array<Permission_Update_Column>;
  where?: InputMaybe<Permission_Bool_Exp>;
};

/** Ordering options when selecting data from "Permission". */
export type Permission_Order_By = {
  PermissionsOnRoles_aggregate?: InputMaybe<PermissionsOnRoles_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Permission */
export type Permission_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Permission" */
export enum Permission_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "Permission" */
export type Permission_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Permission_Stddev_Fields = {
  __typename?: 'Permission_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Permission_Stddev_Pop_Fields = {
  __typename?: 'Permission_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Permission_Stddev_Samp_Fields = {
  __typename?: 'Permission_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Permission" */
export type Permission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Permission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Permission_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Permission_Sum_Fields = {
  __typename?: 'Permission_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Permission" */
export enum Permission_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

export type Permission_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Permission_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Permission_Set_Input>;
  /** filter the rows which have to be updated */
  where: Permission_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Permission_Var_Pop_Fields = {
  __typename?: 'Permission_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Permission_Var_Samp_Fields = {
  __typename?: 'Permission_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Permission_Variance_Fields = {
  __typename?: 'Permission_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "PermissionsOnRoles" */
export type PermissionsOnRoles = {
  __typename?: 'PermissionsOnRoles';
  /** An object relationship */
  Permission: Permission;
  /** An object relationship */
  Role: Role;
  permissionId: Scalars['Int']['output'];
  roleId: Scalars['Int']['output'];
};

/** aggregated selection of "PermissionsOnRoles" */
export type PermissionsOnRoles_Aggregate = {
  __typename?: 'PermissionsOnRoles_aggregate';
  aggregate?: Maybe<PermissionsOnRoles_Aggregate_Fields>;
  nodes: Array<PermissionsOnRoles>;
};

export type PermissionsOnRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<PermissionsOnRoles_Aggregate_Bool_Exp_Count>;
};

export type PermissionsOnRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PermissionsOnRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "PermissionsOnRoles" */
export type PermissionsOnRoles_Aggregate_Fields = {
  __typename?: 'PermissionsOnRoles_aggregate_fields';
  avg?: Maybe<PermissionsOnRoles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PermissionsOnRoles_Max_Fields>;
  min?: Maybe<PermissionsOnRoles_Min_Fields>;
  stddev?: Maybe<PermissionsOnRoles_Stddev_Fields>;
  stddev_pop?: Maybe<PermissionsOnRoles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<PermissionsOnRoles_Stddev_Samp_Fields>;
  sum?: Maybe<PermissionsOnRoles_Sum_Fields>;
  var_pop?: Maybe<PermissionsOnRoles_Var_Pop_Fields>;
  var_samp?: Maybe<PermissionsOnRoles_Var_Samp_Fields>;
  variance?: Maybe<PermissionsOnRoles_Variance_Fields>;
};

/** aggregate fields of "PermissionsOnRoles" */
export type PermissionsOnRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<PermissionsOnRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "PermissionsOnRoles" */
export type PermissionsOnRoles_Aggregate_Order_By = {
  avg?: InputMaybe<PermissionsOnRoles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<PermissionsOnRoles_Max_Order_By>;
  min?: InputMaybe<PermissionsOnRoles_Min_Order_By>;
  stddev?: InputMaybe<PermissionsOnRoles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<PermissionsOnRoles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<PermissionsOnRoles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<PermissionsOnRoles_Sum_Order_By>;
  var_pop?: InputMaybe<PermissionsOnRoles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<PermissionsOnRoles_Var_Samp_Order_By>;
  variance?: InputMaybe<PermissionsOnRoles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "PermissionsOnRoles" */
export type PermissionsOnRoles_Arr_Rel_Insert_Input = {
  data: Array<PermissionsOnRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<PermissionsOnRoles_On_Conflict>;
};

/** aggregate avg on columns */
export type PermissionsOnRoles_Avg_Fields = {
  __typename?: 'PermissionsOnRoles_avg_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "PermissionsOnRoles" */
export type PermissionsOnRoles_Avg_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "PermissionsOnRoles". All fields are combined with a logical 'AND'. */
export type PermissionsOnRoles_Bool_Exp = {
  Permission?: InputMaybe<Permission_Bool_Exp>;
  Role?: InputMaybe<Role_Bool_Exp>;
  _and?: InputMaybe<Array<PermissionsOnRoles_Bool_Exp>>;
  _not?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
  _or?: InputMaybe<Array<PermissionsOnRoles_Bool_Exp>>;
  permissionId?: InputMaybe<Int_Comparison_Exp>;
  roleId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "PermissionsOnRoles" */
export enum PermissionsOnRoles_Constraint {
  /** unique or primary key constraint on columns "roleId", "permissionId" */
  PermissionsOnRolesPkey = 'PermissionsOnRoles_pkey',
}

/** input type for incrementing numeric columns in table "PermissionsOnRoles" */
export type PermissionsOnRoles_Inc_Input = {
  permissionId?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "PermissionsOnRoles" */
export type PermissionsOnRoles_Insert_Input = {
  Permission?: InputMaybe<Permission_Obj_Rel_Insert_Input>;
  Role?: InputMaybe<Role_Obj_Rel_Insert_Input>;
  permissionId?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type PermissionsOnRoles_Max_Fields = {
  __typename?: 'PermissionsOnRoles_max_fields';
  permissionId?: Maybe<Scalars['Int']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "PermissionsOnRoles" */
export type PermissionsOnRoles_Max_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type PermissionsOnRoles_Min_Fields = {
  __typename?: 'PermissionsOnRoles_min_fields';
  permissionId?: Maybe<Scalars['Int']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "PermissionsOnRoles" */
export type PermissionsOnRoles_Min_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "PermissionsOnRoles" */
export type PermissionsOnRoles_Mutation_Response = {
  __typename?: 'PermissionsOnRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<PermissionsOnRoles>;
};

/** on_conflict condition type for table "PermissionsOnRoles" */
export type PermissionsOnRoles_On_Conflict = {
  constraint: PermissionsOnRoles_Constraint;
  update_columns?: Array<PermissionsOnRoles_Update_Column>;
  where?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "PermissionsOnRoles". */
export type PermissionsOnRoles_Order_By = {
  Permission?: InputMaybe<Permission_Order_By>;
  Role?: InputMaybe<Role_Order_By>;
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: PermissionsOnRoles */
export type PermissionsOnRoles_Pk_Columns_Input = {
  permissionId: Scalars['Int']['input'];
  roleId: Scalars['Int']['input'];
};

/** select columns of table "PermissionsOnRoles" */
export enum PermissionsOnRoles_Select_Column {
  /** column name */
  PermissionId = 'permissionId',
  /** column name */
  RoleId = 'roleId',
}

/** input type for updating data in table "PermissionsOnRoles" */
export type PermissionsOnRoles_Set_Input = {
  permissionId?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type PermissionsOnRoles_Stddev_Fields = {
  __typename?: 'PermissionsOnRoles_stddev_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "PermissionsOnRoles" */
export type PermissionsOnRoles_Stddev_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type PermissionsOnRoles_Stddev_Pop_Fields = {
  __typename?: 'PermissionsOnRoles_stddev_pop_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "PermissionsOnRoles" */
export type PermissionsOnRoles_Stddev_Pop_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type PermissionsOnRoles_Stddev_Samp_Fields = {
  __typename?: 'PermissionsOnRoles_stddev_samp_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "PermissionsOnRoles" */
export type PermissionsOnRoles_Stddev_Samp_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "PermissionsOnRoles" */
export type PermissionsOnRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PermissionsOnRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PermissionsOnRoles_Stream_Cursor_Value_Input = {
  permissionId?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type PermissionsOnRoles_Sum_Fields = {
  __typename?: 'PermissionsOnRoles_sum_fields';
  permissionId?: Maybe<Scalars['Int']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "PermissionsOnRoles" */
export type PermissionsOnRoles_Sum_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** update columns of table "PermissionsOnRoles" */
export enum PermissionsOnRoles_Update_Column {
  /** column name */
  PermissionId = 'permissionId',
  /** column name */
  RoleId = 'roleId',
}

export type PermissionsOnRoles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PermissionsOnRoles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PermissionsOnRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: PermissionsOnRoles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type PermissionsOnRoles_Var_Pop_Fields = {
  __typename?: 'PermissionsOnRoles_var_pop_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "PermissionsOnRoles" */
export type PermissionsOnRoles_Var_Pop_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type PermissionsOnRoles_Var_Samp_Fields = {
  __typename?: 'PermissionsOnRoles_var_samp_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "PermissionsOnRoles" */
export type PermissionsOnRoles_Var_Samp_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type PermissionsOnRoles_Variance_Fields = {
  __typename?: 'PermissionsOnRoles_variance_fields';
  permissionId?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "PermissionsOnRoles" */
export type PermissionsOnRoles_Variance_Order_By = {
  permissionId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Plan" */
export type Plan = {
  __typename?: 'Plan';
  /** An array relationship */
  PlanFeatureLimitations: Array<PlanFeatureLimitation>;
  /** An aggregate relationship */
  PlanFeatureLimitations_aggregate: PlanFeatureLimitation_Aggregate;
  /** An array relationship */
  Subscriptions: Array<Subscription>;
  /** An aggregate relationship */
  Subscriptions_aggregate: Subscription_Aggregate;
  createdAt: Scalars['timestamp']['output'];
  description: Scalars['String']['output'];
  discount?: Maybe<Scalars['float8']['output']>;
  extraFeatures?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  period: Scalars['Int']['output'];
  periodType: Scalars['PlanPeriod']['output'];
  price: Scalars['float8']['output'];
  updatedAt: Scalars['timestamp']['output'];
};

/** columns and relationships of "Plan" */
export type PlanPlanFeatureLimitationsArgs = {
  distinct_on?: InputMaybe<Array<PlanFeatureLimitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PlanFeatureLimitation_Order_By>>;
  where?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
};

/** columns and relationships of "Plan" */
export type PlanPlanFeatureLimitations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PlanFeatureLimitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PlanFeatureLimitation_Order_By>>;
  where?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
};

/** columns and relationships of "Plan" */
export type PlanSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Order_By>>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};

/** columns and relationships of "Plan" */
export type PlanSubscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Order_By>>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};

/** columns and relationships of "PlanFeature" */
export type PlanFeature = {
  __typename?: 'PlanFeature';
  /** An array relationship */
  PlanFeatureLimitations: Array<PlanFeatureLimitation>;
  /** An aggregate relationship */
  PlanFeatureLimitations_aggregate: PlanFeatureLimitation_Aggregate;
  createdAt: Scalars['timestamp']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  limitationSchema?: Maybe<Scalars['jsonb']['output']>;
  title: Scalars['String']['output'];
};

/** columns and relationships of "PlanFeature" */
export type PlanFeaturePlanFeatureLimitationsArgs = {
  distinct_on?: InputMaybe<Array<PlanFeatureLimitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PlanFeatureLimitation_Order_By>>;
  where?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
};

/** columns and relationships of "PlanFeature" */
export type PlanFeaturePlanFeatureLimitations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PlanFeatureLimitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PlanFeatureLimitation_Order_By>>;
  where?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
};

/** columns and relationships of "PlanFeature" */
export type PlanFeatureLimitationSchemaArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "PlanFeatureLimitation" */
export type PlanFeatureLimitation = {
  __typename?: 'PlanFeatureLimitation';
  /** An object relationship */
  Plan: Plan;
  /** An object relationship */
  PlanFeature: PlanFeature;
  createdAt: Scalars['timestamp']['output'];
  description: Scalars['String']['output'];
  featureId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  limitation?: Maybe<Scalars['jsonb']['output']>;
  planId: Scalars['Int']['output'];
};

/** columns and relationships of "PlanFeatureLimitation" */
export type PlanFeatureLimitationLimitationArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Aggregate = {
  __typename?: 'PlanFeatureLimitation_aggregate';
  aggregate?: Maybe<PlanFeatureLimitation_Aggregate_Fields>;
  nodes: Array<PlanFeatureLimitation>;
};

export type PlanFeatureLimitation_Aggregate_Bool_Exp = {
  count?: InputMaybe<PlanFeatureLimitation_Aggregate_Bool_Exp_Count>;
};

export type PlanFeatureLimitation_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PlanFeatureLimitation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Aggregate_Fields = {
  __typename?: 'PlanFeatureLimitation_aggregate_fields';
  avg?: Maybe<PlanFeatureLimitation_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PlanFeatureLimitation_Max_Fields>;
  min?: Maybe<PlanFeatureLimitation_Min_Fields>;
  stddev?: Maybe<PlanFeatureLimitation_Stddev_Fields>;
  stddev_pop?: Maybe<PlanFeatureLimitation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<PlanFeatureLimitation_Stddev_Samp_Fields>;
  sum?: Maybe<PlanFeatureLimitation_Sum_Fields>;
  var_pop?: Maybe<PlanFeatureLimitation_Var_Pop_Fields>;
  var_samp?: Maybe<PlanFeatureLimitation_Var_Samp_Fields>;
  variance?: Maybe<PlanFeatureLimitation_Variance_Fields>;
};

/** aggregate fields of "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<PlanFeatureLimitation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Aggregate_Order_By = {
  avg?: InputMaybe<PlanFeatureLimitation_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<PlanFeatureLimitation_Max_Order_By>;
  min?: InputMaybe<PlanFeatureLimitation_Min_Order_By>;
  stddev?: InputMaybe<PlanFeatureLimitation_Stddev_Order_By>;
  stddev_pop?: InputMaybe<PlanFeatureLimitation_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<PlanFeatureLimitation_Stddev_Samp_Order_By>;
  sum?: InputMaybe<PlanFeatureLimitation_Sum_Order_By>;
  var_pop?: InputMaybe<PlanFeatureLimitation_Var_Pop_Order_By>;
  var_samp?: InputMaybe<PlanFeatureLimitation_Var_Samp_Order_By>;
  variance?: InputMaybe<PlanFeatureLimitation_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type PlanFeatureLimitation_Append_Input = {
  limitation?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Arr_Rel_Insert_Input = {
  data: Array<PlanFeatureLimitation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<PlanFeatureLimitation_On_Conflict>;
};

/** aggregate avg on columns */
export type PlanFeatureLimitation_Avg_Fields = {
  __typename?: 'PlanFeatureLimitation_avg_fields';
  featureId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Avg_Order_By = {
  featureId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "PlanFeatureLimitation". All fields are combined with a logical 'AND'. */
export type PlanFeatureLimitation_Bool_Exp = {
  Plan?: InputMaybe<Plan_Bool_Exp>;
  PlanFeature?: InputMaybe<PlanFeature_Bool_Exp>;
  _and?: InputMaybe<Array<PlanFeatureLimitation_Bool_Exp>>;
  _not?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
  _or?: InputMaybe<Array<PlanFeatureLimitation_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  featureId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  limitation?: InputMaybe<Jsonb_Comparison_Exp>;
  planId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "PlanFeatureLimitation" */
export enum PlanFeatureLimitation_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlanFeatureLimitationPkey = 'PlanFeatureLimitation_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type PlanFeatureLimitation_Delete_At_Path_Input = {
  limitation?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type PlanFeatureLimitation_Delete_Elem_Input = {
  limitation?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type PlanFeatureLimitation_Delete_Key_Input = {
  limitation?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Inc_Input = {
  featureId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Insert_Input = {
  Plan?: InputMaybe<Plan_Obj_Rel_Insert_Input>;
  PlanFeature?: InputMaybe<PlanFeature_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featureId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  limitation?: InputMaybe<Scalars['jsonb']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type PlanFeatureLimitation_Max_Fields = {
  __typename?: 'PlanFeatureLimitation_max_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  featureId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  featureId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type PlanFeatureLimitation_Min_Fields = {
  __typename?: 'PlanFeatureLimitation_min_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  featureId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  featureId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Mutation_Response = {
  __typename?: 'PlanFeatureLimitation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<PlanFeatureLimitation>;
};

/** on_conflict condition type for table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_On_Conflict = {
  constraint: PlanFeatureLimitation_Constraint;
  update_columns?: Array<PlanFeatureLimitation_Update_Column>;
  where?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
};

/** Ordering options when selecting data from "PlanFeatureLimitation". */
export type PlanFeatureLimitation_Order_By = {
  Plan?: InputMaybe<Plan_Order_By>;
  PlanFeature?: InputMaybe<PlanFeature_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  featureId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  limitation?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: PlanFeatureLimitation */
export type PlanFeatureLimitation_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type PlanFeatureLimitation_Prepend_Input = {
  limitation?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "PlanFeatureLimitation" */
export enum PlanFeatureLimitation_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  FeatureId = 'featureId',
  /** column name */
  Id = 'id',
  /** column name */
  Limitation = 'limitation',
  /** column name */
  PlanId = 'planId',
}

/** input type for updating data in table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featureId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  limitation?: InputMaybe<Scalars['jsonb']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type PlanFeatureLimitation_Stddev_Fields = {
  __typename?: 'PlanFeatureLimitation_stddev_fields';
  featureId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Stddev_Order_By = {
  featureId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type PlanFeatureLimitation_Stddev_Pop_Fields = {
  __typename?: 'PlanFeatureLimitation_stddev_pop_fields';
  featureId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Stddev_Pop_Order_By = {
  featureId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type PlanFeatureLimitation_Stddev_Samp_Fields = {
  __typename?: 'PlanFeatureLimitation_stddev_samp_fields';
  featureId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Stddev_Samp_Order_By = {
  featureId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PlanFeatureLimitation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PlanFeatureLimitation_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featureId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  limitation?: InputMaybe<Scalars['jsonb']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type PlanFeatureLimitation_Sum_Fields = {
  __typename?: 'PlanFeatureLimitation_sum_fields';
  featureId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Sum_Order_By = {
  featureId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
};

/** update columns of table "PlanFeatureLimitation" */
export enum PlanFeatureLimitation_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  FeatureId = 'featureId',
  /** column name */
  Id = 'id',
  /** column name */
  Limitation = 'limitation',
  /** column name */
  PlanId = 'planId',
}

export type PlanFeatureLimitation_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<PlanFeatureLimitation_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<PlanFeatureLimitation_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<PlanFeatureLimitation_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<PlanFeatureLimitation_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PlanFeatureLimitation_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<PlanFeatureLimitation_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PlanFeatureLimitation_Set_Input>;
  /** filter the rows which have to be updated */
  where: PlanFeatureLimitation_Bool_Exp;
};

/** aggregate var_pop on columns */
export type PlanFeatureLimitation_Var_Pop_Fields = {
  __typename?: 'PlanFeatureLimitation_var_pop_fields';
  featureId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Var_Pop_Order_By = {
  featureId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type PlanFeatureLimitation_Var_Samp_Fields = {
  __typename?: 'PlanFeatureLimitation_var_samp_fields';
  featureId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Var_Samp_Order_By = {
  featureId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type PlanFeatureLimitation_Variance_Fields = {
  __typename?: 'PlanFeatureLimitation_variance_fields';
  featureId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "PlanFeatureLimitation" */
export type PlanFeatureLimitation_Variance_Order_By = {
  featureId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
};

/** aggregated selection of "PlanFeature" */
export type PlanFeature_Aggregate = {
  __typename?: 'PlanFeature_aggregate';
  aggregate?: Maybe<PlanFeature_Aggregate_Fields>;
  nodes: Array<PlanFeature>;
};

/** aggregate fields of "PlanFeature" */
export type PlanFeature_Aggregate_Fields = {
  __typename?: 'PlanFeature_aggregate_fields';
  avg?: Maybe<PlanFeature_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PlanFeature_Max_Fields>;
  min?: Maybe<PlanFeature_Min_Fields>;
  stddev?: Maybe<PlanFeature_Stddev_Fields>;
  stddev_pop?: Maybe<PlanFeature_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<PlanFeature_Stddev_Samp_Fields>;
  sum?: Maybe<PlanFeature_Sum_Fields>;
  var_pop?: Maybe<PlanFeature_Var_Pop_Fields>;
  var_samp?: Maybe<PlanFeature_Var_Samp_Fields>;
  variance?: Maybe<PlanFeature_Variance_Fields>;
};

/** aggregate fields of "PlanFeature" */
export type PlanFeature_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<PlanFeature_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type PlanFeature_Append_Input = {
  limitationSchema?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type PlanFeature_Avg_Fields = {
  __typename?: 'PlanFeature_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "PlanFeature". All fields are combined with a logical 'AND'. */
export type PlanFeature_Bool_Exp = {
  PlanFeatureLimitations?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
  PlanFeatureLimitations_aggregate?: InputMaybe<PlanFeatureLimitation_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<PlanFeature_Bool_Exp>>;
  _not?: InputMaybe<PlanFeature_Bool_Exp>;
  _or?: InputMaybe<Array<PlanFeature_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  limitationSchema?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "PlanFeature" */
export enum PlanFeature_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlanFeaturePkey = 'PlanFeature_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type PlanFeature_Delete_At_Path_Input = {
  limitationSchema?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type PlanFeature_Delete_Elem_Input = {
  limitationSchema?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type PlanFeature_Delete_Key_Input = {
  limitationSchema?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "PlanFeature" */
export type PlanFeature_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "PlanFeature" */
export type PlanFeature_Insert_Input = {
  PlanFeatureLimitations?: InputMaybe<PlanFeatureLimitation_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  limitationSchema?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type PlanFeature_Max_Fields = {
  __typename?: 'PlanFeature_max_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type PlanFeature_Min_Fields = {
  __typename?: 'PlanFeature_min_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "PlanFeature" */
export type PlanFeature_Mutation_Response = {
  __typename?: 'PlanFeature_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<PlanFeature>;
};

/** input type for inserting object relation for remote table "PlanFeature" */
export type PlanFeature_Obj_Rel_Insert_Input = {
  data: PlanFeature_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<PlanFeature_On_Conflict>;
};

/** on_conflict condition type for table "PlanFeature" */
export type PlanFeature_On_Conflict = {
  constraint: PlanFeature_Constraint;
  update_columns?: Array<PlanFeature_Update_Column>;
  where?: InputMaybe<PlanFeature_Bool_Exp>;
};

/** Ordering options when selecting data from "PlanFeature". */
export type PlanFeature_Order_By = {
  PlanFeatureLimitations_aggregate?: InputMaybe<PlanFeatureLimitation_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  limitationSchema?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: PlanFeature */
export type PlanFeature_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type PlanFeature_Prepend_Input = {
  limitationSchema?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "PlanFeature" */
export enum PlanFeature_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  LimitationSchema = 'limitationSchema',
  /** column name */
  Title = 'title',
}

/** input type for updating data in table "PlanFeature" */
export type PlanFeature_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  limitationSchema?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type PlanFeature_Stddev_Fields = {
  __typename?: 'PlanFeature_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type PlanFeature_Stddev_Pop_Fields = {
  __typename?: 'PlanFeature_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type PlanFeature_Stddev_Samp_Fields = {
  __typename?: 'PlanFeature_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "PlanFeature" */
export type PlanFeature_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PlanFeature_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PlanFeature_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  limitationSchema?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type PlanFeature_Sum_Fields = {
  __typename?: 'PlanFeature_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "PlanFeature" */
export enum PlanFeature_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  LimitationSchema = 'limitationSchema',
  /** column name */
  Title = 'title',
}

export type PlanFeature_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<PlanFeature_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<PlanFeature_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<PlanFeature_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<PlanFeature_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PlanFeature_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<PlanFeature_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PlanFeature_Set_Input>;
  /** filter the rows which have to be updated */
  where: PlanFeature_Bool_Exp;
};

/** aggregate var_pop on columns */
export type PlanFeature_Var_Pop_Fields = {
  __typename?: 'PlanFeature_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type PlanFeature_Var_Samp_Fields = {
  __typename?: 'PlanFeature_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type PlanFeature_Variance_Fields = {
  __typename?: 'PlanFeature_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "PlanPeriod". All fields are combined with logical 'AND'. */
export type PlanPeriod_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['PlanPeriod']['input']>;
  _gt?: InputMaybe<Scalars['PlanPeriod']['input']>;
  _gte?: InputMaybe<Scalars['PlanPeriod']['input']>;
  _in?: InputMaybe<Array<Scalars['PlanPeriod']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['PlanPeriod']['input']>;
  _lte?: InputMaybe<Scalars['PlanPeriod']['input']>;
  _neq?: InputMaybe<Scalars['PlanPeriod']['input']>;
  _nin?: InputMaybe<Array<Scalars['PlanPeriod']['input']>>;
};

/** aggregated selection of "Plan" */
export type Plan_Aggregate = {
  __typename?: 'Plan_aggregate';
  aggregate?: Maybe<Plan_Aggregate_Fields>;
  nodes: Array<Plan>;
};

/** aggregate fields of "Plan" */
export type Plan_Aggregate_Fields = {
  __typename?: 'Plan_aggregate_fields';
  avg?: Maybe<Plan_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Plan_Max_Fields>;
  min?: Maybe<Plan_Min_Fields>;
  stddev?: Maybe<Plan_Stddev_Fields>;
  stddev_pop?: Maybe<Plan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plan_Stddev_Samp_Fields>;
  sum?: Maybe<Plan_Sum_Fields>;
  var_pop?: Maybe<Plan_Var_Pop_Fields>;
  var_samp?: Maybe<Plan_Var_Samp_Fields>;
  variance?: Maybe<Plan_Variance_Fields>;
};

/** aggregate fields of "Plan" */
export type Plan_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Plan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Plan_Avg_Fields = {
  __typename?: 'Plan_avg_fields';
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  period?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Plan". All fields are combined with a logical 'AND'. */
export type Plan_Bool_Exp = {
  PlanFeatureLimitations?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
  PlanFeatureLimitations_aggregate?: InputMaybe<PlanFeatureLimitation_Aggregate_Bool_Exp>;
  Subscriptions?: InputMaybe<Subscription_Bool_Exp>;
  Subscriptions_aggregate?: InputMaybe<Subscription_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Plan_Bool_Exp>>;
  _not?: InputMaybe<Plan_Bool_Exp>;
  _or?: InputMaybe<Array<Plan_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  discount?: InputMaybe<Float8_Comparison_Exp>;
  extraFeatures?: InputMaybe<String_Array_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  period?: InputMaybe<Int_Comparison_Exp>;
  periodType?: InputMaybe<PlanPeriod_Comparison_Exp>;
  price?: InputMaybe<Float8_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Plan" */
export enum Plan_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlanPkey = 'Plan_pkey',
}

/** input type for incrementing numeric columns in table "Plan" */
export type Plan_Inc_Input = {
  discount?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  period?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "Plan" */
export type Plan_Insert_Input = {
  PlanFeatureLimitations?: InputMaybe<PlanFeatureLimitation_Arr_Rel_Insert_Input>;
  Subscriptions?: InputMaybe<Subscription_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['float8']['input']>;
  extraFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['Int']['input']>;
  periodType?: InputMaybe<Scalars['PlanPeriod']['input']>;
  price?: InputMaybe<Scalars['float8']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Plan_Max_Fields = {
  __typename?: 'Plan_max_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['float8']['output']>;
  extraFeatures?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Scalars['Int']['output']>;
  periodType?: Maybe<Scalars['PlanPeriod']['output']>;
  price?: Maybe<Scalars['float8']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Plan_Min_Fields = {
  __typename?: 'Plan_min_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['float8']['output']>;
  extraFeatures?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Scalars['Int']['output']>;
  periodType?: Maybe<Scalars['PlanPeriod']['output']>;
  price?: Maybe<Scalars['float8']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "Plan" */
export type Plan_Mutation_Response = {
  __typename?: 'Plan_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Plan>;
};

/** input type for inserting object relation for remote table "Plan" */
export type Plan_Obj_Rel_Insert_Input = {
  data: Plan_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Plan_On_Conflict>;
};

/** on_conflict condition type for table "Plan" */
export type Plan_On_Conflict = {
  constraint: Plan_Constraint;
  update_columns?: Array<Plan_Update_Column>;
  where?: InputMaybe<Plan_Bool_Exp>;
};

/** Ordering options when selecting data from "Plan". */
export type Plan_Order_By = {
  PlanFeatureLimitations_aggregate?: InputMaybe<PlanFeatureLimitation_Aggregate_Order_By>;
  Subscriptions_aggregate?: InputMaybe<Subscription_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  extraFeatures?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  period?: InputMaybe<Order_By>;
  periodType?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Plan */
export type Plan_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Plan" */
export enum Plan_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Discount = 'discount',
  /** column name */
  ExtraFeatures = 'extraFeatures',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Period = 'period',
  /** column name */
  PeriodType = 'periodType',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "Plan" */
export type Plan_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['float8']['input']>;
  extraFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['Int']['input']>;
  periodType?: InputMaybe<Scalars['PlanPeriod']['input']>;
  price?: InputMaybe<Scalars['float8']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Plan_Stddev_Fields = {
  __typename?: 'Plan_stddev_fields';
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  period?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Plan_Stddev_Pop_Fields = {
  __typename?: 'Plan_stddev_pop_fields';
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  period?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Plan_Stddev_Samp_Fields = {
  __typename?: 'Plan_stddev_samp_fields';
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  period?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Plan" */
export type Plan_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Plan_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Plan_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['float8']['input']>;
  extraFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['Int']['input']>;
  periodType?: InputMaybe<Scalars['PlanPeriod']['input']>;
  price?: InputMaybe<Scalars['float8']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Plan_Sum_Fields = {
  __typename?: 'Plan_sum_fields';
  discount?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  period?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['float8']['output']>;
};

/** update columns of table "Plan" */
export enum Plan_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Discount = 'discount',
  /** column name */
  ExtraFeatures = 'extraFeatures',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Period = 'period',
  /** column name */
  PeriodType = 'periodType',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type Plan_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Plan_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Plan_Set_Input>;
  /** filter the rows which have to be updated */
  where: Plan_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Plan_Var_Pop_Fields = {
  __typename?: 'Plan_var_pop_fields';
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  period?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Plan_Var_Samp_Fields = {
  __typename?: 'Plan_var_samp_fields';
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  period?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Plan_Variance_Fields = {
  __typename?: 'Plan_variance_fields';
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  period?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "Plugin" */
export type Plugin = {
  __typename?: 'Plugin';
  /** An object relationship */
  Project: Project;
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  projectId: Scalars['uuid']['output'];
  value: Scalars['String']['output'];
  variation: Scalars['String']['output'];
};

/** aggregated selection of "Plugin" */
export type Plugin_Aggregate = {
  __typename?: 'Plugin_aggregate';
  aggregate?: Maybe<Plugin_Aggregate_Fields>;
  nodes: Array<Plugin>;
};

export type Plugin_Aggregate_Bool_Exp = {
  count?: InputMaybe<Plugin_Aggregate_Bool_Exp_Count>;
};

export type Plugin_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Plugin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Plugin_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Plugin" */
export type Plugin_Aggregate_Fields = {
  __typename?: 'Plugin_aggregate_fields';
  avg?: Maybe<Plugin_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Plugin_Max_Fields>;
  min?: Maybe<Plugin_Min_Fields>;
  stddev?: Maybe<Plugin_Stddev_Fields>;
  stddev_pop?: Maybe<Plugin_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plugin_Stddev_Samp_Fields>;
  sum?: Maybe<Plugin_Sum_Fields>;
  var_pop?: Maybe<Plugin_Var_Pop_Fields>;
  var_samp?: Maybe<Plugin_Var_Samp_Fields>;
  variance?: Maybe<Plugin_Variance_Fields>;
};

/** aggregate fields of "Plugin" */
export type Plugin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Plugin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Plugin" */
export type Plugin_Aggregate_Order_By = {
  avg?: InputMaybe<Plugin_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Plugin_Max_Order_By>;
  min?: InputMaybe<Plugin_Min_Order_By>;
  stddev?: InputMaybe<Plugin_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Plugin_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Plugin_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Plugin_Sum_Order_By>;
  var_pop?: InputMaybe<Plugin_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Plugin_Var_Samp_Order_By>;
  variance?: InputMaybe<Plugin_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Plugin" */
export type Plugin_Arr_Rel_Insert_Input = {
  data: Array<Plugin_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Plugin_On_Conflict>;
};

/** aggregate avg on columns */
export type Plugin_Avg_Fields = {
  __typename?: 'Plugin_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Plugin" */
export type Plugin_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Plugin". All fields are combined with a logical 'AND'. */
export type Plugin_Bool_Exp = {
  Project?: InputMaybe<Project_Bool_Exp>;
  _and?: InputMaybe<Array<Plugin_Bool_Exp>>;
  _not?: InputMaybe<Plugin_Bool_Exp>;
  _or?: InputMaybe<Array<Plugin_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
  variation?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Plugin" */
export enum Plugin_Constraint {
  /** unique or primary key constraint on columns "id" */
  PluginPkey = 'Plugin_pkey',
}

/** input type for incrementing numeric columns in table "Plugin" */
export type Plugin_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Plugin" */
export type Plugin_Insert_Input = {
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Plugin_Max_Fields = {
  __typename?: 'Plugin_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  variation?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "Plugin" */
export type Plugin_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  variation?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Plugin_Min_Fields = {
  __typename?: 'Plugin_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  variation?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "Plugin" */
export type Plugin_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  variation?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Plugin" */
export type Plugin_Mutation_Response = {
  __typename?: 'Plugin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Plugin>;
};

/** on_conflict condition type for table "Plugin" */
export type Plugin_On_Conflict = {
  constraint: Plugin_Constraint;
  update_columns?: Array<Plugin_Update_Column>;
  where?: InputMaybe<Plugin_Bool_Exp>;
};

/** Ordering options when selecting data from "Plugin". */
export type Plugin_Order_By = {
  Project?: InputMaybe<Project_Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  variation?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Plugin */
export type Plugin_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Plugin" */
export enum Plugin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Value = 'value',
  /** column name */
  Variation = 'variation',
}

/** input type for updating data in table "Plugin" */
export type Plugin_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Plugin_Stddev_Fields = {
  __typename?: 'Plugin_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Plugin" */
export type Plugin_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Plugin_Stddev_Pop_Fields = {
  __typename?: 'Plugin_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Plugin" */
export type Plugin_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Plugin_Stddev_Samp_Fields = {
  __typename?: 'Plugin_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Plugin" */
export type Plugin_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Plugin" */
export type Plugin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Plugin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Plugin_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Plugin_Sum_Fields = {
  __typename?: 'Plugin_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Plugin" */
export type Plugin_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "Plugin" */
export enum Plugin_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Value = 'value',
  /** column name */
  Variation = 'variation',
}

export type Plugin_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Plugin_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Plugin_Set_Input>;
  /** filter the rows which have to be updated */
  where: Plugin_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Plugin_Var_Pop_Fields = {
  __typename?: 'Plugin_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Plugin" */
export type Plugin_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Plugin_Var_Samp_Fields = {
  __typename?: 'Plugin_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Plugin" */
export type Plugin_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Plugin_Variance_Fields = {
  __typename?: 'Plugin_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Plugin" */
export type Plugin_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "Post" */
export type Post = {
  __typename?: 'Post';
  /** An object relationship */
  Project: Project;
  body: Scalars['String']['output'];
  createdAt: Scalars['timestamp']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imageAlt?: Maybe<Scalars['String']['output']>;
  imagePath: Scalars['String']['output'];
  projectId: Scalars['uuid']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

/** aggregated selection of "Post" */
export type Post_Aggregate = {
  __typename?: 'Post_aggregate';
  aggregate?: Maybe<Post_Aggregate_Fields>;
  nodes: Array<Post>;
};

export type Post_Aggregate_Bool_Exp = {
  count?: InputMaybe<Post_Aggregate_Bool_Exp_Count>;
};

export type Post_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Post_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Post" */
export type Post_Aggregate_Fields = {
  __typename?: 'Post_aggregate_fields';
  avg?: Maybe<Post_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Post_Max_Fields>;
  min?: Maybe<Post_Min_Fields>;
  stddev?: Maybe<Post_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Sum_Fields>;
  var_pop?: Maybe<Post_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Var_Samp_Fields>;
  variance?: Maybe<Post_Variance_Fields>;
};

/** aggregate fields of "Post" */
export type Post_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Post" */
export type Post_Aggregate_Order_By = {
  avg?: InputMaybe<Post_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Max_Order_By>;
  min?: InputMaybe<Post_Min_Order_By>;
  stddev?: InputMaybe<Post_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Post_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Post_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Post_Sum_Order_By>;
  var_pop?: InputMaybe<Post_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Post_Var_Samp_Order_By>;
  variance?: InputMaybe<Post_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Post" */
export type Post_Arr_Rel_Insert_Input = {
  data: Array<Post_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Avg_Fields = {
  __typename?: 'Post_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Post" */
export type Post_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Post". All fields are combined with a logical 'AND'. */
export type Post_Bool_Exp = {
  Project?: InputMaybe<Project_Bool_Exp>;
  _and?: InputMaybe<Array<Post_Bool_Exp>>;
  _not?: InputMaybe<Post_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  imageAlt?: InputMaybe<String_Comparison_Exp>;
  imagePath?: InputMaybe<String_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Post" */
export enum Post_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostPkey = 'Post_pkey',
}

/** input type for incrementing numeric columns in table "Post" */
export type Post_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Post" */
export type Post_Insert_Input = {
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imageAlt?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Post_Max_Fields = {
  __typename?: 'Post_max_fields';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imageAlt?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "Post" */
export type Post_Max_Order_By = {
  body?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageAlt?: InputMaybe<Order_By>;
  imagePath?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Min_Fields = {
  __typename?: 'Post_min_fields';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imageAlt?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "Post" */
export type Post_Min_Order_By = {
  body?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageAlt?: InputMaybe<Order_By>;
  imagePath?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Post" */
export type Post_Mutation_Response = {
  __typename?: 'Post_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Post>;
};

/** on_conflict condition type for table "Post" */
export type Post_On_Conflict = {
  constraint: Post_Constraint;
  update_columns?: Array<Post_Update_Column>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** Ordering options when selecting data from "Post". */
export type Post_Order_By = {
  Project?: InputMaybe<Project_Order_By>;
  body?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageAlt?: InputMaybe<Order_By>;
  imagePath?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Post */
export type Post_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Post" */
export enum Post_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageAlt = 'imageAlt',
  /** column name */
  ImagePath = 'imagePath',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
}

/** input type for updating data in table "Post" */
export type Post_Set_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imageAlt?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Post_Stddev_Fields = {
  __typename?: 'Post_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Post" */
export type Post_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Stddev_Pop_Fields = {
  __typename?: 'Post_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Post" */
export type Post_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Stddev_Samp_Fields = {
  __typename?: 'Post_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Post" */
export type Post_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Post" */
export type Post_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Stream_Cursor_Value_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imageAlt?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Post_Sum_Fields = {
  __typename?: 'Post_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Post" */
export type Post_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "Post" */
export enum Post_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageAlt = 'imageAlt',
  /** column name */
  ImagePath = 'imagePath',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
}

export type Post_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Post_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Post_Var_Pop_Fields = {
  __typename?: 'Post_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Post" */
export type Post_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Var_Samp_Fields = {
  __typename?: 'Post_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Post" */
export type Post_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Variance_Fields = {
  __typename?: 'Post_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Post" */
export type Post_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "PresentationVolume". All fields are combined with logical 'AND'. */
export type PresentationVolume_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['PresentationVolume']['input']>;
  _gt?: InputMaybe<Scalars['PresentationVolume']['input']>;
  _gte?: InputMaybe<Scalars['PresentationVolume']['input']>;
  _in?: InputMaybe<Array<Scalars['PresentationVolume']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['PresentationVolume']['input']>;
  _lte?: InputMaybe<Scalars['PresentationVolume']['input']>;
  _neq?: InputMaybe<Scalars['PresentationVolume']['input']>;
  _nin?: InputMaybe<Array<Scalars['PresentationVolume']['input']>>;
};

/** columns and relationships of "Project" */
export type Project = {
  __typename?: 'Project';
  /** An array relationship */
  Analytics: Array<Analytics>;
  /** An aggregate relationship */
  Analytics_aggregate: Analytics_Aggregate;
  /** An array relationship */
  ContactMessages: Array<ContactMessage>;
  /** An aggregate relationship */
  ContactMessages_aggregate: ContactMessage_Aggregate;
  /** An array relationship */
  ContentTypesOnProjects: Array<ContentTypesOnProjects>;
  /** An aggregate relationship */
  ContentTypesOnProjects_aggregate: ContentTypesOnProjects_Aggregate;
  /** An array relationship */
  DomainRegistrationsOnProjects: Array<DomainRegistrationsOnProjects>;
  /** An aggregate relationship */
  DomainRegistrationsOnProjects_aggregate: DomainRegistrationsOnProjects_Aggregate;
  /** An array relationship */
  Media: Array<Media>;
  /** An aggregate relationship */
  Media_aggregate: Media_Aggregate;
  /** An array relationship */
  Menus: Array<Menu>;
  /** An aggregate relationship */
  Menus_aggregate: Menu_Aggregate;
  /** An array relationship */
  Pages: Array<Page>;
  /** An aggregate relationship */
  Pages_aggregate: Page_Aggregate;
  /** An array relationship */
  Plugins: Array<Plugin>;
  /** An aggregate relationship */
  Plugins_aggregate: Plugin_Aggregate;
  /** An array relationship */
  Posts: Array<Post>;
  /** An aggregate relationship */
  Posts_aggregate: Post_Aggregate;
  /** An array relationship */
  ProjectAudiences: Array<ProjectAudience>;
  /** An aggregate relationship */
  ProjectAudiences_aggregate: ProjectAudience_Aggregate;
  /** An array relationship */
  ProjectSettings: Array<ProjectSettings>;
  /** An aggregate relationship */
  ProjectSettings_aggregate: ProjectSettings_Aggregate;
  /** An object relationship */
  User: User;
  /** An array relationship */
  VisualTypesOnProjects: Array<VisualTypesOnProjects>;
  /** An aggregate relationship */
  VisualTypesOnProjects_aggregate: VisualTypesOnProjects_Aggregate;
  cdnPullZoneId?: Maybe<Scalars['Int']['output']>;
  contentType: Scalars['ContentTypeVariation']['output'];
  createdAt: Scalars['timestamp']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  intellectualPropertyInfo: Scalars['jsonb']['output'];
  intellectualPropertyType: Scalars['IntellectualPropertyType']['output'];
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  mainLanguage: Scalars['String']['output'];
  name: Scalars['String']['output'];
  presentationVolume: Scalars['PresentationVolume']['output'];
  purpose: Scalars['String']['output'];
  similarWebsites?: Maybe<Array<Scalars['String']['output']>>;
  userId: Scalars['String']['output'];
  websiteLocation: Scalars['String']['output'];
};

/** columns and relationships of "Project" */
export type ProjectAnalyticsArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Order_By>>;
  where?: InputMaybe<Analytics_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectAnalytics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Order_By>>;
  where?: InputMaybe<Analytics_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectContactMessagesArgs = {
  distinct_on?: InputMaybe<Array<ContactMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContactMessage_Order_By>>;
  where?: InputMaybe<ContactMessage_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectContactMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContactMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContactMessage_Order_By>>;
  where?: InputMaybe<ContactMessage_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectContentTypesOnProjectsArgs = {
  distinct_on?: InputMaybe<Array<ContentTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentTypesOnProjects_Order_By>>;
  where?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectContentTypesOnProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContentTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentTypesOnProjects_Order_By>>;
  where?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectDomainRegistrationsOnProjectsArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistrationsOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistrationsOnProjects_Order_By>>;
  where?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectDomainRegistrationsOnProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistrationsOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistrationsOnProjects_Order_By>>;
  where?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectMediaArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectMedia_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectMenusArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectMenus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectPagesArgs = {
  distinct_on?: InputMaybe<Array<Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Order_By>>;
  where?: InputMaybe<Page_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Order_By>>;
  where?: InputMaybe<Page_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectPluginsArgs = {
  distinct_on?: InputMaybe<Array<Plugin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plugin_Order_By>>;
  where?: InputMaybe<Plugin_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectPlugins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plugin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plugin_Order_By>>;
  where?: InputMaybe<Plugin_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectPostsArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectProjectAudiencesArgs = {
  distinct_on?: InputMaybe<Array<ProjectAudience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProjectAudience_Order_By>>;
  where?: InputMaybe<ProjectAudience_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectProjectAudiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectAudience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProjectAudience_Order_By>>;
  where?: InputMaybe<ProjectAudience_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectProjectSettingsArgs = {
  distinct_on?: InputMaybe<Array<ProjectSettings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProjectSettings_Order_By>>;
  where?: InputMaybe<ProjectSettings_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectProjectSettings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectSettings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProjectSettings_Order_By>>;
  where?: InputMaybe<ProjectSettings_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectVisualTypesOnProjectsArgs = {
  distinct_on?: InputMaybe<Array<VisualTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VisualTypesOnProjects_Order_By>>;
  where?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectVisualTypesOnProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VisualTypesOnProjects_Order_By>>;
  where?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
};

/** columns and relationships of "Project" */
export type ProjectIntellectualPropertyInfoArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "ProjectAudience" */
export type ProjectAudience = {
  __typename?: 'ProjectAudience';
  /** An object relationship */
  Project: Project;
  age?: Maybe<Array<Scalars['String']['output']>>;
  countries?: Maybe<Array<Scalars['String']['output']>>;
  gender?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['Int']['output'];
  knowledge?: Maybe<Array<Scalars['String']['output']>>;
  language?: Maybe<Array<Scalars['String']['output']>>;
  organizations?: Maybe<Array<Scalars['String']['output']>>;
  projectId: Scalars['uuid']['output'];
};

/** aggregated selection of "ProjectAudience" */
export type ProjectAudience_Aggregate = {
  __typename?: 'ProjectAudience_aggregate';
  aggregate?: Maybe<ProjectAudience_Aggregate_Fields>;
  nodes: Array<ProjectAudience>;
};

export type ProjectAudience_Aggregate_Bool_Exp = {
  count?: InputMaybe<ProjectAudience_Aggregate_Bool_Exp_Count>;
};

export type ProjectAudience_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ProjectAudience_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ProjectAudience_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ProjectAudience" */
export type ProjectAudience_Aggregate_Fields = {
  __typename?: 'ProjectAudience_aggregate_fields';
  avg?: Maybe<ProjectAudience_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ProjectAudience_Max_Fields>;
  min?: Maybe<ProjectAudience_Min_Fields>;
  stddev?: Maybe<ProjectAudience_Stddev_Fields>;
  stddev_pop?: Maybe<ProjectAudience_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ProjectAudience_Stddev_Samp_Fields>;
  sum?: Maybe<ProjectAudience_Sum_Fields>;
  var_pop?: Maybe<ProjectAudience_Var_Pop_Fields>;
  var_samp?: Maybe<ProjectAudience_Var_Samp_Fields>;
  variance?: Maybe<ProjectAudience_Variance_Fields>;
};

/** aggregate fields of "ProjectAudience" */
export type ProjectAudience_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectAudience_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "ProjectAudience" */
export type ProjectAudience_Aggregate_Order_By = {
  avg?: InputMaybe<ProjectAudience_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ProjectAudience_Max_Order_By>;
  min?: InputMaybe<ProjectAudience_Min_Order_By>;
  stddev?: InputMaybe<ProjectAudience_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ProjectAudience_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ProjectAudience_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ProjectAudience_Sum_Order_By>;
  var_pop?: InputMaybe<ProjectAudience_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ProjectAudience_Var_Samp_Order_By>;
  variance?: InputMaybe<ProjectAudience_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ProjectAudience" */
export type ProjectAudience_Arr_Rel_Insert_Input = {
  data: Array<ProjectAudience_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<ProjectAudience_On_Conflict>;
};

/** aggregate avg on columns */
export type ProjectAudience_Avg_Fields = {
  __typename?: 'ProjectAudience_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "ProjectAudience" */
export type ProjectAudience_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ProjectAudience". All fields are combined with a logical 'AND'. */
export type ProjectAudience_Bool_Exp = {
  Project?: InputMaybe<Project_Bool_Exp>;
  _and?: InputMaybe<Array<ProjectAudience_Bool_Exp>>;
  _not?: InputMaybe<ProjectAudience_Bool_Exp>;
  _or?: InputMaybe<Array<ProjectAudience_Bool_Exp>>;
  age?: InputMaybe<String_Array_Comparison_Exp>;
  countries?: InputMaybe<String_Array_Comparison_Exp>;
  gender?: InputMaybe<String_Array_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  knowledge?: InputMaybe<String_Array_Comparison_Exp>;
  language?: InputMaybe<String_Array_Comparison_Exp>;
  organizations?: InputMaybe<String_Array_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "ProjectAudience" */
export enum ProjectAudience_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectAudiencePkey = 'ProjectAudience_pkey',
  /** unique or primary key constraint on columns "projectId" */
  ProjectAudienceProjectIdKey = 'ProjectAudience_projectId_key',
}

/** input type for incrementing numeric columns in table "ProjectAudience" */
export type ProjectAudience_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ProjectAudience" */
export type ProjectAudience_Insert_Input = {
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  age?: InputMaybe<Array<Scalars['String']['input']>>;
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  gender?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  knowledge?: InputMaybe<Array<Scalars['String']['input']>>;
  language?: InputMaybe<Array<Scalars['String']['input']>>;
  organizations?: InputMaybe<Array<Scalars['String']['input']>>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type ProjectAudience_Max_Fields = {
  __typename?: 'ProjectAudience_max_fields';
  age?: Maybe<Array<Scalars['String']['output']>>;
  countries?: Maybe<Array<Scalars['String']['output']>>;
  gender?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['Int']['output']>;
  knowledge?: Maybe<Array<Scalars['String']['output']>>;
  language?: Maybe<Array<Scalars['String']['output']>>;
  organizations?: Maybe<Array<Scalars['String']['output']>>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "ProjectAudience" */
export type ProjectAudience_Max_Order_By = {
  age?: InputMaybe<Order_By>;
  countries?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  knowledge?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  organizations?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ProjectAudience_Min_Fields = {
  __typename?: 'ProjectAudience_min_fields';
  age?: Maybe<Array<Scalars['String']['output']>>;
  countries?: Maybe<Array<Scalars['String']['output']>>;
  gender?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['Int']['output']>;
  knowledge?: Maybe<Array<Scalars['String']['output']>>;
  language?: Maybe<Array<Scalars['String']['output']>>;
  organizations?: Maybe<Array<Scalars['String']['output']>>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "ProjectAudience" */
export type ProjectAudience_Min_Order_By = {
  age?: InputMaybe<Order_By>;
  countries?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  knowledge?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  organizations?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ProjectAudience" */
export type ProjectAudience_Mutation_Response = {
  __typename?: 'ProjectAudience_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectAudience>;
};

/** on_conflict condition type for table "ProjectAudience" */
export type ProjectAudience_On_Conflict = {
  constraint: ProjectAudience_Constraint;
  update_columns?: Array<ProjectAudience_Update_Column>;
  where?: InputMaybe<ProjectAudience_Bool_Exp>;
};

/** Ordering options when selecting data from "ProjectAudience". */
export type ProjectAudience_Order_By = {
  Project?: InputMaybe<Project_Order_By>;
  age?: InputMaybe<Order_By>;
  countries?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  knowledge?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  organizations?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ProjectAudience */
export type ProjectAudience_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "ProjectAudience" */
export enum ProjectAudience_Select_Column {
  /** column name */
  Age = 'age',
  /** column name */
  Countries = 'countries',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Knowledge = 'knowledge',
  /** column name */
  Language = 'language',
  /** column name */
  Organizations = 'organizations',
  /** column name */
  ProjectId = 'projectId',
}

/** input type for updating data in table "ProjectAudience" */
export type ProjectAudience_Set_Input = {
  age?: InputMaybe<Array<Scalars['String']['input']>>;
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  gender?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  knowledge?: InputMaybe<Array<Scalars['String']['input']>>;
  language?: InputMaybe<Array<Scalars['String']['input']>>;
  organizations?: InputMaybe<Array<Scalars['String']['input']>>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type ProjectAudience_Stddev_Fields = {
  __typename?: 'ProjectAudience_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "ProjectAudience" */
export type ProjectAudience_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ProjectAudience_Stddev_Pop_Fields = {
  __typename?: 'ProjectAudience_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "ProjectAudience" */
export type ProjectAudience_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ProjectAudience_Stddev_Samp_Fields = {
  __typename?: 'ProjectAudience_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "ProjectAudience" */
export type ProjectAudience_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ProjectAudience" */
export type ProjectAudience_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ProjectAudience_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ProjectAudience_Stream_Cursor_Value_Input = {
  age?: InputMaybe<Array<Scalars['String']['input']>>;
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  gender?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  knowledge?: InputMaybe<Array<Scalars['String']['input']>>;
  language?: InputMaybe<Array<Scalars['String']['input']>>;
  organizations?: InputMaybe<Array<Scalars['String']['input']>>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type ProjectAudience_Sum_Fields = {
  __typename?: 'ProjectAudience_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "ProjectAudience" */
export type ProjectAudience_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "ProjectAudience" */
export enum ProjectAudience_Update_Column {
  /** column name */
  Age = 'age',
  /** column name */
  Countries = 'countries',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Knowledge = 'knowledge',
  /** column name */
  Language = 'language',
  /** column name */
  Organizations = 'organizations',
  /** column name */
  ProjectId = 'projectId',
}

export type ProjectAudience_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ProjectAudience_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectAudience_Set_Input>;
  /** filter the rows which have to be updated */
  where: ProjectAudience_Bool_Exp;
};

/** aggregate var_pop on columns */
export type ProjectAudience_Var_Pop_Fields = {
  __typename?: 'ProjectAudience_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "ProjectAudience" */
export type ProjectAudience_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ProjectAudience_Var_Samp_Fields = {
  __typename?: 'ProjectAudience_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "ProjectAudience" */
export type ProjectAudience_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type ProjectAudience_Variance_Fields = {
  __typename?: 'ProjectAudience_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "ProjectAudience" */
export type ProjectAudience_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "ProjectSettings" */
export type ProjectSettings = {
  __typename?: 'ProjectSettings';
  /** An object relationship */
  Project: Project;
  fontFamily: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  logoType: Scalars['String']['output'];
  logoValue: Scalars['String']['output'];
  palette: Scalars['jsonb']['output'];
  projectId: Scalars['uuid']['output'];
};

/** columns and relationships of "ProjectSettings" */
export type ProjectSettingsPaletteArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "ProjectSettings" */
export type ProjectSettings_Aggregate = {
  __typename?: 'ProjectSettings_aggregate';
  aggregate?: Maybe<ProjectSettings_Aggregate_Fields>;
  nodes: Array<ProjectSettings>;
};

export type ProjectSettings_Aggregate_Bool_Exp = {
  count?: InputMaybe<ProjectSettings_Aggregate_Bool_Exp_Count>;
};

export type ProjectSettings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ProjectSettings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ProjectSettings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ProjectSettings" */
export type ProjectSettings_Aggregate_Fields = {
  __typename?: 'ProjectSettings_aggregate_fields';
  avg?: Maybe<ProjectSettings_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ProjectSettings_Max_Fields>;
  min?: Maybe<ProjectSettings_Min_Fields>;
  stddev?: Maybe<ProjectSettings_Stddev_Fields>;
  stddev_pop?: Maybe<ProjectSettings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ProjectSettings_Stddev_Samp_Fields>;
  sum?: Maybe<ProjectSettings_Sum_Fields>;
  var_pop?: Maybe<ProjectSettings_Var_Pop_Fields>;
  var_samp?: Maybe<ProjectSettings_Var_Samp_Fields>;
  variance?: Maybe<ProjectSettings_Variance_Fields>;
};

/** aggregate fields of "ProjectSettings" */
export type ProjectSettings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectSettings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "ProjectSettings" */
export type ProjectSettings_Aggregate_Order_By = {
  avg?: InputMaybe<ProjectSettings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ProjectSettings_Max_Order_By>;
  min?: InputMaybe<ProjectSettings_Min_Order_By>;
  stddev?: InputMaybe<ProjectSettings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ProjectSettings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ProjectSettings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ProjectSettings_Sum_Order_By>;
  var_pop?: InputMaybe<ProjectSettings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ProjectSettings_Var_Samp_Order_By>;
  variance?: InputMaybe<ProjectSettings_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ProjectSettings_Append_Input = {
  palette?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "ProjectSettings" */
export type ProjectSettings_Arr_Rel_Insert_Input = {
  data: Array<ProjectSettings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<ProjectSettings_On_Conflict>;
};

/** aggregate avg on columns */
export type ProjectSettings_Avg_Fields = {
  __typename?: 'ProjectSettings_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "ProjectSettings" */
export type ProjectSettings_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ProjectSettings". All fields are combined with a logical 'AND'. */
export type ProjectSettings_Bool_Exp = {
  Project?: InputMaybe<Project_Bool_Exp>;
  _and?: InputMaybe<Array<ProjectSettings_Bool_Exp>>;
  _not?: InputMaybe<ProjectSettings_Bool_Exp>;
  _or?: InputMaybe<Array<ProjectSettings_Bool_Exp>>;
  fontFamily?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  logoType?: InputMaybe<String_Comparison_Exp>;
  logoValue?: InputMaybe<String_Comparison_Exp>;
  palette?: InputMaybe<Jsonb_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "ProjectSettings" */
export enum ProjectSettings_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectSettingsPkey = 'ProjectSettings_pkey',
  /** unique or primary key constraint on columns "projectId" */
  ProjectSettingsProjectIdKey = 'ProjectSettings_projectId_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ProjectSettings_Delete_At_Path_Input = {
  palette?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ProjectSettings_Delete_Elem_Input = {
  palette?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ProjectSettings_Delete_Key_Input = {
  palette?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "ProjectSettings" */
export type ProjectSettings_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ProjectSettings" */
export type ProjectSettings_Insert_Input = {
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  fontFamily?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  logoType?: InputMaybe<Scalars['String']['input']>;
  logoValue?: InputMaybe<Scalars['String']['input']>;
  palette?: InputMaybe<Scalars['jsonb']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type ProjectSettings_Max_Fields = {
  __typename?: 'ProjectSettings_max_fields';
  fontFamily?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logoType?: Maybe<Scalars['String']['output']>;
  logoValue?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "ProjectSettings" */
export type ProjectSettings_Max_Order_By = {
  fontFamily?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logoType?: InputMaybe<Order_By>;
  logoValue?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ProjectSettings_Min_Fields = {
  __typename?: 'ProjectSettings_min_fields';
  fontFamily?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logoType?: Maybe<Scalars['String']['output']>;
  logoValue?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "ProjectSettings" */
export type ProjectSettings_Min_Order_By = {
  fontFamily?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logoType?: InputMaybe<Order_By>;
  logoValue?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ProjectSettings" */
export type ProjectSettings_Mutation_Response = {
  __typename?: 'ProjectSettings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectSettings>;
};

/** on_conflict condition type for table "ProjectSettings" */
export type ProjectSettings_On_Conflict = {
  constraint: ProjectSettings_Constraint;
  update_columns?: Array<ProjectSettings_Update_Column>;
  where?: InputMaybe<ProjectSettings_Bool_Exp>;
};

/** Ordering options when selecting data from "ProjectSettings". */
export type ProjectSettings_Order_By = {
  Project?: InputMaybe<Project_Order_By>;
  fontFamily?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logoType?: InputMaybe<Order_By>;
  logoValue?: InputMaybe<Order_By>;
  palette?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ProjectSettings */
export type ProjectSettings_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ProjectSettings_Prepend_Input = {
  palette?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "ProjectSettings" */
export enum ProjectSettings_Select_Column {
  /** column name */
  FontFamily = 'fontFamily',
  /** column name */
  Id = 'id',
  /** column name */
  LogoType = 'logoType',
  /** column name */
  LogoValue = 'logoValue',
  /** column name */
  Palette = 'palette',
  /** column name */
  ProjectId = 'projectId',
}

/** input type for updating data in table "ProjectSettings" */
export type ProjectSettings_Set_Input = {
  fontFamily?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  logoType?: InputMaybe<Scalars['String']['input']>;
  logoValue?: InputMaybe<Scalars['String']['input']>;
  palette?: InputMaybe<Scalars['jsonb']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type ProjectSettings_Stddev_Fields = {
  __typename?: 'ProjectSettings_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "ProjectSettings" */
export type ProjectSettings_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ProjectSettings_Stddev_Pop_Fields = {
  __typename?: 'ProjectSettings_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "ProjectSettings" */
export type ProjectSettings_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ProjectSettings_Stddev_Samp_Fields = {
  __typename?: 'ProjectSettings_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "ProjectSettings" */
export type ProjectSettings_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ProjectSettings" */
export type ProjectSettings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ProjectSettings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ProjectSettings_Stream_Cursor_Value_Input = {
  fontFamily?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  logoType?: InputMaybe<Scalars['String']['input']>;
  logoValue?: InputMaybe<Scalars['String']['input']>;
  palette?: InputMaybe<Scalars['jsonb']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type ProjectSettings_Sum_Fields = {
  __typename?: 'ProjectSettings_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "ProjectSettings" */
export type ProjectSettings_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "ProjectSettings" */
export enum ProjectSettings_Update_Column {
  /** column name */
  FontFamily = 'fontFamily',
  /** column name */
  Id = 'id',
  /** column name */
  LogoType = 'logoType',
  /** column name */
  LogoValue = 'logoValue',
  /** column name */
  Palette = 'palette',
  /** column name */
  ProjectId = 'projectId',
}

export type ProjectSettings_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<ProjectSettings_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<ProjectSettings_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<ProjectSettings_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<ProjectSettings_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ProjectSettings_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<ProjectSettings_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectSettings_Set_Input>;
  /** filter the rows which have to be updated */
  where: ProjectSettings_Bool_Exp;
};

/** aggregate var_pop on columns */
export type ProjectSettings_Var_Pop_Fields = {
  __typename?: 'ProjectSettings_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "ProjectSettings" */
export type ProjectSettings_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ProjectSettings_Var_Samp_Fields = {
  __typename?: 'ProjectSettings_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "ProjectSettings" */
export type ProjectSettings_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type ProjectSettings_Variance_Fields = {
  __typename?: 'ProjectSettings_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "ProjectSettings" */
export type ProjectSettings_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregated selection of "Project" */
export type Project_Aggregate = {
  __typename?: 'Project_aggregate';
  aggregate?: Maybe<Project_Aggregate_Fields>;
  nodes: Array<Project>;
};

export type Project_Aggregate_Bool_Exp = {
  count?: InputMaybe<Project_Aggregate_Bool_Exp_Count>;
};

export type Project_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Project_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Project_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Project" */
export type Project_Aggregate_Fields = {
  __typename?: 'Project_aggregate_fields';
  avg?: Maybe<Project_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Project_Max_Fields>;
  min?: Maybe<Project_Min_Fields>;
  stddev?: Maybe<Project_Stddev_Fields>;
  stddev_pop?: Maybe<Project_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_Stddev_Samp_Fields>;
  sum?: Maybe<Project_Sum_Fields>;
  var_pop?: Maybe<Project_Var_Pop_Fields>;
  var_samp?: Maybe<Project_Var_Samp_Fields>;
  variance?: Maybe<Project_Variance_Fields>;
};

/** aggregate fields of "Project" */
export type Project_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Project" */
export type Project_Aggregate_Order_By = {
  avg?: InputMaybe<Project_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Project_Max_Order_By>;
  min?: InputMaybe<Project_Min_Order_By>;
  stddev?: InputMaybe<Project_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Project_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Project_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Project_Sum_Order_By>;
  var_pop?: InputMaybe<Project_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Project_Var_Samp_Order_By>;
  variance?: InputMaybe<Project_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Project_Append_Input = {
  intellectualPropertyInfo?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "Project" */
export type Project_Arr_Rel_Insert_Input = {
  data: Array<Project_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** aggregate avg on columns */
export type Project_Avg_Fields = {
  __typename?: 'Project_avg_fields';
  cdnPullZoneId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Project" */
export type Project_Avg_Order_By = {
  cdnPullZoneId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Project". All fields are combined with a logical 'AND'. */
export type Project_Bool_Exp = {
  Analytics?: InputMaybe<Analytics_Bool_Exp>;
  Analytics_aggregate?: InputMaybe<Analytics_Aggregate_Bool_Exp>;
  ContactMessages?: InputMaybe<ContactMessage_Bool_Exp>;
  ContactMessages_aggregate?: InputMaybe<ContactMessage_Aggregate_Bool_Exp>;
  ContentTypesOnProjects?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
  ContentTypesOnProjects_aggregate?: InputMaybe<ContentTypesOnProjects_Aggregate_Bool_Exp>;
  DomainRegistrationsOnProjects?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
  DomainRegistrationsOnProjects_aggregate?: InputMaybe<DomainRegistrationsOnProjects_Aggregate_Bool_Exp>;
  Media?: InputMaybe<Media_Bool_Exp>;
  Media_aggregate?: InputMaybe<Media_Aggregate_Bool_Exp>;
  Menus?: InputMaybe<Menu_Bool_Exp>;
  Menus_aggregate?: InputMaybe<Menu_Aggregate_Bool_Exp>;
  Pages?: InputMaybe<Page_Bool_Exp>;
  Pages_aggregate?: InputMaybe<Page_Aggregate_Bool_Exp>;
  Plugins?: InputMaybe<Plugin_Bool_Exp>;
  Plugins_aggregate?: InputMaybe<Plugin_Aggregate_Bool_Exp>;
  Posts?: InputMaybe<Post_Bool_Exp>;
  Posts_aggregate?: InputMaybe<Post_Aggregate_Bool_Exp>;
  ProjectAudiences?: InputMaybe<ProjectAudience_Bool_Exp>;
  ProjectAudiences_aggregate?: InputMaybe<ProjectAudience_Aggregate_Bool_Exp>;
  ProjectSettings?: InputMaybe<ProjectSettings_Bool_Exp>;
  ProjectSettings_aggregate?: InputMaybe<ProjectSettings_Aggregate_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  VisualTypesOnProjects?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
  VisualTypesOnProjects_aggregate?: InputMaybe<VisualTypesOnProjects_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Project_Bool_Exp>>;
  _not?: InputMaybe<Project_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Bool_Exp>>;
  cdnPullZoneId?: InputMaybe<Int_Comparison_Exp>;
  contentType?: InputMaybe<ContentTypeVariation_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  intellectualPropertyInfo?: InputMaybe<Jsonb_Comparison_Exp>;
  intellectualPropertyType?: InputMaybe<IntellectualPropertyType_Comparison_Exp>;
  keywords?: InputMaybe<String_Array_Comparison_Exp>;
  mainLanguage?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  presentationVolume?: InputMaybe<PresentationVolume_Comparison_Exp>;
  purpose?: InputMaybe<String_Comparison_Exp>;
  similarWebsites?: InputMaybe<String_Array_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
  websiteLocation?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Project" */
export enum Project_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectPkey = 'Project_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Project_Delete_At_Path_Input = {
  intellectualPropertyInfo?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Project_Delete_Elem_Input = {
  intellectualPropertyInfo?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Project_Delete_Key_Input = {
  intellectualPropertyInfo?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "Project" */
export type Project_Inc_Input = {
  cdnPullZoneId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Project" */
export type Project_Insert_Input = {
  Analytics?: InputMaybe<Analytics_Arr_Rel_Insert_Input>;
  ContactMessages?: InputMaybe<ContactMessage_Arr_Rel_Insert_Input>;
  ContentTypesOnProjects?: InputMaybe<ContentTypesOnProjects_Arr_Rel_Insert_Input>;
  DomainRegistrationsOnProjects?: InputMaybe<DomainRegistrationsOnProjects_Arr_Rel_Insert_Input>;
  Media?: InputMaybe<Media_Arr_Rel_Insert_Input>;
  Menus?: InputMaybe<Menu_Arr_Rel_Insert_Input>;
  Pages?: InputMaybe<Page_Arr_Rel_Insert_Input>;
  Plugins?: InputMaybe<Plugin_Arr_Rel_Insert_Input>;
  Posts?: InputMaybe<Post_Arr_Rel_Insert_Input>;
  ProjectAudiences?: InputMaybe<ProjectAudience_Arr_Rel_Insert_Input>;
  ProjectSettings?: InputMaybe<ProjectSettings_Arr_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  VisualTypesOnProjects?: InputMaybe<VisualTypesOnProjects_Arr_Rel_Insert_Input>;
  cdnPullZoneId?: InputMaybe<Scalars['Int']['input']>;
  contentType?: InputMaybe<Scalars['ContentTypeVariation']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  intellectualPropertyInfo?: InputMaybe<Scalars['jsonb']['input']>;
  intellectualPropertyType?: InputMaybe<Scalars['IntellectualPropertyType']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  mainLanguage?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  presentationVolume?: InputMaybe<Scalars['PresentationVolume']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  similarWebsites?: InputMaybe<Array<Scalars['String']['input']>>;
  userId?: InputMaybe<Scalars['String']['input']>;
  websiteLocation?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Project_Max_Fields = {
  __typename?: 'Project_max_fields';
  cdnPullZoneId?: Maybe<Scalars['Int']['output']>;
  contentType?: Maybe<Scalars['ContentTypeVariation']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  intellectualPropertyType?: Maybe<Scalars['IntellectualPropertyType']['output']>;
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  mainLanguage?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  presentationVolume?: Maybe<Scalars['PresentationVolume']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  similarWebsites?: Maybe<Array<Scalars['String']['output']>>;
  userId?: Maybe<Scalars['String']['output']>;
  websiteLocation?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "Project" */
export type Project_Max_Order_By = {
  cdnPullZoneId?: InputMaybe<Order_By>;
  contentType?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  intellectualPropertyType?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  mainLanguage?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  presentationVolume?: InputMaybe<Order_By>;
  purpose?: InputMaybe<Order_By>;
  similarWebsites?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  websiteLocation?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Min_Fields = {
  __typename?: 'Project_min_fields';
  cdnPullZoneId?: Maybe<Scalars['Int']['output']>;
  contentType?: Maybe<Scalars['ContentTypeVariation']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  intellectualPropertyType?: Maybe<Scalars['IntellectualPropertyType']['output']>;
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  mainLanguage?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  presentationVolume?: Maybe<Scalars['PresentationVolume']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  similarWebsites?: Maybe<Array<Scalars['String']['output']>>;
  userId?: Maybe<Scalars['String']['output']>;
  websiteLocation?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "Project" */
export type Project_Min_Order_By = {
  cdnPullZoneId?: InputMaybe<Order_By>;
  contentType?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  intellectualPropertyType?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  mainLanguage?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  presentationVolume?: InputMaybe<Order_By>;
  purpose?: InputMaybe<Order_By>;
  similarWebsites?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  websiteLocation?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Project" */
export type Project_Mutation_Response = {
  __typename?: 'Project_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Project>;
};

/** input type for inserting object relation for remote table "Project" */
export type Project_Obj_Rel_Insert_Input = {
  data: Project_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** on_conflict condition type for table "Project" */
export type Project_On_Conflict = {
  constraint: Project_Constraint;
  update_columns?: Array<Project_Update_Column>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** Ordering options when selecting data from "Project". */
export type Project_Order_By = {
  Analytics_aggregate?: InputMaybe<Analytics_Aggregate_Order_By>;
  ContactMessages_aggregate?: InputMaybe<ContactMessage_Aggregate_Order_By>;
  ContentTypesOnProjects_aggregate?: InputMaybe<ContentTypesOnProjects_Aggregate_Order_By>;
  DomainRegistrationsOnProjects_aggregate?: InputMaybe<DomainRegistrationsOnProjects_Aggregate_Order_By>;
  Media_aggregate?: InputMaybe<Media_Aggregate_Order_By>;
  Menus_aggregate?: InputMaybe<Menu_Aggregate_Order_By>;
  Pages_aggregate?: InputMaybe<Page_Aggregate_Order_By>;
  Plugins_aggregate?: InputMaybe<Plugin_Aggregate_Order_By>;
  Posts_aggregate?: InputMaybe<Post_Aggregate_Order_By>;
  ProjectAudiences_aggregate?: InputMaybe<ProjectAudience_Aggregate_Order_By>;
  ProjectSettings_aggregate?: InputMaybe<ProjectSettings_Aggregate_Order_By>;
  User?: InputMaybe<User_Order_By>;
  VisualTypesOnProjects_aggregate?: InputMaybe<VisualTypesOnProjects_Aggregate_Order_By>;
  cdnPullZoneId?: InputMaybe<Order_By>;
  contentType?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  intellectualPropertyInfo?: InputMaybe<Order_By>;
  intellectualPropertyType?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  mainLanguage?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  presentationVolume?: InputMaybe<Order_By>;
  purpose?: InputMaybe<Order_By>;
  similarWebsites?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  websiteLocation?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Project */
export type Project_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Project_Prepend_Input = {
  intellectualPropertyInfo?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "Project" */
export enum Project_Select_Column {
  /** column name */
  CdnPullZoneId = 'cdnPullZoneId',
  /** column name */
  ContentType = 'contentType',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IntellectualPropertyInfo = 'intellectualPropertyInfo',
  /** column name */
  IntellectualPropertyType = 'intellectualPropertyType',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  MainLanguage = 'mainLanguage',
  /** column name */
  Name = 'name',
  /** column name */
  PresentationVolume = 'presentationVolume',
  /** column name */
  Purpose = 'purpose',
  /** column name */
  SimilarWebsites = 'similarWebsites',
  /** column name */
  UserId = 'userId',
  /** column name */
  WebsiteLocation = 'websiteLocation',
}

/** input type for updating data in table "Project" */
export type Project_Set_Input = {
  cdnPullZoneId?: InputMaybe<Scalars['Int']['input']>;
  contentType?: InputMaybe<Scalars['ContentTypeVariation']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  intellectualPropertyInfo?: InputMaybe<Scalars['jsonb']['input']>;
  intellectualPropertyType?: InputMaybe<Scalars['IntellectualPropertyType']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  mainLanguage?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  presentationVolume?: InputMaybe<Scalars['PresentationVolume']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  similarWebsites?: InputMaybe<Array<Scalars['String']['input']>>;
  userId?: InputMaybe<Scalars['String']['input']>;
  websiteLocation?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Project_Stddev_Fields = {
  __typename?: 'Project_stddev_fields';
  cdnPullZoneId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Project" */
export type Project_Stddev_Order_By = {
  cdnPullZoneId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Project_Stddev_Pop_Fields = {
  __typename?: 'Project_stddev_pop_fields';
  cdnPullZoneId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Project" */
export type Project_Stddev_Pop_Order_By = {
  cdnPullZoneId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Project_Stddev_Samp_Fields = {
  __typename?: 'Project_stddev_samp_fields';
  cdnPullZoneId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Project" */
export type Project_Stddev_Samp_Order_By = {
  cdnPullZoneId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Project" */
export type Project_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Stream_Cursor_Value_Input = {
  cdnPullZoneId?: InputMaybe<Scalars['Int']['input']>;
  contentType?: InputMaybe<Scalars['ContentTypeVariation']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  intellectualPropertyInfo?: InputMaybe<Scalars['jsonb']['input']>;
  intellectualPropertyType?: InputMaybe<Scalars['IntellectualPropertyType']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  mainLanguage?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  presentationVolume?: InputMaybe<Scalars['PresentationVolume']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  similarWebsites?: InputMaybe<Array<Scalars['String']['input']>>;
  userId?: InputMaybe<Scalars['String']['input']>;
  websiteLocation?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Project_Sum_Fields = {
  __typename?: 'Project_sum_fields';
  cdnPullZoneId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Project" */
export type Project_Sum_Order_By = {
  cdnPullZoneId?: InputMaybe<Order_By>;
};

/** update columns of table "Project" */
export enum Project_Update_Column {
  /** column name */
  CdnPullZoneId = 'cdnPullZoneId',
  /** column name */
  ContentType = 'contentType',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IntellectualPropertyInfo = 'intellectualPropertyInfo',
  /** column name */
  IntellectualPropertyType = 'intellectualPropertyType',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  MainLanguage = 'mainLanguage',
  /** column name */
  Name = 'name',
  /** column name */
  PresentationVolume = 'presentationVolume',
  /** column name */
  Purpose = 'purpose',
  /** column name */
  SimilarWebsites = 'similarWebsites',
  /** column name */
  UserId = 'userId',
  /** column name */
  WebsiteLocation = 'websiteLocation',
}

export type Project_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Project_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Project_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Project_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Project_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Project_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Project_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Project_Set_Input>;
  /** filter the rows which have to be updated */
  where: Project_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Project_Var_Pop_Fields = {
  __typename?: 'Project_var_pop_fields';
  cdnPullZoneId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Project" */
export type Project_Var_Pop_Order_By = {
  cdnPullZoneId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Project_Var_Samp_Fields = {
  __typename?: 'Project_var_samp_fields';
  cdnPullZoneId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Project" */
export type Project_Var_Samp_Order_By = {
  cdnPullZoneId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Project_Variance_Fields = {
  __typename?: 'Project_variance_fields';
  cdnPullZoneId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Project" */
export type Project_Variance_Order_By = {
  cdnPullZoneId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Role" */
export type Role = {
  __typename?: 'Role';
  /** An object relationship */
  Organization: Organization;
  /** An array relationship */
  PermissionsOnRoles: Array<PermissionsOnRoles>;
  /** An aggregate relationship */
  PermissionsOnRoles_aggregate: PermissionsOnRoles_Aggregate;
  displayName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['Int']['output'];
};

/** columns and relationships of "Role" */
export type RolePermissionsOnRolesArgs = {
  distinct_on?: InputMaybe<Array<PermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PermissionsOnRoles_Order_By>>;
  where?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
};

/** columns and relationships of "Role" */
export type RolePermissionsOnRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PermissionsOnRoles_Order_By>>;
  where?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
};

/** aggregated selection of "Role" */
export type Role_Aggregate = {
  __typename?: 'Role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

export type Role_Aggregate_Bool_Exp = {
  count?: InputMaybe<Role_Aggregate_Bool_Exp_Count>;
};

export type Role_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Role_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Role" */
export type Role_Aggregate_Fields = {
  __typename?: 'Role_aggregate_fields';
  avg?: Maybe<Role_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
  stddev?: Maybe<Role_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Sum_Fields>;
  var_pop?: Maybe<Role_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Var_Samp_Fields>;
  variance?: Maybe<Role_Variance_Fields>;
};

/** aggregate fields of "Role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Role" */
export type Role_Aggregate_Order_By = {
  avg?: InputMaybe<Role_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Role_Max_Order_By>;
  min?: InputMaybe<Role_Min_Order_By>;
  stddev?: InputMaybe<Role_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Role_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Role_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Role_Sum_Order_By>;
  var_pop?: InputMaybe<Role_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Role_Var_Samp_Order_By>;
  variance?: InputMaybe<Role_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Role" */
export type Role_Arr_Rel_Insert_Input = {
  data: Array<Role_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** aggregate avg on columns */
export type Role_Avg_Fields = {
  __typename?: 'Role_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Role" */
export type Role_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  Organization?: InputMaybe<Organization_Bool_Exp>;
  PermissionsOnRoles?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
  PermissionsOnRoles_aggregate?: InputMaybe<PermissionsOnRoles_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Role" */
export enum Role_Constraint {
  /** unique or primary key constraint on columns "id" */
  RolePkey = 'Role_pkey',
}

/** input type for incrementing numeric columns in table "Role" */
export type Role_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Role" */
export type Role_Insert_Input = {
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  PermissionsOnRoles?: InputMaybe<PermissionsOnRoles_Arr_Rel_Insert_Input>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'Role_max_fields';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "Role" */
export type Role_Max_Order_By = {
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'Role_min_fields';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "Role" */
export type Role_Min_Order_By = {
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Role" */
export type Role_Mutation_Response = {
  __typename?: 'Role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "Role" */
export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** on_conflict condition type for table "Role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "Role". */
export type Role_Order_By = {
  Organization?: InputMaybe<Organization_Order_By>;
  PermissionsOnRoles_aggregate?: InputMaybe<PermissionsOnRoles_Aggregate_Order_By>;
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Role */
export type Role_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Role" */
export enum Role_Select_Column {
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
}

/** input type for updating data in table "Role" */
export type Role_Set_Input = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Role_Stddev_Fields = {
  __typename?: 'Role_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Role" */
export type Role_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Role_Stddev_Pop_Fields = {
  __typename?: 'Role_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Role" */
export type Role_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Role_Stddev_Samp_Fields = {
  __typename?: 'Role_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Role" */
export type Role_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Role_Sum_Fields = {
  __typename?: 'Role_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Role" */
export type Role_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** update columns of table "Role" */
export enum Role_Update_Column {
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
}

export type Role_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Role_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Role_Var_Pop_Fields = {
  __typename?: 'Role_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Role" */
export type Role_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Role_Var_Samp_Fields = {
  __typename?: 'Role_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Role" */
export type Role_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Role_Variance_Fields = {
  __typename?: 'Role_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Role" */
export type Role_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "Subscription" */
export type Subscription = {
  __typename?: 'Subscription';
  /** An array relationship */
  Payments: Array<Payment>;
  /** An aggregate relationship */
  Payments_aggregate: Payment_Aggregate;
  /** An object relationship */
  Plan: Plan;
  /** An object relationship */
  User: User;
  cost: Scalars['float8']['output'];
  createdAt: Scalars['timestamp']['output'];
  expireAt: Scalars['timestamp']['output'];
  id: Scalars['Int']['output'];
  imageGenerations: Scalars['Int']['output'];
  planId: Scalars['Int']['output'];
  status: Scalars['SubscriptionStatus']['output'];
  textGenerations: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

/** columns and relationships of "Subscription" */
export type SubscriptionPaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

/** columns and relationships of "Subscription" */
export type SubscriptionPayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

/** Boolean expression to compare columns of type "SubscriptionStatus". All fields are combined with logical 'AND'. */
export type SubscriptionStatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['SubscriptionStatus']['input']>;
  _gt?: InputMaybe<Scalars['SubscriptionStatus']['input']>;
  _gte?: InputMaybe<Scalars['SubscriptionStatus']['input']>;
  _in?: InputMaybe<Array<Scalars['SubscriptionStatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['SubscriptionStatus']['input']>;
  _lte?: InputMaybe<Scalars['SubscriptionStatus']['input']>;
  _neq?: InputMaybe<Scalars['SubscriptionStatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['SubscriptionStatus']['input']>>;
};

/** aggregated selection of "Subscription" */
export type Subscription_Aggregate = {
  __typename?: 'Subscription_aggregate';
  aggregate?: Maybe<Subscription_Aggregate_Fields>;
  nodes: Array<Subscription>;
};

export type Subscription_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Subscription_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Subscription_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Subscription_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Subscription_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Subscription_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Subscription_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Subscription_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Subscription_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Subscription_Aggregate_Bool_Exp_Var_Samp>;
};

export type Subscription_Aggregate_Bool_Exp_Avg = {
  arguments: Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscription_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Subscription_Aggregate_Bool_Exp_Corr = {
  arguments: Subscription_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscription_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Subscription_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Subscription_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Subscription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscription_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Subscription_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Subscription_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscription_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Subscription_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Subscription_Aggregate_Bool_Exp_Max = {
  arguments: Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscription_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Subscription_Aggregate_Bool_Exp_Min = {
  arguments: Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscription_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Subscription_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscription_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Subscription_Aggregate_Bool_Exp_Sum = {
  arguments: Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscription_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Subscription_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscription_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "Subscription" */
export type Subscription_Aggregate_Fields = {
  __typename?: 'Subscription_aggregate_fields';
  avg?: Maybe<Subscription_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Subscription_Max_Fields>;
  min?: Maybe<Subscription_Min_Fields>;
  stddev?: Maybe<Subscription_Stddev_Fields>;
  stddev_pop?: Maybe<Subscription_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subscription_Stddev_Samp_Fields>;
  sum?: Maybe<Subscription_Sum_Fields>;
  var_pop?: Maybe<Subscription_Var_Pop_Fields>;
  var_samp?: Maybe<Subscription_Var_Samp_Fields>;
  variance?: Maybe<Subscription_Variance_Fields>;
};

/** aggregate fields of "Subscription" */
export type Subscription_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Subscription" */
export type Subscription_Aggregate_Order_By = {
  avg?: InputMaybe<Subscription_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Subscription_Max_Order_By>;
  min?: InputMaybe<Subscription_Min_Order_By>;
  stddev?: InputMaybe<Subscription_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Subscription_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Subscription_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Subscription_Sum_Order_By>;
  var_pop?: InputMaybe<Subscription_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Subscription_Var_Samp_Order_By>;
  variance?: InputMaybe<Subscription_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Subscription" */
export type Subscription_Arr_Rel_Insert_Input = {
  data: Array<Subscription_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscription_On_Conflict>;
};

/** aggregate avg on columns */
export type Subscription_Avg_Fields = {
  __typename?: 'Subscription_avg_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  imageGenerations?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  textGenerations?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Subscription" */
export type Subscription_Avg_Order_By = {
  cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageGenerations?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  textGenerations?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Subscription". All fields are combined with a logical 'AND'. */
export type Subscription_Bool_Exp = {
  Payments?: InputMaybe<Payment_Bool_Exp>;
  Payments_aggregate?: InputMaybe<Payment_Aggregate_Bool_Exp>;
  Plan?: InputMaybe<Plan_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Subscription_Bool_Exp>>;
  _not?: InputMaybe<Subscription_Bool_Exp>;
  _or?: InputMaybe<Array<Subscription_Bool_Exp>>;
  cost?: InputMaybe<Float8_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  expireAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  imageGenerations?: InputMaybe<Int_Comparison_Exp>;
  planId?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<SubscriptionStatus_Comparison_Exp>;
  textGenerations?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Subscription" */
export enum Subscription_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubscriptionPkey = 'Subscription_pkey',
}

/** input type for incrementing numeric columns in table "Subscription" */
export type Subscription_Inc_Input = {
  cost?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imageGenerations?: InputMaybe<Scalars['Int']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  textGenerations?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Subscription" */
export type Subscription_Insert_Input = {
  Payments?: InputMaybe<Payment_Arr_Rel_Insert_Input>;
  Plan?: InputMaybe<Plan_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  cost?: InputMaybe<Scalars['float8']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  expireAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imageGenerations?: InputMaybe<Scalars['Int']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['SubscriptionStatus']['input']>;
  textGenerations?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Subscription_Max_Fields = {
  __typename?: 'Subscription_max_fields';
  cost?: Maybe<Scalars['float8']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  expireAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imageGenerations?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['SubscriptionStatus']['output']>;
  textGenerations?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "Subscription" */
export type Subscription_Max_Order_By = {
  cost?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expireAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageGenerations?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  textGenerations?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Subscription_Min_Fields = {
  __typename?: 'Subscription_min_fields';
  cost?: Maybe<Scalars['float8']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  expireAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imageGenerations?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['SubscriptionStatus']['output']>;
  textGenerations?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "Subscription" */
export type Subscription_Min_Order_By = {
  cost?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expireAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageGenerations?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  textGenerations?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Subscription" */
export type Subscription_Mutation_Response = {
  __typename?: 'Subscription_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscription>;
};

/** input type for inserting object relation for remote table "Subscription" */
export type Subscription_Obj_Rel_Insert_Input = {
  data: Subscription_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscription_On_Conflict>;
};

/** on_conflict condition type for table "Subscription" */
export type Subscription_On_Conflict = {
  constraint: Subscription_Constraint;
  update_columns?: Array<Subscription_Update_Column>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};

/** Ordering options when selecting data from "Subscription". */
export type Subscription_Order_By = {
  Payments_aggregate?: InputMaybe<Payment_Aggregate_Order_By>;
  Plan?: InputMaybe<Plan_Order_By>;
  User?: InputMaybe<User_Order_By>;
  cost?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expireAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageGenerations?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  textGenerations?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Subscription */
export type Subscription_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Subscription" */
export enum Subscription_Select_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpireAt = 'expireAt',
  /** column name */
  Id = 'id',
  /** column name */
  ImageGenerations = 'imageGenerations',
  /** column name */
  PlanId = 'planId',
  /** column name */
  Status = 'status',
  /** column name */
  TextGenerations = 'textGenerations',
  /** column name */
  UserId = 'userId',
}

/** select "Subscription_aggregate_bool_exp_avg_arguments_columns" columns of table "Subscription" */
export enum Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Subscription_aggregate_bool_exp_corr_arguments_columns" columns of table "Subscription" */
export enum Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Subscription_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "Subscription" */
export enum Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Subscription_aggregate_bool_exp_max_arguments_columns" columns of table "Subscription" */
export enum Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Subscription_aggregate_bool_exp_min_arguments_columns" columns of table "Subscription" */
export enum Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Subscription_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "Subscription" */
export enum Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Subscription_aggregate_bool_exp_sum_arguments_columns" columns of table "Subscription" */
export enum Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** select "Subscription_aggregate_bool_exp_var_samp_arguments_columns" columns of table "Subscription" */
export enum Subscription_Select_Column_Subscription_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Cost = 'cost',
}

/** input type for updating data in table "Subscription" */
export type Subscription_Set_Input = {
  cost?: InputMaybe<Scalars['float8']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  expireAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imageGenerations?: InputMaybe<Scalars['Int']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['SubscriptionStatus']['input']>;
  textGenerations?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Subscription_Stddev_Fields = {
  __typename?: 'Subscription_stddev_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  imageGenerations?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  textGenerations?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Subscription" */
export type Subscription_Stddev_Order_By = {
  cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageGenerations?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  textGenerations?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Subscription_Stddev_Pop_Fields = {
  __typename?: 'Subscription_stddev_pop_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  imageGenerations?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  textGenerations?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Subscription" */
export type Subscription_Stddev_Pop_Order_By = {
  cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageGenerations?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  textGenerations?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Subscription_Stddev_Samp_Fields = {
  __typename?: 'Subscription_stddev_samp_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  imageGenerations?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  textGenerations?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Subscription" */
export type Subscription_Stddev_Samp_Order_By = {
  cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageGenerations?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  textGenerations?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Subscription" */
export type Subscription_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subscription_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subscription_Stream_Cursor_Value_Input = {
  cost?: InputMaybe<Scalars['float8']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  expireAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imageGenerations?: InputMaybe<Scalars['Int']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['SubscriptionStatus']['input']>;
  textGenerations?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Subscription_Sum_Fields = {
  __typename?: 'Subscription_sum_fields';
  cost?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imageGenerations?: Maybe<Scalars['Int']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  textGenerations?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Subscription" */
export type Subscription_Sum_Order_By = {
  cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageGenerations?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  textGenerations?: InputMaybe<Order_By>;
};

/** update columns of table "Subscription" */
export enum Subscription_Update_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpireAt = 'expireAt',
  /** column name */
  Id = 'id',
  /** column name */
  ImageGenerations = 'imageGenerations',
  /** column name */
  PlanId = 'planId',
  /** column name */
  Status = 'status',
  /** column name */
  TextGenerations = 'textGenerations',
  /** column name */
  UserId = 'userId',
}

export type Subscription_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Subscription_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subscription_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subscription_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Subscription_Var_Pop_Fields = {
  __typename?: 'Subscription_var_pop_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  imageGenerations?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  textGenerations?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Subscription" */
export type Subscription_Var_Pop_Order_By = {
  cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageGenerations?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  textGenerations?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Subscription_Var_Samp_Fields = {
  __typename?: 'Subscription_var_samp_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  imageGenerations?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  textGenerations?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Subscription" */
export type Subscription_Var_Samp_Order_By = {
  cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageGenerations?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  textGenerations?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Subscription_Variance_Fields = {
  __typename?: 'Subscription_variance_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  imageGenerations?: Maybe<Scalars['Float']['output']>;
  planId?: Maybe<Scalars['Float']['output']>;
  textGenerations?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Subscription" */
export type Subscription_Variance_Order_By = {
  cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageGenerations?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  textGenerations?: InputMaybe<Order_By>;
};

/** columns and relationships of "Theme" */
export type Theme = {
  __typename?: 'Theme';
  /** An array relationship */
  ComponentsOnThemes: Array<ComponentsOnThemes>;
  /** An aggregate relationship */
  ComponentsOnThemes_aggregate: ComponentsOnThemes_Aggregate;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
};

/** columns and relationships of "Theme" */
export type ThemeComponentsOnThemesArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnThemes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnThemes_Order_By>>;
  where?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
};

/** columns and relationships of "Theme" */
export type ThemeComponentsOnThemes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnThemes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnThemes_Order_By>>;
  where?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
};

/** aggregated selection of "Theme" */
export type Theme_Aggregate = {
  __typename?: 'Theme_aggregate';
  aggregate?: Maybe<Theme_Aggregate_Fields>;
  nodes: Array<Theme>;
};

/** aggregate fields of "Theme" */
export type Theme_Aggregate_Fields = {
  __typename?: 'Theme_aggregate_fields';
  avg?: Maybe<Theme_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Theme_Max_Fields>;
  min?: Maybe<Theme_Min_Fields>;
  stddev?: Maybe<Theme_Stddev_Fields>;
  stddev_pop?: Maybe<Theme_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Theme_Stddev_Samp_Fields>;
  sum?: Maybe<Theme_Sum_Fields>;
  var_pop?: Maybe<Theme_Var_Pop_Fields>;
  var_samp?: Maybe<Theme_Var_Samp_Fields>;
  variance?: Maybe<Theme_Variance_Fields>;
};

/** aggregate fields of "Theme" */
export type Theme_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Theme_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Theme_Avg_Fields = {
  __typename?: 'Theme_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Theme". All fields are combined with a logical 'AND'. */
export type Theme_Bool_Exp = {
  ComponentsOnThemes?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
  ComponentsOnThemes_aggregate?: InputMaybe<ComponentsOnThemes_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Theme_Bool_Exp>>;
  _not?: InputMaybe<Theme_Bool_Exp>;
  _or?: InputMaybe<Array<Theme_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  thumbnail?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Theme" */
export enum Theme_Constraint {
  /** unique or primary key constraint on columns "id" */
  ThemePkey = 'Theme_pkey',
}

/** input type for incrementing numeric columns in table "Theme" */
export type Theme_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Theme" */
export type Theme_Insert_Input = {
  ComponentsOnThemes?: InputMaybe<ComponentsOnThemes_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Theme_Max_Fields = {
  __typename?: 'Theme_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Theme_Min_Fields = {
  __typename?: 'Theme_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Theme" */
export type Theme_Mutation_Response = {
  __typename?: 'Theme_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Theme>;
};

/** input type for inserting object relation for remote table "Theme" */
export type Theme_Obj_Rel_Insert_Input = {
  data: Theme_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Theme_On_Conflict>;
};

/** on_conflict condition type for table "Theme" */
export type Theme_On_Conflict = {
  constraint: Theme_Constraint;
  update_columns?: Array<Theme_Update_Column>;
  where?: InputMaybe<Theme_Bool_Exp>;
};

/** Ordering options when selecting data from "Theme". */
export type Theme_Order_By = {
  ComponentsOnThemes_aggregate?: InputMaybe<ComponentsOnThemes_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Theme */
export type Theme_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Theme" */
export enum Theme_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Thumbnail = 'thumbnail',
}

/** input type for updating data in table "Theme" */
export type Theme_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Theme_Stddev_Fields = {
  __typename?: 'Theme_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Theme_Stddev_Pop_Fields = {
  __typename?: 'Theme_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Theme_Stddev_Samp_Fields = {
  __typename?: 'Theme_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Theme" */
export type Theme_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Theme_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Theme_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Theme_Sum_Fields = {
  __typename?: 'Theme_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Theme" */
export enum Theme_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Thumbnail = 'thumbnail',
}

export type Theme_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Theme_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Theme_Set_Input>;
  /** filter the rows which have to be updated */
  where: Theme_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Theme_Var_Pop_Fields = {
  __typename?: 'Theme_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Theme_Var_Samp_Fields = {
  __typename?: 'Theme_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Theme_Variance_Fields = {
  __typename?: 'Theme_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "Ticket" */
export type Ticket = {
  __typename?: 'Ticket';
  attachmentPath?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamp']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  priority: Scalars['String']['output'];
  status: Scalars['TicketStatus']['output'];
  subject: Scalars['String']['output'];
  updatedAt: Scalars['timestamp']['output'];
};

/** Boolean expression to compare columns of type "TicketStatus". All fields are combined with logical 'AND'. */
export type TicketStatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['TicketStatus']['input']>;
  _gt?: InputMaybe<Scalars['TicketStatus']['input']>;
  _gte?: InputMaybe<Scalars['TicketStatus']['input']>;
  _in?: InputMaybe<Array<Scalars['TicketStatus']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['TicketStatus']['input']>;
  _lte?: InputMaybe<Scalars['TicketStatus']['input']>;
  _neq?: InputMaybe<Scalars['TicketStatus']['input']>;
  _nin?: InputMaybe<Array<Scalars['TicketStatus']['input']>>;
};

/** aggregated selection of "Ticket" */
export type Ticket_Aggregate = {
  __typename?: 'Ticket_aggregate';
  aggregate?: Maybe<Ticket_Aggregate_Fields>;
  nodes: Array<Ticket>;
};

/** aggregate fields of "Ticket" */
export type Ticket_Aggregate_Fields = {
  __typename?: 'Ticket_aggregate_fields';
  avg?: Maybe<Ticket_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ticket_Max_Fields>;
  min?: Maybe<Ticket_Min_Fields>;
  stddev?: Maybe<Ticket_Stddev_Fields>;
  stddev_pop?: Maybe<Ticket_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ticket_Stddev_Samp_Fields>;
  sum?: Maybe<Ticket_Sum_Fields>;
  var_pop?: Maybe<Ticket_Var_Pop_Fields>;
  var_samp?: Maybe<Ticket_Var_Samp_Fields>;
  variance?: Maybe<Ticket_Variance_Fields>;
};

/** aggregate fields of "Ticket" */
export type Ticket_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ticket_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Ticket_Avg_Fields = {
  __typename?: 'Ticket_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Ticket". All fields are combined with a logical 'AND'. */
export type Ticket_Bool_Exp = {
  _and?: InputMaybe<Array<Ticket_Bool_Exp>>;
  _not?: InputMaybe<Ticket_Bool_Exp>;
  _or?: InputMaybe<Array<Ticket_Bool_Exp>>;
  attachmentPath?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  priority?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<TicketStatus_Comparison_Exp>;
  subject?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Ticket" */
export enum Ticket_Constraint {
  /** unique or primary key constraint on columns "id" */
  TicketPkey = 'Ticket_pkey',
}

/** input type for incrementing numeric columns in table "Ticket" */
export type Ticket_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Ticket" */
export type Ticket_Insert_Input = {
  attachmentPath?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['TicketStatus']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Ticket_Max_Fields = {
  __typename?: 'Ticket_max_fields';
  attachmentPath?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['TicketStatus']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Ticket_Min_Fields = {
  __typename?: 'Ticket_min_fields';
  attachmentPath?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['TicketStatus']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "Ticket" */
export type Ticket_Mutation_Response = {
  __typename?: 'Ticket_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ticket>;
};

/** on_conflict condition type for table "Ticket" */
export type Ticket_On_Conflict = {
  constraint: Ticket_Constraint;
  update_columns?: Array<Ticket_Update_Column>;
  where?: InputMaybe<Ticket_Bool_Exp>;
};

/** Ordering options when selecting data from "Ticket". */
export type Ticket_Order_By = {
  attachmentPath?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Ticket */
export type Ticket_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Ticket" */
export enum Ticket_Select_Column {
  /** column name */
  AttachmentPath = 'attachmentPath',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Priority = 'priority',
  /** column name */
  Status = 'status',
  /** column name */
  Subject = 'subject',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "Ticket" */
export type Ticket_Set_Input = {
  attachmentPath?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['TicketStatus']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Ticket_Stddev_Fields = {
  __typename?: 'Ticket_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Ticket_Stddev_Pop_Fields = {
  __typename?: 'Ticket_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Ticket_Stddev_Samp_Fields = {
  __typename?: 'Ticket_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Ticket" */
export type Ticket_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ticket_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ticket_Stream_Cursor_Value_Input = {
  attachmentPath?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['TicketStatus']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Ticket_Sum_Fields = {
  __typename?: 'Ticket_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Ticket" */
export enum Ticket_Update_Column {
  /** column name */
  AttachmentPath = 'attachmentPath',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Priority = 'priority',
  /** column name */
  Status = 'status',
  /** column name */
  Subject = 'subject',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type Ticket_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ticket_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ticket_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ticket_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ticket_Var_Pop_Fields = {
  __typename?: 'Ticket_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Ticket_Var_Samp_Fields = {
  __typename?: 'Ticket_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Ticket_Variance_Fields = {
  __typename?: 'Ticket_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  /** An array relationship */
  DomainRegistrations: Array<DomainRegistration>;
  /** An aggregate relationship */
  DomainRegistrations_aggregate: DomainRegistration_Aggregate;
  /** An array relationship */
  Donations: Array<Donation>;
  /** An aggregate relationship */
  Donations_aggregate: Donation_Aggregate;
  /** An array relationship */
  NotificationTemplateUsers: Array<NotificationTemplateUser>;
  /** An aggregate relationship */
  NotificationTemplateUsers_aggregate: NotificationTemplateUser_Aggregate;
  /** An array relationship */
  Notifications: Array<Notification>;
  /** An aggregate relationship */
  Notifications_aggregate: Notification_Aggregate;
  /** An array relationship */
  Payments: Array<Payment>;
  /** An aggregate relationship */
  Payments_aggregate: Payment_Aggregate;
  /** An array relationship */
  Projects: Array<Project>;
  /** An aggregate relationship */
  Projects_aggregate: Project_Aggregate;
  /** An array relationship */
  Subscriptions: Array<Subscription>;
  /** An aggregate relationship */
  Subscriptions_aggregate: Subscription_Aggregate;
  /** An array relationship */
  UserPreferences: Array<UserPreferences>;
  /** An aggregate relationship */
  UserPreferences_aggregate: UserPreferences_Aggregate;
  createdAt: Scalars['timestamp']['output'];
  email: Scalars['String']['output'];
  gender: Scalars['Gender']['output'];
  id: Scalars['String']['output'];
  imagePath?: Maybe<Scalars['String']['output']>;
  metadata: Scalars['jsonb']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

/** columns and relationships of "User" */
export type UserDomainRegistrationsArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistration_Order_By>>;
  where?: InputMaybe<DomainRegistration_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserDomainRegistrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistration_Order_By>>;
  where?: InputMaybe<DomainRegistration_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserDonationsArgs = {
  distinct_on?: InputMaybe<Array<Donation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Donation_Order_By>>;
  where?: InputMaybe<Donation_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserDonations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Donation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Donation_Order_By>>;
  where?: InputMaybe<Donation_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserNotificationTemplateUsersArgs = {
  distinct_on?: InputMaybe<Array<NotificationTemplateUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTemplateUser_Order_By>>;
  where?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserNotificationTemplateUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationTemplateUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTemplateUser_Order_By>>;
  where?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserPaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserPayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserProjectsArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Order_By>>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserSubscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Order_By>>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserUserPreferencesArgs = {
  distinct_on?: InputMaybe<Array<UserPreferences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserPreferences_Order_By>>;
  where?: InputMaybe<UserPreferences_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserUserPreferences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserPreferences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserPreferences_Order_By>>;
  where?: InputMaybe<UserPreferences_Bool_Exp>;
};

/** columns and relationships of "User" */
export type UserMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "UserPreferences" */
export type UserPreferences = {
  __typename?: 'UserPreferences';
  /** An object relationship */
  User: User;
  imageModel: Scalars['String']['output'];
  textModel: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

/** aggregated selection of "UserPreferences" */
export type UserPreferences_Aggregate = {
  __typename?: 'UserPreferences_aggregate';
  aggregate?: Maybe<UserPreferences_Aggregate_Fields>;
  nodes: Array<UserPreferences>;
};

export type UserPreferences_Aggregate_Bool_Exp = {
  count?: InputMaybe<UserPreferences_Aggregate_Bool_Exp_Count>;
};

export type UserPreferences_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<UserPreferences_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserPreferences_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "UserPreferences" */
export type UserPreferences_Aggregate_Fields = {
  __typename?: 'UserPreferences_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<UserPreferences_Max_Fields>;
  min?: Maybe<UserPreferences_Min_Fields>;
};

/** aggregate fields of "UserPreferences" */
export type UserPreferences_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UserPreferences_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "UserPreferences" */
export type UserPreferences_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<UserPreferences_Max_Order_By>;
  min?: InputMaybe<UserPreferences_Min_Order_By>;
};

/** input type for inserting array relation for remote table "UserPreferences" */
export type UserPreferences_Arr_Rel_Insert_Input = {
  data: Array<UserPreferences_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserPreferences_On_Conflict>;
};

/** Boolean expression to filter rows from the table "UserPreferences". All fields are combined with a logical 'AND'. */
export type UserPreferences_Bool_Exp = {
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<UserPreferences_Bool_Exp>>;
  _not?: InputMaybe<UserPreferences_Bool_Exp>;
  _or?: InputMaybe<Array<UserPreferences_Bool_Exp>>;
  imageModel?: InputMaybe<String_Comparison_Exp>;
  textModel?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "UserPreferences" */
export enum UserPreferences_Constraint {
  /** unique or primary key constraint on columns "userId" */
  UserPreferencesUserIdKey = 'UserPreferences_userId_key',
}

/** input type for inserting data into table "UserPreferences" */
export type UserPreferences_Insert_Input = {
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  imageModel?: InputMaybe<Scalars['String']['input']>;
  textModel?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type UserPreferences_Max_Fields = {
  __typename?: 'UserPreferences_max_fields';
  imageModel?: Maybe<Scalars['String']['output']>;
  textModel?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "UserPreferences" */
export type UserPreferences_Max_Order_By = {
  imageModel?: InputMaybe<Order_By>;
  textModel?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type UserPreferences_Min_Fields = {
  __typename?: 'UserPreferences_min_fields';
  imageModel?: Maybe<Scalars['String']['output']>;
  textModel?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "UserPreferences" */
export type UserPreferences_Min_Order_By = {
  imageModel?: InputMaybe<Order_By>;
  textModel?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "UserPreferences" */
export type UserPreferences_Mutation_Response = {
  __typename?: 'UserPreferences_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserPreferences>;
};

/** on_conflict condition type for table "UserPreferences" */
export type UserPreferences_On_Conflict = {
  constraint: UserPreferences_Constraint;
  update_columns?: Array<UserPreferences_Update_Column>;
  where?: InputMaybe<UserPreferences_Bool_Exp>;
};

/** Ordering options when selecting data from "UserPreferences". */
export type UserPreferences_Order_By = {
  User?: InputMaybe<User_Order_By>;
  imageModel?: InputMaybe<Order_By>;
  textModel?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "UserPreferences" */
export enum UserPreferences_Select_Column {
  /** column name */
  ImageModel = 'imageModel',
  /** column name */
  TextModel = 'textModel',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "UserPreferences" */
export type UserPreferences_Set_Input = {
  imageModel?: InputMaybe<Scalars['String']['input']>;
  textModel?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "UserPreferences" */
export type UserPreferences_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserPreferences_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserPreferences_Stream_Cursor_Value_Input = {
  imageModel?: InputMaybe<Scalars['String']['input']>;
  textModel?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "UserPreferences" */
export enum UserPreferences_Update_Column {
  /** column name */
  ImageModel = 'imageModel',
  /** column name */
  TextModel = 'textModel',
  /** column name */
  UserId = 'userId',
}

export type UserPreferences_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserPreferences_Set_Input>;
  /** filter the rows which have to be updated */
  where: UserPreferences_Bool_Exp;
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  DomainRegistrations?: InputMaybe<DomainRegistration_Bool_Exp>;
  DomainRegistrations_aggregate?: InputMaybe<DomainRegistration_Aggregate_Bool_Exp>;
  Donations?: InputMaybe<Donation_Bool_Exp>;
  Donations_aggregate?: InputMaybe<Donation_Aggregate_Bool_Exp>;
  NotificationTemplateUsers?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
  NotificationTemplateUsers_aggregate?: InputMaybe<NotificationTemplateUser_Aggregate_Bool_Exp>;
  Notifications?: InputMaybe<Notification_Bool_Exp>;
  Notifications_aggregate?: InputMaybe<Notification_Aggregate_Bool_Exp>;
  Payments?: InputMaybe<Payment_Bool_Exp>;
  Payments_aggregate?: InputMaybe<Payment_Aggregate_Bool_Exp>;
  Projects?: InputMaybe<Project_Bool_Exp>;
  Projects_aggregate?: InputMaybe<Project_Aggregate_Bool_Exp>;
  Subscriptions?: InputMaybe<Subscription_Bool_Exp>;
  Subscriptions_aggregate?: InputMaybe<Subscription_Aggregate_Bool_Exp>;
  UserPreferences?: InputMaybe<UserPreferences_Bool_Exp>;
  UserPreferences_aggregate?: InputMaybe<UserPreferences_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<Gender_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  imagePath?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'User_email_key',
  /** unique or primary key constraint on columns "id" */
  UserIdKey = 'User_id_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'User_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  DomainRegistrations?: InputMaybe<DomainRegistration_Arr_Rel_Insert_Input>;
  Donations?: InputMaybe<Donation_Arr_Rel_Insert_Input>;
  NotificationTemplateUsers?: InputMaybe<NotificationTemplateUser_Arr_Rel_Insert_Input>;
  Notifications?: InputMaybe<Notification_Arr_Rel_Insert_Input>;
  Payments?: InputMaybe<Payment_Arr_Rel_Insert_Input>;
  Projects?: InputMaybe<Project_Arr_Rel_Insert_Input>;
  Subscriptions?: InputMaybe<Subscription_Arr_Rel_Insert_Input>;
  UserPreferences?: InputMaybe<UserPreferences_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Gender']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Gender']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Gender']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  DomainRegistrations_aggregate?: InputMaybe<DomainRegistration_Aggregate_Order_By>;
  Donations_aggregate?: InputMaybe<Donation_Aggregate_Order_By>;
  NotificationTemplateUsers_aggregate?: InputMaybe<NotificationTemplateUser_Aggregate_Order_By>;
  Notifications_aggregate?: InputMaybe<Notification_Aggregate_Order_By>;
  Payments_aggregate?: InputMaybe<Payment_Aggregate_Order_By>;
  Projects_aggregate?: InputMaybe<Project_Aggregate_Order_By>;
  Subscriptions_aggregate?: InputMaybe<Subscription_Aggregate_Order_By>;
  UserPreferences_aggregate?: InputMaybe<UserPreferences_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imagePath?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  ImagePath = 'imagePath',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Verified = 'verified',
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Gender']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Gender']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  ImagePath = 'imagePath',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Verified = 'verified',
}

export type User_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<User_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<User_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** columns and relationships of "VisualType" */
export type VisualType = {
  __typename?: 'VisualType';
  /** An array relationship */
  VisualTypesOnProjects: Array<VisualTypesOnProjects>;
  /** An aggregate relationship */
  VisualTypesOnProjects_aggregate: VisualTypesOnProjects_Aggregate;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  type: Scalars['VisualTypeVariation']['output'];
};

/** columns and relationships of "VisualType" */
export type VisualTypeVisualTypesOnProjectsArgs = {
  distinct_on?: InputMaybe<Array<VisualTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VisualTypesOnProjects_Order_By>>;
  where?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
};

/** columns and relationships of "VisualType" */
export type VisualTypeVisualTypesOnProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VisualTypesOnProjects_Order_By>>;
  where?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
};

/** Boolean expression to compare columns of type "VisualTypeVariation". All fields are combined with logical 'AND'. */
export type VisualTypeVariation_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['VisualTypeVariation']['input']>;
  _gt?: InputMaybe<Scalars['VisualTypeVariation']['input']>;
  _gte?: InputMaybe<Scalars['VisualTypeVariation']['input']>;
  _in?: InputMaybe<Array<Scalars['VisualTypeVariation']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['VisualTypeVariation']['input']>;
  _lte?: InputMaybe<Scalars['VisualTypeVariation']['input']>;
  _neq?: InputMaybe<Scalars['VisualTypeVariation']['input']>;
  _nin?: InputMaybe<Array<Scalars['VisualTypeVariation']['input']>>;
};

/** aggregated selection of "VisualType" */
export type VisualType_Aggregate = {
  __typename?: 'VisualType_aggregate';
  aggregate?: Maybe<VisualType_Aggregate_Fields>;
  nodes: Array<VisualType>;
};

/** aggregate fields of "VisualType" */
export type VisualType_Aggregate_Fields = {
  __typename?: 'VisualType_aggregate_fields';
  avg?: Maybe<VisualType_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<VisualType_Max_Fields>;
  min?: Maybe<VisualType_Min_Fields>;
  stddev?: Maybe<VisualType_Stddev_Fields>;
  stddev_pop?: Maybe<VisualType_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<VisualType_Stddev_Samp_Fields>;
  sum?: Maybe<VisualType_Sum_Fields>;
  var_pop?: Maybe<VisualType_Var_Pop_Fields>;
  var_samp?: Maybe<VisualType_Var_Samp_Fields>;
  variance?: Maybe<VisualType_Variance_Fields>;
};

/** aggregate fields of "VisualType" */
export type VisualType_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<VisualType_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type VisualType_Avg_Fields = {
  __typename?: 'VisualType_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "VisualType". All fields are combined with a logical 'AND'. */
export type VisualType_Bool_Exp = {
  VisualTypesOnProjects?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
  VisualTypesOnProjects_aggregate?: InputMaybe<VisualTypesOnProjects_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<VisualType_Bool_Exp>>;
  _not?: InputMaybe<VisualType_Bool_Exp>;
  _or?: InputMaybe<Array<VisualType_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<VisualTypeVariation_Comparison_Exp>;
};

/** unique or primary key constraints on table "VisualType" */
export enum VisualType_Constraint {
  /** unique or primary key constraint on columns "id" */
  VisualTypePkey = 'VisualType_pkey',
}

/** input type for incrementing numeric columns in table "VisualType" */
export type VisualType_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "VisualType" */
export type VisualType_Insert_Input = {
  VisualTypesOnProjects?: InputMaybe<VisualTypesOnProjects_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['VisualTypeVariation']['input']>;
};

/** aggregate max on columns */
export type VisualType_Max_Fields = {
  __typename?: 'VisualType_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['VisualTypeVariation']['output']>;
};

/** aggregate min on columns */
export type VisualType_Min_Fields = {
  __typename?: 'VisualType_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['VisualTypeVariation']['output']>;
};

/** response of any mutation on the table "VisualType" */
export type VisualType_Mutation_Response = {
  __typename?: 'VisualType_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<VisualType>;
};

/** input type for inserting object relation for remote table "VisualType" */
export type VisualType_Obj_Rel_Insert_Input = {
  data: VisualType_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<VisualType_On_Conflict>;
};

/** on_conflict condition type for table "VisualType" */
export type VisualType_On_Conflict = {
  constraint: VisualType_Constraint;
  update_columns?: Array<VisualType_Update_Column>;
  where?: InputMaybe<VisualType_Bool_Exp>;
};

/** Ordering options when selecting data from "VisualType". */
export type VisualType_Order_By = {
  VisualTypesOnProjects_aggregate?: InputMaybe<VisualTypesOnProjects_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: VisualType */
export type VisualType_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "VisualType" */
export enum VisualType_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "VisualType" */
export type VisualType_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['VisualTypeVariation']['input']>;
};

/** aggregate stddev on columns */
export type VisualType_Stddev_Fields = {
  __typename?: 'VisualType_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type VisualType_Stddev_Pop_Fields = {
  __typename?: 'VisualType_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type VisualType_Stddev_Samp_Fields = {
  __typename?: 'VisualType_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "VisualType" */
export type VisualType_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: VisualType_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type VisualType_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['VisualTypeVariation']['input']>;
};

/** aggregate sum on columns */
export type VisualType_Sum_Fields = {
  __typename?: 'VisualType_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "VisualType" */
export enum VisualType_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
}

export type VisualType_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<VisualType_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VisualType_Set_Input>;
  /** filter the rows which have to be updated */
  where: VisualType_Bool_Exp;
};

/** aggregate var_pop on columns */
export type VisualType_Var_Pop_Fields = {
  __typename?: 'VisualType_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type VisualType_Var_Samp_Fields = {
  __typename?: 'VisualType_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type VisualType_Variance_Fields = {
  __typename?: 'VisualType_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "VisualTypesOnProjects" */
export type VisualTypesOnProjects = {
  __typename?: 'VisualTypesOnProjects';
  /** An object relationship */
  Project: Project;
  /** An object relationship */
  VisualType: VisualType;
  projectId: Scalars['uuid']['output'];
  visualTypeId: Scalars['Int']['output'];
};

/** aggregated selection of "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Aggregate = {
  __typename?: 'VisualTypesOnProjects_aggregate';
  aggregate?: Maybe<VisualTypesOnProjects_Aggregate_Fields>;
  nodes: Array<VisualTypesOnProjects>;
};

export type VisualTypesOnProjects_Aggregate_Bool_Exp = {
  count?: InputMaybe<VisualTypesOnProjects_Aggregate_Bool_Exp_Count>;
};

export type VisualTypesOnProjects_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<VisualTypesOnProjects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Aggregate_Fields = {
  __typename?: 'VisualTypesOnProjects_aggregate_fields';
  avg?: Maybe<VisualTypesOnProjects_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<VisualTypesOnProjects_Max_Fields>;
  min?: Maybe<VisualTypesOnProjects_Min_Fields>;
  stddev?: Maybe<VisualTypesOnProjects_Stddev_Fields>;
  stddev_pop?: Maybe<VisualTypesOnProjects_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<VisualTypesOnProjects_Stddev_Samp_Fields>;
  sum?: Maybe<VisualTypesOnProjects_Sum_Fields>;
  var_pop?: Maybe<VisualTypesOnProjects_Var_Pop_Fields>;
  var_samp?: Maybe<VisualTypesOnProjects_Var_Samp_Fields>;
  variance?: Maybe<VisualTypesOnProjects_Variance_Fields>;
};

/** aggregate fields of "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<VisualTypesOnProjects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Aggregate_Order_By = {
  avg?: InputMaybe<VisualTypesOnProjects_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<VisualTypesOnProjects_Max_Order_By>;
  min?: InputMaybe<VisualTypesOnProjects_Min_Order_By>;
  stddev?: InputMaybe<VisualTypesOnProjects_Stddev_Order_By>;
  stddev_pop?: InputMaybe<VisualTypesOnProjects_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<VisualTypesOnProjects_Stddev_Samp_Order_By>;
  sum?: InputMaybe<VisualTypesOnProjects_Sum_Order_By>;
  var_pop?: InputMaybe<VisualTypesOnProjects_Var_Pop_Order_By>;
  var_samp?: InputMaybe<VisualTypesOnProjects_Var_Samp_Order_By>;
  variance?: InputMaybe<VisualTypesOnProjects_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Arr_Rel_Insert_Input = {
  data: Array<VisualTypesOnProjects_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<VisualTypesOnProjects_On_Conflict>;
};

/** aggregate avg on columns */
export type VisualTypesOnProjects_Avg_Fields = {
  __typename?: 'VisualTypesOnProjects_avg_fields';
  visualTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Avg_Order_By = {
  visualTypeId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "VisualTypesOnProjects". All fields are combined with a logical 'AND'. */
export type VisualTypesOnProjects_Bool_Exp = {
  Project?: InputMaybe<Project_Bool_Exp>;
  VisualType?: InputMaybe<VisualType_Bool_Exp>;
  _and?: InputMaybe<Array<VisualTypesOnProjects_Bool_Exp>>;
  _not?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
  _or?: InputMaybe<Array<VisualTypesOnProjects_Bool_Exp>>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
  visualTypeId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "VisualTypesOnProjects" */
export enum VisualTypesOnProjects_Constraint {
  /** unique or primary key constraint on columns "visualTypeId", "projectId" */
  VisualTypesOnProjectsPkey = 'VisualTypesOnProjects_pkey',
}

/** input type for incrementing numeric columns in table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Inc_Input = {
  visualTypeId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Insert_Input = {
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  VisualType?: InputMaybe<VisualType_Obj_Rel_Insert_Input>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  visualTypeId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type VisualTypesOnProjects_Max_Fields = {
  __typename?: 'VisualTypesOnProjects_max_fields';
  projectId?: Maybe<Scalars['uuid']['output']>;
  visualTypeId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Max_Order_By = {
  projectId?: InputMaybe<Order_By>;
  visualTypeId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type VisualTypesOnProjects_Min_Fields = {
  __typename?: 'VisualTypesOnProjects_min_fields';
  projectId?: Maybe<Scalars['uuid']['output']>;
  visualTypeId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Min_Order_By = {
  projectId?: InputMaybe<Order_By>;
  visualTypeId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Mutation_Response = {
  __typename?: 'VisualTypesOnProjects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<VisualTypesOnProjects>;
};

/** on_conflict condition type for table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_On_Conflict = {
  constraint: VisualTypesOnProjects_Constraint;
  update_columns?: Array<VisualTypesOnProjects_Update_Column>;
  where?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
};

/** Ordering options when selecting data from "VisualTypesOnProjects". */
export type VisualTypesOnProjects_Order_By = {
  Project?: InputMaybe<Project_Order_By>;
  VisualType?: InputMaybe<VisualType_Order_By>;
  projectId?: InputMaybe<Order_By>;
  visualTypeId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: VisualTypesOnProjects */
export type VisualTypesOnProjects_Pk_Columns_Input = {
  projectId: Scalars['uuid']['input'];
  visualTypeId: Scalars['Int']['input'];
};

/** select columns of table "VisualTypesOnProjects" */
export enum VisualTypesOnProjects_Select_Column {
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  VisualTypeId = 'visualTypeId',
}

/** input type for updating data in table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Set_Input = {
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  visualTypeId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type VisualTypesOnProjects_Stddev_Fields = {
  __typename?: 'VisualTypesOnProjects_stddev_fields';
  visualTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Stddev_Order_By = {
  visualTypeId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type VisualTypesOnProjects_Stddev_Pop_Fields = {
  __typename?: 'VisualTypesOnProjects_stddev_pop_fields';
  visualTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Stddev_Pop_Order_By = {
  visualTypeId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type VisualTypesOnProjects_Stddev_Samp_Fields = {
  __typename?: 'VisualTypesOnProjects_stddev_samp_fields';
  visualTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Stddev_Samp_Order_By = {
  visualTypeId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: VisualTypesOnProjects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type VisualTypesOnProjects_Stream_Cursor_Value_Input = {
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  visualTypeId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type VisualTypesOnProjects_Sum_Fields = {
  __typename?: 'VisualTypesOnProjects_sum_fields';
  visualTypeId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Sum_Order_By = {
  visualTypeId?: InputMaybe<Order_By>;
};

/** update columns of table "VisualTypesOnProjects" */
export enum VisualTypesOnProjects_Update_Column {
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  VisualTypeId = 'visualTypeId',
}

export type VisualTypesOnProjects_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<VisualTypesOnProjects_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VisualTypesOnProjects_Set_Input>;
  /** filter the rows which have to be updated */
  where: VisualTypesOnProjects_Bool_Exp;
};

/** aggregate var_pop on columns */
export type VisualTypesOnProjects_Var_Pop_Fields = {
  __typename?: 'VisualTypesOnProjects_var_pop_fields';
  visualTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Var_Pop_Order_By = {
  visualTypeId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type VisualTypesOnProjects_Var_Samp_Fields = {
  __typename?: 'VisualTypesOnProjects_var_samp_fields';
  visualTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Var_Samp_Order_By = {
  visualTypeId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type VisualTypesOnProjects_Variance_Fields = {
  __typename?: 'VisualTypesOnProjects_variance_fields';
  visualTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "VisualTypesOnProjects" */
export type VisualTypesOnProjects_Variance_Order_By = {
  visualTypeId?: InputMaybe<Order_By>;
};

/** columns and relationships of "_prisma_migrations" */
export type _Prisma_Migrations = {
  __typename?: '_prisma_migrations';
  applied_steps_count: Scalars['Int']['output'];
  checksum: Scalars['String']['output'];
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['String']['output'];
  logs?: Maybe<Scalars['String']['output']>;
  migration_name: Scalars['String']['output'];
  rolled_back_at?: Maybe<Scalars['timestamptz']['output']>;
  started_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate = {
  __typename?: '_prisma_migrations_aggregate';
  aggregate?: Maybe<_Prisma_Migrations_Aggregate_Fields>;
  nodes: Array<_Prisma_Migrations>;
};

/** aggregate fields of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate_Fields = {
  __typename?: '_prisma_migrations_aggregate_fields';
  avg?: Maybe<_Prisma_Migrations_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<_Prisma_Migrations_Max_Fields>;
  min?: Maybe<_Prisma_Migrations_Min_Fields>;
  stddev?: Maybe<_Prisma_Migrations_Stddev_Fields>;
  stddev_pop?: Maybe<_Prisma_Migrations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Prisma_Migrations_Stddev_Samp_Fields>;
  sum?: Maybe<_Prisma_Migrations_Sum_Fields>;
  var_pop?: Maybe<_Prisma_Migrations_Var_Pop_Fields>;
  var_samp?: Maybe<_Prisma_Migrations_Var_Samp_Fields>;
  variance?: Maybe<_Prisma_Migrations_Variance_Fields>;
};

/** aggregate fields of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type _Prisma_Migrations_Avg_Fields = {
  __typename?: '_prisma_migrations_avg_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "_prisma_migrations". All fields are combined with a logical 'AND'. */
export type _Prisma_Migrations_Bool_Exp = {
  _and?: InputMaybe<Array<_Prisma_Migrations_Bool_Exp>>;
  _not?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
  _or?: InputMaybe<Array<_Prisma_Migrations_Bool_Exp>>;
  applied_steps_count?: InputMaybe<Int_Comparison_Exp>;
  checksum?: InputMaybe<String_Comparison_Exp>;
  finished_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  logs?: InputMaybe<String_Comparison_Exp>;
  migration_name?: InputMaybe<String_Comparison_Exp>;
  rolled_back_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_prisma_migrations" */
export enum _Prisma_Migrations_Constraint {
  /** unique or primary key constraint on columns "id" */
  PrismaMigrationsPkey = '_prisma_migrations_pkey',
}

/** input type for incrementing numeric columns in table "_prisma_migrations" */
export type _Prisma_Migrations_Inc_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "_prisma_migrations" */
export type _Prisma_Migrations_Insert_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  migration_name?: InputMaybe<Scalars['String']['input']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type _Prisma_Migrations_Max_Fields = {
  __typename?: '_prisma_migrations_max_fields';
  applied_steps_count?: Maybe<Scalars['Int']['output']>;
  checksum?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  logs?: Maybe<Scalars['String']['output']>;
  migration_name?: Maybe<Scalars['String']['output']>;
  rolled_back_at?: Maybe<Scalars['timestamptz']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type _Prisma_Migrations_Min_Fields = {
  __typename?: '_prisma_migrations_min_fields';
  applied_steps_count?: Maybe<Scalars['Int']['output']>;
  checksum?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  logs?: Maybe<Scalars['String']['output']>;
  migration_name?: Maybe<Scalars['String']['output']>;
  rolled_back_at?: Maybe<Scalars['timestamptz']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "_prisma_migrations" */
export type _Prisma_Migrations_Mutation_Response = {
  __typename?: '_prisma_migrations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<_Prisma_Migrations>;
};

/** on_conflict condition type for table "_prisma_migrations" */
export type _Prisma_Migrations_On_Conflict = {
  constraint: _Prisma_Migrations_Constraint;
  update_columns?: Array<_Prisma_Migrations_Update_Column>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

/** Ordering options when selecting data from "_prisma_migrations". */
export type _Prisma_Migrations_Order_By = {
  applied_steps_count?: InputMaybe<Order_By>;
  checksum?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  migration_name?: InputMaybe<Order_By>;
  rolled_back_at?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _prisma_migrations */
export type _Prisma_Migrations_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "_prisma_migrations" */
export enum _Prisma_Migrations_Select_Column {
  /** column name */
  AppliedStepsCount = 'applied_steps_count',
  /** column name */
  Checksum = 'checksum',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  Logs = 'logs',
  /** column name */
  MigrationName = 'migration_name',
  /** column name */
  RolledBackAt = 'rolled_back_at',
  /** column name */
  StartedAt = 'started_at',
}

/** input type for updating data in table "_prisma_migrations" */
export type _Prisma_Migrations_Set_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  migration_name?: InputMaybe<Scalars['String']['input']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type _Prisma_Migrations_Stddev_Fields = {
  __typename?: '_prisma_migrations_stddev_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type _Prisma_Migrations_Stddev_Pop_Fields = {
  __typename?: '_prisma_migrations_stddev_pop_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type _Prisma_Migrations_Stddev_Samp_Fields = {
  __typename?: '_prisma_migrations_stddev_samp_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "_prisma_migrations" */
export type _Prisma_Migrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _Prisma_Migrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _Prisma_Migrations_Stream_Cursor_Value_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  migration_name?: InputMaybe<Scalars['String']['input']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type _Prisma_Migrations_Sum_Fields = {
  __typename?: '_prisma_migrations_sum_fields';
  applied_steps_count?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "_prisma_migrations" */
export enum _Prisma_Migrations_Update_Column {
  /** column name */
  AppliedStepsCount = 'applied_steps_count',
  /** column name */
  Checksum = 'checksum',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  Logs = 'logs',
  /** column name */
  MigrationName = 'migration_name',
  /** column name */
  RolledBackAt = 'rolled_back_at',
  /** column name */
  StartedAt = 'started_at',
}

export type _Prisma_Migrations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<_Prisma_Migrations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_Prisma_Migrations_Set_Input>;
  /** filter the rows which have to be updated */
  where: _Prisma_Migrations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type _Prisma_Migrations_Var_Pop_Fields = {
  __typename?: '_prisma_migrations_var_pop_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type _Prisma_Migrations_Var_Samp_Fields = {
  __typename?: '_prisma_migrations_var_samp_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type _Prisma_Migrations_Variance_Fields = {
  __typename?: '_prisma_migrations_variance_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Admin" */
  delete_Admin?: Maybe<Admin_Mutation_Response>;
  /** delete data from the table: "AdminPermission" */
  delete_AdminPermission?: Maybe<AdminPermission_Mutation_Response>;
  /** delete single row from the table: "AdminPermission" */
  delete_AdminPermission_by_pk?: Maybe<AdminPermission>;
  /** delete data from the table: "AdminPermissionsOnRoles" */
  delete_AdminPermissionsOnRoles?: Maybe<AdminPermissionsOnRoles_Mutation_Response>;
  /** delete single row from the table: "AdminPermissionsOnRoles" */
  delete_AdminPermissionsOnRoles_by_pk?: Maybe<AdminPermissionsOnRoles>;
  /** delete data from the table: "AdminRole" */
  delete_AdminRole?: Maybe<AdminRole_Mutation_Response>;
  /** delete single row from the table: "AdminRole" */
  delete_AdminRole_by_pk?: Maybe<AdminRole>;
  /** delete single row from the table: "Admin" */
  delete_Admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "Analytics" */
  delete_Analytics?: Maybe<Analytics_Mutation_Response>;
  /** delete single row from the table: "Analytics" */
  delete_Analytics_by_pk?: Maybe<Analytics>;
  /** delete data from the table: "Blog" */
  delete_Blog?: Maybe<Blog_Mutation_Response>;
  /** delete single row from the table: "Blog" */
  delete_Blog_by_pk?: Maybe<Blog>;
  /** delete data from the table: "Component" */
  delete_Component?: Maybe<Component_Mutation_Response>;
  /** delete single row from the table: "Component" */
  delete_Component_by_pk?: Maybe<Component>;
  /** delete data from the table: "ComponentsOnPages" */
  delete_ComponentsOnPages?: Maybe<ComponentsOnPages_Mutation_Response>;
  /** delete single row from the table: "ComponentsOnPages" */
  delete_ComponentsOnPages_by_pk?: Maybe<ComponentsOnPages>;
  /** delete data from the table: "ComponentsOnThemes" */
  delete_ComponentsOnThemes?: Maybe<ComponentsOnThemes_Mutation_Response>;
  /** delete single row from the table: "ComponentsOnThemes" */
  delete_ComponentsOnThemes_by_pk?: Maybe<ComponentsOnThemes>;
  /** delete data from the table: "ContactMessage" */
  delete_ContactMessage?: Maybe<ContactMessage_Mutation_Response>;
  /** delete single row from the table: "ContactMessage" */
  delete_ContactMessage_by_pk?: Maybe<ContactMessage>;
  /** delete data from the table: "ContactRequest" */
  delete_ContactRequest?: Maybe<ContactRequest_Mutation_Response>;
  /** delete single row from the table: "ContactRequest" */
  delete_ContactRequest_by_pk?: Maybe<ContactRequest>;
  /** delete data from the table: "ContentType" */
  delete_ContentType?: Maybe<ContentType_Mutation_Response>;
  /** delete single row from the table: "ContentType" */
  delete_ContentType_by_pk?: Maybe<ContentType>;
  /** delete data from the table: "ContentTypesOnProjects" */
  delete_ContentTypesOnProjects?: Maybe<ContentTypesOnProjects_Mutation_Response>;
  /** delete single row from the table: "ContentTypesOnProjects" */
  delete_ContentTypesOnProjects_by_pk?: Maybe<ContentTypesOnProjects>;
  /** delete data from the table: "DomainRegistration" */
  delete_DomainRegistration?: Maybe<DomainRegistration_Mutation_Response>;
  /** delete single row from the table: "DomainRegistration" */
  delete_DomainRegistration_by_pk?: Maybe<DomainRegistration>;
  /** delete data from the table: "DomainRegistrationsOnProjects" */
  delete_DomainRegistrationsOnProjects?: Maybe<DomainRegistrationsOnProjects_Mutation_Response>;
  /** delete data from the table: "Donation" */
  delete_Donation?: Maybe<Donation_Mutation_Response>;
  /** delete single row from the table: "Donation" */
  delete_Donation_by_pk?: Maybe<Donation>;
  /** delete data from the table: "FAQ" */
  delete_FAQ?: Maybe<Faq_Mutation_Response>;
  /** delete single row from the table: "FAQ" */
  delete_FAQ_by_pk?: Maybe<Faq>;
  /** delete data from the table: "LegalContent" */
  delete_LegalContent?: Maybe<LegalContent_Mutation_Response>;
  /** delete single row from the table: "LegalContent" */
  delete_LegalContent_by_pk?: Maybe<LegalContent>;
  /** delete data from the table: "Media" */
  delete_Media?: Maybe<Media_Mutation_Response>;
  /** delete single row from the table: "Media" */
  delete_Media_by_pk?: Maybe<Media>;
  /** delete data from the table: "Menu" */
  delete_Menu?: Maybe<Menu_Mutation_Response>;
  /** delete single row from the table: "Menu" */
  delete_Menu_by_pk?: Maybe<Menu>;
  /** delete data from the table: "Notification" */
  delete_Notification?: Maybe<Notification_Mutation_Response>;
  /** delete data from the table: "NotificationTemplate" */
  delete_NotificationTemplate?: Maybe<NotificationTemplate_Mutation_Response>;
  /** delete data from the table: "NotificationTemplateUser" */
  delete_NotificationTemplateUser?: Maybe<NotificationTemplateUser_Mutation_Response>;
  /** delete single row from the table: "NotificationTemplateUser" */
  delete_NotificationTemplateUser_by_pk?: Maybe<NotificationTemplateUser>;
  /** delete single row from the table: "NotificationTemplate" */
  delete_NotificationTemplate_by_pk?: Maybe<NotificationTemplate>;
  /** delete single row from the table: "Notification" */
  delete_Notification_by_pk?: Maybe<Notification>;
  /** delete data from the table: "Organization" */
  delete_Organization?: Maybe<Organization_Mutation_Response>;
  /** delete single row from the table: "Organization" */
  delete_Organization_by_pk?: Maybe<Organization>;
  /** delete data from the table: "Page" */
  delete_Page?: Maybe<Page_Mutation_Response>;
  /** delete single row from the table: "Page" */
  delete_Page_by_pk?: Maybe<Page>;
  /** delete data from the table: "Payment" */
  delete_Payment?: Maybe<Payment_Mutation_Response>;
  /** delete single row from the table: "Payment" */
  delete_Payment_by_pk?: Maybe<Payment>;
  /** delete data from the table: "Permission" */
  delete_Permission?: Maybe<Permission_Mutation_Response>;
  /** delete single row from the table: "Permission" */
  delete_Permission_by_pk?: Maybe<Permission>;
  /** delete data from the table: "PermissionsOnRoles" */
  delete_PermissionsOnRoles?: Maybe<PermissionsOnRoles_Mutation_Response>;
  /** delete single row from the table: "PermissionsOnRoles" */
  delete_PermissionsOnRoles_by_pk?: Maybe<PermissionsOnRoles>;
  /** delete data from the table: "Plan" */
  delete_Plan?: Maybe<Plan_Mutation_Response>;
  /** delete data from the table: "PlanFeature" */
  delete_PlanFeature?: Maybe<PlanFeature_Mutation_Response>;
  /** delete data from the table: "PlanFeatureLimitation" */
  delete_PlanFeatureLimitation?: Maybe<PlanFeatureLimitation_Mutation_Response>;
  /** delete single row from the table: "PlanFeatureLimitation" */
  delete_PlanFeatureLimitation_by_pk?: Maybe<PlanFeatureLimitation>;
  /** delete single row from the table: "PlanFeature" */
  delete_PlanFeature_by_pk?: Maybe<PlanFeature>;
  /** delete single row from the table: "Plan" */
  delete_Plan_by_pk?: Maybe<Plan>;
  /** delete data from the table: "Plugin" */
  delete_Plugin?: Maybe<Plugin_Mutation_Response>;
  /** delete single row from the table: "Plugin" */
  delete_Plugin_by_pk?: Maybe<Plugin>;
  /** delete data from the table: "Post" */
  delete_Post?: Maybe<Post_Mutation_Response>;
  /** delete single row from the table: "Post" */
  delete_Post_by_pk?: Maybe<Post>;
  /** delete data from the table: "Project" */
  delete_Project?: Maybe<Project_Mutation_Response>;
  /** delete data from the table: "ProjectAudience" */
  delete_ProjectAudience?: Maybe<ProjectAudience_Mutation_Response>;
  /** delete single row from the table: "ProjectAudience" */
  delete_ProjectAudience_by_pk?: Maybe<ProjectAudience>;
  /** delete data from the table: "ProjectSettings" */
  delete_ProjectSettings?: Maybe<ProjectSettings_Mutation_Response>;
  /** delete single row from the table: "ProjectSettings" */
  delete_ProjectSettings_by_pk?: Maybe<ProjectSettings>;
  /** delete single row from the table: "Project" */
  delete_Project_by_pk?: Maybe<Project>;
  /** delete data from the table: "Role" */
  delete_Role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "Role" */
  delete_Role_by_pk?: Maybe<Role>;
  /** delete data from the table: "Subscription" */
  delete_Subscription?: Maybe<Subscription_Mutation_Response>;
  /** delete single row from the table: "Subscription" */
  delete_Subscription_by_pk?: Maybe<Subscription>;
  /** delete data from the table: "Theme" */
  delete_Theme?: Maybe<Theme_Mutation_Response>;
  /** delete single row from the table: "Theme" */
  delete_Theme_by_pk?: Maybe<Theme>;
  /** delete data from the table: "Ticket" */
  delete_Ticket?: Maybe<Ticket_Mutation_Response>;
  /** delete single row from the table: "Ticket" */
  delete_Ticket_by_pk?: Maybe<Ticket>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete data from the table: "UserPreferences" */
  delete_UserPreferences?: Maybe<UserPreferences_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** delete data from the table: "VisualType" */
  delete_VisualType?: Maybe<VisualType_Mutation_Response>;
  /** delete single row from the table: "VisualType" */
  delete_VisualType_by_pk?: Maybe<VisualType>;
  /** delete data from the table: "VisualTypesOnProjects" */
  delete_VisualTypesOnProjects?: Maybe<VisualTypesOnProjects_Mutation_Response>;
  /** delete single row from the table: "VisualTypesOnProjects" */
  delete_VisualTypesOnProjects_by_pk?: Maybe<VisualTypesOnProjects>;
  /** delete data from the table: "_prisma_migrations" */
  delete__prisma_migrations?: Maybe<_Prisma_Migrations_Mutation_Response>;
  /** delete single row from the table: "_prisma_migrations" */
  delete__prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>;
  /** insert data into the table: "Admin" */
  insert_Admin?: Maybe<Admin_Mutation_Response>;
  /** insert data into the table: "AdminPermission" */
  insert_AdminPermission?: Maybe<AdminPermission_Mutation_Response>;
  /** insert a single row into the table: "AdminPermission" */
  insert_AdminPermission_one?: Maybe<AdminPermission>;
  /** insert data into the table: "AdminPermissionsOnRoles" */
  insert_AdminPermissionsOnRoles?: Maybe<AdminPermissionsOnRoles_Mutation_Response>;
  /** insert a single row into the table: "AdminPermissionsOnRoles" */
  insert_AdminPermissionsOnRoles_one?: Maybe<AdminPermissionsOnRoles>;
  /** insert data into the table: "AdminRole" */
  insert_AdminRole?: Maybe<AdminRole_Mutation_Response>;
  /** insert a single row into the table: "AdminRole" */
  insert_AdminRole_one?: Maybe<AdminRole>;
  /** insert a single row into the table: "Admin" */
  insert_Admin_one?: Maybe<Admin>;
  /** insert data into the table: "Analytics" */
  insert_Analytics?: Maybe<Analytics_Mutation_Response>;
  /** insert a single row into the table: "Analytics" */
  insert_Analytics_one?: Maybe<Analytics>;
  /** insert data into the table: "Blog" */
  insert_Blog?: Maybe<Blog_Mutation_Response>;
  /** insert a single row into the table: "Blog" */
  insert_Blog_one?: Maybe<Blog>;
  /** insert data into the table: "Component" */
  insert_Component?: Maybe<Component_Mutation_Response>;
  /** insert a single row into the table: "Component" */
  insert_Component_one?: Maybe<Component>;
  /** insert data into the table: "ComponentsOnPages" */
  insert_ComponentsOnPages?: Maybe<ComponentsOnPages_Mutation_Response>;
  /** insert a single row into the table: "ComponentsOnPages" */
  insert_ComponentsOnPages_one?: Maybe<ComponentsOnPages>;
  /** insert data into the table: "ComponentsOnThemes" */
  insert_ComponentsOnThemes?: Maybe<ComponentsOnThemes_Mutation_Response>;
  /** insert a single row into the table: "ComponentsOnThemes" */
  insert_ComponentsOnThemes_one?: Maybe<ComponentsOnThemes>;
  /** insert data into the table: "ContactMessage" */
  insert_ContactMessage?: Maybe<ContactMessage_Mutation_Response>;
  /** insert a single row into the table: "ContactMessage" */
  insert_ContactMessage_one?: Maybe<ContactMessage>;
  /** insert data into the table: "ContactRequest" */
  insert_ContactRequest?: Maybe<ContactRequest_Mutation_Response>;
  /** insert a single row into the table: "ContactRequest" */
  insert_ContactRequest_one?: Maybe<ContactRequest>;
  /** insert data into the table: "ContentType" */
  insert_ContentType?: Maybe<ContentType_Mutation_Response>;
  /** insert a single row into the table: "ContentType" */
  insert_ContentType_one?: Maybe<ContentType>;
  /** insert data into the table: "ContentTypesOnProjects" */
  insert_ContentTypesOnProjects?: Maybe<ContentTypesOnProjects_Mutation_Response>;
  /** insert a single row into the table: "ContentTypesOnProjects" */
  insert_ContentTypesOnProjects_one?: Maybe<ContentTypesOnProjects>;
  /** insert data into the table: "DomainRegistration" */
  insert_DomainRegistration?: Maybe<DomainRegistration_Mutation_Response>;
  /** insert a single row into the table: "DomainRegistration" */
  insert_DomainRegistration_one?: Maybe<DomainRegistration>;
  /** insert data into the table: "DomainRegistrationsOnProjects" */
  insert_DomainRegistrationsOnProjects?: Maybe<DomainRegistrationsOnProjects_Mutation_Response>;
  /** insert a single row into the table: "DomainRegistrationsOnProjects" */
  insert_DomainRegistrationsOnProjects_one?: Maybe<DomainRegistrationsOnProjects>;
  /** insert data into the table: "Donation" */
  insert_Donation?: Maybe<Donation_Mutation_Response>;
  /** insert a single row into the table: "Donation" */
  insert_Donation_one?: Maybe<Donation>;
  /** insert data into the table: "FAQ" */
  insert_FAQ?: Maybe<Faq_Mutation_Response>;
  /** insert a single row into the table: "FAQ" */
  insert_FAQ_one?: Maybe<Faq>;
  /** insert data into the table: "LegalContent" */
  insert_LegalContent?: Maybe<LegalContent_Mutation_Response>;
  /** insert a single row into the table: "LegalContent" */
  insert_LegalContent_one?: Maybe<LegalContent>;
  /** insert data into the table: "Media" */
  insert_Media?: Maybe<Media_Mutation_Response>;
  /** insert a single row into the table: "Media" */
  insert_Media_one?: Maybe<Media>;
  /** insert data into the table: "Menu" */
  insert_Menu?: Maybe<Menu_Mutation_Response>;
  /** insert a single row into the table: "Menu" */
  insert_Menu_one?: Maybe<Menu>;
  /** insert data into the table: "Notification" */
  insert_Notification?: Maybe<Notification_Mutation_Response>;
  /** insert data into the table: "NotificationTemplate" */
  insert_NotificationTemplate?: Maybe<NotificationTemplate_Mutation_Response>;
  /** insert data into the table: "NotificationTemplateUser" */
  insert_NotificationTemplateUser?: Maybe<NotificationTemplateUser_Mutation_Response>;
  /** insert a single row into the table: "NotificationTemplateUser" */
  insert_NotificationTemplateUser_one?: Maybe<NotificationTemplateUser>;
  /** insert a single row into the table: "NotificationTemplate" */
  insert_NotificationTemplate_one?: Maybe<NotificationTemplate>;
  /** insert a single row into the table: "Notification" */
  insert_Notification_one?: Maybe<Notification>;
  /** insert data into the table: "Organization" */
  insert_Organization?: Maybe<Organization_Mutation_Response>;
  /** insert a single row into the table: "Organization" */
  insert_Organization_one?: Maybe<Organization>;
  /** insert data into the table: "Page" */
  insert_Page?: Maybe<Page_Mutation_Response>;
  /** insert a single row into the table: "Page" */
  insert_Page_one?: Maybe<Page>;
  /** insert data into the table: "Payment" */
  insert_Payment?: Maybe<Payment_Mutation_Response>;
  /** insert a single row into the table: "Payment" */
  insert_Payment_one?: Maybe<Payment>;
  /** insert data into the table: "Permission" */
  insert_Permission?: Maybe<Permission_Mutation_Response>;
  /** insert a single row into the table: "Permission" */
  insert_Permission_one?: Maybe<Permission>;
  /** insert data into the table: "PermissionsOnRoles" */
  insert_PermissionsOnRoles?: Maybe<PermissionsOnRoles_Mutation_Response>;
  /** insert a single row into the table: "PermissionsOnRoles" */
  insert_PermissionsOnRoles_one?: Maybe<PermissionsOnRoles>;
  /** insert data into the table: "Plan" */
  insert_Plan?: Maybe<Plan_Mutation_Response>;
  /** insert data into the table: "PlanFeature" */
  insert_PlanFeature?: Maybe<PlanFeature_Mutation_Response>;
  /** insert data into the table: "PlanFeatureLimitation" */
  insert_PlanFeatureLimitation?: Maybe<PlanFeatureLimitation_Mutation_Response>;
  /** insert a single row into the table: "PlanFeatureLimitation" */
  insert_PlanFeatureLimitation_one?: Maybe<PlanFeatureLimitation>;
  /** insert a single row into the table: "PlanFeature" */
  insert_PlanFeature_one?: Maybe<PlanFeature>;
  /** insert a single row into the table: "Plan" */
  insert_Plan_one?: Maybe<Plan>;
  /** insert data into the table: "Plugin" */
  insert_Plugin?: Maybe<Plugin_Mutation_Response>;
  /** insert a single row into the table: "Plugin" */
  insert_Plugin_one?: Maybe<Plugin>;
  /** insert data into the table: "Post" */
  insert_Post?: Maybe<Post_Mutation_Response>;
  /** insert a single row into the table: "Post" */
  insert_Post_one?: Maybe<Post>;
  /** insert data into the table: "Project" */
  insert_Project?: Maybe<Project_Mutation_Response>;
  /** insert data into the table: "ProjectAudience" */
  insert_ProjectAudience?: Maybe<ProjectAudience_Mutation_Response>;
  /** insert a single row into the table: "ProjectAudience" */
  insert_ProjectAudience_one?: Maybe<ProjectAudience>;
  /** insert data into the table: "ProjectSettings" */
  insert_ProjectSettings?: Maybe<ProjectSettings_Mutation_Response>;
  /** insert a single row into the table: "ProjectSettings" */
  insert_ProjectSettings_one?: Maybe<ProjectSettings>;
  /** insert a single row into the table: "Project" */
  insert_Project_one?: Maybe<Project>;
  /** insert data into the table: "Role" */
  insert_Role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "Role" */
  insert_Role_one?: Maybe<Role>;
  /** insert data into the table: "Subscription" */
  insert_Subscription?: Maybe<Subscription_Mutation_Response>;
  /** insert a single row into the table: "Subscription" */
  insert_Subscription_one?: Maybe<Subscription>;
  /** insert data into the table: "Theme" */
  insert_Theme?: Maybe<Theme_Mutation_Response>;
  /** insert a single row into the table: "Theme" */
  insert_Theme_one?: Maybe<Theme>;
  /** insert data into the table: "Ticket" */
  insert_Ticket?: Maybe<Ticket_Mutation_Response>;
  /** insert a single row into the table: "Ticket" */
  insert_Ticket_one?: Maybe<Ticket>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "UserPreferences" */
  insert_UserPreferences?: Maybe<UserPreferences_Mutation_Response>;
  /** insert a single row into the table: "UserPreferences" */
  insert_UserPreferences_one?: Maybe<UserPreferences>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** insert data into the table: "VisualType" */
  insert_VisualType?: Maybe<VisualType_Mutation_Response>;
  /** insert a single row into the table: "VisualType" */
  insert_VisualType_one?: Maybe<VisualType>;
  /** insert data into the table: "VisualTypesOnProjects" */
  insert_VisualTypesOnProjects?: Maybe<VisualTypesOnProjects_Mutation_Response>;
  /** insert a single row into the table: "VisualTypesOnProjects" */
  insert_VisualTypesOnProjects_one?: Maybe<VisualTypesOnProjects>;
  /** insert data into the table: "_prisma_migrations" */
  insert__prisma_migrations?: Maybe<_Prisma_Migrations_Mutation_Response>;
  /** insert a single row into the table: "_prisma_migrations" */
  insert__prisma_migrations_one?: Maybe<_Prisma_Migrations>;
  /** update data of the table: "Admin" */
  update_Admin?: Maybe<Admin_Mutation_Response>;
  /** update data of the table: "AdminPermission" */
  update_AdminPermission?: Maybe<AdminPermission_Mutation_Response>;
  /** update single row of the table: "AdminPermission" */
  update_AdminPermission_by_pk?: Maybe<AdminPermission>;
  /** update multiples rows of table: "AdminPermission" */
  update_AdminPermission_many?: Maybe<Array<Maybe<AdminPermission_Mutation_Response>>>;
  /** update data of the table: "AdminPermissionsOnRoles" */
  update_AdminPermissionsOnRoles?: Maybe<AdminPermissionsOnRoles_Mutation_Response>;
  /** update single row of the table: "AdminPermissionsOnRoles" */
  update_AdminPermissionsOnRoles_by_pk?: Maybe<AdminPermissionsOnRoles>;
  /** update multiples rows of table: "AdminPermissionsOnRoles" */
  update_AdminPermissionsOnRoles_many?: Maybe<
    Array<Maybe<AdminPermissionsOnRoles_Mutation_Response>>
  >;
  /** update data of the table: "AdminRole" */
  update_AdminRole?: Maybe<AdminRole_Mutation_Response>;
  /** update single row of the table: "AdminRole" */
  update_AdminRole_by_pk?: Maybe<AdminRole>;
  /** update multiples rows of table: "AdminRole" */
  update_AdminRole_many?: Maybe<Array<Maybe<AdminRole_Mutation_Response>>>;
  /** update single row of the table: "Admin" */
  update_Admin_by_pk?: Maybe<Admin>;
  /** update multiples rows of table: "Admin" */
  update_Admin_many?: Maybe<Array<Maybe<Admin_Mutation_Response>>>;
  /** update data of the table: "Analytics" */
  update_Analytics?: Maybe<Analytics_Mutation_Response>;
  /** update single row of the table: "Analytics" */
  update_Analytics_by_pk?: Maybe<Analytics>;
  /** update multiples rows of table: "Analytics" */
  update_Analytics_many?: Maybe<Array<Maybe<Analytics_Mutation_Response>>>;
  /** update data of the table: "Blog" */
  update_Blog?: Maybe<Blog_Mutation_Response>;
  /** update single row of the table: "Blog" */
  update_Blog_by_pk?: Maybe<Blog>;
  /** update multiples rows of table: "Blog" */
  update_Blog_many?: Maybe<Array<Maybe<Blog_Mutation_Response>>>;
  /** update data of the table: "Component" */
  update_Component?: Maybe<Component_Mutation_Response>;
  /** update single row of the table: "Component" */
  update_Component_by_pk?: Maybe<Component>;
  /** update multiples rows of table: "Component" */
  update_Component_many?: Maybe<Array<Maybe<Component_Mutation_Response>>>;
  /** update data of the table: "ComponentsOnPages" */
  update_ComponentsOnPages?: Maybe<ComponentsOnPages_Mutation_Response>;
  /** update single row of the table: "ComponentsOnPages" */
  update_ComponentsOnPages_by_pk?: Maybe<ComponentsOnPages>;
  /** update multiples rows of table: "ComponentsOnPages" */
  update_ComponentsOnPages_many?: Maybe<Array<Maybe<ComponentsOnPages_Mutation_Response>>>;
  /** update data of the table: "ComponentsOnThemes" */
  update_ComponentsOnThemes?: Maybe<ComponentsOnThemes_Mutation_Response>;
  /** update single row of the table: "ComponentsOnThemes" */
  update_ComponentsOnThemes_by_pk?: Maybe<ComponentsOnThemes>;
  /** update multiples rows of table: "ComponentsOnThemes" */
  update_ComponentsOnThemes_many?: Maybe<Array<Maybe<ComponentsOnThemes_Mutation_Response>>>;
  /** update data of the table: "ContactMessage" */
  update_ContactMessage?: Maybe<ContactMessage_Mutation_Response>;
  /** update single row of the table: "ContactMessage" */
  update_ContactMessage_by_pk?: Maybe<ContactMessage>;
  /** update multiples rows of table: "ContactMessage" */
  update_ContactMessage_many?: Maybe<Array<Maybe<ContactMessage_Mutation_Response>>>;
  /** update data of the table: "ContactRequest" */
  update_ContactRequest?: Maybe<ContactRequest_Mutation_Response>;
  /** update single row of the table: "ContactRequest" */
  update_ContactRequest_by_pk?: Maybe<ContactRequest>;
  /** update multiples rows of table: "ContactRequest" */
  update_ContactRequest_many?: Maybe<Array<Maybe<ContactRequest_Mutation_Response>>>;
  /** update data of the table: "ContentType" */
  update_ContentType?: Maybe<ContentType_Mutation_Response>;
  /** update single row of the table: "ContentType" */
  update_ContentType_by_pk?: Maybe<ContentType>;
  /** update multiples rows of table: "ContentType" */
  update_ContentType_many?: Maybe<Array<Maybe<ContentType_Mutation_Response>>>;
  /** update data of the table: "ContentTypesOnProjects" */
  update_ContentTypesOnProjects?: Maybe<ContentTypesOnProjects_Mutation_Response>;
  /** update single row of the table: "ContentTypesOnProjects" */
  update_ContentTypesOnProjects_by_pk?: Maybe<ContentTypesOnProjects>;
  /** update multiples rows of table: "ContentTypesOnProjects" */
  update_ContentTypesOnProjects_many?: Maybe<
    Array<Maybe<ContentTypesOnProjects_Mutation_Response>>
  >;
  /** update data of the table: "DomainRegistration" */
  update_DomainRegistration?: Maybe<DomainRegistration_Mutation_Response>;
  /** update single row of the table: "DomainRegistration" */
  update_DomainRegistration_by_pk?: Maybe<DomainRegistration>;
  /** update multiples rows of table: "DomainRegistration" */
  update_DomainRegistration_many?: Maybe<Array<Maybe<DomainRegistration_Mutation_Response>>>;
  /** update data of the table: "DomainRegistrationsOnProjects" */
  update_DomainRegistrationsOnProjects?: Maybe<DomainRegistrationsOnProjects_Mutation_Response>;
  /** update multiples rows of table: "DomainRegistrationsOnProjects" */
  update_DomainRegistrationsOnProjects_many?: Maybe<
    Array<Maybe<DomainRegistrationsOnProjects_Mutation_Response>>
  >;
  /** update data of the table: "Donation" */
  update_Donation?: Maybe<Donation_Mutation_Response>;
  /** update single row of the table: "Donation" */
  update_Donation_by_pk?: Maybe<Donation>;
  /** update multiples rows of table: "Donation" */
  update_Donation_many?: Maybe<Array<Maybe<Donation_Mutation_Response>>>;
  /** update data of the table: "FAQ" */
  update_FAQ?: Maybe<Faq_Mutation_Response>;
  /** update single row of the table: "FAQ" */
  update_FAQ_by_pk?: Maybe<Faq>;
  /** update multiples rows of table: "FAQ" */
  update_FAQ_many?: Maybe<Array<Maybe<Faq_Mutation_Response>>>;
  /** update data of the table: "LegalContent" */
  update_LegalContent?: Maybe<LegalContent_Mutation_Response>;
  /** update single row of the table: "LegalContent" */
  update_LegalContent_by_pk?: Maybe<LegalContent>;
  /** update multiples rows of table: "LegalContent" */
  update_LegalContent_many?: Maybe<Array<Maybe<LegalContent_Mutation_Response>>>;
  /** update data of the table: "Media" */
  update_Media?: Maybe<Media_Mutation_Response>;
  /** update single row of the table: "Media" */
  update_Media_by_pk?: Maybe<Media>;
  /** update multiples rows of table: "Media" */
  update_Media_many?: Maybe<Array<Maybe<Media_Mutation_Response>>>;
  /** update data of the table: "Menu" */
  update_Menu?: Maybe<Menu_Mutation_Response>;
  /** update single row of the table: "Menu" */
  update_Menu_by_pk?: Maybe<Menu>;
  /** update multiples rows of table: "Menu" */
  update_Menu_many?: Maybe<Array<Maybe<Menu_Mutation_Response>>>;
  /** update data of the table: "Notification" */
  update_Notification?: Maybe<Notification_Mutation_Response>;
  /** update data of the table: "NotificationTemplate" */
  update_NotificationTemplate?: Maybe<NotificationTemplate_Mutation_Response>;
  /** update data of the table: "NotificationTemplateUser" */
  update_NotificationTemplateUser?: Maybe<NotificationTemplateUser_Mutation_Response>;
  /** update single row of the table: "NotificationTemplateUser" */
  update_NotificationTemplateUser_by_pk?: Maybe<NotificationTemplateUser>;
  /** update multiples rows of table: "NotificationTemplateUser" */
  update_NotificationTemplateUser_many?: Maybe<
    Array<Maybe<NotificationTemplateUser_Mutation_Response>>
  >;
  /** update single row of the table: "NotificationTemplate" */
  update_NotificationTemplate_by_pk?: Maybe<NotificationTemplate>;
  /** update multiples rows of table: "NotificationTemplate" */
  update_NotificationTemplate_many?: Maybe<Array<Maybe<NotificationTemplate_Mutation_Response>>>;
  /** update single row of the table: "Notification" */
  update_Notification_by_pk?: Maybe<Notification>;
  /** update multiples rows of table: "Notification" */
  update_Notification_many?: Maybe<Array<Maybe<Notification_Mutation_Response>>>;
  /** update data of the table: "Organization" */
  update_Organization?: Maybe<Organization_Mutation_Response>;
  /** update single row of the table: "Organization" */
  update_Organization_by_pk?: Maybe<Organization>;
  /** update multiples rows of table: "Organization" */
  update_Organization_many?: Maybe<Array<Maybe<Organization_Mutation_Response>>>;
  /** update data of the table: "Page" */
  update_Page?: Maybe<Page_Mutation_Response>;
  /** update single row of the table: "Page" */
  update_Page_by_pk?: Maybe<Page>;
  /** update multiples rows of table: "Page" */
  update_Page_many?: Maybe<Array<Maybe<Page_Mutation_Response>>>;
  /** update data of the table: "Payment" */
  update_Payment?: Maybe<Payment_Mutation_Response>;
  /** update single row of the table: "Payment" */
  update_Payment_by_pk?: Maybe<Payment>;
  /** update multiples rows of table: "Payment" */
  update_Payment_many?: Maybe<Array<Maybe<Payment_Mutation_Response>>>;
  /** update data of the table: "Permission" */
  update_Permission?: Maybe<Permission_Mutation_Response>;
  /** update single row of the table: "Permission" */
  update_Permission_by_pk?: Maybe<Permission>;
  /** update multiples rows of table: "Permission" */
  update_Permission_many?: Maybe<Array<Maybe<Permission_Mutation_Response>>>;
  /** update data of the table: "PermissionsOnRoles" */
  update_PermissionsOnRoles?: Maybe<PermissionsOnRoles_Mutation_Response>;
  /** update single row of the table: "PermissionsOnRoles" */
  update_PermissionsOnRoles_by_pk?: Maybe<PermissionsOnRoles>;
  /** update multiples rows of table: "PermissionsOnRoles" */
  update_PermissionsOnRoles_many?: Maybe<Array<Maybe<PermissionsOnRoles_Mutation_Response>>>;
  /** update data of the table: "Plan" */
  update_Plan?: Maybe<Plan_Mutation_Response>;
  /** update data of the table: "PlanFeature" */
  update_PlanFeature?: Maybe<PlanFeature_Mutation_Response>;
  /** update data of the table: "PlanFeatureLimitation" */
  update_PlanFeatureLimitation?: Maybe<PlanFeatureLimitation_Mutation_Response>;
  /** update single row of the table: "PlanFeatureLimitation" */
  update_PlanFeatureLimitation_by_pk?: Maybe<PlanFeatureLimitation>;
  /** update multiples rows of table: "PlanFeatureLimitation" */
  update_PlanFeatureLimitation_many?: Maybe<Array<Maybe<PlanFeatureLimitation_Mutation_Response>>>;
  /** update single row of the table: "PlanFeature" */
  update_PlanFeature_by_pk?: Maybe<PlanFeature>;
  /** update multiples rows of table: "PlanFeature" */
  update_PlanFeature_many?: Maybe<Array<Maybe<PlanFeature_Mutation_Response>>>;
  /** update single row of the table: "Plan" */
  update_Plan_by_pk?: Maybe<Plan>;
  /** update multiples rows of table: "Plan" */
  update_Plan_many?: Maybe<Array<Maybe<Plan_Mutation_Response>>>;
  /** update data of the table: "Plugin" */
  update_Plugin?: Maybe<Plugin_Mutation_Response>;
  /** update single row of the table: "Plugin" */
  update_Plugin_by_pk?: Maybe<Plugin>;
  /** update multiples rows of table: "Plugin" */
  update_Plugin_many?: Maybe<Array<Maybe<Plugin_Mutation_Response>>>;
  /** update data of the table: "Post" */
  update_Post?: Maybe<Post_Mutation_Response>;
  /** update single row of the table: "Post" */
  update_Post_by_pk?: Maybe<Post>;
  /** update multiples rows of table: "Post" */
  update_Post_many?: Maybe<Array<Maybe<Post_Mutation_Response>>>;
  /** update data of the table: "Project" */
  update_Project?: Maybe<Project_Mutation_Response>;
  /** update data of the table: "ProjectAudience" */
  update_ProjectAudience?: Maybe<ProjectAudience_Mutation_Response>;
  /** update single row of the table: "ProjectAudience" */
  update_ProjectAudience_by_pk?: Maybe<ProjectAudience>;
  /** update multiples rows of table: "ProjectAudience" */
  update_ProjectAudience_many?: Maybe<Array<Maybe<ProjectAudience_Mutation_Response>>>;
  /** update data of the table: "ProjectSettings" */
  update_ProjectSettings?: Maybe<ProjectSettings_Mutation_Response>;
  /** update single row of the table: "ProjectSettings" */
  update_ProjectSettings_by_pk?: Maybe<ProjectSettings>;
  /** update multiples rows of table: "ProjectSettings" */
  update_ProjectSettings_many?: Maybe<Array<Maybe<ProjectSettings_Mutation_Response>>>;
  /** update single row of the table: "Project" */
  update_Project_by_pk?: Maybe<Project>;
  /** update multiples rows of table: "Project" */
  update_Project_many?: Maybe<Array<Maybe<Project_Mutation_Response>>>;
  /** update data of the table: "Role" */
  update_Role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "Role" */
  update_Role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "Role" */
  update_Role_many?: Maybe<Array<Maybe<Role_Mutation_Response>>>;
  /** update data of the table: "Subscription" */
  update_Subscription?: Maybe<Subscription_Mutation_Response>;
  /** update single row of the table: "Subscription" */
  update_Subscription_by_pk?: Maybe<Subscription>;
  /** update multiples rows of table: "Subscription" */
  update_Subscription_many?: Maybe<Array<Maybe<Subscription_Mutation_Response>>>;
  /** update data of the table: "Theme" */
  update_Theme?: Maybe<Theme_Mutation_Response>;
  /** update single row of the table: "Theme" */
  update_Theme_by_pk?: Maybe<Theme>;
  /** update multiples rows of table: "Theme" */
  update_Theme_many?: Maybe<Array<Maybe<Theme_Mutation_Response>>>;
  /** update data of the table: "Ticket" */
  update_Ticket?: Maybe<Ticket_Mutation_Response>;
  /** update single row of the table: "Ticket" */
  update_Ticket_by_pk?: Maybe<Ticket>;
  /** update multiples rows of table: "Ticket" */
  update_Ticket_many?: Maybe<Array<Maybe<Ticket_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update data of the table: "UserPreferences" */
  update_UserPreferences?: Maybe<UserPreferences_Mutation_Response>;
  /** update multiples rows of table: "UserPreferences" */
  update_UserPreferences_many?: Maybe<Array<Maybe<UserPreferences_Mutation_Response>>>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update multiples rows of table: "User" */
  update_User_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "VisualType" */
  update_VisualType?: Maybe<VisualType_Mutation_Response>;
  /** update single row of the table: "VisualType" */
  update_VisualType_by_pk?: Maybe<VisualType>;
  /** update multiples rows of table: "VisualType" */
  update_VisualType_many?: Maybe<Array<Maybe<VisualType_Mutation_Response>>>;
  /** update data of the table: "VisualTypesOnProjects" */
  update_VisualTypesOnProjects?: Maybe<VisualTypesOnProjects_Mutation_Response>;
  /** update single row of the table: "VisualTypesOnProjects" */
  update_VisualTypesOnProjects_by_pk?: Maybe<VisualTypesOnProjects>;
  /** update multiples rows of table: "VisualTypesOnProjects" */
  update_VisualTypesOnProjects_many?: Maybe<Array<Maybe<VisualTypesOnProjects_Mutation_Response>>>;
  /** update data of the table: "_prisma_migrations" */
  update__prisma_migrations?: Maybe<_Prisma_Migrations_Mutation_Response>;
  /** update single row of the table: "_prisma_migrations" */
  update__prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>;
  /** update multiples rows of table: "_prisma_migrations" */
  update__prisma_migrations_many?: Maybe<Array<Maybe<_Prisma_Migrations_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_AdminPermissionArgs = {
  where: AdminPermission_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_AdminPermission_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_AdminPermissionsOnRolesArgs = {
  where: AdminPermissionsOnRoles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_AdminPermissionsOnRoles_By_PkArgs = {
  permissionId: Scalars['Int']['input'];
  roleId: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_AdminRoleArgs = {
  where: AdminRole_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_AdminRole_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_AnalyticsArgs = {
  where: Analytics_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Analytics_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_BlogArgs = {
  where: Blog_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Blog_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ComponentArgs = {
  where: Component_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Component_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ComponentsOnPagesArgs = {
  where: ComponentsOnPages_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ComponentsOnPages_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ComponentsOnThemesArgs = {
  where: ComponentsOnThemes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ComponentsOnThemes_By_PkArgs = {
  componentId: Scalars['Int']['input'];
  themeId: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ContactMessageArgs = {
  where: ContactMessage_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ContactMessage_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ContactRequestArgs = {
  where: ContactRequest_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ContactRequest_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ContentTypeArgs = {
  where: ContentType_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ContentType_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ContentTypesOnProjectsArgs = {
  where: ContentTypesOnProjects_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ContentTypesOnProjects_By_PkArgs = {
  contentTypeId: Scalars['Int']['input'];
  projectId: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDelete_DomainRegistrationArgs = {
  where: DomainRegistration_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_DomainRegistration_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_DomainRegistrationsOnProjectsArgs = {
  where: DomainRegistrationsOnProjects_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_DonationArgs = {
  where: Donation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Donation_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_FaqArgs = {
  where: Faq_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Faq_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_LegalContentArgs = {
  where: LegalContent_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_LegalContent_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_MediaArgs = {
  where: Media_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Media_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_MenuArgs = {
  where: Menu_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Menu_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_NotificationArgs = {
  where: Notification_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_NotificationTemplateArgs = {
  where: NotificationTemplate_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_NotificationTemplateUserArgs = {
  where: NotificationTemplateUser_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_NotificationTemplateUser_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_NotificationTemplate_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Notification_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_OrganizationArgs = {
  where: Organization_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Organization_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_PageArgs = {
  where: Page_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Page_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_PaymentArgs = {
  where: Payment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Payment_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_PermissionArgs = {
  where: Permission_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Permission_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_PermissionsOnRolesArgs = {
  where: PermissionsOnRoles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_PermissionsOnRoles_By_PkArgs = {
  permissionId: Scalars['Int']['input'];
  roleId: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_PlanArgs = {
  where: Plan_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_PlanFeatureArgs = {
  where: PlanFeature_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_PlanFeatureLimitationArgs = {
  where: PlanFeatureLimitation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_PlanFeatureLimitation_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_PlanFeature_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Plan_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_PluginArgs = {
  where: Plugin_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Plugin_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_PostArgs = {
  where: Post_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Post_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ProjectArgs = {
  where: Project_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ProjectAudienceArgs = {
  where: ProjectAudience_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ProjectAudience_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ProjectSettingsArgs = {
  where: ProjectSettings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ProjectSettings_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Project_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_SubscriptionArgs = {
  where: Subscription_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Subscription_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ThemeArgs = {
  where: Theme_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Theme_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_TicketArgs = {
  where: Ticket_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ticket_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UserPreferencesArgs = {
  where: UserPreferences_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_VisualTypeArgs = {
  where: VisualType_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_VisualType_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_VisualTypesOnProjectsArgs = {
  where: VisualTypesOnProjects_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_VisualTypesOnProjects_By_PkArgs = {
  projectId: Scalars['uuid']['input'];
  visualTypeId: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete__Prisma_MigrationsArgs = {
  where: _Prisma_Migrations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete__Prisma_Migrations_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AdminPermissionArgs = {
  objects: Array<AdminPermission_Insert_Input>;
  on_conflict?: InputMaybe<AdminPermission_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AdminPermission_OneArgs = {
  object: AdminPermission_Insert_Input;
  on_conflict?: InputMaybe<AdminPermission_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AdminPermissionsOnRolesArgs = {
  objects: Array<AdminPermissionsOnRoles_Insert_Input>;
  on_conflict?: InputMaybe<AdminPermissionsOnRoles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AdminPermissionsOnRoles_OneArgs = {
  object: AdminPermissionsOnRoles_Insert_Input;
  on_conflict?: InputMaybe<AdminPermissionsOnRoles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AdminRoleArgs = {
  objects: Array<AdminRole_Insert_Input>;
  on_conflict?: InputMaybe<AdminRole_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AdminRole_OneArgs = {
  object: AdminRole_Insert_Input;
  on_conflict?: InputMaybe<AdminRole_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AnalyticsArgs = {
  objects: Array<Analytics_Insert_Input>;
  on_conflict?: InputMaybe<Analytics_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Analytics_OneArgs = {
  object: Analytics_Insert_Input;
  on_conflict?: InputMaybe<Analytics_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_BlogArgs = {
  objects: Array<Blog_Insert_Input>;
  on_conflict?: InputMaybe<Blog_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Blog_OneArgs = {
  object: Blog_Insert_Input;
  on_conflict?: InputMaybe<Blog_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ComponentArgs = {
  objects: Array<Component_Insert_Input>;
  on_conflict?: InputMaybe<Component_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Component_OneArgs = {
  object: Component_Insert_Input;
  on_conflict?: InputMaybe<Component_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ComponentsOnPagesArgs = {
  objects: Array<ComponentsOnPages_Insert_Input>;
  on_conflict?: InputMaybe<ComponentsOnPages_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ComponentsOnPages_OneArgs = {
  object: ComponentsOnPages_Insert_Input;
  on_conflict?: InputMaybe<ComponentsOnPages_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ComponentsOnThemesArgs = {
  objects: Array<ComponentsOnThemes_Insert_Input>;
  on_conflict?: InputMaybe<ComponentsOnThemes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ComponentsOnThemes_OneArgs = {
  object: ComponentsOnThemes_Insert_Input;
  on_conflict?: InputMaybe<ComponentsOnThemes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ContactMessageArgs = {
  objects: Array<ContactMessage_Insert_Input>;
  on_conflict?: InputMaybe<ContactMessage_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ContactMessage_OneArgs = {
  object: ContactMessage_Insert_Input;
  on_conflict?: InputMaybe<ContactMessage_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ContactRequestArgs = {
  objects: Array<ContactRequest_Insert_Input>;
  on_conflict?: InputMaybe<ContactRequest_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ContactRequest_OneArgs = {
  object: ContactRequest_Insert_Input;
  on_conflict?: InputMaybe<ContactRequest_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ContentTypeArgs = {
  objects: Array<ContentType_Insert_Input>;
  on_conflict?: InputMaybe<ContentType_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ContentType_OneArgs = {
  object: ContentType_Insert_Input;
  on_conflict?: InputMaybe<ContentType_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ContentTypesOnProjectsArgs = {
  objects: Array<ContentTypesOnProjects_Insert_Input>;
  on_conflict?: InputMaybe<ContentTypesOnProjects_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ContentTypesOnProjects_OneArgs = {
  object: ContentTypesOnProjects_Insert_Input;
  on_conflict?: InputMaybe<ContentTypesOnProjects_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_DomainRegistrationArgs = {
  objects: Array<DomainRegistration_Insert_Input>;
  on_conflict?: InputMaybe<DomainRegistration_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_DomainRegistration_OneArgs = {
  object: DomainRegistration_Insert_Input;
  on_conflict?: InputMaybe<DomainRegistration_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_DomainRegistrationsOnProjectsArgs = {
  objects: Array<DomainRegistrationsOnProjects_Insert_Input>;
  on_conflict?: InputMaybe<DomainRegistrationsOnProjects_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_DomainRegistrationsOnProjects_OneArgs = {
  object: DomainRegistrationsOnProjects_Insert_Input;
  on_conflict?: InputMaybe<DomainRegistrationsOnProjects_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_DonationArgs = {
  objects: Array<Donation_Insert_Input>;
  on_conflict?: InputMaybe<Donation_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Donation_OneArgs = {
  object: Donation_Insert_Input;
  on_conflict?: InputMaybe<Donation_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_FaqArgs = {
  objects: Array<Faq_Insert_Input>;
  on_conflict?: InputMaybe<Faq_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Faq_OneArgs = {
  object: Faq_Insert_Input;
  on_conflict?: InputMaybe<Faq_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LegalContentArgs = {
  objects: Array<LegalContent_Insert_Input>;
  on_conflict?: InputMaybe<LegalContent_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LegalContent_OneArgs = {
  object: LegalContent_Insert_Input;
  on_conflict?: InputMaybe<LegalContent_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MediaArgs = {
  objects: Array<Media_Insert_Input>;
  on_conflict?: InputMaybe<Media_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Media_OneArgs = {
  object: Media_Insert_Input;
  on_conflict?: InputMaybe<Media_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MenuArgs = {
  objects: Array<Menu_Insert_Input>;
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Menu_OneArgs = {
  object: Menu_Insert_Input;
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_NotificationArgs = {
  objects: Array<Notification_Insert_Input>;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_NotificationTemplateArgs = {
  objects: Array<NotificationTemplate_Insert_Input>;
  on_conflict?: InputMaybe<NotificationTemplate_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_NotificationTemplateUserArgs = {
  objects: Array<NotificationTemplateUser_Insert_Input>;
  on_conflict?: InputMaybe<NotificationTemplateUser_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_NotificationTemplateUser_OneArgs = {
  object: NotificationTemplateUser_Insert_Input;
  on_conflict?: InputMaybe<NotificationTemplateUser_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_NotificationTemplate_OneArgs = {
  object: NotificationTemplate_Insert_Input;
  on_conflict?: InputMaybe<NotificationTemplate_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Notification_OneArgs = {
  object: Notification_Insert_Input;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OrganizationArgs = {
  objects: Array<Organization_Insert_Input>;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Organization_OneArgs = {
  object: Organization_Insert_Input;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PageArgs = {
  objects: Array<Page_Insert_Input>;
  on_conflict?: InputMaybe<Page_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Page_OneArgs = {
  object: Page_Insert_Input;
  on_conflict?: InputMaybe<Page_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PaymentArgs = {
  objects: Array<Payment_Insert_Input>;
  on_conflict?: InputMaybe<Payment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Payment_OneArgs = {
  object: Payment_Insert_Input;
  on_conflict?: InputMaybe<Payment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PermissionArgs = {
  objects: Array<Permission_Insert_Input>;
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Permission_OneArgs = {
  object: Permission_Insert_Input;
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PermissionsOnRolesArgs = {
  objects: Array<PermissionsOnRoles_Insert_Input>;
  on_conflict?: InputMaybe<PermissionsOnRoles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PermissionsOnRoles_OneArgs = {
  object: PermissionsOnRoles_Insert_Input;
  on_conflict?: InputMaybe<PermissionsOnRoles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PlanArgs = {
  objects: Array<Plan_Insert_Input>;
  on_conflict?: InputMaybe<Plan_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PlanFeatureArgs = {
  objects: Array<PlanFeature_Insert_Input>;
  on_conflict?: InputMaybe<PlanFeature_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PlanFeatureLimitationArgs = {
  objects: Array<PlanFeatureLimitation_Insert_Input>;
  on_conflict?: InputMaybe<PlanFeatureLimitation_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PlanFeatureLimitation_OneArgs = {
  object: PlanFeatureLimitation_Insert_Input;
  on_conflict?: InputMaybe<PlanFeatureLimitation_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PlanFeature_OneArgs = {
  object: PlanFeature_Insert_Input;
  on_conflict?: InputMaybe<PlanFeature_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Plan_OneArgs = {
  object: Plan_Insert_Input;
  on_conflict?: InputMaybe<Plan_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PluginArgs = {
  objects: Array<Plugin_Insert_Input>;
  on_conflict?: InputMaybe<Plugin_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Plugin_OneArgs = {
  object: Plugin_Insert_Input;
  on_conflict?: InputMaybe<Plugin_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PostArgs = {
  objects: Array<Post_Insert_Input>;
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_OneArgs = {
  object: Post_Insert_Input;
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProjectArgs = {
  objects: Array<Project_Insert_Input>;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProjectAudienceArgs = {
  objects: Array<ProjectAudience_Insert_Input>;
  on_conflict?: InputMaybe<ProjectAudience_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProjectAudience_OneArgs = {
  object: ProjectAudience_Insert_Input;
  on_conflict?: InputMaybe<ProjectAudience_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProjectSettingsArgs = {
  objects: Array<ProjectSettings_Insert_Input>;
  on_conflict?: InputMaybe<ProjectSettings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProjectSettings_OneArgs = {
  object: ProjectSettings_Insert_Input;
  on_conflict?: InputMaybe<ProjectSettings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_OneArgs = {
  object: Project_Insert_Input;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SubscriptionArgs = {
  objects: Array<Subscription_Insert_Input>;
  on_conflict?: InputMaybe<Subscription_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Subscription_OneArgs = {
  object: Subscription_Insert_Input;
  on_conflict?: InputMaybe<Subscription_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ThemeArgs = {
  objects: Array<Theme_Insert_Input>;
  on_conflict?: InputMaybe<Theme_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Theme_OneArgs = {
  object: Theme_Insert_Input;
  on_conflict?: InputMaybe<Theme_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TicketArgs = {
  objects: Array<Ticket_Insert_Input>;
  on_conflict?: InputMaybe<Ticket_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ticket_OneArgs = {
  object: Ticket_Insert_Input;
  on_conflict?: InputMaybe<Ticket_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserPreferencesArgs = {
  objects: Array<UserPreferences_Insert_Input>;
  on_conflict?: InputMaybe<UserPreferences_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserPreferences_OneArgs = {
  object: UserPreferences_Insert_Input;
  on_conflict?: InputMaybe<UserPreferences_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_VisualTypeArgs = {
  objects: Array<VisualType_Insert_Input>;
  on_conflict?: InputMaybe<VisualType_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_VisualType_OneArgs = {
  object: VisualType_Insert_Input;
  on_conflict?: InputMaybe<VisualType_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_VisualTypesOnProjectsArgs = {
  objects: Array<VisualTypesOnProjects_Insert_Input>;
  on_conflict?: InputMaybe<VisualTypesOnProjects_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_VisualTypesOnProjects_OneArgs = {
  object: VisualTypesOnProjects_Insert_Input;
  on_conflict?: InputMaybe<VisualTypesOnProjects_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert__Prisma_MigrationsArgs = {
  objects: Array<_Prisma_Migrations_Insert_Input>;
  on_conflict?: InputMaybe<_Prisma_Migrations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert__Prisma_Migrations_OneArgs = {
  object: _Prisma_Migrations_Insert_Input;
  on_conflict?: InputMaybe<_Prisma_Migrations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _inc?: InputMaybe<Admin_Inc_Input>;
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_AdminPermissionArgs = {
  _inc?: InputMaybe<AdminPermission_Inc_Input>;
  _set?: InputMaybe<AdminPermission_Set_Input>;
  where: AdminPermission_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_AdminPermission_By_PkArgs = {
  _inc?: InputMaybe<AdminPermission_Inc_Input>;
  _set?: InputMaybe<AdminPermission_Set_Input>;
  pk_columns: AdminPermission_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_AdminPermission_ManyArgs = {
  updates: Array<AdminPermission_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AdminPermissionsOnRolesArgs = {
  _inc?: InputMaybe<AdminPermissionsOnRoles_Inc_Input>;
  _set?: InputMaybe<AdminPermissionsOnRoles_Set_Input>;
  where: AdminPermissionsOnRoles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_AdminPermissionsOnRoles_By_PkArgs = {
  _inc?: InputMaybe<AdminPermissionsOnRoles_Inc_Input>;
  _set?: InputMaybe<AdminPermissionsOnRoles_Set_Input>;
  pk_columns: AdminPermissionsOnRoles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_AdminPermissionsOnRoles_ManyArgs = {
  updates: Array<AdminPermissionsOnRoles_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AdminRoleArgs = {
  _inc?: InputMaybe<AdminRole_Inc_Input>;
  _set?: InputMaybe<AdminRole_Set_Input>;
  where: AdminRole_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_AdminRole_By_PkArgs = {
  _inc?: InputMaybe<AdminRole_Inc_Input>;
  _set?: InputMaybe<AdminRole_Set_Input>;
  pk_columns: AdminRole_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_AdminRole_ManyArgs = {
  updates: Array<AdminRole_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _inc?: InputMaybe<Admin_Inc_Input>;
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Admin_ManyArgs = {
  updates: Array<Admin_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AnalyticsArgs = {
  _inc?: InputMaybe<Analytics_Inc_Input>;
  _set?: InputMaybe<Analytics_Set_Input>;
  where: Analytics_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Analytics_By_PkArgs = {
  _inc?: InputMaybe<Analytics_Inc_Input>;
  _set?: InputMaybe<Analytics_Set_Input>;
  pk_columns: Analytics_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Analytics_ManyArgs = {
  updates: Array<Analytics_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_BlogArgs = {
  _inc?: InputMaybe<Blog_Inc_Input>;
  _set?: InputMaybe<Blog_Set_Input>;
  where: Blog_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Blog_By_PkArgs = {
  _inc?: InputMaybe<Blog_Inc_Input>;
  _set?: InputMaybe<Blog_Set_Input>;
  pk_columns: Blog_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Blog_ManyArgs = {
  updates: Array<Blog_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ComponentArgs = {
  _inc?: InputMaybe<Component_Inc_Input>;
  _set?: InputMaybe<Component_Set_Input>;
  where: Component_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Component_By_PkArgs = {
  _inc?: InputMaybe<Component_Inc_Input>;
  _set?: InputMaybe<Component_Set_Input>;
  pk_columns: Component_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Component_ManyArgs = {
  updates: Array<Component_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ComponentsOnPagesArgs = {
  _append?: InputMaybe<ComponentsOnPages_Append_Input>;
  _delete_at_path?: InputMaybe<ComponentsOnPages_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<ComponentsOnPages_Delete_Elem_Input>;
  _delete_key?: InputMaybe<ComponentsOnPages_Delete_Key_Input>;
  _inc?: InputMaybe<ComponentsOnPages_Inc_Input>;
  _prepend?: InputMaybe<ComponentsOnPages_Prepend_Input>;
  _set?: InputMaybe<ComponentsOnPages_Set_Input>;
  where: ComponentsOnPages_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ComponentsOnPages_By_PkArgs = {
  _append?: InputMaybe<ComponentsOnPages_Append_Input>;
  _delete_at_path?: InputMaybe<ComponentsOnPages_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<ComponentsOnPages_Delete_Elem_Input>;
  _delete_key?: InputMaybe<ComponentsOnPages_Delete_Key_Input>;
  _inc?: InputMaybe<ComponentsOnPages_Inc_Input>;
  _prepend?: InputMaybe<ComponentsOnPages_Prepend_Input>;
  _set?: InputMaybe<ComponentsOnPages_Set_Input>;
  pk_columns: ComponentsOnPages_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ComponentsOnPages_ManyArgs = {
  updates: Array<ComponentsOnPages_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ComponentsOnThemesArgs = {
  _inc?: InputMaybe<ComponentsOnThemes_Inc_Input>;
  _set?: InputMaybe<ComponentsOnThemes_Set_Input>;
  where: ComponentsOnThemes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ComponentsOnThemes_By_PkArgs = {
  _inc?: InputMaybe<ComponentsOnThemes_Inc_Input>;
  _set?: InputMaybe<ComponentsOnThemes_Set_Input>;
  pk_columns: ComponentsOnThemes_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ComponentsOnThemes_ManyArgs = {
  updates: Array<ComponentsOnThemes_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ContactMessageArgs = {
  _inc?: InputMaybe<ContactMessage_Inc_Input>;
  _set?: InputMaybe<ContactMessage_Set_Input>;
  where: ContactMessage_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ContactMessage_By_PkArgs = {
  _inc?: InputMaybe<ContactMessage_Inc_Input>;
  _set?: InputMaybe<ContactMessage_Set_Input>;
  pk_columns: ContactMessage_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ContactMessage_ManyArgs = {
  updates: Array<ContactMessage_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ContactRequestArgs = {
  _inc?: InputMaybe<ContactRequest_Inc_Input>;
  _set?: InputMaybe<ContactRequest_Set_Input>;
  where: ContactRequest_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ContactRequest_By_PkArgs = {
  _inc?: InputMaybe<ContactRequest_Inc_Input>;
  _set?: InputMaybe<ContactRequest_Set_Input>;
  pk_columns: ContactRequest_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ContactRequest_ManyArgs = {
  updates: Array<ContactRequest_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ContentTypeArgs = {
  _inc?: InputMaybe<ContentType_Inc_Input>;
  _set?: InputMaybe<ContentType_Set_Input>;
  where: ContentType_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ContentType_By_PkArgs = {
  _inc?: InputMaybe<ContentType_Inc_Input>;
  _set?: InputMaybe<ContentType_Set_Input>;
  pk_columns: ContentType_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ContentType_ManyArgs = {
  updates: Array<ContentType_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ContentTypesOnProjectsArgs = {
  _inc?: InputMaybe<ContentTypesOnProjects_Inc_Input>;
  _set?: InputMaybe<ContentTypesOnProjects_Set_Input>;
  where: ContentTypesOnProjects_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ContentTypesOnProjects_By_PkArgs = {
  _inc?: InputMaybe<ContentTypesOnProjects_Inc_Input>;
  _set?: InputMaybe<ContentTypesOnProjects_Set_Input>;
  pk_columns: ContentTypesOnProjects_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ContentTypesOnProjects_ManyArgs = {
  updates: Array<ContentTypesOnProjects_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_DomainRegistrationArgs = {
  _inc?: InputMaybe<DomainRegistration_Inc_Input>;
  _set?: InputMaybe<DomainRegistration_Set_Input>;
  where: DomainRegistration_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_DomainRegistration_By_PkArgs = {
  _inc?: InputMaybe<DomainRegistration_Inc_Input>;
  _set?: InputMaybe<DomainRegistration_Set_Input>;
  pk_columns: DomainRegistration_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_DomainRegistration_ManyArgs = {
  updates: Array<DomainRegistration_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_DomainRegistrationsOnProjectsArgs = {
  _inc?: InputMaybe<DomainRegistrationsOnProjects_Inc_Input>;
  _set?: InputMaybe<DomainRegistrationsOnProjects_Set_Input>;
  where: DomainRegistrationsOnProjects_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_DomainRegistrationsOnProjects_ManyArgs = {
  updates: Array<DomainRegistrationsOnProjects_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_DonationArgs = {
  _inc?: InputMaybe<Donation_Inc_Input>;
  _set?: InputMaybe<Donation_Set_Input>;
  where: Donation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Donation_By_PkArgs = {
  _inc?: InputMaybe<Donation_Inc_Input>;
  _set?: InputMaybe<Donation_Set_Input>;
  pk_columns: Donation_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Donation_ManyArgs = {
  updates: Array<Donation_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_FaqArgs = {
  _inc?: InputMaybe<Faq_Inc_Input>;
  _set?: InputMaybe<Faq_Set_Input>;
  where: Faq_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Faq_By_PkArgs = {
  _inc?: InputMaybe<Faq_Inc_Input>;
  _set?: InputMaybe<Faq_Set_Input>;
  pk_columns: Faq_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Faq_ManyArgs = {
  updates: Array<Faq_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_LegalContentArgs = {
  _inc?: InputMaybe<LegalContent_Inc_Input>;
  _set?: InputMaybe<LegalContent_Set_Input>;
  where: LegalContent_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_LegalContent_By_PkArgs = {
  _inc?: InputMaybe<LegalContent_Inc_Input>;
  _set?: InputMaybe<LegalContent_Set_Input>;
  pk_columns: LegalContent_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LegalContent_ManyArgs = {
  updates: Array<LegalContent_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_MediaArgs = {
  _inc?: InputMaybe<Media_Inc_Input>;
  _set?: InputMaybe<Media_Set_Input>;
  where: Media_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Media_By_PkArgs = {
  _inc?: InputMaybe<Media_Inc_Input>;
  _set?: InputMaybe<Media_Set_Input>;
  pk_columns: Media_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Media_ManyArgs = {
  updates: Array<Media_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_MenuArgs = {
  _inc?: InputMaybe<Menu_Inc_Input>;
  _set?: InputMaybe<Menu_Set_Input>;
  where: Menu_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Menu_By_PkArgs = {
  _inc?: InputMaybe<Menu_Inc_Input>;
  _set?: InputMaybe<Menu_Set_Input>;
  pk_columns: Menu_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Menu_ManyArgs = {
  updates: Array<Menu_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_NotificationArgs = {
  _inc?: InputMaybe<Notification_Inc_Input>;
  _set?: InputMaybe<Notification_Set_Input>;
  where: Notification_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_NotificationTemplateArgs = {
  _inc?: InputMaybe<NotificationTemplate_Inc_Input>;
  _set?: InputMaybe<NotificationTemplate_Set_Input>;
  where: NotificationTemplate_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_NotificationTemplateUserArgs = {
  _inc?: InputMaybe<NotificationTemplateUser_Inc_Input>;
  _set?: InputMaybe<NotificationTemplateUser_Set_Input>;
  where: NotificationTemplateUser_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_NotificationTemplateUser_By_PkArgs = {
  _inc?: InputMaybe<NotificationTemplateUser_Inc_Input>;
  _set?: InputMaybe<NotificationTemplateUser_Set_Input>;
  pk_columns: NotificationTemplateUser_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_NotificationTemplateUser_ManyArgs = {
  updates: Array<NotificationTemplateUser_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_NotificationTemplate_By_PkArgs = {
  _inc?: InputMaybe<NotificationTemplate_Inc_Input>;
  _set?: InputMaybe<NotificationTemplate_Set_Input>;
  pk_columns: NotificationTemplate_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_NotificationTemplate_ManyArgs = {
  updates: Array<NotificationTemplate_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Notification_By_PkArgs = {
  _inc?: InputMaybe<Notification_Inc_Input>;
  _set?: InputMaybe<Notification_Set_Input>;
  pk_columns: Notification_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Notification_ManyArgs = {
  updates: Array<Notification_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_OrganizationArgs = {
  _inc?: InputMaybe<Organization_Inc_Input>;
  _set?: InputMaybe<Organization_Set_Input>;
  where: Organization_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Organization_By_PkArgs = {
  _inc?: InputMaybe<Organization_Inc_Input>;
  _set?: InputMaybe<Organization_Set_Input>;
  pk_columns: Organization_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Organization_ManyArgs = {
  updates: Array<Organization_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PageArgs = {
  _inc?: InputMaybe<Page_Inc_Input>;
  _set?: InputMaybe<Page_Set_Input>;
  where: Page_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Page_By_PkArgs = {
  _inc?: InputMaybe<Page_Inc_Input>;
  _set?: InputMaybe<Page_Set_Input>;
  pk_columns: Page_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Page_ManyArgs = {
  updates: Array<Page_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PaymentArgs = {
  _inc?: InputMaybe<Payment_Inc_Input>;
  _set?: InputMaybe<Payment_Set_Input>;
  where: Payment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Payment_By_PkArgs = {
  _inc?: InputMaybe<Payment_Inc_Input>;
  _set?: InputMaybe<Payment_Set_Input>;
  pk_columns: Payment_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Payment_ManyArgs = {
  updates: Array<Payment_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PermissionArgs = {
  _inc?: InputMaybe<Permission_Inc_Input>;
  _set?: InputMaybe<Permission_Set_Input>;
  where: Permission_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Permission_By_PkArgs = {
  _inc?: InputMaybe<Permission_Inc_Input>;
  _set?: InputMaybe<Permission_Set_Input>;
  pk_columns: Permission_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Permission_ManyArgs = {
  updates: Array<Permission_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PermissionsOnRolesArgs = {
  _inc?: InputMaybe<PermissionsOnRoles_Inc_Input>;
  _set?: InputMaybe<PermissionsOnRoles_Set_Input>;
  where: PermissionsOnRoles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_PermissionsOnRoles_By_PkArgs = {
  _inc?: InputMaybe<PermissionsOnRoles_Inc_Input>;
  _set?: InputMaybe<PermissionsOnRoles_Set_Input>;
  pk_columns: PermissionsOnRoles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PermissionsOnRoles_ManyArgs = {
  updates: Array<PermissionsOnRoles_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PlanArgs = {
  _inc?: InputMaybe<Plan_Inc_Input>;
  _set?: InputMaybe<Plan_Set_Input>;
  where: Plan_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_PlanFeatureArgs = {
  _append?: InputMaybe<PlanFeature_Append_Input>;
  _delete_at_path?: InputMaybe<PlanFeature_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<PlanFeature_Delete_Elem_Input>;
  _delete_key?: InputMaybe<PlanFeature_Delete_Key_Input>;
  _inc?: InputMaybe<PlanFeature_Inc_Input>;
  _prepend?: InputMaybe<PlanFeature_Prepend_Input>;
  _set?: InputMaybe<PlanFeature_Set_Input>;
  where: PlanFeature_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_PlanFeatureLimitationArgs = {
  _append?: InputMaybe<PlanFeatureLimitation_Append_Input>;
  _delete_at_path?: InputMaybe<PlanFeatureLimitation_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<PlanFeatureLimitation_Delete_Elem_Input>;
  _delete_key?: InputMaybe<PlanFeatureLimitation_Delete_Key_Input>;
  _inc?: InputMaybe<PlanFeatureLimitation_Inc_Input>;
  _prepend?: InputMaybe<PlanFeatureLimitation_Prepend_Input>;
  _set?: InputMaybe<PlanFeatureLimitation_Set_Input>;
  where: PlanFeatureLimitation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_PlanFeatureLimitation_By_PkArgs = {
  _append?: InputMaybe<PlanFeatureLimitation_Append_Input>;
  _delete_at_path?: InputMaybe<PlanFeatureLimitation_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<PlanFeatureLimitation_Delete_Elem_Input>;
  _delete_key?: InputMaybe<PlanFeatureLimitation_Delete_Key_Input>;
  _inc?: InputMaybe<PlanFeatureLimitation_Inc_Input>;
  _prepend?: InputMaybe<PlanFeatureLimitation_Prepend_Input>;
  _set?: InputMaybe<PlanFeatureLimitation_Set_Input>;
  pk_columns: PlanFeatureLimitation_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PlanFeatureLimitation_ManyArgs = {
  updates: Array<PlanFeatureLimitation_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PlanFeature_By_PkArgs = {
  _append?: InputMaybe<PlanFeature_Append_Input>;
  _delete_at_path?: InputMaybe<PlanFeature_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<PlanFeature_Delete_Elem_Input>;
  _delete_key?: InputMaybe<PlanFeature_Delete_Key_Input>;
  _inc?: InputMaybe<PlanFeature_Inc_Input>;
  _prepend?: InputMaybe<PlanFeature_Prepend_Input>;
  _set?: InputMaybe<PlanFeature_Set_Input>;
  pk_columns: PlanFeature_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PlanFeature_ManyArgs = {
  updates: Array<PlanFeature_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Plan_By_PkArgs = {
  _inc?: InputMaybe<Plan_Inc_Input>;
  _set?: InputMaybe<Plan_Set_Input>;
  pk_columns: Plan_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Plan_ManyArgs = {
  updates: Array<Plan_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PluginArgs = {
  _inc?: InputMaybe<Plugin_Inc_Input>;
  _set?: InputMaybe<Plugin_Set_Input>;
  where: Plugin_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Plugin_By_PkArgs = {
  _inc?: InputMaybe<Plugin_Inc_Input>;
  _set?: InputMaybe<Plugin_Set_Input>;
  pk_columns: Plugin_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Plugin_ManyArgs = {
  updates: Array<Plugin_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PostArgs = {
  _inc?: InputMaybe<Post_Inc_Input>;
  _set?: InputMaybe<Post_Set_Input>;
  where: Post_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Post_By_PkArgs = {
  _inc?: InputMaybe<Post_Inc_Input>;
  _set?: InputMaybe<Post_Set_Input>;
  pk_columns: Post_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Post_ManyArgs = {
  updates: Array<Post_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ProjectArgs = {
  _append?: InputMaybe<Project_Append_Input>;
  _delete_at_path?: InputMaybe<Project_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Project_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Project_Delete_Key_Input>;
  _inc?: InputMaybe<Project_Inc_Input>;
  _prepend?: InputMaybe<Project_Prepend_Input>;
  _set?: InputMaybe<Project_Set_Input>;
  where: Project_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ProjectAudienceArgs = {
  _inc?: InputMaybe<ProjectAudience_Inc_Input>;
  _set?: InputMaybe<ProjectAudience_Set_Input>;
  where: ProjectAudience_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ProjectAudience_By_PkArgs = {
  _inc?: InputMaybe<ProjectAudience_Inc_Input>;
  _set?: InputMaybe<ProjectAudience_Set_Input>;
  pk_columns: ProjectAudience_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ProjectAudience_ManyArgs = {
  updates: Array<ProjectAudience_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ProjectSettingsArgs = {
  _append?: InputMaybe<ProjectSettings_Append_Input>;
  _delete_at_path?: InputMaybe<ProjectSettings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<ProjectSettings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<ProjectSettings_Delete_Key_Input>;
  _inc?: InputMaybe<ProjectSettings_Inc_Input>;
  _prepend?: InputMaybe<ProjectSettings_Prepend_Input>;
  _set?: InputMaybe<ProjectSettings_Set_Input>;
  where: ProjectSettings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ProjectSettings_By_PkArgs = {
  _append?: InputMaybe<ProjectSettings_Append_Input>;
  _delete_at_path?: InputMaybe<ProjectSettings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<ProjectSettings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<ProjectSettings_Delete_Key_Input>;
  _inc?: InputMaybe<ProjectSettings_Inc_Input>;
  _prepend?: InputMaybe<ProjectSettings_Prepend_Input>;
  _set?: InputMaybe<ProjectSettings_Set_Input>;
  pk_columns: ProjectSettings_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ProjectSettings_ManyArgs = {
  updates: Array<ProjectSettings_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Project_By_PkArgs = {
  _append?: InputMaybe<Project_Append_Input>;
  _delete_at_path?: InputMaybe<Project_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Project_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Project_Delete_Key_Input>;
  _inc?: InputMaybe<Project_Inc_Input>;
  _prepend?: InputMaybe<Project_Prepend_Input>;
  _set?: InputMaybe<Project_Set_Input>;
  pk_columns: Project_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Project_ManyArgs = {
  updates: Array<Project_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _inc?: InputMaybe<Role_Inc_Input>;
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _inc?: InputMaybe<Role_Inc_Input>;
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Role_ManyArgs = {
  updates: Array<Role_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_SubscriptionArgs = {
  _inc?: InputMaybe<Subscription_Inc_Input>;
  _set?: InputMaybe<Subscription_Set_Input>;
  where: Subscription_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Subscription_By_PkArgs = {
  _inc?: InputMaybe<Subscription_Inc_Input>;
  _set?: InputMaybe<Subscription_Set_Input>;
  pk_columns: Subscription_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Subscription_ManyArgs = {
  updates: Array<Subscription_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ThemeArgs = {
  _inc?: InputMaybe<Theme_Inc_Input>;
  _set?: InputMaybe<Theme_Set_Input>;
  where: Theme_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Theme_By_PkArgs = {
  _inc?: InputMaybe<Theme_Inc_Input>;
  _set?: InputMaybe<Theme_Set_Input>;
  pk_columns: Theme_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Theme_ManyArgs = {
  updates: Array<Theme_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_TicketArgs = {
  _inc?: InputMaybe<Ticket_Inc_Input>;
  _set?: InputMaybe<Ticket_Set_Input>;
  where: Ticket_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ticket_By_PkArgs = {
  _inc?: InputMaybe<Ticket_Inc_Input>;
  _set?: InputMaybe<Ticket_Set_Input>;
  pk_columns: Ticket_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ticket_ManyArgs = {
  updates: Array<Ticket_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UserPreferencesArgs = {
  _set?: InputMaybe<UserPreferences_Set_Input>;
  where: UserPreferences_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UserPreferences_ManyArgs = {
  updates: Array<UserPreferences_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_VisualTypeArgs = {
  _inc?: InputMaybe<VisualType_Inc_Input>;
  _set?: InputMaybe<VisualType_Set_Input>;
  where: VisualType_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_VisualType_By_PkArgs = {
  _inc?: InputMaybe<VisualType_Inc_Input>;
  _set?: InputMaybe<VisualType_Set_Input>;
  pk_columns: VisualType_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_VisualType_ManyArgs = {
  updates: Array<VisualType_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_VisualTypesOnProjectsArgs = {
  _inc?: InputMaybe<VisualTypesOnProjects_Inc_Input>;
  _set?: InputMaybe<VisualTypesOnProjects_Set_Input>;
  where: VisualTypesOnProjects_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_VisualTypesOnProjects_By_PkArgs = {
  _inc?: InputMaybe<VisualTypesOnProjects_Inc_Input>;
  _set?: InputMaybe<VisualTypesOnProjects_Set_Input>;
  pk_columns: VisualTypesOnProjects_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_VisualTypesOnProjects_ManyArgs = {
  updates: Array<VisualTypesOnProjects_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate__Prisma_MigrationsArgs = {
  _inc?: InputMaybe<_Prisma_Migrations_Inc_Input>;
  _set?: InputMaybe<_Prisma_Migrations_Set_Input>;
  where: _Prisma_Migrations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate__Prisma_Migrations_By_PkArgs = {
  _inc?: InputMaybe<_Prisma_Migrations_Inc_Input>;
  _set?: InputMaybe<_Prisma_Migrations_Set_Input>;
  pk_columns: _Prisma_Migrations_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate__Prisma_Migrations_ManyArgs = {
  updates: Array<_Prisma_Migrations_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Admin" */
  Admin: Array<Admin>;
  /** fetch data from the table: "AdminPermission" */
  AdminPermission: Array<AdminPermission>;
  /** fetch aggregated fields from the table: "AdminPermission" */
  AdminPermission_aggregate: AdminPermission_Aggregate;
  /** fetch data from the table: "AdminPermission" using primary key columns */
  AdminPermission_by_pk?: Maybe<AdminPermission>;
  /** An array relationship */
  AdminPermissionsOnRoles: Array<AdminPermissionsOnRoles>;
  /** An aggregate relationship */
  AdminPermissionsOnRoles_aggregate: AdminPermissionsOnRoles_Aggregate;
  /** fetch data from the table: "AdminPermissionsOnRoles" using primary key columns */
  AdminPermissionsOnRoles_by_pk?: Maybe<AdminPermissionsOnRoles>;
  /** fetch data from the table: "AdminRole" */
  AdminRole: Array<AdminRole>;
  /** fetch aggregated fields from the table: "AdminRole" */
  AdminRole_aggregate: AdminRole_Aggregate;
  /** fetch data from the table: "AdminRole" using primary key columns */
  AdminRole_by_pk?: Maybe<AdminRole>;
  /** fetch aggregated fields from the table: "Admin" */
  Admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "Admin" using primary key columns */
  Admin_by_pk?: Maybe<Admin>;
  /** An array relationship */
  Analytics: Array<Analytics>;
  /** An aggregate relationship */
  Analytics_aggregate: Analytics_Aggregate;
  /** fetch data from the table: "Analytics" using primary key columns */
  Analytics_by_pk?: Maybe<Analytics>;
  /** fetch data from the table: "Blog" */
  Blog: Array<Blog>;
  /** fetch aggregated fields from the table: "Blog" */
  Blog_aggregate: Blog_Aggregate;
  /** fetch data from the table: "Blog" using primary key columns */
  Blog_by_pk?: Maybe<Blog>;
  /** fetch data from the table: "Component" */
  Component: Array<Component>;
  /** fetch aggregated fields from the table: "Component" */
  Component_aggregate: Component_Aggregate;
  /** fetch data from the table: "Component" using primary key columns */
  Component_by_pk?: Maybe<Component>;
  /** An array relationship */
  ComponentsOnPages: Array<ComponentsOnPages>;
  /** An aggregate relationship */
  ComponentsOnPages_aggregate: ComponentsOnPages_Aggregate;
  /** fetch data from the table: "ComponentsOnPages" using primary key columns */
  ComponentsOnPages_by_pk?: Maybe<ComponentsOnPages>;
  /** An array relationship */
  ComponentsOnThemes: Array<ComponentsOnThemes>;
  /** An aggregate relationship */
  ComponentsOnThemes_aggregate: ComponentsOnThemes_Aggregate;
  /** fetch data from the table: "ComponentsOnThemes" using primary key columns */
  ComponentsOnThemes_by_pk?: Maybe<ComponentsOnThemes>;
  /** fetch data from the table: "ContactMessage" */
  ContactMessage: Array<ContactMessage>;
  /** fetch aggregated fields from the table: "ContactMessage" */
  ContactMessage_aggregate: ContactMessage_Aggregate;
  /** fetch data from the table: "ContactMessage" using primary key columns */
  ContactMessage_by_pk?: Maybe<ContactMessage>;
  /** fetch data from the table: "ContactRequest" */
  ContactRequest: Array<ContactRequest>;
  /** fetch aggregated fields from the table: "ContactRequest" */
  ContactRequest_aggregate: ContactRequest_Aggregate;
  /** fetch data from the table: "ContactRequest" using primary key columns */
  ContactRequest_by_pk?: Maybe<ContactRequest>;
  /** fetch data from the table: "ContentType" */
  ContentType: Array<ContentType>;
  /** fetch aggregated fields from the table: "ContentType" */
  ContentType_aggregate: ContentType_Aggregate;
  /** fetch data from the table: "ContentType" using primary key columns */
  ContentType_by_pk?: Maybe<ContentType>;
  /** An array relationship */
  ContentTypesOnProjects: Array<ContentTypesOnProjects>;
  /** An aggregate relationship */
  ContentTypesOnProjects_aggregate: ContentTypesOnProjects_Aggregate;
  /** fetch data from the table: "ContentTypesOnProjects" using primary key columns */
  ContentTypesOnProjects_by_pk?: Maybe<ContentTypesOnProjects>;
  /** fetch data from the table: "DomainRegistration" */
  DomainRegistration: Array<DomainRegistration>;
  /** fetch aggregated fields from the table: "DomainRegistration" */
  DomainRegistration_aggregate: DomainRegistration_Aggregate;
  /** fetch data from the table: "DomainRegistration" using primary key columns */
  DomainRegistration_by_pk?: Maybe<DomainRegistration>;
  /** An array relationship */
  DomainRegistrationsOnProjects: Array<DomainRegistrationsOnProjects>;
  /** An aggregate relationship */
  DomainRegistrationsOnProjects_aggregate: DomainRegistrationsOnProjects_Aggregate;
  /** fetch data from the table: "Donation" */
  Donation: Array<Donation>;
  /** fetch aggregated fields from the table: "Donation" */
  Donation_aggregate: Donation_Aggregate;
  /** fetch data from the table: "Donation" using primary key columns */
  Donation_by_pk?: Maybe<Donation>;
  /** fetch data from the table: "FAQ" */
  FAQ: Array<Faq>;
  /** fetch aggregated fields from the table: "FAQ" */
  FAQ_aggregate: Faq_Aggregate;
  /** fetch data from the table: "FAQ" using primary key columns */
  FAQ_by_pk?: Maybe<Faq>;
  /** fetch data from the table: "LegalContent" */
  LegalContent: Array<LegalContent>;
  /** fetch aggregated fields from the table: "LegalContent" */
  LegalContent_aggregate: LegalContent_Aggregate;
  /** fetch data from the table: "LegalContent" using primary key columns */
  LegalContent_by_pk?: Maybe<LegalContent>;
  /** An array relationship */
  Media: Array<Media>;
  /** An aggregate relationship */
  Media_aggregate: Media_Aggregate;
  /** fetch data from the table: "Media" using primary key columns */
  Media_by_pk?: Maybe<Media>;
  /** fetch data from the table: "Menu" */
  Menu: Array<Menu>;
  /** fetch aggregated fields from the table: "Menu" */
  Menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "Menu" using primary key columns */
  Menu_by_pk?: Maybe<Menu>;
  /** fetch data from the table: "Notification" */
  Notification: Array<Notification>;
  /** fetch data from the table: "NotificationTemplate" */
  NotificationTemplate: Array<NotificationTemplate>;
  /** fetch data from the table: "NotificationTemplateUser" */
  NotificationTemplateUser: Array<NotificationTemplateUser>;
  /** fetch aggregated fields from the table: "NotificationTemplateUser" */
  NotificationTemplateUser_aggregate: NotificationTemplateUser_Aggregate;
  /** fetch data from the table: "NotificationTemplateUser" using primary key columns */
  NotificationTemplateUser_by_pk?: Maybe<NotificationTemplateUser>;
  /** fetch aggregated fields from the table: "NotificationTemplate" */
  NotificationTemplate_aggregate: NotificationTemplate_Aggregate;
  /** fetch data from the table: "NotificationTemplate" using primary key columns */
  NotificationTemplate_by_pk?: Maybe<NotificationTemplate>;
  /** fetch aggregated fields from the table: "Notification" */
  Notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "Notification" using primary key columns */
  Notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table: "Organization" */
  Organization: Array<Organization>;
  /** fetch aggregated fields from the table: "Organization" */
  Organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "Organization" using primary key columns */
  Organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "Page" */
  Page: Array<Page>;
  /** fetch aggregated fields from the table: "Page" */
  Page_aggregate: Page_Aggregate;
  /** fetch data from the table: "Page" using primary key columns */
  Page_by_pk?: Maybe<Page>;
  /** fetch data from the table: "Payment" */
  Payment: Array<Payment>;
  /** fetch aggregated fields from the table: "Payment" */
  Payment_aggregate: Payment_Aggregate;
  /** fetch data from the table: "Payment" using primary key columns */
  Payment_by_pk?: Maybe<Payment>;
  /** fetch data from the table: "Permission" */
  Permission: Array<Permission>;
  /** fetch aggregated fields from the table: "Permission" */
  Permission_aggregate: Permission_Aggregate;
  /** fetch data from the table: "Permission" using primary key columns */
  Permission_by_pk?: Maybe<Permission>;
  /** An array relationship */
  PermissionsOnRoles: Array<PermissionsOnRoles>;
  /** An aggregate relationship */
  PermissionsOnRoles_aggregate: PermissionsOnRoles_Aggregate;
  /** fetch data from the table: "PermissionsOnRoles" using primary key columns */
  PermissionsOnRoles_by_pk?: Maybe<PermissionsOnRoles>;
  /** fetch data from the table: "Plan" */
  Plan: Array<Plan>;
  /** fetch data from the table: "PlanFeature" */
  PlanFeature: Array<PlanFeature>;
  /** fetch data from the table: "PlanFeatureLimitation" */
  PlanFeatureLimitation: Array<PlanFeatureLimitation>;
  /** fetch aggregated fields from the table: "PlanFeatureLimitation" */
  PlanFeatureLimitation_aggregate: PlanFeatureLimitation_Aggregate;
  /** fetch data from the table: "PlanFeatureLimitation" using primary key columns */
  PlanFeatureLimitation_by_pk?: Maybe<PlanFeatureLimitation>;
  /** fetch aggregated fields from the table: "PlanFeature" */
  PlanFeature_aggregate: PlanFeature_Aggregate;
  /** fetch data from the table: "PlanFeature" using primary key columns */
  PlanFeature_by_pk?: Maybe<PlanFeature>;
  /** fetch aggregated fields from the table: "Plan" */
  Plan_aggregate: Plan_Aggregate;
  /** fetch data from the table: "Plan" using primary key columns */
  Plan_by_pk?: Maybe<Plan>;
  /** fetch data from the table: "Plugin" */
  Plugin: Array<Plugin>;
  /** fetch aggregated fields from the table: "Plugin" */
  Plugin_aggregate: Plugin_Aggregate;
  /** fetch data from the table: "Plugin" using primary key columns */
  Plugin_by_pk?: Maybe<Plugin>;
  /** fetch data from the table: "Post" */
  Post: Array<Post>;
  /** fetch aggregated fields from the table: "Post" */
  Post_aggregate: Post_Aggregate;
  /** fetch data from the table: "Post" using primary key columns */
  Post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "Project" */
  Project: Array<Project>;
  /** fetch data from the table: "ProjectAudience" */
  ProjectAudience: Array<ProjectAudience>;
  /** fetch aggregated fields from the table: "ProjectAudience" */
  ProjectAudience_aggregate: ProjectAudience_Aggregate;
  /** fetch data from the table: "ProjectAudience" using primary key columns */
  ProjectAudience_by_pk?: Maybe<ProjectAudience>;
  /** An array relationship */
  ProjectSettings: Array<ProjectSettings>;
  /** An aggregate relationship */
  ProjectSettings_aggregate: ProjectSettings_Aggregate;
  /** fetch data from the table: "ProjectSettings" using primary key columns */
  ProjectSettings_by_pk?: Maybe<ProjectSettings>;
  /** fetch aggregated fields from the table: "Project" */
  Project_aggregate: Project_Aggregate;
  /** fetch data from the table: "Project" using primary key columns */
  Project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "Subscription" */
  Subscription: Array<Subscription>;
  /** fetch aggregated fields from the table: "Subscription" */
  Subscription_aggregate: Subscription_Aggregate;
  /** fetch data from the table: "Subscription" using primary key columns */
  Subscription_by_pk?: Maybe<Subscription>;
  /** fetch data from the table: "Theme" */
  Theme: Array<Theme>;
  /** fetch aggregated fields from the table: "Theme" */
  Theme_aggregate: Theme_Aggregate;
  /** fetch data from the table: "Theme" using primary key columns */
  Theme_by_pk?: Maybe<Theme>;
  /** fetch data from the table: "Ticket" */
  Ticket: Array<Ticket>;
  /** fetch aggregated fields from the table: "Ticket" */
  Ticket_aggregate: Ticket_Aggregate;
  /** fetch data from the table: "Ticket" using primary key columns */
  Ticket_by_pk?: Maybe<Ticket>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** An array relationship */
  UserPreferences: Array<UserPreferences>;
  /** An aggregate relationship */
  UserPreferences_aggregate: UserPreferences_Aggregate;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table: "VisualType" */
  VisualType: Array<VisualType>;
  /** fetch aggregated fields from the table: "VisualType" */
  VisualType_aggregate: VisualType_Aggregate;
  /** fetch data from the table: "VisualType" using primary key columns */
  VisualType_by_pk?: Maybe<VisualType>;
  /** An array relationship */
  VisualTypesOnProjects: Array<VisualTypesOnProjects>;
  /** An aggregate relationship */
  VisualTypesOnProjects_aggregate: VisualTypesOnProjects_Aggregate;
  /** fetch data from the table: "VisualTypesOnProjects" using primary key columns */
  VisualTypesOnProjects_by_pk?: Maybe<VisualTypesOnProjects>;
  /** fetch data from the table: "_prisma_migrations" */
  _prisma_migrations: Array<_Prisma_Migrations>;
  /** fetch aggregated fields from the table: "_prisma_migrations" */
  _prisma_migrations_aggregate: _Prisma_Migrations_Aggregate;
  /** fetch data from the table: "_prisma_migrations" using primary key columns */
  _prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>;
};

export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

export type Query_RootAdminPermissionArgs = {
  distinct_on?: InputMaybe<Array<AdminPermission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminPermission_Order_By>>;
  where?: InputMaybe<AdminPermission_Bool_Exp>;
};

export type Query_RootAdminPermission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AdminPermission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminPermission_Order_By>>;
  where?: InputMaybe<AdminPermission_Bool_Exp>;
};

export type Query_RootAdminPermission_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootAdminPermissionsOnRolesArgs = {
  distinct_on?: InputMaybe<Array<AdminPermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminPermissionsOnRoles_Order_By>>;
  where?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
};

export type Query_RootAdminPermissionsOnRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AdminPermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminPermissionsOnRoles_Order_By>>;
  where?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
};

export type Query_RootAdminPermissionsOnRoles_By_PkArgs = {
  permissionId: Scalars['Int']['input'];
  roleId: Scalars['Int']['input'];
};

export type Query_RootAdminRoleArgs = {
  distinct_on?: InputMaybe<Array<AdminRole_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminRole_Order_By>>;
  where?: InputMaybe<AdminRole_Bool_Exp>;
};

export type Query_RootAdminRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AdminRole_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminRole_Order_By>>;
  where?: InputMaybe<AdminRole_Bool_Exp>;
};

export type Query_RootAdminRole_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

export type Query_RootAdmin_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootAnalyticsArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Order_By>>;
  where?: InputMaybe<Analytics_Bool_Exp>;
};

export type Query_RootAnalytics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Order_By>>;
  where?: InputMaybe<Analytics_Bool_Exp>;
};

export type Query_RootAnalytics_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootBlogArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};

export type Query_RootBlog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};

export type Query_RootBlog_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootComponentArgs = {
  distinct_on?: InputMaybe<Array<Component_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Component_Order_By>>;
  where?: InputMaybe<Component_Bool_Exp>;
};

export type Query_RootComponent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Component_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Component_Order_By>>;
  where?: InputMaybe<Component_Bool_Exp>;
};

export type Query_RootComponent_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootComponentsOnPagesArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnPages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnPages_Order_By>>;
  where?: InputMaybe<ComponentsOnPages_Bool_Exp>;
};

export type Query_RootComponentsOnPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnPages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnPages_Order_By>>;
  where?: InputMaybe<ComponentsOnPages_Bool_Exp>;
};

export type Query_RootComponentsOnPages_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootComponentsOnThemesArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnThemes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnThemes_Order_By>>;
  where?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
};

export type Query_RootComponentsOnThemes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnThemes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnThemes_Order_By>>;
  where?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
};

export type Query_RootComponentsOnThemes_By_PkArgs = {
  componentId: Scalars['Int']['input'];
  themeId: Scalars['Int']['input'];
};

export type Query_RootContactMessageArgs = {
  distinct_on?: InputMaybe<Array<ContactMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContactMessage_Order_By>>;
  where?: InputMaybe<ContactMessage_Bool_Exp>;
};

export type Query_RootContactMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContactMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContactMessage_Order_By>>;
  where?: InputMaybe<ContactMessage_Bool_Exp>;
};

export type Query_RootContactMessage_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootContactRequestArgs = {
  distinct_on?: InputMaybe<Array<ContactRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContactRequest_Order_By>>;
  where?: InputMaybe<ContactRequest_Bool_Exp>;
};

export type Query_RootContactRequest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContactRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContactRequest_Order_By>>;
  where?: InputMaybe<ContactRequest_Bool_Exp>;
};

export type Query_RootContactRequest_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootContentTypeArgs = {
  distinct_on?: InputMaybe<Array<ContentType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentType_Order_By>>;
  where?: InputMaybe<ContentType_Bool_Exp>;
};

export type Query_RootContentType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContentType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentType_Order_By>>;
  where?: InputMaybe<ContentType_Bool_Exp>;
};

export type Query_RootContentType_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootContentTypesOnProjectsArgs = {
  distinct_on?: InputMaybe<Array<ContentTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentTypesOnProjects_Order_By>>;
  where?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
};

export type Query_RootContentTypesOnProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContentTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentTypesOnProjects_Order_By>>;
  where?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
};

export type Query_RootContentTypesOnProjects_By_PkArgs = {
  contentTypeId: Scalars['Int']['input'];
  projectId: Scalars['uuid']['input'];
};

export type Query_RootDomainRegistrationArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistration_Order_By>>;
  where?: InputMaybe<DomainRegistration_Bool_Exp>;
};

export type Query_RootDomainRegistration_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistration_Order_By>>;
  where?: InputMaybe<DomainRegistration_Bool_Exp>;
};

export type Query_RootDomainRegistration_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootDomainRegistrationsOnProjectsArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistrationsOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistrationsOnProjects_Order_By>>;
  where?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
};

export type Query_RootDomainRegistrationsOnProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistrationsOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistrationsOnProjects_Order_By>>;
  where?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
};

export type Query_RootDonationArgs = {
  distinct_on?: InputMaybe<Array<Donation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Donation_Order_By>>;
  where?: InputMaybe<Donation_Bool_Exp>;
};

export type Query_RootDonation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Donation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Donation_Order_By>>;
  where?: InputMaybe<Donation_Bool_Exp>;
};

export type Query_RootDonation_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootFaqArgs = {
  distinct_on?: InputMaybe<Array<Faq_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Faq_Order_By>>;
  where?: InputMaybe<Faq_Bool_Exp>;
};

export type Query_RootFaq_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Faq_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Faq_Order_By>>;
  where?: InputMaybe<Faq_Bool_Exp>;
};

export type Query_RootFaq_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootLegalContentArgs = {
  distinct_on?: InputMaybe<Array<LegalContent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LegalContent_Order_By>>;
  where?: InputMaybe<LegalContent_Bool_Exp>;
};

export type Query_RootLegalContent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LegalContent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LegalContent_Order_By>>;
  where?: InputMaybe<LegalContent_Bool_Exp>;
};

export type Query_RootLegalContent_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootMediaArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};

export type Query_RootMedia_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};

export type Query_RootMedia_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

export type Query_RootMenu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

export type Query_RootMenu_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootNotificationArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Query_RootNotificationTemplateArgs = {
  distinct_on?: InputMaybe<Array<NotificationTemplate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTemplate_Order_By>>;
  where?: InputMaybe<NotificationTemplate_Bool_Exp>;
};

export type Query_RootNotificationTemplateUserArgs = {
  distinct_on?: InputMaybe<Array<NotificationTemplateUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTemplateUser_Order_By>>;
  where?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
};

export type Query_RootNotificationTemplateUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationTemplateUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTemplateUser_Order_By>>;
  where?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
};

export type Query_RootNotificationTemplateUser_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootNotificationTemplate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationTemplate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTemplate_Order_By>>;
  where?: InputMaybe<NotificationTemplate_Bool_Exp>;
};

export type Query_RootNotificationTemplate_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Query_RootNotification_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

export type Query_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

export type Query_RootOrganization_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootPageArgs = {
  distinct_on?: InputMaybe<Array<Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Order_By>>;
  where?: InputMaybe<Page_Bool_Exp>;
};

export type Query_RootPage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Order_By>>;
  where?: InputMaybe<Page_Bool_Exp>;
};

export type Query_RootPage_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootPaymentArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

export type Query_RootPayment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

export type Query_RootPayment_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootPermissionArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};

export type Query_RootPermission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};

export type Query_RootPermission_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootPermissionsOnRolesArgs = {
  distinct_on?: InputMaybe<Array<PermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PermissionsOnRoles_Order_By>>;
  where?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
};

export type Query_RootPermissionsOnRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PermissionsOnRoles_Order_By>>;
  where?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
};

export type Query_RootPermissionsOnRoles_By_PkArgs = {
  permissionId: Scalars['Int']['input'];
  roleId: Scalars['Int']['input'];
};

export type Query_RootPlanArgs = {
  distinct_on?: InputMaybe<Array<Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Order_By>>;
  where?: InputMaybe<Plan_Bool_Exp>;
};

export type Query_RootPlanFeatureArgs = {
  distinct_on?: InputMaybe<Array<PlanFeature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PlanFeature_Order_By>>;
  where?: InputMaybe<PlanFeature_Bool_Exp>;
};

export type Query_RootPlanFeatureLimitationArgs = {
  distinct_on?: InputMaybe<Array<PlanFeatureLimitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PlanFeatureLimitation_Order_By>>;
  where?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
};

export type Query_RootPlanFeatureLimitation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PlanFeatureLimitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PlanFeatureLimitation_Order_By>>;
  where?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
};

export type Query_RootPlanFeatureLimitation_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootPlanFeature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PlanFeature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PlanFeature_Order_By>>;
  where?: InputMaybe<PlanFeature_Bool_Exp>;
};

export type Query_RootPlanFeature_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootPlan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Order_By>>;
  where?: InputMaybe<Plan_Bool_Exp>;
};

export type Query_RootPlan_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootPluginArgs = {
  distinct_on?: InputMaybe<Array<Plugin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plugin_Order_By>>;
  where?: InputMaybe<Plugin_Bool_Exp>;
};

export type Query_RootPlugin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plugin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plugin_Order_By>>;
  where?: InputMaybe<Plugin_Bool_Exp>;
};

export type Query_RootPlugin_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootPostArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

export type Query_RootPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

export type Query_RootPost_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Query_RootProjectAudienceArgs = {
  distinct_on?: InputMaybe<Array<ProjectAudience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProjectAudience_Order_By>>;
  where?: InputMaybe<ProjectAudience_Bool_Exp>;
};

export type Query_RootProjectAudience_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectAudience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProjectAudience_Order_By>>;
  where?: InputMaybe<ProjectAudience_Bool_Exp>;
};

export type Query_RootProjectAudience_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootProjectSettingsArgs = {
  distinct_on?: InputMaybe<Array<ProjectSettings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProjectSettings_Order_By>>;
  where?: InputMaybe<ProjectSettings_Bool_Exp>;
};

export type Query_RootProjectSettings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectSettings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProjectSettings_Order_By>>;
  where?: InputMaybe<ProjectSettings_Bool_Exp>;
};

export type Query_RootProjectSettings_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Query_RootProject_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};

export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};

export type Query_RootRole_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootSubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Order_By>>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};

export type Query_RootSubscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Order_By>>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};

export type Query_RootSubscription_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootThemeArgs = {
  distinct_on?: InputMaybe<Array<Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Theme_Order_By>>;
  where?: InputMaybe<Theme_Bool_Exp>;
};

export type Query_RootTheme_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Theme_Order_By>>;
  where?: InputMaybe<Theme_Bool_Exp>;
};

export type Query_RootTheme_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootTicketArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Order_By>>;
  where?: InputMaybe<Ticket_Bool_Exp>;
};

export type Query_RootTicket_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Order_By>>;
  where?: InputMaybe<Ticket_Bool_Exp>;
};

export type Query_RootTicket_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUserPreferencesArgs = {
  distinct_on?: InputMaybe<Array<UserPreferences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserPreferences_Order_By>>;
  where?: InputMaybe<UserPreferences_Bool_Exp>;
};

export type Query_RootUserPreferences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserPreferences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserPreferences_Order_By>>;
  where?: InputMaybe<UserPreferences_Bool_Exp>;
};

export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootVisualTypeArgs = {
  distinct_on?: InputMaybe<Array<VisualType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VisualType_Order_By>>;
  where?: InputMaybe<VisualType_Bool_Exp>;
};

export type Query_RootVisualType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VisualType_Order_By>>;
  where?: InputMaybe<VisualType_Bool_Exp>;
};

export type Query_RootVisualType_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootVisualTypesOnProjectsArgs = {
  distinct_on?: InputMaybe<Array<VisualTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VisualTypesOnProjects_Order_By>>;
  where?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
};

export type Query_RootVisualTypesOnProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VisualTypesOnProjects_Order_By>>;
  where?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
};

export type Query_RootVisualTypesOnProjects_By_PkArgs = {
  projectId: Scalars['uuid']['input'];
  visualTypeId: Scalars['Int']['input'];
};

export type Query_Root_Prisma_MigrationsArgs = {
  distinct_on?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

export type Query_Root_Prisma_Migrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

export type Query_Root_Prisma_Migrations_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Admin" */
  Admin: Array<Admin>;
  /** fetch data from the table: "AdminPermission" */
  AdminPermission: Array<AdminPermission>;
  /** fetch aggregated fields from the table: "AdminPermission" */
  AdminPermission_aggregate: AdminPermission_Aggregate;
  /** fetch data from the table: "AdminPermission" using primary key columns */
  AdminPermission_by_pk?: Maybe<AdminPermission>;
  /** fetch data from the table in a streaming manner: "AdminPermission" */
  AdminPermission_stream: Array<AdminPermission>;
  /** An array relationship */
  AdminPermissionsOnRoles: Array<AdminPermissionsOnRoles>;
  /** An aggregate relationship */
  AdminPermissionsOnRoles_aggregate: AdminPermissionsOnRoles_Aggregate;
  /** fetch data from the table: "AdminPermissionsOnRoles" using primary key columns */
  AdminPermissionsOnRoles_by_pk?: Maybe<AdminPermissionsOnRoles>;
  /** fetch data from the table in a streaming manner: "AdminPermissionsOnRoles" */
  AdminPermissionsOnRoles_stream: Array<AdminPermissionsOnRoles>;
  /** fetch data from the table: "AdminRole" */
  AdminRole: Array<AdminRole>;
  /** fetch aggregated fields from the table: "AdminRole" */
  AdminRole_aggregate: AdminRole_Aggregate;
  /** fetch data from the table: "AdminRole" using primary key columns */
  AdminRole_by_pk?: Maybe<AdminRole>;
  /** fetch data from the table in a streaming manner: "AdminRole" */
  AdminRole_stream: Array<AdminRole>;
  /** fetch aggregated fields from the table: "Admin" */
  Admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "Admin" using primary key columns */
  Admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table in a streaming manner: "Admin" */
  Admin_stream: Array<Admin>;
  /** An array relationship */
  Analytics: Array<Analytics>;
  /** An aggregate relationship */
  Analytics_aggregate: Analytics_Aggregate;
  /** fetch data from the table: "Analytics" using primary key columns */
  Analytics_by_pk?: Maybe<Analytics>;
  /** fetch data from the table in a streaming manner: "Analytics" */
  Analytics_stream: Array<Analytics>;
  /** fetch data from the table: "Blog" */
  Blog: Array<Blog>;
  /** fetch aggregated fields from the table: "Blog" */
  Blog_aggregate: Blog_Aggregate;
  /** fetch data from the table: "Blog" using primary key columns */
  Blog_by_pk?: Maybe<Blog>;
  /** fetch data from the table in a streaming manner: "Blog" */
  Blog_stream: Array<Blog>;
  /** fetch data from the table: "Component" */
  Component: Array<Component>;
  /** fetch aggregated fields from the table: "Component" */
  Component_aggregate: Component_Aggregate;
  /** fetch data from the table: "Component" using primary key columns */
  Component_by_pk?: Maybe<Component>;
  /** fetch data from the table in a streaming manner: "Component" */
  Component_stream: Array<Component>;
  /** An array relationship */
  ComponentsOnPages: Array<ComponentsOnPages>;
  /** An aggregate relationship */
  ComponentsOnPages_aggregate: ComponentsOnPages_Aggregate;
  /** fetch data from the table: "ComponentsOnPages" using primary key columns */
  ComponentsOnPages_by_pk?: Maybe<ComponentsOnPages>;
  /** fetch data from the table in a streaming manner: "ComponentsOnPages" */
  ComponentsOnPages_stream: Array<ComponentsOnPages>;
  /** An array relationship */
  ComponentsOnThemes: Array<ComponentsOnThemes>;
  /** An aggregate relationship */
  ComponentsOnThemes_aggregate: ComponentsOnThemes_Aggregate;
  /** fetch data from the table: "ComponentsOnThemes" using primary key columns */
  ComponentsOnThemes_by_pk?: Maybe<ComponentsOnThemes>;
  /** fetch data from the table in a streaming manner: "ComponentsOnThemes" */
  ComponentsOnThemes_stream: Array<ComponentsOnThemes>;
  /** fetch data from the table: "ContactMessage" */
  ContactMessage: Array<ContactMessage>;
  /** fetch aggregated fields from the table: "ContactMessage" */
  ContactMessage_aggregate: ContactMessage_Aggregate;
  /** fetch data from the table: "ContactMessage" using primary key columns */
  ContactMessage_by_pk?: Maybe<ContactMessage>;
  /** fetch data from the table in a streaming manner: "ContactMessage" */
  ContactMessage_stream: Array<ContactMessage>;
  /** fetch data from the table: "ContactRequest" */
  ContactRequest: Array<ContactRequest>;
  /** fetch aggregated fields from the table: "ContactRequest" */
  ContactRequest_aggregate: ContactRequest_Aggregate;
  /** fetch data from the table: "ContactRequest" using primary key columns */
  ContactRequest_by_pk?: Maybe<ContactRequest>;
  /** fetch data from the table in a streaming manner: "ContactRequest" */
  ContactRequest_stream: Array<ContactRequest>;
  /** fetch data from the table: "ContentType" */
  ContentType: Array<ContentType>;
  /** fetch aggregated fields from the table: "ContentType" */
  ContentType_aggregate: ContentType_Aggregate;
  /** fetch data from the table: "ContentType" using primary key columns */
  ContentType_by_pk?: Maybe<ContentType>;
  /** fetch data from the table in a streaming manner: "ContentType" */
  ContentType_stream: Array<ContentType>;
  /** An array relationship */
  ContentTypesOnProjects: Array<ContentTypesOnProjects>;
  /** An aggregate relationship */
  ContentTypesOnProjects_aggregate: ContentTypesOnProjects_Aggregate;
  /** fetch data from the table: "ContentTypesOnProjects" using primary key columns */
  ContentTypesOnProjects_by_pk?: Maybe<ContentTypesOnProjects>;
  /** fetch data from the table in a streaming manner: "ContentTypesOnProjects" */
  ContentTypesOnProjects_stream: Array<ContentTypesOnProjects>;
  /** fetch data from the table: "DomainRegistration" */
  DomainRegistration: Array<DomainRegistration>;
  /** fetch aggregated fields from the table: "DomainRegistration" */
  DomainRegistration_aggregate: DomainRegistration_Aggregate;
  /** fetch data from the table: "DomainRegistration" using primary key columns */
  DomainRegistration_by_pk?: Maybe<DomainRegistration>;
  /** fetch data from the table in a streaming manner: "DomainRegistration" */
  DomainRegistration_stream: Array<DomainRegistration>;
  /** An array relationship */
  DomainRegistrationsOnProjects: Array<DomainRegistrationsOnProjects>;
  /** An aggregate relationship */
  DomainRegistrationsOnProjects_aggregate: DomainRegistrationsOnProjects_Aggregate;
  /** fetch data from the table in a streaming manner: "DomainRegistrationsOnProjects" */
  DomainRegistrationsOnProjects_stream: Array<DomainRegistrationsOnProjects>;
  /** fetch data from the table: "Donation" */
  Donation: Array<Donation>;
  /** fetch aggregated fields from the table: "Donation" */
  Donation_aggregate: Donation_Aggregate;
  /** fetch data from the table: "Donation" using primary key columns */
  Donation_by_pk?: Maybe<Donation>;
  /** fetch data from the table in a streaming manner: "Donation" */
  Donation_stream: Array<Donation>;
  /** fetch data from the table: "FAQ" */
  FAQ: Array<Faq>;
  /** fetch aggregated fields from the table: "FAQ" */
  FAQ_aggregate: Faq_Aggregate;
  /** fetch data from the table: "FAQ" using primary key columns */
  FAQ_by_pk?: Maybe<Faq>;
  /** fetch data from the table in a streaming manner: "FAQ" */
  FAQ_stream: Array<Faq>;
  /** fetch data from the table: "LegalContent" */
  LegalContent: Array<LegalContent>;
  /** fetch aggregated fields from the table: "LegalContent" */
  LegalContent_aggregate: LegalContent_Aggregate;
  /** fetch data from the table: "LegalContent" using primary key columns */
  LegalContent_by_pk?: Maybe<LegalContent>;
  /** fetch data from the table in a streaming manner: "LegalContent" */
  LegalContent_stream: Array<LegalContent>;
  /** An array relationship */
  Media: Array<Media>;
  /** An aggregate relationship */
  Media_aggregate: Media_Aggregate;
  /** fetch data from the table: "Media" using primary key columns */
  Media_by_pk?: Maybe<Media>;
  /** fetch data from the table in a streaming manner: "Media" */
  Media_stream: Array<Media>;
  /** fetch data from the table: "Menu" */
  Menu: Array<Menu>;
  /** fetch aggregated fields from the table: "Menu" */
  Menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "Menu" using primary key columns */
  Menu_by_pk?: Maybe<Menu>;
  /** fetch data from the table in a streaming manner: "Menu" */
  Menu_stream: Array<Menu>;
  /** fetch data from the table: "Notification" */
  Notification: Array<Notification>;
  /** fetch data from the table: "NotificationTemplate" */
  NotificationTemplate: Array<NotificationTemplate>;
  /** fetch data from the table: "NotificationTemplateUser" */
  NotificationTemplateUser: Array<NotificationTemplateUser>;
  /** fetch aggregated fields from the table: "NotificationTemplateUser" */
  NotificationTemplateUser_aggregate: NotificationTemplateUser_Aggregate;
  /** fetch data from the table: "NotificationTemplateUser" using primary key columns */
  NotificationTemplateUser_by_pk?: Maybe<NotificationTemplateUser>;
  /** fetch data from the table in a streaming manner: "NotificationTemplateUser" */
  NotificationTemplateUser_stream: Array<NotificationTemplateUser>;
  /** fetch aggregated fields from the table: "NotificationTemplate" */
  NotificationTemplate_aggregate: NotificationTemplate_Aggregate;
  /** fetch data from the table: "NotificationTemplate" using primary key columns */
  NotificationTemplate_by_pk?: Maybe<NotificationTemplate>;
  /** fetch data from the table in a streaming manner: "NotificationTemplate" */
  NotificationTemplate_stream: Array<NotificationTemplate>;
  /** fetch aggregated fields from the table: "Notification" */
  Notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "Notification" using primary key columns */
  Notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table in a streaming manner: "Notification" */
  Notification_stream: Array<Notification>;
  /** fetch data from the table: "Organization" */
  Organization: Array<Organization>;
  /** fetch aggregated fields from the table: "Organization" */
  Organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "Organization" using primary key columns */
  Organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table in a streaming manner: "Organization" */
  Organization_stream: Array<Organization>;
  /** fetch data from the table: "Page" */
  Page: Array<Page>;
  /** fetch aggregated fields from the table: "Page" */
  Page_aggregate: Page_Aggregate;
  /** fetch data from the table: "Page" using primary key columns */
  Page_by_pk?: Maybe<Page>;
  /** fetch data from the table in a streaming manner: "Page" */
  Page_stream: Array<Page>;
  /** fetch data from the table: "Payment" */
  Payment: Array<Payment>;
  /** fetch aggregated fields from the table: "Payment" */
  Payment_aggregate: Payment_Aggregate;
  /** fetch data from the table: "Payment" using primary key columns */
  Payment_by_pk?: Maybe<Payment>;
  /** fetch data from the table in a streaming manner: "Payment" */
  Payment_stream: Array<Payment>;
  /** fetch data from the table: "Permission" */
  Permission: Array<Permission>;
  /** fetch aggregated fields from the table: "Permission" */
  Permission_aggregate: Permission_Aggregate;
  /** fetch data from the table: "Permission" using primary key columns */
  Permission_by_pk?: Maybe<Permission>;
  /** fetch data from the table in a streaming manner: "Permission" */
  Permission_stream: Array<Permission>;
  /** An array relationship */
  PermissionsOnRoles: Array<PermissionsOnRoles>;
  /** An aggregate relationship */
  PermissionsOnRoles_aggregate: PermissionsOnRoles_Aggregate;
  /** fetch data from the table: "PermissionsOnRoles" using primary key columns */
  PermissionsOnRoles_by_pk?: Maybe<PermissionsOnRoles>;
  /** fetch data from the table in a streaming manner: "PermissionsOnRoles" */
  PermissionsOnRoles_stream: Array<PermissionsOnRoles>;
  /** fetch data from the table: "Plan" */
  Plan: Array<Plan>;
  /** fetch data from the table: "PlanFeature" */
  PlanFeature: Array<PlanFeature>;
  /** fetch data from the table: "PlanFeatureLimitation" */
  PlanFeatureLimitation: Array<PlanFeatureLimitation>;
  /** fetch aggregated fields from the table: "PlanFeatureLimitation" */
  PlanFeatureLimitation_aggregate: PlanFeatureLimitation_Aggregate;
  /** fetch data from the table: "PlanFeatureLimitation" using primary key columns */
  PlanFeatureLimitation_by_pk?: Maybe<PlanFeatureLimitation>;
  /** fetch data from the table in a streaming manner: "PlanFeatureLimitation" */
  PlanFeatureLimitation_stream: Array<PlanFeatureLimitation>;
  /** fetch aggregated fields from the table: "PlanFeature" */
  PlanFeature_aggregate: PlanFeature_Aggregate;
  /** fetch data from the table: "PlanFeature" using primary key columns */
  PlanFeature_by_pk?: Maybe<PlanFeature>;
  /** fetch data from the table in a streaming manner: "PlanFeature" */
  PlanFeature_stream: Array<PlanFeature>;
  /** fetch aggregated fields from the table: "Plan" */
  Plan_aggregate: Plan_Aggregate;
  /** fetch data from the table: "Plan" using primary key columns */
  Plan_by_pk?: Maybe<Plan>;
  /** fetch data from the table in a streaming manner: "Plan" */
  Plan_stream: Array<Plan>;
  /** fetch data from the table: "Plugin" */
  Plugin: Array<Plugin>;
  /** fetch aggregated fields from the table: "Plugin" */
  Plugin_aggregate: Plugin_Aggregate;
  /** fetch data from the table: "Plugin" using primary key columns */
  Plugin_by_pk?: Maybe<Plugin>;
  /** fetch data from the table in a streaming manner: "Plugin" */
  Plugin_stream: Array<Plugin>;
  /** fetch data from the table: "Post" */
  Post: Array<Post>;
  /** fetch aggregated fields from the table: "Post" */
  Post_aggregate: Post_Aggregate;
  /** fetch data from the table: "Post" using primary key columns */
  Post_by_pk?: Maybe<Post>;
  /** fetch data from the table in a streaming manner: "Post" */
  Post_stream: Array<Post>;
  /** fetch data from the table: "Project" */
  Project: Array<Project>;
  /** fetch data from the table: "ProjectAudience" */
  ProjectAudience: Array<ProjectAudience>;
  /** fetch aggregated fields from the table: "ProjectAudience" */
  ProjectAudience_aggregate: ProjectAudience_Aggregate;
  /** fetch data from the table: "ProjectAudience" using primary key columns */
  ProjectAudience_by_pk?: Maybe<ProjectAudience>;
  /** fetch data from the table in a streaming manner: "ProjectAudience" */
  ProjectAudience_stream: Array<ProjectAudience>;
  /** An array relationship */
  ProjectSettings: Array<ProjectSettings>;
  /** An aggregate relationship */
  ProjectSettings_aggregate: ProjectSettings_Aggregate;
  /** fetch data from the table: "ProjectSettings" using primary key columns */
  ProjectSettings_by_pk?: Maybe<ProjectSettings>;
  /** fetch data from the table in a streaming manner: "ProjectSettings" */
  ProjectSettings_stream: Array<ProjectSettings>;
  /** fetch aggregated fields from the table: "Project" */
  Project_aggregate: Project_Aggregate;
  /** fetch data from the table: "Project" using primary key columns */
  Project_by_pk?: Maybe<Project>;
  /** fetch data from the table in a streaming manner: "Project" */
  Project_stream: Array<Project>;
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "Role" */
  Role_stream: Array<Role>;
  /** fetch data from the table: "Subscription" */
  Subscription: Array<Subscription>;
  /** fetch aggregated fields from the table: "Subscription" */
  Subscription_aggregate: Subscription_Aggregate;
  /** fetch data from the table: "Subscription" using primary key columns */
  Subscription_by_pk?: Maybe<Subscription>;
  /** fetch data from the table in a streaming manner: "Subscription" */
  Subscription_stream: Array<Subscription>;
  /** fetch data from the table: "Theme" */
  Theme: Array<Theme>;
  /** fetch aggregated fields from the table: "Theme" */
  Theme_aggregate: Theme_Aggregate;
  /** fetch data from the table: "Theme" using primary key columns */
  Theme_by_pk?: Maybe<Theme>;
  /** fetch data from the table in a streaming manner: "Theme" */
  Theme_stream: Array<Theme>;
  /** fetch data from the table: "Ticket" */
  Ticket: Array<Ticket>;
  /** fetch aggregated fields from the table: "Ticket" */
  Ticket_aggregate: Ticket_Aggregate;
  /** fetch data from the table: "Ticket" using primary key columns */
  Ticket_by_pk?: Maybe<Ticket>;
  /** fetch data from the table in a streaming manner: "Ticket" */
  Ticket_stream: Array<Ticket>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** An array relationship */
  UserPreferences: Array<UserPreferences>;
  /** An aggregate relationship */
  UserPreferences_aggregate: UserPreferences_Aggregate;
  /** fetch data from the table in a streaming manner: "UserPreferences" */
  UserPreferences_stream: Array<UserPreferences>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
  /** fetch data from the table: "VisualType" */
  VisualType: Array<VisualType>;
  /** fetch aggregated fields from the table: "VisualType" */
  VisualType_aggregate: VisualType_Aggregate;
  /** fetch data from the table: "VisualType" using primary key columns */
  VisualType_by_pk?: Maybe<VisualType>;
  /** fetch data from the table in a streaming manner: "VisualType" */
  VisualType_stream: Array<VisualType>;
  /** An array relationship */
  VisualTypesOnProjects: Array<VisualTypesOnProjects>;
  /** An aggregate relationship */
  VisualTypesOnProjects_aggregate: VisualTypesOnProjects_Aggregate;
  /** fetch data from the table: "VisualTypesOnProjects" using primary key columns */
  VisualTypesOnProjects_by_pk?: Maybe<VisualTypesOnProjects>;
  /** fetch data from the table in a streaming manner: "VisualTypesOnProjects" */
  VisualTypesOnProjects_stream: Array<VisualTypesOnProjects>;
  /** fetch data from the table: "_prisma_migrations" */
  _prisma_migrations: Array<_Prisma_Migrations>;
  /** fetch aggregated fields from the table: "_prisma_migrations" */
  _prisma_migrations_aggregate: _Prisma_Migrations_Aggregate;
  /** fetch data from the table: "_prisma_migrations" using primary key columns */
  _prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>;
  /** fetch data from the table in a streaming manner: "_prisma_migrations" */
  _prisma_migrations_stream: Array<_Prisma_Migrations>;
};

export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

export type Subscription_RootAdminPermissionArgs = {
  distinct_on?: InputMaybe<Array<AdminPermission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminPermission_Order_By>>;
  where?: InputMaybe<AdminPermission_Bool_Exp>;
};

export type Subscription_RootAdminPermission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AdminPermission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminPermission_Order_By>>;
  where?: InputMaybe<AdminPermission_Bool_Exp>;
};

export type Subscription_RootAdminPermission_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootAdminPermission_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AdminPermission_Stream_Cursor_Input>>;
  where?: InputMaybe<AdminPermission_Bool_Exp>;
};

export type Subscription_RootAdminPermissionsOnRolesArgs = {
  distinct_on?: InputMaybe<Array<AdminPermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminPermissionsOnRoles_Order_By>>;
  where?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
};

export type Subscription_RootAdminPermissionsOnRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AdminPermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminPermissionsOnRoles_Order_By>>;
  where?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
};

export type Subscription_RootAdminPermissionsOnRoles_By_PkArgs = {
  permissionId: Scalars['Int']['input'];
  roleId: Scalars['Int']['input'];
};

export type Subscription_RootAdminPermissionsOnRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AdminPermissionsOnRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AdminPermissionsOnRoles_Bool_Exp>;
};

export type Subscription_RootAdminRoleArgs = {
  distinct_on?: InputMaybe<Array<AdminRole_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminRole_Order_By>>;
  where?: InputMaybe<AdminRole_Bool_Exp>;
};

export type Subscription_RootAdminRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AdminRole_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdminRole_Order_By>>;
  where?: InputMaybe<AdminRole_Bool_Exp>;
};

export type Subscription_RootAdminRole_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootAdminRole_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AdminRole_Stream_Cursor_Input>>;
  where?: InputMaybe<AdminRole_Bool_Exp>;
};

export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootAdmin_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

export type Subscription_RootAnalyticsArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Order_By>>;
  where?: InputMaybe<Analytics_Bool_Exp>;
};

export type Subscription_RootAnalytics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Order_By>>;
  where?: InputMaybe<Analytics_Bool_Exp>;
};

export type Subscription_RootAnalytics_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootAnalytics_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Analytics_Stream_Cursor_Input>>;
  where?: InputMaybe<Analytics_Bool_Exp>;
};

export type Subscription_RootBlogArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};

export type Subscription_RootBlog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};

export type Subscription_RootBlog_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootBlog_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Blog_Stream_Cursor_Input>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};

export type Subscription_RootComponentArgs = {
  distinct_on?: InputMaybe<Array<Component_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Component_Order_By>>;
  where?: InputMaybe<Component_Bool_Exp>;
};

export type Subscription_RootComponent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Component_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Component_Order_By>>;
  where?: InputMaybe<Component_Bool_Exp>;
};

export type Subscription_RootComponent_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootComponent_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Component_Stream_Cursor_Input>>;
  where?: InputMaybe<Component_Bool_Exp>;
};

export type Subscription_RootComponentsOnPagesArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnPages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnPages_Order_By>>;
  where?: InputMaybe<ComponentsOnPages_Bool_Exp>;
};

export type Subscription_RootComponentsOnPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnPages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnPages_Order_By>>;
  where?: InputMaybe<ComponentsOnPages_Bool_Exp>;
};

export type Subscription_RootComponentsOnPages_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootComponentsOnPages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ComponentsOnPages_Stream_Cursor_Input>>;
  where?: InputMaybe<ComponentsOnPages_Bool_Exp>;
};

export type Subscription_RootComponentsOnThemesArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnThemes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnThemes_Order_By>>;
  where?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
};

export type Subscription_RootComponentsOnThemes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ComponentsOnThemes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComponentsOnThemes_Order_By>>;
  where?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
};

export type Subscription_RootComponentsOnThemes_By_PkArgs = {
  componentId: Scalars['Int']['input'];
  themeId: Scalars['Int']['input'];
};

export type Subscription_RootComponentsOnThemes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ComponentsOnThemes_Stream_Cursor_Input>>;
  where?: InputMaybe<ComponentsOnThemes_Bool_Exp>;
};

export type Subscription_RootContactMessageArgs = {
  distinct_on?: InputMaybe<Array<ContactMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContactMessage_Order_By>>;
  where?: InputMaybe<ContactMessage_Bool_Exp>;
};

export type Subscription_RootContactMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContactMessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContactMessage_Order_By>>;
  where?: InputMaybe<ContactMessage_Bool_Exp>;
};

export type Subscription_RootContactMessage_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootContactMessage_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ContactMessage_Stream_Cursor_Input>>;
  where?: InputMaybe<ContactMessage_Bool_Exp>;
};

export type Subscription_RootContactRequestArgs = {
  distinct_on?: InputMaybe<Array<ContactRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContactRequest_Order_By>>;
  where?: InputMaybe<ContactRequest_Bool_Exp>;
};

export type Subscription_RootContactRequest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContactRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContactRequest_Order_By>>;
  where?: InputMaybe<ContactRequest_Bool_Exp>;
};

export type Subscription_RootContactRequest_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootContactRequest_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ContactRequest_Stream_Cursor_Input>>;
  where?: InputMaybe<ContactRequest_Bool_Exp>;
};

export type Subscription_RootContentTypeArgs = {
  distinct_on?: InputMaybe<Array<ContentType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentType_Order_By>>;
  where?: InputMaybe<ContentType_Bool_Exp>;
};

export type Subscription_RootContentType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContentType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentType_Order_By>>;
  where?: InputMaybe<ContentType_Bool_Exp>;
};

export type Subscription_RootContentType_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootContentType_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ContentType_Stream_Cursor_Input>>;
  where?: InputMaybe<ContentType_Bool_Exp>;
};

export type Subscription_RootContentTypesOnProjectsArgs = {
  distinct_on?: InputMaybe<Array<ContentTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentTypesOnProjects_Order_By>>;
  where?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
};

export type Subscription_RootContentTypesOnProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContentTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ContentTypesOnProjects_Order_By>>;
  where?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
};

export type Subscription_RootContentTypesOnProjects_By_PkArgs = {
  contentTypeId: Scalars['Int']['input'];
  projectId: Scalars['uuid']['input'];
};

export type Subscription_RootContentTypesOnProjects_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ContentTypesOnProjects_Stream_Cursor_Input>>;
  where?: InputMaybe<ContentTypesOnProjects_Bool_Exp>;
};

export type Subscription_RootDomainRegistrationArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistration_Order_By>>;
  where?: InputMaybe<DomainRegistration_Bool_Exp>;
};

export type Subscription_RootDomainRegistration_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistration_Order_By>>;
  where?: InputMaybe<DomainRegistration_Bool_Exp>;
};

export type Subscription_RootDomainRegistration_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootDomainRegistration_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DomainRegistration_Stream_Cursor_Input>>;
  where?: InputMaybe<DomainRegistration_Bool_Exp>;
};

export type Subscription_RootDomainRegistrationsOnProjectsArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistrationsOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistrationsOnProjects_Order_By>>;
  where?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
};

export type Subscription_RootDomainRegistrationsOnProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DomainRegistrationsOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DomainRegistrationsOnProjects_Order_By>>;
  where?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
};

export type Subscription_RootDomainRegistrationsOnProjects_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DomainRegistrationsOnProjects_Stream_Cursor_Input>>;
  where?: InputMaybe<DomainRegistrationsOnProjects_Bool_Exp>;
};

export type Subscription_RootDonationArgs = {
  distinct_on?: InputMaybe<Array<Donation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Donation_Order_By>>;
  where?: InputMaybe<Donation_Bool_Exp>;
};

export type Subscription_RootDonation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Donation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Donation_Order_By>>;
  where?: InputMaybe<Donation_Bool_Exp>;
};

export type Subscription_RootDonation_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootDonation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Donation_Stream_Cursor_Input>>;
  where?: InputMaybe<Donation_Bool_Exp>;
};

export type Subscription_RootFaqArgs = {
  distinct_on?: InputMaybe<Array<Faq_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Faq_Order_By>>;
  where?: InputMaybe<Faq_Bool_Exp>;
};

export type Subscription_RootFaq_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Faq_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Faq_Order_By>>;
  where?: InputMaybe<Faq_Bool_Exp>;
};

export type Subscription_RootFaq_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootFaq_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Faq_Stream_Cursor_Input>>;
  where?: InputMaybe<Faq_Bool_Exp>;
};

export type Subscription_RootLegalContentArgs = {
  distinct_on?: InputMaybe<Array<LegalContent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LegalContent_Order_By>>;
  where?: InputMaybe<LegalContent_Bool_Exp>;
};

export type Subscription_RootLegalContent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LegalContent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LegalContent_Order_By>>;
  where?: InputMaybe<LegalContent_Bool_Exp>;
};

export type Subscription_RootLegalContent_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootLegalContent_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<LegalContent_Stream_Cursor_Input>>;
  where?: InputMaybe<LegalContent_Bool_Exp>;
};

export type Subscription_RootMediaArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};

export type Subscription_RootMedia_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};

export type Subscription_RootMedia_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootMedia_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Media_Stream_Cursor_Input>>;
  where?: InputMaybe<Media_Bool_Exp>;
};

export type Subscription_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

export type Subscription_RootMenu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

export type Subscription_RootMenu_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootMenu_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Menu_Stream_Cursor_Input>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

export type Subscription_RootNotificationArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Subscription_RootNotificationTemplateArgs = {
  distinct_on?: InputMaybe<Array<NotificationTemplate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTemplate_Order_By>>;
  where?: InputMaybe<NotificationTemplate_Bool_Exp>;
};

export type Subscription_RootNotificationTemplateUserArgs = {
  distinct_on?: InputMaybe<Array<NotificationTemplateUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTemplateUser_Order_By>>;
  where?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
};

export type Subscription_RootNotificationTemplateUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationTemplateUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTemplateUser_Order_By>>;
  where?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
};

export type Subscription_RootNotificationTemplateUser_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootNotificationTemplateUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<NotificationTemplateUser_Stream_Cursor_Input>>;
  where?: InputMaybe<NotificationTemplateUser_Bool_Exp>;
};

export type Subscription_RootNotificationTemplate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationTemplate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTemplate_Order_By>>;
  where?: InputMaybe<NotificationTemplate_Bool_Exp>;
};

export type Subscription_RootNotificationTemplate_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootNotificationTemplate_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<NotificationTemplate_Stream_Cursor_Input>>;
  where?: InputMaybe<NotificationTemplate_Bool_Exp>;
};

export type Subscription_RootNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Subscription_RootNotification_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootNotification_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notification_Stream_Cursor_Input>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Subscription_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

export type Subscription_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

export type Subscription_RootOrganization_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootOrganization_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

export type Subscription_RootPageArgs = {
  distinct_on?: InputMaybe<Array<Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Order_By>>;
  where?: InputMaybe<Page_Bool_Exp>;
};

export type Subscription_RootPage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Order_By>>;
  where?: InputMaybe<Page_Bool_Exp>;
};

export type Subscription_RootPage_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootPage_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Page_Stream_Cursor_Input>>;
  where?: InputMaybe<Page_Bool_Exp>;
};

export type Subscription_RootPaymentArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

export type Subscription_RootPayment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Order_By>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

export type Subscription_RootPayment_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootPayment_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payment_Stream_Cursor_Input>>;
  where?: InputMaybe<Payment_Bool_Exp>;
};

export type Subscription_RootPermissionArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};

export type Subscription_RootPermission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};

export type Subscription_RootPermission_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootPermission_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Permission_Stream_Cursor_Input>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};

export type Subscription_RootPermissionsOnRolesArgs = {
  distinct_on?: InputMaybe<Array<PermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PermissionsOnRoles_Order_By>>;
  where?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
};

export type Subscription_RootPermissionsOnRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PermissionsOnRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PermissionsOnRoles_Order_By>>;
  where?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
};

export type Subscription_RootPermissionsOnRoles_By_PkArgs = {
  permissionId: Scalars['Int']['input'];
  roleId: Scalars['Int']['input'];
};

export type Subscription_RootPermissionsOnRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PermissionsOnRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<PermissionsOnRoles_Bool_Exp>;
};

export type Subscription_RootPlanArgs = {
  distinct_on?: InputMaybe<Array<Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Order_By>>;
  where?: InputMaybe<Plan_Bool_Exp>;
};

export type Subscription_RootPlanFeatureArgs = {
  distinct_on?: InputMaybe<Array<PlanFeature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PlanFeature_Order_By>>;
  where?: InputMaybe<PlanFeature_Bool_Exp>;
};

export type Subscription_RootPlanFeatureLimitationArgs = {
  distinct_on?: InputMaybe<Array<PlanFeatureLimitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PlanFeatureLimitation_Order_By>>;
  where?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
};

export type Subscription_RootPlanFeatureLimitation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PlanFeatureLimitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PlanFeatureLimitation_Order_By>>;
  where?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
};

export type Subscription_RootPlanFeatureLimitation_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootPlanFeatureLimitation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PlanFeatureLimitation_Stream_Cursor_Input>>;
  where?: InputMaybe<PlanFeatureLimitation_Bool_Exp>;
};

export type Subscription_RootPlanFeature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PlanFeature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PlanFeature_Order_By>>;
  where?: InputMaybe<PlanFeature_Bool_Exp>;
};

export type Subscription_RootPlanFeature_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootPlanFeature_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PlanFeature_Stream_Cursor_Input>>;
  where?: InputMaybe<PlanFeature_Bool_Exp>;
};

export type Subscription_RootPlan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Order_By>>;
  where?: InputMaybe<Plan_Bool_Exp>;
};

export type Subscription_RootPlan_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootPlan_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Plan_Stream_Cursor_Input>>;
  where?: InputMaybe<Plan_Bool_Exp>;
};

export type Subscription_RootPluginArgs = {
  distinct_on?: InputMaybe<Array<Plugin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plugin_Order_By>>;
  where?: InputMaybe<Plugin_Bool_Exp>;
};

export type Subscription_RootPlugin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plugin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plugin_Order_By>>;
  where?: InputMaybe<Plugin_Bool_Exp>;
};

export type Subscription_RootPlugin_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootPlugin_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Plugin_Stream_Cursor_Input>>;
  where?: InputMaybe<Plugin_Bool_Exp>;
};

export type Subscription_RootPostArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

export type Subscription_RootPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

export type Subscription_RootPost_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootPost_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Post_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

export type Subscription_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Subscription_RootProjectAudienceArgs = {
  distinct_on?: InputMaybe<Array<ProjectAudience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProjectAudience_Order_By>>;
  where?: InputMaybe<ProjectAudience_Bool_Exp>;
};

export type Subscription_RootProjectAudience_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectAudience_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProjectAudience_Order_By>>;
  where?: InputMaybe<ProjectAudience_Bool_Exp>;
};

export type Subscription_RootProjectAudience_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootProjectAudience_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ProjectAudience_Stream_Cursor_Input>>;
  where?: InputMaybe<ProjectAudience_Bool_Exp>;
};

export type Subscription_RootProjectSettingsArgs = {
  distinct_on?: InputMaybe<Array<ProjectSettings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProjectSettings_Order_By>>;
  where?: InputMaybe<ProjectSettings_Bool_Exp>;
};

export type Subscription_RootProjectSettings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectSettings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProjectSettings_Order_By>>;
  where?: InputMaybe<ProjectSettings_Bool_Exp>;
};

export type Subscription_RootProjectSettings_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootProjectSettings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ProjectSettings_Stream_Cursor_Input>>;
  where?: InputMaybe<ProjectSettings_Bool_Exp>;
};

export type Subscription_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Subscription_RootProject_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_RootProject_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};

export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};

export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
};

export type Subscription_RootSubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Order_By>>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};

export type Subscription_RootSubscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Order_By>>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};

export type Subscription_RootSubscription_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootSubscription_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subscription_Stream_Cursor_Input>>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};

export type Subscription_RootThemeArgs = {
  distinct_on?: InputMaybe<Array<Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Theme_Order_By>>;
  where?: InputMaybe<Theme_Bool_Exp>;
};

export type Subscription_RootTheme_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Theme_Order_By>>;
  where?: InputMaybe<Theme_Bool_Exp>;
};

export type Subscription_RootTheme_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootTheme_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Theme_Stream_Cursor_Input>>;
  where?: InputMaybe<Theme_Bool_Exp>;
};

export type Subscription_RootTicketArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Order_By>>;
  where?: InputMaybe<Ticket_Bool_Exp>;
};

export type Subscription_RootTicket_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ticket_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ticket_Order_By>>;
  where?: InputMaybe<Ticket_Bool_Exp>;
};

export type Subscription_RootTicket_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootTicket_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ticket_Stream_Cursor_Input>>;
  where?: InputMaybe<Ticket_Bool_Exp>;
};

export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUserPreferencesArgs = {
  distinct_on?: InputMaybe<Array<UserPreferences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserPreferences_Order_By>>;
  where?: InputMaybe<UserPreferences_Bool_Exp>;
};

export type Subscription_RootUserPreferences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserPreferences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserPreferences_Order_By>>;
  where?: InputMaybe<UserPreferences_Bool_Exp>;
};

export type Subscription_RootUserPreferences_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserPreferences_Stream_Cursor_Input>>;
  where?: InputMaybe<UserPreferences_Bool_Exp>;
};

export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootVisualTypeArgs = {
  distinct_on?: InputMaybe<Array<VisualType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VisualType_Order_By>>;
  where?: InputMaybe<VisualType_Bool_Exp>;
};

export type Subscription_RootVisualType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VisualType_Order_By>>;
  where?: InputMaybe<VisualType_Bool_Exp>;
};

export type Subscription_RootVisualType_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootVisualType_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<VisualType_Stream_Cursor_Input>>;
  where?: InputMaybe<VisualType_Bool_Exp>;
};

export type Subscription_RootVisualTypesOnProjectsArgs = {
  distinct_on?: InputMaybe<Array<VisualTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VisualTypesOnProjects_Order_By>>;
  where?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
};

export type Subscription_RootVisualTypesOnProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualTypesOnProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VisualTypesOnProjects_Order_By>>;
  where?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
};

export type Subscription_RootVisualTypesOnProjects_By_PkArgs = {
  projectId: Scalars['uuid']['input'];
  visualTypeId: Scalars['Int']['input'];
};

export type Subscription_RootVisualTypesOnProjects_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<VisualTypesOnProjects_Stream_Cursor_Input>>;
  where?: InputMaybe<VisualTypesOnProjects_Bool_Exp>;
};

export type Subscription_Root_Prisma_MigrationsArgs = {
  distinct_on?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

export type Subscription_Root_Prisma_Migrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

export type Subscription_Root_Prisma_Migrations_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_Root_Prisma_Migrations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<_Prisma_Migrations_Stream_Cursor_Input>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetComponentQueryVariables = Exact<{ [key: string]: never }>;

export type GetComponentQuery = {
  __typename?: 'query_root';
  components: Array<{
    __typename?: 'Component';
    id: number;
    image: string;
    name: string;
    type: any;
  }>;
};

export type GetContentTypeQueryVariables = Exact<{ [key: string]: never }>;

export type GetContentTypeQuery = {
  __typename?: 'query_root';
  ContentType: Array<{
    __typename?: 'ContentType';
    id: number;
    parentId?: number | null;
    name: string;
    type: any;
    children: Array<{ __typename?: 'ContentType'; id: number; name: string }>;
  }>;
};

export type GetContentTypesOnProjectsQueryVariables = Exact<{
  projectId: Scalars['uuid']['input'];
}>;

export type GetContentTypesOnProjectsQuery = {
  __typename?: 'query_root';
  ContentTypesOnProjects: Array<{
    __typename?: 'ContentTypesOnProjects';
    ContentType: { __typename?: 'ContentType'; id: number; name: string; parentId?: number | null };
  }>;
};

export type GetMyNotificationsQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyNotificationsQuery = {
  __typename?: 'query_root';
  Notification: Array<{
    __typename?: 'Notification';
    id: number;
    description: string;
    title: string;
    userId?: string | null;
    createdAt: any;
    readAt?: any | null;
  }>;
};

export type MarkNotificationAsReadMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type MarkNotificationAsReadMutation = {
  __typename?: 'mutation_root';
  update_Notification?: {
    __typename?: 'Notification_mutation_response';
    affected_rows: number;
    returning: Array<{ __typename?: 'Notification'; id: number }>;
  } | null;
};

export type MarkAllNotificationsAsReadMutationVariables = Exact<{ [key: string]: never }>;

export type MarkAllNotificationsAsReadMutation = {
  __typename?: 'mutation_root';
  update_Notification?: {
    __typename?: 'Notification_mutation_response';
    affected_rows: number;
    returning: Array<{ __typename?: 'Notification'; id: number }>;
  } | null;
};

export type GetPaymentsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPaymentsQuery = {
  __typename?: 'query_root';
  Payment: Array<{
    __typename?: 'Payment';
    id: number;
    cost: any;
    type: any;
    status: any;
    userId: string;
    createdAt: any;
    subscriptionId?: number | null;
    domainRegistrationId?: number | null;
    donationId?: number | null;
    transactionId?: string | null;
    User: { __typename?: 'User'; id: string; name: string; email: string };
  }>;
};

export type GetPaymentDetailsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetPaymentDetailsQuery = {
  __typename?: 'query_root';
  Payment: Array<{
    __typename?: 'Payment';
    id: number;
    cost: any;
    type: any;
    status: any;
    userId: string;
    createdAt: any;
    transactionId?: string | null;
    subscriptionId?: number | null;
    domainRegistrationId?: number | null;
    donationId?: number | null;
    User: { __typename?: 'User'; id: string; name: string; email: string };
    Subscription?: {
      __typename?: 'Subscription';
      id: number;
      status: any;
      expireAt: any;
      Plan: { __typename?: 'Plan'; name: string; period: number; periodType: any };
    } | null;
    DomainRegistration?: {
      __typename?: 'DomainRegistration';
      domainName: string;
      years: number;
      status: any;
    } | null;
    Donation?: { __typename?: 'Donation'; type: string; status: any } | null;
  }>;
};

export type GetStatisticsQueryVariables = Exact<{ [key: string]: never }>;

export type GetStatisticsQuery = {
  __typename?: 'query_root';
  Project: Array<{ __typename?: 'Project'; cdnPullZoneId?: number | null; id: any }>;
  ContactMessage: Array<{ __typename?: 'ContactMessage'; id: number }>;
};

export type GetVisualTypeQueryVariables = Exact<{ [key: string]: never }>;

export type GetVisualTypeQuery = {
  __typename?: 'query_root';
  VisualType: Array<{ __typename?: 'VisualType'; id: number; name: string; type: any }>;
};

export const GetComponentDocument = `
query GetComponent {
 components(type: "") {
     id
     image
     name
     type
   }
}
    `;
export const useGetComponentQuery = <TData = GetComponentQuery, TError = unknown>(
  variables?: GetComponentQueryVariables,
  options?: UseQueryOptions<GetComponentQuery, TError, TData>
) =>
  useQuery<GetComponentQuery, TError, TData>(
    variables === undefined ? ['GetComponent'] : ['GetComponent', variables],
    fetchData<GetComponentQuery, GetComponentQueryVariables>(GetComponentDocument, variables),
    options
  );
export const GetContentTypeDocument = `
    query GetContentType {
  ContentType(where: {parentId: {_is_null: true}}) {
    id
    parentId
    name
    type
    children {
      id
      name
    }
  }
}
    `;
export const useGetContentTypeQuery = <TData = GetContentTypeQuery, TError = unknown>(
  variables?: GetContentTypeQueryVariables,
  options?: UseQueryOptions<GetContentTypeQuery, TError, TData>
) =>
  useQuery<GetContentTypeQuery, TError, TData>(
    variables === undefined ? ['GetContentType'] : ['GetContentType', variables],
    fetchData<GetContentTypeQuery, GetContentTypeQueryVariables>(GetContentTypeDocument, variables),
    options
  );
export const GetContentTypesOnProjectsDocument = `
    query GetContentTypesOnProjects($projectId: uuid!) {
  ContentTypesOnProjects(where: {projectId: {_eq: $projectId}}) {
    ContentType {
      id
      name
      parentId
    }
  }
}
    `;
export const useGetContentTypesOnProjectsQuery = <
  TData = GetContentTypesOnProjectsQuery,
  TError = unknown
>(
  variables: GetContentTypesOnProjectsQueryVariables,
  options?: UseQueryOptions<GetContentTypesOnProjectsQuery, TError, TData>
) =>
  useQuery<GetContentTypesOnProjectsQuery, TError, TData>(
    ['GetContentTypesOnProjects', variables],
    fetchData<GetContentTypesOnProjectsQuery, GetContentTypesOnProjectsQueryVariables>(
      GetContentTypesOnProjectsDocument,
      variables
    ),
    options
  );
export const GetMyNotificationsDocument = `
    query GetMyNotifications {
  Notification(order_by: {createdAt: desc}) {
    id
    description
    title
    userId
    createdAt
    readAt
  }
}
    `;
export const useGetMyNotificationsQuery = <TData = GetMyNotificationsQuery, TError = unknown>(
  variables?: GetMyNotificationsQueryVariables,
  options?: UseQueryOptions<GetMyNotificationsQuery, TError, TData>
) =>
  useQuery<GetMyNotificationsQuery, TError, TData>(
    variables === undefined ? ['GetMyNotifications'] : ['GetMyNotifications', variables],
    fetchData<GetMyNotificationsQuery, GetMyNotificationsQueryVariables>(
      GetMyNotificationsDocument,
      variables
    ),
    options
  );
export const MarkNotificationAsReadDocument = `
    mutation MarkNotificationAsRead($id: Int!) {
  update_Notification(where: {id: {_eq: $id}}, _set: {readAt: "now()"}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const useMarkNotificationAsReadMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    MarkNotificationAsReadMutation,
    TError,
    MarkNotificationAsReadMutationVariables,
    TContext
  >
) =>
  useMutation<
    MarkNotificationAsReadMutation,
    TError,
    MarkNotificationAsReadMutationVariables,
    TContext
  >(
    ['MarkNotificationAsRead'],
    (variables?: MarkNotificationAsReadMutationVariables) =>
      fetchData<MarkNotificationAsReadMutation, MarkNotificationAsReadMutationVariables>(
        MarkNotificationAsReadDocument,
        variables
      )(),
    options
  );
export const MarkAllNotificationsAsReadDocument = `
    mutation MarkAllNotificationsAsRead {
  update_Notification(where: {}, _set: {readAt: "now()"}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const useMarkAllNotificationsAsReadMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    MarkAllNotificationsAsReadMutation,
    TError,
    MarkAllNotificationsAsReadMutationVariables,
    TContext
  >
) =>
  useMutation<
    MarkAllNotificationsAsReadMutation,
    TError,
    MarkAllNotificationsAsReadMutationVariables,
    TContext
  >(
    ['MarkAllNotificationsAsRead'],
    (variables?: MarkAllNotificationsAsReadMutationVariables) =>
      fetchData<MarkAllNotificationsAsReadMutation, MarkAllNotificationsAsReadMutationVariables>(
        MarkAllNotificationsAsReadDocument,
        variables
      )(),
    options
  );
export const GetPaymentsDocument = `
    query GetPayments {
  Payment(order_by: {createdAt: desc}) {
    id
    cost
    type
    status
    userId
    User {
      id
      name
      email
    }
    createdAt
    subscriptionId
    domainRegistrationId
    donationId
    transactionId
  }
}
    `;
export const useGetPaymentsQuery = <TData = GetPaymentsQuery, TError = unknown>(
  variables?: GetPaymentsQueryVariables,
  options?: UseQueryOptions<GetPaymentsQuery, TError, TData>
) =>
  useQuery<GetPaymentsQuery, TError, TData>(
    variables === undefined ? ['GetPayments'] : ['GetPayments', variables],
    fetchData<GetPaymentsQuery, GetPaymentsQueryVariables>(GetPaymentsDocument, variables),
    options
  );
export const GetPaymentDetailsDocument = `
    query GetPaymentDetails($id: Int!) {
  Payment(where: {id: {_eq: $id}}) {
    id
    cost
    type
    status
    userId
    User {
      id
      name
      email
    }
    createdAt
    transactionId
    subscriptionId
    Subscription {
      id
      status
      expireAt
      Plan {
        name
        period
        periodType
      }
    }
    domainRegistrationId
    DomainRegistration {
      domainName
      years
      status
    }
    donationId
    Donation {
      type
      status
    }
  }
}
    `;
export const useGetPaymentDetailsQuery = <TData = GetPaymentDetailsQuery, TError = unknown>(
  variables: GetPaymentDetailsQueryVariables,
  options?: UseQueryOptions<GetPaymentDetailsQuery, TError, TData>
) =>
  useQuery<GetPaymentDetailsQuery, TError, TData>(
    ['GetPaymentDetails', variables],
    fetchData<GetPaymentDetailsQuery, GetPaymentDetailsQueryVariables>(
      GetPaymentDetailsDocument,
      variables
    ),
    options
  );
export const GetStatisticsDocument = `
    query GetStatistics {
  Project {
    cdnPullZoneId
    id
  }
  ContactMessage {
    id
  }
}
    `;
export const useGetStatisticsQuery = <TData = GetStatisticsQuery, TError = unknown>(
  variables?: GetStatisticsQueryVariables,
  options?: UseQueryOptions<GetStatisticsQuery, TError, TData>
) =>
  useQuery<GetStatisticsQuery, TError, TData>(
    variables === undefined ? ['GetStatistics'] : ['GetStatistics', variables],
    fetchData<GetStatisticsQuery, GetStatisticsQueryVariables>(GetStatisticsDocument, variables),
    options
  );
export const GetVisualTypeDocument = `
    query GetVisualType {
  VisualType {
    id
    name
    type
  }
}
    `;
export const useGetVisualTypeQuery = <TData = GetVisualTypeQuery, TError = unknown>(
  variables?: GetVisualTypeQueryVariables,
  options?: UseQueryOptions<GetVisualTypeQuery, TError, TData>
) =>
  useQuery<GetVisualTypeQuery, TError, TData>(
    variables === undefined ? ['GetVisualType'] : ['GetVisualType', variables],
    fetchData<GetVisualTypeQuery, GetVisualTypeQueryVariables>(GetVisualTypeDocument, variables),
    options
  );
