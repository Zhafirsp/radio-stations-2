import { Link, useNavigate } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };
  return (
    <section className='not-found text-center justify-center items-center'>
      <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
      <h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
      <p className='text-xl mb-5'>This page does not exist</p>
      <Link>
        <Button
        variant="outline-dark"
        className='rounded-pill px-3 py-2'
        onClick={goBack}
        >
          
            Go Back
        </Button>
      </Link>
    </section>
  );
};
export default NotFoundPage;
