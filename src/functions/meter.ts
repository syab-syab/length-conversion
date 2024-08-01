// 第一引数でどの単位を変換するか
// ["mm", "cm", "m", "km", "インチ"]
// 第二引数で変換する値

const meter = (unit: number, value: string): number => {
  // 1mは
  // 1000mm(1 * 1,000)
  // 100cm(1 * 100)
  // 0.001km(1 / 1,000)
  // 39.37007874インチ(1 * 39.37)

  switch (unit){
    // mm
    case 0:
      return Number(value) / 1000
    // cm
    case 1:
      return Number(value) / 100
    // m
    case 2:
      return Number(value)
    // km
    case 3:
      return Number(value) * 1000
    // インチ
    case 4:
      return Number(value) / 39.37
    default:
      return 0
  }
}

export default meter