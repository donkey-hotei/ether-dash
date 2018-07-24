import { connect } from 'react-redux';
import { updateMemo } from '../ducks/actions';
import MemoInput from '../components/MemoInput';

const mapDispatchToProps = {
  updateMemo,
};

export default connect(undefined, mapDispatchToProps)(MemoInput);
