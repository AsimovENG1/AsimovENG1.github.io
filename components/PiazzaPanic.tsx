import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faJava } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

function PiazzaPanic() {
    return (
        <>
            <h2 className="display-3">Piazza Panic</h2>

            <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-6">
                    <p>It seems to be a quiet day at the Piazza: there aren't that many students and staff around
                        this time of the year, so most of the kitchen staff are away on leave - you only have three
                        cooks. Suddenly, a crowd bursts into the restaurant: it's an open day, and they all want to eat
                        at once! Make the most of your kitchen and your staff, and face up to the challenge of
                        serving an impatient and demanding crowd!</p>
                </div>

                <div className="col-md-3"></div>
            </div>

            <hr />

            <div className="card">
                <h3 className="card-header">Downloads</h3>
                <div className="card-body">
                    <div className='row'>

                        <div className='col-md-4'>
                            <div className="card border-primary">
                                <div className="card-body">
                                    <h4>PLAY</h4>
                                    <a href='#' className='btn btn-primary'>
                                        <FontAwesomeIcon icon={faJava} />
                                        {' '}
                                        PiazzaPanic.jar
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <h4>Source Code</h4>
                            <a href="#" className='btn btn-primary' target="_blank">
                                <FontAwesomeIcon icon={faGithub} />      
                                {' '}                  
                                Github
                            </a>
                        </div>

                        <div className='col-md-4'>
                            <h4>Documents</h4>
                            <ul>
                                <li>
                                    <a href='#'>Req1.pdf</a>
                                    {' '}
                                    <FontAwesomeIcon icon={faFilePdf} />
                                </li>
                                <li>
                                    <a href='#'>Plan1.pdf</a>
                                    {' '}
                                    <FontAwesomeIcon icon={faFilePdf} />
                                </li>
                                <li>
                                    <a href='#'>Arch1.pdf</a>
                                    {' '}
                                    <FontAwesomeIcon icon={faFilePdf} />
                                </li>
                                <li>
                                    <a href='#'>Risk1.pdf</a>
                                    {' '}
                                    <FontAwesomeIcon icon={faFilePdf} />
                                </li>
                                <li>
                                    <a href='#'>Impl1.pdf</a>
                                    {' '}
                                    <FontAwesomeIcon icon={faFilePdf} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PiazzaPanic;