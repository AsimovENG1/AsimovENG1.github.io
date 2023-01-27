import Image from "next/image";

import banner from "@/public/img/banner.svg"
import { Main } from "next/document";

export default function Layout() {
    return (
        <>
            <div className="d-flex flex-column mh-vh">
                <div className="flex-shrink-0 text-center">
                    <header className="bg-asimov">
                        <Image className="py-5" src={banner} alt="Asimov" />
                    </header>

                    <hr className="gradient mb-3" />

                    <main className="container-fluid">
                        <div className="row">
                            <div className="col-md-2"></div>

                            <div className="col-md-8">
                                <Main />
                            </div>

                            <div className="col-md-2 p-0"></div>
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