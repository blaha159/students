import moment from 'moment'

export function getMomentDate(value, unit = 'day', format = 'YYYY-MM-DD') {
  if (value > 0)
    return moment().add(value, unit).format(format);
  else 
    return moment().subtract(-1 * value, unit).format(format);
}

export function getDefaultDeliveryHour() {
  return Number(getMomentDate(2, "hour", "k"));
}

export function getDefaultDeliveryDay() {
  return Number(getMomentDate(2, "hour"));
}

