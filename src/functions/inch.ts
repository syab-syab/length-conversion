// 第一引数でどの単位を変換するか
// ["mm", "cm", "m", "km", "インチ"]
// 第二引数で変換する値

const inch = (unit: number, value: string): number => {
  // 1インチは
  // 25.4mm(1 * 25.4)
  // 2.54cm(1 * 2.54)
  // 0.0254m(1 / 39.37)
  // 0.0000254km(1 / 39370)

  switch (unit){
    // mm
    case 0:
      return Number(value) / 25.4
    // cm
    case 1:
      return Number(value) / 2.54
    // m
    case 2:
      return Number(value) * 39.37 
    // km
    case 3:
      return Number(value) * 39370
    // インチ
    case 4:
      return Number(value)
    default:
      return 0
  }
}

export default inch