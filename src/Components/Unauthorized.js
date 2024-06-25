import { Link, useNavigate } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Button } from "react-bootstrap";

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Kembali ke halaman sebelumnya
      };

    return (
        <section className='not-found text-center justify-center items-center '>
            <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
             <h1 className='text-6xl font-bold mb-4'>401 Unauthorized</h1>
             <p className='text-xl mb-5'>You do not have access to the requested page</p>
             <Button
                variant="outline-dark"
                onClick={goBack}
                >
                    <Link
                    className='rounded-md px-3 py-2 mt-4'
                    >
                    Go Back
                    </Link>
            </Button>
        </section>
    )
}

export default Unauthorized