import type {QuaggaJSResultObject} from '@ericblade/quagga2';
import PropTypes from 'prop-types';

const Result = (result:QuaggaJSResultObject) => {return (
    <li>
        {result.codeResult.code} [{result.codeResult.format}]
    </li>
)};

Result.propTypes = {
    result: PropTypes.object
};

export default Result;