import { Link } from "react-router-dom";
import Button from "./Button";

const BackButton = () => (
  <div className="mt-4">
    <Link to="/">
      <Button>Back to Home</Button>
    </Link>
  </div>
);

export default BackButton;