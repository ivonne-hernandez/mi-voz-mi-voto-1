import "./MainContainer.css";
import EmailNotificationForm from "../EmailNotificationForm/EmailNotificationForm";

const MainContainer = ({ postNewEmailSubscriber }) => {
  return (
    <main className="main-container">
      <EmailNotificationForm postNewEmailSubscriber={postNewEmailSubscriber} />
    </main>
  );
}
export default MainContainer;