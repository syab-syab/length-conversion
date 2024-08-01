// 第一引数でどの単位を変換するか
// ["mm", "cm", "m", "km", "インチ"]
// 第二引数で変換する値

const centimeter = (unit: number, value: string): number => {
  // 1cmは
  // 10mm(1 * 10)
  // 0.01m(1 / 100)
  // 0.00001km(1 / 100,000)
  // 0.39370079インチ(1 / 2.54)

  switch (unit){
    // mm
    case 0:
      return Number(value) / 10
    // cm
    case 1:
      return Number(value)
    // m
    case 2:
      return Number(value) * 100
    // km
    case 3:
      return Number(value) * 100000
    // インチ
    case 4:
      return Number(value) * 2.54
    default:
      return 0
  }
}

export default centimeter