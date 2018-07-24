import { connect } from 'react-redux';
import { updateAddress, getTransactions } from '../ducks/actions';
import Search from '../components/Search';

const mapStateToProps = state => (
  {
    loading: state.loading,
    page: state.page,
    address: state.address,
  }
);

const mapDispatchToProps = {
  getTransactions,
  updateAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
