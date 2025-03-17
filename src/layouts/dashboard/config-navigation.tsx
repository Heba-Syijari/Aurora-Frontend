import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  subscription: icon('ic_subscription'),
  payment: icon('ic_payment'),
  support: icon('ic_support'),
  registration: icon('ic_registration'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // DASHBOARD
      // ----------------------------------------------------------------------
      {
        subheader: 'Overview',
        items: [
          {
            title: 'dashboard',
            path: paths.dashboard.root,
            icon: <Iconify icon="solar:home-angle-2-outline" width={24} />,
          },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: 'management',
        items: [
          {
            title: 'subscriptions',
            path: paths.dashboard.subscriptions.root,
            icon: ICONS.subscription,
          },
          {
            title: 'payments',
            path: paths.dashboard.payments.root,
            icon: ICONS.payment,
          },
          {
            title: 'support projects',
            path: paths.dashboard.donations.root,
            icon: ICONS.support,
          },
          // { title: 'users', path: paths.dashboard.organization.users, icon: ICONS.user },
          // { title: 'roles', path: paths.dashboard.organization.roles, icon: ICONS.lock },
          {
            title: 'domain registrations',
            path: paths.dashboard.domainRegistrations.root,
            icon: ICONS.registration,
          },
        ],
      },
    ],
    []
  );

  return data;
}
