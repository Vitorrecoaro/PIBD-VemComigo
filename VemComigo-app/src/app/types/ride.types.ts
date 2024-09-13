export type Driver = {
  name: string;
  rating: number;
};

export type Ride = {
  date: Date;
  value: number;
  initialPoint: string;
  initialPointTime: string;
  finalPoint: string;
  finalPointTime: string;
  driver: Driver;
};
