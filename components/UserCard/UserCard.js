import Image from "next/image";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Image src={user.image} width={100} height={100} alt="user-image" />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <h3>Name: {user.firstName} {user.lastName}</h3>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-12">
                <strong>Email:</strong>
                <span>{user.email}</span>
              </div>
              <div className="col-12">
                <strong>Company:</strong>
                <span>{user.company.title}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <strong>Phone:</strong>
                {user.phone}
              </div>
              <div className="col-12">
                <span>
                  <strong>Gender:</strong>
                  <span>{user.gender}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
