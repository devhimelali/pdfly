import { create, index } from '@/actions/App/Http/Controllers/Services/ServiceController';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { asset } from '@/lib/utils';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Services',
        href: index().url,
    },
];

type Services = {
    id: number;
    title: string;
    description: string;
    icon: string;
    is_premium: boolean;
    created_at: string;
    updated_at: string;
}

export default function Services({services}: {services: Services[]}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Services" />
            <section className="bg-sidebar-bg p-4">
                <Card className="rounded p-6">
                    <CardTitle>
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold">All Services</h1>
                            <Link
                                href={create().url}
                                className="btn btn-primary bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/80 flex items-center rounded-md px-4 py-1.5"
                            >
                                <Plus className="mr-2 size-4" />
                                Add New
                            </Link>
                        </div>
                    </CardTitle>
                    <CardContent className="mt-4 p-0">
                        <div className="overflow-x-auto rounded shadow">
                            <table className="min-w-full border border-gray-200 text-sm text-left">
                                <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                                <tr>
                                    <th className="px-4 py-3">Title</th>
                                    <th className="px-4 py-3">Icon</th>
                                    <th className="px-4 py-3">Description</th>
                                    <th className="px-4 py-3">Created At</th>
                                    <th className="px-4 py-3">Updated At</th>
                                    <th className="px-4 py-3 text-center">Action</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {services.map((service) => (
                                    <tr key={service.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 font-medium text-gray-900">{service.title}</td>
                                        <td className="px-4 py-3">
                                            {service.icon && (
                                                <img
                                                    src={asset(`uploads/services/${service.icon}`)}
                                                    alt={service.title}
                                                    className="w-10 h-10 rounded-full object-cover border"
                                                />
                                            )}
                                        </td>
                                        <td className="px-4 py-3 text-gray-700 max-w-xs truncate">
                                            {service.description}
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">
                                            {new Date(service.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">
                                            {new Date(service.updated_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            {/* Replace with buttons/links later */}
                                            <button className="text-blue-600 hover:underline">Edit</button>
                                            <button className="text-red-600 hover:underline ml-2">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                    </CardContent>
                </Card>

            </section>
        </AppLayout>
    );
}
