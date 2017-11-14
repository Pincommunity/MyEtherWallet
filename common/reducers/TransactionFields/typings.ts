import {
  SetToFieldAction,
  SetDataFieldAction,
  SetNonceFieldAction,
  SetValueFieldAction,
  SetGasLimitFieldAction
} from 'actions/transactionFields';

export interface State {
  to: SetToFieldAction['payload'];
  data: SetDataFieldAction['payload'];
  nonce: SetNonceFieldAction['payload'];
  value: SetValueFieldAction['payload'];
  gasLimit: SetGasLimitFieldAction['payload'];
}
