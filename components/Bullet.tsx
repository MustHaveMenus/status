export interface BulletProps {
  type: string;
}

export function Bullet({type}: BulletProps) {
  return <span className={`bullet ${type}`} />;
}
