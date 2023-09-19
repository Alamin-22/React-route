import PropTypes from 'prop-types';
import Features from '../Features/Features';


const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className=' bg-blue-500 flex flex-col  text-white rounded-lg'>
            <h1 className='mt-4 text-center font-extrabold'>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/month</span>
            </h1>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='mb-5 flex-grow '>
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }

            </div>
            <button className='btn btn-primary  my-5 w-full'>Purchase Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired,
}
export default PriceOption;