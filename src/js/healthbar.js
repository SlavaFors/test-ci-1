export default function healthBar(obj) {
  if (obj.health >= 50) {
    return 'healty';
  }
  if (obj.health < 50 && obj.health > 15) {
    return 'wounded';
  }
  if (obj.health < 15) {
    return 'critical';
  }
  return 0;
}