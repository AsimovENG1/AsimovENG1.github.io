import Image from "next/image";

import banner from "@/public/img/banner.svg"
import { Main } from "next/document";
import { usePathname } from "next/navigation";

export default function Layout() {
    const pathname = usePathname();

    return (
        <>
            <div className="d-flex flex-column mh-vh">
                <div className="flex-shrink-0 text-center">
                    <header className="bg-asimov">
                        <a href="/">
                            <Image className="py-5" src={banner} alt="Asimov" />
                        </a>
                    </header>

                    <hr className="gradient mb-3" />

                    <main className="container-fluid">
                        <div className="row">
                            <div className="col-md-2"></div>

                            <div className="col-md-8">
                                <h2 className="display-3">Piazza Panic</h2>

                                <div className="row">
                                    <div className="col-md-3"></div>

                                    <div className="col-md-6">
                                        <p>It seems to be a quiet day at the Piazza: there aren&apos;t that many students and staff around
                                            this time of the year, so most of the kitchen staff are away on leave - you only have three
                                            cooks. Suddenly, a crowd bursts into the restaurant: it&apos;s an open day, and they all want to eat
                                            at once! Make the most of your kitchen and your staff, and face up to the challenge of
                                            serving an impatient and demanding crowd!</p>
                                    </div>

                                    <div className="col-md-3"></div>
                                </div>

                                <hr />

                                <div className='card mb-3'>
                                    <div className='card-header'>
                                        <ul className='nav nav-tabs card-header-tabs'>
                                            <li className='nav-item'>                                
                                                <a className={`nav-link ${pathname == '/' ? "active" : ""}`} href='/'>Downloads</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className={`nav-link ${pathname == '/architecture' ? "active" : ""}`} href='/architecture'>Architecture</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className={`nav-link ${pathname == '/proofofwork' ? "active" : ""}`} href='/proofofwork'>Proof of Work</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="card-body">
                                        <Main />
                                    </div>
                                </div>

                                <div className="col-md-2 p-0"></div>
                            </div>
                        </div>
                    </main>
                </div>

                <footer className="footer mt-auto text-center">
                    <hr className="gradient" />

                    <div className="bg-asimov text-light py-3">
                        <span>Copyright &copy; Asimov {new Date().getFullYear()}</span>
                    </div>
                </footer>
            </div>
        </>
    )
}