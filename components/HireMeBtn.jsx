import Link from "next/link";
import { Button } from "./ui/button";
import MotionBtn from "./MotionBtn";

const HireMeBtn = () => {
    return (
        <Link href="/contact">
            <MotionBtn>
                <Button>
                    Hire me
                </Button>
            </MotionBtn>
        </Link>
    );
}

export default HireMeBtn;