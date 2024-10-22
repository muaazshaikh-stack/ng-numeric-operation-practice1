export class Utils {
  public static isNullOrUndefiend(value: any): boolean {
    return value === null || value === undefined;
  }

  public static notNullAndUndefiend(value: any): boolean {
    return !Utils.isNullOrUndefiend(value);
  }

  public static isIntergerNumber(value: any): boolean {
    if (Utils.notNullAndUndefiend(value)) {
      return Number.isInteger(value);
    }

    return false;
  }
}
