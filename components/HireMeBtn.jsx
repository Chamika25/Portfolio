import { Button } from "./ui/button";
import MotionBtn from "./MotionBtn";

const HireMeBtn = ({onNavigate}) => {
    return (
        <div onClick={() => onNavigate("service")}>
            <MotionBtn>
                <Button>
                    Hire me
                </Button>
            </MotionBtn>
        </div>
    );
}

export default HireMeBtn;