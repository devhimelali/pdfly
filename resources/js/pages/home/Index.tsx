import Wrapper from '@/components/wrapper';
import FrontendLayout from '@/layouts/frontend-layout';
import Hero from '@/components/hero';
import Services from '@/components/services';

export default function Home() {
    return (
        <FrontendLayout title="Online PDF tools" footer={true}>
            <Wrapper className="max-w-screen-xl sm:py-8">
                <Hero/>
                {/*<Services/>*/}
            </Wrapper>
        </FrontendLayout>
    );
}
