import React from 'react';
import Link from '@docusaurus/Link';

const NotFoundContent: React.FC = () => {
    return (
        <main className="container margin-vert--xl">
            <div className="row">
                <div className="col col--8 col--offset-2">
                    <h1>404 - Outside the evidence boundary</h1>
                    <p>
                        The requested page is not part of the canonical scope.
                        Return to a defined entry point or navigate to the reference materials.
                    </p>
                    <div className="margin-top--md">
                        <div className="row">
                            <div className="col col--6 margin-bottom--sm">
                                <Link className="button button--primary button--block" to="/">
                                    Home
                                </Link>
                            </div>
                            <div className="col col--6 margin-bottom--sm">
                                <Link className="button button--secondary button--block" to="/docs/canon/_intro">
                                    Canon
                                </Link>
                            </div>
                            <div className="col col--6 margin-bottom--sm">
                                <Link
                                    className="button button--secondary button--block"
                                    to="/docs/canon/definitions"
                                >
                                    Definitions
                                </Link>
                            </div>
                            <div className="col col--6 margin-bottom--sm">
                                <Link className="button button--secondary button--block" to="/docs/meta/references">
                                    References
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NotFoundContent;
