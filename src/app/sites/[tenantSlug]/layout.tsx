// This layout wraps the client's generated website.
import { ReactNode } from 'react';

export default function TenantLayout({ children, params }: { children: ReactNode, params: { tenantSlug: string } }) {
  // In a real app, we would fetch the tenant's global settings (font, themeColor) from the database using `params.tenantSlug`.
  // For now, we use default styles that can be overridden by inline styles.
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {children}
    </div>
  );
}
