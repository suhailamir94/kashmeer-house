import prismadb from '@/lib/prismadb';
import React from 'react';

interface DashbboardPageProps {
    params: { storeId: string }
};

const DashboardPage: React.FC<DashbboardPageProps> = async ({ params }) => {
    const store = await prismadb.store.findFirst({ where: { id: params.storeId } })

    return (
        <div>Active Store: {store?.name}</div>
    )
}

export default DashboardPage;