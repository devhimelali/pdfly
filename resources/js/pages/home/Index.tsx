import Wrapper from '@/components/wrapper';
import FrontendLayout from '@/layouts/frontend-layout';
import Hero from '@/components/hero';
import Services from '@/components/services';
type Services = {
    title: string;
    description: string;
    icon: string | undefined;
    link: string;
    isPremium: boolean;
};
export default function Home({services}: {services: Services[]}) {
    return (
        <FrontendLayout title="Online PDF tools" footer={true}>
            <Wrapper className="max-w-screen-xl sm:py-8 flex flex-col gap-8">
                <Hero/>
                <Services services={services} />
            </Wrapper>
        </FrontendLayout>
    );
}
