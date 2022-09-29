import { useLottie } from "lottie-react";

interface IDefault {
    data: object;
    loop?: boolean;
    autoplay?: boolean;
}
export const LottieOptions = ({
    data,
    loop = true,
    autoplay = true,
}: IDefault) => {
    const options = {
        animationData: data,
        loop: loop,
        autoplay: autoplay,
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};
