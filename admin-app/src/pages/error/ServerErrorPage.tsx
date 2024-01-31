import { useAuth } from '@providers/authProvider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ServerErrorPage = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    signOut();
    navigate('/sign-in');
  }, []);

  const redirectSignIn = () => {
    signOut();
    navigate('/sign-in');
  };

  return (
    <div>
      <p>Server Error</p>
      <div>
        <button type={'button'} onClick={redirectSignIn}>
          HOME
        </button>
      </div>
    </div>
  );
};
