import { connect } from 'react-redux';
import { getTransactions } from '../ducks/actions';
import List from '../components/List';

const mapStateToProps = state => ({
  address: state.address,
  loading: state.loading,
  page: state.page,
});

const mapDispatchToProps = {
  getTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
