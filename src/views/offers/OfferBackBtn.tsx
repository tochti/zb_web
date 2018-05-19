import React from 'react';
import './OfferBackBtn.css';

import icon from '../../images/back.svg';
import { Link } from 'react-router-dom';

interface Props {
    to: string;
}

function OfferBackBtn({ to }: Props) {
    return (
        <Link to={to}>
            <img src={icon} />
        </Link>
    );
}
export default OfferBackBtn;
