import LoginDisplayColumn from "../LoginDisplayColumn/LoginDisplayColumn";
import LoginForm from "../LoginForm/LoginForm";

const LoginLayout = ({ children }) => {
  return (
    <div className="container-12 h-100vh">
      <div className="row h-100vh align-items-center">
        <div className="col-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="form-box">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <LoginDisplayColumn />
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
