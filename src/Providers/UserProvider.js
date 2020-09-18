import React, { Component, createContext } from "react";
import { auth, createOrGetUseProfileDocument } from "../firebase";

const initialUserState = { user: null, loading: true };

export const UserContext = createContext(initialUserState);
class UserProvider extends Component {
  state = initialUserState;

  componentDidMount = async () => {
    //we will fired it whenever we go to login to logout state and
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createOrGetUseProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            user: { uid: snapshot.id, ...snapshot.data() },
            loading: false,
          });
        });
      }
      this.setState({ user: userAuth, loading: false });
    });
  };

  render() {
    const { user, loading } = this.state;
    const { children } = this.props;
    return (
      <UserContext.Provider value={{ user, loading }}>
        {children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
