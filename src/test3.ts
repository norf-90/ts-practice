interface Payload {
  sum: number;
  from: number;
  to: number;
}

interface DataSuceess extends Payload {
  databaseId: number;
}
interface DataFailed {
  errorMessage: string;
  errorCode: number;
}

enum PaymentStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
}

// interface Responce {
//   status: PaymentStatus;
//   data: DataFailed | DataSuceess;
// }

interface IResponseSuccess {
  status: PaymentStatus.SUCCESS;
  data: DataSuceess;
}
interface IResponseFailed {
  status: PaymentStatus.FAILED;
  data: DataFailed;
}

// ----------------------------------------------------------

const payload: Payload = {
  sum: 10000,
  from: 2,
  to: 4,
};

const successResponce: IResponseSuccess = {
  status: PaymentStatus.SUCCESS,
  data: {
    databaseId: 567,
    sum: 10000,
    from: 2,
    to: 4,
  },
};

const failedResponce: IResponseFailed = {
  status: PaymentStatus.FAILED,
  data: {
    errorMessage: 'Недостаточно средств',
    errorCode: 4,
  },
};
