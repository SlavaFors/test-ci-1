export default function healthBarArr(obj) {
  obj.sort((a, b) => b.health - a.health);
  return obj;
}