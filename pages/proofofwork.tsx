import Head from "next/head";
import Image from "next/image";

import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

import nov1 from "@/public/img/gantt/2022-11-09.png"
import nov2 from "@/public/img/gantt/2022-11-16.png"
import nov3 from "@/public/img/gantt/2022-11-30.png"

import dec1 from "@/public/img/gantt/2022-12-08.png"
import dec2 from "@/public/img/gantt/2022-12-12.png"
import dec3 from "@/public/img/gantt/2022-12-20.png"
import dec4 from "@/public/img/gantt/2022-12-28.png"

import jan1 from "@/public/img/gantt/2023-01-16.png"
import jan2 from "@/public/img/gantt/2023-01-23.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProofOfWork() {

    return (
        <>
            <Head>
                <title>Proof of Work</title>
            </Head>

            <h2>Proof of Work</h2>

            <p>
                <a href="https://drive.google.com/file/d/1Bmoberba8C1pp-c9GfrQt1W9xof-lbSf/view?usp=share_link" className="btn btn-primary">                                
                    Download Logbook
                    {' '}
                    <FontAwesomeIcon icon={faFilePdf} />
                </a>
            </p>

            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">09/11/2022</h5>            
                    <Image src={nov1} alt="Gantt Chart 09/11/2022" className="img-fluid" />
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">16/11/2022</h5>
                    <Image src={nov2} alt="Gantt Chart 16/11/2022" className="img-fluid" />
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">30/11/2022</h5>
                    <Image src={nov3} alt="Gantt Chart 30/11/2022" className="img-fluid" />
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">08/12/2022</h5>
                    <Image src={dec1} alt="Gantt Chart 08/12/2022" className="img-fluid" />
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">12/12/2022</h5>
                    <Image src={dec2} alt="Gantt Chart 12/12/2022" className="img-fluid" />
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">20/12/2022</h5>
                    <Image src={dec3} alt="Gantt Chart 20/12/2022" className="img-fluid" />
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">28/12/2022</h5>
                    <Image src={dec4} alt="Gantt Chart 28/12/2022" className="img-fluid" />
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">16/01/2023</h5>
                    <Image src={jan1} alt="Gantt Chart 16/01/2023" className="img-fluid" />
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">23/01/2023</h5>
                    <Image src={jan2} alt="Gantt Chart 23/01/2023" className="img-fluid" />
                </div>
            </div>
        </>
    )
}