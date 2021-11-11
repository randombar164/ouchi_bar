import PropTypes from 'prop-types';

const Result = (result:any) => {return (
    <li>
        {result.codeResult.code} [{result.codeResult.format}]
    </li>
)};

Result.propTypes = {
    result: PropTypes.object
};

export default Result;