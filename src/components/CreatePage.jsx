import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function CreatePage() {
    const navigate = useNavigate()
    return <>
    <Button onClick={()=>navigate("/")}>Go to Home</Button>
    </>
}

export { CreatePage };