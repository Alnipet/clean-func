/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
export default function playerHealtStatus(options) {
  if (options.health > 50) {
    return 'healthy';
  } else if (options.health <= 50 && options.health >= 15) {
    return 'wounded';
  } else if (options.health < 15) {
    return 'critical';
  }
}
