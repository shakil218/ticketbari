import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import React from 'react';

const layout = ({children}) => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default layout;