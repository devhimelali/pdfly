import { Card, CardContent } from '@/components/ui/card';
import { asset } from '@/lib/utils';

type Service = {
    id: number;
    title: string;
    description: string;
    icon: string;
    is_premium: boolean;
};
export default function ServiceCard({ service }: { service: Service }) {
    return (
        <Card className="relative flex flex-col gap-2 rounded-lg border-2 border-transparent bg-background p-4 text-center shadow transition-all outline-none hover:scale-105 hover:border-red focus:scale-105 focus:border-red lg:max-w-xs dark:bg-secondary dark:shadow-black/25">
            <CardContent className="mx-auto">
                <img src={asset(`uploads/services/${service.icon}`)} alt="" />
            </CardContent>
            <h5 className="text-xl font-semibold">{service.title}</h5>
            <p className="text-sm text-foreground/60">{service.description}</p>
            {
                service.is_premium ? <span className="absolute top-2 right-2 border border-red-500 text-xs font-semibold text-red-600 px-2 py-0.5 rounded">Upgrade</span> : ''
            }
        </Card>
    );
}
