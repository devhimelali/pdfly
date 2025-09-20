import { ImgHTMLAttributes } from "react";
import { asset } from '@/lib/utils'

export default function ApplicationLogo(
    props: ImgHTMLAttributes<HTMLImageElement>,
) {
    return <img src={asset('assets/images/logo.png')} alt="" {...props} />;
}
