import { withSessionRoute } from "lib/session";

interface IProps {
  id: string;
}
const SingleAccountPage: React.FC<IProps> = ({ id }) => {
  return (
    <div className="singleAccountPage">
      <p>single account page</p>
    </div>
  );
};

export default SingleAccountPage;
