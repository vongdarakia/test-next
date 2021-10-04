import { Image } from "../components/Image";
import { MainLayout } from "../components/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <Image
                src={"/images/random-picture.jpeg"}
                alt="Random image"
                width={300}
                height={300}
            />
        </MainLayout>
    );
}
