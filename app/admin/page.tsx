'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  useEffect(() => {
    // Redirect to static CMS entry point
    window.location.href = '/admin/index.html';
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-rose-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-neutral-600">Loading Content Manager...</p>
      </div>
    </div>
  );
}
