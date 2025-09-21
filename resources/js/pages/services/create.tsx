import { create, index, store } from '@/actions/App/Http/Controllers/Services/ServiceController';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

interface ServiceFormData {
    title: string;
    description: string;
    icon: File | null;
    is_premium: boolean;
}
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import clsx from 'clsx';
import { ArrowLeft } from 'lucide-react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Services',
        href: index().url,
    },
    {
        title: 'Create',
        href: create().url,
    },
];
export default function CreateService() {
    const { data, setData, post, processing, errors, reset } = useForm<ServiceFormData>({
        title: '',
        description: '',
        icon: null,
        is_premium: false,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(store().url, {
            forceFormData: true,
            onSuccess: () => reset(), // Clear form after success
        });
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Service" />
            <section className="bg-sidebar-bg p-4">
                <Card className="rounded">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Create Service</h2>
                            <Link
                                href={index().url}
                                className="btn btn-primary flex items-center rounded-md bg-primary px-4 py-1.5 text-primary-foreground hover:bg-primary/90"
                            >
                                <ArrowLeft className="mr-2 size-4" />
                                Back
                            </Link>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {/* Title */}
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        value={data.title}
                                        className={clsx('rounded',errors.title ? 'border-red-500' : '')}
                                        placeholder="Enter Service Title"
                                        onChange={(e) => setData('title', e.target.value)}
                                    />
                                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                                </div>

                                {/* Icon Upload */}
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="icon">Icon</Label>
                                    <Input
                                        id="icon"
                                        type="file"
                                        className={clsx('rounded',errors.icon ? 'border-red-500' : '')}
                                        onChange={(e) => setData('icon', e.target.files ? e.target.files[0] : null)}
                                    />
                                    {errors.icon && <p className="text-red-500">{errors.icon}</p>}
                                </div>

                                {/* Description */}
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={data.description}
                                        className={clsx('rounded', errors.description && 'border-red-500')}
                                        placeholder="Enter Service Description"
                                        rows={6}
                                        onChange={(e) => setData('description', e.target.value)}
                                    />
                                    {errors.description && <p className="text-red-500">{errors.description}</p>}
                                </div>

                                {/* Is Premium */}
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="is_premium"
                                        checked={data.is_premium}
                                        onCheckedChange={(checked) => setData('is_premium', checked === true)}
                                    />
                                    <Label htmlFor="is_premium">Premium Service</Label>
                                    {errors.is_premium && <p className="text-red-500">{errors.is_premium}</p>}
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="mt-4">
                                <Button disabled={processing}>{processing ? 'Creating...' : 'Create'}</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </section>
        </AppLayout>
    );
}
