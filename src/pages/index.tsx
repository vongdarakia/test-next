import { Image } from "../components/common/Image";
import { MainLayout } from "../components/common/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <Image src={"/random-picture.jpeg"} alt="Random image" width={300} height={300} />
        </MainLayout>
    );
}
