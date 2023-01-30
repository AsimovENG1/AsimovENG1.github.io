import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faJava } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Asimov</title>
      </Head>

      <h2>Downloads</h2>

      <div className='row'>

        <div className='col-md-4'>
          <div className="card border-primary">
            <div className="card-body">
              <h4>PLAY</h4>
              <a href='https://drive.google.com/file/d/1jjpdqZm1rU51aOqnnv6CKCt6VmMlcOWZ/view?usp=share_link' className='btn btn-primary'>
                <FontAwesomeIcon icon={faJava} />
                {' '}
                PiazzaPanic.jar
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <h4>Source Code</h4>
          <a rel='noreferrer' href="https://github.com/AsimovENG1/GameCode" className='btn btn-primary mb-3' target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            {' '}
            Github
          </a>
          <br />
          <a href='https://drive.google.com/file/d/1HLzNLDjZYZXLXJFEeC5WEAdto9sM0_GO/view?usp=share_link' className='btn btn-secondary mb-3'>
            Documentation
            {' '}
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>

        <div className='col-md-4'>
          <h4>Documents</h4>
          <ul>
            <li>
              <a href='https://drive.google.com/file/d/19753uMbMvUD8bxF1KsE7Tjzo_xMqDd0q/view?usp=share_link'>Req1.pdf</a>
              {' '}
              <FontAwesomeIcon icon={faFilePdf} />
            </li>
            <li>
              <a href='https://drive.google.com/file/d/1XHyvZxBOA5GMm15goPQoVu4cuNvegOdy/view?usp=share_link'>Plan1.pdf</a>
              {' '}
              <FontAwesomeIcon icon={faFilePdf} />
            </li>
            <li>
              <a href='https://drive.google.com/file/d/11YUerrYto9X8QjP1jTdHJ-JHQSgZqqsQ/view?usp=share_link'>Arch1.pdf</a>
              {' '}
              <FontAwesomeIcon icon={faFilePdf} />
            </li>
            <li>
              <a href='https://drive.google.com/file/d/1Mvaxbu7lB7RBoYnONKEf73wOG9OK49_u/view?usp=share_link'>Risk1.pdf</a>
              {' '}
              <FontAwesomeIcon icon={faFilePdf} />
            </li>
            <li>
              <a href='https://drive.google.com/file/d/1s0nRBctoR7kGC52wyWeB5Y_2_TITGASa/view?usp=share_link'>Impl1.pdf</a>
              {' '}
              <FontAwesomeIcon icon={faFilePdf} />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
