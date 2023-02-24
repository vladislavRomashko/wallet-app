import React from 'react'

const Footer = () => {
    return (
        <footer
            className="footer mt-auto w-100 p-3 text-emphasis-success d-flex bg-light  "
            // style={{ backgroundColor: '#9cdbcc' }}
        >
            <div className="flex-grow-1 text-center fw-semibold ">
                <div className="fs-2 mt-2">Wallet App</div>
                <div className="fs-6 mt-2">2023</div>
            </div>
            <div>
                <div className="flex-shrink-1 text-center me-4">
                    <span className="m-2 fs-3">
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                    </span>
                    <span className="m-2 fs-3">
                        <a
                            href="https://github.com/vladislavRomashko"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-github"></i>
                        </a>
                    </span>
                    <span className="m-2 fs-3">
                        <a
                            href="https://web.telegram.org/k/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-telegram"></i>
                        </a>
                    </span>
                    <div>
                        <div className="mt-2 mb-2 fs-5">Vladislav Romashko</div>
                        <div>
                            <a
                                href="tel:+380962580851"
                                className="text-decoration-none"
                            >
                                +38 096 258-08-51
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
