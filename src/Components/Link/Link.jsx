import PropTypes from 'prop-types';

const Link = ({rout}) => {
    return (
        <li className='px-5 hover:bg-red-400'><a href={rout.path}>{rout.name}</a></li>
    );
};

Link.propTypes={
    rout: PropTypes.object.isRequired,
}
export default Link;