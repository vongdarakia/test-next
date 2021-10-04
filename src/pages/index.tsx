import Image from "next/image";
import { MainLayout } from "../components/MainLayout";
import { imageLoader } from "../utils/imageLoader";

export default function Home() {
    return (
        <MainLayout>
            <Image
                loader={imageLoader}
                src={"/images/random-picture.jpeg"}
                alt="Random image"
                width={300}
                height={300}
            />
        </MainLayout>
    );
}
