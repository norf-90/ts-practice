// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
// printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
// выводящий сначала дату, а потом заданное сообщение

abstract class Logger {
  abstract log(message: string): void;
  logWithDate(message: string): void {
    console.log(new Date());
    this.log(message);
  }
  printDate(date: Date) {
    console.log(date.toString());
  }
}

class UserLogger extends Logger {
  log(message: string): void {
    console.log(message);
  }
  logWithDate(message: string): void {
    this.printDate(new Date());
    this.log(message);
  }
}
