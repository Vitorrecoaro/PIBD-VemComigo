export type User = {
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
  driver: User;
};

export type RideFilters = {
  date: Date;
  initialPoint: string;
  finalPoint: string;
};

export type Car = {
  name: string;
  carSign: string;
};
