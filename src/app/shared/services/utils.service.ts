
export class UtilsService {

  static getCurrentDate(): string {
    const date = new Date();
    const dayStr = date.getDate() < 9 ? `0${date.getDate()}` : String(date.getDate());
    const month = date.getMonth() + 1;
    const monthStr = month < 9 ? `0${month}` : String(month);
    return `${dayStr}-${monthStr}-${date.getFullYear()}`;
  }

}
