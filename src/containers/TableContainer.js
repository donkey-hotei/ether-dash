import { connect } from 'react-redux';
import Table from '../components/Table';

const mapStateToProps = state => ({
  transactions: state.transactions,
  memos: state.memos,
});

export default connect(mapStateToProps)(Table);
