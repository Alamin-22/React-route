import { IoMdCheckmarkCircle } from 'react-icons/io';
import PropTypes from 'prop-types';
const Features = ({ feature }) => {
    return (
        <div>
            <p className='flex gap-2'>
                <IoMdCheckmarkCircle className='text-2xl text-green-400 ml-4'></IoMdCheckmarkCircle>{feature}
            </p>
            
        </div>
    );
};

Features.propTypes={
    feature: PropTypes.object.isRequired,
}

export default Features;