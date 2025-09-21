import ServiceCard from '@/components/ServiceCard';

type Services = {
    title: string;
    description: string;
    icon: string | undefined;
    link: string;
    isPremium: boolean;
};
export default function Services({ services }: { services: Services[] }) {
    // const services: Services[] = [
    //     {
    //         title: 'Merge PDF',
    //         description: 'Combine PDFs in the order you want with the easiest PDF merger available.',
    //         icon: asset('assets/images/merge-pdf.svg'),
    //         link: 'link',
    //         isPremium: false,
    //     },
    //     {
    //         title: 'Split PDF',
    //         description: 'Separate one page or a whole set for easy conversion into independent PDF files.',
    //         icon: asset('assets/images/split-pdf.svg'),
    //         link: '',
    //         isPremium: false,
    //     },
    //     {
    //         title: 'PDF to JPG',
    //         description: 'Convert each page of PDF into a JPG image.',
    //         icon: asset('assets/images/pdf-to-jpg.svg'),
    //         link: '',
    //         isPremium: false,
    //     },
    //     {
    //         title: 'JPG to PDF',
    //         description: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins.',
    //         icon: asset('assets/images/jpg-to-pdf.svg'),
    //         link: '',
    //         isPremium: false,
    //     },
    //     {
    //         title: 'Rotate PDF',
    //         description: 'Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once.',
    //         icon: asset('assets/images/rotate-pdf.svg'),
    //         link: '',
    //         isPremium: false,
    //     },
    //     {
    //         title: 'Compress PDF',
    //         description: 'Reduce file size while optimizing for maximal PDF quality.',
    //         icon: asset('assets/images/compress-pdf.svg'),
    //         link: '',
    //         isPremium: false,
    //     },
    //     {
    //         title: 'Word to PDF',
    //         description: 'Make DOC and DOCX files easy to read by converting them to PDF.',
    //         icon: asset('assets/images/word-to-pdf.svg'),
    //         link: '',
    //         isPremium: false,
    //     },
    //     {
    //         title: 'Powerpoint to PDF',
    //         description: 'Make PPT and PPTX slideshows to view by converting them to PDF.',
    //         icon: asset('assets/images/powerpoint-to-pdf.svg'),
    //         link: '',
    //         isPremium: false,
    //     },
    // ];
    return (
        <>
            <div className="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service) => (
                    <ServiceCard service={service} key={service.id} />
                ))}
            </div>
        </>
    );
}
