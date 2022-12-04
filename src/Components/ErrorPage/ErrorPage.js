import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <section className="error-page-view">
            <Nav />
            <section className="error-elements-box">
                <img 
                    src="/images/errorCloud.png" 
                    alt="sad cloud cartoon"
                    className="error-img"
                />
                <h1>Sorry, the page you are looking for does not exist. 
                    <br />
                    <Link to="/">Home</Link>
                </h1>
            </section>
        </section>
    )
}

export default ErrorPage;