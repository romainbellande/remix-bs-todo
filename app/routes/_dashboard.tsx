import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import { AppShell } from "~/components/app-shell";
import { Layout } from "~/components/custom/layout";
import { Search } from "~/components/search";
import ThemeSwitch from "~/components/theme-switch";
import { TopNav } from "~/components/top-nav";
import { UserNav } from "~/components/user-nav";
import { requireUserId } from "~/session.server";

const topNav = [
  {
    title: 'Overview',
    href: 'dashboard/overview',
    isActive: true,
  },
  {
    title: 'Customers',
    href: 'dashboard/customers',
    isActive: false,
  },
  {
    title: 'Products',
    href: 'dashboard/products',
    isActive: false,
  },
  {
    title: 'Settings',
    href: 'dashboard/settings',
    isActive: false,
  },
]

export default function Dashboard() {
    return (
      <AppShell>
        <Layout>
            <Layout.Header>
                <TopNav links={topNav} />
                <div className='ml-auto flex items-center space-x-4'>
                  <Search />
                  <ThemeSwitch />
                  <UserNav />
                </div>
            </Layout.Header>
            <Layout.Body>
                <Outlet />
            </Layout.Body>
        </Layout>
      </AppShell>
    )
}

export const loader = async ({ request }: LoaderFunctionArgs)  => {
    const user = await requireUserId(request);

    return { user }
}