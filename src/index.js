import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail name="John" time="Today at 6:00pm" post="nice blog post!" avatar={faker.image.image()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail name="Scuba Steve" time="Today at 6:01pm" post="I know it bruv" avatar={faker.image.image()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail name="jane" time="Today at 6:05pm" post="Nerds" avatar={faker.image.image()} />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
