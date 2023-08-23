// ====== Generics in types =======

{
  function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
  }
  function getSplittedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
  }
  const split: <T>(data: Array<T>) => Array<T> = getSplittedHalf;
  // --------------------------------------------
  interface ILogLine<T> {
    timeStamp: Date;
    data: T;
  }

  type LogLineType<T> = {
    timeStamp: Date;
    data: T;
  };

  const logline: LogLineType<{ a: number }> = {
    timeStamp: new Date(),
    data: {
      a: 1,
    },
  };
}

// ====== Function with generic ======
{
  function logMiddleware(data: any): any {
    console.log(data);
    return data;
  }
  function logMiddlewareGeneric<T>(data: T): T {
    console.log(data);
    return data;
  }

  const res = logMiddleware(10);
  const resWithGeneric = logMiddlewareGeneric<number>(10);
  const resWithGeneric2 = logMiddlewareGeneric<string>('str');

  // -------------------------------------------
  function getSplittedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
  }
  getSplittedHalf([1, 23, 3]);
}

// ====== built-in generic ======
{
  const num: Array<number> = [1, 2, 3];
  async function test() {
    const a = new Promise<number>((resolve, reject) => {
      resolve(1);
    });
  }

  const check: Record<string, boolean> = {
    drive: true,
    kpp: false,
  };
}
