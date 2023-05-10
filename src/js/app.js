export default function healthStatusBar(healthStatus) {
    if (healthStatus > 50) return 'healthy';
    if (healthStatus >= 15 && healthStatus <= 50) return 'wounded';
    if (healthStatus > 0 && healthStatus < 15) return 'critical';
    return 'out of range';
  }