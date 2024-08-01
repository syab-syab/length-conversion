// 第一引数でどの単位を変換するか
// ["mm", "cm", "m", "km", "インチ"]
// 第二引数で変換する値

const millimeter = (unit: number, value: string): number => {
  // 1mmは
  // 0.1cm(1 / 10)
  // 0.001m(1 / 1,000)
  // 0.000001km(1 / 1,000,000)
  // 0.03937008インチ(1 / 25.4)

  switch (unit){
    // mm
    case 0:
      return Number(value)
    // cm
    case 1:
      return Number(value) * 10
    // m
    case 2:
      return Number(value) * 1000
    // km
    case 3:
      return Number(value) * 1000000
    // インチ
    case 4:
      return Number(value) * 25.4
    default:
      return 0
  }
}

export default millimeter